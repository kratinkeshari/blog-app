import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledList = styled(Box)(({ theme }) => ({
  flex: 1,
  overflowY: 'auto',
  padding: theme.spacing(1),
}));

export default StyledList;
