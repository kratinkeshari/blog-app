import { Fab } from "@mui/material";
import { styled } from "@mui/material/styles";

const CreateBlogFab = styled(Fab, {
  name: "CreateBlogFab",
  slot: "Root",
})(({ theme }) => ({
  position: "fixed",
  bottom: 32,
  right: 32,
  zIndex: 1000,
  // Mobile responsive styles
  [theme.breakpoints.down('md')]: {
    bottom: 16,
    right: 16,
    width: 48,
    height: 48,
    minHeight: 48,
    '& .MuiSvgIcon-root': {
      fontSize: '1.25rem',
    },
  },
}));

export default CreateBlogFab;
