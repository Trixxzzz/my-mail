"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[242],{4385:(e,a,n)=>{n.r(a),n.d(a,{default:()=>w});var t=n(4535),o=n(6446),s=n(5865),i=(n(5043),n(3216)),d=n(9120),l=n(697),r=n(6864),c=n(6944),m=n(5473),g=n(579);const h=(0,t.Ay)(o.A)({padding:15}),p=(0,t.Ay)(o.A)({marginLeft:15,width:"100%","& > div":{display:"flex","& > p > span":{fontSize:12,color:"#5E5E5E"}}}),u=(0,t.Ay)(s.A)({margin:"0 50px 0 auto",fontSize:12,color:"#5E5E5E"}),y=(0,t.Ay)(s.A)({fontSize:22,margin:"10px 0 20px 75px",display:"flex"}),f=(0,t.Ay)(o.A)({fontSize:12,backgroundColor:"#ddd",color:"#222",padding:"2px 4px",marginLeft:6,borderRadius:4,alignSelf:"center"}),x=(0,t.Ay)("img")({borderRadius:"50%",width:40,height:40,margin:"5px 10px 0 10px",backgroundColor:"#cccccc"}),w=()=>{const{openDrawer:e}=(0,i.KC)(),{state:a}=(0,i.zy)(),n=null===a||void 0===a?void 0:a.email;if(!n)return(0,g.jsx)(s.A,{children:"Error: Email not found."});const t=(0,c.A)(m.y.moveEmailsToBin);return(0,g.jsxs)(o.A,{style:e?{marginLeft:250}:{width:"100%"},children:[(0,g.jsxs)(h,{children:[(0,g.jsx)(d.A,{onClick:()=>window.history.back(),color:"action",fontSize:"small"}),(0,g.jsx)(l.A,{fontSize:"small",color:"action",style:{marginLeft:40},onClick:()=>(t.call([n._id]),void window.history.back())})]}),(0,g.jsxs)(y,{children:[n.subject,(0,g.jsx)(f,{component:"span",children:"Inbox"})]}),(0,g.jsxs)(o.A,{style:{display:"flex"},children:[(0,g.jsx)(x,{src:r.Fk,alt:"dp"}),(0,g.jsxs)(p,{children:[(0,g.jsxs)(o.A,{children:[(0,g.jsxs)(s.A,{style:{marginTop:10},children:[n.name,(0,g.jsxs)(o.A,{component:"span",children:["\xa0<",n.to,">"]})]}),(0,g.jsxs)(u,{children:[new window.Date(n.date).getDate(),"\xa0",new window.Date(n.date).toLocaleString("default",{month:"long"}),"\xa0",new window.Date(n.date).getFullYear()]})]}),(0,g.jsx)(s.A,{style:{marginTop:20},children:n.body})]})]})]})}},6864:(e,a,n)=>{n.d(a,{Rb:()=>s,Fk:()=>o,_3:()=>t});const t=n.p+"static/media/logo.265d14fd61ca5860cdf5.png",o="https://ssl.gstatic.com/ui/v1/icons/mail/profile_mask2.png",s={inbox:{heading:"Your inbox is empty",subHeading:"Mails that don't appear in other tabs will be shown here."},drafts:{heading:"You don't have any saved drafts.",subHeading:"Saving a draft allows you to keep a message you aren't ready to send yet."},starred:{heading:"No starred messages",subHeading:"Stars let you give messages a special status to make them easier to find. To star a message, click on the star outline beside any message or conversation."},sent:{heading:"No sent messages!",subHeading:"Send one now!"},bin:{heading:"No conversations in Bin.",subHeading:""}}},6944:(e,a,n)=>{n.d(a,{A:()=>i});var t=n(5043),o=n(6213);const s=async(e,a,n)=>await(0,o.A)({method:e.method,url:"".concat("","/").concat(e.endpoint,"/").concat(n),data:a}),i=e=>{const[a,n]=(0,t.useState)(null),[o,i]=(0,t.useState)(""),[d,l]=(0,t.useState)(!1);return{call:async function(a){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";n(null),i(""),l(!0);try{let o=await s(e,a,t);n(o.data)}catch(o){i(o.message)}finally{l(!1)}},response:a,error:o,isLoading:d}}},5473:(e,a,n)=>{n.d(a,{y:()=>t});const t={saveSentEmail:{endpoint:"save",method:"POST"},getEmailFromType:{endpoint:"emails",method:"GET"},saveDraftEmails:{endpoint:"save-draft",method:"POST"},moveEmailsToBin:{endpoint:"bin",method:"POST"},toggleStarredEmail:{endpoint:"starred",method:"POST"},deleteEmail:{endpoint:"delete",method:"DELETE"}}},9120:(e,a,n)=>{var t=n(4994);a.A=void 0;var o=t(n(39)),s=n(579);a.A=(0,o.default)((0,s.jsx)("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20z"}),"ArrowBack")}}]);
//# sourceMappingURL=242.8232ffa4.chunk.js.map