import { styled } from "@mui/material/styles";
import { AppTypography } from "../../../ui";

const SubText = styled(AppTypography)(({ theme }) => ({
  marginTop: theme.spacing(0.5),
  color: theme.palette.text.secondary,
    // md and below -> hide
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

export default SubText;
