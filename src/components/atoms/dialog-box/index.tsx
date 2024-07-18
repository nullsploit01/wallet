import React, { Fragment, useState } from 'react'
import { Modal, TouchableOpacity } from 'react-native'
import { Button, H3, View, YStack } from 'tamagui'

import { IDialogBoxProps } from '@/src/types/components/atoms'

const DialogBox = ({ label, title, content }: IDialogBoxProps) => {
  const [modalVisible, setModalVisible] = useState(false)

  return (
    <Fragment>
      <Modal
        animationType="fade"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible)
        }}
      >
        <YStack justifyContent="center" alignItems="center" flex={1}>
          <H3>{title}</H3>
          <View marginVertical="$5">{content}</View>
        </YStack>
      </Modal>
      {typeof label === 'string' ? (
        <Button
          borderColor="#2F3645"
          borderWidth="$1"
          backgroundColor="$gray1"
          onPress={() => setModalVisible(true)}
        >
          {label}
        </Button>
      ) : (
        <TouchableOpacity onPress={() => setModalVisible(true)}>{label}</TouchableOpacity>
      )}
    </Fragment>
  )
}

export default DialogBox
