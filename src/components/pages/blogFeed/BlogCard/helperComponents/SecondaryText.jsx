import AppTypography from "../../../../ui/AppTypography";
import { styled } from "@mui/material/styles";

const SecondaryText = styled(AppTypography)(({ theme }) => ({
  color: theme.palette.text.secondary,
}));

SecondaryText.defaultProps = {
  variant: "body2",
};

export default SecondaryText;
