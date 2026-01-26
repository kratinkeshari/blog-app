import { IconButton } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.text.primary,
  display: 'flex !important',
  visibility: 'visible !important',
  opacity: 1,
  minWidth: '48px',
  minHeight: '48px',
  padding: theme.spacing(1),
  '& .MuiSvgIcon-root': {
    fontSize: '1.5rem',
    color: theme.palette.text.primary,
  },
  '&:hover': {
    backgroundColor: alpha(theme.palette.text.primary, 0.08),
  },
}));

export default StyledIconButton;
