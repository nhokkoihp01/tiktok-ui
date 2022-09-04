import React from 'react';
import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind'

const cx = classNames.bind(styles);

function Sidebar(props) {
    return (
        <div className={cx('wrapper')}>
            <h1>Sidebar page</h1>
        </div>
    );
}

export default Sidebar;