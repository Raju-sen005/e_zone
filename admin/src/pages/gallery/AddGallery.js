// src/pages/AddOrEditGallery.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAddGalleryMutation } from "../../store/services/gallery/galleryApi";
import ROUTES from "../../constants/routes";
import { toast } from "react-toastify";

const AddOrEditGallery = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");

  const [addGallery, { isLoading }] = useAddGalleryMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description) {
      toast.error("Title and Description are required");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);             // Direct field
    formData.append("description", description); // Direct field
    if (image) formData.append("image", image); // File upload

    try {
      const result = await addGallery(formData).unwrap(); // RTK Query unwrap
      if (result.success) {
        toast.success("Gallery added successfully!");
        navigate(ROUTES.PROTECTED.GALLERIES);
      }
    } catch (error) {
      toast.error(error?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="container mt-4" style={{ position: "relative", top: "50px", left: "150px" }}>
      <h2>Add Gallery Item</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Upload Image</label>
          <input
            type="file"
            className="form-control"
            accept="image/*"
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
          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            rows="5"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary" disabled={isLoading}>
          {isLoading ? "Adding..." : "Add Gallery"}
        </button>
      </form>
    </div>
  );
};

export default AddOrEditGallery;
