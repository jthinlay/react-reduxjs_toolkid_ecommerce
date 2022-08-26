import React, {useState} from 'react'
import styled from "styled-components"
import Navbar from '../features/narbar/Navbar'
import Announcement from '../components/Announcement'
import Newsletter from '../components/NewsLetter'
import Footer from '../components/Footer'
import { Add, Remove } from "@mui/icons-material"
import {mobile} from '../responsive'
import {useSelector} from 'react-redux'
import {useParams, useNavigate} from 'react-router-dom'


const Container = styled.div`
    position: fixed;
`
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;

    ${mobile({padding: '10px', flexDirection: 'column', })}

`
const ImageContainer = styled.div`
    flex: 1;
    height: 70vh;
`
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;

    ${mobile({height: '40vh'})}
`
const InfoContainer = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    padding: 0px 50px;
    
    ${mobile({padding: "10px"})}
`
const Title = styled.h1`
    font-size: 3rem;

    ${mobile({fontSize: '2rem'})}

    `
const Desc = styled.p`
    font-size: 1.5rem;
    margin: 20px 0px;

    ${mobile({fontSize: '1.5rem', margin: '10px 0px'})}
`
const Price = styled.span`
    font-size: 3rem;
    font-weight: 200;

    ${mobile({fontSize: '2rem'})}
`
const FilterContainer = styled.div`
    width: 50%;
    display: flex;
    justify-content: space-between;
    margin: 30px 0px;

    ${mobile({width: '100%' })}
`
const Filter = styled.div`
    display: flex;
    align-items: center;
`
const FilterTitle = styled.span`
    font-size: 1.5rem;
    font-weight: 200;
`
const FilterColor = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: ${props => props.color};
    margin: 0px 5px;
    cursor: pointer;
`
const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
`
const FilterSizeOption = styled.option``

const AddContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    
   ${mobile({width: '100% '})}

`
const Amount = styled.span`
    width: 35px;
    height: 35px;
    border: 1px solid teal;
    font-size: 2rem;
    padding: 3px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
`
const AddButton = styled.button`
   border: 2px solid teal;
   background-color: #fff;
   width: 200px;
   height: 60px;
   font-size: 1.5rem;
   font-weight: 500;
   margin-left: 60px;
   cursor: pointer;
   transition: all 0.5s ease;

   &:hover {
       background-color: lightgray;
       transform: scale(1.1)
   }
`

const Product = () => {
    const {productId} = useParams()
    const navigate = useNavigate()
    const productIndividual = useSelector(state => state.products)
    const [quantity, setQuantity] = useState(1)
    const content = productIndividual.filter(item => item.id === parseInt(productId, 10)).map((item)=>{
        return (
            <Wrapper key={item.id}>
            <ImageContainer>
                <Image src={item.img} alt={item.title} />
            </ImageContainer>
            <InfoContainer>
                <Title>{item.title}</Title>
                <Desc></Desc>
                <Price>${(item.price * quantity).toFixed(2)}</Price>
                <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            <FilterColor color={item.color[0]}/>
                            <FilterColor color={item.color[1]}/>
                            <FilterColor color={item.color[2]}/>
                        </Filter>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                                <FilterSize>
                                    <FilterSizeOption>{item.size[0]}</FilterSizeOption>
                                    <FilterSizeOption>{item.size[1]}</FilterSizeOption>
                                    <FilterSizeOption>{item.size[2]}</FilterSizeOption>
                                    <FilterSizeOption>{item.size[3]}</FilterSizeOption>
                                    <FilterSizeOption>{item.size[4]}</FilterSizeOption>
                                </FilterSize>
                        </Filter>
                </FilterContainer>
                <AddContainer>
                    <Add onClick={()=>{
                        setQuantity(()=>{
                            if(quantity <1){
                                navigate('/productList')
                            } else{
                                return quantity + 1
                            }
                           
                        })
                    }} style={{cursor: 'pointer', padding: '5px'}} /> 
                    <Amount> {quantity} </Amount>
                    <Remove onClick={()=>{
                        setQuantity(()=>{
                            if(quantity === 1){
                                navigate('/productList')
                            } else {
                                return quantity - 1
                            }
                        })
                    }} style={{cursor: 'pointer', padding: '5px'}} />
                    <AddButton>ADD TO CART</AddButton>
                </AddContainer>
            </InfoContainer>
            </Wrapper>
        )
    })

  return (
    <Container>
        <Navbar />
        <Announcement />
            {content}
        <Footer />
    </Container>
  )
}

export default Product