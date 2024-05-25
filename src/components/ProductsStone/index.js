import Image from 'next/image'
import './style.css'

import React from 'react'
import dataProducts from '@/data/products.json';
import Link from 'next/link';
export default function ProductsStone() {
    const productList = dataProducts.products_stone

    return (
        <section className="products_list_stone light-background">
            <ul className='products_list_stone_grid'>
                {Object.keys(productList).map((key) => {
                    const product = productList[key];
                    return (
                        <li className={`row_products row${Number(product.id) + 1}`} key={product.id}>
                             <div className='grid12-container'>
                             <div className={`item_stone_logo`}>
                                <Image src={product.two_image[0]} alt="Dominic Wine" sizes="100vw" width={0} height={0} style={{ width: 'auto', height: '120%' }} />
                            </div>
                            <div className={`item_stone_info`}>
                                <div className='info_stone'>
                                   
                                    <div className='top'>
                                        <h2>{product.name}</h2>
                                        <div className='tag '>
                                            <svg width="12" height="12" viewBox="0 0 12 12" fill="white" xmlns="http://www.w3.org/2000/svg"><circle cx="6" cy="6" r="5.5" stroke="currentColor"></circle></svg>
                                            <p>{product.tag}</p>
                                        </div>
                                        <p>{product.info}</p>
                                    </div>
                                    <div className='bot'>
                                        <Link href={product.link} >Explore more...</Link>
                                    </div>
                                    
                                </div>
                            </div>
                             </div>
                            
                        </li>
                    );
                })}
               
            </ul>
        </section>
    )
}
