import React from 'react';
import classNames from "classnames/bind";
import PropTypes from 'prop-types';
import Avatar from "antd/es/avatar/avatar";

import styles from './Account.module.scss';
import {AiFillCheckCircle} from 'react-icons/ai';
import {Link} from "react-router-dom"


const cx = classNames.bind(styles);

function AccountItem({data}) {
    return (
        <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
            <Avatar shape="circle" size={40} src={data.avatar} alt={data.full_name}/>
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>{data.full_name}</span>
                    {data.tick && (<AiFillCheckCircle className={cx('check-icon')}/>)}
                </h4>
                <span className={cx('username')}>{data.nickname}</span>
            </div>
        </Link>
    );

    AccountItem.prototype = {
        data: PropTypes.object.isRequired
    }
}

export default AccountItem;
