import React from 'react'
import propTypes from 'prop-types'
import { styled, devices } from '../../config/global'
import { BtnPrimary } from './elements/Button'

const BenefitsImgContainer = styled.div`
  width: 100%;
  padding: var(--md);

  @media ${devices.tablet} {
    width: 100%;
  }

  @media ${devices.desktop} {
    width: 50%;
  }
`

const BenefitsContainer = styled.section`
  width: var(--width);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--md);

  @media ${devices.desktop} {
    flex-direction: row;
    justify-content: space-evenly;
  }
`

const BenefitsList = styled.div`
  padding: var(--md);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`

const PropValues = {
  children: propTypes.any.isRequired,
  title: propTypes.string.isRequired,
  text: propTypes.string.isRequired,
}
const BenefitsInfo = ({ children, title, text }) => (
  <BenefitsContainer>
    <BenefitsImgContainer>{children}</BenefitsImgContainer>
    <BenefitsList>
      <h3>{title}</h3>
      <p>{text}</p>
    </BenefitsList>
  </BenefitsContainer>
)

BenefitsInfo.propTypes = PropValues

const ImpactImgContainer = styled.div`
  width: 100%;
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  margin-top: -30vmin;

  @media ${devices.tablet} {
    width: 75%;
    margin-top: -25vmin;
`
const ImpactContainer = styled.section`
  background: var(--dark-2);
  border-radius: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--lg);

  &:first-child {
    margin-bottom: 50vmin;
    margin-top: var(--lg);
  }
  &:last-child {
    margin-bottom: var(--xl);
  }
  @media ${devices.tablet} {
    margin: 0;

    &:first-child {
      margin-bottom: 0;
      margin-top: 0;
    }
    &:last-child {
      margin-bottom: 0;
    }
  }
`
const ImpactList = styled.div`
  color: var(--light);
  width: 100%;
  padding: var(--lg);

  & p {
    color: var(--light);
  }
`

const ImpactHeading = styled.h2`
  color: var(--light);
  margin-bottom: var(--sm);
  margin-top: var(--md);
`

const ImpactInfo = ({ children, title, text }) => (
  <ImpactContainer>
    <ImpactImgContainer>{children}</ImpactImgContainer>
    <ImpactList>
      <ImpactHeading>{title}</ImpactHeading>
      <p>{text}</p>
    </ImpactList>
  </ImpactContainer>
)

ImpactInfo.propTypes = PropValues

const ProductsImgContainer = styled.div`
  width: 100%;
  margin-bottom: var(--md);
`

const ProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: var(--md);
  width: 100%;

  @media ${devices.tablet} {
    width: 50%;
  }
`

const ProductsInfo = ({ children, title, text, link, btnText }) => (
  <ProductsContainer>
    <ProductsImgContainer>{children}</ProductsImgContainer>
    <h3>{title}</h3>
    <p>{text}</p>
    <BtnPrimary link={link} text={btnText} />
  </ProductsContainer>
)

ProductsInfo.propTypes = {
  children: propTypes.any.isRequired,
  title: propTypes.string.isRequired,
  text: propTypes.string.isRequired,
  link: propTypes.string.isRequired,
  btnText: propTypes.string.isRequired,
}

export { BenefitsInfo, ImpactInfo, ProductsInfo }
