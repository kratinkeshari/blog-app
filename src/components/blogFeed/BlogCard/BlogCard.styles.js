import { styled } from '@mui/material/styles';
import {Card, Box, Typography} from '@mui/material';

const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 600,
  margin: 'auto',
  marginBottom: theme.spacing(3),
  transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: theme.shadows[8],
  },
}));

const CategoryAuthorBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
  marginTop: theme.spacing(1),
  marginBottom: theme.spacing(2),
}));

const BlogContent = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  lineHeight: 1.7,
  marginBottom: theme.spacing(2),
}));

const ReadMoreButton = styled('span')(({ theme }) => ({
  color: theme.palette.primary.main,
  cursor: 'pointer',
  fontWeight: 600,
  '&:hover': {
    textDecoration: 'underline',
  },
}));

const LikeSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  borderTop: `1px solid ${theme.palette.divider}`,
  paddingTop: theme.spacing(1),
}));

export {
  StyledCard,
  CategoryAuthorBox,
  BlogContent,
  ReadMoreButton,
  LikeSection
};