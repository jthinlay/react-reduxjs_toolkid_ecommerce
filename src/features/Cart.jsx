import styled from 'styled-components'
import Navbar from '../features/narbar/Navbar'
import Announcement from '../components/Announcement'
import NewsLetter from '../components/NewsLetter'
import Footer from '../components/Footer'
import { Add, Remove } from '@mui/icons-material'
import {mobile} from '../responsive'

const Container = styled.div`
 ${mobile({overFlow: 'hide',boxSizing: 'contentBox',
width: '100%', boxsize: 'box'})}
`
const Wrapper = styled.div`
    padding: 20px;
    ${mobile({boxSizing: 'border-box', width: '100%', padding: '5px'})}
`
const Title = styled.h1`
    font-size: 2rem;
    font-weight: 100;
    text-align: center;
`
const Top = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   padding:20px;

   ${mobile({flexDirection: 'column', padding: '10px', width: '100%'})}
`
const TopButton = styled.button`
    width: 16%;
    height: 50px;
    font-size: 1.3rem;
    cursor: pointer;
    border: ${props=> props.type === 'filled' && 'none'};
    background-color: ${props=> props.type === 'filled' ? 'black':'transparent'};
    color: ${props=> props.type === 'filled' && 'white'};

    ${mobile({width: '100%', margin: '10px'})}
`
 const TopText = styled.span`
    margin: 0px 10px;
    color: gray;
    text-decoration: underline;
    cursor: pointer;

    ${mobile({display: 'none'})}
 `

  const Bottom = styled.div`
     padding: 20px;
     display: flex;
     justify-content: space-between;
     align-items: center;

     ${mobile({width: '100%', display: 'flex', flexDirection:'column'})}
  `
  const Info = styled.div`
    flex:3;
    display: flex;
    flex-direction: column;
  `
  const Product = styled.div`
      flex: 2;
      display: flex;
      align-items: center;
      justify-content: space-between;

      ${mobile({flexDirection: 'column'})}
  `
  const ProductDetail = styled.div`
  flex:2;
  display: flex;
  
`
  const Image = styled.img`
    width: 300px;
    height: 300px;
    object-fit: cover;

    ${mobile({width: '200px', height: '200px', padding: '10px'})}
  `
  const Details = styled.div`
    flex: 1;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around; 

    ${mobile({padding: '10px 0px'})}
  `
  
  const ProductName = styled.div`
    font-size: 1.5rem;
    font-weight: 300;
    margin: 20px 0;
    ${mobile({fontSize: '1rem', margin: '5px 0'})}
  
  `
  const ProductId = styled.span`
    font-size: 1.5rem;
    font-weight: 300;
    margin: 10px 0;
    ${mobile({fontSize: '1rem'})}

  `
  const ProductColor = styled.div`
    width: 20px;
    height:20px;
    border-radius: 50%;
    background-color: ${props => props.color};
    
  `
  const ProductSize = styled.span`
    font-size: 1.5rem;
    font-weight: 300;
    margin: 20px 0;
    ${mobile({fontSize: '1rem'})}
  `
  const PriceDetail = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; 

    ${mobile({flexDirection: 'column', padding: '20px', margin: '10px'})}
  
  `
  const ProductPrice = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    font-weight: 200;
    ${mobile({fontSize: '2rem', marginBottom: '30px'})}
  `
  const ProductAmount = styled.span`
    font-weight: 300;
    font-size: 2rem;
    margin: 5px;

    ${mobile({margin: '5px 25px',fontSize: '1.5rem', paddingTop: '10px'})}
  `
  const ProductQuantity = styled.span`
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 10px 0;
      ${mobile( {margin: '0px'})}
  `
  const Hr =styled.hr`
      background-color: #eee;
      border: none;
      height: 2px;
  `
  const Summery = styled.div`
    flex: 1;
    height: 50vh;
    border: 0.5px solid lightgray;
    display: flex;
    flex-direction: column;
    padding: 30px;
    justify-content: space-around;
    background-color: #f3f0f0;
    border-radius: 10px;

    ${mobile({})}
  `
  const SummeryTitle = styled.h1`
    font-weight: 200;
    text-align: center;
  `
  const SummeryItem = styled.span`
    margin: 30px 0px; 
    display: flex;
    justify-content: space-between;
    font-size: ${props=>props.type === 'total' && '30px'};
    font-weight: ${props => props.type === 'total' && '500'};
  `
  const SummeryItemText = styled.span`
    
    padding-left: 10px;
  `
  const SummeryItemPrice = styled.span`
    font-size: 24px;
    padding-right: 10px;
  `
  const Button = styled.button`
    width: 100%;
    padding:10px;
    font-size: 1rem;
    height: 50px;
    color: #fff;
    background-color: black;
    cursor: pointer;
  `

const Cart = () => {
  return (
    <Container>
        <Navbar />
        <Announcement />
        <Wrapper>
            <Title>YOUR BAG</Title>
            <Top>
                <TopButton>CONTINUE SHOPPING</TopButton>
                  <TopText>Shopping bag ( 2 )</TopText>
                  <TopText>Your wishlist ( 0 ) </TopText>
                <TopButton type="filled">CHECKOUT NOW</TopButton>
            </Top>

            <Bottom>
              <Info>
                 <Product>
                   <ProductDetail>
                    <Image src="https://i.ibb.co/0JDBVkz/mostafa-mahmoudi-prev-ui.png" />
                    <Details>
                        <ProductName><b>Product:</b> BLACK SHOE</ProductName>
                        <ProductId><b>ID:</b> 23424345</ProductId>
                        <ProductColor color="black" />
                        <ProductSize><b>Size:</b> 37.6</ProductSize>
                    </Details>
                    </ProductDetail>
                    <PriceDetail>
                        <ProductQuantity>
                            <Add />
                                <ProductAmount>2</ProductAmount>
                            <Remove />
                        </ProductQuantity>
                        <ProductPrice>
                            $ 30.00
                        </ProductPrice>
                    </PriceDetail>
                </Product>
                <Hr />
              </Info>
              <Summery>
                    <SummeryTitle>ORDER SUMMERY</SummeryTitle>
                    <SummeryItem>
                        <SummeryItemText>Subtotal</SummeryItemText>
                        <SummeryItemPrice>$ 80</SummeryItemPrice>
                    </SummeryItem>
                    <SummeryItem>
                        <SummeryItemText>Estimated Shipping</SummeryItemText>
                        <SummeryItemPrice>$ 5.90</SummeryItemPrice>
                    </SummeryItem>
                    <SummeryItem>
                        <SummeryItemText>Discount Shipping</SummeryItemText>
                        <SummeryItemPrice>-$ 5.90</SummeryItemPrice>
                    </SummeryItem>
                    <SummeryItem type="total">
                        <SummeryItemText >Total</SummeryItemText>
                        <SummeryItemPrice>$ 50</SummeryItemPrice>
                    </SummeryItem>
                    <Button>CHECKOUT NOW</Button>
                </Summery>
            </Bottom>
        </Wrapper>
        <NewsLetter />
        <Footer />
    </Container> )
}

export default Cart