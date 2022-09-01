import React, {useEffect, useState} from 'react';
import styles from './Header.module.scss';
import classNames from "classnames/bind";
import images from '~/assets/images';
import {FiSearch} from 'react-icons/fi';
import {IoIosCloseCircle} from 'react-icons/io';
import {AiOutlineLoading3Quarters} from 'react-icons/ai';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import {Wrapper as PopperWrapper} from "~/components/Layout/Popper";
import AccountItem from "~/components/Layout/components/AccountItem";
import Button from "~/components/Button";
import {AiOutlineLogin} from 'react-icons/ai';


const cx = classNames.bind(styles);

function Header(props) {

    const [searchResult, setSearchReuslt] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSearchReuslt([])
        }, 0)
    })
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="tiktok"/>
                </div>
                <Tippy
                    interactive
                    visible={searchResult.length > 0}
                    render={attrs => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>Account</h4>
                                <AccountItem/>
                                <AccountItem/>
                                <AccountItem/>
                                <AccountItem/>
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input type="text" placeholder='Search account and videos' spellCheck={false}/>
                        <button className={cx('clear')}>
                            <IoIosCloseCircle/>
                        </button>
                        <AiOutlineLoading3Quarters className={cx('loading')}/>
                        <button className={cx('search-btn')}>
                            <FiSearch/>
                        </button>
                    </div>
                </Tippy>

                <div className={cx('action')}>
                    <Button text target='_blank'>Upload</Button>
                    <Button  outline className={cx('customer-login')}
                            onClick={() => alert('hello')} target='_blank'>Login</Button>

                </div>


            </div>

        </header>

    );
}

export default Header;