import { CSSProperties } from "react";

export interface StylesDictionary {
    [Key: string]: CSSProperties;
}

export const style: StylesDictionary = {
    loginPage: {
        marginLeft: "150px",
        marginRight: "100px",
        marginTop: "100px",
        background: "#FFFFFF 0% 0% no-repeat padding-box",
        width: "1000px",
        height: "600px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    payteckLogoPng: {
        marginTop: "40px",
        marginLeft: "200px",
        width: "100px",
        height: "40px"
    },
    bankDetailPaytackLogo:{
        marginTop: "150px",
        marginLeft: "200px",
        width: "100px",
        height: "40px"
    },
    welcome: {
        marginLeft: "150px",
        marginTop: "24px"
    },
    forgotPin: {
        marginLeft: "70px",
        marginTop: "24px"
    },
    inputBox: {
        width: "284px",
        marginLeft: "0px"
    },
    checkBoxStyle: {
        marginLeft: "0px",
        marginTop: "20px"
    },
    signinButton: {
        background: "#2BC5B4 0% 0% no-repeat padding-box",
        border: "1px solid #DDDDDD",
        borderRadius: "4px",
        opacity: 1,
        color: "white",
        width: '185px',
        height: '50px',
        marginLeft: "180px",
        textAlign: 'center',
        marginTop: '20px'
    },
    cancelButton: {
        background: "white",
        border: "0px",
        borderRadius: "4px",
        opacity: 1,
        color: "#646D82",
        width: '185px',
        height: '50px',
        marginLeft: "180px",
        textAlign: 'center',
        marginTop: '20px'
    },
    setPin:{
        height: '50%',
         width: '100%',
          marginTop: '25%',
           marginBottom: '25%',
           borderRight:'1px solid #646D82 '
    },

    imgGrid: {
        marginLeft: "0px",
        marginTop: "10px"
    },
    businessLogo: {
        marginLeft: "40px",
        fontSize: "10px"
    },
    RegistrationBox: {
        width: "190px",
        marginLeft: "45px"
    },
    businessAddress: {
        width: '430px',
        marginLeft: '45px',
        marginTop: '16px'
    },
    inputWidth: {
        width: '190px'
    },
    termsTrade: {
        marginLeft: '45px',
        marginTop: '20px'
    },
    signInText: {

        textAlign: 'center',
        font: "normal normal normal 15px/24px ProximaNova",
        letterSpacing: "0px",
        color: "black",
        marginTop: '20px'
    },
    text: {
        position: 'absolute',
        zIndex: 2,
        color: 'white',
        top: '12%',
        left: '8%',
        fontSize: '35px',
        width: '80%',
        fontWeight: 'bold'
    },
    rightDiv: {
        position: 'relative',
        zIndex: 1,
        height: '100%',

    },
    img: {
        position: 'absolute'
    },
};