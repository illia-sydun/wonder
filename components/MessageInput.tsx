import { TextInput, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';
import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import colors from 'tailwindcss/colors';
import Animated, {
    Extrapolation,
    interpolate,
    useAnimatedStyle,
    useSharedValue,
    withTiming,
} from 'react-native-reanimated';
import { BlurView } from 'expo-blur';

type Props = {
    onSetMessage: (message: string) => void;
};

export default function MessageInput({ onSetMessage }: Props) {
    const [message, setMessage] = useState('');
    const expandedButtonsState = useSharedValue(0);

    const setExpandedButtonsState = (state: boolean) => {
        expandedButtonsState.value = withTiming(state ? 1 : 0, {
            duration: 400,
        });
    };

    const onChangeText = (text: string) => {
        setExpandedButtonsState(false);
        setMessage(text);
    };

    const expandedButtonsStyle = useAnimatedStyle(() => ({
        opacity: interpolate(
            expandedButtonsState.value,
            [0, 1],
            [0, 1],
            Extrapolation.CLAMP,
        ),
        gap: interpolate(
            expandedButtonsState.value,
            [0, 0.1],
            [0, 14],
            Extrapolation.CLAMP,
        ),
        width: `${interpolate(expandedButtonsState.value, [0, 1], [0, 100], Extrapolation.CLAMP)}%`,
    }));

    const shrinkedButtonsStyle = useAnimatedStyle(() => ({
        opacity: interpolate(
            expandedButtonsState.value,
            [0, 0.5],
            [1, 0],
            Extrapolation.CLAMP,
        ),
        width: `${interpolate(
            expandedButtonsState.value,
            [0, 1],
            [100, 0],
            Extrapolation.CLAMP,
        )}%`,
    }));

    return (
        <BlurView intensity={90} tint='extraLight'>
            <View className='flex-row items-center justify-center py-3 px-4'>
                <View>
                    <Animated.View style={shrinkedButtonsStyle}>
                        <TouchableOpacity
                            onPress={() => setExpandedButtonsState(true)}
                            className='rounded-2xl'
                        >
                            <Ionicons
                                name='add'
                                size={26}
                                color={colors.stone['900']}
                            />
                        </TouchableOpacity>
                    </Animated.View>
                </View>
                <View>
                    <Animated.View
                        className='flex-row'
                        style={expandedButtonsStyle}
                    >
                        <TouchableOpacity
                            onPress={() => setExpandedButtonsState(false)}
                        >
                            <Ionicons
                                name='camera-outline'
                                size={24}
                                color={colors.stone['900']}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => setExpandedButtonsState(false)}
                        >
                            <Ionicons
                                name='image-outline'
                                size={24}
                                color={colors.stone['900']}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => setExpandedButtonsState(false)}
                        >
                            <Ionicons
                                name='folder-outline'
                                size={24}
                                color={colors.stone['900']}
                            />
                        </TouchableOpacity>
                    </Animated.View>
                </View>
                <TextInput
                    autoFocus
                    className='flex-1 border-stone-100 border bg-white rounded-2xl px-4 py-1.5 mx-4'
                    placeholder='Message'
                    value={message}
                    onChangeText={onChangeText}
                    onFocus={() => setExpandedButtonsState(false)}
                    multiline
                />
                <TouchableOpacity>
                    {message.length > 0 ? (
                        <Ionicons
                            name='arrow-up-circle'
                            size={24}
                            color={colors.stone['900']}
                        />
                    ) : (
                        <FontAwesome5
                            name='headphones'
                            size={24}
                            color={colors.stone['900']}
                        />
                    )}
                </TouchableOpacity>
            </View>
        </BlurView>
    );
}
