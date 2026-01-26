import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

// Box that's only visible on desktop (md+)
const DesktopOnlyBox = styled(Box)(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.up('md')]: {
    display: 'block',
  },
}));

export default DesktopOnlyBox;
