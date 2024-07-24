import React from "react";
import styled from "styled-components";
// Components
import ProjectBox from "../Elements/ProjectBox";
import { ToastContainer, toast } from 'react-toastify';
import ProjectImg1 from "../../assets/img/Marketing.png";
import ProjectImg2 from "../../assets/img/th.jpeg";
import ProjectImg3 from "../../assets/img/th1.jpeg";
import ProjectImg4 from "../../assets/img/th2.jpeg";
import ProjectImg5 from "../../assets/img/th3.jpeg";
import ProjectImg6 from "../../assets/img/th4.jpeg";
import AddImage2 from "../../assets/img/home.png";

export default function Projects() {
  const notice = () => {
    toast.info('Texto para cada item.', {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 3000,
      bodyStyle: {
        width: 300,
        height: 200
      } // Fechar automaticamente após 3 segundos
    });
  }
  return (
    <Wrapper id="projects">
       <ToastContainer />
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Nossos projetos</h1>
            <p className="font18">
            Nossos projetos são a expressão tangível da nossa visão e compromisso. Cada empreendimento é concebido com cuidado e paixão, refletindo não apenas nossa expertise, mas também nossa dedicação em superar desafios e criar soluções inovadoras. Desde iniciativas pioneiras até empreendimentos que fazem a diferença na vida das pessoas, nossos projetos representam o nosso constante esforço em elevar padrões, promover impacto positivo e deixar um legado duradouro. Junte-se a nós nessa jornada, onde a excelência é o destino e cada projeto é uma oportunidade de fazer história.
              <br />
              {/* Conheça */}
            </p>
          </HeaderInfo>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg1}
                title="Marketing place"
                text="Tudo em um único lugar"
                action={notice}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg2}
                title="Imobiliário"
                text="Pensando no seu bem estar."
                action={notice}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg3}
                title="Banco digital"
                text="Na palma de sua mão."
                action={notice}
              />
            </div>
          </div>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg4}
                title="Estaciomento"
                text="Segurança para você e seu veículo."
                action={notice}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg5}
                title="Lavagem"
                text="Serviço completo."
                action={notice}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg6}
                title="Auto peças"
                text="Seu socorro rápido."
                action={notice}
              />
            </div>
          </div>
          <div className="row flexCenter">
            <div style={{ margin: "50px 0", width: "200px" }}>
              {/* <FullButton title="Load More" action={() => alert("clicked")} /> */}
            </div>
          </div>
        </div>
      </div>
      <div className="lightBg">
        <div className="container">
          <Advertising className="flexSpaceCenter">
            <AddLeft>
              <AddLeftInner>
                <ImgWrapper className="flexCenter">
                  <img className="radius8" src={AddImage2} alt="add" />
                </ImgWrapper>
              </AddLeftInner>
            </AddLeft>
            <AddRight>
              <h4 className="font18 semiBold">Nosso comprometimento.</h4>
              <h2 className="font40 extraBold">Lhe proporcionar bem estar!</h2>
              <p className="font18">
              Nosso comprometimento vai além das palavras; é um pacto diário com a excelência, a transparência e a satisfação do cliente. Estamos dedicados a superar expectativas, construindo relações sólidas baseadas na confiança e no respeito mútuo.
              </p>
              <ButtonsRow className="flexNullCenter" style={{ margin: "30px 0" }}>
                <div style={{ width: "190px" }}>
                  {/* <FullButton title="Get Started" action={() => alert("clicked")} /> */}
                </div>
                <div style={{ width: "190px", marginLeft: "15px" }}>
                  {/* <FullButton title="Contact Us" action={() => alert("clicked")} border /> */}
                </div>
              </ButtonsRow>
            </AddRight>
          </Advertising>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Advertising = styled.div`
  padding: 100px 0;
  margin: 100px 0;
  position: relative;
  @media (max-width: 1160px) {
    padding: 60px 0 40px 0;
  }
  @media (max-width: 860px) {
    flex-direction: column;
    padding: 0 0 30px 0;
    margin: 80px 0 0px 0;
  }
`;
const ButtonsRow = styled.div`
  @media (max-width: 860px) {
    justify-content: space-between;
  }
`;
const AddLeft = styled.div`
  position: relative;
  width: 50%;
  p {
    max-width: 475px;
  }
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
    text-align: center;
    h2 {
      line-height: 3rem;
      margin: 15px 0;
    }
    p {
      margin: 0 auto;
    }
  }
`;
const AddRight = styled.div`
  width: 50%;
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
  }
`;
const AddLeftInner = styled.div`
  width: 100%;
  position: absolute;
  top: -300px;
  left: 0;
  @media (max-width: 1190px) {
    top: -250px;
  }
  @media (max-width: 920px) {
    top: -200px;
  }
  @media (max-width: 860px) {
    order: 1;
    position: relative;
    top: -60px;
    left: 0;
  }
`;
const ImgWrapper = styled.div`
  width: 100%;
  padding: 0 15%;
  img {
    width: 100%;
    height: auto;
  }
  @media (max-width: 400px) {
    padding: 0;
  }
`;
