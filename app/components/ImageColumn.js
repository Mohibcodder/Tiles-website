// app/components/ImageColumn.js
import React from 'react';

const ImageColumn = ({ images, animationClass }) => {
  const doubledImages = [...images, ...images];

  return (
    <div className="relative h-full w-1/4 overflow-hidden">
      <div className={`flex flex-col gap-2 ${animationClass}`}>
        {doubledImages.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Scrolling tile ${index + 1}`}
            className="h-28 w-full shrink-0 rounded-lg object-cover shadow-lg"
          />
        ))}
      </div>
    </div>
  );
};

export default ImageColumn;