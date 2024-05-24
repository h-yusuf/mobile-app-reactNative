import React from 'react';
import { View, Text, Image } from 'react-native';

const ProfileScreen = () => {
    return (
        <View className='bg-gray-900' style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <View style={{ width: '80%', backgroundColor: '#ffffff', borderRadius: 10, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 4, elevation: 5, padding: 20 }}>
                <View style={{ height: 200, overflow: 'hidden', borderRadius: 10 }}>
                    <Image source={{ uri: 'https://images.unsplash.com/photo-1605379399642-870262d3d051?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80' }} style={{ flex: 1 }} />
                </View>
                <View style={{ alignItems: 'center', marginTop: -100 }}>
                    <Image source={{ uri: 'https://media.licdn.com/dms/image/D5603AQGKVcT-hpyl9w/profile-displayphoto-shrink_200_200/0/1705574428516?e=2147483647&v=beta&t=-HjtV7yStCgnPbdmCYZRZKFWzpbmU5Kk_IszDDYwP1s' }} style={{ width: 100, height: 100, borderRadius: 50, backgroundColor: '#ffffff', padding: 2 }} />
                </View>
                <View style={{ alignItems: 'center', marginHorizontal: 20 }}>
                    <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#374151' }}>Yusuf Al-faruq</Text>
                    <Text style={{ color: '#9CA3AF', marginVertical: 5 }}>@h-yusuf</Text>
                    <Text style={{ color: '#6B7280' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</Text>
                </View>
                <View style={{ flexDirection: 'row', backgroundColor: '#F9FAFB', borderRadius: 10, marginTop: 20 }}>
                    <View style={{ flex: 1, alignItems: 'center', paddingVertical: 20 }}>
                        <Text style={{ fontWeight: 'bold', color: '#374151' }}>2.5k</Text>
                        <Text style={{ color: '#6B7280' }}>Followers</Text>
                    </View>
                    <View style={{ borderLeftWidth: 1, borderColor: '#E5E7EB', height: '100%' }}></View>
                    <View style={{ flex: 1, alignItems: 'center', paddingVertical: 20 }}>
                        <Text style={{ fontWeight: 'bold', color: '#374151' }}>2.0k</Text>
                        <Text style={{ color: '#6B7280' }}>Following</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default ProfileScreen;
