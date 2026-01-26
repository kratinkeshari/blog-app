import { Divider } from "@mui/material";
import { styled } from "@mui/material/styles";

const FooterDivider = styled(Divider, {
  name: "FooterDivider",
  slot: "Root",
})(({ theme }) => ({
  marginTop: theme.spacing(3),
  marginBottom: theme.spacing(3),
  borderColor: "#ffffff",
}));

export default FooterDivider;
