import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

interface OnboardingSlide {
  id: string;
  title: string;
  description: string;
  image: any;
  backgroundColor: string;
}

const { width, height } = Dimensions.get('window');

const onboardingSlides: OnboardingSlide[] = [
  {
    id: '1',
    title: 'Never Miss a Dose Again',
    description:
      'Get timely reminders for all your medications so you can stay consistent with your health routine.',
    image: require('../../assets/images/onboard/onboard-1.png'),
    backgroundColor: '#FFE2E2',
  },
  {
    id: '2',
    title: 'Track and Organize Your Medications',
    description:
      'Add your pills, set schedules, and manage everything in one easy-to-use place.',
    image: require('../../assets/images/onboard/onboard-2.png'),
    backgroundColor: '#B9F8CF',
  },
  {
    id: '3',
    title: 'Refill Reminders Made Easy',
    description:
      'Get notified when it’s time to refill your medications — never run out again.',
    image: require('../../assets/images/onboard/onboard-4.png'),
    backgroundColor: '#DFF2FE',
  },
  {
    id: '4',
    title: 'Customize Your Reminder Times',
    description:
      'Set reminders exactly when you need them — morning, afternoon, or night.',
    image: require('../../assets/images/onboard/onboard-3.png'),
    backgroundColor: '#FCCEE8',
  },
];

export default function Onboarding() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const router = useRouter();

  const handleSkip = async () => {
    try {
      await AsyncStorage.setItem('hasSeenOnboarding', 'true');
      router.replace('/');
    } catch (error) {
      console.error('Error saving onboarding status:', error);
    }
  };

  const handleNext = (): void => {
    if (currentIndex < onboardingSlides.length - 1) {
      const nextIndex = currentIndex + 1;

      setCurrentIndex(nextIndex);
    } else {
      handleSkip();
    }
  };

  const renderDots = () => (
    <View style={styles.dotsContainer}>
      {onboardingSlides.map((_, index: number) => (
        <TouchableOpacity key={index} onPress={() => setCurrentIndex(index)}>
          <View
            style={[
              styles.dot,
              {
                backgroundColor: index === currentIndex ? '#fb2c36' : '#E0E0E0',
                width: index === currentIndex ? 50 : 50,
              },
            ]}
          />
        </TouchableOpacity>
      ))}
    </View>
  );

  const item = onboardingSlides.find(
    (slide) => Number(slide.id) === currentIndex + 1
  );

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: item?.backgroundColor }]}
    >
      {/* Skip Button */}
      {currentIndex < onboardingSlides.length - 1 && (
        <TouchableOpacity onPress={handleSkip} style={styles.skipButton}>
          <Text className="text-md text-secondary-600">Skip</Text>
        </TouchableOpacity>
      )}

      {/* Slides */}
      {item && (
        <View style={[styles.slide]}>
          <View style={styles.imageContainer}>
            <Image
              source={item?.image}
              style={styles?.image}
              resizeMode="contain"
            />
          </View>
          <View style={styles.textContainer}>
            <Text className="text-3xl font-bold text-center">
              {item?.title}
            </Text>
            <Text style={styles.description}>{item?.description}</Text>
          </View>
        </View>
      )}

      {/* Bottom Section */}
      <View style={styles.bottomSection}>
        {/* Dots Indicator */}
        {renderDots()}

        {/* Navigation Buttons */}
        <View style={styles.buttonContainer}>
          {currentIndex === onboardingSlides.length - 1 ? (
            <TouchableOpacity
              className="bg-primary-400 px-20 py-6 rounded"
              onPress={handleNext}
            >
              <Text className="text-white font-semibold">Get Started</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              className="bg-primary-400 px-28 py-6 rounded"
              onPress={handleNext}
            >
              <Text className="text-white font-semibold">Next</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  skipButton: {
    position: 'absolute',
    top: 50,
    right: 20,
    zIndex: 1,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  slide: {
    width,
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 80,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 40,
  },
  image: {
    width: width * 0.8,
    height: height * 0.5,
  },
  textContainer: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
    color: '#1a1a1a',
    lineHeight: 34,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666666',
    lineHeight: 24,
    paddingHorizontal: 10,
  },
  bottomSection: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
  dot: {
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  buttonContainer: {
    alignItems: 'center',
  },
  nextButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 16,
    paddingHorizontal: 60,
    borderRadius: 12,
    minWidth: 200,
    alignItems: 'center',
  },
  nextText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  getStartedButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 16,
    paddingHorizontal: 60,
    borderRadius: 12,
    minWidth: 200,
    alignItems: 'center',
  },
  getStartedText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  prevButton: {
    position: 'absolute',
    left: 20,
    top: 50,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  prevText: {
    color: '#007AFF',
    fontSize: 16,
    fontWeight: '500',
  },
});
