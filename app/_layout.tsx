import { SplashScreen, Stack } from 'expo-router';

import '../translations/i18next';
import '../global.css';
import '../env.ts';

import { useFonts } from 'expo-font';
import { useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';

SplashScreen.preventAutoHideAsync();

function RootNavigation() {
    const [loaded, error] = useFonts({
        SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    });

    useEffect(() => {
        if (error) throw error;
    }, [error]);

    useEffect(() => {
        if (loaded) {
            SplashScreen.hideAsync();
        }
    }, [loaded]);

    if (!loaded) {
        return (
            <View className='flex-1 justify-center items-center'>
                <ActivityIndicator />
            </View>
        );
    }

    return (
        <Stack
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name='index' />
            <Stack.Screen name='(onboarding)' />
            <Stack.Screen
                name='(auth)'
                options={{
                    animation: 'fade',
                }}
            />
        </Stack>
    );
}

export default function RootLayout() {
    return <RootNavigation />;
}
