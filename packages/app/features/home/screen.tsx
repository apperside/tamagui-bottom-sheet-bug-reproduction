import {
  Anchor,
  Button,
  H1,
  Input,
  Label,
  Paragraph,
  Separator,
  Sheet,
  XStack,
  YStack,
} from '@my/ui'
import { ChevronDown, ChevronUp } from '@tamagui/lucide-icons'
import React, { useState } from 'react'
import { useLink } from 'solito/link'
import { SearchViewModal } from './SearchViewModal'

export function HomeScreen() {
  const linkProps = useLink({
    href: '/user/nate',
  })
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false)
  return (
    <YStack f={1} jc="center" ai="center" p="$4" space>
      <YStack space="$4" maw={600}>
        <H1 ta="center">Welcome to Tamagui.</H1>
        <Paragraph ta="center">
          Here's a basic starter to show navigating from one screen to another. This screen uses the
          same code on Next.js and React Native.
        </Paragraph>

        <Input onFocus={() => setIsSearchModalOpen(true)} px="$5" placeholder="focus me" />

        <Separator />

        <Paragraph ta="center">
          Made by{' '}
          <Anchor color="$color12" href="https://twitter.com/natebirdman" target="_blank">
            @natebirdman
          </Anchor>
          ,{' '}
          <Anchor
            color="$color12"
            href="https://github.com/tamagui/tamagui"
            target="_blank"
            rel="noreferrer"
          >
            give it a ⭐️
          </Anchor>
        </Paragraph>
      </YStack>

      <XStack>
        <Button {...linkProps}>Link to user</Button>
      </XStack>
      <SearchViewModal onClose={() => setIsSearchModalOpen(false)} show={isSearchModalOpen} />
      <SheetDemo />
    </YStack>
  )
}
function SheetDemo() {
  const [open, setOpen] = useState(false)
  const [position, setPosition] = useState(0)
  return (
    <>
      <Button
        size="$6"
        icon={open ? ChevronDown : ChevronUp}
        circular
        onPress={() => setOpen((x) => !x)}
      />
      <Sheet
        modal
        open={open}
        onOpenChange={setOpen}
        snapPoints={[100]}
        disableDrag
        position={position}
        onPositionChange={setPosition}
        dismissOnSnapToBottom
      >
        <Sheet.Overlay />
        <Sheet.Frame>
          <Sheet.Handle />
          {/* <YStack
            position="absolute"
            left={0}
            top={0}
            right={0}
            bottom={'1%'} //bottom must be 100 minus the current snap point percentage, in this case is 80
            overflow="hidden"
            bw={1}
          > */}
          <Sheet.ScrollView>
            {/* <KeyboardAvoidingView> */}
            <Label>1</Label>
            <Input my="$5" bc="red" />
            <Label>2</Label>
            <Input my="$5" bc="red" />
            <Label>3</Label>
            <Input my="$5" bc="red" />
            <Label>4</Label>
            <Input my="$5" bc="red" />
            <Label>5</Label>
            <Input my="$5" bc="red" />
            <Label>6</Label>
            <Input my="$5" bc="red" />
            <Label>7</Label>
            <Input my="$5" bc="red" />
            <Label>8</Label>
            <Input my="$5" bc="red" />
            <Label>9</Label>
            <Input my="$5" bc="red" />
            <Label>10</Label>
            <Input my="$5" bc="red" />
            {/* </KeyboardAvoidingView> */}
          </Sheet.ScrollView>
          {/* </YStack> */}
          <Button
            size="$6"
            circular
            icon={ChevronDown}
            onPress={() => {
              setOpen(false)
            }}
          />
        </Sheet.Frame>
      </Sheet>
    </>
  )
}
