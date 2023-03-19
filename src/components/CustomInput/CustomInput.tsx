import React from 'react';
import {Control, Controller, FieldValues} from 'react-hook-form';
import {StyleSheet, Text, TextInput, TextInputProps, View} from 'react-native';
import {RulesType} from '../../utils/validationRules';

interface CustomInputProps extends Pick<TextInputProps, 'keyboardType'> {
  placeholder: string;
  name: string;
  secure?: boolean;
  control: Control<FieldValues, any>;
  rules?: RulesType;
  errorText?: string;
}

function CustomInput({
  placeholder,
  control,
  name,
  errorText,
  keyboardType = 'default',
  secure = false,
  rules = {},
}: CustomInputProps): React.ReactElement {
  return (
    <>
      <Controller
        rules={rules}
        control={control}
        name={name}
        render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
          <>
            <View style={[styles.container, error && styles.errorInput]}>
              <TextInput
                value={value}
                style={[styles.input]}
                placeholder={placeholder}
                onChangeText={onChange}
                secureTextEntry={secure}
                onBlur={onBlur}
                keyboardType={keyboardType}
              />
            </View>
            {error && (
              <Text style={styles.errorText}>{error.message || errorText}</Text>
            )}
          </>
        )}
      />
    </>
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
  errorInput: {
    borderColor: 'red',
    borderWidth: 1,
  },
  errorText: {
    color: 'red',
    alignSelf: 'stretch',
  },
});
