import React from "react";
import styled from "styled-components";
// Components
import BlogBox from "../Elements/BlogBox";
// import FullButton from "../Buttons/FullButton";
import TestimonialSlider from "../Elements/TestimonialSlider";

export default function Blog() {
  return (
    <Wrapper id="blog">
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Quem somos?</h1>
            <p className="font18 justify">
            Somos uma equipe apaixonada e diversificada, unida por um propósito comum: desafiar limites e alcançar a excelência. Nossa força reside na colaboração e na busca incessante pela inovação, impulsionando-nos a superar obstáculos e criar soluções que impactam positivamente o mundo ao nosso redor. Nosso compromisso com a integridade, respeito e qualidade molda nossa identidade, inspirando confiança e construindo relações sólidas à medida que continuamos a evoluir e enfrentar novos horizontes.


              <br />
              <br />
              Em cada projeto, cada desafio, somos mais do que uma equipe; somos uma comunidade unida por valores compartilhados e pela determinação de deixar um legado duradouro. Nossa jornada é guiada pela paixão por fazer a diferença, capacitando-nos a enfrentar o desconhecido com coragem, adaptabilidade e a certeza de que, juntos, somos capazes de alcançar grandeza.
            </p>
          </HeaderInfo>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="Parceiro"
                text="Buscamos integrar as melhores solução para a sua comodidade caminhoneiro."
                // tag="ao clicar"
                author="SEU AMIGO!"
                // action={() => alert("mensagem!!")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="Facilitador"
                text="Levando você para as melhores oportunidades com nossos parceiros"
                // tag="ao clicar"
                author="INTEGRAÇÃO"
                // action={() => alert("mensagem!!")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="Dignidade"
                text="Reconhecemos que você é uma peça fundamental para o desenvolvimento de nosso país. "
                // tag="ao clicar"
                author="VOCÊ É IMPORTANTE"
                // action={() => alert("mensagem!!")}
              />
            </div>
          </div>
          {/* <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="Texto 4"
                text="Finalizar texto."
                tag="ao clicar"
                author="TEXTO À FINALIZAR"
                action={() => alert("mensagem!!")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="Texto 5"
                text="Finalizar texto."
                tag="ao clicar"
                author="TEXTO À FINALIZAR"
                action={() => alert("mensagem!!")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="Texto 6"
                text="Finalizar texto."
                tag="ao clicar"
                author="TEXTO À FINALIZAR"
                action={() => alert("mensagem!!")}
              />
            </div>
          </div> */}
          <div className="row flexCenter">
            <div style={{ margin: "50px 0", width: "200px" }}>
              {/* <FullButton title="Load More" action={() => alert("mensagem!!")} /> */}
            </div>
          </div>
        </div>
      </div>
      <div className="lightBg" style={{padding: '50px 0'}}>
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">O que falam?</h1>
            <p className="font18">
            O que falam de nós é o reflexo da nossa dedicação incansável, da qualidade que entregamos e do compromisso em superar as expectativas. Cada palavra é um testemunho do nosso esforço em construir uma reputação baseada na excelência e confiabilidade."
            </p>
          </HeaderInfo>
          <TestimonialSlider />
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  padding-top: 20px;
`;
const HeaderInfo = styled.div`
  margin-bottom: 30px;
  @media (max-width: 860px) {
    text-align: center;
  }
`;