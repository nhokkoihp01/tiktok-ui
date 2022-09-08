import React from 'react';
import classNames from "classnames/bind";
import styles from './Account.module.scss';
import {AiFillCheckCircle} from 'react-icons/ai';
import Avatar from "antd/es/avatar/avatar";

const cx = classNames.bind(styles);

function Index(props) {
    return (
        <div className={cx('wrapper')}>
            <Avatar shape="circle" size={40} src='https://tse4.mm.bing.net/th?id=OIP.Usyp7xWkY_dS8bExUS2X8AHaG4&pid=Api&P=0' />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyen Van A</span>
                    <AiFillCheckCircle className={cx('check-icon')}/>
                </h4>
                <span className={cx('username')}>nguyenvana</span>
            </div>
        </div>
    );
}

export default Index;
