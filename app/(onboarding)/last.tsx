import { View } from 'react-native';
import LottieView from 'lottie-react-native';
import Animated, { runOnJS, ZoomIn } from 'react-native-reanimated';
import useGoToHomePage from '@/hooks/useGoToHomePage';

export default function Page() {
    const goToHomePage = useGoToHomePage();
    return (
        <View className='flex-1'>
            <View className='absolute flex-1 justify-center h-full w-full z-0'>
                <LottieView
                    resizeMode='cover'
                    source={require('../../assets/animations/hypnosis.json')}
                    autoPlay
                    style={{
                        flex: 1,
                    }}
                    loop
                    speed={0.4}
                />
            </View>

            <View className='flex-1 justify-center items-center'>
                <Animated.View
                    className='h-[135%] w-auto bg-white rounded-full aspect-square z-1'
                    entering={ZoomIn.duration(1200).withCallback(() =>
                        runOnJS(goToHomePage)(),
                    )}
                />
            </View>
        </View>
    );
}
