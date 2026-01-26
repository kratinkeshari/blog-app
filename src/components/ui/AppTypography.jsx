import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const AppTypography = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'weight' && prop !== 'textColor',
})(({ theme, weight, textColor }) => ({
  fontFamily: theme.typography.fontFamily,
  color: textColor || theme.palette.text.primary,
  fontWeight: weight || 'inherit',
  lineHeight: 1.5,
}));

export default AppTypography;
