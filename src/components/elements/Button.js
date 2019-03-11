import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { styled } from '../../../config/global'

const Btn = styled.button`
  border-radius: 5px;
  outline: none;
  border: none;
  padding: var(--sm) var(--md);
  text-decoration: none;
  cursor: pointer;
  display: inline-block;
`

const PrimaryBtn = styled(Btn)`
  background-color: var(--accent-1);
  color: var(--light);
  width: 50%;
`

const SecondaryBtn = styled(Btn)`
  border: 3px solid var(--light);
  background-color: transparent;
  color: var(--light);
  width: 50%;
`

const PrimaryBtnLg = styled(PrimaryBtn)`
  width: 25%;

  & * {
    color: var(--light);
    text-decoration: none;
  }
`

const SecondaryBtnLg = styled(SecondaryBtn)`
  width: 25%;

  & * {
    color: var(--light);
    text-decoration: none;
  }
`

const BtnPrimary = ({ text, link }) => (
  <Link to={link}>
    <PrimaryBtn>{text}</PrimaryBtn>
  </Link>
)

const PropValues = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
}

BtnPrimary.propTypes = PropValues

const BtnSecondary = ({ text, link }) => (
  <Link to={link}>
    <SecondaryBtn>{text}</SecondaryBtn>
  </Link>
)

BtnSecondary.propTypes = PropValues

const BtnPrimaryLg = ({ text, link }) => (
  <PrimaryBtnLg>
    <Link to={link}>{text}</Link>
  </PrimaryBtnLg>
)

BtnPrimaryLg.propTypes = PropValues

const BtnSecondaryLg = ({ text, link }) => (
  <SecondaryBtnLg>
    <Link to={link}>{text}</Link>
  </SecondaryBtnLg>
)

BtnSecondaryLg.propTypes = PropValues

export { BtnPrimary, BtnSecondary, BtnPrimaryLg, BtnSecondaryLg }
