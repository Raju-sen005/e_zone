import { lazy } from "react";
import { Routes, Route } from "react-router-dom";

import MainLayout from "./layout/MainLayout";
import Protected from "./guard/Protected";
import ROUTES from "./constants/routes";
import UserDetail from "./pages/users/UserDetail";
import "./App.css";

const Dashboard = lazy(() => import("./pages/dashboard/Dashboard"));
const UserList = lazy(() => import("./pages/users/UserList"));
const ProductList = lazy(() => import("./pages/products/ProductList"));
const Product = lazy(() => import("./pages/products/Product"));
const BlogAdd = lazy(() => import("./pages/blogs/BlogAdd"));
const Blogs = lazy(() => import("./pages/blogs/Blogs"));
const EditBlog = lazy(() => import("./pages/blogs/EditBlog"));
const GalleryList = lazy(() => import("./pages/gallery/GalleryList"));
const EditGallery = lazy(() => import("./pages/gallery/EditGallery"));
const AddGallery = lazy(() => import("./pages/gallery/AddGallery"));
const AdminSettings = lazy(() => import("./pages/setting/AdminSettings"));
const Orders = lazy(() => import("./pages/orders/Orders"));
const EditUser = lazy(() => import("./pages/users/EditUser"));
const Enquiries = lazy(() => import("./pages/enquiry/Enquiries"));
const AdminLogin = lazy(() => import("./pages/auth/Login"));


function App() {
  return (
    <Routes>
      {/* Public route */}
      <Route path={ROUTES.PUBLIC.LOGIN} element={<AdminLogin />} />

      {/* Protected Routes */}
      <Route
        path={ROUTES.PROTECTED.DASHBOARD}
        element={
          <Protected>
            <MainLayout />
          </Protected>
        }
      >
        <Route path={ROUTES.PROTECTED.DASHBOARD} element={<Dashboard />} />
        <Route path={ROUTES.PROTECTED.PRODUCTS} element={<ProductList />} />
        <Route path={ROUTES.PROTECTED.PRODUCT} element={<Product />} />
        <Route path={ROUTES.PROTECTED.ADD_BLOG} element={<BlogAdd />} />
        <Route path={ROUTES.PROTECTED.BLOGS} element={<Blogs />} />
        <Route path={ROUTES.PROTECTED.BLOG} element={<EditBlog />} />
        <Route path={ROUTES.PROTECTED.GALLERIES} element={<GalleryList />} />
        <Route path={ROUTES.PROTECTED.EDIT_GALLERY} element={<EditGallery />} />
        <Route path={ROUTES.PROTECTED.ADD_GALLERY} element={<AddGallery />} />
        <Route path={ROUTES.PROTECTED.ORDERS} element={<Orders />} />
        <Route path={ROUTES.PROTECTED.USERS} element={<UserList />} />
        <Route path={ROUTES.PROTECTED.USER} element={<UserDetail />} />
        <Route path={ROUTES.PROTECTED.EDIT_USER} element={<EditUser />} />
        <Route path={ROUTES.PROTECTED.ENQUIRIES} element={<Enquiries />} />
        <Route path={ROUTES.PROTECTED.SETTING} element={<AdminSettings />} />
      </Route>
    </Routes>
  );
}

export default App;
