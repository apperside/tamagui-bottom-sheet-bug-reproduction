import { GetProps, Input, Stack, styled, XStack } from '@my/ui'
import { isWeb } from '@tamagui/constants'
import { X, Search } from '@tamagui/lucide-icons'
const SearchInput = styled(
  Input,
  {
    backgroundColor: '$backgroundLight',
    px: '$iconTextInputPadding',
    paddingLeft: 20,
    borderColor: '#00000000',
    color: 'white',
    // ... your custom styles here
  },
  { isReactNative: !isWeb }
)
type SearchBoxProps = GetProps<typeof Input> & {
  containerProps?: GetProps<typeof Stack>
}

export const SearchBox = SearchInput.extractable(
  ({
    onChange,
    isLoading = false,
    onChangeText,
    delay = 450,
    onReset,
    containerProps,
    ...props
  }: SearchBoxProps & {
    isLoading?: boolean
    delay?: number
    onStartLoading?: () => void
    onStopLoading?: () => void
    onReset?: () => void
    initialValue?: string
  }) => {
    return (
      <XStack alignItems={'center'} position="relative" {...containerProps}>
        <Input
          paddingLeft={20}
          paddingRight={20}
          flex={1}
          w="100%"
          placeholder="jgsda fas hjfg sadi fiasd "
          backgroundColor="white"
          placeholderTextColor="#ffffff88"
          {...props}
        />
        {/* {!!_isLoading && (
          <Stack position="absolute" left={2}>
            <Loader size={20} />
          </Stack>
        )} */}
        <Stack position="absolute" >
          <Search  size={25} color={'red'} />
        </Stack>
        {/* {!_isLoading && (
          <AppIcon
            size={25}
            padding={5}
            onPress={clear}
            right={2}
            name="feather.ic_x"
            position="absolute"
            color={theme.primaryColor.val}
          />
        )} */}
      </XStack>
    )
  }
)

export default SearchBox
