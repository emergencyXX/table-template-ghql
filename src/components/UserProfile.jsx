import React from "react";
import {useParams} from "react-router-dom";
import Container from "@material-ui/core/Container";
import Avatar from "@material-ui/core/Avatar";
import {useStyles} from "../style";
import Grid from "@material-ui/core/Grid";

const UserProfile = (props) => {
    let {login} = useParams();
    const {getUsersEntity} = props;
    const classes = useStyles();
    const getCurrentUser = () => getUsersEntity.data?.search.edges.find(item => item.node.login === login);

    return (
        <Container maxWidth="lg">
            <Grid container spacing={3}>
                <Grid item xs={3}>
                    <Avatar className={classes.avatar} alt="Remy Sharp" src={getCurrentUser()?.node.avatarUrl}/>
                </Grid>
                <Grid item xs={9}>
                    <h1>{getCurrentUser()?.node.name}</h1>
                    <p>{getCurrentUser()?.node.bio}</p>
                    <p>Company: {getCurrentUser()?.node.company}</p>
                    <p>Email: {getCurrentUser()?.node.email}</p>
                    <p>Location: {getCurrentUser()?.node.location}</p>
                    <p>Web Site: {getCurrentUser()?.node.websiteUrl}</p>
                </Grid>
            </Grid>
        </Container>
    );

};


export default UserProfile;