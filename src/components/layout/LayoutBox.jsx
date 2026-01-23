import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const LayoutBox = styled(Box, {
  name: "LayoutBox",
  slot: "Root",
})(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
  width: '100%',
  maxWidth: '100%',
  margin: 0,
  padding: 0,
  overflowX: 'hidden',
}));

export default LayoutBox;
