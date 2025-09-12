import { Link, useNavigate } from "react-router-dom";
import {
  useDeleteBlogMutation,
  useGetblogsQuery,
} from "../../store/services/blogs/blogApi";
import ROUTES from "../../constants/routes";

const Blogs = () => {
  const navigate = useNavigate();

  // ✅ RTK Query se data fetch
  const { data: blogs = [], isLoading, refetch } = useGetblogsQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });

  const [deleteBlog] = useDeleteBlogMutation();

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this blog?")) return;
    deleteBlog(id).then(({ data }) => {
      if (data?.success) refetch();
    });
  };

  if (isLoading) {
    return <p className="text-center">Loading blogs...</p>;
  }

  return (
    <div className="container-fluid sb2">
      <div className="row">
        {/* Main Content */}
        <div className="sb2-2">
          <div className="sb2-2-2">
            <ul>
              <li>
                <a href="/">
                  <i className="fa fa-home"></i> Home
                </a>
              </li>
              <li className="active-bre">
                <a href="#">All Blogs</a>
              </li>
            </ul>
          </div>

          <div className="sb2-2-3">
            <div className="row">
              <div className="col-md-12">
                <div className="box-inn-sp">
                  <div className="inn-title list-header">
                    <h4>All Blog Posts</h4>
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => navigate(ROUTES.PROTECTED.ADD_BLOG)}
                    >
                      Add Blog
                    </button>
                  </div>

                  <p>Manage your blog content here.</p>

                  <div className="tab-inn">
                    <div className="table-responsive table-desi">
                      <table className="table table-hover">
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>Title</th>
                            <th>Date</th>
                            <th>Edit</th>
                            <th>Delete</th>
                          </tr>
                        </thead>
                        <tbody>
                          {blogs.length === 0 ? (
                            <tr>
                              <td colSpan="6" className="text-center">
                                No blogs found.
                              </td>
                            </tr>
                          ) : (
                            blogs.map((blog, index) => (
                              <tr key={blog.id}>
                                <td>{index + 1}</td>
                                <td>
                                  <img src={blog?.image} alt="blog" width="100" />
                                  {blog.title}
                                </td>
                                <td>
                                  {blog.date
                                    ? new Date(blog.date).toLocaleDateString("en-IN", {
                                      year: "numeric",
                                      month: "2-digit",
                                      day: "2-digit",
                                    })
                                    : "N/A"}
                                </td>

                                <td>
                                  <Link
                                    to={ROUTES.PROTECTED.BLOG.replace(
                                      ":id",
                                      blog?.id
                                    )}
                                    className="text-primary"
                                  >
                                    <i className="fa fa-pencil-square-o"></i>
                                  </Link>
                                </td>
                                <td>
                                  <i
                                    onClick={() => handleDelete(blog.id)}
                                    className="fa fa-trash-o"
                                  ></i>
                                </td>
                              </tr>
                            ))
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
      </div>
    </div>
  );
};

export default Blogs;
