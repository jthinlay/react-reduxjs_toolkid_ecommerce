import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: rgba(0,0,0,0.2);
  top:0;
  left:0;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;  
`

const Container = styled.div`
   flex: 1;
   margin: 5px;
   min-width: 380px;
   height: 390px;
   display: flex;
   align-items: center;
   justify-content: center;
   background-color: #e6eff4;
   position: relative;

   &:hover ${Info}{
    opacity: 1;
   }
`
const Circle = styled.div`
   width: 200px;
   height: 200px;
   border-radius: 50%;
   background-color: #ffffff;
   position: absolute;
`
const ProductDetail = styled.div`
  min-width: 380px;
  height: 390px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  color: gray;

`
const Image = styled.img`
   width: 90%;
   height: 75%;
   z-index: 2;
`
const Icon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  opacity: 0.5;
  cursor: pointer;

  &:hover{
    background-color: #fffeee;
    opacity: 0.5;
    transform: scale(2.1);
  }
`
const PopulartItem = ({item}) => {
  const {id, img, title, price} = item
  return (
    <Container>
      <Circle />
      <ProductDetail>
        <Image src={img} alt="popular item"/>
        <h3>{title}</h3>
        <span style={{fontSize:'2rem'}}>${price}</span>
      </ProductDetail>
      <Info>
          <Icon>
            <ShoppingCartOutlined onClick={()=>{alert("productId")}}/>
          </Icon>
          <Icon>
           <Link to={`/products/${id}`}> <SearchOutlined /></Link>
          </Icon>
          <Icon>
            <FavoriteBorderOutlined onClick={()=>{alert("Favorite Border Outlined")}} />
          </Icon>
      </Info>
    </Container>
  )
}

export default PopulartItem