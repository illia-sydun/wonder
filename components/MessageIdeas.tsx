import { ScrollView, Text, TouchableOpacity, View } from 'react-native';

const predefinedMessages = [
    { title: 'Explain React Native', text: "like I'm five years old" },
    {
        title: 'Suggest fun activites',
        text: 'for a family visting San Francisco',
    },
    {
        title: 'Recommend a dish',
        text: "to impress a date who's a picky eater",
    },
] as const;

type Props = { onSelectIdea: (message: string) => void };
export default function MessageIdeas({ onSelectIdea }: Props) {
    return (
        <View>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerClassName='px-6 py-4 gap-4'
            >
                {predefinedMessages.map((message) => (
                    <TouchableOpacity
                        key={message.title + message.text}
                        className='px-6 py-2.5 rounded-lg bg-neutral-200'
                        onPress={() =>
                            onSelectIdea(`${message.title} ${message.text}`)
                        }
                    >
                        <Text className='color-zinc-900 font-medium text-lg'>
                            {message.title}
                        </Text>
                        <Text className='color-zinc-700 font-medium text'>
                            {message.text}
                        </Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    );
}
