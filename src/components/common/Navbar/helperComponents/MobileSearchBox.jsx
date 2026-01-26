import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const MobileSearchBox = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'isOpen',
})(({ theme, isOpen }) => ({
  display: isOpen ? 'flex' : 'none',
  width: '100%',
  alignItems: 'center',
  gap: theme.spacing(1),
  [theme.breakpoints.up('md')]: {
    display: 'none',
  },
}));

export default MobileSearchBox;
