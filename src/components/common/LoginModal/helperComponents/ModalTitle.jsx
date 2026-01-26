import { styled } from "@mui/material/styles";
import { AppTypography } from "../../../ui";

const ModalTitle = styled(AppTypography)(({ theme }) => ({
    marginBottom: theme.spacing(3),
    fontWeight: 600,
    backgroundColor: theme.palette.primary.main,
    borderRadius: theme.shape.borderRadius,
    width: 'fit-content',
    padding: theme.spacing(1),
    color: theme.palette.primary.soft,
}));

ModalTitle.defaultProps = {
  variant: 'h5',
  component: 'h2',
};

export default ModalTitle;
