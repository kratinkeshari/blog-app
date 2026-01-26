import {Box} from '@mui/material';
import { styled } from '@mui/material/styles';

const ContentBox = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  overflowY: 'auto',
  height: '100%'
}));

export default ContentBox;