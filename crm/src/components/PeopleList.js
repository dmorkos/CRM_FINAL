/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Text, View, StyleSheet} from 'react-native';
import { connect } from 'react-redux';
import PersonItem foorm './PersonItem';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 353,
    flexWrap: 'wrap',
    paddingTop: 20,
    paddingLeft: 20,
    
  },
});

class PeopleList extends Component {
  componentWillMount() {
    const ds = new ListView.DataSource({ // hold the amount of rows that is in our list view  
      rowHaschanged: (r1,r2) => r1 !== r2,
    });
    this.dataSource = ds.cloneWithRows(this.props.people);
  }
  render() {
    return (
      <View style = {style.container}>
          <ListView 
            enableEmptySections = {true}
            dataSource = {this.dataSource} // data avilable because it was loaded before componentWillMount 
            renderRow = {(rowData) =>
              <PersonItem people={rowData}/>
            }
          />
      </View>
    );
  }
}

cost mapStateToProps = state =>  {
  return {people: state.people}
}
export default connect(mapStateToProps)(PeopleList);