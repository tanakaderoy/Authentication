import React, {useCallback} from 'react';
import {Platform} from 'react-native';
import SocialButton from './SocialButton';

type Props = {};

const SocialSignInButtons = ({}: Props) => {
  const onSigninWithFacebook = useCallback(() => {
    console.warn('facebook sign in');
  }, []);
  const onSignInWithGoogle = useCallback(() => {
    console.warn('google sign in');
  }, []);
  const onSignInWithApple = useCallback(() => {
    console.warn('Apple sign in');
  }, []);
  return (
    <>
      <SocialButton type="Facebook" onPress={onSigninWithFacebook} />
      <SocialButton type="Google" onPress={onSignInWithGoogle} />
      {Platform.OS === 'ios' && (
        <SocialButton type="Apple" onPress={onSignInWithApple} />
      )}
    </>
  );
};

export default SocialSignInButtons;
