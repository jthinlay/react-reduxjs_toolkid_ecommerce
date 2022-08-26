import styled from 'styled-components'
import Navbar from '../features/narbar/Navbar'
import Announcement from '../components/Announcement'
import PopularProducts from '../features/products/Products'
import NewsLetter from '../components/NewsLetter'
import Footer from '../components/Footer'
import {mobile} from '../responsive'


const Container = styled.div`
    display: flex;
    flex-direction: column;
`
const Title = styled.h1`
    margin: 20px;
    text-align: center;
`
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 20px;
`
const Filter = styled.div`
    ${mobile({display: 'flex', flexDirection: 'column', gap: '5px'})}
`
const FilterText = styled.span`
    font-size: 1.5rem;
    font-weight: 600;
    margin-right: 20px;
`
const Select = styled.select`
    padding: 10px;
    margin-right: 10px;
    font-size: 1.2rem;

    ${mobile({width: '100%', height: '30%', padding: '5px'})}
`

const ProductList = () => {
  return (
    <Container>
        <Navbar />
        <Announcement />
        <Title>PRODUCTS</Title>
        <FilterContainer>
            <Filter>
                <FilterText>Filter Products </FilterText>
                    <Select>
                        <option disabled selected>Color</option>
                        <option value="White">White</option>
                        <option value="Blue">Blue</option>
                        <option value="Green">Green</option>
                        <option value="Red">Red</option>
                        <option value="Teal">Teal</option>
                    </Select>
                    <Select>
                        <option disabled selected>Size</option>
                        <option value="XS">XS</option>
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                    </Select>
            </Filter>
            <Filter>
                <FilterText>Sort Products</FilterText>
                    <Select>
                        <option disabled selected>Newest</option>
                        <option>Price(asc)</option>
                        <option>Price(desc)</option>
                    </Select>
            </Filter>
        </FilterContainer>
        <PopularProducts />
        <NewsLetter />
        <Footer />
    </Container>
  )
}

export default ProductList