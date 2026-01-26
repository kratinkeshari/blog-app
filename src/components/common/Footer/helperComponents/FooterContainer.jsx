import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const FooterContainer = styled(Box, {
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

export default FooterContainer;
