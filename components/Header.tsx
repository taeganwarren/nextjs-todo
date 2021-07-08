import { Stack } from '@chakra-ui/layout';
import { Heading, Button } from "@chakra-ui/react"

type HeaderProps = {
  showAdd: Boolean
}

export default function Header({ showAdd }: HeaderProps) {
  return (
    <Stack direction="row" justify="space-between">
      <Heading>Task Tracker</Heading>
      {showAdd === true ? (
        <Button colorScheme="green">Add</Button>
      ) : (
        <></>
      )}
    </Stack>
  )
}
