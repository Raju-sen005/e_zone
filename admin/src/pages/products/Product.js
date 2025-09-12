import { useEffect, useState } from "react";
import { useParams, useNavigate, Link, useLocation } from "react-router-dom";
import {
  useAddProductMutation,
  useGetProductQuery,
  useUpdateProductMutation,
} from "../../store/services/products/productApi";
import ROUTES from "../../constants/routes";
import { useSelector } from "react-redux";

const ProductForm = () => {
  const navigate = useNavigate();

  const { id } = useParams();
  const { state } = useLocation();
  const isEdit = state?.isEdit;
  const isView = state?.isView;

  const shouldFetch = isEdit || isView;

  const { productDetail } = useSelector((state) => state.product);

  useGetProductQuery(id, {
    skip: !shouldFetch,
    refetchOnMountOrArgChange: true,
  });

  const [product, setProduct] = useState({
    name: "",
    image: null,
    description: "",
    mrp: "",
    sellPrice: "",
  });

  console.log("==product===", product);

  const [imagePreview, setImagePreview] = useState(null);

  const [addProduct, { isLoading: productLoading }] = useAddProductMutation();
  const [updateProduct, { isLoading: updateLoading }] =
    useUpdateProductMutation();

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "image" && files.length > 0) {
      const file = files[0];
      setProduct((prev) => ({ ...prev, image: file }));

      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setProduct((prev) => ({ ...prev, [name]: value }));
    }
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  const formData = new FormData();
  formData.append("name", product.name);
  formData.append("description", product.description);
  formData.append("mrp", product.mrp);
  formData.append("sellPrice", product.sellPrice);

  if (product.image && product.image instanceof File) {
    formData.append("image", product.image);
  }

  if (isEdit) {
    updateProduct({ data: formData, productId: id }).then(({ data }) => {
      if (data?.success) navigate(ROUTES.PROTECTED.PRODUCTS);
    });
  } else {
    addProduct(formData).then((result) => {
      if (result?.data?.success) navigate(ROUTES.PROTECTED.PRODUCTS);
    });
  }
};



useEffect(() => {
  if ((isView || isEdit) && productDetail) {
    setProduct({
      name: productDetail.name || "",
      image: "",  // 👈 file field ko empty rakho
      description: productDetail.description || "",
      mrp: productDetail.mrp || "",
      sellPrice: productDetail.sellPrice || "",
    });

    // ✅ preview me string (url) directly use karo
    setImagePreview(productDetail.image || null);
  }
}, [isView, isEdit, productDetail]);


  return (
    <div
      className="container mt-5"
      style={{ position: "relative", top: "50px", left: "150px" }}
    >
      {/* Breadcrumb */}
      <div className="sb2-2-2">
        <ul>
          <li>
            <Link to="/">
              <i className="fa fa-home"></i> Home
            </Link>
          </li>
          <li className="active-bre">
            <span>
              {isEdit
                ? "Edit Product"
                : isView
                ? "Product Detail"
                : "Add Product"}
            </span>
          </li>
        </ul>
      </div>

      <div className="sb2-2-3">
        <h3>
          {isEdit
            ? "Edit Product"
            : isView
            ? "Product Detail"
            : "Add New Product"}
        </h3>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label>Product Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              value={product?.name}
              onChange={handleChange}
              required
              readOnly={isView}
            />
          </div>

          <div className="mb-3">
            <label>Product Image</label>
            <input
              type="file"
              name="image"
              className="form-control"
              onChange={handleChange}
              accept="image/*"
              readOnly={isView}
            />
            {(product?.image || imagePreview) && (
              <img
                src={imagePreview || product.image}
                alt="Preview"
                style={{ height: "80px", marginTop: "10px" }}
              />
            )}
          </div>

          <div className="mb-3">
            <label>Description</label>
            <textarea
              name="description"
              className="form-control"
              rows={3}
              value={product.description}
              onChange={handleChange}
              readOnly={isView}
            ></textarea>
          </div>

          {/* <div className="mb-3">
            <label>Shipping & Returns</label>
            <textarea
              name="shippingReturns"
              className="form-control"
              rows={3}
              value={product.shippingReturns}
              onChange={handleChange}
            ></textarea>
          </div>

          <div className="mb-3">
            <label>Style With</label>
            <textarea
              name="styleWith"
              className="form-control"
              rows={3}
              value={product.styleWith}
              onChange={handleChange}
            ></textarea>
          </div>

          <div className="mb-3">
            <label>Reviews</label>
            <textarea
              name="reviews"
              className="form-control"
              rows={3}
              value={product.reviews}
              onChange={handleChange}
            ></textarea>
          </div> */}

          <div className="row">
            <div className="col-md-6 mb-3">
              <label>MRP</label>
              <input
                type="number"
                name="mrp"
                className="form-control"
                value={product.mrp}
                onChange={handleChange}
                required
                readOnly={isView}
              />
            </div>

            <div className="col-md-6 mb-3">
              <label>Discount Price</label>
              <input
                type="number"
                name="sellPrice"
                className="form-control"
                value={product.sellPrice}
                onChange={handleChange}
                required
                readOnly={isView}
              />
            </div>
          </div>

          {!isView && (
            <button
              type="submit"
              className="btn btn-primary"
              disabled={productLoading || updateLoading}
            >
              {isEdit
                ? updateLoading
                  ? "Updating..."
                  : "Update Product"
                : productLoading
                ? "Adding..."
                : "Add Product"}
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default ProductForm;
