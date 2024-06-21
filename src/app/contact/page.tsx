import React from 'react'
import { Contact } from "@/components/Contact";
import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Paragraph } from "@/components/Paragraph";
const contact = () => {
  return (
    <Container>
      <span className="text-4xl">✉️</span>
      <Heading className="font-black text-zinc-600 mb-2">Contact Me</Heading>
      <Paragraph className="mb-10 max-w-xl text-neutral-500">
        Reach out to me over email or fill up this contact form. I will get back
        to you ASAP - I promise.{" "}
      </Paragraph>
      <Contact />
    </Container>
  )
}

export default contact