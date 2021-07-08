import { Container, Box, Divider } from '@chakra-ui/layout';

import Header from '../components/Header';

export default function about() {
  return (
    <Container maxW="container.sm">
      <Box marginTop="5" padding="5" borderWidth="1px" borderRadius="lg" borderColor="black">
        <Header showAdd={false} />
        <Divider marginTop="3" marginBottom="3"></Divider>
      </Box>
    </Container>
  )
}
