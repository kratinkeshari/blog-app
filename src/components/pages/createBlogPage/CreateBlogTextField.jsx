import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

const CreateBlogTextField = styled(TextField)(({ theme }) => ({
  width: '100%',
}));

// Set default props common to all TextFields
CreateBlogTextField.defaultProps = {
  fullWidth: true,
  required: true,
};

export default CreateBlogTextField;
