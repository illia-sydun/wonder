import { Image, Text, View } from 'react-native';
import Message from '@/types/Message';
import Role from '@/types/Role';

export default function ChatMessage({ content, role, imageUrl }: Message) {
    return (
        <View className='flex-row py-4 px-5 gap-5 items-start'>
            <View className='h-8 w-8 rounded-full overflow-hidden'>
                {role === Role.Bot ? (
                    <View className='flex-1 bg-black p-2'>
                        <Image
                            className='!h-full !w-full object-contain'
                            source={require('@/assets/images/logo-white.png')}
                        />
                    </View>
                ) : (
                    <Image
                        className='!h-full !w-full object-contain'
                        source={{ uri: imageUrl }}
                    />
                )}
            </View>
            <View className='flex-1 self-center gap-0.5'>
                <Text className='font-semibold text- text-stone-700'>
                    {role === Role.Bot ? 'ChatGPT' : 'Illia Sydun'}
                </Text>
                <Text className='text-stone-900 text'>{content}</Text>
            </View>
        </View>
    );
}
