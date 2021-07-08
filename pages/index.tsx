import { Container, Box, Divider } from '@chakra-ui/layout';

import Task from '../components/Task';
import Header from '../components/Header';

export default function Home() {
  return (
    <Container maxW="container.sm">
      <Box marginTop="5" padding="5" borderWidth="1px" borderRadius="lg" borderColor="black">
        <Header showAdd={true} />
        <Divider marginTop="3" marginBottom="3"></Divider>
        <Task title="This is my task" date="This is my tasks date" />
        <Task title="This is my task" date="This is my tasks date" />
      </Box>
    </Container>
  )
}
