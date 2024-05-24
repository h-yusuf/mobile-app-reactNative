import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import 'nativewind/types.d';
import moment from 'moment-timezone';

const locations = [
    { label: 'New York', value: 'America/New_York' },
    { label: 'London', value: 'Europe/London' },
    { label: 'Tokyo', value: 'Asia/Tokyo' },
    { label: 'Sydney', value: 'Australia/Sydney' },
    { label: 'Local Time', value: 'local' },
];

const TimeScreen = () => {
    const [currentTime, setCurrentTime] = useState(moment());
    const [timezone, setTimezone] = useState('local');

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(moment());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formattedTime = timezone === 'local' ? currentTime.format('HH:mm:ss') : currentTime.tz(timezone).format('HH:mm:ss');
    const formattedDate = timezone === 'local' ? currentTime.format('LL') : currentTime.tz(timezone).format('LL');

    return (
        <View className="flex-1 items-center justify-center bg-gray-900">
            <View className="flex">
                <Text className="text-white text-3xl font-bold mb-4">Current Time</Text>
                <Text className="text-white text-7xl font-bold mb-2">{formattedTime}</Text>
                <Text className="text-white text-2xl mb-8">{formattedDate}</Text>
                <View style={{ width: '80%', marginBottom: 20 }}>
                    <RNPickerSelect
                        onValueChange={(value) => setTimezone(value)}
                        items={locations}
                        placeholder={{ label: "Select a location", value: null }}
                        style={{
                            inputAndroid: {
                                fontSize: 18,
                                width: 300,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                paddingVertical: 12,
                                paddingHorizontal: 10,
                                borderWidth: 1,
                                borderColor: 'gray',
                                borderRadius: 4,
                                color: 'white',
                                paddingRight: 30,
                                backgroundColor: '#374151',
                            },
                            placeholder: {
                                color: 'gray',
                            },
                        }}
                    />
                </View>
            </View>
        </View>
    );
};

export default TimeScreen;
