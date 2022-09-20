import React from 'react';
import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind'
import Menu, {MenuItem} from "./Menu";
import config from "~/config";
import {
    HomeIcon,
    UserGroupIcon,
    LiveIcon,
    HomeActiveIcon,
    UserGroupActiveIcon,
    LiveActiveIcon
} from "~/components/Icon";


const cx = classNames.bind(styles);

function Sidebar(props) {
    return (
        <div className={cx('wrapper')}>
            <Menu>
                <MenuItem title='For you' to={config.routes.home} icon={<HomeIcon/>}
                          activeIcon={<HomeActiveIcon/>}/>
                <MenuItem title='Following' to={config.routes.following} icon={<UserGroupIcon/>}
                          activeIcon={<UserGroupActiveIcon/>}/>
                <MenuItem title='Live' to={config.routes.live} icon={<LiveIcon/>}
                          activeIcon={<LiveActiveIcon/>}/>
            </Menu>
        </div>
    );
}

export default Sidebar;