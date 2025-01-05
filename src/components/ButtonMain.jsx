import Button from "@mui/material/Button";
function ButtonMain({ props }) {
  return (
    <Button
      sx={{
        backgroundColor: "#FF5252",
        "&:hover": {
          color: "#fff",
          backgroundColor: "#000",
        },
      }}
      variant="contained"
    >
      {props}
    </Button>
  );
}

export default ButtonMain;
