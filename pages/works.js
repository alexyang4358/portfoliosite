import { Container, Heading, SimpleGrid, Divider } from "@chakra-ui/react";

import Section from "../components/section";
import { WorkGridItem } from "../components/grid-item";
import yang from "../public/images/yang.jpg";
import connected from "../public/images/connected.jpg";
import cafe from "../public/images/cafe.jpg";
import spring from "../public/images/spring.jpg";
import canes from "../public/images/canes.jpg";
import signup from "../public/images/signup.jpg";

const Works = () => {
  return (
    <Container>
      <Heading as="h3" fontSize={20} mt={20}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6} mt={5}>
        <Section>
          <WorkGridItem id="work1" title="ux" thumbnail={connected}>
            {/* Sample text about my first piece of work. */}
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="work2" title="front-end" thumbnail={signup}>
            {/* Sample text about my first piece of work. */}
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="work3" title="design" thumbnail={spring}>
            {/* Sample text about my first piece of work. */}
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="work4" title="advertisements" thumbnail={canes}>
            {/* Sample text about my first piece of work. */}
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  );
};

export default Works;
