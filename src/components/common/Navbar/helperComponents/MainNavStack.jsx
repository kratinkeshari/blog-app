import { Stack } from "@mui/material";
import { styled } from "@mui/material/styles";

const MainNavStack = styled(Stack, {
  shouldForwardProp: (prop) => prop !== 'isMobileSearchOpen',
})(({ theme, isMobileSearchOpen }) => ({
  direction: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  display: isMobileSearchOpen ? 'none' : 'flex',
  [theme.breakpoints.up('md')]: {
    display: 'flex',
  },
}));

export default MainNavStack;
