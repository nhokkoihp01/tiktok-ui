
import Sidebar from './Sidebar'
import React from 'react';
import Header from "~/components/Layout/components/Header";
import styles from './DefaultLayout.module.scss'
import classNames from 'classnames/bind';

const cx = classNames.bind(styles)

function DefaultLayout(props) {
    const {children} = props;
    return (
        <div className={cx('wrapper')}>
            <Header/>
            <div className={cx('container')}>
                <Sidebar/>
                <div className={cx('content')}>
                    {children}
                </div>

            </div>


        </div>
    );
}

export default DefaultLayout;