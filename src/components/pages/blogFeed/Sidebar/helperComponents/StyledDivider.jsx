import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledDivider = styled(Box)(({ theme }) => ({
  height: 1,
  backgroundColor: theme.palette.divider,
  marginLeft: theme.spacing(2),
  marginRight: theme.spacing(2),
  marginBottom: theme.spacing(1),
  [theme.breakpoints.down('md')]: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
}));

export default StyledDivider;
