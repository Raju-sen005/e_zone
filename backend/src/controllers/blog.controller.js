const Blog = require("../models/blog.model");
const uploadImage = require("../utils/uploadImage");
const cloudinary = require("cloudinary");

// Create a new blog
// exports.createBlog = async (req, res) => {
//   try {
//     const blogData = req.body; // JSON body

//     let imageResult = null;
//     if (req.file && req.file.buffer) {
//       imageResult = await uploadImage(req.file.buffer, "blogs");
//       if (!imageResult || !imageResult.url) {
//         return res.status(500).json({ error: "Image upload failed" });
//       }
//     }

//     const blog = await Blog.create({
//       title: blogData.title,
//       description: blogData.description,
//       author: blogData.author,
//       image_url: imageResult?.url || blogData.image_url || null,
//       image_public_id: imageResult?.public_id || blogData.image_public_id || null,
//     });

//     res.status(201).json({
//       id: blog.id,
//       title: blog.title,
//       description: blog.description,
//       author: blog.author,
//       image: blog.image_url,
//       date: blog.createdAt,
//     });
//   } catch (error) {
//     console.error("==error===", error);
//     res.status(400).json({ error: "Failed to add blog" });
//   }
// };

//Create a blog
exports.createBlog = async (req, res) => {
  try {
    console.log("REQ BODY ===>", req.body);
    console.log("REQ FILE ===>", req.file);

    let blogData = req.body;

    // Agar frontend se JSON string bheja hai to parse karo
    if (req.body.blog) {
      blogData = JSON.parse(req.body.blog);
    }

    if (!blogData.title || !blogData.description || !blogData.author) {
      return res.status(400).json({ error: "Title, description, and author are required" });
    }

    let imageResult = null;
    if (req.file && req.file.buffer) {
      imageResult = await uploadImage(req.file.buffer, "blogs");
      if (!imageResult || !imageResult.url) {
        return res.status(500).json({ error: "Image upload failed" });
      }
    }

    const blog = await Blog.create({
      title: blogData.title,
      description: blogData.description,
      author: blogData.author,
      image_url: imageResult?.url || null,
      image_public_id: imageResult?.public_id || null,
    });

    res.status(201).json({
      success: true,
      id: blog.id,
      title: blog.title,
      description: blog.description,
      author: blog.author,
      image: blog.image_url,
      date: blog.createdAt,
    });
  } catch (error) {
    console.error("==error===", error);
    res.status(500).json({ error: error.message || "Failed to add blog" });
  }
};


// Get all blogs
exports.getBlogs = async (_, res) => {
  try {
    const blogs = await Blog.findAll({ order: [["createdAt", "DESC"]] });

    // Return plain array for frontend
    res.json(
      blogs.map((b) => ({
        id: b.id,
        title: b.title,
        description: b.description,
        author: b.author,
        image: b.image_url,
        date: b.createdAt,
      }))
    );
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch blogs" });
  }
};

// Get single blog
exports.getBlog = async (req, res) => {
  try {
    const blog = await Blog.findByPk(req.params.id);
    if (!blog) return res.status(404).json({ error: "Blog not found" });

    res.status(200).json({
      id: blog.id,
      title: blog.title,
      description: blog.description,
      author: blog.author,
      image: blog.image_url,
      date: blog.createdAt,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch blog" });
  }
};

// Update blog
exports.updateBlog = async (req, res) => {
  try {
    const blogId = req.params.id;
    const blogData = req.body;

    const existingBlog = await Blog.findByPk(blogId);
    if (!existingBlog) return res.status(404).json({ error: "Blog not found" });

    let imageResult = {
      url: existingBlog.image_url,
      public_id: existingBlog.image_public_id,
    };

    if (req.file && req.file.buffer) {
      if (existingBlog.image_public_id) {
        await cloudinary.v2.uploader.destroy(existingBlog.image_public_id);
      }

      const uploaded = await uploadImage(req.file.buffer, "blogs");
      if (!uploaded || !uploaded.url) {
        return res.status(500).json({ error: "Image upload failed" });
      }
      imageResult = uploaded;
    }

    await existingBlog.update({
      title: blogData.title,
      description: blogData.description,
      author: blogData.author,
      image_url: imageResult.url,
      image_public_id: imageResult.public_id,
    });

    res.status(200).json({
      id: existingBlog.id,
      title: existingBlog.title,
      description: existingBlog.description,
      author: existingBlog.author,
      image: existingBlog.image_url,
      date: existingBlog.updatedAt,
    });
  } catch (error) {
    console.error("==error===", error);
    res.status(400).json({ error: "Failed to update blog" });
  }
};

// Delete blog
exports.deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findByPk(req.params.id);
    if (!blog) return res.status(404).json({ error: "Blog not found" });

    if (blog.image_public_id) {
      await cloudinary.v2.uploader.destroy(blog.image_public_id);
    }

    await blog.destroy();

    res.status(200).json({ success: true, message: "Blog deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to delete blog" });
  }
};
