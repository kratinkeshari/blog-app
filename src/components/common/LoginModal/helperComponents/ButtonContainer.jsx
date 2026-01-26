import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const ButtonContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    gap: theme.spacing(2),
}));

export default ButtonContainer;
