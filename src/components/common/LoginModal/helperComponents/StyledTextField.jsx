import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledTextField = styled(TextField)(({ theme }) => ({
    marginBottom: theme.spacing(2),
}));

StyledTextField.defaultProps = {
  fullWidth: true,
  variant: 'outlined',
};

export default StyledTextField;
