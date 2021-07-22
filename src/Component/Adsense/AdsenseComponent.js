import React, { useRef, useEffect } from 'react'

import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme)=>({
    root: {
        minWidth: 275,
        marginTop: 70,
        marginBottom: 170,
        alignItems:"center",
        textAlign:"center"
    },
  }));

const AdsenseComponent = () => {

    const isFirstLoad = useRef(true);
    const classes = useStyles();
    useEffect(
        ()=>{
            if (isFirstLoad.current===true) {
                (window.adsbygoogle = window.adsbygoogle || []).push({});
                isFirstLoad.current = false;
            }
        }
    )

    return(
        <Container maxWidth="md">
            <Card className={classes.root}>
                <CardContent>
                    <ins className="adsbygoogle"
                    style={{display:"block"}}
                    data-ad-format="fluid"
                    data-ad-layout-key="-gw-3+1f-3d+2z"
                    data-ad-client="ca-pub-3826338280068687"
                    data-ad-slot="5369240277"></ins>
                </CardContent>
            </Card>
        </Container>
    )

}
export default AdsenseComponent;