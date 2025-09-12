const Blog = require("../models/blog.model");
const Enquiry = require("../models/enquiry.model");
const User = require("../models/user.model");
const Order = require("../models/order.model");

exports.getDashboardAnalysis = async (req, res) => {
  try {
    const blogsCount = await Blog.count();
    const enquiryCount = await Enquiry.count();
    const userCount = await User.count();
    const orderCount = await Order.count();

    res.status(200).json({
      success: true,
      message: "Dashboard analysis fetched successfully",
      data: {
        blogsCount,
        enquiryCount,
        userCount,
        orderCount,
      },
    });
  } catch (error) {
    console.error("❌ Dashboard Analysis Error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch dashboard analysis",
      error: error.message,
    });
  }
};
