import { 
  Container, 
  Heading, 
  SimpleGrid, 
  Divider 
} from '@chakra-ui/react'
import Section from '../components/section'
import { 
  WorkGridItem 
} from '../components/grid-item'
import Layout from "../components/layouts/article"


import thumbMatrix from '../public/images/matrix.png'
import thumbTeclado from '../public/images/teclado.png'
import thumbDashboard from '../public/images/dashboard.png'
import thumbUiCloneDiscord from '../public/images/ui-clone-discord.png'

const Works = () => {
  return (
    <Layout>
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Projetos
      </Heading>
      <SimpleGrid column={[1,1,2]} gap={6}>
       <Section>
         <WorkGridItem 
           id="matrix"
           title="Matrix"
           thumbnail={thumbMatrix}
         >
           Python/Pygame Matrix Reload
       </WorkGridItem>
       </Section>
       <Section>
         <WorkGridItem 
           id="teclado"
           title="Teclado"
           thumbnail={thumbTeclado}
         >
           Aprendendo mais so o DOM Modelo de Objeto de Documento(Html e JavaScript)
       </WorkGridItem>
       </Section>
       <Section>
         <WorkGridItem 
           id="dashboard"
           title="DashBoard"
           thumbnail={thumbDashboard}
         >
           Refazendo o DashBoard, aprendendo mais com Html e Css. 
           Tentei refazer para typescript Reactjs ou Nextjs mas deu alguns erros.
       </WorkGridItem>
       </Section>
       <Section>
         <WorkGridItem 
           id="discord"
           title="Ui-Clone-Discord"
           thumbnail={thumbUiCloneDiscord}
         >
           Playlist do Canal do Youtube da Rocktseat UI Clone, Ui Clone Discord.
       </WorkGridItem>
       </Section>
      </SimpleGrid>
    </Container>
    </Layout>
  )
}

export default Works