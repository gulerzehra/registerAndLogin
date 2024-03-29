import styled from 'styled-components';


export const RegisterPageContainer = styled.div`
height: 100vh;
max-width: 100vw;
display: flex;
justify-content: center; 
align-items: center; 

`;





export const RegisterInfo = styled.div`
  width: 350px; /* Sabit genişlik */
  position: fixed; /* Sabit kalma özelliği */
  left: 120px; /* Sayfanın solundan 100px uzaklıkta */
  top: 45%; /* Sayfanın yukarısından dikey olarak ortalamak */
  transform: translateY(-50%); /* Dikey olarak ortalamak için */
  display: flex;
  flex-direction: column;
  padding: 20px;
  padding-bottom: 100px;


  .infodiv {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    // justify-content: space-between;
    
    h1 {
      color: black;
      text-align: center;
      font-size: 58px;
      font-style: normal;
      font-weight: 600;
      // line-height: 129%; /* 74.82px */
      margin-bottom:18px;
    }

    p{
      color: #000000;
      font-family: "Poppins", sans-serif;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      // line-height: normal;
      margin-top: 0px;
      padding-top: 0px;
      
    }
  }
`;

export const SingUpForm = styled.div`
width: 500px; /* Sabit genişlik */
position: fixed; /* Sabit kalma özelliği */
right: 200px; /* Sayfanın sağından 100px uzaklıkta */
top: 50%; /* Sayfanın yukarısından dikey olarak ortalamak */
transform: translateY(-50%); /* Dikey olarak ortalamak için */
display: flex;
flex-direction: column;
align-items: center;


  p{
    display: flex;
    align-items: flex-start;
    margin:18px;
    color:#747775;
    font-family: ubuntu-condensed;

  }

  input {
    margin-top: 20px;
    width: 530px;
    height: 60px;
    flex-shrink: 0;
    border-radius: 13px;
    border: 1px solid #f2f2f2;
    background: #f2f2f2;
    color: #000000;
    font-family: "Poppins", sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  }
  .register-button {
    margin-top: 20px;
    width: 143px;
    height: 46px;
    border-radius: 25px;
    background: #0A58D0;
    color: #ffffff;
    font-family: "Poppins", sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    border: none;
    cursor: pointer;
  }


  `;