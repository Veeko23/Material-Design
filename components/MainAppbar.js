import React from 'react'
import { Appbar } from 'react-native-paper'

export default function MainAppbar(props) {
    return(
        <Appbar.Header
        mode="center-aligned"
        elevater={true}
        >
            <Appbar.Content title={props.title} />
        </Appbar.Header>
    )
}