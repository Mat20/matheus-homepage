import NextLink from 'next/link'
import { Box, Heading, Text, Container, Divider, Button } from '@chakra-ui/react'

const NotFound = () => {
   return (
     <Container>
       <Heading>Vishi .....trotos</Heading>
         <Text>A pagina que você acessou, não foi encontrada.</Text>
         <Divider my={6} />

         <Box my={6} align="center">
           <NextLink href="/" >
             <Button colorScheme="teal" >Volta a Home</Button>
           </NextLink>
         </Box>
     </Container>
   )
}

export default NotFound