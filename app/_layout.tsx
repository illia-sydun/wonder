import { Stack } from 'expo-router';
import colors from 'tailwindcss/colors';
import HeaderBackButton from '@/components/HeaderBackButton';

import '../translations/i18next';
import '../global.css';

const headerLeft = (color: string) =>
    function HeaderLeft() {
        return <HeaderBackButton color={color} />;
    };

function RootNavigation() {
    return (
        <Stack>
            <Stack.Screen
                name='index'
                options={{
                    headerTransparent: true,
                    title: '',
                }}
            />
            <Stack.Screen
                name='(onboarding)/first'
                options={{
                    headerTransparent: true,
                    title: '',
                }}
            />
            <Stack.Screen
                name='(onboarding)/second'
                options={{
                    headerTransparent: true,
                    title: '',
                    headerLeft: headerLeft(colors.green['500']),
                }}
            />
            <Stack.Screen
                name='(onboarding)/third'
                options={{
                    headerTransparent: true,
                    title: '',
                    headerLeft: headerLeft(colors.amber['500']),
                }}
            />
            <Stack.Screen
                name='(onboarding)/fourth'
                options={{
                    headerTransparent: true,
                    title: '',
                    headerLeft: headerLeft(colors.sky['500']),
                }}
            />
            <Stack.Screen
                name='(onboarding)/fifth'
                options={{
                    headerTransparent: true,
                    title: '',
                    headerLeft: headerLeft(colors.red['500']),
                }}
            />
            <Stack.Screen
                name='(onboarding)/last'
                options={{
                    headerShown: false,
                    animation: 'none',
                }}
            />
            <Stack.Screen
                name='(home)'
                options={{
                    headerShown: false,
                    animation: 'fade',
                }}
            />
        </Stack>
    );
}

export default function RootLayout() {
    return <RootNavigation />;
}
