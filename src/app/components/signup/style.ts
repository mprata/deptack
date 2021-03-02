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
        marginLeft: "180px",
        width: "158px",
        height: "50px"
    },
    bankDetailPaytackLogo:{
        marginTop: "120px",
        marginLeft: "150px",
        width: "158px",
        height: "50px"
    },
    resetPinPaytackLogo:{
        marginTop: "80px",
        marginLeft: "180px",
        width: "158px",
        height: "50px"
    },
    welcome: {
        marginLeft: "150px",
        marginTop: "24px",
        font:"normal normal normal 16px ProximaNova",
        color:'#424B54'
    },
    allMostDone: {
        marginLeft: "100px",
        marginTop: "24px",
        font:"normal normal normal 16px ProximaNova",
        color:'#424B54'
    },
    forgotPin: {
        marginLeft: "30px",
        marginTop: "24px",
        font:'normal normal normal 16px/20px ProximaNova'
    },
    resetPin: {
        marginTop: "24px",
        font:'normal normal normal 16px/20px ProximaNova'
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
        font:'normal normal normal 18px/25px Avenir',
        opacity: 1,
        color: "white",
        width: '185px',
        height: '50px',
        marginLeft: "180px",
        textAlign: 'center',
        marginTop: '20px',
        letterSpacing: '1px',
        paddingTop:'12px'
    },
    sendOtpButton: {
        background: "#2BC5B4 0% 0% no-repeat padding-box",
        border: "1px solid #DDDDDD",
        borderRadius: "4px",
        font:'normal normal normal 18px/25px Avenir',
        opacity: 1,
        color: "white",
        width: '185px',
        height: '50px',
        marginLeft: "180px",
        textAlign: 'center',
        marginTop: '50px',
        letterSpacing: '1px',
        paddingTop:'12px'
    },
    verifyButton: {
        background: "#2BC5B4 0% 0% no-repeat padding-box",
        border: "1px solid #DDDDDD",
        borderRadius: "4px",
        font:'normal normal normal 18px/25px Avenir',
        opacity: 1,
        color: "white",
        width: '185px',
        height: '50px',
        marginLeft: "150px",
        textAlign: 'center',
        marginTop: '50px',
        letterSpacing: '1px',
        paddingTop:'12px'
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
           borderRight:'1px solid gainsboro'
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
        width: '435px',
        marginLeft: '45px',
        marginTop: '16px'
    },
    mobileNumber: {
        width: '362px',
        marginLeft: '80px',
        marginTop: '16px'
    },
    resetInput: {
        width: '362px',
        marginLeft: '95px',
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
        
        marginTop: '20px'
    },
    text: {
        position: 'absolute',
        zIndex: 2,
        color: 'white',
        top: '12%',
        left: '8%',
        font:'normal normal 1000 35px Avenir',
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