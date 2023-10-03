import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  AspectRatio,
  Flex,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Work = () => (
  <Layout title="connected">
    <Container>
      <Title>
        Connected <Badge>2023</Badge>
      </Title>
      <P>
        Connected is a web application designed for non-profit organizations
        that work with refugees and asylum seekers. We designed the application
        to allow organizations to share events with clients in a secure,
        closed-loop system that helps the clients to have quick and easy access
        to events of interest without the need for any social media accounts.
      </P>
      <Flex>
        <WorkImage src="/images/works/connected1.png"></WorkImage>
        <WorkImage src="/images/works/connected2.png"></WorkImage>
      </Flex>
      <P>
        Connect utilizes Django Rest Framework to deploy a PostgreSQL database.
        React.JS provides the front-end framework.
      </P>
    </Container>
  </Layout>
);

export default Work;
