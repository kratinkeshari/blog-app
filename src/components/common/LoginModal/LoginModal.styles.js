import { Typography, Box, TextField, Alert } from "@mui/material"
import { styled } from "@mui/material/styles"

const ModalBox = styled(Box)(({ theme }) => ({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    boxShadow: 24,
    padding: theme.spacing(4),
    borderRadius: theme.spacing(2),
}));

const ModalTitle = styled(Typography)(({ theme }) => ({
    marginBottom: theme.spacing(3),
    fontWeight: 600,
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
    marginBottom: theme.spacing(2),
}));

const ButtonContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    gap: theme.spacing(2),
}));

const ModalAlert = styled(Alert)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

export { ModalBox, ModalTitle, StyledTextField, ButtonContainer, ModalAlert };
