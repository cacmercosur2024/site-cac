import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
// Assets
// import LogoImg from "../../assets/svg/Logo";

export default function Contact() {

  const getCurrentYear = () => {
    return new Date().getFullYear();
  }

  return (
    <Wrapper>
      <div className="darkBg">
        <div className="container">
          <InnerWrapper className="flexSpaceCenter" style={{ padding: "30px 0" }}>
            <h1 style={{justifyContent: 'center', textAlign: 'center'}} className="font15 extraBold whiteColor" >
            Rua Conselheiro Crispiniano,  398 - 6°, cj. 61/62 | São Paulo - SP | CEP - 01037-001
              </h1>
              <h1 className="font15 extraBold whiteColor" >
              Tel: 011-38513793 | 011-930107333
              </h1>
              <Link className="pointer" to="home" smooth={true} offset={-80}>
            <StyleP className="whiteColor font13">
              © {getCurrentYear()} - <span className="purpleColor font13">cacmercosur</span>
            </StyleP>
            </Link>
            <Link className="whiteColor animate pointer font13" to="home" smooth={true} offset={-80}>
              Voltar ao topo
            </Link>
          </InnerWrapper>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;
const InnerWrapper = styled.div`
  @media (max-width: 550px) {
    flex-direction: column;
  }
`;
const StyleP = styled.p`
  @media (max-width: 550px) {
    margin: 20px 0;
  }
`;