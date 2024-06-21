import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSelectData } from '../../Store/Feature/SelectSlice';
import { fetchBinanceData } from '../../Store/Feature/BinanceSlice';
const Select_Button = ({ navigation }: any) => {
    const dispatch = useDispatch<any>();
    const SelectData = useSelector((state: any) => state.Select.data);
    const [symbols, setSymbols] = useState([]);
    useEffect(() => {
        const fetchData = () => {
            dispatch(fetchSelectData());
        };
        fetchData();
        const interval = setInterval(fetchData, 30000);
        return () => clearInterval(interval);
    }, [dispatch]);

    useEffect(() => {
        if (SelectData && SelectData.symbols) {
            setSymbols(SelectData.symbols);
        }
    }, [SelectData])    

    const handle =(item:any)=>{
      dispatch(fetchBinanceData(item.symbol));

    }
    const renderItem = ({ item }: any) => {
        return (
            <View style={styles.itemContainer}>
                <TouchableOpacity onPress={() =>  handle(item)}>
                    <Text style={styles.itemText}> {item.symbol}</Text>
                </TouchableOpacity>
            </View>)
    }
    return (
            <View style={{flex:1}}>
                <FlatList
                    data={SelectData}
                    renderItem={(item) => renderItem(item)}
                    keyExtractor={(item) => item.symbol}                     />
            </View>
           
    )
}
const styles = StyleSheet.create({
  
    itemContainer: {
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: '9%',
        color: 'green'
    },
    itemText: {
        color: 'white',
        fontSize: 15,
    },
  
});

export default Select_Button