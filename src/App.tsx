import { useNavigate } from "react-router-dom";
import { Stack, Button } from "@mui/material";
import { favKey } from "./UpdateFavorites";

function App() {

  const navigate = useNavigate();

  return (
    <Stack spacing={2}>
      <Button onClick={() => navigate("/search")}>Search</Button>
      <Button onClick={() => navigate("/favorites")}>Favorites</Button>
      <Button onClick={() => localStorage.removeItem(favKey)}>Clear Favorites</Button>
    </Stack>
  )
}

export default App
