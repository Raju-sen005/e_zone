import { Link, useNavigate } from 'react-router-dom'
import { logoutUser } from '../utils/helper';
import { useSelector } from 'react-redux';

const AnnouncementBar = () => {
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const handleUserClick = (e) => {
    logoutUser();
    console.log("---if---")
    navigate("/login")
  };

  return (
    <div className="announcement-bar bg-1 py-1 py-lg-2">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          {/* Left: Call */}
          <div className="col-lg-3 d-lg-block d-none">
            <div className="announcement-call">
              <Link className="announcement-text text-white" to="tel:+1-078-2376">
                Call: +1 078 2376
              </Link>
            </div>
          </div>

          {/* Center: Message */}
          <div className="col-lg-6 col-12">
            <div className="announcement-text-wrapper d-flex align-items-center justify-content-center">
              <p className="announcement-text text-white">
                World's Best Video Editing Templates
              </p>
            </div>
          </div>

          {/* Right: Login/Logout */}
          <div className="col-lg-3 d-lg-block d-none">
            <div className="announcement-meta-wrapper d-flex align-items-center justify-content-end">
              <div className="announcement-meta d-flex align-items-center">
                <Link
                  className="announcement-login announcement-text text-white"
                  to={isLoggedIn ? '#' : '/login'}
                  id="user-link"
                  onClick={handleUserClick}
                  style={{ cursor: "pointer" }}
                >
                  <svg
                    className="icon icon-user"
                    width="10"
                    height="11"
                    viewBox="0 0 10 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 0C3.07227 0 1.5 1.57227 1.5 3.5C1.5 4.70508 2.11523 5.77539 3.04688 6.40625C1.26367 7.17188 0 8.94141 0 11H1C1 8.78516 2.78516 7 5 7C7.21484 7 9 8.78516 9 11H10C10 8.94141 8.73633 7.17188 6.95312 6.40625C7.88477 5.77539 8.5 4.70508 8.5 3.5C8.5 1.57227 6.92773 0 5 0ZM5 1C6.38672 1 7.5 2.11328 7.5 3.5C7.5 4.88672 6.38672 6 5 6C3.61328 6 2.5 4.88672 2.5 3.5C2.5 2.11328 3.61328 1 5 1Z"
                      fill="#fff"
                    />
                  </svg>
                  <span id="userdata1">{isLoggedIn ? 'Logout' : 'Login'}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBar;
