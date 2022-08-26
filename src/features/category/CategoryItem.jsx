import styled from 'styled-components'
import {mobile} from '../../responsive'
import {useNavigate} from 'react-router-dom'


const Container = styled.div`
    position: relative;
    flex: 1;
    height: 50vh;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid #9c9ce854;
`
const Image = styled.img`
    width: 90%; 
    height: 80%; 
    object-fit: cover;

    ${mobile({height: '40vh'})}
`
const Info = styled.div`
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px;
   
`
const Title = styled.h1`
    font-size: 50px;
    margin-bottom: 20px;
    color: #a19696;

    ${mobile({fontSize: '2rem', color: '#9c8a76'})}
`
const Button = styled.button`
    width: 200px;
    height: 70px;
    font-size: 30px;
    opacity: 0.7;
    cursor: pointer;
    font-weight: 200; 
    border: none;
    border-radius: 16px;

    &:hover{
        opacity: 0.5;
    }

    ${mobile({width: '150px', fontSize: '1rem', height: '40px', opacity: '0.4', cursor: 'pointer'})}
`

const CategoryItem = ({item}) => {
    const navigate = useNavigate()
    const {img, title, categoryProductItemId} = item
  return (
        <Container>
            <Image src={img} alt={title} />
            <Info>
                <Title>{title}</Title>
                <Button onClick={()=>{
                   navigate(`/category/${categoryProductItemId}`)
                }} >SHOP NOW</Button>
            </Info>
        </Container>
    )  
}

export default CategoryItem