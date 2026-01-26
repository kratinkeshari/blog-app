import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

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

export default ModalBox;
