import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import logo from "../../public/mycmpny.png";
import { Sidebar } from "./Sidebar";
export const Navbar = ({ screenSize }) => {
  console.log(screenSize, "SCREEN_SIZE");
  return (
    <nav className="p-5 flex justify-between align-middle">
      {screenSize <= 500 ? (
        <Sidebar />
      ) : (
        <Link to="/">
          <img className="w-26 h-14" src={logo} alt="logo" />
        </Link>
      )}

      <div>
        <Avatar
          alt="Remy Sharp"
          src="https://www.perkosis.com/uploads/staffs/big/9.jpg"
        />
      </div>
    </nav>
  );
};
