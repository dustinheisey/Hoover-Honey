import React from 'react'
import { Link } from 'gatsby'

import {
  IoLogoFacebook,
  IoLogoYoutube,
  IoMdMail,
  IoMdCall,
} from 'react-icons/io'

import { styled } from '../../../config/global'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--dark-2);
`

const Social = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style-type: none;
  padding-top: var(--sm);
  margin: 0;
`

const SocialItem = styled.li`
  color: var(--light);
  margin: 0 var(--sm);
  display: flex;
  align-items: center;
  justify-items: space-between;

  & * {
    margin-right: var(--sm);
  }
`

const Copywrite = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style-type: none;
  margin: 0;
  padding-bottom: var(--sm);
`

const CopywriteItem = styled.li`
  margin: 0 var(--sm);
  text-decoration: none;
  color: var(--light);
  transition: color 0.25s;

  &:hover {
    color: var(--accent-1);
  }
`

const Small = styled.small`
  margin: 0 var(--sm);
  text-decoration: none;
  color: var(--light);
  transition: color 0.25s;

  &:visited {
    text-decoration: none;
    color: var(--light);
  }

  &:active {
    text-decoration: none;
    color: var(--light);
  }

  &:hover {
    color: var(--accent-1);
  }
`

const StyledLink = styled(Link)`
  text-decoration: none;
`

const StyledExternalLink = styled.a`
  text-decoration: none;
  color: #fff;
  transition: color: 0.25s;

  & :hover {
    color: var(--accent-1);
  }
`

const copywrite = () => (
  <Container>
    <Social>
      <SocialItem>
        <IoMdCall />
        <StyledExternalLink href="tel:1-817-374-9816" rel="noopener">
          817-374-9816
        </StyledExternalLink>
      </SocialItem>
      <SocialItem>
        <IoMdMail />
        <StyledExternalLink href="mailto:hooverjarod@gmail.com" rel="noopener">
          hooverjarod@gmail.com
        </StyledExternalLink>
      </SocialItem>
      <SocialItem>
        <IoLogoFacebook />
        <StyledExternalLink
          href="https://www.facebook.com/hooverhoney/"
          target="_blank"
          rel="noopener"
        >
          Facebook
        </StyledExternalLink>
      </SocialItem>
      <SocialItem>
        <IoLogoYoutube />
        <StyledExternalLink
          href="https://www.youtube.com/channel/UCJtq2YIfh2SHn49mJoJ9PJg"
          target="_blank"
          rel="noopener"
        >
          Youtube
        </StyledExternalLink>
      </SocialItem>
    </Social>
    <Copywrite>
      <CopywriteItem>
        <StyledLink to="/privacy-policy">
          <Small>Privacy Policy</Small>
        </StyledLink>
      </CopywriteItem>
      <CopywriteItem>
        <StyledLink to="/refund-policy">
          <Small>Refund Policy</Small>
        </StyledLink>
      </CopywriteItem>
      <CopywriteItem>
        <StyledLink to="/terms-of-use">
          <Small>Terms of Use</Small>
        </StyledLink>
      </CopywriteItem>
      <CopywriteItem>
        <StyledExternalLink
          href="https://www.getdallaswebdesign.com"
          target="_blank"
          rel="noopener"
        >
          <Small>Designed by Dustin Heisey</Small>
        </StyledExternalLink>
      </CopywriteItem>
    </Copywrite>
  </Container>
)

export default copywrite
