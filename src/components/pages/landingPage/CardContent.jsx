import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const CardContent = styled(Box)(({ theme }) => ({
  textAlign: "center",
  color: "#ffffffcc",
  position: 'relative',
  zIndex: 2,
}));

export default CardContent;
