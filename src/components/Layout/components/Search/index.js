import React, {useEffect, useRef, useState} from 'react';
import Tippy from '@tippyjs/react/headless';
import classNames from "classnames/bind";

import {Wrapper as PopperWrapper} from "~/components/Layout/Popper";
import AccountItem from "~/components/Layout/components/AccountItem";
import {IoIosCloseCircle} from "react-icons/io";
import styles from "./Search.module.scss";
import {SearchIcon} from "~/components/Icon/Icon";
import {AiOutlineLoading3Quarters} from "react-icons/ai";
import {useDebounce} from "~/hooks";
import * as searchService from "~/apiServices/searchSerices";


const cx = classNames.bind(styles);

function Search(props) {
    const [searchValue, setSearchValue] = useState('');
    const handleChange = (e) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue);
        }


    }
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);
    const debounced = useDebounce(searchValue, 500);
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
        if (!debounced.trim()) {
            setSearchResult([])
            return;
        }
        const fetchApi = async () => {
            setLoading(true);
            const result = await searchService.search(debounced)
            setSearchResult(result);
            setLoading(false)
        }
        fetchApi()

    }, [debounced])
    return (
        //Using a wrapper <div> tag around the reference element solves
        // this by creating a new parentNode context.
       <div>
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
                          onChange={handleChange}
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
                   <button className={cx('search-btn')}
                           onMouseDown={handleSubmit}
                   >
                       <SearchIcon/>
                   </button>
               </div>
           </Tippy>
       </div>
    );
}

export default Search;