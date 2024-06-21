import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBinanceData } from '../../Store/Feature/BinanceSlice';
import { SelectList } from 'react-native-dropdown-select-list'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../Utils/common';

const data = [
    { label: 0.1, value: 0.1 },
    { label: 1, value: 1 },
    { label: 10, value: 10 },
    { label: 50, value: 50 },
];
const Detail = () => {
    const dispatch = useDispatch<any>();
    const binanceData = useSelector((state: any) => state.binance.data);
    const status = useSelector((state: any) => state.binance.status);
    const error = useSelector((state: any) => state.binance.error);
    const [selected, setSelected] = useState<any>(null);
    const [data2, setdata2] = useState([])
    useEffect(() => {
        const fetchDataAndSetInterval = () => {
            dispatch(fetchBinanceData());
        };

        fetchDataAndSetInterval();
        const id = setInterval(fetchDataAndSetInterval, 300000);

        return () => {
            clearInterval(id);
        };
    }, [dispatch]);
    useEffect(() => {
        if (binanceData && binanceData.symbols) {
            setdata2(binanceData.bids);
        }
    }, [binanceData])

    if (status === 'loading') {
        return (
            <View style={{alignSelf:'center'}}>
                <Text style={{alignSelf:'center'}}>Loading...</Text>
            </View>
        );
    }
    if (status === 'failed') {
        return (
            <View>
                <Text>Error: {error}</Text>
            </View>
        );
    }
    const renderItem = ({ item }: any) => {
        const [quality, price] = item;
        const priceRounded = (price * selected).toFixed(2);
        const qualityRounded = (quality / selected).toFixed(2);
        return (
            <View style={{ display: 'flex', flexDirection: 'row',}}>
                <Text style={{ color: 'red', fontSize: 20, marginHorizontal: '5%', marginVertical: '7%' }}>
                    {priceRounded}
                </Text>
                <Text style={{ color: 'red', fontSize: 20, marginHorizontal: '5%', marginVertical: '7%' }}>
                    {qualityRounded}
                </Text>
            </View>
        );
    };
    return (
        <View style={{ height:SCREEN_HEIGHT}}>
        <View style={{ height:SCREEN_HEIGHT/1.1 , marginTop:'5%'}}>
            <FlatList
                data={binanceData.bids}
                renderItem={(item) => renderItem(item)}
                keyExtractor={(item, index) => `${index}`}
                style={{alignSelf:'center'}}
            />
        </View>
        <View style={{position:'relative', alignSelf:'center', width:SCREEN_WIDTH/1.5}}>
            <SelectList
                setSelected={(val: number) => setSelected(val)}
                data={data}
                save="value"
                dropdownStyles={{
                    position: 'absolute',
                    zIndex: 1000,
                    bottom:0, 
                    width:'100%',
                    backgroundColor:'black'
                }}
            />
        </View>
    </View>
    
    );
};

export default Detail;
