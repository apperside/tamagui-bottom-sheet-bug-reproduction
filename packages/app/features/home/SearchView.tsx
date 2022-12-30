import { Button, Label, ScrollView, Stack, useEvent, YStack } from '@my/ui'

import SearchBox from './SearchBox'

function SearchView({ onClose }: { onClose: () => void }) {
  return (
    <Stack w="100%">
      <SearchBox w={'100%'} placeholder={'Search something...'} />
      <Button theme={'red'} mt="$3" zIndex={1}>
        Search something
      </Button>
      <YStack mt="$5">
        <Label color="white" mb="$2">
          Where?
        </Label>
        <SearchBox w={'100%'} placeholder={'City or address'} />
      </YStack>
    </Stack>
  )
}

export default SearchView
