import { CSSProperties } from "react";

export interface StylesDictionary{
    [Key: string]: CSSProperties;
} 

export const style: StylesDictionary = {
    loginPage: {
        marginLeft: "20%",
        marginRight: "10%",
        marginTop: "0%",
        background: "#FFFFFF 0% 0% no-repeat padding-box",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    rightDiv: {
        position: "relative",
        zIndex: 1,
        height: '100%'
    },
    img: {
        position: 'absolute'
    },
    text: {
        position: 'absolute',
        zIndex: 2,
        color: 'white',
        top: '12%',
        left: '8%',
        width: '80%'
    },
    payteckLogoPng: {
        marginTop: "150px",
        marginLeft: "30%",
        width: "158px",
        height: "50px"
    },
    welcome: {
        marginLeft: "22%",
        marginTop: "26px",
        font:'normal normal normal 16px/24px ProximaNova'
    },
    inputBox: {
        width: "305px",
        marginLeft: "20%",
        marginTop: '10px'
    },
    checkBoxStyle: {
        marginLeft: "19%",
        marginTop: "20px"
    },
    signinButton: {
        background: "#2BC5B4 0% 0% no-repeat padding-box",
        border: "1px solid #DDDDDD",
        borderRadius: "4px",
        opacity: 1,
        color: "white",
        marginLeft: "42%",
        width: '130px',
        height:'50px',
        paddingTop:'12px',
       font:'normal normal normal 16px/25px Avenir'
    },
    signupButton: {
        background: "white",
        border: "1px solid #2BC5B4",
        borderRadius: "4px",
        opacity: 1,
        marginLeft: "-30px",
        height:'50px',
        paddingTop:'12px',
        font:'normal normal normal 16px/25px Avenir'
    }
};