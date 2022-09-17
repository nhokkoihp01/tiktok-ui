import classNames from "classnames/bind";
import PropTypes from "prop-types";
import styles from './Menu.module.scss';
import {RiArrowLeftSLine} from 'react-icons/ri';


const cx = classNames.bind(styles)

function Header({title, onBack }) {

    return (
        <header className={cx('header')}>
            <button
                className={cx('back-btn')}
                onClick={onBack}
            >
                <RiArrowLeftSLine className={cx('icon-back')}/>
            </button>
            <h4 className={cx('header-title')}>{title}</h4>

        </header>

    );
}
Header.prototype = {
    title: PropTypes.string.isRequired,
    onBack: PropTypes.func.isRequired,

}

export default Header;