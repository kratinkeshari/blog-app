import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const HeaderActions = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(2),
  flexShrink: 0,
  minHeight: '48px',
  position: 'relative',
  zIndex: 1,
}));

export default HeaderActions;
