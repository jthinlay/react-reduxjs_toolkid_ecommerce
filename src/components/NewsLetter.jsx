import { Send } from '@mui/icons-material'
import styled from 'styled-components'
import {mobile} from '../responsive'

const Container = styled.div`
    height: 60vh;
    background-color: #dfdfdd;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const Title = styled.h1`
    font-size: 82px;
    margin-bottom: 20px;

    ${mobile({fontSize: '3rem'})}
`
const Desc = styled.div`
    font-size: 34px;
    font-weight: 300;
    margin-bottom: 20px;
    letter-spacing: 0.3em;

    ${mobile({textAlign: 'center', fontSize: '2rem'})}
`
const InputContainer = styled.div`
    background-color: white;
    border: none;
    width: 50%;
    height: 50px;
    margin:20px;
    font-size:30px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${mobile({width: '80%',  paddingLeft: '10px', margin: '5px'})}
`
const Input = styled.input`
    font-size: 30px;
    flex: 8;
    border: none;
    padding-left: 70px;

    ${mobile({paddingLeft: '10px', fontSize: '1rem'})}
`
const Button = styled.button`
    flex: 1;
    height: 100%;
    border: none;
    cursor: pointer;
    background-color: teal;
    color: #fff;
`

const NewsLetter = () => {
  return (
    <Container>
       <Title>Newsletter</Title>
       <Desc>Get timely updates on our new products...</Desc>
       <InputContainer>
        <Input placeholder="Your email" />
        <Button>
            <Send />
        </Button>
       </InputContainer>
    </Container>

  )
}

export default NewsLetter