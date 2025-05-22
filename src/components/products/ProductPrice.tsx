import React from 'react';

export const ProductPrice = ({ originalPrice, discountedPrice }: { originalPrice: number; discountedPrice?: number }) => (
  <div className='product-price'>
    {discountedPrice ? (
      <>
        <span className='discounted-price'>${discountedPrice}</span>
        <span className='original-price'>${originalPrice}</span>
      </>
    ) : (
      <span>${originalPrice}</span>
    )}
  </div>
);