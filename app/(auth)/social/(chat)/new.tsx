import { KeyboardAvoidingView, View } from 'react-native';
import MessageInput from '@/components/MessageInput';

export default function Page() {
    return (
        <View className='flex-1'>
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
