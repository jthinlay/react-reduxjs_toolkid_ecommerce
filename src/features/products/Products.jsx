import {useSelector} from 'react-redux'
import styled from 'styled-components'
import PopulartItem from './Product'
import {mobile} from '../../responsive'

const Container = styled.div`
    border: 10px solid lightblue;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    ${mobile({padding: '10px', alignItems: 'center', justifyContent: 'center'})}
`
const PopularProducts = () => {
  const products = useSelector((state) => state.products)
  return (
    <Container>
        {
            products.map(item => {
                return (
                    <PopulartItem key={item.id} item={item} />
                )
            })
        }
    </Container>
  )
}

export default PopularProducts