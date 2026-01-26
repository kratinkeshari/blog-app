import { styled } from '@mui/material/styles';
import {Box} from '@mui/material';

const CategoryAuthorBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
  marginTop: theme.spacing(1),
  marginBottom: theme.spacing(2),
}));

export default CategoryAuthorBox;