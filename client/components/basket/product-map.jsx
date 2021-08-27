import React from 'react'

const ProductMap = (props) => {
    const { data } = props
    return (
        <div className="product">
                <div>
                    <span>
                        <img className="product__image ml-5 max-w-xs"
                            src={data.image}
                            alt="Products" />
                    </span>
                    <span className="product__title ml-5">{data.title}</span>
                    <span className="product__price ml-5">{data.price}</span>
                    <span className="ml-5">
                        <button type="button"
                            className="product__remove bg-blue-500 text-white items-center text-center font-bold shadow-lg mx-2 p-1 w-12">
                            -</button>
                    </span>
                </div>
                <div className="product__amount ml-5">In basket: </div>
            </div>
    )
}

export default ProductMap