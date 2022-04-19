import { Presentation } from "./styles";
import { StyledButton } from "../../App";

import { useParams, Link } from "react-router-dom";

const Home = () => {
  const { user } = useParams();

  return (
    <Presentation>
      <h1>Bem vindo(a) {user}!</h1>
      <Link to="/">
        <StyledButton>Voltar</StyledButton>
      </Link>
    </Presentation>
  );
};

export default Home;
