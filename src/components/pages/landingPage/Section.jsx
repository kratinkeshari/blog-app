import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const Section = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  padding: theme.spacing(3),
  gap: theme.spacing(3),
  width: "100%",
  maxWidth: "100%",
}));

export default Section;
