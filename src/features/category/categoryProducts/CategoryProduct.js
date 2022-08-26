import {useSelector} from 'react-redux'
import {useParams} from 'react-router-dom'
import styled from 'styled-components'
import Navbar from '../../../features/narbar/Navbar'
import Footer from '../../../components/Footer'
import Announcement from '../../../components/Announcement'

const Container = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`
const Wrapper = styled.div`
    width: 90%;
    height: 600px;
    border: 2px solid teal;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const ProductContainer = styled.div`
    width: 80%;
    height: 500px;
    border: 2px solid red;
    display: flex;
    align-items: center;
    border-radius: 16px;
`
const ItemDetail = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    
`
const Title = styled.h1``
const Image = styled.img`
    width: 80%;
    height: 100%;
    object-fit: cover;
    border-top-left-radius: 16px;
    border-bottom-left-radius: 16px;
    box-shadow: 10px 10px 10px 0px black;
`
const Desc = styled.p`
   padding: 10px;
   font-size: 18px;
`

const Price = styled.span`
    font-size: 32px;
`
const FilterContainer = styled.div``
const Filter = styled.div``
const FilterTitle = styled.span`
    font-size: 32px;
`
const FilterSize = styled.select`
    margin-left: 10px;
`
const FilterOption = styled.option`
    
`
const IndividualProduct = () => {
    const individualItem = useSelector(state => state.categoryProducts)
    const {categoryItemId} = useParams()
    const individualProduct = Object.entries(individualItem)
    const theProduct = individualProduct.map(item => item[1])
    const theItem = theProduct.map(item => item.map(it=>it).filter(it=>it.id === parseInt(categoryItemId)).map(item=>
        {
            return (
                <Wrapper key={item.id}>
                    <ProductContainer>
                        <Image src={item.img} alt={item.alt} />
                        <ItemDetail>
                            <Title>{item.title.toUpperCase()}</Title>
                            <Desc>{item.desc}</Desc>
                            <FilterContainer>
                                <Filter>
                                <FilterTitle>Size:</FilterTitle>
                                    <FilterSize>
                                        <FilterOption value="XL">{item.size[0]}</FilterOption>
                                        <FilterOption value="L">{item.size[1]}</FilterOption>
                                        <FilterOption value="M">{item.size[2]}</FilterOption>
                                        <FilterOption value="S">{item.size[3]}</FilterOption>
                                        <FilterOption value="XS">{item.size[4]}</FilterOption>
                                    </FilterSize>
                                </Filter>
                            </FilterContainer>
                            <Price>${item.price}</Price>
                        </ItemDetail>
                    </ProductContainer>
                </Wrapper>
            )
    }))
    
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Title>Individual Product</Title>
             {theItem}
             <Footer />
        </Container>
    )
}
export default IndividualProduct
