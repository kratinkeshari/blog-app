import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

const LoginTextField = styled(TextField)(({ theme }) => ({
    marginBottom: theme.spacing(2),
}));

LoginTextField.defaultProps = {
  fullWidth: true,
  variant: 'outlined',
};

export default LoginTextField;
