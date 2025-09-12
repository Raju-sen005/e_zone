const { Cart, CartItem } = require("../models/cart.model");
const Product = require("../models/product.model");

// 🛒 GET CART
exports.getCart = async (req, res) => {
  const userId = req.user.id || req.body.userId;

  try {
    const cart = await Cart.findOne({
      where: { userId },
      include: [
        {
          model: CartItem,
          as: "items", // 👈 alias use karo
          include: [
            {
              model: Product, // yaha alias nahi hai, so default chalega
            },
          ],
        },
      ],
    });

    if (!cart) {
      return res.status(404).json({ success: false, message: "Cart not found" });
    }

    res.status(200).json({ success: true, cart });
  } catch (err) {
    console.error("❌ getCart error:", err);
    res.status(500).json({ success: false, message: "Failed to fetch cart" });
  }
};

// 🛒 ADD TO CART (supports single + multiple items)
exports.addToCart = async (req, res) => {
  const userId = req.user.id || req.body.userId;
  const { productId, quantity, items } = req.body;

  try {
    let cart = await Cart.findOne({ where: { userId } });

    if (!cart) {
      cart = await Cart.create({ userId, totalAmount: 0 });
    }

    // ✅ Agar items array diya hai
    if (Array.isArray(items) && items.length > 0) {
      for (let item of items) {
        await addOrUpdateItem(cart.id, item.productId, item.quantity);
      }
    }

    // ✅ Agar single product diya hai
    if (productId && quantity) {
      await addOrUpdateItem(cart.id, productId, quantity);
    }

    // ✅ Recalculate total
    const allItems = await CartItem.findAll({
      where: { cartId: cart.id },
      include: [{ model: Product }],
    });

    const totalAmount = allItems.reduce(
      (sum, item) => sum + item.quantity * (item.Product?.sellPrice || 0),
      0
    );

    cart.totalAmount = totalAmount;
    await cart.save();

    res.status(200).json({ success: true, cart, items: allItems });
  } catch (err) {
    console.error("❌ addToCart error:", err);
    res.status(500).json({ success: false, message: "Failed to add to cart" });
  }
};

// Helper function
async function addOrUpdateItem(cartId, productId, quantity) {
  let cartItem = await CartItem.findOne({ where: { cartId, productId } });

  if (cartItem) {
    cartItem.quantity += quantity;
    await cartItem.save();
  } else {
    await CartItem.create({ cartId, productId, quantity });
  }
}

// 🗑 REMOVE FROM CART
exports.removeFromCart = async (req, res) => {
  const userId = req.user.id || req.body.userId;
  const { itemId } = req.params;

  try {
    const cart = await Cart.findOne({ where: { userId } });
    if (!cart) {
      return res.status(404).json({ success: false, message: "Cart not found" });
    }

    const cartItem = await CartItem.findOne({
      where: { id: itemId, cartId: cart.id },
    });

    if (!cartItem) {
      return res
        .status(404)
        .json({ success: false, message: "Item not found in cart" });
    }

    await cartItem.destroy();

    // ✅ Recalculate after removal
    const allItems = await CartItem.findAll({
      where: { cartId: cart.id },
      include: [{ model: Product }],
    });

    const totalAmount = allItems.reduce(
      (sum, item) => sum + item.quantity * (item.Product?.sellPrice || 0),
      0
    );

    cart.totalAmount = totalAmount;
    await cart.save();

    res.status(200).json({ success: true, message: "Item removed", cart });
  } catch (err) {
    console.error("❌ removeFromCart error:", err);
    res.status(500).json({ success: false, message: "Failed to remove item" });
  }
};
