import Button from "@mui/material/Button";
function ButtonMain({ text, size = 150 }) {
  return (
    <Button
      sx={{
        backgroundColor: "#FF5252",
        width: `${size}px`,
        "&:hover": {
          color: "#fff",
          backgroundColor: "#000",
        },
      }}
      variant="contained"
    >
      {text}
    </Button>
  );
}

export default ButtonMain;
