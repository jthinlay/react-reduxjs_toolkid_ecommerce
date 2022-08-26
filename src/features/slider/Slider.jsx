import {useSelector} from 'react-redux'
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material"
import { useState } from "react"
import styled from "styled-components"
import {mobile} from '../../responsive'
import { Link} from "react-router-dom"

const Container = styled.div`
    width: 100%;
    height: 100vh; 
    display: flex;
    align-items: center;
    position: relative;
    overflow: hidden;
    background: #9cd5ec;
    background: linear-gradient(117deg, #f08f52 0%, rgba(255,255,255,0.013064600840336116) 85%);
    background-color: #a2ede6a4;

    ${mobile({display: 'none'})}

`
const Arrow = styled.div`
    border: 1px solid gray;
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0.4;
    cursor: pointer;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props => props.direction === 'left' && '10px'};
    right: ${props => props.direction === 'right' && '10px'};
    margin: auto;
    z-index: 2;
`
const Wrapper = styled.div`
    height: 100vh;
    display: flex;
    transition: all 1.5s ease;
    transform: translate(${props => props.slideIndex * -100}vw);
`
const Slide = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
`
const ImgContainer = styled.div`
    flex: 1;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    padding: 100px;
`
const Image = styled.img`
    width: 100%;
    height: 70%;
    object-fit: cover;
    box-shadow: 10px 10px 10px 0.8px #4d2c29;
`
const InfoContainer = styled.div`
    flex: 1;
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`
const Title = styled.h1`
   padding: 10px;
   font-size: 70px;
`
const Desc = styled.p`
    margin: 50px 0;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`
// const Button = styled.button`
//     width: 150px;
//     height: 60px;
//     font-size: 20px;
//     // border-radius: 16px;
//     border: none;
//     padding: 10px;
//     cursor: pointer;
//     border: 1px solid gray;
//     opacity: 0.7;

//     &:hover {
//         opacity: 0.8;
//         color: #595d61;
//     }
// `
const Slider = () => {
    const sliders = useSelector((state)=>state.slider)
    const [slideIndexNumber, setSlideIndex] = useState(0)
    const handleClick = (direction) => {
        if(direction === 'left'){
            setSlideIndex(slideIndexNumber > 0 ? slideIndexNumber -1 : 2)
        } else {
            setSlideIndex(slideIndexNumber < 2 ? slideIndexNumber +1 : 0)
        }
    }
  return (
    <Container>
        <Arrow direction="left" onClick={()=>{handleClick('left')}}>
            <ArrowBackIos />
        </Arrow>
        <Wrapper slideIndex={slideIndexNumber}>
            {
                sliders.map(item => {
                    const {id, bg, img, title, desc} = item
                    return (
                        <Slide key={id} bg={bg}>
                            <ImgContainer>
                                <Image src={img} alt="product image"/>
                            </ImgContainer>
                            <InfoContainer>
                                <Title>{title}</Title>
                                <Desc> {desc} </Desc>
                                <Link to={`/${id}`} style={{width: '200px', height:'50px', display:'flex', alignItems: 'center', justifyContent:'center', textDecoration:'none', color:'teal', fontSize:'30px', border: '2px solid gray'}}>SHOW NOW</Link>
                            </InfoContainer>
                         </Slide>
                        )
                    })
            }   
        </Wrapper>
        <Arrow direction="right" onClick={()=>{handleClick('right')}}>
           <ArrowForwardIos />
        </Arrow>
    </Container>
  )
}

export default Slider