import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import ROUTES from "../constants/routes";
import { useSelector } from "react-redux";

const Protected = ({ children }) => {
  const navigate = useNavigate();
  const { isLoggedIn } = useSelector((state) => state.auth);

  console.log("===isLoggedIn===", isLoggedIn)

  useEffect(() => {
    if (!isLoggedIn) {
      navigate(ROUTES.PUBLIC.LOGIN);
    }
  }, [isLoggedIn, navigate]);

  if (isLoggedIn) {
    return children;
  }
};

export default Protected;
