import { schedules } from '@/src/constants/schedule';
import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import {
  CheckCircle2,
  CircleX,
  Droplet,
  Pill,
  Syringe,
  Tablets,
} from 'lucide-react-native';
import React, { useState } from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const timeSlots = ['All day', 'Morning', 'Afternoon', 'Night'];

const HomeScreen = () => {
  const [selected, setSelected] = useState('All day');

  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1 px-4">
        <View className="flex-1">
          {/* header */}
          <View className=" flex-row items-center justify-between w-full py-2 ">
            <TouchableOpacity>
              {/* <FontAwesome5 name={'user'} size={24} className="bg-secondary-200 p-2 rounded-full"/> */}
              <Image
                source={require('../../../assets/images/user/user.jpg')}
                className="size-12 rounded-full"
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Ionicons
                name={'notifications-outline'}
                size={24}
                className="bg-secondary-200 p-2 rounded-full"
              />
            </TouchableOpacity>
          </View>

          {/* calendar */}
          <View className="h-36 bg-secondary-200 w-full rounded-lg my-4 flex items-center justify-center">
            <Text className="text-center">Coming weekly calendar</Text>
          </View>

          {/* Tabs */}
          <View className="flex-row items-center justify-between my-2">
            {timeSlots.map((slot, index) => {
              const isSelected = selected === slot;
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => setSelected(slot)}
                  className={`${isSelected ? 'bg-primary-300' : 'bg-secondary-200'} rounded-full px-4 py-1`}
                >
                  <Text
                    className={`${isSelected ? 'text-white' : 'text-black'}`}
                  >
                    {slot}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>

          {/* Schedule list */}
          <FlatList
            data={schedules}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            renderItem={({ item, index }) => (
              <TouchableOpacity
                className={`flex-row justify-between gap-4 my-1 items-center ${index % 2 === 0 ? 'text-black bg-secondary-200' : 'bg-primary-200 text-white'} rounded-lg p-4 w-full`}
              >
                <View>
                  {item.form === 'Syrup' ? (
                    <Image
                      source={require('../../../assets/images/icons/cough-syrup.png')}
                      className="size-[45px] -ms-2"
                      resizeMode="contain"
                    />
                  ) : item.form === 'Tablet' ? (
                    <Tablets size={24} />
                  ) : item.form === 'Capsule' ? (
                    <FontAwesome5 name="capsules" size={24} />
                  ) : item.form === 'Drop' ? (
                    <Droplet />
                  ) : item.form === 'Injection' ? (
                    <Syringe size={24} />
                  ) : (
                    <Pill size={24} />
                  )}
                </View>
                <View>
                  <Text className="text-lg font-semibold">{item.name}</Text>
                  <View className="flex-row items-center justify-between gap-2">
                    <Text className="text-sm text-gray-600">{item.time}</Text>
                    <Text className="text-sm text-gray-600">
                      {item.amount} {item.form}
                    </Text>
                    <Text className="text-sm text-gray-600">
                      {item.medicineTime}
                    </Text>
                  </View>
                </View>
                <View>
                  {item.action === 'Take' ? (
                    <CheckCircle2 size={24} color={'green'} />
                  ) : (
                    <CircleX size={24} color={'green'} />
                  )}
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default HomeScreen;
