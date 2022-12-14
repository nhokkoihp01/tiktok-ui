import React, {useState} from 'react';
import classNames from "classnames/bind";
import Tippy from "@tippyjs/react/headless";
import PropTypes from "prop-types";

import {Wrapper as PopperWrapper} from "~/layouts/Popper";
import styles from './Menu.module.scss';
import Header from "~/layouts/Popper/Menu/Header";
import MenuItem from "~/layouts/Popper/Menu/MenuItem";


const cx = classNames.bind(styles)
const defaultFn = () => {
}

function Menu({children, items = [], hideOnClick = false, onChange = defaultFn}) {
    const [history, setHistory] = useState([{data: items}]);
    const current = history[history.length - 1];
    const handleResetToFirst = () => {
        setHistory(prevState => prevState.slice(0, 1))
    }
    const handleBack = () => {
        setHistory(prev => prev.slice(0, prev.length - 1)) // cat phan tu so 0 den gan cuoi
    }
    const renderItems = () => {
        return (current.data.map((item, index) => {
                const isParent = !!item.children;// !!convert to true
                return <MenuItem key={index}
                                 data={item}
                                 onClick={() => {
                                     if (isParent) {
                                         setHistory((prev) => [...prev, item.children]);// put cai moi vao
                                     } else {
                                         onChange(item);
                                     }
                                 }}/>
            })

        )
    }
    return (<Tippy

        interactive
        delay={[0, 500]}
        offset={[12, 8]}
        hideOnClick={hideOnClick}
        placement='bottom-end'
        render={attrs => (<div className={cx('menu-list')} tabIndex="-1" {...attrs}>
            <PopperWrapper className={cx('menu-popper')}>
                {history.length > 1 && <Header
                    title={current.title}
                    onBack={handleBack}
                />}
                <div className={cx('menu-body')}>
                    {renderItems()}
                </div>

            </PopperWrapper>
        </div>)}
        onHide={handleResetToFirst}

    >
        {children}
    </Tippy>);
}

Menu.prototype = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array,
    hideOnClick: PropTypes.bool,
    onChange: PropTypes.func,
}

export default Menu;