import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

// Box that's only visible on mobile (xs to sm)
const MobileOnlyBox = styled(Box)(({ theme }) => ({
  display: 'block',
  [theme.breakpoints.up('md')]: {
    display: 'none',
  },
}));

export default MobileOnlyBox;
