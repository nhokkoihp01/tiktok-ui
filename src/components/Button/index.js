import React from 'react';
import classNames from "classnames/bind";
import styles from './Button.module.scss';
import {Link} from "react-router-dom";
import PropTypes from "prop-types";


const cx = classNames.bind(styles);

function Button({
                    to,
                    href,
                    onClick,
                    text,
                    large,
                    disable,
                    outline = false,
                    small, children,
                    primary = false,
                    rounded = false,
                    className,
                    leftIcon,
                    rightIcon,
                    ...passProps
                }) {
    let Comp = 'button';
    const classes = cx('wrapper', {
        primary,
        outline,
        small,
        large,
        text,
        disable,
        rounded,
        leftIcon,
        rightIcon,
        [className]: className,

    })
    const props = {
        onClick,
        ...passProps
    }
    if (disable) {
        // delete  props.onClick;
        Object.keys(props).forEach(key => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        })
    }
    if (to) {
        props.to = to;
        Comp = Link
    } else if (href) {
        props.href = href;
        Comp = 'a'
    }

    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}

Button.prototype = {
    to: PropTypes.string,
    href: PropTypes.string,
    onClick: PropTypes.func,
    text: PropTypes.bool,
    large: PropTypes.bool,
    disable: PropTypes.bool,
    outline: PropTypes.bool,
    small: PropTypes.bool,
    children: PropTypes.node.isRequired,
    primary: PropTypes.bool,
    rounded: PropTypes.bool,
    className: PropTypes.string,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
}

export default Button;