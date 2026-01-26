import { ListItemText } from "@mui/material";
import { styled } from "@mui/material/styles";

// ListItemText that's hidden on mobile, visible on desktop
const ResponsiveListItemText = styled(ListItemText)(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.up('md')]: {
    display: 'block',
  },
}));

export default ResponsiveListItemText;
