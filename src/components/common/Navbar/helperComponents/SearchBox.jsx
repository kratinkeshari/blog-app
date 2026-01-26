import { Box } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";

const SearchBox = styled(Box)(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.text.primary, 0.05),
  "&:hover": {
    backgroundColor: alpha(theme.palette.text.primary, 0.1),
  },
  width: "220px",
  marginRight: theme.spacing(2),
}));

export default SearchBox;
