import { useNavigate } from "react-router-dom";
import {StyledHeader, StyledButton} from "../style"
import styled from "styled-components";
import { goBack, goToHome, goToProfile } from "../router/coordinator";

const StyleImg = styled.img`
  width: 80px;
  height: 80px;
`

function Header() {

  const navigate = useNavigate();



  return (
    <StyledHeader>
      <StyledButton onClick={()=> goToHome(navigate)}>
        Ir para página inicial
      </StyledButton>
      <StyledButton onClick={()=> goToProfile(navigate)}>
        Ir para página de perfil
      </StyledButton>
      <div onClick={() => goBack(navigate)}>
        <StyleImg src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-uDYO0_YRovzPPHdlctDMBui7iYTi31QGFElS8Y3WqA&s" />
      </div>
    </StyledHeader>
  );
}

export default Header;
