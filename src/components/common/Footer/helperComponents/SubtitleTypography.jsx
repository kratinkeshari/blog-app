import { styled } from "@mui/material/styles";
import { AppTypography } from "../../../ui";

const SubtitleTypography = styled(AppTypography)(({ theme }) => ({
    color : theme.palette.primary.soft
}));
SubtitleTypography.defaultProps = {
  variant: 'subtitle1',
  weight: 'bold',
};

export default SubtitleTypography;
