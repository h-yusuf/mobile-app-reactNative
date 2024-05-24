import React from 'react';
import { ScrollView, View } from 'react-native';
import CardDefault from '../components/Card';

const HomeScreen = () => {
    return (
        <ScrollView>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#1F2937', paddingVertical: 20 }}>
                <CardDefault />
                <CardDefault />
                <CardDefault />
                <CardDefault />
                {/* <View style={{ padding: 20, borderRadius: 10, backgroundColor: '#374151', shadowColor: '#1F2937', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.5, shadowRadius: 4, elevation: 5 }}> */}
                {/*     <Text style={{ fontSize: 24, color: '#E5E7EB', marginBottom: 20 }}>Hello World</Text> */}
                {/* </View> */}
            </View>
        </ScrollView>
    );
};

export default HomeScreen;
