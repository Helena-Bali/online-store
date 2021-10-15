import React, { useEffect } from "react";
import axios from 'axios'
import Header from "../header/header";
import ListOfGoods from "./list-of-goods-selector";

const MainPage = () => {
    useEffect(() => {
        axios({
            method: 'post',
            url: 'api/v1/logs',
            data: {
              time: +new Date(),
              action: `navigate to / page`
            }
          }).catch((err) => console.log(err))
        return () => {}
    }, [])
    return (
        <div>
            <Header />
            <ListOfGoods />
        </div>
    );
};

export default MainPage;