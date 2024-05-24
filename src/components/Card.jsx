import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

const CardDefault = () => {
    return (
        <View className="mt-6 w-full max-w-sm mx-auto">
            <View className="bg-gray-800 h-48">
                <Image
                    source={{ uri: 'https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80' }}
                    className="flex-1"
                    resizeMode="cover"
                />
            </View>
            <View className="p-4">
                <Text className="text-xl text-white font-bold mb-2">
                    UI/UX Review Check
                </Text>
                <Text className="text-white">
                    The place is close to Barceloneta Beach and bus stop just 2 min walk and near to "Naviglio" where you can enjoy the main night life in Barcelona.
                </Text>
            </View>
            <View>
                <TouchableOpacity className="flex items-center justify-center p-2 mt-2 bg-primary rounded-md">
                    <Text className="text-white text-lg">Read More</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default CardDefault;
