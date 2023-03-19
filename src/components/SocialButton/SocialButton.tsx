import React, {useMemo} from 'react';
import {ViewStyle} from 'react-native';
import CustomButton from '../CustomButton';

type Props = {
  type: 'Facebook' | 'Google' | 'Apple';
  onPress: () => void;
};

function SocialButton({type, onPress}: Props): React.ReactElement {
  const title = useMemo(() => {
    return `Sign in with ${type}`;
  }, [type]);

  const bgColor: ViewStyle = useMemo(() => {
    switch (type) {
      case 'Facebook':
        return {backgroundColor: '#e7eaf4'};
      case 'Apple':
        return {backgroundColor: '#e3e3e3'};
      case 'Google':
        return {backgroundColor: '#fae9ea'};
    }
  }, [type]);
  const fgColor: ViewStyle = useMemo(() => {
    switch (type) {
      case 'Facebook':
        return {color: '#4765a9'} as ViewStyle;
      case 'Apple':
        return {color: '#363636'} as ViewStyle;
      case 'Google':
        return {color: '#dd4d44'} as ViewStyle;
    }
  }, [type]);
  return (
    <CustomButton
      type="tertiary"
      onPress={onPress}
      title={title}
      fgColor={fgColor}
      bgColor={bgColor}
    />
  );
}

export default SocialButton;
