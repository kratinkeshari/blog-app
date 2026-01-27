import { styled } from "@mui/material/styles";
import { AppTypography } from "../../../ui";

const Title = styled(AppTypography)(({ theme }) => ({
  fontWeight: 600,
  fontSize: "1.2rem",
  color: theme.palette.text.primary,
    // md and below -> hide
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

export default Title;
