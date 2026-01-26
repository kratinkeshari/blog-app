import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const SidebarTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  marginBottom: theme.spacing(2),
  padding: theme.spacing(2),
  paddingBottom: 0,
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(1),
    paddingBottom: 0,
    fontSize: '0',
    '&::after': {
      content: '"☰"',
      fontSize: '1.5rem',
    },
  },
}));

export default SidebarTitle;
