import React from 'react'
import { Link } from 'gatsby'
import {
  IoMdHome,
  IoMdInformationCircle,
  IoMdBasket,
  IoMdMail,
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

const MobileBottom = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--light);
  box-shadow: var(--shadow);
  padding: var(--md) var(--xxl);
  height: 15vmin;
  width: 100%;
  z-index: 10000;

  @media ${devices.tablet} {
    display: none;
  }

  & * {
    color: #747474;
  }
  position: fixed;
  bottom: 0;
`

const MobileIcon = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
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
  width: 3.5vh;
  height: auto;
`

const About = styled(IoMdInformationCircle)`
  width: 3.5vh;
  height: auto;
`

const Products = styled(IoMdBasket)`
  width: 3.5vh;
  height: auto;
`

const Contact = styled(IoMdMail)`
  width: 3.5vh;
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
    </Container>
    <MobileBottom>
      <MobileIcon to="/">
        <Home />
      </MobileIcon>
      <MobileIcon to="/company">
        <About />
      </MobileIcon>
      <MobileIcon to="/products">
        <Products />
      </MobileIcon>
      <MobileIcon to="/contact">
        <Contact />
      </MobileIcon>
    </MobileBottom>
  </Navigation>
)

export default nav
