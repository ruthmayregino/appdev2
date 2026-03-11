import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import PreviewLayout from '../components/PreviewLayout';

const FlexWrapScreen = () => {
  const [flexWrap, setFlexWrap] = useState('wrap');

  return (
    <PreviewLayout
      label="flexWrap"
      selectedValue={flexWrap}
      values={['wrap', 'nowrap']}
      setSelectedValue={setFlexWrap}
    >
      <View style={[styles.box, { backgroundColor: 'orangered' }]} />
      <View style={[styles.box, { backgroundColor: 'orange' }]} />
      <View style={[styles.box, { backgroundColor: 'mediumseagreen' }]} />
      <View style={[styles.box, { backgroundColor: 'deepskyblue' }]} />
      <View style={[styles.box, { backgroundColor: 'mediumturquoise' }]} />
      <View style={[styles.box, { backgroundColor: 'mediumslateblue' }]} />
      <View style={[styles.box, { backgroundColor: 'purple' }]} />
    </PreviewLayout>
  );
};

const styles = StyleSheet.create({
  box: {
    width: 50,
    height: 80,
  },
});

export default FlexWrapScreen;