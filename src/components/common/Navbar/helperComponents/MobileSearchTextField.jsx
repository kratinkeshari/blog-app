import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

const MobileSearchTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    backgroundColor: theme.palette.background.paper,
  },
}));

export default MobileSearchTextField;
