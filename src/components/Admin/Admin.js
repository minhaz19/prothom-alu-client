import React from 'react';
import { Route, Switch } from 'react-router';
import AddAdmin from '../AddAdmin/AddAdmin';
import AddNews from '../AddNews/AddNews';
import AdminSidebar from '../AdminSidebar/AdminSidebar';


const Admin = () => {
    return (
        <div>
            <AdminSidebar></AdminSidebar>
            <Switch>
                <Route  exact path="/admin/addAdmin">
                    <AddAdmin></AddAdmin>
                </Route>
                <Route path="/admin/addNews">
                    <AddNews ></AddNews>
                </Route>
            </Switch>
        </div>
    );
};

export default Admin;