import React from "react";
import styled from "styled-components";
import PricingTable from "../Elements/PricingTable";
import { ToastContainer, toast } from 'react-toastify';

export default function Pricing() {
  const notice = () => {
    toast.warning('Falta pouco, faça seu cadastro abaixo de desfrute de todos benefícios.', {
      position: toast.POSITION.BOTTOM_LEFT,
      autoClose: 5000, // Fechar automaticamente após 3 segundos
    });
  }
  return (
    <Wrapper id="pricing">
        <ToastContainer />
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Como funciona?</h1>
            <p className="font18">
            Nossos produtos funcionam como soluções inovadoras e eficientes, projetadas para atender às suas necessidades. Com tecnologia de ponta e qualidade excepcional, cada item é concebido para proporcionar experiências superiores, tornando a sua vida mais fácil, segura e satisfatória.
            </p>
          </HeaderInfo>
          <TablesWrapper className="flexSpaceNull">
            <TableBox>
              <PricingTable
                icon="roller"
                price="R$29,99/mês"
                title="Banco digital"
                offers={[
                  { name: "Conta digital", cheked: true },
                  { name: "Empréstimos", cheked: true },
                  { name: "Cesta de produtos", cheked: true },
                  { name: "Seguro de vida", cheked: true },
                  { name: "Clube ouro", cheked: true },
                ]}
                action={notice}
              />
            </TableBox>
            <TableBox>
              <PricingTable
                icon="monitor"
                price="R$49,99/mês"
                title="Assistência médica"
                offers={[
                  { name: "Consultas", cheked: true },
                  { name: "Exames", cheked: true },
                  { name: "Plano familiar", cheked: true },
                  { name: "Telemedicina", cheked: true },
                  { name: "Pronto atendimento", cheked: true },
                ]}
                action={notice}
              />
            </TableBox>
            <TableBox>
              <PricingTable
                icon="browser"
                price="R$59,99/mês"
                title="Restaurante"
                offers={[
                  { name: "Pague mais barato", cheked: true },
                  { name: "Cartão fidelidade", cheked: true },
                  { name: "Estabelecimentos conveniados", cheked: true },
                  { name: "Variedade gastronômica", cheked: true },
                  { name: "Cupon free", cheked: true },
                ]}
                action={notice}
              />
            </TableBox>
          </TablesWrapper>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  padding: 50px 0;
`;
const HeaderInfo = styled.div`
  margin-bottom: 50px;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const TablesWrapper = styled.div`
  @media (max-width: 860px) {
    flex-direction: column;
  }
`;
const TableBox = styled.div`
  width: 31%;
  @media (max-width: 860px) {
    width: 100%;
    max-width: 370px;
    margin: 0 auto
  }
`;




