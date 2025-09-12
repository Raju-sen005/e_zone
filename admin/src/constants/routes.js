const ROUTES = Object.freeze({
    //public routes
    PUBLIC: {
        LOGIN: "/login",
    },

    // protected routes
    PROTECTED: {
        DASHBOARD: "/",
        PRODUCTS : "/products",
        PRODUCT : "/product/:id",
        ADD_PRODUCT: "/add-product",
        USERS : "/users",
        USER : "/user/:id",
        EDIT_USER : "/edit-user/:id",
        BLOGS : "/blogs",
        ADD_BLOG : "/add-blog",
        BLOG : "/blog/:id",
        GALLERIES : "/galleries",
        ADD_GALLERY : "/add-gallery",
        GALLERY : "/gallery/:id",
        EDIT_GALLERY : "/edit-gallery/:id",
        ORDERS : "/orders",
        ENQUIRIES : "/enquiries",
        SETTING : "/setting"
    }
});

export default ROUTES