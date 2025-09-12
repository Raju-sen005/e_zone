import { useDispatch } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { authSliceAction } from "../store/services/auth/authSlice";
import ROUTES from "../constants/routes";

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleLogout = () => {
    localStorage.clear();
    dispatch(authSliceAction.setIsLoggedIn(false));
    navigate(ROUTES.PUBLIC.LOGIN);
  };

  return (
    <div className="sb2-1">
      {/* <!--== USER INFO ==--> */}
      <div className="sb2-12"></div>
      {/* <!--== LEFT MENU ==--> */}
      <div className="sb2-13">
        <ul className="collapsible" data-collapsible="accordion">
          <li>
            <Link
              to={ROUTES.PROTECTED.DASHBOARD}
              className={
                pathname === ROUTES.PROTECTED.DASHBOARD && "menu-active"
              }
            >
              <i className="fa fa-bar-chart" aria-hidden="true"></i> Dashboard
            </Link>
          </li>
          <li>
            <Link
              to={ROUTES.PROTECTED.USERS}
              className={`collapsible-header ${
                (pathname.startsWith(
                  ROUTES.PROTECTED.USER.replace(":id", "")
                ) ||
                  pathname.startsWith(
                    ROUTES.PROTECTED.EDIT_USER.replace(":id", "")
                  ) ||
                  pathname === ROUTES.PROTECTED.USERS) &&
                "menu-active"
              }`}
            >
              <i className="fa fa-user" aria-hidden="true"></i> Users
            </Link>
          </li>

          <li>
            <Link
              to={ROUTES.PROTECTED.PRODUCTS}
              className={`collapsible-header ${
                (pathname.startsWith(
                  ROUTES.PROTECTED.PRODUCT.replace(":id", "")
                ) ||
                  pathname === ROUTES.PROTECTED.PRODUCTS) &&
                "menu-active"
              }`}
            >
              <i className="fa fa-cube" aria-hidden="true"></i>Products
            </Link>
            {/* <div className="collapsible-body left-sub-menu">
              <ul>
                <li>
                  <Link to="/product-all">All Product</Link>
                </li>
                <li>
                  <Link to="/product-edit">Add Product</Link>
                </li>
              </ul>
            </div> */}
          </li>

          <li>
            <Link
              to={ROUTES.PROTECTED.BLOGS}
              className={`collapsible-header ${
                (pathname.startsWith(
                  ROUTES.PROTECTED.BLOG.replace(":id", "")
                ) ||
                  pathname === ROUTES.PROTECTED.BLOGS ||
                  pathname === ROUTES.PROTECTED.ADD_BLOG) &&
                "menu-active"
              }`}
            >
              <i className="fa fa-pencil-square-o" aria-hidden="true"></i> Blogs
            </Link>
            {/* <div className="collapsible-body left-sub-menu">
              <ul>
                <li>
                  <Link to="/blog-all">All Blogs</Link>
                </li>
                <li>
                  <Link to="/blog-add">Add Blog</Link>
                </li>
              </ul>
            </div> */}
          </li>
          <li>
            <Link
              to={ROUTES.PROTECTED.GALLERIES}
              className={`collapsible-header ${
                (pathname === ROUTES.PROTECTED.GALLERIES ||
                  pathname === ROUTES.PROTECTED.ADD_GALLERY ||
                  pathname.startsWith(
                    ROUTES.PROTECTED.EDIT_GALLERY.replace(":id", "")
                  )) &&
                "menu-active"
              }`}
            >
              <i className="fa fa-picture-o" aria-hidden="true"></i>Gallery
            </Link>
            {/* <div className="collapsible-body left-sub-menu">
              <ul>
                <li>
                  <Link to="/gallery">All Gallery</Link>
                </li>
                <li>
                  <Link to="/gallery-add">Add Gallery</Link>
                </li>
              </ul>
            </div> */}
          </li>
          <li>
            <Link
              to={ROUTES.PROTECTED.ORDERS}
              className={`collapsible-header ${
                pathname === ROUTES.PROTECTED.ORDERS && "menu-active"
              }`}
            >
              <i className="fa fa-list-alt" aria-hidden="true"></i>Orders
            </Link>
          </li>
          <li>
            <Link
              to={ROUTES.PROTECTED.ENQUIRIES}
              className={`collapsible-header ${
                pathname === ROUTES.PROTECTED.ENQUIRIES ? "menu-active" : ""
              }`}
            >
              <i className="fa fa-envelope-o" aria-hidden="true"></i>Enquires
            </Link>
          </li>
          <li>
            <Link onClick={handleLogout} className="collapsible-header">
              <i className="fa fa-sign-out" aria-hidden="true"></i>Logout
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
