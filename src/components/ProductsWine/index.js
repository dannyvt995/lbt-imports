import Image from 'next/image'
import './style.css'

import React from 'react'
import dataProducts from '@/data/products.json';
import Link from 'next/link';
export default function ProductsWine() {
    const productList = dataProducts.products_wine
    console.log(productList)
    return (
        <section className="products_list_wine dark-background">
            <div className='products_list_wine_grid'>
                {Object.keys(productList).map((key) => {
                    const product = productList[key];
                    return (
                        <div className={`row_products row${Number(product.id) + 1}`}>
                             <div className='grid12-container'>
                             <div className={`item_wine_logo`} key={product.id}>
                                <Image src={product.logo} alt="Dominic Wine" sizes="100vw" width={0} height={0} style={{ width: '100%', height: 'auto' }} />
                            </div>
                            <div className={`item_wine_info`}>
                                <div className='info_wine'>
                                   
                                    <div className='top'>
                                        <h2>{product.name}</h2>
                                        <div className='tag '>
                                            <svg width="12" height="12" viewBox="0 0 12 12" fill="white" xmlns="http://www.w3.org/2000/svg"><circle cx="6" cy="6" r="5.5" stroke="currentColor"></circle></svg>
                                            <p>{product.tag}</p>
                                        </div>
                                        <p>{product.info}</p>
                                    </div>
                                    <div className='bot'>
                                        <Link href={product.link} target="_blank" rel="noopener noreferrer">Visit Brand!</Link>
                                    </div>
                                    
                                </div>
                            </div>
                             </div>
                            
                        </div>
                    );
                })}
               
            </div>
        </section>
    )
}
