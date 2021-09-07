import React from 'react';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faPlusSquare, faSignOutAlt, faUserCog } from '@fortawesome/free-solid-svg-icons'
import { useAuth } from '../../lib/auth';
import './AdminSidebar.css'

const AdminSidebar = () => {
    const {signOut} = useAuth();

    return (


        <SideNav
            onSelect={(selected) => {
                // Add your code here
            }}
        >
            <SideNav.Toggle />
            <SideNav.Nav defaultSelected="admin">
                <NavItem eventKey="home">
                    <NavIcon>
                        <Link to="/"><FontAwesomeIcon icon={faHome} style={{ fontSize: '1.75em' }} /></Link>
                    </NavIcon>
                    <NavText>
                        <Link to="/">Home</Link>
                    </NavText>
                </NavItem>
                <NavItem eventKey="admin">
                    <NavIcon>
                        <Link to="/admin/addAdmin"><FontAwesomeIcon icon={faUserCog} style={{ fontSize: '1.75em' }} /></Link>
                    </NavIcon>
                    <NavText>
                        <Link to="/admin/addAdmin">Add Admin</Link>
                    </NavText>
                </NavItem>
                <NavItem eventKey="news">
                    <NavIcon>
                        <Link to="/admin/addNews"><FontAwesomeIcon icon={faPlusSquare} style={{ fontSize: '1.75em' }} /></Link>
                    </NavIcon>
                    <NavText>
                        <Link to="/admin/addNews">Add News</Link>
                    </NavText>
                </NavItem>
            </SideNav.Nav>
        </SideNav>

    );
};

export default AdminSidebar;