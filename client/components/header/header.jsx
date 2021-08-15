import React from 'react'
import {Link} from 'react-router-dom'
import Currency from './currency'
import OrdersCount from './orders-count'
import Sort from './sort'


const Header = () => {
    return (
        <header className="bg-blue-400 justify-between p-10 rounded-lg border shadow-lg space-x-20">
          <Link to='/' id="brand-name" className="text-white text-3xl">
          ПЕРЕЙТИ НА ГЛАВНУЮ</Link>
            <Currency/>
            <Sort/>
            <OrdersCount/>
        </header>
    )
}

export default Header