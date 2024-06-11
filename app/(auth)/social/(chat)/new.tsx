import { Image, KeyboardAvoidingView, Platform, View } from 'react-native';
import MessageInput from '@/components/MessageInput';
import MessageIdeas from '@/components/MessageIdeas';
import Message from '@/types/Message';
import Role from '@/types/Role';
import { useState } from 'react';
import { FlashList } from '@shopify/flash-list';
import ChatMessage from '@/components/ChatMessage';
import Animated, {
    useAnimatedStyle,
    useSharedValue,
} from 'react-native-reanimated';

const dummyMessages: Message[] = [
    {
        role: Role.Bot,
        content: 'Hello! How are you today?',
        imageUrl: 'https://galaxies.dev/img/meerkat_2.jpg',
        prompt: '',
    },
    {
        role: Role.User,
        content: 'Hi! I’m doing well, thank you. How about you?',
        imageUrl: 'https://galaxies.dev/img/meerkat_2.jpg',
        prompt: '',
    },
    {
        role: Role.Bot,
        content: 'I’m doing fine, thanks for asking.',
        imageUrl: 'https://galaxies.dev/img/meerkat_2.jpg',
        prompt: '',
    },
    {
        role: Role.Bot,
        content: 'What have you been up to lately?',
        imageUrl: 'https://galaxies.dev/img/meerkat_2.jpg',
        prompt: '',
    },
    {
        role: Role.User,
        content:
            'Not much, just enjoying some free time and catching up on my reading.',
        imageUrl: 'https://galaxies.dev/img/meerkat_2.jpg',
        prompt: '',
    },
    {
        role: Role.Bot,
        content: 'That sounds relaxing! What book are you currently reading?',
        imageUrl: 'https://galaxies.dev/img/meerkat_2.jpg',
        prompt: '',
    },
    {
        role: Role.User,
        content:
            'I’m reading "The Great Gatsby" by F. Scott Fitzgerald. It’s a classic!',
        imageUrl: 'https://galaxies.dev/img/meerkat_2.jpg',
        prompt: '',
    },
    {
        role: Role.Bot,
        content: 'Oh, I love that book! It’s such a timeless story.',
        imageUrl: 'https://galaxies.dev/img/meerkat_2.jpg',
        prompt: '',
    },
    {
        role: Role.Bot,
        content: 'What do you enjoy most about it?',
        imageUrl: 'https://galaxies.dev/img/meerkat_2.jpg',
        prompt: '',
    },
    {
        role: Role.User,
        content:
            'I love the vivid descriptions of the Jazz Age and the complex characters. It really brings the era to life.',
        imageUrl: 'https://galaxies.dev/img/meerkat_2.jpg',
        prompt: '',
    },
    {
        role: Role.Bot,
        content: 'Absolutely, Fitzgerald’s writing is truly captivating.',
        imageUrl: 'https://galaxies.dev/img/meerkat_2.jpg',
        prompt: '',
    },
    {
        role: Role.Bot,
        content: 'Well, it was nice chatting with you!',
        imageUrl: 'https://galaxies.dev/img/meerkat_2.jpg',
        prompt: '',
    },
    {
        role: Role.User,
        content: 'Likewise! Have a great day!',
        imageUrl: 'https://galaxies.dev/img/meerkat_2.jpg',
        prompt: '',
    },
];
export default function Page() {
    const [messages, setMessages] = useState<Message[]>([]);
    const messageInputHeight = useSharedValue(0);

    const style = useAnimatedStyle(() => ({
        marginTop: messageInputHeight.value,
    }));

    return (
        <View className='flex-1 bg-stone-50'>
            {messages.length === 0 ? (
                <Animated.View
                    className='flex-1 justify-center items-center'
                    style={style}
                >
                    <View className='h-14 w-14 bg-black p-3.5 rounded-full'>
                        <Image
                            className='!h-full !w-full object-contain'
                            source={require('@/assets/images/logo-white.png')}
                        />
                    </View>
                </Animated.View>
            ) : (
                <FlashList
                    bounces={false}
                    data={messages}
                    renderItem={({ item }) => <ChatMessage {...item} />}
                    estimatedItemSize={100}
                    contentContainerClassName='pt-3 pb-16'
                    keyboardDismissMode='on-drag'
                />
            )}
            <KeyboardAvoidingView
                keyboardVerticalOffset={Platform.select({
                    ios: 100,
                    android: 0,
                })}
                className={
                    messages.length > 0
                        ? 'absolute bottom-0 left-0 w-full '
                        : ''
                }
                behavior={Platform.select({
                    ios: 'padding',
                    android: 'height',
                })}
            >
                {messages.length === 0 && (
                    <MessageIdeas onSelectIdea={() => console.log('m')} />
                )}
                <View
                    onLayout={(e) => {
                        messageInputHeight.value = e.nativeEvent.layout.height;
                    }}
                >
                    <MessageInput onSetMessage={() => console.log('m')} />
                </View>
            </KeyboardAvoidingView>
        </View>
    );
}
