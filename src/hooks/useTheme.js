import { createTheme } from "@mui/material/styles";

export default function useTheme() {
  const newTheme = createTheme({
    palette: {
      custom: {
        main: "#fff",
        light: "#fff",
        dark: "#fff",
        contrastText: "#fff",
      },
    },
    components: {
      MuiTextField: {
        defaultProps: {
          color: "custom",
          InputProps: {
            sx: {
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "white",
              },
            },
          },
          InputLabelProps: { sx: { color: "white" } },

          inputProps: {
            style: { color: "white" },
          },
          sx: {
            "&:hover fieldset": {
              borderColor: "white !important",
            },
          },
        },
      },

      MuiSelect: {
        defaultProps: {
          color: "custom",
          MenuProps: {
            MenuListProps: {
              sx: {
                color: "white",
                backgroundColor: "var(--color-bg)",
              },
            },
          },
          sx: {
            "&:hover fieldset": {
              borderColor: "white !important",
            },
            "& .MuiSelect-icon, .MuiSelect-nativeInput, .MuiSelect-outlined": {
              color: "white",
              borderColor: "white",
            },
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "white",
            },
          },
        },
      },
    },
  });

  return newTheme;
}
