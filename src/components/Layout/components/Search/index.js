import React, {useEffect, useRef, useState} from 'react';
import Tippy from '@tippyjs/react/headless';
import {Wrapper as PopperWrapper} from "~/components/Layout/Popper";
import AccountItem from "~/components/Layout/components/AccountItem";
import {IoIosCloseCircle} from "react-icons/io";
import classNames from "classnames/bind";
import styles from "./Search.module.scss";
import {SearchIcon} from "~/components/Icon/Icon";
import {AiOutlineLoading3Quarters} from "react-icons/ai";

const cx = classNames.bind(styles);

function Search(props) {
    const [searchValue, setSearchValue] = useState('');
    const handleInput = (e) => {
        setSearchValue(e.target.value);
    }
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

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
        if (!searchValue.trim()) {
            setSearchResult([])
            return;
        }
        setLoading(true);
        fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(searchValue)}&type=less`)
            .then(res => res.json())
            .then(res => {
                setSearchResult(res.data);
                setLoading(false)
            })
            .catch(() => {
                setLoading(false);
            })
    }, [searchValue])
    return (
        <Tippy
            interactive
            visible={showResult && searchResult.length > 0}
            onClickOutside={handleHideResult}
            render={attrs => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx('search-title')}>Account</h4>
                        {searchResult.map((result) => {
                            return (
                                <AccountItem key={result.id} data={result}/>
                            )
                        })}

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
                {!!searchValue && !loading && (
                    <button className={cx('clear')}
                            onClick={handleClear}

                    >
                        <IoIosCloseCircle/>
                    </button>
                )}
                {loading && (<AiOutlineLoading3Quarters className={cx('loading')}/>)}
                <button className={cx('search-btn')}>
                    <SearchIcon/>
                </button>
            </div>
        </Tippy>
    );
}

export default Search;