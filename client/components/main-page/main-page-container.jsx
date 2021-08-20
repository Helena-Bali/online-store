import React, { useEffect } from "react";
import { useDispatch } from 'react-redux'
import MainPage from "./main-page";
import { getGoods } from '../../redux/reducers/main-reducer';


const MainPageContainer = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getGoods())
    }, [])
    return <MainPage/>
}

export default MainPageContainer