import { useNavigationContainerRef, useNavigation } from 'expo-router';
import { StackActions } from '@react-navigation/native';

const useGoToHomePage = () => {
    const rootNavigation = useNavigationContainerRef();
    const navigation = useNavigation();

    const firstMethod = () => {
        rootNavigation.dispatch(StackActions.popToTop());
        rootNavigation.dispatch(StackActions.replace('(auth)'));
    };

    const secondMethod = () => {
        navigation.reset({
            index: 0,
            // @ts-expect-error weird ts error
            routes: [{ name: '(auth)' }],
        });
    };

    return secondMethod;
};
export default useGoToHomePage;
