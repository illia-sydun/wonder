import { Text, View } from 'react-native';
import LottieView from 'lottie-react-native';

import { useRouter } from 'expo-router';
import { useHeaderHeight } from '@react-navigation/elements';
import RoundButton from '@/components/RoundButton';

export default function Page() {
    const headerHeight = useHeaderHeight();
    const router = useRouter();

    return (
        <View
            className='flex-1 items-center justify-around bg-purple-100 pb-16'
            style={{ paddingTop: headerHeight * 1.15 }}
        >
            <Text className='text-center text-5xl font-bold color-purple-500 px-8'>
                Have you ever wondered?
            </Text>
            <View className='flex-1 w-full'>
                <LottieView
                    source={require('../../assets/animations/floating-with-ideas.json')}
                    autoPlay
                    style={{ flex: 1 }}
                    loop
                    speed={1.5}
                />
            </View>
            <RoundButton
                title='Continue'
                onPress={() => router.navigate('(onboarding)/second')}
                buttonClassName='bg-purple-500'
                titleClassName='color-purple-50'
            />
        </View>
    );
}
