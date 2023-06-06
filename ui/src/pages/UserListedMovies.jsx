import { useSelector } from "react-redux";
import { Card } from "../components";
import styled from "styled-components";

const UserListedMovies = () => {
  const favoriteMovies = useSelector((state) => state.user.favoriteMovies);

  return (
    <>
    <Container>
    <h3 className="title">좋아하는 영화 목록</h3>
    <Wrap className="flex ">
      {favoriteMovies.map((movie, i) => (
        <Card
          movieData={movie}
          i={i}
          key={movie.id}
          isLiked={favoriteMovies.some((m) => m.id === movie.id)}
        />
      ))}
    </Wrap>
    </Container>
    </>
  );
};
const Container = styled.div`
  margin: 8rem 1rem 0;
  gap: 1rem;
  min-height: 100vh;
  .title {
    margin-bottom: 2rem;
  }
`;
const Wrap = styled.div`
  gap: 1rem;
  width: max-content;
`;
export default UserListedMovies;
