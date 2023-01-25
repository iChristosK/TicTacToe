import React from 'react';
import { Text, useColorScheme } from 'react-native';

const CustomText = (props: any) => {
    const colorScheme = useColorScheme();
    return (
        <Text style={{ ...props.style, color: colorScheme === 'dark' ? 'white' : 'black' }}> {props.children}</Text >
    );
};


export default CustomText;