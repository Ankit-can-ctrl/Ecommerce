import Button from "@mui/material/Button";
function ButtonMain({ text, size = 150, bgColor = "#FF5252" }) {
  return (
    <Button
      sx={{
        backgroundColor: bgColor,
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
