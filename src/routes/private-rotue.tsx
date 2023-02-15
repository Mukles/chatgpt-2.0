import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { IUser } from "../App/feature/user/userApi";
import { RootState } from "../App/store";

interface Props {
  children: React.ReactNode;
}

const Private = ({ children }: Props) => {
  const { pathname } = useLocation();
  const user = useSelector<RootState, Omit<IUser, "password">>(
    (state) => state.user
  );

  if (!(user._id && user.token)) {
    return <Navigate to={"/account/login"} state={{ from: pathname }} />;
  }

  return <>{children}</>;
};

export default Private;
