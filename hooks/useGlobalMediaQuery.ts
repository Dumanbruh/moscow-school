import { useMediaQuery, useTheme } from "@mui/material";

const useGlobalMediaQuery = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery("(min-width:700px)");

  return { isDesktop };
};

export default useGlobalMediaQuery;
