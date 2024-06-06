import { Text, View } from 'react-native';
import LottieView from 'lottie-react-native';
import { useHeaderHeight } from '@react-navigation/elements';
import RoundButton from '@/components/RoundButton';
import { useRouter } from 'expo-router';

export default function Page() {
    const headerHeight = useHeaderHeight();
    const router = useRouter();

    return (
        <View
            className='flex-1 items-center justify-around bg-sky-100 pb-16'
            style={{ paddingTop: headerHeight * 1.15 }}
        >
            <Text className='text-center text-5xl font-bold color-sky-500 px-8'>
                Let us show you how it works
            </Text>
            <View className='flex-1 w-full'>
                <LottieView
                    source={require('../../assets/animations/teaching.json')}
                    autoPlay
                    style={{ flex: 1 }}
                    loop
                    speed={0.8}
                />
            </View>
            <RoundButton
                title='Begin your journey'
                onPress={() => router.navigate('(onboarding)/fifth')}
                buttonClassName='bg-sky-500'
                titleClassName='color-sky-50'
            />
        </View>
    );
}
