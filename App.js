import * as React from 'react';
import { Text, View } from 'react-native';
import { useFonts } from 'expo-font';

import openSansTtf from './assets/OpenSans-VariableFont.ttf';

const fonts = {
  openSans: openSansTtf,
};

export default function App() {
  const [fontsLoaded, fontError] = useFonts(fonts);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Loaded: {fontsLoaded ? 'true' : 'false'}.  Error: {fontError ? String(fontError) : 'N/A'}</Text>
    </View>
  );
}
