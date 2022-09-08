import React, {useEffect, useRef, useState} from 'react';
import Tippy from '@tippyjs/react/headless';
import {Wrapper as PopperWrapper} from "~/components/Layout/Popper";
import AccountItem from "~/components/Layout/components/AccountItem";
import {IoIosCloseCircle} from "react-icons/io";
import {AiOutlineLoading3Quarters} from "react-icons/ai";
import classNames from "classnames/bind";
import styles from "./Search.module.scss";
import {SearchIcon} from "~/components/Icon/Icon";

const cx = classNames.bind(styles);

function Search(props) {
    const [searchValue, setSearchValue] = useState('');
    const handleInput = (e) => {
        setSearchValue(e.target.value);
    }
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);

    const inputRef = useRef();
    const handleClear = () => {
        setSearchValue('');
        inputRef.current.focus();
        setSearchResult([]);
    }
    const handleHideResult = () => {
        setShowResult(false);
    }
    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1, 2, 3])
        }, 0)
    }, [])
    return (
        <Tippy
            interactive
            visible={showResult && searchResult.length > 0}
            onClickOutside={handleHideResult}
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
                <input type="text"
                       placeholder='Search account and videos'
                       spellCheck={false}
                       value={searchValue}
                       onChange={handleInput}
                       ref={inputRef}
                       onFocus={() => setShowResult(true)}
                />
                {!!searchValue && (
                    <button className={cx('clear')}
                            onClick={handleClear}

                    >
                        <IoIosCloseCircle/>
                    </button>
                )}
                {/*<AiOutlineLoading3Quarters className={cx('loading')}/>*/}
                <button className={cx('search-btn')}>
                    <SearchIcon/>
                </button>
            </div>
        </Tippy>
    );
}

export default Search;