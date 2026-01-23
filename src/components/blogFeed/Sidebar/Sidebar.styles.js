import { Box, Typography, ListItemButton, ListItemIcon } from "@mui/material";
import { styled } from "@mui/material/styles";

const SidebarWrapper = styled(Box)(({ theme }) => ({
  width: 260,
  height: '100%',
  borderRight: `1px solid ${theme.palette.divider}`,
  backgroundColor: theme.palette.background.paper,
  display: 'flex',
  flexDirection: 'column',
  [theme.breakpoints.down('md')]: {
    width: 72,
  },
}));

const SidebarTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  marginBottom: theme.spacing(2),
  padding: theme.spacing(2),
  paddingBottom: 0,
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(1),
    paddingBottom: 0,
    fontSize: '0',
    '&::after': {
      content: '"☰"',
      fontSize: '1.5rem',
    },
  },
}));

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

const StyledListItemIcon = styled(ListItemIcon)(({ theme }) => ({
  minWidth: 36,
}));

const StyledList = styled(Box)(({ theme }) => ({
  flex: 1,
  overflowY: 'auto',
  padding: theme.spacing(1),
}));

const StyledDivider = styled(Box)(({ theme }) => ({
  height: 1,
  backgroundColor: theme.palette.divider,
  marginLeft: theme.spacing(2),
  marginRight: theme.spacing(2),
  marginBottom: theme.spacing(1),
  [theme.breakpoints.down('md')]: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
}));

export {
  SidebarWrapper,
  SidebarTitle,
  StyledListItemButton,
  StyledListItemIcon,
  StyledList,
  StyledDivider
};