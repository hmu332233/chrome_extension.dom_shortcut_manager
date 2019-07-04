import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './MainApp.scss';

import useDomPathWhenClick from 'hooks/useDomPathWhenClick';

function MainApp(props) {
  const [domPath] = useDomPathWhenClick();
  return (
    <div className={styles.MainApp}>
      {domPath}
    </div>
  );
}

MainApp.propTypes = {
};
MainApp.defaultProps = {
};

export default MainApp;