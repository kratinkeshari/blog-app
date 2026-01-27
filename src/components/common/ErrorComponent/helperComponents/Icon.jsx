import { styled } from "@mui/material/styles";
import WarningAmberRoundedIcon from "@mui/icons-material/WarningAmberRounded";

const Icon = styled(WarningAmberRoundedIcon)(({ theme }) => ({
  fontSize: 90,
  color: theme.palette.warning.main,
  marginBottom: theme.spacing(2),
  [theme.breakpoints.down("md")]: {
    fontSize: 60,
  },
}));

export default Icon;
