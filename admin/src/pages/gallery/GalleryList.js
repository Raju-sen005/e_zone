import { Link, useNavigate } from "react-router-dom";

import {
  useDeleteGalleryMutation,
  useGetGalleriesQuery,
} from "../../store/services/gallery/galleryApi";
import { useSelector } from "react-redux";
import ROUTES from "../../constants/routes";

const AllGallery = () => {
  const navigate = useNavigate();
  const { galleries } = useSelector((state) => state.gallery);

  const { refetch } = useGetGalleriesQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });

  const [deleteGallery] = useDeleteGalleryMutation();

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this gallery item?")) {
      deleteGallery(id).then(({ data }) => {
        if (data.success) refetch();
      });
    }
  };

  return (
    <div
      className="container mt-4"
      style={{ position: "relative", top: "50px", left: "150px" }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <h2>All Gallery Posts</h2>
          <p>Manage your gallery images and descriptions here.</p>
        </div>

        <button
          type="button"
          class="btn btn-primary"
          onClick={() => navigate(ROUTES.PROTECTED.ADD_GALLERY)}
        >
          Add Gallery
        </button>
      </div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Description</th>
            <th>Image</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {galleries?.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.title}</td>
              <td>{item.description}</td>
              <td>
  <img
    src={item.imageUrl} // Cloudinary full URL
    alt={item.title}
    style={{ height: "80px", width: "120px", objectFit: "cover" }}
  />

              </td>

              <td>
                <Link
                  to={`/edit-gallery/${item.id}`}
                  className="btn btn-sm btn-warning"
                >
                  <i className="fa fa-pencil-square-o"></i>
                </Link>
              </td>
              <td>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="btn btn-sm btn-danger"
                >
                  <i className="fa fa-trash-o"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllGallery;
