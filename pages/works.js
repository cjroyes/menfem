import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'
import thumbWalknote from '../public/images/works/walknote_eyecatch.png'
import thumbFourPainters from '../public/images/works/the-four-painters_eyecatch.jpeg'
import thumbMenkiki from '../public/images/works/menkiki_eyecatch.png'
import thumbModeTokyo from '../public/images/works/modetokyo_eyecatch.png'
import thumbStyly from '../public/images/works/styly_eyecatch.png'


const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="proj1" title="project 1" thumbnail={thumbInkdrop}>
            detail on project 1
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="proj2"
            title="project 2"
            thumbnail={thumbWalknote}
          >
            detail on project 2
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="proj3"
            title="project 3"
            thumbnail={thumbFourPainters}
          >
            detail on project 3
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="proj4" thumbnail={thumbMenkiki} title="project 4">
            detail on project 4
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Collaborations
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem
            id="modetokyo"
            thumbnail={thumbModeTokyo}
            title="Forgotten Players"
          >
            A community for connecting forgotten players
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem id="styly" thumbnail={thumbStyly} title="(think of a cool name...)">
            A VR Creative tools for sports brands
          </WorkGridItem>
        </Section>
      </SimpleGrid>

    

      
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
