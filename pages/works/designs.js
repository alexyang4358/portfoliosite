import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  AspectRatio,
  Flex,
  Box,
  Image,
  Stack,
  Grid,
} from "@chakra-ui/react";

import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from "../../components/paragraph";
import ParagraphDesigns from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Work = () => (
  <Layout>
    <Container>
      <Title>
        Graphic Design <Badge>2016-</Badge>
      </Title>
      <ParagraphDesigns>
        Here's a showcase of my design portfolio spanning several years,
        featuring logos, t-shirt designs, menus, and much more.
      </ParagraphDesigns>
      <Grid
        mt="20px"
        templateColumns={{ base: "1fr 1fl", md: "1fr 1fr" }}
        gap="5px"
        alignItems="center"
        justifyItems="center"
      >
        <Image maxW="75%" m="5px" src="/images/tab.png" />
        <p>i'm a caption</p>
        <p>i'm a caption</p>
        <Image maxW="75%" m="5px" src="/images/tab.png" />

        <Image maxW="75%" m="5px" src="/images/tab.png" />
        <p>i'm a caption</p>
        <p>i'm a caption</p>
        <Image maxW="75%" m="5px" src="/images/tab.png" />
      </Grid>
    </Container>
  </Layout>
);

export default Work;
