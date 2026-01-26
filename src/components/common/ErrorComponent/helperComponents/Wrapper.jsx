import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const Wrapper = styled(Box)(() => ({
  width: "100%",
  minHeight: "300px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
}));

export default Wrapper;
