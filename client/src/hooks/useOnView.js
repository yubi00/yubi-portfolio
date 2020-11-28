import { useRef, useEffect, useState } from 'react';

const useOnView = (options) => {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry], observer) => {
      setVisible(entry.isIntersecting);
    }, options);
    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        // eslint-disable-next-line
        observer.unobserve(ref.current);
      }
    };
  }, [ref, options]);

  return {
    ref,
    visible
  };
};

export default useOnView;
