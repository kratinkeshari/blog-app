import {Box} from '@mui/material';
import { styled } from '@mui/material/styles';

const MainFlexBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  height: 'calc(100vh - 64px)',
  overflow: 'hidden'
}));

export default MainFlexBox;