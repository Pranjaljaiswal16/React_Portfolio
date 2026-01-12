import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { navlink } from "../data/dummyData";
import { useState } from "react";
import { Menu } from "@mui/icons-material";

const Header = () => {
  const [Responsive, SetResponsive] = useState(false);

  return (
    <>
      <header>
        <div className="container flexsb">
          <div className="logo">
            <img src={Logo} alt="logo" />
          </div>

          <div className={Responsive ? "hideMenu" : "nav"}>
            {navlink.map((links, i) => {
              return (
                <>
                  <Link to={"links.url"} key={i}>
                    {links.text}
                  </Link>
                </>
              );
            })}
          </div>

          <button className="toggle" onClick={() => SetResponsive(!Responsive)}>
            <Menu className="icon"></Menu>
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
