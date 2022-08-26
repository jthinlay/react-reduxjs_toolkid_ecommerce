import { EmailOutlined, Facebook, Instagram, Phone, Pinterest, Room, Twitter } from '@mui/icons-material'
import styled from 'styled-components'
import {mobile} from '../responsive'

const Container = styled.div`
    display: flex;
    background-color: #f2f1db;
    align-items: center;
    justify-content: center;

    ${mobile({flexDirection:'column', height: '100vh', paddingBottom: '50px'})}
`
const Left = styled.div`
    flex: 1;
    padding: 20px;
    display: flex;
    flex-direction: column;
`
const Logo = styled.img`
    margin: 20px;
    width: 30%;
    ${mobile({margin: 'auto'})}
`
const Desc = styled.p`
    margin: 20px 0px;
    font-size: 1.5rem;
    padding: 20px;
    color: gray;
`
const SocialContainer = styled.div`
    display: flex;
    padding: 20px;
`
const SocialIcon = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #${props => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    cursor: pointer;
    transition: all 0.5s ease;

    &:hover {
        transform: scale(1.1);
        opacity: 0.5;
    }
`

const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({display: 'none'})}
`
const Title = styled.h3`
    font-size: 2rem;
    margin-bottom: 40px;
    text-align: center;
    color: gray;
`
const List = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    
`
const ListItem = styled.li`
   font-size: 1.5rem;
   width: 50%;
   margin-bottom: 10px;
   color: gray;
   cursor: pointer;
   transition: all 0.5s ease;

   &:hover{
       transform: scale(1.1);
   }
`
const Right = styled.div`
    flex: 1;
    padding: 20px;
    text-align: center;
    ${mobile({padding: '30px 5px', backgroundColor: '#f2f5af'})}
`
const Address = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const Street = styled.p`
    font-size: 1.5rem;
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: center;

    ${mobile({fontSize: '1rem'})}
`
const Tel = styled.h5`
    font-size: 20px;
    font-weight: 300;
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Email = styled.p`
    font-style: italic;
    font-size: 20px;
    font-weight: 200;
    padding:10px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Payment = styled.img`
    padding: 10px;
    width: 50%;
    object-fit: cover;
    cursor: pointer;
`
const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo src="../jt_logo.ico" alt="logo" />
            <Desc>
                We are highly dedicated to bringing you products that satisfy your imagination and your style. 
                Our mission is to fulfill our customer needs and tranform their style into reality.  
            </Desc>
            <SocialContainer>
                <SocialIcon color="3B5999">
                    <Facebook />
                </SocialIcon>
                <SocialIcon color="E4405F">
                    <Instagram />
                </SocialIcon>
                <SocialIcon color="55ACEE">
                    <Twitter />
                </SocialIcon>
                <SocialIcon color="E60023">
                    <Pinterest />
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Chart</ListItem>
                <ListItem>Man Fashion</ListItem>
                <ListItem>Woman Fashion</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact Us</Title>
            <Address>
                <Street><Room style={{marginRight: "10px"}}/> 100 Main Street San Francisco, CA 94568</Street>
                <Tel><Phone style={{marginRight: "10px"}}/> 415-476-2846</Tel>
                <Email><EmailOutlined style={{marginRight: "10px"}}/> Admin@domain.com</Email>
            </Address>
            <Payment src="https://i.ibb.co/6PQwtfp/payment-icon-prev-ui.png" alt='payment option icons'/>
        </Right>
    </Container>
  )
}

export default Footer