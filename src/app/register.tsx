/* eslint-disable react/no-unescaped-entities */
import Icon from '@react-native-vector-icons/fontawesome';
import { Link } from 'expo-router';
import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function Register() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [confirmPass, setConfirmPass] = useState('');

  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1">
        <View className="bg-primary-500/50 flex-1 justify-center px-8">
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            className="bg-white rounded-xl p-6 shadow-md"
          >
            <Text className="text-center text-3xl font-bold mb-2">
              Register an account
            </Text>
            <Text className="text-center text-sm text-gray-600 mb-6">
              If you're new here? register
            </Text>

            <View className="mb-4">
              <Text className="text-base font-medium mb-1">Name</Text>
              <TextInput
                value={name}
                onChangeText={setName}
                placeholder="Type your name"
                className="border border-gray-300 rounded px-4 py-2"
                keyboardType="default"
              />
            </View>
            <View className="mb-4">
              <Text className="text-base font-medium mb-1">Email</Text>
              <TextInput
                value={email}
                onChangeText={setEmail}
                placeholder="Type your email"
                className="border border-gray-300 rounded px-4 py-2"
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>

            <View className="mb-6">
              <Text className="text-base font-medium mb-1">Password</Text>
              <TextInput
                value={password}
                onChangeText={setPassword}
                placeholder="Type your password"
                className="border border-gray-300 rounded px-4 py-2"
                secureTextEntry
              />
            </View>
            <View className="mb-6">
              <Text className="text-base font-medium mb-1">
                Confirm Password
              </Text>
              <TextInput
                value={confirmPass}
                onChangeText={setConfirmPass}
                placeholder="re-type your password"
                className="border border-gray-300 rounded px-4 py-2"
                secureTextEntry
              />
            </View>

            <TouchableOpacity className="bg-primary-600 py-3 rounded-full mb-4">
              <Text className="text-center text-white font-semibold">
                Register
              </Text>
            </TouchableOpacity>

            <Text className="text-center text-gray-500 mb-4">
              Already have your account?{' '}
              <Link href={'/login'} className="underline text-blue-500">
                login
              </Link>
            </Text>
            <Text className="text-center text-gray-500 mb-4">
              Or continue with
            </Text>

            <View className="flex-row justify-center space-x-6 gap-5">
              <TouchableOpacity className="items-center">
                <Icon name="google" size={28} color="#000" />
                <Text className="text-sm mt-1">Google</Text>
              </TouchableOpacity>
              <TouchableOpacity className="items-center">
                <Icon name="facebook" size={28} color="#3b5998" />
                <Text className="text-sm mt-1">Facebook</Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
