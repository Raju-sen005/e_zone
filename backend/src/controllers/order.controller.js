const axios = require('axios');
const crypto = require('crypto');
const { v4: uuidv4 } = require('uuid');
const Transaction = require('../models/transaction.model');
const Order = require('../models/order.model');
const Cart = require('../models/cart.model'); // agar cart table hai

const MERCHANT_KEY = "96434309-7796-489d-8924-ab56988a6076"
const MERCHANT_ID = "PGTESTPAYUAT86"
const MERCHANT_BASE_URL = "https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/pay"
const MERCHANT_STATUS_URL = "https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/status"
const redirectUrl = `${process.env.BACKEND}/order/status`
const successUrl = `${process.env.FRONTEND}`
const failureUrl = `${process.env.FRONTEND}/payment-failure`

exports.createOrder = async (req, res) => {
    const { name, mobileNumber, amount } = req.body;
    const userId = req.user.id
    const orderId = uuidv4()

    await Transaction.create({
        user_id: userId,
        merchantTransactionId: orderId,
        amount,
        status: 'PENDING'
    });

    const paymentPayload = {
        merchantId: MERCHANT_ID,
        merchantUserId: name,
        mobileNumber: mobileNumber,
        amount: amount * 100,
        merchantTransactionId: orderId,
        redirectUrl: `${redirectUrl}/?id=${orderId}`,
        redirectMode: 'POST',
        paymentInstrument: { type: 'PAY_PAGE' }
    }

    const payload = Buffer.from(JSON.stringify(paymentPayload)).toString('base64')
    const keyIndex = 1
    const string = payload + '/pg/v1/pay' + MERCHANT_KEY
    const sha256 = crypto.createHash('sha256').update(string).digest('hex')
    const checksum = sha256 + '###' + keyIndex

    try {
        const response = await axios.post(MERCHANT_BASE_URL, { request: payload }, {
            headers: {
                accept: 'application/json',
                'Content-Type': 'application/json',
                'X-VERIFY': checksum
            }
        });

        res.status(200).json({ success: true, message: "OK", url: response.data.data.instrumentResponse.redirectInfo.url })
    } catch (error) {
        await Transaction.update({ status: 'FAILED' }, { where: { merchantTransactionId: orderId }});
        console.log("error in payment", error)
        res.status(500).json({ error: 'Failed to initiate payment' })
    }
}

exports.getPaymentStatus = async (req, res) => {
    const merchantTransactionId = req.query.id;
    const keyIndex = 1
    const string = `/pg/v1/status/${MERCHANT_ID}/${merchantTransactionId}` + MERCHANT_KEY
    const sha256 = crypto.createHash('sha256').update(string).digest('hex')
    const checksum = sha256 + '###' + keyIndex

    try {
        const response = await axios.get(`${MERCHANT_STATUS_URL}/${MERCHANT_ID}/${merchantTransactionId}`, {
            headers: {
                accept: 'application/json',
                'Content-Type': 'application/json',
                'X-VERIFY': checksum,
                'X-MERCHANT-ID': MERCHANT_ID
            }
        });

        if (response.data.success === true) {
            const transaction = await Transaction.findOne({ where: { merchantTransactionId }});
            if (!transaction) return res.redirect(failureUrl);

            const userId = transaction.user_id;

            // clear cart
            await Cart.update({ items: [] }, { where: { user_id: userId }});

            return res.redirect(successUrl);
        } else {
            return res.redirect(failureUrl);
        }
    } catch (error) {
        console.error("Payment Status Error:", error.message);
        return res.status(500).json({ success: false, message: 'Internal server error' });
    }
}

exports.orders = async (req, res) => {
    const orders = await Order.findAll();

    res.status(200).json({
        success: true,
        message: "orders fetched successfully",
        orders
    });
}
