import React, {useEffect} from 'react';
import {GET_USERS} from "./queries";
import {useLazyQuery} from '@apollo/client';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import UserList from "./components/UsersList";
import UserProfile from "./components/UserProfile";

export default function CustomizedTables() {
    const [getUsers, getUsersEntity] = useLazyQuery(GET_USERS);
    const [page, setPage] = React.useState(1);
    const itemPerPage = 10;

    useEffect(() => {
        getUsers({variables: {first: itemPerPage}});
    }, []);


    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={() =>
                    <UserList
                        itemPerPage={itemPerPage}
                        getUsersEntity={getUsersEntity}
                        getUsers={getUsers}
                        page={page}
                        setPage={setPage}
                    />
                }/>
                <Route path="/:login" exact component={() =>
                    <UserProfile getUsersEntity={getUsersEntity}/>
                }/>
            </Switch>
        </BrowserRouter>
    );
}