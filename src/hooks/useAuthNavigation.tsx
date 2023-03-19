import {useNavigation} from '@react-navigation/native';
import {AuthenticationScreenNavigationProp} from '../components/navigation';

export default function useAuthNavigation(): ReturnType<
  typeof useNavigation<AuthenticationScreenNavigationProp>
> {
  const navigation = useNavigation<AuthenticationScreenNavigationProp>();
  return navigation;
}
