import Image from 'next/image';
import React from 'react';
import { Container } from '@/components/Container';
import { Heading } from '@/components/Heading';
import { Paragraph } from '@/components/Paragraph';
import { Highlight } from "@/components/Highlight";
import { Products } from '@/components/Products';
import { TechStack } from '@/components/TechStack';

export default function Home() {
  return (
    <Container>
      <span className="text-4xl">👋</span>
      <Heading className="font-black text-zinc-600">
        Hello there! I&apos;m Ali
      </Heading>
      <Paragraph className="mt-4 max-w-xl text-neutral-500">
        I'm a full-stack developer that loves <Highlight>building products</Highlight> and web apps
        that can impact millions of lives
      </Paragraph>
      <Paragraph className="max-w-xl mt-4 text-neutral-500">
        I&apos;m a junior software developer with{" "}
        <Highlight>2 years of experience</Highlight> building scalable web apps
        that are performance optimized and good looking.
      </Paragraph>
      <Heading
        as="h2"
        className="font-black text-lg text-zinc-600 md:text-lg lg:text-lg mt-20 mb-4"
      >
        What I&apos;ve been working on
      </Heading>
      <Products />
      <TechStack />
    </Container>
  );
}
