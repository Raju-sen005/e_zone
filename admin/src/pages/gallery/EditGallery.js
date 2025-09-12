// src/pages/EditGallery.jsx
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  useGetGalleryQuery,
  useUpdateGalleryMutation,
} from "../../store/services/gallery/galleryApi";
import ROUTES from "../../constants/routes";
import { useSelector } from "react-redux";

const EditGallery = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { galleryDetail } = useSelector((state) => state.gallery);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");

  const [updateGallery, { isLoading }] = useUpdateGalleryMutation();

  useGetGalleryQuery(id, {
    refetchOnMountOrArgChange: true,
  });

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
    formData.append("gallery", JSON.stringify({ title, description }));

    if (image instanceof File) {
      formData.append("image", image);
    }

    updateGallery({ data: formData, galleryId: id }).then(({ data }) => {
      if (data.success) navigate(ROUTES.PROTECTED.GALLERIES);
    });
  };

  useEffect(() => {
    setTitle(galleryDetail?.title);
    setDescription(galleryDetail?.description);
    setPreview(galleryDetail?.image?.url);
  }, [galleryDetail]);

  return (
    <div
      className="container mt-4"
      style={{ position: "relative", top: "50px", left: "150px" }}
    >
      <h2>Edit Gallery</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="mb-3">
          <label className="form-label">Post Name</label>
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
          <label className="form-label">Gallery Description</label>
          <textarea
            className="form-control"
            rows="4"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary" disabled={isLoading}>
          Update
        </button>
      </form>
    </div>
  );
};

export default EditGallery;
