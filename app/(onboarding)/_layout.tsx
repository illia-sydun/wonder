import { Stack } from 'expo-router';
import colors from 'tailwindcss/colors';
import HeaderBackButton from '@/components/HeaderBackButton';

const headerLeft = (color: string) =>
    function HeaderLeft() {
        return <HeaderBackButton color={color} />;
    };

export default function Layout() {
    return (
        <Stack
            screenOptions={{
                headerTransparent: true,
                title: '',
            }}
        >
            <Stack.Screen name='index' />
            <Stack.Screen
                name='second'
                options={{
                    headerLeft: headerLeft(colors.green['500']),
                }}
            />
            <Stack.Screen
                name='third'
                options={{
                    headerLeft: headerLeft(colors.amber['500']),
                }}
            />
            <Stack.Screen
                name='fourth'
                options={{
                    headerLeft: headerLeft(colors.sky['500']),
                }}
            />
            <Stack.Screen
                name='fifth'
                options={{
                    headerLeft: headerLeft(colors.red['500']),
                }}
            />
            <Stack.Screen
                name='last'
                options={{
                    headerShown: false,
                    animation: 'none',
                }}
            />
        </Stack>
    );
}
