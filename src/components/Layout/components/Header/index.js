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
import {FaEllipsisV} from 'react-icons/fa'
import Menu from "~/components/Layout/Popper/Menu";
import {RiEnglishInput} from 'react-icons/ri';
import {BiHelpCircle} from 'react-icons/bi';
import {TbKeyboard} from 'react-icons/tb';


const cx = classNames.bind(styles);
const MENU_ITEMS = [
    {
        icon: <RiEnglishInput/>,
        title: 'English',
    },
    {
        icon: <BiHelpCircle/>,
        title: 'Feedback and help',
        to: '/feedback'
    },
    {
        icon: <TbKeyboard/>,
        title: 'Keyboards shortcuts',

    },
];

function Header(props) {

    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([])
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
                    <Button outline className={cx('customer-login')}
                            target='_blank'>Login</Button>
                    <Menu items={MENU_ITEMS}>
                        <button className={cx('more-btn')}>
                            <FaEllipsisV/>
                        </button>
                    </Menu>

                </div>


            </div>

        </header>

    );
}

export default Header;