import { AppBar, Toolbar, Typography, Box, InputBase, Button, IconButton, TextField } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";

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

const Brand = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: "1.4rem",
  cursor: "pointer",
  color: theme.palette.primary.main,
}));

const CenterText = styled(Typography)(({ theme }) => ({
  fontWeight: 500,
  color: '#232323',
  "&:hover": {
    color: theme.palette.primary.main,
  },
  display: "flex",
  gap: theme.spacing(1),
  alignItems: "center",
}));

const SearchBox = styled(Box)(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.text.primary, 0.05),
  "&:hover": {
    backgroundColor: alpha(theme.palette.text.primary, 0.1),
  },
  width: "220px",
  marginRight: theme.spacing(2),
}));

const SearchIconWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  display: "flex",
  alignItems: "center",
  pointerEvents: "none",
}));

const StyledInput = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  paddingLeft: `calc(1em + ${theme.spacing(4)})`,
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(1),
}));

const HeaderActions = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(2),
  flexShrink: 0,
  minHeight: '48px',
  position: 'relative',
  zIndex: 1,
}));

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

const StyledCenterBox = styled(Box)(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.up('md')]: {
    display: 'block',
  },
}));

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.text.primary,
  display: 'flex !important',
  visibility: 'visible !important',
  opacity: 1,
  minWidth: '48px',
  minHeight: '48px',
  padding: theme.spacing(1),
  '& .MuiSvgIcon-root': {
    fontSize: '1.5rem',
    color: theme.palette.text.primary,
  },
  '&:hover': {
    backgroundColor: alpha(theme.palette.text.primary, 0.08),
  },
}));

const MobileSearchBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  gap: theme.spacing(1),
}));

const MobileSearchTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    backgroundColor: theme.palette.background.paper,
  },
}));

export {
  NavbarWrapper,
  Brand,
  CenterText,
  SearchBox,
  SearchIconWrapper,
  StyledInput,
  HeaderActions,
  NavbarToolbar,
  StyledCenterBox,
  StyledIconButton,
  MobileSearchBox,
  MobileSearchTextField
};