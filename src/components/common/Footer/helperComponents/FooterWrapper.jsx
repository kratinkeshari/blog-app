import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const FooterWrapper = styled(Box, {
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

export default FooterWrapper;
