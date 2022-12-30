import { Adapt, Button, Dialog, Sheet, Unspaced } from '@my/ui'
import { X } from '@tamagui/lucide-icons'
import React from 'react'
import SearchView from './SearchView'

export function SearchViewModal({ show, onClose }: { show: boolean; onClose: () => void }) {

  return (
    <Dialog open={show}>
      {/* 

      --> IF THE BELOW CODE IS COMMENTED IT DOESN'T RENDER ON NATIVE SIDE <--

      */}
      {/* <Adapt when="sm" platform="touch">
        <Sheet
          onOpenChange={(open) => {
            if (!open) {
              onClose?.()
            }
          }}
          zIndex={200_000}
          modal
          dismissOnOverlayPress={false}
          dismissOnSnapToBottom
        >
          <Sheet.Frame backgroundColor={'#1F1D2B'} padding="$4" space>
            <Adapt.Contents />
          </Sheet.Frame>
          <Sheet.Overlay />
        </Sheet>
      </Adapt> */}

      <Dialog.Portal>
        <Dialog.Overlay
          key="overlay"
          animation="quick"
          backgroundColor={'red'}
          o={0.5}
          enterStyle={{ o: 0 }}
          exitStyle={{ o: 0 }}
        />
        <Dialog.Content
          bordered
          elevate
          key="content"
          animation={[
            'quick',
            {
              opacity: {
                overshootClamping: true,
              },
            },
          ]}
          w="90%"
          enterStyle={{ x: 0, y: -20, opacity: 0, scale: 0.9 }}
          exitStyle={{ x: 0, y: 10, opacity: 0, scale: 0.95 }}
          x={0}
          scale={1}
          opacity={1}
          y={0}
          space
          p={30}
        >
          <Dialog.Title color="white">What are you looking for?</Dialog.Title>
          <SearchView onClose={onClose} />

          <Unspaced>
            <Dialog.Close asChild>
              <Button
                pos="absolute"
                t="$2"
                r="$2"
                size="$3"
                circular
                cursor="pointer"
                onPress={onClose}
                icon={X}
              />
            </Dialog.Close>
          </Unspaced>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog>
  )
}
