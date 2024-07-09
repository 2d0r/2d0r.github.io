import React from 'react';
import {
    Html, Body, Head, Heading, Hr, Container, Preview, Section, Text
} from '@react-email/components';
import { Tailwind } from '@react-email/tailwind';

export default function EmailTemplate({message, senderEmail}: {
    message: string, senderEmail: string
}) {
  return <Html>
    <Head />
    <Tailwind>
    <Preview>New message from 2d0r.github.io</Preview>
    <Body className='absolute top-0 left-0 w-full h-full flex items-center justify-center 
      bg-blue-300 text-white bg-gradient-to-b from-blue-500 to-blue-300'>
      <Container className='border-1 border-white rounded-2xl p-8 mt-8 w-[300px] bg-transparent text-center'
        style={{ border: '1px solid white', width: '100%' }}>
        <Heading className='text-lg'>Message from {senderEmail}</Heading>
        <Text>{message}</Text>
      </Container>
    </Body>
    </Tailwind>
  </Html>
  // return (<Tailwind><div className='w-full h-full bg-gradient-to-b from-blue-500 to-blue-300'>
  //   <div className='border border-white rounded-3xl p-8 w-[min(100%,400px)]'>
  //     <h2>Message from {senderEmail}:</h2>
  //     <div>{message}</div>
  //   </div>
  // </div></Tailwind>)
}

