import { Container, Heading, SimpleGrid, Divider } from "@chakra-ui/react";

import Section from "../components/section";
import { WorkGridItem } from "../components/grid-item";
import yang from "../public/images/yang.jpg";
const Works = () => {
  return (
    <Container>
      <Heading as="h3" fontSize={20} mt={20}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6} mt={5}>
        <Section>
          <WorkGridItem id="work1" title="Work1" thumbnail={yang}>
            Sample text about my first piece of work.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="work1" title="Work1" thumbnail={yang}>
            Sample text about my first piece of work.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  );
};

export default Works;
