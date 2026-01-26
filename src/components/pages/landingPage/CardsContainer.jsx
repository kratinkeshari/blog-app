import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const CardsContainer = styled(Box, {
  name: "CardsContainer",
  slot: "Root",
})(({ theme }) => ({
  display: "grid",
  gap: theme.spacing(2),
  justifyContent: "center",
  alignItems: "center",
  width: '100%',
  maxWidth: '1600px',
  transition: 'all 0.5s ease-in-out',
  
  // Mobile: 2 cards
  gridTemplateColumns: 'repeat(2, 1fr)',
  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: '1fr', // 1 card on very small screens
    maxWidth: '400px',
  },
  
  // Tablet: 3 cards
  [theme.breakpoints.between('sm', 'md')]: {
    gridTemplateColumns: 'repeat(3, 1fr)',
    maxWidth: '900px',
  },
  
  // Desktop: 5 cards with depth effect
  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: 'repeat(5, 1fr)',
    gap: theme.spacing(1.5),
  },
}));

export default CardsContainer;
