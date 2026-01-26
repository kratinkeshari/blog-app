import { styled } from '@mui/material/styles';
import {Box} from '@mui/material';

const LikeSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  borderTop: `1px solid ${theme.palette.divider}`,
  paddingTop: theme.spacing(1),
}));

export default LikeSection;