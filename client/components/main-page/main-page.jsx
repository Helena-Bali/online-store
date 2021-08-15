import React from "react";
import Header from "../header/header";
import Card from "./card";
import Data from "./main-page-selector";


const MainPage = () => {

    return (
        <div>
            <Header />
            <Data />
            <Card />
        </div>
    );
};

export default MainPage;