import { Box, Stack } from "@chakra-ui/layout";
import { Text, IconButton } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";

type TaskProps = {
  title: String,
  date: String
}

export default function Task({ title, date }: TaskProps) {
  return (
    <Box padding="3" marginBottom="2" backgroundColor="gray.100" borderLeftWidth="4px" borderColor="green">
      <Stack direction="row" justify="space-between">
        <Text fontWeight="bold" fontSize="lg">{title}</Text>
        <IconButton size="xs" variant="ghost" aria-label="Remove task" colorScheme="red" icon={<CloseIcon />} />
      </Stack>
      <Text fontSize="sm">{date}</Text>
    </Box>
  );
}
