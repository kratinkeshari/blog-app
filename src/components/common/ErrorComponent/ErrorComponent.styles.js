import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import WarningAmberRoundedIcon from "@mui/icons-material/WarningAmberRounded";

const Wrapper = styled(Box)(() => ({
  width: "100%",
  minHeight: "300px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
}));

const Icon = styled(WarningAmberRoundedIcon)(({ theme }) => ({
  fontSize: 90,
  color: theme.palette.warning.main,
  marginBottom: theme.spacing(2),
}));

const Title = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  fontSize: "1.2rem",
  color: theme.palette.text.primary,
}));

const SubText = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(0.5),
  color: theme.palette.text.secondary,
}));

export { Wrapper, Icon, Title, SubText };