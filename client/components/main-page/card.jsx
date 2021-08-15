import React from 'react'

const Card = () => {
    return (
        <div>
            <div className=" card max-w-xs rounded overflow-hidden shadow-lg my-2">
                <img className="card__image" src="https://image.made-in-china.com/2f0j00hIuYSLrlZskJ/Wholesale-3D-Schoolbag-Girls-Kindergarten-Cartoon-School-Bag-for-Children.jpg" alt="Sunset in the mountains"/>
                    <div className="px-6 py-4">
                        <div className="card__title font-bold text-xl mb-2">Schoolbag</div>
                        <div className="flex">
                            <div className="card__price font-bold text-xl mb-2">Price: 50</div>
                            <p className=" currency font-bold text-xl mb-2 ml-2">
                             $
                            </p>
                        </div>
                        <div className="card__product-amount font-bold text-xl mb-2">In basket: 1 </div>
                    </div>
            </div>
            <div>
                 <button type="button"
                         className="bg-blue-500 text-black items-center text-center h-12 w-24 border-2 rounded  font-bold shadow-lg  p-2 mr-8"
                >Добавить</button>
            </div>
        </div>
    )
}

            export default Card
