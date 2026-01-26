import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const LoginButton = styled(Button)(({ theme }) => ({
  // Inherits from variant="contained" and fullWidth
}));

LoginButton.defaultProps = {
  variant: 'contained',
  fullWidth: true,
};

export default LoginButton;
