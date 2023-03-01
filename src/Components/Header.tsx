import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clear } from "../App/feature/conversation/conversationSlice";
import { Add, Bars } from "../icons/Icons";

interface Props {
  setOpen: any;
}

const Header = ({ setOpen }: Props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <header>
      <nav>
        <ul className="navbar">
          <li>
            <button onClick={() => setOpen((open: boolean) => !open)}>
              <Bars />
            </button>
          </li>
          <li>
            <p className="nav-title"></p>
          </li>
          <li>
            <button
              onClick={() => {
                navigate("/chat");
                dispatch(clear());
              }}
            >
              <Add />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
