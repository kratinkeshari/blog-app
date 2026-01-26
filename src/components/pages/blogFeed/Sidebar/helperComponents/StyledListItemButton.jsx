import { ListItemButton } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledListItemButton = styled(ListItemButton, {
  shouldForwardProp: (prop) => prop !== 'isActive',
})(({ theme, isActive }) => ({
  borderRadius: theme.spacing(2),
  marginBottom: theme.spacing(0.5),
  backgroundColor: isActive ? theme.palette.action.selected : 'transparent',
  border: isActive ? '2px solid' : '2px solid transparent',
  borderColor: isActive ? theme.palette.primary.main : 'transparent',
  boxShadow: isActive ? theme.shadows[2] : 0,
  width: '100%',
  justifyContent: 'flex-start',
  '&:hover': {
    backgroundColor: isActive ? theme.palette.action.selected : theme.palette.action.hover,
  },
  [theme.breakpoints.down('md')]: {
    justifyContent: 'center',
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
  },
}));

export default StyledListItemButton;
