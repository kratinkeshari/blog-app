import { Container } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledContainer = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(6),
//   backgroundColor: theme.palette.secondary.soft,
//   color: theme.palette.secondary.soft,
}));

export default StyledContainer;
