import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  AspectRatio,
  Flex,
  Heading,
  Button,
  Paragraph,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import { IoLogoGithub } from "react-icons/io5";

import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Work = () => (
  <Layout title="projects">
    <Container>
      <Title>
        Momentum Projects <Badge>2023</Badge>
      </Title>
      <List display="flex" alignContent="center" justifyContent="center">
        <ListItem>
          <Link href="https://github.com/alexyang4358" target="_blank">
            <Button
              variant="ghost"
              colorScheme="teal"
              leftIcon={<IoLogoGithub />}
            >
              @alexyang4358
            </Button>
          </Link>
        </ListItem>
      </List>
      <P>
        During my journey in a comprehensive full-stack developer program, I
        immersed myself in a dynamic learning experience that spanned a
        multitude of technologies, including JavaScript, Python, Django, and
        React. Throughout the program, I gained invaluable hands-on experience
        and expertise in crafting web applications from the ground up.
      </P>
      <P>
        Python and Django empowered me to build robust, scalable, and efficient
        back-end systems, allowing me to handle data and business logic
        seamlessly. In tandem with React, I seamlessly integrated the front-end
        and back-end, delivering seamless user experiences and responsive web
        applications.
      </P>
      <P>
        Through a series of challenging projects and real-world scenarios, this
        program not only equipped me with the technical prowess but also
        instilled in me the ability to approach complex problems systematically,
        all while embracing the Agile methodology. This combination has made me
        a well-rounded full-stack developer ready to tackle any project with
        confidence, whether it involves coding or agile project management.
        Please visit my{" "}
        <Link href="https://github.com/alexyang4358" target="_blank">
          Github
        </Link>{" "}
        for the repositories!
      </P>
    </Container>
  </Layout>
);

export default Work;
