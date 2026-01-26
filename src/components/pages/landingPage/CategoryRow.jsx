import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const CategoryRow = styled(Box, {
  name: "CategoryRow",
  slot: "Root",
})(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: theme.spacing(2),
  width: '100%',
  flexDirection: 'row',
  padding: theme.spacing(2, 0),
  
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    gap: theme.spacing(3),
  },
}));

export default CategoryRow;
