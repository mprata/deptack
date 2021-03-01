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
        letterSpacing: '1.4px'
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
       
    },
    checkBoxStyle: {
        marginLeft: "-30px",
        marginTop: "10px"
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
        width: '150px',
        height: '40px',
        marginLeft:'50%',
        marginTop: '200px'
    },

};