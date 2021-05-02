import React, { useEffect, useState } from 'react'
import { View, Text, SafeAreaView, FlatList, ActivityIndicator, StyleSheet, RefreshControl } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import HeaderBack from '../../components/HeaderBack';
import { clearMyUsers, getmyUsers } from '../../redux/actions/myUsers';
import { colors } from '../../styles/colors';
import { ifNotValid } from '../../utils/helper';
import { fontToDp } from '../../utils/Responsive';
import MyStocksCard from './comp/myStocksCard';

const Home = () => {


    const dispatch = useDispatch();
    const [isRefreshing, setIsRefreshing] = useState(false);

    const _myUsers = useSelector(state => state.myUsers.myUsers);
    const hasMore = useSelector(state => state.myUsers.myUsersHasMore);
    const pageNo = useSelector(state => state.myUsers.pageNo);
    const loadingData = useSelector(state => state.myUsers.loadingUsersData);

    const [myUsers, setmyUsers] = useState([]);

    useEffect(() => {
        if (!ifNotValid(_myUsers)) {
            setmyUsers(_myUsers);
        }
    }, [_myUsers]);

    useEffect(() => {
        // dispatch(clearMyUsers());
        pageNo === 0 && dispatch(getmyUsers(0));
    }, []);

    const UsersPageIncrement = () => {
        dispatch(getmyUsers(pageNo + 1));
    };

    const handleLoadMore = () => {
        hasMore && UsersPageIncrement();
    };

    const _onRefresh = () => {
        dispatch(getmyUsers(0));
        setIsRefreshing(false);
    };

    //Rendering booking cards with booking name
    const _renderUsersCard = ({ item, index }) => {
        return <MyStocksCard data={item} />;
    };

    const renderFooter = () => {
        return <View style={styles.footerStyle}>
            {loadingData && (<ActivityIndicator color={colors.darkGreen} size="large" />)}
        </View>;
    };

    return (
        <View style={{ flex: 1 }}>
            <HeaderBack title='Home' />
            <Text style={{ margin: 10, fontSize: 22 }}>Total Customers: {_myUsers.length}</Text>

            {myUsers && myUsers.length > 0 ? (
                <FlatList
                    keyExtractor={item => item._id.toString()}
                    data={myUsers}
                    renderItem={_renderUsersCard}
                    onEndReached={handleLoadMore}
                    onEndReachedThreshold={0.3}
                    ListFooterComponent={renderFooter}
                    refreshControl={
                        <RefreshControl
                            tintColor={colors.darkGreen}
                            refreshing={isRefreshing}
                            onRefresh={() => _onRefresh()}
                        />
                    }
                />
            ) : <View style={styles.noBookings}>
                <Text>
                    No Bookings
                    </Text>
            </View>}
        </View>

    )
}

export default Home;

const styles = StyleSheet.create({
    noBookings: {
        height: '100%', justifyContent: 'center', alignItems: 'center'
    },
    footerStyle: {
        flex: 1,
        height: fontToDp(35),
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
