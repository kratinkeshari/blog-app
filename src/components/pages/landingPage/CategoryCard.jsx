import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const CategoryCard = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'position',
})(({ theme, position = 0 }) => ({
  height: "100%",
  minHeight: "280px",
  width: "100%",
  borderRadius: theme.shape.borderRadius * 2,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
  cursor: "pointer",
  position: 'relative',
  overflow: 'hidden',
  
  [theme.breakpoints.up('md')]: {
    minHeight: "320px",
  },
  
  "&:hover": {
    transform: "translateY(-8px)",
    boxShadow: theme.shadows[12],
    
    '& .card-overlay': {
      background: 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3))',
    },
  },
}));

export const CardImage = styled('img')(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  objectPosition: 'center',
  zIndex: 0,
  display: 'block',
}));

export const CardOverlay = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  background: 'linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55))',
  zIndex: 1,
  transition: 'background 0.3s ease',
}));

export default CategoryCard;
