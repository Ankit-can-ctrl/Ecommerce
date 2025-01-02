import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FF5252",
    },
  },
});

function SearchBar() {
  return (
    <div className="flex gap-5 items-center justify-center">
      <input
        className="bg-gray-100 rounded-sm h-[42px] md:w-[300px] xl:w-[600px] outline-none p-2 text-gray-500"
        type="text"
      />
      <ThemeProvider theme={theme}>
        <Button variant="contained" size="large" color="primary">
          Search
        </Button>
      </ThemeProvider>
    </div>
  );
}

export default SearchBar;
