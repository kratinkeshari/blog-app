import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const ExploreButton = styled(Button)(({ theme }) => ({
  minWidth: '200px',
  paddingTop: theme.spacing(1.5),
  paddingBottom: theme.spacing(1.5),
  paddingLeft: theme.spacing(4),
  paddingRight: theme.spacing(4),
  fontSize: '1rem',
  [theme.breakpoints.up('sm')]: {
    minWidth: '280px',
    fontSize: '1.1rem',
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(5),
  },
  [theme.breakpoints.up('md')]: {
    minWidth: '350px',
    fontSize: '1.2rem',
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    paddingLeft: theme.spacing(6),
    paddingRight: theme.spacing(6),
  },
}));

export default ExploreButton;
