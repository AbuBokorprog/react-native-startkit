import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const User = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1">
        <View>
          <Text>New schedule</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default User;
