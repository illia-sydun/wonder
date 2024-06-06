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
            className='flex-1 items-center justify-around bg-amber-100 pb-16'
            style={{ paddingTop: headerHeight * 1.15 }}
        >
            <Text className='text-center text-5xl font-bold color-amber-500 px-8'>
                By focusing on what's truly important?
            </Text>
            <View className='flex-1 w-full'>
                <LottieView
                    source={require('../../assets/animations/medidating.json')}
                    autoPlay
                    style={{ flex: 1 }}
                    loop
                    speed={0.8}
                />
            </View>
            <RoundButton
                title='Continue'
                onPress={() => {
                    router.navigate('(onboarding)/fourth');
                }}
                buttonClassName='bg-amber-500'
                titleClassName='color-amber-50'
            />
        </View>
    );
}
