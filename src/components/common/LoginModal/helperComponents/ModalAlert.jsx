import { Alert } from "@mui/material";
import { styled } from "@mui/material/styles";

const ModalAlert = styled(Alert)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

ModalAlert.defaultProps = {
  severity: 'error',
};

export default ModalAlert;
