import { Toolbar } from "@mui/material";
import { styled } from "@mui/material/styles";

const NavbarToolbar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  minHeight: 64,
  width: "100%",
  maxWidth: "100%",
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
}));

export default NavbarToolbar;
