import React from 'react'
import propTypes from 'prop-types'
import ReactPlayer from 'react-player'
import { styled, devices } from '../../config/global'
import {
  BtnPrimary,
  BtnPrimaryExternal,
  BtnSecondaryLg,
  BtnPrimaryLg,
  BtnSecondaryDark,
} from './elements/Button'

import Left from '../images/about-call-left.svg'
import Right from '../images/about-call-right.svg'
import Store from '../images/shop-call.svg'

import MP4 from '../images/videos/Bee.mp4'

const VideoContainer = styled.section`
  position: relative;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: var(--xl);
  text-align: center;
`

const VideoWrapper = styled.div`
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  min-height: 100vh;
  overflow: hidden;
`

const VideoOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 103vh;
  background: var(--light);
  opacity: 0.25;
  z-index: 1;
`

const VideoContent = styled.div`
  z-index: 2;
  width: 100%;
  height: auto;
  display: inline-flex;
  padding: var(--xl);
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const BtnList = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  & * {
    margin: 0 var(--xs);
  }

  @media ${devices.tablet} {
    justify-content: center;
  }
`

const VideoCall = () => (
  <VideoContainer>
    <VideoWrapper>
      <ReactPlayer
        url={MP4}
        playing
        loop
        volume="0"
        muted
        playsinline
        width="auto"
        height="103vh"
      />
    </VideoWrapper>
    <VideoOverlay />
    <VideoContent>
      <h1>Welcome to Hoover Honey</h1>
      <BtnList>
        <BtnSecondaryLg link="/contact" text="Contact Now" />
        <BtnPrimaryLg link="/company" text="Our Story" />
      </BtnList>
    </VideoContent>
  </VideoContainer>
)

const IndexContainer = styled.section`
  @media ${devices.desktop} {
    flex-direction: row;
    justify-content: space-evenly;
    display: flex;
    width: var(--width);
  }
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`
const IndexImgContainer = styled.div`
  @media ${devices.tablet} {
    width: 100%;
    padding: var(--md);
  }

  @media ${devices.desktop} {
    width: var(--width);
    padding: var(--md);
  }
  width: 100%;
  height: auto;
  padding: var(--lg);
`
const IndexText = styled.div`
  padding: var(--md);
  display: flex;
  flex-direction: column;
  align-items: space-evenly;
  justify-content: center;
`

const IndexList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-items: center;

  * {
    margin-bottom: var(--md);
  }
  @media ${devices.tablet} {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-items: center;

    & * {
      margin-right: var(--sm);
      margin-bottom: 0;
    }
  }
`
const PropValues = {
  title: propTypes.string.isRequired,
  text: propTypes.string.isRequired,
  link: propTypes.string.isRequired,
  btnText: propTypes.string.isRequired,
}

const IndexCall = ({ children, price, title, text, link, buyLink }) => (
  <IndexContainer>
    <IndexImgContainer>{children}</IndexImgContainer>
    <IndexText>
      <h3>
        {title}
        <span
          style={{
            color: 'var(--dark-1)',
            fontSize: '75%',
            marginLeft: 'var(--sm)',
          }}
        >
          {price}
        </span>
      </h3>
      <p>{text}</p>
      <IndexList>
        <BtnPrimaryExternal link={buyLink} text="Buy Now" />
        <BtnSecondaryDark link={link} text="See Details" />
      </IndexList>
    </IndexText>
  </IndexContainer>
)

IndexCall.propTypes = {
  children: propTypes.any.isRequired,
  title: propTypes.string.isRequired,
  price: propTypes.string.isRequired,
  text: propTypes.string.isRequired,
  link: propTypes.string.isRequired,
  buyLink: propTypes.string.isRequired,
}

const AboutLeftContainer = styled.section`
width: var(--width);
display: flex;
align-items: flex-end:
justify-content: flex-start;
border-radius: 20px;
margin: var(--md);
background: var(--light);
padding: var(--xl);
box-shadow: var(--shadow);

@media ${devices.tablet} {
  padding: var(--md);
}

@media ${devices.desktop} {
  background-image: url(${Left});
background-repeat: no-repeat;
background-position: right;
}
`

const AboutRightContainer = styled.section`
  width: var(--width);
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  border-radius: 20px;
  margin: var(--md);
  background: var(--light);
  padding: var(--xl);
  box-shadow: var(--shadow);

  @media ${devices.tablet} {
    padding: var(--md);
  }

  @media ${devices.desktop} {
    background-image: url(${Right});
    background-repeat: no-repeat;
    background-position: left;
  }
`

const AboutLeftText = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  color: var(--dark-1);
`

const AboutRightText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  color: var(--dark-1);
`

const AboutLeftCall = ({ title, text, link, btnText }) => (
  <AboutLeftContainer>
    <AboutLeftText>
      <h2>{title}</h2>
      <p>{text}</p>
      <BtnPrimary link={link} text={btnText} />
    </AboutLeftText>
  </AboutLeftContainer>
)

AboutLeftCall.propTypes = PropValues

const AboutRightCall = ({ title, text, link, btnText }) => (
  <AboutRightContainer>
    <AboutRightText>
      <h2>{title}</h2>
      <p>{text}</p>
      <BtnPrimary link={link} text={btnText} />
    </AboutRightText>
  </AboutRightContainer>
)

AboutRightCall.propTypes = PropValues

const StoreContainer = styled.section`
  width: 100%;
  padding: var(--xxl);
  margin-top: var(--md);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  @media ${devices.tablet} {
    padding: var(--xxl);
  }

  @media ${devices.desktop} {
    align-items: flex-start;
    background-repeat: no-repeat;
    background-position: right;
    background-image: url(${Store});
  }
`

const ContactStoreContainer = styled(StoreContainer)`
  @media ${devices.desktop} {
    align-items: center;
    background-image: none;
  }
`
const StoreCall = () => (
  <StoreContainer>
    <h2>Ready for some honey?</h2>
    <BtnPrimaryLg link="/products" text="Check out our products" />
  </StoreContainer>
)

const ContactStoreCall = () => (
  <ContactStoreContainer>
    <h2>Ready for some honey?</h2>
    <BtnPrimaryLg link="/products" text="Check out our products" />
  </ContactStoreContainer>
)

// const LocationContainer = styled.section`
//   width: var(--width);
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   justify-content: center;
//   margin: var(--md);
//   padding: var(--lg);
//   border-radius: 15px;
//   box-shadow: var(--shadow);

//   & * {
//     text-align: left;
//   }

//   @media ${devices.tablet} {
//     align-items: center;
//     width: var(--width);
//     text-align: center;
//     box-shadow: none;
//     padding: var(--sm);

//     & * {
//       text-align: center;
//     }
//   }
// `

// const LocationCall = ({ title, text, link }) => (
//   <LocationContainer>
//     <h3>{title}</h3>
//     <p>{text}</p>
//     <BtnPrimary link={link} text="Find Us" />
//   </LocationContainer>
// )

// LocationCall.propTypes = {
//   title: propTypes.string.isRequired,
//   text: propTypes.string.isRequired,
//   link: propTypes.string.isRequired,
// }

export {
  VideoCall,
  IndexCall,
  AboutLeftCall,
  AboutRightCall,
  ContactStoreCall,
  StoreCall,
  // LocationCall,
}
