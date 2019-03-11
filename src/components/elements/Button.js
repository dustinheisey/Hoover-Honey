import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { styled } from '../../../config/global'

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
  padding-left: var(--xxl);
  padding-right: var(--xxl);
`

const SecondaryBtnLg = styled(SecondaryBtn)`
  padding-left: var(--xxl);
  padding-right: var(--xxl);
`

const BtnPrimary = ({ text, link }) => (
  <PrimaryBtn>
    <Link to={link}>{text}</Link>
  </PrimaryBtn>
)

const PropValues = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
}

BtnPrimary.propTypes = PropValues

const BtnSecondary = ({ text, link }) => (
  <SecondaryBtn>
    <Link to={link}>{text}</Link>
  </SecondaryBtn>
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
