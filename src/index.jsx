import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from './home';
import TimeScreen from './timeScreen';
import NoteScreen from './noteScreen';
import ProfileScreen from './profileScreen';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ color, size }) => {
                        let iconName;

                        if (route.name === 'Home') {
                            iconName = 'home-outline';
                        } else if (route.name === 'Time') {
                            iconName = 'time-outline';
                        } else if (route.name === 'Note') {
                            iconName = 'create-outline';
                        } else if (route.name === 'Profile') {
                            iconName = 'person-outline';
                        }

                        return <Icon name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: 'white',
                    tabBarInactiveTintColor: 'gray',
                    tabBarStyle: {
                        backgroundColor: '#1f2937', // Tailwind 'bg-gray-900'
                        borderTopColor: 'transparent',
                        height: 60,
                        paddingBottom: 10,
                        paddingTop: 10,
                    },
                    headerTitleAlign: 'center',
                    headerStyle:{
                        backgroundColor:'#1f2937',
                        height:30,
                    }
                })}
            >
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Time" component={TimeScreen} />
                <Tab.Screen name="Note" component={NoteScreen} />
                <Tab.Screen name="Profile" component={ProfileScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default BottomTabNavigator;
