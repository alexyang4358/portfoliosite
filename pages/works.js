import { Container, Heading, SimpleGrid, Divider } from "@chakra-ui/react";
import Layout from "../components/layouts/article";

import Section from "../components/section";
import { WorkGridItem } from "../components/grid-item";
import connected from "../public/images/connected.jpg";
import spring from "../public/images/spring.jpg";
import canes from "../public/images/canes.jpg";
import signup from "../public/images/signup.jpg";

const Works = () => {
  return (
    <Layout title="Works">
      <Container>
        <Heading as="h3" fontSize={20} mt="50px">
          Works
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6} mt={5}>
          <Section delay={0.1}>
            <WorkGridItem
              id="connected"
              title="connected"
              thumbnail={connected}
            >
              front-end developer and UX researcher for non-profit web
              application
            </WorkGridItem>
          </Section>
          <Section delay={0.1}>
            <WorkGridItem id="work2" title="front-end" thumbnail={signup}>
              {/* Sample text about my first piece of work. */}
            </WorkGridItem>
          </Section>
          <Section delay={0.1}>
            <WorkGridItem id="work3" title="design" thumbnail={spring}>
              {/* Sample text about my first piece of work. */}
            </WorkGridItem>
          </Section>
          <Section delay={0.1}>
            <WorkGridItem id="work4" title="advertisements" thumbnail={canes}>
              {/* Sample text about my first piece of work. */}
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  );
};

export default Works;
