import React from 'react';
import classNames from "classnames/bind";
import PropTypes from "prop-types";
import Avatar from "antd/es/avatar/avatar";

import styles from './AccountPreview.module.scss';
import Image from '~/assets/images/107175_circle_facebook_icon.png';
import Button from "~/components/Button";
import {BsCheckCircleFill} from "react-icons/bs";

const cx = classNames.bind(styles);

function AccountPreview(props) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <Avatar shape='circle' size={44} src={Image}/>
                <Button className={cx('follow-btn')} primary>Follow</Button>
            </div>
            <div className={cx('body')}>
                <p className={cx('nickname')}>huyminhnguyen@
                    <strong className={cx('check')}>
                        <BsCheckCircleFill/>
                    </strong>
                </p>
                <p className={cx('name')}>Nguyen Minh Huy</p>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>
                        8.2M
                    </strong>
                    <span className={cx('label')}>
                        Followers
                    </span>
                    <strong className={cx('value')}>
                        8.2M
                    </strong>
                    <span className={cx('label')}>
                        Followers
                    </span>
                </p>

            </div>

        </div>
    );
}

AccountPreview.prototype = {}

export default AccountPreview;
