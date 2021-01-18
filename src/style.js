import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    table: {
        minWidth: 700,
        '& thead th': {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        '& tbody tr:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
        '& td input': {
            backgroundColor: 'transparent',
            outline: 'none',
            border: 0,
            '&::-webkit-outer-spin-button,&::-webkit-inner-spin-button': {
                display:'none',
                margin: 0
            },


        }
    },
    pagination: {
        '& > li':{
            display:'none'
        },
        '& > li:first-child,& > li:last-child':{
            display:'block'
        }
    },
    avatar:{
        width: '150px!important',
        height: '150px!important',
        margin:'30px auto'
    }
}));