import {LoaderWrapper} from "./Loader.styles";
import CircularProgress from "@mui/material/CircularProgress";

export default function Loader({ size = 40, fullScreen = false }) {
  return (
    <LoaderWrapper>
      <CircularProgress size={size} />
    </LoaderWrapper>
  );
}
