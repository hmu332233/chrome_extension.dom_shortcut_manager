import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './MainApp.scss';

import useDomPathWhenClick from 'hooks/useDomPathWhenClick';
import useCustomEvent from 'hooks/useCustomEvent';

function MainApp(props) {
  const [domPath] = useDomPathWhenClick({ excepts: ['#dom_shortcut_management_app'] });
  const [customEvent, trigger] = useCustomEvent('aaa', domPath);
  return (
    <div className={styles.MainApp}>
      <div>{domPath}</div>
      <div>
        <button onClick={trigger}>저장</button>
      </div>
    </div>
  );
}

MainApp.propTypes = {};
MainApp.defaultProps = {};

export default MainApp;
