import React, { useEffect, useState } from 'react';

import Mobile from '../../pages_components/cart/components/mobile';
import Web from '../../pages_components/cart/components/web';

const useDeviceSize = () => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const handleWindowResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    handleWindowResize();
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return [width, height];
};

export default function Cart() {
  const [width] = useDeviceSize();

  const breakpoint = 620;

  console.log(width);

  return <>{width < breakpoint ? <Mobile /> : <Web />}</>;
}
