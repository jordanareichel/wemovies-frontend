import React from 'react';

import ImageNext from 'next/image';

import { ImageTypes } from './Image.types';

export const Image: React.FC<ImageTypes> = props => {
  const myLoader = ({ src }) => {
    return src;
  };

  return <ImageNext unoptimized loader={myLoader} {...props} />;
};

Image.defaultProps = {
  alt: 'image',
};
