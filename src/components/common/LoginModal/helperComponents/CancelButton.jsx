import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const CancelButton = styled(Button)(({ theme }) => ({
  // Inherits from variant="outlined" and fullWidth
}));

CancelButton.defaultProps = {
  variant: 'outlined',
  fullWidth: true,
};

export default CancelButton;
