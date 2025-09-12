import { useSelector } from "react-redux";


import { useGetOrdersQuery } from "../../store/services/orders/orderApi";

const OrdersPage = () => {
  const { orders } = useSelector((state) => state.order);

  useGetOrdersQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });

  return (
    // <div className="container-fluid sb2">
      // <div className="row">

        <div className="sb2-2">
          <div className="sb2-2-2">
            <ul>
              <li>
                <a href="/">
                  <i className="fa fa-home"></i> Home
                </a>
              </li>
              <li className="active-bre">
                <a href="#"> Orders</a>
              </li>
            </ul>
          </div>

          {/* Orders Table */}
          <div className="sb2-2-3">
            <div className="row">
              <div className="col-md-12">
                <div className="box-inn-sp">
                  <div className="inn-title">
                    <h4>Orders</h4>
                    <p>Order details from backend</p>
                  </div>

                  <div className="tab-inn">
                    <div className="table-responsive table-desi">
                      <table className="table table-hover">
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>Product</th>
                            <th>Date</th>
                            <th>City</th>
                            <th>Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          {orders?.map((order, index) => (
                            <tr key={order._id || index}>
                              <td>{index + 1}</td>
                              <td>{order["product-name"] || "N/A"}</td>
                              <td>
                                {order?.date
                                  ? new Date(order?.date).toLocaleDateString(
                                      "en-IN",
                                      {
                                        year: "numeric",
                                        month: "2-digit",
                                        day: "2-digit",
                                      }
                                    )
                                  : "N/A"}
                              </td>
                              <td>{order?.city || "N/A"}</td>
                              <td>
                                <span
                                  className={`label ${
                                    order.status === "Success"
                                      ? "label-success"
                                      : order.status === "Reject"
                                      ? "label-danger"
                                      : "label-warning"
                                  }`}
                                >
                                  {order.status || "Pending"}
                                </span>
                              </td>
                            </tr>
                          ))}
                          {!orders?.length && (
                            <tr>
                              <td colSpan="5">No orders found.</td>
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
    //   </div>
    // </div>
  );
};

export default OrdersPage;
