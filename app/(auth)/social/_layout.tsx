import { Drawer } from 'expo-router/drawer';
import {
    Image,
    Text,
    TextInput,
    TouchableOpacity,
    useWindowDimensions,
    View,
} from 'react-native';
import { FontAwesome6, Ionicons } from '@expo/vector-icons';
import colors from 'tailwindcss/colors';
import { Link, useNavigation } from 'expo-router';
import { DrawerActions } from '@react-navigation/native';
import {
    DrawerContentComponentProps,
    DrawerContentScrollView,
    DrawerItem,
} from '@react-navigation/drawer';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

function CustomDrawerContentHeader() {
    return (
        <View className='flex-row justify-center items-center p-3 gap-2 rounded-3xl bg-stone-100'>
            <Ionicons name='search' size={18} color={colors.stone['400']} />
            <TextInput
                className='flex-1 font-medium'
                placeholder='Search'
                underlineColorAndroid='transparent'
                placeholderTextColor={colors.stone['400']}
            />
        </View>
    );
}

function CustomDrawerContentFooter() {
    return (
        <View className='flex-row items-center align-bottom gap-5'>
            <View className='h-10 w-10 rounded-xl overflow-hidden'>
                <Image
                    className='!h-full !w-full object-contain'
                    source={{ uri: 'https://galaxies.dev/img/meerkat_2.jpg' }}
                />
            </View>
            <Text className='flex-1 font-bold text-lg color-stone-900'>
                Illia Sydun
            </Text>
            <Link href='(onboarding)' asChild>
                <TouchableOpacity>
                    <Ionicons
                        name='ellipsis-horizontal'
                        size={24}
                        color={colors.stone['300']}
                    />
                </TouchableOpacity>
            </Link>
        </View>
    );
}

function CustomDrawerContentBody({
    state,
    navigation,
    descriptors,
}: DrawerContentComponentProps) {
    return (
        <DrawerContentScrollView
            bounces={false}
            contentContainerClassName='!pt-0'
        >
            {state.routes.map((route, index) => {
                const {
                    options: { title, drawerIcon },
                } = descriptors[route.key];

                return (
                    <DrawerItem
                        key={route.key}
                        icon={drawerIcon}
                        label={title!}
                        labelStyle={{
                            marginLeft: -16,
                        }}
                        onPress={() => navigation.jumpTo(route.name)}
                        to={route.name}
                        pressColor={colors.stone['100']}
                        activeBackgroundColor={colors.stone['100']}
                        focused={state.index === index}
                        style={{
                            borderRadius: 12,
                        }}
                    />
                );
            })}
        </DrawerContentScrollView>
    );
}

function CustomDrawerContent({
    state,
    navigation,
    descriptors,
}: DrawerContentComponentProps) {
    const { top } = useSafeAreaInsets();

    return (
        <View className='flex-1 gap-5 p-5 pb-7' style={{ marginTop: top }}>
            <CustomDrawerContentHeader />
            <View className='flex-1 -mx-3'>
                <CustomDrawerContentBody
                    state={state}
                    navigation={navigation}
                    descriptors={descriptors}
                />
            </View>
            <CustomDrawerContentFooter />
        </View>
    );
}
export default function Layout() {
    const navigation = useNavigation();
    const { width } = useWindowDimensions();

    return (
        <>
            <StatusBar translucent style='dark' />
            <Drawer
                drawerContent={CustomDrawerContent}
                screenOptions={{
                    headerStyle: {
                        backgroundColor: colors.stone['50'],
                    },
                    headerTitleAlign: 'center',
                    headerShadowVisible: false,
                    overlayColor: `${colors.stone['400']}80`,
                    swipeEdgeWidth: width / 6,
                    drawerType: 'slide',
                    drawerStyle: {
                        width: '85%',
                    },
                    headerTitleStyle: {
                        color: colors.stone['900'],
                    },
                    headerLeft: () => (
                        <TouchableOpacity
                            hitSlop={10}
                            onPress={() =>
                                navigation.dispatch(DrawerActions.toggleDrawer)
                            }
                        >
                            <FontAwesome6
                                name='grip-lines'
                                size={25}
                                className='px-5'
                            />
                        </TouchableOpacity>
                    ),
                }}
            >
                <Drawer.Screen
                    name='(chat)/new'
                    options={{
                        title: 'ChatGPT',
                        headerRight: () => (
                            <Link href='social/(chat)/new' push asChild>
                                <TouchableOpacity hitSlop={10}>
                                    <FontAwesome6
                                        name='pen-to-square'
                                        size={22}
                                        className='px-5'
                                        color={colors.stone['900']}
                                    />
                                </TouchableOpacity>
                            </Link>
                        ),
                        drawerIcon: () => (
                            <View className='h-8 w-8 p-1.5 bg-black rounded-full m-1.5'>
                                <Image
                                    className='!h-full !w-full object-contain'
                                    source={require('@/assets/images/logo-white.png')}
                                />
                            </View>
                        ),
                    }}
                />
                <Drawer.Screen
                    name='dalle'
                    options={{
                        title: 'DALL·E',
                        drawerIcon: () => (
                            <View className='h-8 w-8 rounded-full overflow-hidden m-1.5'>
                                <Image
                                    className='!h-full !w-full object-contain'
                                    source={require('@/assets/images/dalle.png')}
                                />
                            </View>
                        ),
                    }}
                />
                <Drawer.Screen
                    name='explore'
                    options={{
                        title: 'Explore GPTs',
                        drawerIcon: () => (
                            <View className='h-8 w-8 rounded-full overflow-hidden items-center justify-center m-1.5'>
                                <Ionicons
                                    name='apps-outline'
                                    size={20}
                                    color={colors.black}
                                />
                            </View>
                        ),
                    }}
                />
            </Drawer>
        </>
    );
}
