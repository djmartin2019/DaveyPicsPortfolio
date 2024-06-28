import React from "react";

interface ImageProps {
  src: string;
  alt: string;
}

interface StaggeredGridProps {
  images: ImageProps[];
}

const StaggeredGrid = ({ images }: StaggeredGridProps) => {
  return (
    <div className="container mx-auto py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div key={index} className="col-span-1">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover rounded-lg shadow-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default StaggeredGrid;
