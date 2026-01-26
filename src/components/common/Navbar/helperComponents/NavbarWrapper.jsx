import { AppBar } from "@mui/material";
import { styled } from "@mui/material/styles";

const NavbarWrapper = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.primary,
  boxShadow: "none",
  borderBottom: `1px solid ${theme.palette.divider}`,
  zIndex: theme.zIndex.drawer + 2,
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
}));

export default NavbarWrapper;
