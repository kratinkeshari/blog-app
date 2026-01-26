import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const SearchIconWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  display: "flex",
  alignItems: "center",
  pointerEvents: "none",
}));

export default SearchIconWrapper;
