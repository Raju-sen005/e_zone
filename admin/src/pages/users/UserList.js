import { Link } from "react-router-dom";
import {
  useDeleteUserMutation,
  useGetUsersQuery,
} from "../../store/services/users/userApi";
import { useSelector } from "react-redux";
import ROUTES from "../../constants/routes";

const UserList = () => {
  const { users } = useSelector((state) => state.user);

  const { refetch } = useGetUsersQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });

  const [deleteUser] = useDeleteUserMutation();

  function handleDelete(id) {
    if (window.confirm("Are you sure you want to delete this user?")) {
      deleteUser(id).then(({ data }) => {
        if (data.success) refetch();
      });
    }
  }

  return (
    <div className="sb2-2">
      <div className="sb2-2-2">
        <ul>
          <li>
            <a href="#">
              <i className="fa fa-home"></i> Home
            </a>
          </li>
          <li className="active-bre">
            <a href="#">Users</a>
          </li>
        </ul>
      </div>

      <div className="sb2-2-3">
        <div className="row">
          <div className="col-md-12">
            <div className="box-inn-sp">
              <div className="inn-title">
                <h4>Total Users</h4>
                <p>Users fetched from the backend.</p>
              </div>
              <div className="tab-inn">
                <div className="table-responsive table-desi">
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>View</th>
                        <th>Edit</th>
                        <th>Delete</th>
                      </tr>
                    </thead>
                    <tbody>
                      {users?.map((user) => (
                        <tr key={user.id}>
                          <td>
                            <span className="list-enq-name">
                              {user.firstName} {user.lastName}
                            </span>
                          </td>

                          <td>{user.email}</td>
                          <td>
                            <Link
                              to={ROUTES.PROTECTED.USER.replace(
                                ":id",
                                user.id
                              )}
                            >
                              <i className="fa fa-eye"></i>
                            </Link>
                          </td>
                          <td>
                            <Link
                              to={ROUTES.PROTECTED.EDIT_USER.replace(
                                ":id",
                                user.id
                              )}
                            >
                              <i className="fa fa-pencil-square-o"></i>
                            </Link>
                          </td>
                          <td>
                            <a href="#" onClick={() => handleDelete(user.id)}>
                              <i className="fa fa-trash-o"></i>
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  {users.length === 0 && <p>No users found.</p>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserList;
