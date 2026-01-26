import { Link } from "@mui/material";
import { styled } from "@mui/material/styles";

const FooterLink = styled(Link, {
  name: "FooterLink",
  slot: "Root",
})(({theme}) => ({
  color: "#ffffffcc",
  "&:hover": {
    color: "#ffffff",
  },
}));

export default FooterLink;
