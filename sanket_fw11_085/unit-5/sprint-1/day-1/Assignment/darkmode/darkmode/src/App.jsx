
import './App.css';
import { useContext } from 'react';
import { ThemeContext } from './contexts/ThemeContext';
import styled from "styled-components"

const Div = styled.div`
  background-color:${(props) => props.theme === "light" ? "white" : "black"};
  color:${(props) => props.theme === "light" ? "black" : "white"};
  height: 100vh;
  margin:0;
  padding:0;
  text-align:center;
  padding-top:50px;
  & p{
    font-size:2rem;

  }

 
  
`

const Button = styled.button`
background: purple;
color: white;
width: 200px;
height: 50px;
border-radius: 10px;
font-size: 1.5em;

`

const Form = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 1rem;
border: 1px solid ${(props) => props.theme === "light" ? "black" : "white"};

& input{
    font-size: 1.5em;
    margin: 1rem;
    border-radius: 10px;
    border: 1px solid black;
    padding: 1rem;

}

`




function App() {

  const { theme, handleTheme } = useContext(ThemeContext);

  return (
    <>
      <Div theme={theme}>

        <h1 style={{ margin: 0, padding: 0 }}>Change the theme by clicking the button</h1>
        <br />
        <Button onClick={() => {
          handleTheme("dark");
        }}>
          {theme}
        </Button>

        <p >I created feature that is dark mode which is used in many web pages. I have achieved this using react.Js with the use of the topics like context API and Styled components. </p>

      <Form>
        <input type="text" placeholder="email" />
        <input type="password" placeholder="password" />
        <Button>Submit</Button>
      </Form>







    </Div>
    </>
  );
}

export default App;
