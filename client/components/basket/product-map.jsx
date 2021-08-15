import React from 'react'

const ProductMap = () => {
    return (
        <div className="product">
                <div>
                    <span>
                        <img className="product__image ml-5 max-w-xs"
                            src="https://image.made-in-china.com/2f0j00hIuYSLrlZskJ/Wholesale-3D-Schoolbag-Girls-Kindergarten-Cartoon-School-Bag-for-Children.jpg"
                            alt="Sunset in the mountains" />
                    </span>
                    <span className="product__title ml-5">Schoolbag</span>
                    <span className="product__price ml-5">50 $</span>
                    <span className="ml-5">
                        <button type="button"
                            className="product__remove bg-blue-500 text-white items-center text-center font-bold shadow-lg mx-2 p-1 w-12">
                            -</button>
                    </span>
                </div>
                <div className="product__amount ml-5">product__amount</div>
                <div className="product__total_price ml-5">product__total_price</div>
            </div>
    )
}

export default ProductMap