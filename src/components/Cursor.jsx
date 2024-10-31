// src/components/CustomCursor.jsx
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const CustomCursor = () => {
  useGSAP(() => {

    const follower = document.querySelector('.cursor-follower');

    gsap.set(follower, { xPercent: -50, yPercent: -50 });

    const moveCursor = (dets) => {

      gsap.to(follower, { 
        duration: 1, 
        x: dets.x, 
        y: dets.y,
    ease: 'back.out' });
    };

    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <>
      <div className="cursor-follower"></div>
    </>
  );
};

export default CustomCursor;