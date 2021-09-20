import React, { useCallback, useState } from 'react';
import Cookies from 'js-cookie';
import { Link } from 'gatsby';

import { Container, Centred, Button } from './styles';

const CookiePolicy = () => {
  const [isVisible, setVisible] = useState(true);
  const handleClick = useCallback(() => {
    Cookies.set('cookie-policy', 'true');
    setVisible(false);
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <Container>
      <Centred>
        This website uses cookies to improve your experience. For more
        information read our&nbsp;
        <Link to="/privacy" target="_blank">
          privacy policy
        </Link>
        &nbsp;&nbsp;<Button onClick={handleClick}>Accept</Button>
      </Centred>
    </Container>
  );
};

export default CookiePolicy;
