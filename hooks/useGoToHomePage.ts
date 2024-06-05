import { useNavigationContainerRef, useNavigation } from 'expo-router';
import { StackActions } from '@react-navigation/native';

const useGoToHomePage = () => {
    const rootNavigation = useNavigationContainerRef();
    const navigation = useNavigation();

    const firstMethod = () => {
        rootNavigation.dispatch(StackActions.popToTop());
        rootNavigation.dispatch(StackActions.replace('(home)'));
    };

    const secondMethod = () => {
        navigation.reset({
            index: 0,
            // @ts-expect-error weird ts error
            routes: [{ name: '(home)' }],
        });
    };

    return secondMethod;
};
export default useGoToHomePage;
