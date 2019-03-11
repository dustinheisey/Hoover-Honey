import React from 'react'
import {
  IoLogoFacebook,
  IoLogoYoutube,
  IoMdMail,
  IoMdCall,
} from 'react-icons/io'
import { BtnForm } from './elements/Button'
import { styled, devices } from '../../config/global'

const Container = styled.section`
  @media ${devices.desktop} {
    padding: var(--xxl);
  }

  @media ${devices.tablet} {
    padding: var(--md);
  }
`
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`

const FormItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-bottom: var(--sm);
`

const Input = styled.input`
  width: 100%;
  outline: none;
  border: none;
  border-radius: 5px;
  background: var(--light);
`

const TextArea = styled.textarea`
  width: 100%;
  outline: none;
  border: none;
  border-radius: 5px;
  background: var(--light);
  margin-bottom: var(--sm);
`

const Social = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`
const SocialItem = styled.div`
  padding: var(--sm) 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: var(--dark-1);

  & * {
    margin-right: var(--sm);
  }
`
const Heading = styled.span`
  font-weight: 700;
`
const SocialLink = styled.a`
  color: var(--dark-2);
  text-decoration: none;
`

const Form = () => (
  <Container>
    <Social>
      <SocialItem>
        <IoMdMail />
        <Heading>Email: </Heading>
        <SocialLink href="mailto:hooverjarod@gmail.com" rel="noopener">
          hooverjarod@gmail.com
        </SocialLink>
      </SocialItem>
      <SocialItem>
        <IoMdCall />
        <Heading>Phone: </Heading>
        <SocialLink href="tel:1-817-374-9816" rel="noopener">
          {' '}
          817-374-9816
        </SocialLink>
      </SocialItem>
      <SocialItem>
        <IoLogoFacebook />
        <SocialLink
          href="https://www.facebook.com/hooverhoney/"
          target="_blank"
          rel="noopener"
        >
          Facebook
        </SocialLink>
      </SocialItem>
      <SocialItem>
        <IoLogoYoutube />
        <SocialLink
          href="https://www.youtube.com/channel/UCJtq2YIfh2SHn49mJoJ9PJg"
          target="_blank"
          rel="noopener"
        >
          Youtube
        </SocialLink>
      </SocialItem>
    </Social>
    <StyledForm
      name="contact"
      method="POST"
      action="/success/"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value="contact" />
      <p hidden>
        <label htmlFor="bot-field">
          Don’t fill this out: <input name="bot-field" />
        </label>
      </p>
      <FormItem>
        <label htmlFor="name">Name</label>
        <Input type="text" name="name" autoComplete="name" />
      </FormItem>
      <FormItem>
        <label htmlFor="email">Email</label>
        <Input type="email" name="email" autoComplete="email" />
      </FormItem>
      <FormItem>
        <label htmlFor="email">
          Phone - <em>Optional</em>
        </label>
        <Input type="phone" name="phone" autoComplete="tel" />
      </FormItem>
      <FormItem>
        <label htmlFor="message">Message</label>
        <TextArea id="message" name="message" rows="6" />
      </FormItem>
      <BtnForm type="submit" text="submit" link="/" />
    </StyledForm>
  </Container>
)

export default Form
