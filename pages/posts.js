import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import thumbMatrix from '../public/images/matrix.png'

const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h4" fontize={20} mb={4}>
        Popular Posts
      </Heading>
      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 3]} gap={6}>
            <GridItem 
              title="Matrix"
              thumbnail={thumbMatrix}
              href=""
            />
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Posts