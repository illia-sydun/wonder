import { Text, TouchableOpacity } from 'react-native';

type Props = {
    title: string;
    onPress?: () => void;
    buttonClassName?: string;
    titleClassName?: string;
};

export default function RoundButton({
    title,
    onPress,
    titleClassName,
    buttonClassName,
}: Props) {
    return (
        <TouchableOpacity
            className={`rounded-3xl py-3.5 w-3/4 ${buttonClassName}`}
            onPress={onPress}
        >
            <Text className={`text-center text-xl font-bold ${titleClassName}`}>
                {title}
            </Text>
        </TouchableOpacity>
    );
}
