import "./App.css";
import { Route, Routes } from "react-router-dom";
import {
  Layout,
  Netflix,
  Login,
  Signup,
  TVShow,
  Player,
  MoviePage,
  UserListedMovies,
} from "./pages/index";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Netflix />} />
        <Route path="/tv" element={<TVShow />} />
        <Route path="/new" element={<Player />} />
        <Route path="/mylist" element={<UserListedMovies />} />
        <Route path="/movies" element={<MoviePage />} />
      </Route>
    </Routes>
  );
}

export default App;
