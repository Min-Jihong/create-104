import React from 'react';

export const AddToCartButton = ({ onAddToCart, disabled, isLoading }: { onAddToCart: () => void; disabled: boolean; isLoading: boolean }) => (
  <button onClick={onAddToCart} disabled={disabled}>{isLoading ? 'Adding...' : 'Add to Cart'}</button>
);