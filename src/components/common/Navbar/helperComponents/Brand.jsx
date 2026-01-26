import { styled } from "@mui/material/styles";
import { AppTypography } from "../../../ui";

const Brand = styled(AppTypography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: "1.4rem",
  cursor: "pointer",
  color: theme.palette.primary.main,
}));

export default Brand;
