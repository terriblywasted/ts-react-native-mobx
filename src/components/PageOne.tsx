import React, {Component, ViewStyle, TextStyle } from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {observer, inject} from 'mobx-react';
import { Actions } from 'react-native-router-flux';
import Button from "react-native-button";
import { Row, Grid } from "react-native-easy-grid";

import { Routes } from '../routes';
import { Store } from '../store/index';

interface Props {
    store?: Store,
}

interface State {

}

@inject('store')
@observer
export default class PageOne extends Component<Props, State> {
    render() {
        const {store} = this.props;
        if (!store) {
            return null;
        }

        return (
            <Grid>
                <Row size={75}>
                    <View style={styles.container}>
                        <Text style={styles.text}>
                            Welcome, this is the @observable from MobX: {store.todoStore.count}
                        </Text>
                    </View>
                </Row>
                <Row size={35}>
                    <View style={styles.container}>
                        <Button
                            style={styles.button}
                            containerStyle={styles.buttonContainer}
                            onPress={() => Actions[Routes.PageTwo]()}>
                            You rock! Go to page 2!
                        </Button>
                        <Button
                            style={styles.button}
                            containerStyle={[styles.buttonContainer, {marginTop: 10}]}
                            onPress={() => store.todoStore.addTodo('New todo')}>
                            Increment to +1
                        </Button>
                        <Button
                            style={styles.button}
                            containerStyle={[styles.buttonContainer, {marginTop: 10}]}
                            onPress={() => store.todoStore.callApi()}>
                            Call Api
                        </Button>
                    </View>
                </Row>
            </Grid>
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