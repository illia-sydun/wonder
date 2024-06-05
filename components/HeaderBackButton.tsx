import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

type Props = {
    color: string;
};
export default function HeaderBackButton({ color }: Props) {
    const router = useRouter();

    return (
        <TouchableOpacity onPress={router.back}>
            <Ionicons name='arrow-back-outline' size={32} color={color} />
        </TouchableOpacity>
    );
}
