"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[186],{12193:(e,t,s)=>{s.d(t,{A:()=>z});var o=s(36665),a=s(4701),n=s(73929),r=s(6283),i=s(15648),d=s(40484),l=s(16773),c=s(44767),u=s(2772),p=s(51690),h=s(68519),g=s(42061),m=s(78264),x=s(79632),A=s(35708),f=s(51950),y=s(73668),b=s(11775);const w=y.A.create({container:{backgroundColor:b.A.white},Box:{height:300,width:"100%",backgroundColor:b.A.loginBackground,paddingTop:0},inpbox:{flex:1,marginTop:"10%",alignItems:"center"},img:{height:"100%",width:"100%"},head:{fontFamily:"Poppins_800ExtraBold",fontSize:32,textAlign:"center",marginTop:25,color:b.A.primary},input:{backgroundColor:b.A.loginBackground,color:b.A.lightBlack,paddingVertical:10,paddingHorizontal:20,borderRadius:40,marginBottom:20,width:"80%",fontFamily:"Poppins_400Regular"},button:{alignItems:"center",justifyContent:"center",paddingVertical:10,width:"80%",borderRadius:40,elevation:3,backgroundColor:b.A.primary},btn:{fontSize:16,color:b.A.white,fontFamily:"Poppins_500Medium"},forgot:{color:b.A.primary,fontFamily:"Poppins_500Medium",fontSize:16,marginTop:15},modal:{flex:1,backgroundColor:"rgba(0,0,0,0.5)",alignItems:"center",justifyContent:"center"},modalBox:{height:140,width:"90%",borderRadius:15,backgroundColor:b.A.white,padding:15},modalContact:{display:"flex",flexDirection:"row",paddingHorizontal:10,paddingVertical:5},modalContactIcon:{color:b.A.lightBlack},modalContactText:{fontFamily:"Poppins_400Regular",fontSize:14,color:b.A.lightBlack,marginLeft:10},modalHead:{fontSize:16,textAlign:"center",fontFamily:"Poppins_500Medium",color:b.A.black,marginBottom:10}});var j=s(60397);const v=({visible:e,setShowModal:t})=>{const s="0782033555",o="Wizard@gmail.com";return(0,j.jsx)(m.A,{transparent:!0,visible:e,animationType:"fade",onRequestClose:()=>t(!1),children:(0,j.jsx)(i.A,{activeOpacity:1,onPressOut:()=>{t(!1)},style:w.modal,children:(0,j.jsx)(f.A,{children:(0,j.jsxs)(n.A,{style:w.modalBox,children:[(0,j.jsx)(r.A,{style:w.modalHead,children:"Please contact your administrator"}),(0,j.jsxs)(A.A,{onPress:()=>x.A.openURL(`tel:${s}`),style:w.modalContact,children:[(0,j.jsx)(h.g,{style:w.modalContactIcon,icon:g.R$2,size:18}),(0,j.jsx)(r.A,{style:w.modalContactText,children:s})]}),(0,j.jsxs)(A.A,{onPress:()=>x.A.openURL(`mailto:${o}?subject=Forgot Password&body=I've forgot password of Attende and I am unable to login`),style:w.modalContact,children:[(0,j.jsx)(h.g,{style:w.modalContactIcon,icon:g.y_8,size:18}),(0,j.jsx)(r.A,{style:w.modalContactText,children:o})]})]})})})})};var C=s(64950),P=s(93715),k=s(68315);const I={student:{password:"123",role:"student"},student2:{password:"pass2",role:"student"},student3:{password:"pass3",role:"student"},student4:{password:"pass4",role:"student"},student5:{password:"pass5",role:"student"},student6:{password:"pass6",role:"student"},student7:{password:"pass7",role:"student"},student8:{password:"pass8",role:"student"},student9:{password:"pass9",role:"student"},student10:{password:"pass10",role:"student"},student11:{password:"pass11",role:"student"},student12:{password:"pass12",role:"student"},student13:{password:"pass13",role:"student"},student14:{password:"pass14",role:"student"},student15:{password:"pass15",role:"student"},teacher:{password:"pass",role:"teacher"}},z=({navigation:e,role:t})=>{const[h,g]=(0,o.useState)(null),[m,x]=(0,o.useState)(null),[A,f]=(0,o.useState)(!1),y=async(e,t)=>{await k.Oi(e,t)};return(0,j.jsx)(c.A,{behavior:"height",style:{flex:1},children:(0,j.jsx)(u.A,{style:w.container,children:(0,j.jsxs)(a.A,{children:[(0,j.jsxs)(n.A,{style:w.Box,children:["student"===t&&(0,j.jsx)(d.A,{style:w.img,source:s(83742)}),"teacher"===t&&(0,j.jsx)(d.A,{style:w.img,resizeMode:"contain",source:s(70445)})]}),(0,j.jsxs)(r.A,{style:w.head,children:["Login as a ",t]}),(0,j.jsxs)(n.A,{style:w.inpbox,children:[(0,j.jsx)(l.A,{style:w.input,placeholder:"Username",onChangeText:g,value:h,autoCapitalize:"none"}),(0,j.jsx)(l.A,{style:w.input,onChangeText:x,value:m,secureTextEntry:!0,placeholder:"Password"}),(0,j.jsx)(i.A,{style:w.button,onPress:async()=>{if(!h||!m)return void p.A.alert("Empty fields","Please fill out all fields",[{text:"OK"}]);if(I[h]&&I[h].password===m)return I[h].role!==t?void p.A.alert("Access Denied","You are not authorized for this role",[{text:"OK"}]):(y("user",JSON.stringify(Object.assign({username:h},I[h]))),void e.reset({index:0,routes:[{name:"student"===t?"Calendar":"Teacherhome"}]}));const s=(0,P.H9)(C.db,"users",h);try{const o=await(0,P.x7)(s);if(!o.exists())return void p.A.alert("Invalid credentials","Invalid username or password",[{text:"OK"}]);const a=o.data();if(a.role!==t)return void p.A.alert("Access Denied","You are not authorized for this role",[{text:"OK"}]);if(a.password===m){const s=o.id;y("user",JSON.stringify(Object.assign({},a,{id:s}))),e.reset({index:0,routes:[{name:"student"===t?"Calendar":"Teacherhome"}]})}else p.A.alert("Invalid credentials","Invalid username or password",[{text:"OK"}])}catch(e){console.log("Firebase Error:",e),p.A.alert("Error","Failed to connect. Please check your internet connection.",[{text:"OK"}])}},children:(0,j.jsx)(r.A,{style:w.btn,children:"Sign in"})}),(0,j.jsx)(i.A,{onPress:()=>f(!0),children:(0,j.jsx)(r.A,{style:w.forgot,children:"Forgot password?"})})]}),(0,j.jsx)(v,{visible:A,setShowModal:f})]})})})}},46186:(e,t,s)=>{s.r(t),s.d(t,{default:()=>i}),s(36665);var o=s(2218),a=s(31740),n=s(12193),r=s(60397);const i=function({navigation:e}){let[t]=(0,o.Gl)({Poppins_800ExtraBold:o.Yj,Poppins_500Medium:o.j4,Poppins_100Thin:o.l9});return t?(0,r.jsx)(n.A,{navigation:e,role:"teacher",navv:"Teacherhome"}):(0,r.jsx)(a.A,{})}},64950:(e,t,s)=>{s.d(t,{db:()=>i});var o=s(7908),a=s(93715),n=s(89685);const r=(0,o.Wp)({apiKey:"AIzaSyCV0xbbWzrNMGeFcCSa3bczqtIhnJod3pc",authDomain:"attendsure-7cfb4.firebaseapp.com",projectId:"attendsure-7cfb4",storageBucket:"attendsure-7cfb4.firebasestorage.app",messagingSenderId:"1039623051973",appId:"1:1039623051973:web:a9a6cb9726981483f0eeac",measurementId:"G-P9XJ2M7TDH"}),i=(0,a.aU)(r);(0,n.c7)(r)},70445:(e,t,s)=>{e.exports=s.p+"static/media/teacher.b959c2f11c4efa359ca2.png"},83742:(e,t,s)=>{e.exports=s.p+"static/media/student.c8bc63991c6ac1451f7d.png"}}]);
//# sourceMappingURL=186.9b3f3c5d.chunk.js.map