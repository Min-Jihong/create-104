import React from 'react';

export const ProductImageGallery = ({ images }: { images: string[] }) => (
  <div className='image-gallery'>
    {images.map((image, index) => (
      <img key={index} src={image} alt={`Product Image ${index + 1}`} />
    ))}
  </div>
);