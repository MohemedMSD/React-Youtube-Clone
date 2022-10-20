import { IconButton, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../utils/constants";
import Searchbar from "./Searchbar";
import { useDispatch, useSelector } from "react-redux";
import {
  Change_Mode_APP,
  Select_Mode_APP,
} from "../redux/features/manageState";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
const Navbar = () => {
  // get dark in store
  const Dark_Mode = useSelector(Select_Mode_APP);
  const Dispatch = useDispatch();

  const addinLS = () => {
    // add statut for Dark_Mode mode in local storage
    localStorage.setItem("Mode", JSON.stringify(!Dark_Mode));
    // change statut for Dark_Mode in store
    Dispatch(Change_Mode_APP(Dark_Mode));
  };
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      bgcolor="background.default"
      p={2}
      sx={{ position: "sticky", top: 0, zIndex: 2 }}
    >
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <img src={logo} alt="logo" height={45} />
      </Link>
      <IconButton
        sx={{ color: "text.primary" }}
        className="btnmode"
        onClick={addinLS}
      >
        {Dark_Mode ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
      <Searchbar />
    </Stack>
  );
};

export default Navbar;
