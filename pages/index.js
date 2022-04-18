import Head from 'next/head'
import Image from 'next/image'
import Location from '../common/components/Location/Location'
import { Container } from 'react-bootstrap'
export default function Home() {
  return (
    <Container className='mt-5'>
        <Location />
      
      </Container>
    
  )
}
