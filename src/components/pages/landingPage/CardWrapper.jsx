import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

// Scale values for depth effect: position 0 (left) is largest
const getScaleForPosition = (position) => {
  const scales = [1.0, 0.95, 0.9, 0.85, 0.8]; // Left to right: largest to smallest
  return scales[position] || 0.7;
};

const getOpacityForPosition = (position) => {
  const opacities = [1.0, 0.95, 0.9, 0.85, 0.8];
  return opacities[position] || 0.65;
};

const CardWrapper = styled(Box, {
  name: "CardWrapper",
  slot: "Root",
  shouldForwardProp: (prop) => prop !== 'position',
})(({ theme, position = 0 }) => ({
  display: 'flex',
  transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
  transformOrigin: 'center',
  
  // Mobile: no scaling
  transform: 'scale(1)',
  opacity: 1,
  
  // Desktop: apply depth effect
  [theme.breakpoints.up('md')]: {
    transform: `scale(${getScaleForPosition(position)})`,
    opacity: getOpacityForPosition(position),
    // Left card has higher z-index
    zIndex: 5 - position,
    
    '&:hover': {
      transform: `scale(${Math.min(getScaleForPosition(position) + 0.05, 1.05)})`,
      opacity: 1,
      zIndex: 10,
    },
  },
  
  // Hide cards beyond responsive limits
  [theme.breakpoints.down('sm')]: {
    display: position > 0 ? 'none' : 'flex', // 1 card on mobile
  },
  [theme.breakpoints.between('sm', 'md')]: {
    display: position > 2 ? 'none' : 'flex', // 3 cards on tablet
  },
}));

export default CardWrapper;
