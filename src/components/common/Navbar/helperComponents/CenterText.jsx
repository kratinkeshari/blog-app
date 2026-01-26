import { styled } from "@mui/material/styles";
import { AppTypography } from "../../../ui";

const CenterText = styled(AppTypography)(({ theme }) => ({
  fontWeight: 500,
  color: '#232323',
  "&:hover": {
    color: theme.palette.primary.main,
  },
  display: "flex",
  gap: theme.spacing(1),
  alignItems: "center",
}));

export default CenterText;
