import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  AspectRatio,
  Flex,
  Image,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Work = () => (
  <Layout title="connected">
    <Container>
      <Title>
        Advertisements <Badge>2018-</Badge>
      </Title>

      <Flex>
        <Image src="/images/ads.png"></Image>
      </Flex>
      <Image mt="2px" src="/images/ads2.png"></Image>
    </Container>
  </Layout>
);

export default Work;
