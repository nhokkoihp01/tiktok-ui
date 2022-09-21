import React from 'react';
import classNames from "classnames/bind";
import PropTypes from "prop-types";
import Tippy from "@tippyjs/react/headless";


import Image from '~/assets/images/107175_circle_facebook_icon.png';
import {BsCheckCircleFill} from 'react-icons/bs';
import styles from './SuggestedAccounts.module.scss';
import Avatar from "antd/es/avatar/avatar";
import {Wrapper as PopperWrapper} from "~/layouts/Popper";
import AccountPreview from "~/components/SuggestedAccounts/AccountPreview";

const cx = classNames.bind(styles);

function AccountItem(props) {

    const renderPreview = (attrs) => (
        <div tabIndex="-1" {...attrs}>
            <PopperWrapper>
               <div className={cx('preview')}>
                   <AccountPreview/>

               </div>
            </PopperWrapper>
        </div>
    )
    return (
        <div>
            <Tippy
                interactive
                delay={[1000, 0]}
                placement='bottom-start'
                offset={[-6,-2]}
                render={renderPreview}
            >
                <div className={cx('account-item')}>
                    <Avatar shape="circle" size={32} src={Image}/>
                    <div className={cx('item-info')}>
                        <p className={cx('nickname')}>huyminhnguyen@
                            <strong className={cx('check')}>
                                <BsCheckCircleFill/>
                            </strong>
                        </p>
                        <p className={cx('name')}>Nguyen Minh Huy</p>

                    </div>
                </div>
            </Tippy>
        </div>
    );
}

AccountItem.prototype = {}
export default AccountItem;