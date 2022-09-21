import React from 'react';
import classNames from "classnames/bind";
import PropTypes from "prop-types";

import styles from './SuggestedAccounts.module.scss';
import AccountItem from "~/components/SuggestedAccounts/AccountItem";

const cx = classNames.bind(styles);
function SuggestedAccounts({label}) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>
            <AccountItem/>
            <AccountItem/>
            <AccountItem/>
            <AccountItem/>
            <p className={cx('more-btn')}>See all</p>
        </div>
    );
}
SuggestedAccounts.prototype ={
    label: PropTypes.string.isRequired,

}

export default SuggestedAccounts;
