import { styled } from "@mui/material/styles";
import { AppTypography } from "../../../ui";

const Title = styled(AppTypography)(({ theme }) => ({
  fontWeight: 600,
  fontSize: "1.2rem",
  color: theme.palette.text.primary,
}));

export default Title;
