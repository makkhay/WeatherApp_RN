import React from 'react';
import {ActivityIndicator, ListView, Image, TouchableOpacity} from 'react-native';
import axios from 'axios';
import RowDetail from './RowDetail';

export default class List extends React.Component {
    
    static navigationOptions = ({navigation}) => {
       return {
           title: `Weather of ${navigation.state.params.city}`,
       }
    }
    constructor (props) {
        super(props)
        this.state = {
            city : this.props.navigation.state.params.city,
            report: null,
        },
        this.fetchWeather()
    }

    fetchWeather() {
        //API call
        axios.get(`http://api.openweathermap.org/data/2.5/forecast/daily?zip=${this.state.city}&mode=json&units=imperial&cnt=5&appid=5ecae7e95e7f28e2954869ab27e68673`)
        .then((response) => {
            this.setState({report: response.data})
        })
    }

    render() {

        if (this.state.report === null) {
            return (
                <ActivityIndicator size="large"  />
            )
        } else {

            const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

            return (

                <ListView
                    // Grab list objects from json response 
                    dataSource={ds.cloneWithRows(this.state.report.list)}
                    renderRow={(rowData,k) => <RowDetail day={rowData}
                    index={parseInt(k, 10) }/>}
                />
                
            )
        }
    }
}
