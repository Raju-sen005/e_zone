const { Router } = require("express");
const authRoutes = require("./auth.route");
const orderRoutes = require("./order.route");
const productRoutes = require("./product.route");
const cartRoutes = require('./cart.route');
const wishlistRoutes = require('./wishlist.route');
const shippingRoutes = require('./shipping.route.js');
const blogRoutes = require("./blog.route.js");
const eventRoutes = require("./event.route.js")
const galleryRoutes = require("./gallery.route.js");
const userRoutes = require("./user.route.js");
const dashboardRoute = require("./dashboard.route.js");
const enquiryRoute = require("./enquiry.route.js")
const contactRoutes = require("./contact.route.js"); // 👈 ye add kiya

const router = Router();

router.use("/auth", authRoutes)
router.use('/products', productRoutes);
router.use("/order", orderRoutes);
router.use('/cart', cartRoutes);
router.use('/wishlist', wishlistRoutes);
router.use('/shipping', shippingRoutes);
router.use("/blogs", blogRoutes);
router.use("/events", eventRoutes);
router.use("/gallery", galleryRoutes);
router.use("/users", userRoutes);
router.use("/dashboard", dashboardRoute);
router.use("/enquiries", enquiryRoute)
router.use("/", contactRoutes); // 👈 ye add kiya
module.exports = router;