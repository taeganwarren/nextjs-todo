import { Container, Box, Divider, Text } from '@chakra-ui/layout';

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
        <Text marginTop="4" align="center">Copyright &copy; 2021</Text>
      </Box>
    </Container>
  )
}
