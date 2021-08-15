import React from 'react'

const Sort = () => {
    return (
        <span className="space-between p-10">
        <button type="button" 
        className="bg-blue-500 text-black items-center text-center h-24 w-36  font-bold shadow-lg  p-2 mr-8"
        id="sort-price">Отсортировать по цене</button>
        <button type="button"
        className="bg-blue-500 text-black items-center text-center h-24 w-36  font-bold shadow-lg p-2"
        id="sort-name">Отсортировать по названию</button>                
        </span>
    )
}

export default Sort