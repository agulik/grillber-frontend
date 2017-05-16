/* global google */
import _ from "lodash";
import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import SearchBox from "react-google-maps/lib/places/SearchBox"

const INPUT_STYLE = {
  boxSizing: `border-box`,
  MozBoxSizing: `border-box`,
  border: `1px solid transparent`,
  width: `350px`,
  height: `32px`,
  marginTop: `8px`,
  padding: `0 12px`,
  borderRadius: `1px`,
  boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
  fontSize: `14px`,
  outline: `none`,
  textOverflow: `ellipses`,
};

const MyGoogleMap = withGoogleMap(props => (
    <GoogleMap defaultZoom={18}
      defaultCenter={{ lat: 45.5017, lng: -73.5673 }}
      ref={props.onMapMounted}
      onClick={props.onMapClick}
      onBoundsChanged={props.onBoundsChanged}>

        {props.markers.map((marker, index) => (
        <Marker {...marker}
        onRightClick={() => props.onMarkerRightClick(marker)} />
      ))}

      <SearchBox
        ref={props.onSearchBoxMounted}
        bounds={props.bounds}
        controlPosition={google.maps.ControlPosition.TOP_LEFT}
        onPlacesChanged={props.onPlacesChanged}
        inputPlaceholder="Search a location"
        inputStyle={INPUT_STYLE}
      />
    </GoogleMap>
));

const defaultBounds = new google.maps.LatLngBounds(
  new google.maps.LatLng(45.5017, -73.5673));

class Map extends Component {

  state = {
    bounds: defaultBounds,
    center: {
      lat: 45.5017,
      lng: -73.5673,
    },
    markers: [{
      position: {
        lat: 45.5017,
        lng: -73.5673,
      },
      key: `Montreal`,
      defaultAnimation: 2,
    }],
  };

  handleMapMounted = this.handleMapMounted.bind(this);
  handleBoundsChanged = this.handleBoundsChanged.bind(this);
  handleMapClick = this.handleMapClick.bind(this);
  handleMarkerRightClick = this.handleMarkerRightClick.bind(this);
  handleSearchBoxMounted = this.handleSearchBoxMounted.bind(this);
  handlePlacesChanged = this.handlePlacesChanged.bind(this);


  handleMapMounted(map) {
    this._map = map;
  }

  handleBoundsChanged() {
    this.setState({
      bounds: this._map.getBounds(),
      center: this._map.getCenter(),
    });
  }

  handleMapClick(event) {
    const nextMarkers = [
      ...this.state.markers,
      {
        position: event.latLng,
        defaultAnimation: 2,
        key: Date.now(), // Add a key property for: http://fb.me/react-warning-keys
      },
    ];
    this.setState({
      markers: nextMarkers,
    });
  }


  handleMarkerRightClick(targetMarker) {
    const nextMarkers = this.state.markers.filter(marker => marker !== targetMarker);

    this.setState({
      markers: nextMarkers,
    });
  }


  handleSearchBoxMounted(searchBox) {
    this._searchBox = searchBox;
  }

  handlePlacesChanged() {
    const places = this._searchBox.getPlaces();

    const markers = places.map(place => ({
      position: place.geometry.location,
    }));

    const mapCenter = markers.length > 0 ? markers[0].position : this.state.center;

    this.setState({
      center: mapCenter,
      markers,
    });
  }


  render() {
    // const markers = this.props.markers || []

    return (

      <MyGoogleMap
        onMapMounted={this.handleMapMounted}
        containerElement={<div style={{height: 300+'px'}} />}
        mapElement={<div style={{height: 600+'px'}} />}
        // containerElement={
        //   <div style={{ height: `100%` }} />
        // }
        // mapElement={
        //   <div style={{ height: `100%` }} />
        // }
        onMapClick={this.handleMapClick}
        markers={this.state.markers}
        onBoundsChanged={this.handleBoundsChanged}
        onSearchBoxMounted={this.handleSearchBoxMounted}
        bounds={this.state.bounds}
        onPlacesChanged={this.handlePlacesChanged}
        onMarkerRightClick={this.handleMarkerRightClick} />
    );
  }
}

export default Map;
