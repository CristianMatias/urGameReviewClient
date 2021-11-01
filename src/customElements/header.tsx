import React from "react";
import {  TextComponent, View } from "react-native";
import styles from "../../styles/styles";


export default function Header() {
    return(
        <View style={styles.header}>
            <TextComponent style={styles.title}>RevGames</TextComponent>
        </View>
    )
}

    
