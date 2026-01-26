import AppTypography from "../../../../ui/AppTypography";
import { styled } from "@mui/material/styles";

const BlogTitle = styled(AppTypography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

BlogTitle.defaultProps = {
  variant: "h5",
  component: "h2",
  weight: 600,
};

export default BlogTitle;
