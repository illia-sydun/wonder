import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import colors from 'tailwindcss/colors';
import useIsKeyboardShown from '@react-navigation/bottom-tabs/src/utils/useIsKeyboardShown';
import { Platform } from 'react-native';

const tabBarIcon = (name: keyof typeof Ionicons.glyphMap) =>
    function TabBarIcon() {
        return <Ionicons name={name} size={24} color={colors.stone['900']} />;
    };

function RootNavigation() {
    const isKeyboardShown = useIsKeyboardShown();

    return (
        <Tabs
            screenOptions={{
                tabBarLabelStyle: {
                    fontWeight: '600',
                },
                tabBarStyle:
                    Platform.OS === 'android' && isKeyboardShown
                        ? {
                              position: 'absolute',
                              zIndex: -1,
                          }
                        : undefined,
            }}
        >
            <Tabs.Screen
                name='index'
                options={{
                    headerTransparent: true,
                    title: '',
                    tabBarLabel: 'Feed',
                    tabBarIcon: tabBarIcon('grid-outline'),
                }}
            />
            <Tabs.Screen
                name='social'
                options={{
                    headerShown: false,
                    tabBarLabel: 'Social',
                    tabBarIcon: tabBarIcon('chatbubbles-outline'),
                }}
            />
        </Tabs>
    );
}

export default function RootLayout() {
    return <RootNavigation />;
}
