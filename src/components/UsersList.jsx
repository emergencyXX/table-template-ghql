import React from "react";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell/TableCell";
import TableBody from "@material-ui/core/TableBody";
import Pagination from "@material-ui/lab/Pagination/Pagination";
import Container from "@material-ui/core/Container";
import {useStyles} from "../style";
import {useHistory} from "react-router-dom";


const UserList = (props) =>{
    const classes = useStyles();
    const {
        setPage,
        page,
        getUsersEntity,
        itemPerPage,
        getUsers
    } = props;

    let history = useHistory();

    const rowClickHandler = (login) =>{
        history.push(`/${login}`);
    };

    const handleChange = (event, value) => {
        setPage(value);
        switch (event.currentTarget.ariaLabel) {
            case 'Go to next page':
                getUsers({
                    variables: {
                        first: itemPerPage,
                        after: getUsersEntity.data?.search.edges[getUsersEntity.data.search.edges.length - 1].cursor
                    }
                });
                break;
            case 'Go to previous page':
                getUsers({variables: {last: itemPerPage, before: getUsersEntity.data?.search.edges[0].cursor}});
                break;
            default:
                console.log('Unknown action');
        }
    };
    return(
        <Container maxWidth="lg">
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Avatar</TableCell>
                            <TableCell>Login</TableCell>
                            <TableCell>Profile link</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {getUsersEntity.data?.search.edges.map((row, index) => (
                            <TableRow key={index} onClick={()=>rowClickHandler(row.node.login)}>
                                <TableCell component="th" scope="row">
                                    <img src={row.node.avatarUrl} alt="logo"/>
                                </TableCell>
                                <TableCell>
                                    {row.node.login}
                                </TableCell>
                                <TableCell>
                                    <a href={row.node.url}>{row.node.url}</a>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <Pagination
                    count={Math.ceil(getUsersEntity.data?.search.userCount / itemPerPage)}
                    page={page}
                    onChange={handleChange}
                    classes={{ul: classes.pagination}}
                />
            </TableContainer>
        </Container>
    )
};

export default UserList;