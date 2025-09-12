import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  useGetblogQuery,
  useUpdateBlogMutation,
} from "../../store/services/blogs/blogApi";
import ROUTES from "../../constants/routes";
import { useSelector } from "react-redux";

const EditBlog = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const { blogDetail } = useSelector((state) => state.blog);

  const [updateBlog, { isLoading }] = useUpdateBlogMutation();
  useGetblogQuery(id, {
    refetchOnMountOrArgChange: true,
  });

  const [blogData, setBlogData] = useState({
    title: "",
    description: "",
    author: "",
  });
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");

  const handleChange = (e) => {
    setBlogData({ ...blogData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("blog", JSON.stringify(blogData));

    if (image instanceof File) {
      formData.append("image", image);
    }

    updateBlog({ data: formData, blogId: id }).then(({ data }) => {
      if (data.success) navigate(ROUTES.PROTECTED.BLOGS);
    });
  };

  useEffect(() => {
    setBlogData({
      title: blogDetail?.title || "",
      description: blogDetail?.description || "",
      author: blogDetail?.author || "",
    });
    setPreview(blogDetail?.image?.url);
  }, [blogDetail]);

  return (
    <div
      className="container mt-4"
      style={{ position: "relative", top: "50px", left: "200px" }}
    >
      <h2>Edit Blog</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Post Name</label>
          <input
            type="text"
            name="title"
            className="form-control"
            value={blogData.title}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Upload Image</label>
          <input
            type="file"
            className="form-control"
            onChange={handleImageChange}
          />
        </div>

        {preview && (
          <img
            src={preview}
            alt="preview"
            style={{ marginTop: "10px", height: "100px" }}
          />
        )}

        <div className="mb-3">
          <label>Blog Description</label>
          <textarea
            name="description"
            className="form-control"
            rows="5"
            value={blogData.description}
            onChange={handleChange}
          ></textarea>
        </div>

        <div className="mb-3">
          <label>Author Name</label>
          <input
            type="text"
            name="author"
            className="form-control"
            value={blogData.author}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-primary" disabled={isLoading}>
          {isLoading ? "updating..." : "Update Blog"}
        </button>
      </form>
    </div>
  );
};

export default EditBlog;
