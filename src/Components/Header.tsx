import { useNavigate } from "react-router-dom";
import { Add, Bars } from "../icons/Icons";

interface Props {
  setOpen: any;
}

const Header = ({ setOpen }: Props) => {
  const navigate = useNavigate();
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
            <button onClick={() => navigate("/chat")}>
              <Add />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
