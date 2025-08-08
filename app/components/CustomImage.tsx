'use client';
import Image from 'next/image';
import { ComponentProps, useState } from 'react';

interface ImageWithFallbackProps extends ComponentProps<typeof Image> {
  fallbackSrc?: string;
}

const CustomImage = ({
  src,
  fallbackSrc = "/assets/no-image.png",
  ...props
}: ImageWithFallbackProps) => {
  const [imgSrc, setImgSrc] = useState(src);

  const handleError = () => {
    if (imgSrc !== fallbackSrc) {
      setImgSrc(fallbackSrc);
    }
  };

  return (
    <Image
      {...props}
      alt={props.alt || "Image"}
      src={imgSrc}
      onError={handleError}
    />
  );
};

export default CustomImage;