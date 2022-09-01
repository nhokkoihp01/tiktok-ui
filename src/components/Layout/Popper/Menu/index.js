import React from 'react';
import {Wrapper as PopperWrapper} from "~/components/Layout/Popper";
import Tippy from "@tippyjs/react/headless";
import classNames from "classnames/bind";
import styles from './Menu.module.scss';
import MenuItem from "~/components/Layout/Popper/Menu/MenuItem";

const cx = classNames.bind(styles)

function Menu({children, items = []}) {
    const renderItems = () => {
      return (
          items.map((item,index)=>(
              <MenuItem key={index} data={item}/>
          ))
      )
    }
    return (
        <Tippy
            interactive
            delay={[0,500]}
            placement='bottom-end'
            render={attrs => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>
                        {renderItems()}
                    </PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;