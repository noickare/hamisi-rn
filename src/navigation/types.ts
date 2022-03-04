import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

export type RootStackParamList = {
  Main: undefined;
  Auth: undefined;
};

export type AuthParamList = {
  SignIn: undefined;
  Register: undefined;
};

export type AuthNavProps<T extends keyof AuthParamList> = {
  navigation: StackNavigationProp<AuthParamList, T>;
  route: RouteProp<AuthParamList, T>;
};

export type StreamParamList = {
  Stream: {
    name: string;
  };
  EditStream: {
    name: string;
    submit?: React.MutableRefObject<() => void>;
  };
};

export type HomeParamList = {
  Home: undefined;
} & StreamParamList;

export type HomeStackNavProps<T extends keyof HomeParamList> = {
  navigation: StackNavigationProp<HomeParamList, T>;
  route: RouteProp<HomeParamList, T>;
};
