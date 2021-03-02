import { CSSProperties } from "react";

export interface StylesDictionary {
    [Key: string]: CSSProperties;
}

export const style: StylesDictionary = {
    header: {
        marginTop: '56px',
        textAlign: 'center',
        marginBottom: '0px',
        font: 'normal normal 600 22px/24px ProximaNova',
        letterSpacing: '1.1px',
        color: '#2BC5B4',
    },
    orderOnline: {
        marginTop: '0px',
        color: '#646D82',
        font: 'normal normal normal 14px/24px ProximaNova',
        letterSpacing: '1.4px',
        textAlign: 'center'
    },
    createMenuDiv: {
        background: '#FFFFFF 0% 0% no-repeat padding-box',
       marginRight:'32%',
       display:'flex',
        alignItems:'center',
        justifyContent: 'center',
        marginLeft:'32%',
        marginTop:"10px"
    },
    createMenuImg:{
        width: '217.1px',
        height: '181.7px',
        display:'flex',
        alignItems:'center',
        justifyContent: 'center',
       
      
    },
    createMenuButton: {
        background: "#2BC5B4 0% 0% no-repeat padding-box",
        border: "1px solid #DDDDDD",
        borderRadius: "4px",
        opacity: 1,
        color: "white",
        font:' normal normal normal 18px/25px Avenir',
        width:'185px',
        height:'50px',
        paddingTop:'12px'
       
    },
    checkBoxStyle: {
        marginLeft: "0px",
        marginTop: "10px",
       fontFamily:"ProximaNova",
        color:'#646D82',
        fontWeight:'normal'
        
    },
    addMenuDiv: {
        background: '#FFFFFF 0% 0% no-repeat padding-box',
       marginRight:'32%',
       display:'flex',
       alignItems:'center',
       justifyContent: 'center',
        marginLeft:'32%',
        marginTop:"10px"
    },
    publishButton: {
        background: "#2BC5B4 0% 0% no-repeat padding-box",
        border: "1px solid #DDDDDD",
        borderRadius: "4px",
        opacity: 1,
        color: "white",
        font:' normal normal 100 18px/25px Avenir',
        width:'160px',
        height:'50px',
        marginLeft:'50%',
        marginTop: '200px',
        paddingTop:'12px'
    },

};