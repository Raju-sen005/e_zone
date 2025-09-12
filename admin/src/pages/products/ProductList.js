import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  useDeleteProductMutation,
  useGetProductsQuery,
} from "../../store/services/products/productApi";
import ROUTES from "../../constants/routes";

const ProductList = () => {
  const navigate = useNavigate();
  const { products } = useSelector((state) => state.product);

  const { refetch } = useGetProductsQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });

  const [deleteProduct] = useDeleteProductMutation();

  const handleDelete = async (id) => {
    if (window.confirm("Delete this product?")) {
      try {
        const res = await deleteProduct(id).unwrap();
        if (res.success) {
          refetch();
        }
      } catch (err) {
        console.error("Delete failed:", err);
      }
    }
  };


  return (
    <>
      <div className="sb2-2">
        <div className="sb2-2-2">
          <ul>
            <li>
              <Link to="#">
                <i className="fa fa-home"></i> Home
              </Link>
            </li>
            <li className="active-bre">
              <Link to="#">Product</Link>
            </li>
          </ul>
        </div>

        <div className="sb2-2-3">
          <div className="row">
            <div className="col-md-12">
              <div className="box-inn-sp">
                <div className="inn-title list-header">
                  <h3>Products</h3>

                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() =>
                      navigate(ROUTES.PROTECTED.PRODUCT.replace(":id", "new"))
                    }
                  >
                    Add Product
                  </button>
                </div>
                <div className="tab-inn">
                  <div className="table-responsive table-desi">
                    <table className="table table-hover">
                      <thead>
                        <tr>
                          <th>Product img</th>
                          <th>Product Name</th>
                          <th>Description</th>
                          <th>Price</th>

                          <th>View</th>
                          <th>Edit</th>
                          <th>Delete</th>
                        </tr>
                      </thead>
                      <tbody>
                        {products?.map((product) => (
                          <tr key={product.id}>
                            <td>
                              <img
                                src={product?.image}
                                className="product-icn"
                                alt={product?.name}
                              />

                            </td>
                            <td>
                              <span className="list-enq-name">
                                {product.name}
                              </span>
                            </td>
                            <td className="wc-50">{product.description}</td>
                            <td className="wc-50">{product.sellPrice}</td>
                            <td>
                              <Link
                                to={ROUTES.PROTECTED.PRODUCT.replace(
                                  ":id",
                                  product?.id
                                )}
                                state={{ isView: true }}
                              >
                                <i className="fa fa-eye"></i>
                              </Link>
                            </td>
                            <td>
                              <Link
                                to={ROUTES.PROTECTED.PRODUCT.replace(
                                  ":id",
                                  product?.id
                                )}
                                state={{ isEdit: true }}
                              >
                                <i className="fa fa-pencil-square-o"></i>
                              </Link>
                            </td>
                            <td>
                              <Link
                                to="#"
                                onClick={() => handleDelete(product.id)}
                              >
                                <i className="fa fa-trash-o"></i>
                              </Link>
                            </td>
                          </tr>
                        ))}
                        {!products?.length && (
                          <tr>
                            <td colSpan="6">No products found.</td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductList;
