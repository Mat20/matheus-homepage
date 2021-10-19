import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/works'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="Matrix">
     <Container>
       <Title>
         Matrix <Badge>2021</Badge>
       </Title>
       <P>
         Aprofundando mais na Liguagem Python é Pygame.
         Inspirado na Matrix.
       </P>
       <List ml={4} my={4}>
         <ListItem>
           <Meta>GitHub</Meta>
           <Link href="https://github/Mat20/matrix-pygame">
             Matrix <ExternalLinkIcon mx="2px" />
           </Link>
         </ListItem>
         <ListItem>
           <Meta>Plataforma</Meta>
           <span>Codigo, Multiplataforma</span>
         </ListItem>
         <ListItem>
           <Meta>Stack</Meta>
           <span>Python/Pygame</span>
         </ListItem>
       </List>

       <WorkImage src="/images/matrix.png" alt="Matrix" />
    </Container>      
    </Layout>
  )
}

export default Work