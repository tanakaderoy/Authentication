import React, {useCallback} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

interface CustomInputProps {
  placeholder: string;
  text: string;
  setText: (text: string) => void;
  secure?: boolean;
}

function CustomInput({
  placeholder,
  text,
  setText,
  secure = false,
}: CustomInputProps): React.ReactElement {
  const onTextChange = useCallback(
    (value: string) => {
      setText(value);
    },
    [setText],
  );
  return (
    <View style={styles.container}>
      <TextInput
        value={text}
        style={styles.input}
        placeholder={placeholder}
        onChangeText={onTextChange}
        secureTextEntry={secure}
      />
    </View>
  );
}

export default CustomInput;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: '100%',
    borderWidth: 1,
    borderColor: '#e8e8e8',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 5,
  },
  input: {
    fontSize: 12,
  },
});
