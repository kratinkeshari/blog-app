import { styled } from '@mui/material/styles';
import {Typography} from '@mui/material';

const ReadMoreButton = styled('span')(({ theme }) => ({
  color: theme.palette.primary.main,
  cursor: 'pointer',
  fontWeight: 600,
  '&:hover': {
    textDecoration: 'underline',
  },
}));

export default ReadMoreButton;