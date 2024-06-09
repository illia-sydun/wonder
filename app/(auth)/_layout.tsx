import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import colors from 'tailwindcss/colors';

const tabBarIcon = (name: keyof typeof Ionicons.glyphMap) =>
    function TabBarIcon() {
        return <Ionicons name={name} size={24} color={colors.stone['900']} />;
    };

function RootNavigation() {
    return (
        <Tabs
            screenOptions={{
                // tabBarActiveTintColor: colors.stone['600'],
                // tabBarInactiveTintColor: colors.stone['400'],
                tabBarLabelStyle: {
                    fontWeight: '600',
                },
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
