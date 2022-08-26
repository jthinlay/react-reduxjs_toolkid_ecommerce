import styled from "@emotion/styled"
import {mobile} from '../responsive'

const Container = styled.div`
    width: 100%; 
    background-color: teal;
    height: 50px;
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    font-weight: 500;
   
    ${mobile({fontSize: '14px'})}
`
const Message = styled.p`
  color: lightblue;
`

const Announcement = () => {
  return (
    <Container>
      <Message>
        All products sale with discount for 25% off this weekend.
      </Message>     
    </Container>
  )
}

export default Announcement