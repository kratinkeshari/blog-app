import { IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";

const NavigationButton = styled(IconButton)(({ theme }) => ({
  flexShrink: 0,
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

export default NavigationButton;
