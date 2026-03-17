import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Find the element by the hash.
      // We use a slight timeout to ensure the DOM is ready after a route change.
      setTimeout(() => {
        const element = document.getElementById(hash.replace('#', ''));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // If there's no hash, scroll to top on route change
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}
