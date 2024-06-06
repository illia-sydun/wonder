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
            className='flex-1 items-center justify-around bg-green-100 pb-16'
            style={{ paddingTop: headerHeight * 1.15 }}
        >
            <Text className='text-center text-5xl font-bold color-green-500 px-8'>
                What can you really achieve
            </Text>
            <View className='flex-1 w-full'>
                <LottieView
                    source={require('../../assets/animations/floating-with-screens.json')}
                    autoPlay
                    style={{ flex: 1 }}
                    loop
                    speed={1.5}
                />
            </View>
            <RoundButton
                title='Continue'
                onPress={() => router.navigate('(onboarding)/third')}
                buttonClassName='bg-green-500'
                titleClassName='color-green-50'
            />
        </View>
    );
}
