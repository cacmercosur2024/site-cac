import React from "react";
import styled from "styled-components";
// Components
import ClientSlider from "../Elements/ClientSlider";
import ServiceBox from "../Elements/ServiceBox";
// import FullButton from "../Buttons/FullButton";
// Assets
import AddImage1 from "../../assets/img/002.png";
import AddImage2 from "../../assets/img/manutencao.png";
import AddImage3 from "../../assets/img/trucks.png";
import AddImage4 from "../../assets/img/medical.png";

export default function Services() {
  return (
    <Wrapper id="services">
      <div className="lightBg" style={{ padding: "50px 0" }}>
        <div className="container">
          <ClientSlider />
        </div>
      </div>
      <div className="whiteBg" style={{ padding: "60px 0" }}>
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">O que oferecemos?</h1>
            <p className="font18 semiBold">
            Ofereçemos mais do que simples produtos, proporcionamos a você soluções que simplifiquem sua jornada, garantindo conforto, segurança e eficiência em cada quilômetro percorrido.
              <br />
              Este é o nosso objetivo.
            </p>
          </HeaderInfo>
          <ServiceBoxRow className="flex">
            <ServiceBoxWrapper>
              <ServiceBox
                icon="roller"
                title="Banco digital"
                subtitle="Com o nosso banco digital, a revolução financeira está na ponta dos seus dedos: simplicidade, segurança e inovação para transformar suas transações em experiências excepcionais."
                // Gestão simplificada através de aplicativos.
                // Cartões de Débito e Crédito:
                
                // Emissão de cartões virtuais e físicos.
                // Controle total via aplicativo.
                // Transferências Instantâneas:
                
                // Transferências entre contas do mesmo banco em tempo real.
                // Pagamentos e Boletos:
                
                // Pagamento de contas e boletos de forma prática.
                // Investimentos Online:
                
                // Acesso a opções de investimento com facilidade.
                // Empréstimos e Financiamentos:
                
                // Simulações e solicitações de crédito online.
                // Notificações e Alertas:
                
                // Recebimento de notificações em tempo real sobre transações.
                // Extratos Digitais:
                
                // Consulta de saldos e extratos via aplicativo.
                // Atendimento Online:
                
                // Suporte ao cliente por meio de chat, e-mail ou telefone.
                // Segurança Avançada:
                
                // Tecnologias de segurança como autenticação em duas etapas.
                // Cashback e Programas de Recompensa:
                
                // Benefícios e recompensas por uso frequente dos serviços.
                // Funcionalidades Específicas:
                
                // Serviços customizados, como divisão de contas e metas de economia.
                // Ao oferecer esses serviços, um banco digital busca proporcionar uma experiência financeira moderna, flexível e conveniente aos seus clientes.
                
                
                
                
                
                // `}
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox
                icon="monitor"
                title="Assistência médica"
                subtitle="Promovemos cuidado além da saúde, proporcionando tranquilidade e apoio constante para que cada jornada seja guiada pela proteção e bem-estar."
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox
                icon="browser"
                title="Restaurantes"
                subtitle="Em nosso restaurante, cada prato é uma obra-prima, preparada com paixão e dedicação, proporcionando uma experiência culinária única que encanta paladares e cria memórias irresistíveis."
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox icon="printer" title="Peças e manutenção" subtitle="Com nosso compromisso em peças e manutenção, garantimos a eficiência e durabilidade do seu veículo, oferecendo soluções confiáveis para mantê-lo sempre em pleno funcionamento." />
            </ServiceBoxWrapper>
          </ServiceBoxRow>
        </div>
        <div className="lightBg">
          <div className="container">
            <Advertising className="flexSpaceCenter">
              <AddLeft>
                <h4 className="font18 semiBold">Uma estrutura completa.</h4>
                <h2 className="font40 extraBold">Pontos fortes.</h2>
                <p className="font18">
                Nosso ponto forte é mais do que uma característica, é o alicerce que nos destaca. Nele, encontramos a excelência, a inovação e a dedicação que impulsionam o nosso compromisso em superar expectativas e conquistar a confiança dos nossos clientes.
                </p>
                {/* <ButtonsRow className="flexNullCenter" style={{ margin: "30px 0"}}>
                  <div style={{ width: "190px" }}>
                    <FullButton title="Get Started" action={() => alert("clicked")} />
                  </div>
                  <div style={{ width: "190px", marginLeft: "15px" }}>
                    <FullButton title="Contact Us" action={() => alert("clicked")} border />
                  </div>
                </ButtonsRow> */}
              </AddLeft>
              <AddRight>
                <AddRightInner>
                  <div className="flexNullCenter">
                    <AddImgWrapp1 className="flexCenter">
                      <img src={AddImage1} alt="office" />
                    </AddImgWrapp1>
                    <AddImgWrapp2>
                      <img src={AddImage2} alt="office" />
                    </AddImgWrapp2>
                  </div>
                  <div className="flexNullCenter">
                    <AddImgWrapp3>
                      <img src={AddImage3} alt="office" />
                    </AddImgWrapp3>
                    <AddImgWrapp4>
                      <img src={AddImage4} alt="office" />
                    </AddImgWrapp4>
                  </div>
                </AddRightInner>
              </AddRight>
            </Advertising>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const ServiceBoxRow = styled.div`
  @media (max-width: 860px) {
    flex-direction: column;
  }
`;
const ServiceBoxWrapper = styled.div`
  width: 20%;
  margin-right: 5%;
  padding: 80px 0;
  @media (max-width: 860px) {
    width: 100%;
    text-align: center;
    padding: 40px 0;
  }
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Advertising = styled.div`
  margin: 80px 0;
  padding: 100px 0;
  position: relative;
  @media (max-width: 1160px) {
    padding: 100px 0 40px 0;
  }
  @media (max-width: 860px) {
    flex-direction: column;
    padding: 0 0 30px 0;
    margin: 80px 0 0px 0;
  }
`;
// const ButtonsRow = styled.div`
//   @media (max-width: 860px) {
//     justify-content: space-between;
//   }
// `;
const AddLeft = styled.div`
  width: 50%;
  p {
    max-width: 475px;
    text-align: justify
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
  position: absolute;
  top: -70px;
  right: 0;
  @media (max-width: 860px) {
    width: 80%;
    position: relative;
    order: 1;
    top: -40px;
  }
`;
const AddRightInner = styled.div`
  width: 100%;
`;
const AddImgWrapp1 = styled.div`
  width: 48%;
  margin: 0 6% 10px 6%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp2 = styled.div`
  width: 30%;
  margin: 0 5% 10px 5%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp3 = styled.div`
  width: 20%;
  margin-left: 40%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp4 = styled.div`
  width: 30%;
  margin: 0 5%auto;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;