import { Box, Typography, Stack, Link, Divider } from "@mui/material";
import { styled } from "@mui/material/styles";

/* Footer root */
export const FooterWrapper = styled(Box, {
  name: "FooterWrapper",
  slot: "Root",
})(({ theme }) => ({
  backgroundColor: "#232323",
  color: "#ffffff",
  marginTop: 'auto',
  paddingTop: theme.spacing(4),
  paddingBottom: theme.spacing(4),
  width: '100vw',
  maxWidth: '100vw',
  marginLeft: 0,
  marginRight: 0,
  paddingLeft: 0,
  paddingRight: 0,
  boxSizing: 'border-box',
  position: 'relative',
  left: '50%',
  right: '50%',
  marginLeft: '-50vw',
  marginRight: '-50vw',
}));

/* Main row */
export const FooterLayout = styled(Stack, {
  name: "FooterLayout",
  slot: "Root",
})(({ theme }) => ({
  justifyContent: "space-between",
}));

/* Brand block */
export const FooterBrand = styled(Box, {
  name: "FooterBrand",
  slot: "Root",
})(() => ({}));

/* Column blocks */
export const FooterColumn = styled(Stack, {
  name: "FooterColumn",
  slot: "Root",
})(() => ({}));

/* Muted text */
export const MutedText = styled(Typography, {
  name: "FooterMutedText",
  slot: "Root",
})(() => ({
  color: "#ffffffcc",
}));

/* Divider */
export const FooterDivider = styled(Divider, {
  name: "FooterDivider",
  slot: "Root",
})(({ theme }) => ({
  marginTop: theme.spacing(3),
  marginBottom: theme.spacing(3),
  borderColor: "#ffffff",
}));

/* Links */
export const FooterLink = styled(Link, {
  name: "FooterLink",
  slot: "Root",
})(() => ({
  color: "#ffffffcc",
  "&:hover": {
    color: "#ffffff",
  },
}));

export const MutedDescription = styled(MutedText, {
  name: "FooterMutedDescription",
  slot: "Root",
})(({ theme }) => ({
  marginTop: theme.spacing(1),
}));

/* Footer content container */
export const FooterContainer = styled(Box, {
  name: "FooterContainer",
  slot: "Root",
})(({ theme }) => ({
  maxWidth: theme.breakpoints.values.lg,
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  [theme.breakpoints.up('sm')]: {
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
  },
}));
