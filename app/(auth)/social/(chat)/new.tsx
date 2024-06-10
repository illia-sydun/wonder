import { Image, KeyboardAvoidingView, View } from 'react-native';
import MessageInput from '@/components/MessageInput';
import MessageIdeas from '@/components/MessageIdeas';
import Message from '@/types/Message';
import Role from '@/types/Role';
import { useState } from 'react';
import { FlashList } from '@shopify/flash-list';
import ChatMessage from '@/components/ChatMessage';

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
    const [messages, setMessages] = useState<Message[]>(dummyMessages);

    return (
        <View className='flex-1 bg-stone-50'>
            {messages.length === 0 && (
                <View className=' absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/4 h-16 w-16 bg-black p-3.5 rounded-full'>
                    <Image
                        className='h-full w-full'
                        source={require('@/assets/images/logo-white.png')}
                    />
                </View>
            )}
            <FlashList
                bounces={false}
                data={messages}
                renderItem={({ item }) => <ChatMessage {...item} />}
                estimatedItemSize={300}
                contentContainerClassName='pt-3 pb-16'
                keyboardDismissMode='on-drag'
            />
            <KeyboardAvoidingView
                keyboardVerticalOffset={100}
                className='absolute bottom-0 left-0 w-full'
                behavior='padding'
            >
                {messages.length === 0 && (
                    <MessageIdeas onSelectIdea={() => console.log('m')} />
                )}
                <MessageInput onSetMessage={() => console.log('m')} />
            </KeyboardAvoidingView>
        </View>
    );
}
