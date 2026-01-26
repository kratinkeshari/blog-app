import { styled } from "@mui/material/styles";
import { AppTypography } from "../../../ui";

const TitleTypography = styled(AppTypography)(({ theme }) => ({
    fontSize: '1.25rem',
    color : theme.palette.primary.main
}));

TitleTypography.defaultProps = {
  variant: 'h6',
  weight: 'bold',
};

export default TitleTypography;
