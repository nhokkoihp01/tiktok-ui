
import React from 'react';
import classNames from 'classnames/bind';
import Sidebar from './Sidebar'
import styles from './DefaultLayout.module.scss'
import Header from "~/layouts/components/Header";

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