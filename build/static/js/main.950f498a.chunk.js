(this.webpackJsonpinstragram_clone=this.webpackJsonpinstragram_clone||[]).push([[0],{51:function(e,t,a){},52:function(e,t,a){},57:function(e,t,a){},62:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(5),s=a(2),i=a.n(s),c=a(16),o=a.n(c),r=(a(51),a(13)),u=a(87),l=a(89),m=a(88),p=(a(52),a(90)),d=a(21),j=d.a.initializeApp({apiKey:"AIzaSyCAStJFq_y_gmRdlTP13n2StJj1_QeLVPw",authDomain:"instragram-41242.firebaseapp.com",databaseURL:"https://instragram-41242.firebaseio.com",projectId:"instragram-41242",storageBucket:"instragram-41242.appspot.com",messagingSenderId:"971697335251",appId:"1:971697335251:web:4c3c2f60d4213b43441d26",measurementId:"G-LGKZE214FS"}).firestore(),b=d.a.auth(),g=d.a.storage(),f=(a(57),function(e){var t=Object(s.useState)([]),a=Object(r.a)(t,2),i=a[0],c=a[1],o=Object(s.useState)(""),u=Object(r.a)(o,2),b=u[0],g=u[1];Object(s.useEffect)((function(){var t;return e.postId&&(t=j.collection("posts").doc(e.postId).collection("comment").orderBy("timestamp","docs").onSnapshot((function(e){c(e.docs.map((function(e){return e.data()})))}))),function(){t()}}),[e.postId]);return Object(n.jsxs)("div",{className:"post",children:[Object(n.jsxs)("div",{className:"post__header",children:[Object(n.jsx)(p.a,{className:"post__avatar",alt:e.username,src:"https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png"}),Object(n.jsx)("h3",{children:"Username"})]}),Object(n.jsx)("img",{className:"post__image",src:e.image,alt:"avatorImage"}),Object(n.jsxs)("h4",{className:"post__text",children:[" ",Object(n.jsx)("strong",{children:e.username})," ",e.caption," "]}),Object(n.jsx)("div",{className:"post__comments",children:i.map((function(e){return Object(n.jsxs)("p",{children:[Object(n.jsx)("b",{children:e.username}),e.text]},e.text)}))}),e.user&&Object(n.jsxs)("form",{className:"post_commentBox",children:[Object(n.jsx)(l.a,{className:"post__input",type:"text",placeholder:"Add a comment ...",value:b,onChange:function(e){return g(e.target.value)}}),Object(n.jsx)(m.a,{className:"post__button",disabled:!b,type:"submit",onClick:function(t){t.preventDefault(),j.collection("posts").doc(e.postId).collection("comment").add({text:b,username:e.user.displayName,timestamp:d.a.firestore.FieldValue.serverTimestamp()})},children:"Post"})]})]})}),h=a(86),O=(a(62),function(e){var t=Object(s.useState)(""),a=Object(r.a)(t,2),i=a[0],c=a[1],o=Object(s.useState)(0),u=Object(r.a)(o,2),p=u[0],b=u[1],f=Object(s.useState)(null),h=Object(r.a)(f,2),O=h[0],x=h[1];return Object(n.jsxs)("div",{className:"imageUplode",children:[Object(n.jsx)("progress",{className:"imageUplode__progressbar",value:p,max:"100"}),Object(n.jsx)(l.a,{type:"text",placeholder:"Enter a caption...",value:i,onChange:function(e){return c(e.target.value)}}),Object(n.jsx)(l.a,{type:"file",onChange:function(e){e.target.files[0]&&x(e.target.files[0])}}),Object(n.jsx)(m.a,{onClick:function(){g.ref("images/".concat(O.name)).put(O).on("state_changed",(function(e){var t=Math.round(e.bytesTransferred/e.totalBytes*100);b(t)}),(function(e){console.log(e),alert(e.message)}),(function(){g.ref("images").child(O.name).getDownloadURL().then((function(t){j.collection("posts").add({timestamp:d.a.firestore.FieldValue.serverTimestamp(),caption:i,imageUrl:t,username:e.username}),b(0),c(""),x(null)}))}))},children:"Uplode"})]})}),x=a(42);function v(){return{top:"".concat(50,"%"),left:"".concat(50,"%"),transform:"translate(-".concat(50,"%, -").concat(50,"%)")}}var _=Object(h.a)((function(e){return{paper:{position:"absolute",width:400,backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}}}));var q=function(){var e=_(),t=Object(s.useState)(v),a=Object(r.a)(t,1)[0],i=Object(s.useState)([]),c=Object(r.a)(i,2),o=c[0],p=c[1],d=Object(s.useState)(!1),g=Object(r.a)(d,2),h=g[0],q=g[1],w=Object(s.useState)(!1),N=Object(r.a)(w,2),S=N[0],y=N[1],C=Object(s.useState)(""),I=Object(r.a)(C,2),k=I[0],E=I[1],U=Object(s.useState)(""),A=Object(r.a)(U,2),P=A[0],L=A[1],B=Object(s.useState)(""),R=Object(r.a)(B,2),D=R[0],T=R[1],F=Object(s.useState)(null),J=Object(r.a)(F,2),V=J[0],z=J[1];return Object(s.useEffect)((function(){var e=b.onAuthStateChanged((function(e){e?(console.log(e),z(e)):z(null)}));return function(){e()}})),Object(s.useEffect)((function(){j.collection("posts").orderBy("timestamp","desc").onSnapshot((function(e){p(e.docs.map((function(e){return{id:e.id,post:e.data()}})))}))}),[]),Object(n.jsxs)("div",{className:"app",children:[Object(n.jsx)(u.a,{open:h,onClose:function(){return q(!1)},children:Object(n.jsx)("div",{style:a,className:e.paper,children:Object(n.jsxs)("form",{className:"app__signup",children:[Object(n.jsx)("center",{children:Object(n.jsx)("img",{className:"app_headerImage",src:"https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png",alt:"instragramImage"})}),Object(n.jsx)(l.a,{placeholder:"Username",type:"text",value:D,onChange:function(e){return T(e.target.value)}}),Object(n.jsx)(l.a,{placeholder:"Email",type:"text",value:k,onChange:function(e){return E(e.target.value)}}),Object(n.jsx)(l.a,{placeholder:"Password",type:"text",value:P,onChange:function(e){return L(e.target.value)}}),Object(n.jsx)(m.a,{onClick:function(e){e.preventDefault(),b.createUserWithEmailAndPassword(k,P).then((function(e){return e.user.updateProfile({displayName:D})})).catch((function(e){return alert(e.message)}))},children:"Sign Up"})]})})}),Object(n.jsx)(u.a,{open:S,onClose:function(){return y(!1)},children:Object(n.jsx)("div",{style:a,className:e.paper,children:Object(n.jsxs)("form",{className:"app__signup",children:[Object(n.jsx)("center",{children:Object(n.jsx)("img",{className:"app_headerImage",src:"https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png",alt:"instragramImage"})}),Object(n.jsx)(l.a,{placeholder:"Email",type:"text",value:k,onChange:function(e){return E(e.target.value)}}),Object(n.jsx)(l.a,{placeholder:"Password",type:"text",value:P,onChange:function(e){return L(e.target.value)}}),Object(n.jsx)(m.a,{onClick:function(e){e.preventDefault(),b.signInWithEmailAndPassword(k,P).catch((function(e){return alert(e.message)})),y(!1)},children:"Sign In"})]})})}),Object(n.jsxs)("div",{className:"app_header",children:[Object(n.jsx)("div",{className:"app__image",children:Object(n.jsx)("img",{className:"app_headerImage",src:"https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png",alt:"instragramImage"})}),V?Object(n.jsx)(m.a,{onClick:function(){return b.signOut()},children:"LogOut"}):Object(n.jsxs)("div",{className:"app__loginContainer",children:[Object(n.jsx)(m.a,{onClick:function(){return y(!0)},children:"Sign In"}),Object(n.jsx)(m.a,{onClick:function(){return q(!0)},children:"SignUp"})]})]}),Object(n.jsxs)("div",{className:"app_posts",children:[Object(n.jsx)("div",{className:"app__postLeft",children:o.map((function(e){var t=e.id,a=e.post;return Object(n.jsx)(f,{postId:t,user:V,username:a.username,caption:a.caption,image:a.imageUrl},t)}))}),Object(n.jsxs)("div",{className:"app__postRight",children:[Object(n.jsx)(x.a,{url:"https://www.instagram.com/p/B_uf9dmAGPw/",clientAccessToken:"123|456",maxWidth:320,hideCaption:!1,containerTagName:"div",protocol:"",injectScript:!0,onLoading:function(){},onSuccess:function(){},onAfterRender:function(){},onFailure:function(){}}),Object(n.jsx)("div",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis facere autem odio, sed tempora assumenda eius, at consequuntur repudiandae ipsam accusantium inventore voluptatem excepturi magnam! Quisquam itaque dolorem consectetur tempore accusantium id cum atque aliquam quo mollitia cumque nobis ipsa, sit facilis necessitatibus! Cumque, amet quaerat numquam quod beatae rem! In saepe qui molestias nemo rem maiores iste, numquam voluptates dolorum. Cupiditate perferendis tenetur sit hic. Aut, quisquam! Dolor cum odio voluptatum, repellendus aut doloremque quibusdam? Omnis vitae unde quas eaque voluptatem quo quam quisquam recusandae aliquam, debitis tenetur praesentium similique temporibus facilis, repudiandae obcaecati quos autem! Maxime tempore deleniti laborum, recusandae corrupti repudiandae asperiores. Expedita doloremque alias, veritatis maxime exercitationem cum ratione pariatur reprehenderit deleniti eligendi autem corrupti animi nostrum architecto eos ipsum ab quidem consequuntur ipsa fuga voluptatibus? Nesciunt necessitatibus id exercitationem suscipit facere eligendi iure molestias, soluta quo quae ducimus sapiente atque minima voluptatum, sint distinctio nobis. Quas unde molestiae cupiditate ipsam soluta non, doloremque qui expedita obcaecati earum repellat laborum eligendi. Est similique aperiam pariatur doloremque. Voluptas aliquam tenetur fugit, eius sequi doloremque quasi officiis consectetur totam perspiciatis sint a ipsam est minima suscipit optio maiores nostrum ipsum labore animi assumenda. Repellendus neque repellat autem nobis!"})]})]}),(null===V||void 0===V?void 0:V.displayName)?Object(n.jsx)(O,{username:V.displayName}):Object(n.jsx)("h3",{children:"Sorry you need to login to upload"})]})};o.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(q,{})}),document.getElementById("root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.950f498a.chunk.js.map