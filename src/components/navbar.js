import React, { Fragment, useEffect, useRef, useState } from 'react';
import Sticky from './sticky';
import '../components/sticky.css';

export default Navbar => {
  const [isSticky, setSticky] = useState(false);
  const ref = useRef(null);
  const handleScroll = () => {
    if (ref.current) {
      setSticky(ref.current.getBoundingClientRect().top <= 0);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', () => handleScroll);
    };
  }, []);

  return (
    <Fragment>
      <p>Lorem ipsum...</p>
      <div className={`sticky-wrapper${isSticky ? ' sticky' : ''}`} ref={ref}>
        <Sticky />
      </div>
      <p>Lorem ipsum...</p>
    </Fragment>
  );
};