const { Wishlist, WishlistItem } = require('../models/wishlist.model');
const Product = require('../models/product.model');

exports.getWishlist = async (req, res) => {
  try {
    const wishlist = await Wishlist.findOne({
      where: { userId: req.user.id },
      include: Product, // products join
    });

    res.status(200).json({ success: true, wishlist });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Failed to fetch wishlist' });
  }
};

exports.addToWishlist = async (req, res) => {
  const { productId } = req.body;
  const userId = req.user.id;

  try {
    let wishlist = await Wishlist.findOne({ where: { userId } });

    if (!wishlist) {
      wishlist = await Wishlist.create({ userId });
    }

    // Check if product already exists
    const existing = await WishlistItem.findOne({
      where: { wishlistId: wishlist.id, productId }
    });

    if (!existing) {
      await WishlistItem.create({ wishlistId: wishlist.id, productId });
    }

    const updatedWishlist = await Wishlist.findOne({
      where: { userId },
      include: Product,
    });

    res.status(200).json({ success: true, wishlist: updatedWishlist });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Failed to add to wishlist' });
  }
};

exports.removeFromWishlist = async (req, res) => {
  const { productId } = req.params;
  const userId = req.user.id;

  try {
    const wishlist = await Wishlist.findOne({ where: { userId } });
    if (!wishlist) return res.status(404).json({ success: false, message: 'Wishlist not found' });

    await WishlistItem.destroy({
      where: { wishlistId: wishlist.id, productId }
    });

    const updatedWishlist = await Wishlist.findOne({
      where: { userId },
      include: Product,
    });

    res.status(200).json({ success: true, wishlist: updatedWishlist });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Failed to remove from wishlist' });
  }
};
