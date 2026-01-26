import { InputBase } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledInput = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  paddingLeft: `calc(1em + ${theme.spacing(4)})`,
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(1),
}));

export default StyledInput;
