import { View, Text } from 'react-native'
import React from 'react'
import Select_Button from '../../Component/Select_Button/Select_Button'
import Detail from '../../Component/Detail/Detail'
import { SCREEN_WIDTH } from '../../Utils/common'

const Home = () => {
    return (
        <View style={{ flex: 1, backgroundColor:'black', width:SCREEN_WIDTH }}>
            <View style={{ display: 'flex', flexDirection: 'row' }}>
                <View>
                    <Select_Button />
                </View>
                <View>
                    <Detail/>
                </View>
            </View>
        </View>
    )
}

export default Home