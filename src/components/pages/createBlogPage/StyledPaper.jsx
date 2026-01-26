import { Alert } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledAlert = styled(Alert)(({ theme }) => ({
  marginBottom: theme.spacing(2),
    backgroundColor: theme.palette.secondary.soft,
}));

export default StyledAlert;
