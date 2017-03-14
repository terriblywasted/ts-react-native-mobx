import React, {
    Component,
    ViewStyle,
    TextStyle,
} from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Routes } from '../routes';
import Button from "react-native-button";

interface Props {

}

interface State {

}

export default class PageTwo extends Component<Props, State> {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>
                    This is page two!
                </Text>
                <Button
                    style={styles.button}
                    containerStyle={styles.buttonContainer}
                    onPress={Actions[Routes.PageOne]}>
                    Go back
                </Button>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f1f1f1',
    } as ViewStyle,

    button: {
        color: '#fff',
    } as ViewStyle,

    buttonContainer: {
        backgroundColor: 'black',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
    } as ViewStyle,

    text: {
        fontSize: 22,
        textAlign: 'center',
        margin: 10,
    } as TextStyle,
});