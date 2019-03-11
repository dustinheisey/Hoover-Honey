import React from 'react'
import { Link } from 'gatsby'
import {
  IoMdHome,
  IoMdInformationCircle,
  IoMdBasket,
  IoMdMail,
  IoMdCart,
} from 'react-icons/io'
import { styled, devices } from '../../../config/global'
import Placeholder from './images/Image'
// import { BtnPrimary } from "./Button";

const Navigation = styled.section`
  @media ${devices.tablet} {
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--background);
  }
`

const Container = styled.nav`
  display: none;
  @media ${devices.tablet} {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--md);
  }
`

const MobileTop = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--dark-2);
  padding: var(--md);
  width: 100%;
  z-index: 10000;

  @media ${devices.tablet} {
    display: none;
  }

  position: fixed;
  top: 0;
`

const MobileBottom = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--dark-2);
  padding: var(--md) var(--lg);
  width: 100%;
  z-index: 10000;

  @media ${devices.tablet} {
    display: none;
  }

  position: fixed;
  bottom: 0;
`

const MobileIcon = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: var(--light);

  &:first-child {
    margin-bottom: var(--sm);
  }
  @media ${devices.tablet} {
    display: none;
  }
`

const Home = styled(IoMdHome)`
  width: 3vh;
  height: auto;
`

const About = styled(IoMdInformationCircle)`
  width: 3vh;
  height: auto;
`

const Products = styled(IoMdBasket)`
  width: 3vh;
  height: auto;
`

const Contact = styled(IoMdMail)`
  width: 3vh;
  height: auto;
`

const NavContainer = styled.div`
  width: 30%;
  margin: 0 var(--lg);
`

const ImgLink = styled(Link)`
  display: none;

  @media ${devices.tablet} {
    width: 10vmin;
    margin: 0 var(--lg);
  }
`

const MobileImgLink = styled(Link)`
  width: 5vh;

  @media ${devices.tablet} {
    display: none;
  }
`

const NavList = styled.ul`
  height: 100%;
  list-style: none;
  margin: 0;
  align-items: center;
  justify-content: center;
  display: flex;
`
const NavItem = styled.li`
  margin: 0;
  margin-right: var(--md);
  position: relative;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--dark-2);
  text-decoration: none;
  transition: color 0.25s;

  &:hover {
    color: var(--accent-1);
  }
`

const CallContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: var(--lg);
`

const ShoppingCart = styled(IoMdCart)`
  width: 5vh;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: var(--md);
  fill: var(--light);
  transition: fill 0.25s;

  &:hover {
    fill: var(--accent-1);
  }

  &:active {
    fill: var(--dark-2);
  }

  @media ${devices.tablet} {
    fill: var(--dark-2);
    width: 3vmin;
    height: auto;
  }
`

const nav = () => (
  <Navigation>
    <ImgLink to="/">
      <Placeholder />
    </ImgLink>
    <Container>
      <NavContainer>
        <NavList>
          <NavItem>
            <NavLink to="/">Home</NavLink>
          </NavItem>
          {/* <Dropdown>
            <NavLink to="/company">
              About
              <IoMdArrowDropdown />
            </NavLink>
            <SubMenu>
              <NavItem>
                <SubLink to="/company">Story</SubLink>
              </NavItem>
              <NavItem>
                <SubLink to="/benefits">Benefits</SubLink>
              </NavItem>
              <NavItem>
                <SubLink to="/impact">Impact</SubLink>
              </NavItem>
            </SubMenu>
          </Dropdown>
          <Dropdown>
            <NavLink to="/products">
              Products
              <IoMdArrowDropdown />
            </NavLink>
            <SubMenu>
              <NavItem>
                <SubLink to="/raw-honey">Honey</SubLink>
              </NavItem>
              <NavItem>
                <SubLink to="/chapstick">Chapstick</SubLink>
              </NavItem>
            </SubMenu>
          </Dropdown> */}
          <NavItem>
            <NavLink to="/company">About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/products">Products</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/contact">Contact</NavLink>
          </NavItem>
        </NavList>
      </NavContainer>
      <CallContainer>
        <ShoppingCart />
        {/* <BtnPrimary link="/find-a-store" text="Find a Store" /> */}
      </CallContainer>
    </Container>
    <MobileTop>
      <MobileImgLink to="/">
        <Placeholder />
      </MobileImgLink>
      <ShoppingCart />
    </MobileTop>
    <MobileBottom>
      <MobileIcon to="/">
        <Home />
        <small>Home</small>
      </MobileIcon>
      <MobileIcon to="/company">
        <About />
        <small>About</small>
      </MobileIcon>
      <MobileIcon to="/products">
        <Products />
        <small>Products</small>
      </MobileIcon>
      <MobileIcon to="/contact">
        <Contact />
        <small>Contact</small>
      </MobileIcon>
    </MobileBottom>
  </Navigation>
)

export default nav
