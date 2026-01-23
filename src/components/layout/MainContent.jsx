import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const MainContent = styled(Box, {
  name: "MainContent",
  slot: "Root",
})(({ theme }) => ({
  flexGrow: 1,
  paddingTop: theme.spacing(3),
  display: 'flex',
  flexDirection: 'column',
}));

export default MainContent;
