import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/works'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="Ui Clone Discord">
     <Container>
       <Title>
       Ui Clone Discord <Badge>2021</Badge>
       </Title>
       <P>
         Aprofundado em React, Typecript.
       </P>
       <List ml={4} my={4}>
         <ListItem>
           <Meta>GitHub</Meta>
           <Link href="https://github.com/Mat20/ui-clone-discord-interface">
           Ui Clone Discord <ExternalLinkIcon mx="2px" />
           </Link>
         </ListItem>
         <ListItem>
           <Meta>Plataforma</Meta>
           <span>Web</span>
         </ListItem>
         <ListItem>
           <Meta>Stack</Meta>
           <span>ReactApp/ReactJs</span>
         </ListItem>
       </List>

       <WorkImage src="/images/ui-clone-discord.png" alt="Discord Clone" />
    </Container>      
    </Layout>
  )
}

export default Work