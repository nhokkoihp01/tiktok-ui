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
import {BiHelpCircle, BiMessageMinus} from 'react-icons/bi';
import {TbKeyboard} from 'react-icons/tb';
import avatarImage from '../../../../assets/images/107175_circle_facebook_icon.png'
import Avatar from "antd/es/avatar/avatar";
import {BiPaperPlane,BiUser} from 'react-icons/bi'
import {Badge, Tooltip} from "antd";
import {AiOutlineSetting} from 'react-icons/ai';
import {ImCoinPound} from 'react-icons/im';
import {MdOutlineLogout} from 'react-icons/md';


const cx = classNames.bind(styles);
const MENU_ITEMS = [
    {
        icon: <RiEnglishInput/>,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English'
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tieng Viet'
                },
            ]
        }
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
const handleMenuChange = (menuItem) => {
    switch (menuItem.type) {
        case 'language':
            break;
        default:
    }
}
const userMenu = [
    {
        icon: <BiUser/>,
        title: 'View profile',
        to: '/@hoaa'
    },
    {
        icon: <ImCoinPound/>,
        title: 'Get icon',
        to: '/coin'
    },
    {
        icon: <AiOutlineSetting/>,
        title: 'Setting',
        to: '/setting'
    },
    ...MENU_ITEMS,
    {
        icon: <MdOutlineLogout/>,
        title: 'Logout',
        to: '/feedback',
        separate:true,
    },
]


function Header(props) {

    const [searchResult, setSearchResult] = useState([]);
    const currentUser = true;

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

                    {
                        currentUser ?
                            (
                                <>
                                    <Button text>Upload</Button>
                                    <Tooltip mouseLeaveDelay={0.05}
                                             arrowPointAtCenter={true}
                                             placement="bottom"
                                             title='Message'>
                                        <button className={cx('btn-action')}>
                                            <BiPaperPlane/>
                                        </button>
                                    </Tooltip>
                                    <Tooltip
                                        mouseLeaveDelay={0.05}
                                        arrowPointAtCenter={true}
                                        placement="bottom"
                                        title='inbox'>
                                        <Badge count={1000}>
                                            <button className={cx('btn-action')}>
                                                <BiMessageMinus/>
                                            </button>
                                        </Badge>
                                    </Tooltip>


                                </>
                            ) :
                            (
                                <>
                                    <Button text>Upload</Button>
                                    <Button outline className={cx('customer-login')}
                                            target='_blank'>Login</Button>

                                </>
                            )
                    }
                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ?
                            (
                                <div className={cx('avatar-user')}>
                                    <Avatar size={32} src={avatarImage} />
                                </div>
                            ) :
                            (
                                <button className={cx('more-btn')}>
                                    <FaEllipsisV/>
                                </button>
                            )
                        }
                    </Menu>
                </div>

            </div>

        </header>

    );
}

export default Header;