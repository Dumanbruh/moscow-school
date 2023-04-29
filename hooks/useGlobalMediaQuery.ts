import { useMediaQuery, useTheme } from "@mui/material";

const useGlobalMediaQuery = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  return { isDesktop };
};

export default useGlobalMediaQuery;
