import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledCenterBox = styled(Box)(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.up('md')]: {
    display: 'block',
  },
}));

export default StyledCenterBox;
