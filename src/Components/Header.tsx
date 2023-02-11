import { Add, Bars } from "../icons/Icons";

interface Props {
  setOpen: any;
}

const Header = ({ setOpen }: Props) => {
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
            <p>Interview Info for Developer</p>
          </li>
          <li>
            <button>
              <Add />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
