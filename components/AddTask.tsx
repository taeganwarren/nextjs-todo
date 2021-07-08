import { Box, Input, Text, Button } from "@chakra-ui/react"

export default function AddTask() {
  return (
    <Box marginTop="2">
      <Text fontSize="lg" fontWeight="bold">Task</Text>
      <Input placeholder="Add Task" />
      <Text marginTop="1" fontSize="lg" fontWeight="bold">Description</Text>
      <Input placeholder="Add Description" />
      <Button w="100%" marginTop="3" colorScheme="green">Save Task</Button>
    </Box>
  )
}