import LoaderWrapper from "./helperComponents/LoaderWrapper";
import CircularProgress from "@mui/material/CircularProgress";

export default function Loader({ size = 40}) {
  return (
    <LoaderWrapper>
      <CircularProgress size={size} />
    </LoaderWrapper>
  );
}
