import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const SidebarWrapper = styled(Box)(({ theme }) => ({
  width: 260,
  height: '100%',
  borderRight: `1px solid ${theme.palette.divider}`,
  backgroundColor: theme.palette.background.paper,
  display: 'flex',
  flexDirection: 'column',
  [theme.breakpoints.down('md')]: {
    width: 72,
  },
}));

export default SidebarWrapper;
