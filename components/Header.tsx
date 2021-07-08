import { useControllableState } from "@chakra-ui/react"
import { Stack } from '@chakra-ui/layout';
import { Heading, Button } from "@chakra-ui/react"

import AddTask from './AddTask';

type HeaderProps = {
  showAdd: Boolean
}

export default function Header({ showAdd }: HeaderProps) {

  const [addTaskState, setAddTaskState] = useControllableState({ defaultValue: false })

  return (
    <>
      <Stack direction="row" justify="space-between">
        <Heading>Task Tracker</Heading>
        {showAdd ? (
          <Button colorScheme={addTaskState ? "red" : "green"} onClick={() => setAddTaskState(!addTaskState)}>{addTaskState ? "Close" : "Add"}</Button>
        ) : (
          <></>
        )}
      </Stack>
      {addTaskState ? (
        <AddTask />
      ) : (
        <></>
      )}
    </>
  )
}
