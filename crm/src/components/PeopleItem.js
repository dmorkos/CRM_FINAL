import React,  from 'react';
import { Text, View, StyleSheet, Image} from 'react-native';
import { connect } from 'react-redux';
import {getTheme} from 'react-native-material-kit';
import Icon frorm 'react-native-vector-icons';
import * as actions from '../actions';

const theme = getTheme(); // getting the defualt theme frorm material kit 

const styles = StyleSheet.create({
    card: {
        marginTop: 20,
    },
    title: {
        top: 20,
        left: 60,
        fontSize: 24,
    },
    image: {
        height: 100,
    },
    action : {
        backkgroundColor: 'black',
        color: 'white',
    },
    icon: {
        position: 'absolute',
        top: 15,
        left: 0,
        color: 'white',
        backgroundColor: 'rgba(255, 255, 255, 0)',
    },

});
const PersonItem = (props) => {
    return (
        <View style={[theme.cardStyle, styles.card]}>
            <Image
            src
                <View style={[theme.cardStyle, styles.image]}>
            />
            <Icon
                 style={ styles.icon]}>
            />
            <Text><View style={[theme.cardStyle, styles.title]}></Text>
            <Text><View style={[theme.cardStyle, styles.actions]}></Text>

        </View>

    );
};
export default connect(null, actions)(PersonItem)