import {useSelector} from 'react-redux'
import styled from 'styled-components'
import {useParams, useNavigate} from 'react-router-dom'
import Navbar from '../../../features/narbar/Navbar'
import Announcement from '../../../components/Announcement'
import Footer from '../../../components/Footer'

const Container = styled.div`
    width: 100%;
    height: 100%;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
`
const Title = styled.h1`
    color: darkred;
    
`
const InnerContainter = styled.div`
    width: 90vw;
    display:flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
`
const ItemsDisplay = styled.div`
    width: 90vw;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    
    gap: 5px;
`
const ProductDetails = styled.div`
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
`
const ImageContainer = styled.img`
    margin: 10px;
    width: 100%;
    height: 400px;
    aspect-ratio: 1/1;
    object-fit: cover;
    transition: all 0.7s ease;

    &:hover{
    opacity: 0.7;
    transform: scale(1.1);
   }
`
const DetailBox = styled.div`
    border: 1px solid gray;
    width: 150px;
    height: 60px;
    background-color: #fff;
    color: darkred;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    padding: 10px;
    border-radius: 16px;
    opacity: 0.5;
    transition: all 0.7s ease;
    cursor: pointer;

    &:hover{
    background-color: #fffeee;
    opacity: 0.7;
    transform: scale(1.1);
   }
`
const Desc = styled.p`
    text-align: center;
`
const Price = styled.span`
    font-size: 24px;
`

const CategoryProductsDisplay = () => {
   const categoryItems = useSelector(state => state.categoryProducts)
   const {categoryId} = useParams()
   const navigate = useNavigate()
    return(
        <Container>
            <Navbar />
            <Announcement />
            <InnerContainter>
            <Title>PRODUCTS</Title>
            { Object.entries(categoryItems).filter(item => item[0] === `${categoryId}`).map((item, index) => {
                return (
                    <ItemsDisplay key={index}>
                        {
                            item[1].map(item => {
                                const {id, img, title, price} = item
                                return (
                                        <ProductDetails key={id}>
                                            <ImageContainer src={img} alt={title} />
                                            <DetailBox onClick={()=>{navigate(`/categoryItem/${id}`)}}>
                                                <Title>{title}</Title>
                                                <Price>${price}</Price>
                                            </DetailBox>
                                        </ProductDetails>)
                                })
                        }
                    </ItemsDisplay>
                )
             })
            }
           
            </InnerContainter>
            <Footer />
        </Container>
    )
}

export default CategoryProductsDisplay