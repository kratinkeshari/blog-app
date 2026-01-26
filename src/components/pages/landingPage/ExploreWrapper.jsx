import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const ExploreWrapper = styled(Box, {
  name: "ExploreWrapper",
  slot: "Root",
})(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: theme.spacing(4),
  width: '100%',
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  paddingTop: theme.spacing(2),
  paddingBottom: theme.spacing(2),
}));

export default ExploreWrapper;
