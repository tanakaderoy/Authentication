import React, {useMemo} from 'react';
import {StyleSheet, Text, TouchableOpacity, ViewStyle} from 'react-native';

type Props = {
  type?: 'primary' | 'secondary' | 'tertiary';
  onPress: () => void;
  title: string;
  bgColor?: ViewStyle;
  fgColor?: ViewStyle;
};

function CustomButton({
  type = 'primary',
  onPress,
  title,
  fgColor,
  bgColor,
}: Props): React.ReactElement {
  const containerStyle = useMemo(() => {
    if (type === 'tertiary') {
      return styles.tertiaryContainer;
    }
    return type === 'primary'
      ? styles.primaryContainer
      : styles.secondaryContainer;
  }, [type]);

  const textStyle = useMemo(() => {
    if (type === 'tertiary') {
      return styles.tertiaryText;
    }
    return type === 'primary' ? styles.primaryText : styles.secondaryText;
  }, [type]);

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, containerStyle, bgColor]}>
      <Text style={[styles.text, textStyle, fgColor]}>{title}</Text>
    </TouchableOpacity>
  );
}

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: 5,
    alignItems: 'center',
    padding: 15,
    marginVertical: 5,
  },
  text: {
    fontWeight: 'bold',
  },
  primaryContainer: {
    backgroundColor: '#3b71f3',
  },
  secondaryContainer: {
    borderColor: '#3b71f3',
    borderWidth: 2,
  },
  tertiaryContainer: {
    backgroundColor: 'white',
  },

  primaryText: {
    color: 'white',
  },
  secondaryText: {
    color: '#3b71f3',
  },
  tertiaryText: {
    color: 'gray',
  },
});
