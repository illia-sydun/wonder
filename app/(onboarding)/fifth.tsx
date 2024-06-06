import { Text, View } from 'react-native';
import LottieView from 'lottie-react-native';
import { useHeaderHeight } from '@react-navigation/elements';
import RoundButton from '@/components/RoundButton';
import { useRouter } from 'expo-router';
import * as LocalAuthentication from 'expo-local-authentication';
import * as Haptics from 'expo-haptics';

export default function Page() {
    const headerHeight = useHeaderHeight();
    const router = useRouter();

    const onBiometricAuthPress = async () => {
        const { success } = await LocalAuthentication.authenticateAsync({
            promptMessage: `Keep your secrets to yourself`,
            biometricsSecurityLevel: 'strong',
        });
        if (success) {
            router.navigate('(onboarding)/last');
        } else {
            Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
        }
    };

    return (
        <View
            className='flex-1 items-center justify-around bg-red-100 pb-16'
            style={{ paddingTop: headerHeight * 1.15 }}
        >
            <Text className='text-center text-5xl font-bold color-red-500 px-8'>
                But first. To keep your secrets in secret...
            </Text>
            <View className='flex-1 w-full'>
                <LottieView
                    source={require('../../assets/animations/secrets.json')}
                    autoPlay
                    style={{ flex: 1 }}
                    loop={false}
                    speed={0.8}
                />
            </View>
            <RoundButton
                title='Verify yourself'
                onPress={onBiometricAuthPress}
                buttonClassName='bg-red-500'
                titleClassName='color-red-50'
            />
        </View>
    );
}
