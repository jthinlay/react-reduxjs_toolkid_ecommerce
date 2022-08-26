import styled from 'styled-components'
import Navbar from '../features/narbar/Navbar'
import Announcement from '../components/Announcement'
import Newsletter from '../components/NewsLetter'
import Footer from '../components/Footer'
import {mobile} from '../responsive'
import {Link} from 'react-router-dom'

const Container = styled.div`      
`
const Wrapper = styled.div`
       background: linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255, 0.5)),
       url('https://i.ibb.co/ThXKkX1/erol-ahmed-IHL-Jbawvvo-unsplash.jpg') center;
      background-size: contain;
      background-repeat: no-repeat;
      background-size: 100%;
      height: 100vh;  
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      ${mobile({ width: '100%', height: '60vh', background: 'none'})}
`
const Title = styled.h1`
      font-weight: 200;
      color: #ffffff;

      ${mobile({color: '#000000'})}
`
const Form = styled.form`
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 10px;
    border-radius: 16px;
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0, 0.2); /* Black w/opacity/see- */
    position: absolute;
    z-index:2;

    ${mobile({width: '90%'})}
`
const Input = styled.input`
    width: 500px;
    height:50px;
    padding: 10px;
    font-size: 1.5rem;
    border-radius: 6px;
    border: 1px solid gray;

    ${mobile({width: '90%'})}
`
const Button = styled.button`
  width: 20%;
  height: 50px;
  padding: 5px;
  font-size: 1.5rem;
  background-color: teal;
  color: #ffffff;
  border-radius: 5px;
  transition: all 0.5s ease;
  margin-top: 30px;

  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }

  ${mobile({width: "30%"})}
`
const LinkStyled = styled.a`
    margin-bottom: 10px;
    text-decoration: underline;
    cursor: pointer;

    &:hover{
        opacity: 0.5;
    }

    ${mobile({color: '#000000'})}
`

const Login = () => {
  return (
    <Container>
        <Navbar />
        <Announcement />
        <Wrapper>
            <Form>
                <Title>SIGN IN</Title>
                <Input placeholder = 'user name' />
                <Input placeholder = 'password' />
                <Button>LOGIN</Button>
                <LinkStyled><Link style={{color: 'black'}} to="/reset">FORGOT MY PASSWORD</Link></LinkStyled>
                <LinkStyled><Link style={{color: 'black'}} to="/register">CREATE A NEW ACCOUNT</Link></LinkStyled>
            </Form>
        </Wrapper>
        <Newsletter />
        <Footer />
    </Container>

  )
}

export default Login