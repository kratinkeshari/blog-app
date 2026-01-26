import { Stack } from "@mui/material";
import { styled } from "@mui/material/styles";

const FooterLayout = styled(Stack, {
  name: "FooterLayout",
  slot: "Root",
})(({ theme }) => ({
  justifyContent: "space-between",
}));

export default FooterLayout;
