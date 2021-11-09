import React from 'react';
import { Button, Image, Text, TouchableOpacity, View, } from 'react-native';
import styles from '../../styles/styles';

class Header extends React.Component {
    constructor(props) {
       super(props);
       this.state = {

       }        
     }

render() {
    return (
            <View style={styles.header}>
                <Image style={styles.imageHeader} source={require('../../assets/full-name-icon.png')} />
                <TouchableOpacity>
                    <Image source={require('../../assets/icons/user.png')}  style={styles.iconProfile}/>
                </TouchableOpacity>
            </View>
    )
   }
}

 export default Header;