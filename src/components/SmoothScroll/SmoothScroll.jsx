import { useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/src/locomotive-scroll.scss';

const SmoothScroll = ({ children }) => {
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]'),
      smooth: true,
      lerp: 0.1, // Ajusta la suavidad del scroll
    });

    return () => {
      if (scroll) scroll.destroy(); // Limpieza al desmontar el componente
    };
  }, []);

  return <div data-scroll-container>{children}</div>;
};

export default SmoothScroll;
