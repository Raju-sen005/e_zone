const Shipping = require('../models/shipping.model');

exports.getShipping = async (req, res) => {
  try {
    const shipping = await Shipping.findOne({ where: { userId: req.user.id } });
    res.status(200).json({ success: true, shipping });
  } catch (err) {
    console.error('Get Shipping error:', err);
    res.status(500).json({ success: false, message: 'Failed to fetch shipping info' });
  }
};

exports.saveShipping = async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    phone,
    company,
    country,
    city,
    postalCode,
    addressLine1,
    addressLine2,
  } = req.body;

  try {
    // Check if shipping exists
    let shipping = await Shipping.findOne({ where: { userId: req.user.id } });

    if (shipping) {
      // Update existing record
      await shipping.update({
        firstName,
        lastName,
        email,
        phone,
        company,
        country,
        city,
        postalCode,
        addressLine1,
        addressLine2,
      });
    } else {
      // Create new record
      shipping = await Shipping.create({
        userId: req.user.id,
        firstName,
        lastName,
        email,
        phone,
        company,
        country,
        city,
        postalCode,
        addressLine1,
        addressLine2,
      });
    }

    res.status(200).json({ success: true, shipping });
  } catch (err) {
    console.error('Shipping save error:', err);
    res.status(500).json({ success: false, message: 'Failed to save shipping info' });
  }
};
