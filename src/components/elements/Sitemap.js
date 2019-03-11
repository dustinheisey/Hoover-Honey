import React from 'react'
import { Link } from 'gatsby'
import { styled } from '../../../config/global'

const Container = styled.aside`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: var(--md);
  background: var(--dark-2);
  color: var(--light);
`
const ListContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const List = styled.ul`
  margin: var(--sm);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  transition: color 0.25s;
  color: var(--light);

  &:hover {
    color: var(--accent-1);
  }
`

const Heading = styled.h4`
  color: var(--light);
`

const Sitemap = () => (
  <Container>
    <Heading>Navigate</Heading>
    <ListContainer>
      <List>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/company">Our Story</StyledLink>
        <StyledLink to="/benefits">Real Benefits</StyledLink>
        <StyledLink to="/impact">Your Impact</StyledLink>
        <StyledLink to="/products">Products</StyledLink>
      </List>
      <List>
        <StyledLink to="/products/summer-honey">Summer Honey</StyledLink>
        <StyledLink to="/products/winter-honey">Winter Honey</StyledLink>
        <StyledLink to="/products/honey-bundle">Honey Bundle</StyledLink>
        <StyledLink to="/contact">Contact</StyledLink>
        {/* <StyledLink to="/find-a-store">Find a Store</StyledLink> */}
      </List>
    </ListContainer>
  </Container>
)

export default Sitemap
