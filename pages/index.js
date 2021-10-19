import { 
  Container, 
  Box, 
  Heading, 
  Image,
  Link,
  Button,
  SimpleGrid,
  List,
  ListItem,
  Icon, 
  useColorModeValue 
} from "@chakra-ui/react"
import { ChevronRightIcon } from "@chakra-ui/icons"
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import NextLink from 'next/link'
import Section from "../components/section"
import Paragraph from "../components/paragraph"
import { GridItem } from "../components/grid-item"
import {
   IoLogoTwitter,
   IoLogoInstagram,
   IoLogoGithub,
   IoLogoFacebook,
   IoLogoLinkedin
} from 'react-icons/io5'


const Page = () => {
  return (
    <Layout>
    <Container>
      <Box 
         borderRadius="lg" 
         bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} 
         p={3} 
         mb={6} 
         align="center"
      >
         Oi, Eu sou desenvolvedor full-stack no Brasil!
      </Box>
      
      <Box display={{md:'flex'}}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Matheus Souza Monteiro
          </Heading>
      <p>
        (Artista/ Desenvolveldor / Designer)<br/>
        (Python/ DataScience/ Pygame/ Node/ ReatcJS/ TypeScript)
        (ReactNative/ Android/ Kotlin/ Java/ CSS/ Sass)
      </p>
        </Box>
        <Box 
           flexShrink={0} 
           mt={{base: 4, md: 0}} 
           ml={{md: 6}} 
           align="center" 
        >
          <Image 
             borderColor="whiteAlpha.800" 
             borderWidth={2} 
             borderStyle="solid" 
             maxWidth="100px" 
             display="inline-block" 
             borderRadius="full" 
             src="/images/matheus.jpeg" 
             alt="Profil Image"
          />
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Projetos
        </Heading>
        <Paragraph>
           Programador FullStack é desenvolvimentos de jogos, 
           Godot Engine, ReatcJS, React Native, Node, Python/Pygame.
          <br/>
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works">
            <Button 
               rightIcon={<ChevronRightIcon />}   
            >
              Meu Portifolio
            </Button>
          </NextLink>
        </Box>
      </Section>
      <Section delay={0.2}>
         <Heading as="h3" variant="sectio-title">
           Bio
         </Heading>
         <BioSection>
           <BioYear>1996</BioYear>
           Mora em São Francisco, Minas Gerais, Brasil
         </BioSection>
         <BioSection>
         <BioYear>2018</BioYear>
         Formado na Faculdade de Sitema de Informação, Montes Claro, Mina Gerais.
         </BioSection>
         <BioSection>
         <BioYear>2021</BioYear>
         Atualmente vivendo e respirando Nodejs ou ReactJS e React Native o basico.
         </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading>
          Eu amo
        </Heading>
        <Paragraph>
          Art e comida Japonesa,{' '}
          Games Python/Pygame, Godot Engine,{' '}
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Rede Socias  
        </Heading>
        <List>
          <ListItem>
            <Link href="http://github.com/mat20" target="_blank">
              <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoGithub} />}>
                @Mat20
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.instagram.com/matheu17/" target="_blank">
              <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoInstagram} />}>
                @MATHUE17
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.facebook.com/souzamonteiromatheusouza/" target="_blank">
              <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoFacebook} />}>
                Matheus Souza Monteiro
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/ma1t9" target="_blank">
              <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoTwitter} />}>
                @m1t9
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.linkedin.com/in/matheus-souza-018012142/" target="_blank">
              <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoLinkedin} />}>
                Matheus Souza
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>
    </Container>
    </Layout>
  )
}

export default Page