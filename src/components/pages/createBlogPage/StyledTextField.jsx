import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledTextField = styled(TextField)(({ theme }) => ({
  width: '100%',
}));

// Set default props common to all TextFields
StyledTextField.defaultProps = {
  fullWidth: true,
  required: true,
};

export default StyledTextField;
