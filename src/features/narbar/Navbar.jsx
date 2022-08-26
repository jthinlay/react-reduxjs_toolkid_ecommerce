import React from 'react'
import styled from 'styled-components'
import { MenuOutlined, Search, ShoppingCartCheckoutOutlined} from '@mui/icons-material'
import { Badge} from '@mui/material'
import {mobile} from '../../responsive'
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import {useSelector} from 'react-redux'
import {addProductQuantity} from './narbarSlice'


const Container = styled.div`
    height: 70px;
    ${mobile({ height: '80px'})}

`
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${mobile({ padding: '0px 10px'})}
`
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`
const Language = styled.span`
    font-size: 18px;
    cursor: pointer;
    ${mobile({display: 'none'})}
`
const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 20px;
    padding: 5px;
`
const Input = styled.input`
    border: none;
    ${mobile({width: '50px'})}

`
const Center = styled.div`
    flex: 2;
    display: flex;
`
const Logo = styled.div`
    width: 80px;
    height: 80px;
    margin-right: 20px;
    ${mobile({width: '60px', height: '60px', margin: '0px 5px', padding: '5px'})}
`
const Nav = styled.nav`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    ${mobile({
        display: 'none',
    })}
`
const MenuSpan = styled.span`
    display: none;
    ${mobile({ 
        display: 'flex',
        alignItems: 'center',
        margin: 'auto',
    })}
`
const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({flex: '2', justifyContent: 'center'})}
`
const MenuItem = styled.div`
    font-size: 18px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({fontSize: '12px', marginLeft: '10px'})}
`
const responsiveMenu = () => {
   alert('placeholder for the dropdown menu')
}
function Navbar() {
    const navigate = useNavigate()
    const badgeContent = useSelector(state => state.saleItems)
    console.log("badgeContent:", badgeContent)
   // const itemQuantity = badgeContent.filter(item => item.id === 2).map(item => item.quantity)
  return (
    <Container>
        <Wrapper>
            <Left>
                <Logo>
                    <img onClick={()=>{navigate('/')}} src="../jt_logo.ico" alt="jt logo" style={{width: '100%'}} 
                    onMouseEnter={(e) => { e.target.style.cursor = 'pointer'}}
                    onMouseLeave={(e) => { e.target.style.cursor = 'none' }} />
                </Logo>
                <Language>EN</Language>
                <SearchContainer>
                    <Input placeholder='Search'/>
                    <Search style={{color: 'gray', fontSize: '16px'}}/>
                </SearchContainer>
            </Left>
            <Center>
                <Nav>
                    <Link to="/" style={{textDecoration: 'none'}}>HOME</Link>
                    <Link to="/productList" style={{textDecoration: 'none'}}>PRODUCTS</Link>
                    <Link to="/cart" style={{textDecoration: 'none'}}>CART</Link> 
                </Nav>
               
            </Center>
            <Right>
                <MenuItem><Link to="/register" style={{textDecoration: 'none'}}>REGISTER</Link></MenuItem>
                <MenuItem><Link to="/login" style={{textDecoration: 'none'}}>SING IN</Link></MenuItem>
                
                <MenuItem>
                    <Badge badgeContent={4} color="primary">
                        <ShoppingCartCheckoutOutlined />
                    </Badge>  
                </MenuItem>
            </Right>

            <MenuSpan>
                <MenuOutlined onClick={responsiveMenu} />
            </MenuSpan>
        </Wrapper>
    </Container>
  )
}

export default Navbar