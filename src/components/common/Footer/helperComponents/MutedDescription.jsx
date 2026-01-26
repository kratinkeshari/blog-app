import { styled } from "@mui/material/styles";
import MutedText from "./MutedText";

const MutedDescription = styled(MutedText, {
  name: "FooterMutedDescription",
  slot: "Root",
})(({ theme }) => ({
  marginTop: theme.spacing(1),
}));

export default MutedDescription;
