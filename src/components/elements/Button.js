import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { styled, devices } from '../../../config/global'

const Btn = styled.button`
  border-radius: 5px;
  outline: none;
  border: none;
  padding: var(--sm) var(--md);
  cursor: pointer;
  display: inline-block;

  & * {
    color: var(--light);
    text-decoration: none;
  }
`

const PrimaryBtn = styled(Btn)`
  background-color: var(--accent-1);
  padding-left: var(--md);
  padding-right: var(--md);
`

const SecondaryBtn = styled(Btn)`
  border: 3px solid var(--light);
  background-color: transparent;
  padding-left: var(--md);
  padding-right: var(--md);
`

const PrimaryBtnLg = styled(PrimaryBtn)`
  padding-left: var(--xl);
  padding-right: var(--xl);

  @media ${devices.tablet} {
    padding-left: var(--xxl);
    padding-right: var(--xxl);
  }
`

const SecondaryBtnLg = styled(SecondaryBtn)`
  padding-left: var(--xl);
  padding-right: var(--xl);

  @media ${devices.tablet} {
    padding-left: var(--xxl);
    padding-right: var(--xxl);
  }
`

const FormBtn = styled(PrimaryBtn)`
  align-self: flex-start;
`

const BtnLink = styled(Link)`
  display: block;
  width: 100%;
  height: 100%;
`

const BtnPrimary = ({ text, link }) => (
  <PrimaryBtn>
    <BtnLink to={link}>{text}</BtnLink>
  </PrimaryBtn>
)

const PropValues = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
}

BtnPrimary.propTypes = PropValues

const BtnSecondary = ({ text, link }) => (
  <SecondaryBtn>
    <BtnLink to={link}>{text}</BtnLink>
  </SecondaryBtn>
)

BtnSecondary.propTypes = PropValues

const BtnPrimaryLg = ({ text, link }) => (
  <PrimaryBtnLg>
    <BtnLink to={link}>{text}</BtnLink>
  </PrimaryBtnLg>
)

BtnPrimaryLg.propTypes = PropValues

const BtnSecondaryLg = ({ text, link }) => (
  <SecondaryBtnLg>
    <BtnLink to={link}>{text}</BtnLink>
  </SecondaryBtnLg>
)

BtnSecondaryLg.propTypes = PropValues

const BtnForm = ({ text, link }) => (
  <FormBtn type="submit">
    <BtnLink to={link}>{text}</BtnLink>
  </FormBtn>
)

BtnForm.propTypes = PropValues

export { BtnPrimary, BtnSecondary, BtnPrimaryLg, BtnSecondaryLg, BtnForm }
