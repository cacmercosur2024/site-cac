/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useCallback} from "react";
import styled from "styled-components";
import Api from '../../service/Api';
import { ToastContainer, toast } from 'react-toastify';
// Assets
// import ContactImg1 from "../../assets/img/contact-1.png";
// import ContactImg2 from "../../assets/img/contact-2.png";
// import ContactImg3 from "../../assets/img/contact-3.png";

export default function Contact() {
  const [nome, setNome] = useState('')
  const [endereco] = useState('')
  const [bairro, setBairro] = useState('')
  const [number, setNumber] = useState('')
  const [address, setAddress] = useState('')
  const [cep, setCep] = useState('')
  const [municipaly, setMunicipaly] = useState('')
  const [state, setState] = useState('')
  const [pais, setPais] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [, setBase] = useState([])

  
  const result = {
    nome,
    endereco,
    number,
    address,
    municipaly,
    state,
    email,
    phone,
   
    
  }
  
  const handle = useCallback(async(event) => {
    event.preventDefault()
    if(nome === '' || address === '' || phone === '' || email === '' || municipaly === '' ||
    state === '' || pais === '' || cep === '' ) {
      toast.warn('Atenção, Preencha todos os dados!', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 5000, // Fechar automaticamente após 3 segundos
      });
      // alert("Preencha todos os campos!!")
    } else{
      try {
        const response = await Api.post('/basecreate', {
          name: nome,
          cep: cep,
          country: pais,
          neighborhood: bairro,
          state: state,
          municipality: municipaly,
          address: address,
          cell_phone: phone,
          numeric: number,
          email: email,
        });
        setBase(response.data);
        toast.success('Parabéns, agora você faz parte deste time!', {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 5000, // Fechar automaticamente após 3 segundos
        });
        setNome('')
        setCep('')
        setPais('')
        setBairro('')
        setState('')
        setMunicipaly('')
        setAddress('')
        setPhone('')
        setNumber('')
        setEmail('')
      }catch(err)  {
        if (err.message === 'Request failed with status code 406') {
          toast.error('Atenção, motorista já cadastrado!', {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 5000, // Fechar automaticamente após 3 segundos
          });
        }
        console.log(err.message);
      }
    }
  }, [result]);

  return (
    <Wrapper id="contact">
      <ToastContainer />
      <div className="lightBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Cadastre-se e faça parte desta família.</h1>
            <p className="font18">
            Se você compartilha nossa paixão pela excelência e está pronto para fazer parte de uma equipe dedicada ao sucesso, estamos ansiosos para recebê-lo. Cadastre-se agora e junte-se a nós na busca incessante pela inovação e qualidade que definem nosso time.
              <br />
              Aguardamos por você, amigo caminhoneiro!
            </p>
          </HeaderInfo>
              <Form  onSubmit={handle}>
          <div className="row" style={{ paddingBottom: "30px" }}>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <label className="font17">Nome completo* :</label>
                <input onChange={(e) => setNome(e.target.value)} type="text"    className="font20 extraBold" />
                <label className="font17">Email* :</label>
                <input onChange={(e) => setEmail(e.target.value)} type="text"   className="font20 extraBold" />
                <label className="font17">Telefone* :</label>
                <input onChange={(e) => setPhone(e.target.value)} type="text"   className="font20 extraBold" />
                <label className="font17">Cep* :</label>
                <input onChange={(e) => setCep(e.target.value)} type="text"   className="font20 extraBold" />
                <label className="font17">Endereço* :</label>
                <input onChange={(e) => setAddress(e.target.value)} type="text"   className="font20 extraBold" />
                {/* <textarea rows="4" cols="50" type="text" id="message" name="message" className="font20 extraBold" /> */}
            {/* <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6"> */}
              
                </div>
            {/* </div> */}
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <label className="font17">número* :</label>
                <input onChange={(e) => setNumber(e.target.value)} type="text"    className="font20 extraBold" />
                <label className="font17">bairro* :</label>
                <input onChange={(e) => setBairro(e.target.value)} type="text"   className="font20 extraBold" />
                <label className="font17">Município* :</label>
                <input onChange={(e) => setMunicipaly(e.target.value)} type="text"  className="font20 extraBold" />
                <label className="font17">Estado* :</label>
                <input onChange={(e) => setState(e.target.value)} type="text"   className="font20 extraBold" />
                <label className="font17">País* :</label>
                <input onChange={(e) => setPais(e.target.value)} type="text"   className="font20 extraBold" />
                {/* <textarea rows="4" cols="50" type="text" id="message" name="message" className="font20 extraBold" /> */}
              </div>
                <SumbitWrapper className="flex">
                  <ButtonInput type="submit" value="Enviar" className="pointer radius8" style={{ maxWidth: "220px", textAlign: 'center', backgroundColor: '#bed3f3', width: '200px', height: '40px', fontSize: 16 }} />
                </SumbitWrapper>
              </div>
              </Form>
             
              {/* <div style={{ width: "50%" }} className="flexNullCenter flexColumn"> */}
              {/* <Form>
                <label className="font13">número:</label>
                <input type="text" id="fname" name="num" className="font20 extraBold" />
                <label className="font13">bairro:</label>
                <input type="text" id="fname" name="num" className="font20 extraBold" />
                <label className="font13">Município:</label>
                <input type="text" id="email" name="email" className="font20 extraBold" />
                <label className="font13">Estado:</label>
                <input type="text" id="subject" name="subject" className="font20 extraBold" />
              </Form> */}
                {/* <ContactImgBox>
                  <img src={ContactImg1} alt="office" className="radius6" />
                </ContactImgBox>
                <ContactImgBox>
                  <img src={ContactImg2} alt="office" className="radius6" />
                </ContactImgBox> */}
              {/* </div> */}
              {/* <div style={{ width: "50%" }}>
                <div style={{ marginTop: "100px" }}>
                  <img src={ContactImg3} alt="office" className="radius6" />
                </div>
              </div> */}
            {/* </div> */}
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`
  padding: 70px 0 30px 0;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Form = styled.form`
  padding: 70px 0 30px 0;
  input,
  textarea {
    width: 100%;
    background-color: transparent;
    border: 0px;
    outline: none;
    box-shadow: none;
    border-bottom: 1px solid #707070;
    height: 30px;
    margin-bottom: 30px;
  }
  textarea {
    min-height: 100px;
  }
  @media (max-width: 860px) {
    padding: 30px 0;
  }
`;
const ButtonInput = styled.input`
  border: 3px solid #7620ff;
  background-color: #7620ff;
  width: 30px;
  height: 60px;
  padding: 5px;
  outline: none;
  color: #004dcf;
  :hover {
    background-color: #580cd2;
    border: 1px solid #7620ff;
    color: #004dcf;
  }
  @media (max-width: 991px) {
    margin: 0 auto;
  }
`;
// const ContactImgBox = styled.div`
//   max-width: 180px; 
//   align-self: flex-end; 
//   margin: 10px 30px 10px 0;
// `;
const SumbitWrapper = styled.div`
  @media (max-width: 991px) {
    width: 100%;
    margin-bottom: 50px;
  }
`;









