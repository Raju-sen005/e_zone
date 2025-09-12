import React, { useState } from "react";
import { useAddBlogMutation } from "../../store/services/blogs/blogApi";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../constants/routes";
import { toast } from "react-toastify";
const BlogAdd = () => {
  const navigate = useNavigate();

  const [addBlog, { isLoading }] = useAddBlogMutation();

  const [blogData, setBlogData] = useState({
    title: "",
    description: "",
    author: "",
  });
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setBlogData((prev) => ({ ...prev, [name]: value }));
  };

  // const handleMultiSelect = (e) => {
  //   const options = Array.from(e.target.selectedOptions).map(
  //     (option) => option.value
  //   );
  //   setFormData((prev) => ({ ...prev, [e.target.name]: options }));
  // };

  const handleSubmit = async (e) => {
  e.preventDefault();

  const formData = new FormData();
  formData.append("title", blogData.title);
  formData.append("description", blogData.description);
  formData.append("author", blogData.author);

 if (image) formData.append("image", image); // key must be "image"


  try {
    const result = await addBlog(formData).unwrap();
    toast.success("Blog added successfully!");
    navigate(ROUTES.PROTECTED.BLOGS);
  } catch (error) {
    console.error(error);
    toast.error(error?.data?.message || "Failed to add blog");
  }
};


  // const categoriesList = [
  //   "Hotels",
  //   "Educations",
  //   "Medical",
  //   "Health",
  //   "Fitness",
  //   "Tution",
  //   "Software",
  //   "Wedding",
  //   "Party",
  //   "Spa/Club",
  // ];

  return (
    <div
      className="container mt-5"
      style={{ position: "relative", top: "50px", left: "150px" }}
    >
      <h3>Add New Blog</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Post Title</label>
          <input
            type="text"
            name="title"
            value={blogData.title}
            className="form-control"
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="mb-3">
          <label>Banner Image</label>
        <input
  type="file"
  name="file" // ✅ must match multer.single("file")
  className="form-control"
  onChange={(e) => {
    setImage(e.target.files[0]);
    setPreview(URL.createObjectURL(e.target.files[0]));
  }}
/>

          {preview && (
            <img
              src={preview}
              alt="preview"
              style={{ marginTop: "10px", height: "100px" }}
            />
          )}
        </div>

        <div className="mb-3">
          <label>Description</label>
          <textarea
            name="description"
            className="form-control"
            value={blogData.description}
            onChange={handleInputChange}
          ></textarea>
        </div>

        {/* <div className="mb-3">
          <label>Categories</label>
          <select name="categories" className="form-select" multiple onChange={handleMultiSelect}>
            {categoriesList.map(cat => <option key={cat} value={cat}>{cat}</option>)}
          </select>
        </div>

        <div className="mb-3">
          <label>Sub Categories</label>
          <select name="subCategories" className="form-select" multiple onChange={handleMultiSelect}>
            {categoriesList.map(sub => <option key={sub} value={sub}>{sub}</option>)}
          </select>
        </div> */}

        <div className="mb-3">
          <label>Author Name</label>
          <input
            type="text"
            name="author"
            className="form-control"
            value={blogData.author}
            onChange={handleInputChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary" disabled={isLoading}>
          {isLoading ? "Adding..." : "Add Blog"}
        </button>
      </form>
    </div>
  );
};

export default BlogAdd;
