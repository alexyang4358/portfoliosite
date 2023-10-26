import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  AspectRatio,
  Flex,
  Heading,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";
import { motion } from "framer-motion";

const Work = () => (
  <Layout title="connected">
    <Container>
      <Title>
        Connected <Badge>2023</Badge>
      </Title>
      <P>
        Connected is a web application designed for non-profit organizations
        that work with refugees and asylum seekers. The application allows
        organizations to share events with clients in a secure, closed-loop
        system that helps the clients to have quick and easy access to events of
        interest without the need for any social media accounts.
      </P>
      <Heading as="h3" variant="section-title" mt={10}>
        Intro to the Problem
      </Heading>
      <P>
        Our users face unfamiliar turbulence when seeking asylum. Where to live,
        how to pay for electricity, finding appropriate legal representation all
        while supporting themselves, family and loved ones. Safety is a huge
        concern for our users while they assimilate into the United States and
        wait to be granted asylum. The non-profits we interviewed relied mainly
        on flyers and word-of-mouth invites for the exceptional services they
        were providing. Reading and writing English, paying simple bills,
        education and much more. However, a lot of the community missed out on
        these opportunities because they are not able to use the internet as
        openly as others.
      </P>

      <Flex>
        <WorkImage src="/images/works/connected1.png"></WorkImage>
        <WorkImage src="/images/works/connected2.png"></WorkImage>
      </Flex>
      <Heading as="h3" variant="section-title" mt={5}>
        How can we facilitate these resources to asylum seekers?
      </Heading>
      <Heading size="h3" alignItems="center" justifyItems="center"></Heading>
    </Container>
  </Layout>
);

export default Work;

{
  /* <P>
Connect utilizes Django Rest Framework to deploy a PostgreSQL database.
React.JS provides the front-end framework.
</P> */
}
