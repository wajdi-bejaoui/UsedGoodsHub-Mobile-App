import React from 'react';
import { TextInput, View, StyleSheet,Platform } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'

import defaultStyles from '../config/styles'

function AppTextInput({icon, width = '100%', ...otherProps}) {
    return (
        <View style={[styles.container, {width}]}>
            {icon && <MaterialCommunityIcons name={icon} size={20} color={defaultStyles.colors.medium} style={styles.icon} />}
            <TextInput 
                placeholderTextColor={defaultStyles.colors.medium}
                {...otherProps} style={[styles.textInput, defaultStyles.text]}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container : {
        backgroundColor: defaultStyles.colors.white,
        borderRadius: 15,
        flexDirection : 'row',
        // width : '100%',
        padding : 15 ,
        marginVertical :10,
        alignItems : 'center',
    },
    icon : {
        marginRight :10,
    },
    textInput : {
        width : '100%',
    },

})

export default AppTextInput;