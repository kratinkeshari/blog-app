import { styled } from '@mui/material/styles';
import {Typography} from '@mui/material';

const BlogContent = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  lineHeight: 1.7,
  marginBottom: theme.spacing(2),
}));

export default BlogContent;