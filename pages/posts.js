import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import thumbFishWorkflow from '../public/images/contents/youtube-fish-workflow.jpeg'
import thumbMyDeskSetup from '../public/images/contents/youtube-my-desk-setup.jpeg'
import thumb500PaidUsers from '../public/images/contents/blog-500-paid-users.jpeg'
import thumbFinancialGoal from '../public/images/contents/blog-financial-goal.png'
import thumbHowToPriceYourself from '../public/images/contents/blog-how-to-price-yourself.jpeg'
import thumb50xFaster from '../public/images/contents/youtube-50x-faster.jpeg'

const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Popular Posts
      </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="My first program"
            thumbnail={thumbFishWorkflow}
            href="https://www.github.com/cjroyes"
          />
          <GridItem
            title="My second program"
            thumbnail={thumbMyDeskSetup}
            href="https://www.github.com/cjroyes"
          />
        </SimpleGrid>
      </Section>

      <Section delay={0.3}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="My third project"
            thumbnail={thumb500PaidUsers}
            href="https://www.github.com/cjroyes"
          />
          <GridItem
            title="my fourth project"
            thumbnail={thumbFinancialGoal}
            href="https://www.github.com/cjroyes"
          />
        </SimpleGrid>
      </Section>

      <Section delay={0.5}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="My fifth project"
            thumbnail={thumbHowToPriceYourself}
            href="https://www.github.com/cjroyes"
          />
          <GridItem
            title="my sixth project"
            thumbnail={thumb50xFaster}
            href="https://www.github.com/cjroyes"
          />
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Posts
export { getServerSideProps } from '../components/chakra'
