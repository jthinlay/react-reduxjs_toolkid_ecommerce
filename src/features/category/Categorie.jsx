import {useSelector} from 'react-redux'
import styled from 'styled-components'
import CategoryItem from './CategoryItem'
import {mobile} from '../../responsive'

const Container = styled.div`
  display: flex;
  padding: 20px;
  align-items: center;
  justify-content: space-between;
  ${mobile({padding: '0px', flexDirection: 'column'})}
`;
 
const Categories = () => {
  const categories = useSelector((state) => state.categories)
  return (
    <Container>
      {categories.map(item => {
         return <CategoryItem key={item.id} item={item}/>
       })}
    </Container>
  )
}

export default Categories