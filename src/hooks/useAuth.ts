import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { IUser } from "../App/feature/user/userApi";
import { RootState } from "../App/store";

export default function useAuthCheck() {
  const navigate = useNavigate();
  const user = useSelector<RootState, Omit<IUser, "password">>(
    (state) => state.user
  );
  useEffect(() => {
    if (!!user) {
      navigate("/account/login");
    }
  }, [user._id]);
}
