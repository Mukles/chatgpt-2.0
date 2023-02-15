import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { IUser } from "../App/feature/user/userApi";
import { RootState } from "../App/store";

interface Props {
  children: React.ReactNode;
}

const PublicRoute = ({ children }: Props) => {
  const { state } = useLocation();

  const user = useSelector<RootState, Omit<IUser, "password">>(
    (state) => state.user
  );

  if (user._id && user.token) {
    return <Navigate to={state?.from ?? "/"} />;
  }

  return <>{children}</>;
};

export default PublicRoute;
