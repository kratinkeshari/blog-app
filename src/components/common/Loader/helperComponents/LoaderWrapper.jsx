import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const LoaderWrapper = styled(Box, {
  name: "LoaderWrapper",
  slot: "Root",
  shouldForwardProp: (prop) => prop !== "fullScreen",
})(({ fullScreen }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: fullScreen ? "100vh" : "100%",
  minHeight: fullScreen ? "100vh" : "300px",
}));

export default LoaderWrapper;
