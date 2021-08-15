import React from 'react'
import {Link} from 'react-router-dom'

const OrdersCount = () => {
    return (
        <div relative h-32 w-32>
            <div className=" absolute top-10 right-10 h-32 w-32">
                <Link to='/basket' id="brand-name" className="text-white text-3xl bg-blue-500 items-center text-center shadow-lg  p-2 mr-8">Корзина</Link>
                <div className="mt-5 text-right">Количество товаров в корзине:</div>
            </div>
        </div>
    )
}

export default OrdersCount