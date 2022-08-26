import styled from 'styled-components'
import Navbar from '../features/narbar/Navbar'
import Announcement from '../components/Announcement'
import Newsletter from '../components/NewsLetter'
import Footer from '../components/Footer'
import {mobile} from '../responsive'

const Container = styled.div`
   
`
const Wrapper = styled.div`
 width: 100vw;
      height: 100vh;
      /* background: linear-gradient(rgba(255,255,255, 0.5), rgba(255,255,255, 0.5)), url('https://i.ibb.co/6m50GFS/roman-denisenko.jpg') center; */
      background: url('https://i.ibb.co/6m50GFS/roman-denisenko.jpg') center;
      background-size: contain;
      background-repeat: no-repeat;
      background-size: 100%;
      padding: 50px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      opacity: 0.6;
     ${mobile({height: '100vh', padding: '0px', background: 'none'})}
`
const Title = styled.h1`
      font-weight: 200;
      color: #b37a7a;

      ${mobile({fontSize: '1.5rem'})}
`
const Form = styled.form`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    background-color: #ffffff;
    padding: 50px;
    border-radius: 16px;

    ${mobile({width: '90%', height: '100%', margin: '10px 10px', border:'2px solid red'})}
`
const Input = styled.input`
    width: 500px;
    height:50px;
    padding: 10px;
    font-size: 1.5rem;
    border-radius: 6px;
    border: 1px solid gray;

    ${mobile({width: '100%', height: '40px'})}
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

  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }

  ${mobile({width: "100%"})}
`

const ResetPassword = () => {
  return (
    <Container>
        <Navbar />
        <Announcement />
        <Wrapper>
            <Form>
              <Title>Provide your email address</Title>
              <Input placeholder = 'email' /> 
              <Button>SUBMIT</Button>
            </Form>
        </Wrapper>
        <Newsletter />
        <Footer />
    </Container>

  )
}

export default ResetPassword