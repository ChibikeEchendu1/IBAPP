/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  FlatList,
  Image,
  Platform,
  Text,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {VARIABLES} from '../utils/Variables';
import AsyncStorage from '@react-native-community/async-storage';
import Normalize from '../utils/Normalize';
const initialLayout = {
  width: Dimensions.get('window').width,
};
const SCREENWIDTH = Dimensions.get('window').width;
const TabViewExample = props => {
  const FirstRoute = () => (
    <FlatList
      style={{height: '62%'}}
      data={props.Items}
      renderItem={({item}) => renderRow(item)}
      keyExtractor={(item, index) => index}
      onRefresh={() => renderRefreshControl()}
      refreshing={props.Loader}
      initialNumToRender={8}
    />
  );

  const ThirddRoute = () => (
    <FlatList
      style={{height: '62%'}}
      data={props.requesr}
      renderItem={({item}) => renderRow2(item)}
      keyExtractor={(item, index) => index}
      onRefresh={() => renderRefreshControl()}
      refreshing={props.Loader}
      initialNumToRender={8}
    />
  );

  const SecondRoute = () => (
    <FlatList
      style={{maxHeight: '62%'}}
      data={props.Pending}
      renderItem={({item}) => renderRowPending(item)}
      keyExtractor={(item, index) => index}
      onRefresh={() => renderRefreshControl()}
      refreshing={props.Loader}
      initialNumToRender={8}
    />
  );

  const renderRefreshControl = () => {
    console.log('lol');
  };
  ///QANDA
  const renderRowPending = item => {
    return (
      <TouchableOpacity
        onPress={async () => {
          props.navigation.navigate({
            routeName: 'StoreItem',
            params: {
              item: item,
              Waiting: 0,
            },
          });
        }}
        style={{width: SCREENWIDTH}}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            width: SCREENWIDTH,
            justifyContent: 'space-between',
            marginLeft: 20,
            marginTop: 30,
          }}>
          <View>
            <Text
              style={{
                // alignSelf: 'center',
                //marginBottom: 10,
                width: '90%',

                fontSize: Normalize(15),
              }}>
              {'Question: '}
              {item.Question}{' '}
            </Text>
            <Text
              style={{
                // alignSelf: 'center',
                //marginBottom: 10,
                width: '90%',

                fontSize: Normalize(15),
              }}>
              {'Comment: '}
              {item.Comment}{' '}
            </Text>
            <Text
              style={{
                // alignSelf: 'center',
                //marginBottom: 10,
                width: '90%',

                fontSize: Normalize(15),
              }}>
              {'Date '}
              {item.Date}{' '}
            </Text>
          </View>
          <Icon
            style={{marginRight: '20%'}}
            name="caret-right"
            size={30}
            color={VARIABLES.Color}
          />
        </View>
      </TouchableOpacity>
    );
  };

  ///Request
  const renderRow2 = item => {
    return (
      <TouchableOpacity
        onPress={async () => {
          props.navigation.navigate({
            routeName: 'StoreItem',
            params: {
              item: item,
              Waiting: 0,
            },
          });
        }}
        style={{width: SCREENWIDTH}}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            width: SCREENWIDTH,
            justifyContent: 'space-between',
            marginLeft: 20,
            marginTop: 30,
          }}>
          <View style={{width: '90%'}}>
            <Text
              style={{
                // alignSelf: 'center',
                //marginBottom: 10,
                width: '90%',

                fontSize: Normalize(15),
              }}>
              {'I need '}
              {item.Item}{' '}
            </Text>
            <Text
              style={{
                // alignSelf: 'center',
                //marginBottom: 10,
                width: '90%',

                fontSize: Normalize(15),
              }}>
              {' '}
              {item.Report}{' '}
            </Text>
            <Text
              style={{
                // alignSelf: 'center',
                //marginBottom: 10,
                width: '90%',

                fontSize: Normalize(15),
              }}>
              {'Quantity: '}
              {item.Quantity}{' '}
            </Text>
            <Text
              style={{
                // alignSelf: 'center',
                //marginBottom: 10,
                width: '90%',

                fontSize: Normalize(15),
              }}>
              {'Date: '}
              {item.Date}{' '}
            </Text>
            <Text
              style={{
                // alignSelf: 'center',
                //marginBottom: 10,
                width: '90%',

                fontSize: Normalize(15),
              }}>
              {' '}
              {item.Type}{' '}
            </Text>
          </View>
          <Icon
            style={{marginRight: '20%'}}
            name="caret-right"
            size={30}
            color={VARIABLES.Color}
          />
        </View>
      </TouchableOpacity>
    );
  };

  ///Comment
  const renderRow = item => {
    return (
      <TouchableOpacity
        onPress={async () => {
          props.navigation.navigate({
            routeName: 'StoreItem',
            params: {
              item: item,
            },
          });
        }}
        style={{width: SCREENWIDTH}}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            width: SCREENWIDTH,
            justifyContent: 'space-between',
            marginLeft: 20,
            marginTop: 30,
          }}>
          <View>
            <Text
              style={{
                // alignSelf: 'center',
                //marginBottom: 10,
                width: '90%',

                fontSize: Normalize(15),
              }}>
              {'Comment '}
              {item.Comment}{' '}
            </Text>
            <Text
              style={{
                // alignSelf: 'center',
                //marginBottom: 10,
                fontSize: Normalize(15),
                width: '90%',
              }}>
              {'Date '}
              {item.Date}{' '}
            </Text>
          </View>
          <Icon
            style={{marginRight: '20%'}}
            name="caret-right"
            size={30}
            color={VARIABLES.Color}
          />
        </View>
      </TouchableOpacity>
    );
  };

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'Comments'},
    {key: 'second', title: 'Q&A'},
    {key: 'third', title: 'Request'},
  ]);

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirddRoute,
  });

  return (
    <TabView
      renderTabBar={props => (
        <TabBar
          indicatorStyle={{backgroundColor: 'white'}}
          tabStyle={{backgroundColor: VARIABLES.Color}}
          {...props}
        />
      )}
      activeColor="red"
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
    />
  );
};

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
});

export {TabViewExample};
