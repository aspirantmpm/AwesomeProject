import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export const MapScreen = () => {
  return (
    <View style={styles.container}>
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          longitude: 36.351258372537814,
          latitude: 49.99295539931355,
          longitudeDelta: 0.1,
          latitudeDelta: 0.1,
        }}
      >
        <Marker
          coordinate={{ longitude: 36.351258372537814, latitude: 49.99295539931355 }}
          title="travel photo"
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
  },
});
