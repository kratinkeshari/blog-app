import {Box} from '@mui/material';
import { styled } from '@mui/material/styles';

const SidebarBox = styled(Box)(({ theme }) => ({
  flexShrink: 0,
  overflowY: 'auto',
  height: '100%'
}));

export default SidebarBox;