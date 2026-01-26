import { Tooltip } from "@mui/material";
import { styled } from "@mui/material/styles";

// Tooltip that only shows on mobile (when text is hidden)
const ResponsiveTooltip = styled(Tooltip)(({ theme }) => ({
  '& .MuiTooltip-tooltip': {
    display: 'block',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

export default ResponsiveTooltip;
