// app/onboarding.tsx
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import { Button, Text, View } from 'react-native';

export default function Onboarding() {
  const router = useRouter();

  const handleFinish = async () => {
    await AsyncStorage.setItem('hasSeenOnboarding', 'true');
    router.replace('/'); // goes to (tabs)
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome to the Medicine Reminder App!</Text>
      <Button title="Get Started" onPress={handleFinish} />
    </View>
  );
}
