import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const MutedText = styled(Typography, {
  name: "FooterMutedText",
  slot: "Root",
})(() => ({
  color: "#ffffffcc",
}));

export default MutedText;
