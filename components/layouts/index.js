import Head from 'next/head'
import Navbar from '../navbar'
import NoSsr from '../no-ssr'
import { Box, Container } from '@chakra-ui/react'
import VoxelSnake from '../voxel-snake'

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
       <Head>
         <meta name="viewport" content="width=device-width, initial-scale=1" />
         <title>Matheus Souza Monteiro - HomePage</title>
       </Head>

       <Navbar path={router.asPath} />

       <Container maxW="container.md" pt={14}>
         <NoSsr>
            <VoxelSnake />
        </NoSsr>
        {children}
       </Container>
    </Box>
  )
}

export default Main