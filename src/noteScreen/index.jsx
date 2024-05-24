import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import 'nativewind/types.d';

const NoteScreen = () => {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1);
    };

    return (
        <>
            <View className="flex-1 px-4  items-center justify-center bg-gray-900">
                <View className="p-12 rounded-lg bg-gray-800 shadow-lg shadow-gray-400">
                    <Text className="text-white text-3xl mb-5">
                        Hello World
                    </Text>
                    <Text className="text-white text-lg mb-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente excepturi veniam minima nisi et cumque perferendis harum! Repudiandae aperiam voluptatem odit aut voluptatum architecto, laborum temporibus explicabo alias at rem natus, amet nam sint maxime deleniti adipisci pariatur, assumenda neque.
                    </Text>
                    <Text className="text-white text-2xl mb-5">
                        Count: {count}
                    </Text>
                    <TouchableOpacity
                        onPress={handleIncrement}
                        className="bg-primary p-3 rounded-lg"
                    >
                        <Text className="text-white text-xl">
                            Increment
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    );
};

export default NoteScreen;
