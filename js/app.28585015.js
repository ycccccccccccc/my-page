(function(){"use strict";var e={6307:function(e,t,i){var n=i(5130),o=i(6768);const s={id:"app"},r={id:"section1",style:{padding:"70px",position:"relative"}};function a(e,t,i,n,a,c){const l=(0,o.g2)("MyHeader"),d=(0,o.g2)("MainPage"),u=(0,o.g2)("MyFooter");return(0,o.uX)(),(0,o.CE)("div",s,[(0,o.bF)(l),(0,o.Lk)("div",r,[(0,o.bF)(d)]),(0,o.bF)(u)])}const c={style:{"letter-spacing":"1px"}};function l(e,t,i,n,s,r){const a=(0,o.g2)("AboutMe"),l=(0,o.g2)("MySkills"),d=(0,o.g2)("MyProjects");return(0,o.uX)(),(0,o.CE)("div",c,[(0,o.bF)(a,{id:"section1",style:{"padding-top":"70px"}}),(0,o.bF)(l,{id:"section2",style:{"padding-top":"70px"}}),(0,o.bF)(d,{id:"section3",style:{"padding-top":"70px"}})])}var d=i.p+"img/logo.e1b00567.png";const u=e=>((0,o.Qi)("data-v-88b4acc0"),e=e(),(0,o.jt)(),e),h=u((()=>(0,o.Lk)("h1",null,"It's Yu-Chieh Huang.",-1))),p=u((()=>(0,o.Lk)("p",null," Softeware Engineer with 2.5 years of experience in backend development. ",-1)));function m(e,t,i,n,s,r){return(0,o.uX)(),(0,o.CE)("div",null,[(0,o.Lk)("img",{title:"Create by Adobe Firefly.",alt:"Vue logo",src:d,style:{"border-radius":"50%"},onMouseover:t[0]||(t[0]=(...e)=>r.playSound&&r.playSound(...e))},null,32),h,p])}var g=i.p+"media/meow.486582da.mp3",f={name:"AboutMe",data(){return{isMobile:!1,windowWidth:window.innerWidth,sound:null}},mounted(){this.checkWidth(),window.addEventListener("resize",this.checkWidth)},methods:{playSound(){this.sound&&(this.sound.pause(),this.sound.currentTime=0),this.sound=new Audio(g),this.sound.play()},checkWidth(){this.isMobile=window.innerWidth<=550,this.windowWidth=window.innerWidth}},beforeUnmount(){window.removeEventListener("resize",this.checkWidth)}},k=i(1241);const v=(0,k.A)(f,[["render",m],["__scopeId","data-v-88b4acc0"]]);var b=v,y=i(4232);const w=e=>((0,o.Qi)("data-v-1979ba93"),e=e(),(0,o.jt)(),e),L=w((()=>(0,o.Lk)("h2",null,"Skills",-1))),E={class:"vertical-list"};function S(e,t,i,n,s,r){return(0,o.uX)(),(0,o.CE)("div",null,[L,(0,o.Lk)("ul",E,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(s.skills,(e=>((0,o.uX)(),(0,o.CE)("li",{key:e.classification},[(0,o.Lk)("h4",null,(0,y.v_)(e.classification),1),((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(e.skill,(e=>((0,o.uX)(),(0,o.CE)("div",{key:e},(0,y.v_)(e),1)))),128))])))),128))])])}var M={name:"MySkills",data(){return{isMobile:!1,windowWidth:window.innerWidth,skills:[{classification:"Front-End",skill:["HTML","CSS","JavaScript (React)"]},{classification:"Back-End",skill:["Node.js (Express)","TypeScript","Python (Django, Flask)"]},{classification:"Database",skill:["MySQL","PostgreSQL","SQLite","MongoDB","Prisma"]},{classification:"Programming Language",skill:["C++","Java","Python"]},{classification:"Machine learning",skill:["Python (Pytorch)","Hugging Face","Keras"]},{classification:"DevOps",skill:["Unit Test (Jest)","AWS (EC2, RDS)","Nginx","CI/CD","Docker","Git"]}]}},mounted(){this.checkWidth(),window.addEventListener("resize",this.checkWidth)},methods:{checkWidth(){this.isMobile=window.innerWidth<=1e3,this.windowWidth=window.innerWidth}},beforeUnmount(){window.removeEventListener("resize",this.checkWidth)}};const C=(0,k.A)(M,[["render",S],["__scopeId","data-v-1979ba93"]]);var W=C;const A=e=>((0,o.Qi)("data-v-73711d57"),e=e(),(0,o.jt)(),e),F=A((()=>(0,o.Lk)("h2",null,"Projects",-1))),_={class:"project-item"},j={class:"project-info"},x={class:"tags"},P={class:"project-info"},T=A((()=>(0,o.Lk)("h4",null,"Description:",-1))),X={class:"vertical-list"},D=["href"];function I(e,t,i,n,s,r){return(0,o.uX)(),(0,o.CE)("div",null,[F,(0,o.Lk)("ul",null,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(s.projects,(e=>((0,o.uX)(),(0,o.CE)("li",{key:e.name},[(0,o.Lk)("div",_,[(0,o.Lk)("div",j,[(0,o.Lk)("h3",null,"♞ "+(0,y.v_)(e.name),1),(0,o.Lk)("h5",null,"Responsible for "+(0,y.v_)(e.position),1),(0,o.Lk)("div",x,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(e.skills,(e=>((0,o.uX)(),(0,o.CE)("div",{class:"tag",key:e},(0,y.v_)(e),1)))),128))])]),(0,o.Lk)("div",P,[T,(0,o.Lk)("ul",X,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(e.descript,((e,t)=>((0,o.uX)(),(0,o.CE)("div",{class:"animated",key:t},(0,y.v_)(e),1)))),128)),(0,o.Lk)("a",{class:"animated",href:e.github_link,target:"_blank",rel:"noopener",style:{padding:"10px"}}," ➥ Github",8,D)])])])])))),128))])])}var O=i(8959),R={name:"MyProjects",data(){return{isMobile:!1,windowWidth:window.innerWidth,projects:[{name:"We Share",skills:["AWS","Javascript","Nginx","SSL","MySQL","Redis","Jest","K6","Docker","Github actions"],position:"Back-End",descript:["Developed a RESTful API within the Express.js framework to implement a shared shopping platform.","The platform is deployed on AWS and utilizes Nginx as an SSL terminator, ensuring a more secure transmission of data."],github_link:"https://github.com/ycccccccccccc/WeShare"},{name:"Medical Appointment System",skills:["Javascript","TypeScript","PosrgreSQL","Prisma","Docker"],position:"Back-End",descript:["A medical appointment system, including registration, login, and appointment registration functions.","Using Docker, you can execute on your own computer."],github_link:"https://github.com/ycccccccccccc/MedAppt/tree/main"},{name:"Dictionary-Aided Automatic Translation of Technical File",skills:["Python(Pytorch)","Hugging Face"],position:"Training Model and Fine-Turning",descript:["Fine-tuned the translation model on Hugging Face, incorporating tokenization for proper nouns to optimize translation results.","Based on BLEU score calculations, we achieved improvements of at least 15% compared to using only the pre-trained model.","Compared to our fine-tuned models, we observed improvements of at least 4%, with the best-performing model reaching up to a 10% improvement."],github_link:"https://github.com/ycccccccccccc/Dictionary-aidedTranslationSystem/"},{name:"Face Anti-Spoofing Detection",skills:["Python(Pytorch)"],position:"Training Model and Fine-Turning",descript:["Based on the CDCN model, the system learns to differentiate between real human faces and fake faces, such as printed or video images.","In the Oulu and SiW test sets, the Average Classification Error Rates (ACER) were below 6% and 1%, respectively.","We implemented the results on both a computer and a Raspberry Pi, providing the system's judgment in the form of Real or Spoof."],github_link:"https://github.com/ycccccccccccc/Face-anti-spoofing-detection"},{name:"NTU Tutor",skills:["HTML","CSS","JavaScript(React)","Axios","WebSocket"],position:"Front-End",descript:["Completed the frontend of a tutoring service platform using the React framework. Members can post job tasks, tutoring services, and accept job invitations."],github_link:"https://github.com/ycccccccccccc/NTU_Tutor"}]}},mounted(){(0,O.A)().reveal(".animated",{delay:300,duration:1e3,origin:"bottom",distance:"20px",easing:"ease-in-out",reset:!0}),this.checkWidth(),window.addEventListener("resize",this.checkWidth)},methods:{checkWidth(){this.isMobile=window.innerWidth<=1e3,this.windowWidth=window.innerWidth}},beforeUnmount(){window.removeEventListener("resize",this.checkWidth)}};const H=(0,k.A)(R,[["render",I],["__scopeId","data-v-73711d57"]]);var Q=H,z={name:"MainPage",components:{MySkills:W,MyProjects:Q,AboutMe:b}};const B=(0,k.A)(z,[["render",l]]);var U=B;const J=e=>((0,o.Qi)("data-v-2c80ab86"),e=e(),(0,o.jt)(),e),K={class:"header",id:"header"},N=J((()=>(0,o.Lk)("div",{class:"menu"},[(0,o.Lk)("a",{href:"#section1",class:"scroll-to"},"About"),(0,o.Lk)("a",{href:"#section2",class:"scroll-to"},"Skills"),(0,o.Lk)("a",{href:"#section3",class:"scroll-to"},"Projects")],-1))),G=[N];function Y(e,t,i,n,s,r){return(0,o.uX)(),(0,o.CE)("div",K,G)}var V={name:"MyHeader",mounted(){const e=document.getElementById("header");window.addEventListener("scroll",(function(){window.scrollY>100?e.style.height="60px":e.style.height="80px"}))}};const q=(0,k.A)(V,[["render",Y],["__scopeId","data-v-2c80ab86"]]);var Z=q,$=i.p+"img/github.6c90a0b4.png",ee=i.p+"img/linkedin.4be3ea88.png";const te=e=>((0,o.Qi)("data-v-c29850c8"),e=e(),(0,o.jt)(),e),ie={class:"footer"},ne=te((()=>(0,o.Lk)("ul",null,[(0,o.Lk)("li",null,[(0,o.Lk)("a",{href:"https://github.com/ycccccccccccc",target:"_blank",rel:"noopener"},[(0,o.Lk)("img",{title:"This is my Github link.",alt:"Github logo",src:$,style:{width:"40px",height:"auto","background-color":"white","border-radius":"5px"}})])]),(0,o.Lk)("li",null,[(0,o.Lk)("a",{href:"https://www.linkedin.com/in/yu-chieh-huang-17538126b",target:"_blank",rel:"noopener"},[(0,o.Lk)("img",{title:"This is my Linkedin link.",alt:"Linkedin logo",src:ee,style:{width:"40px",height:"auto","background-color":"white","border-radius":"5px"}})])])],-1)));function oe(e,t,i,n,s,r){return(0,o.uX)(),(0,o.CE)("div",ie,[ne,(0,o.eW)(" Copyright © 2024 - Created by Yu-Chieh Huang ")])}var se={name:"MyFooter"};const re=(0,k.A)(se,[["render",oe],["__scopeId","data-v-c29850c8"]]);var ae=re,ce={name:"App",components:{MainPage:U,MyHeader:Z,MyFooter:ae},data(){return{sound:null}},methods:{playSound(){this.sound&&(this.sound.pause(),this.sound.currentTime=0),this.sound=new Audio(g),this.sound.play()}}};const le=(0,k.A)(ce,[["render",a]]);var de=le;(0,n.Ef)(de).mount("#app")}},t={};function i(n){var o=t[n];if(void 0!==o)return o.exports;var s=t[n]={exports:{}};return e[n].call(s.exports,s,s.exports,i),s.exports}i.m=e,function(){var e=[];i.O=function(t,n,o,s){if(!n){var r=1/0;for(d=0;d<e.length;d++){n=e[d][0],o=e[d][1],s=e[d][2];for(var a=!0,c=0;c<n.length;c++)(!1&s||r>=s)&&Object.keys(i.O).every((function(e){return i.O[e](n[c])}))?n.splice(c--,1):(a=!1,s<r&&(r=s));if(a){e.splice(d--,1);var l=o();void 0!==l&&(t=l)}}return t}s=s||0;for(var d=e.length;d>0&&e[d-1][2]>s;d--)e[d]=e[d-1];e[d]=[n,o,s]}}(),function(){i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,{a:t}),t}}(),function(){i.d=function(e,t){for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){i.p="/my-page/"}(),function(){var e={524:0};i.O.j=function(t){return 0===e[t]};var t=function(t,n){var o,s,r=n[0],a=n[1],c=n[2],l=0;if(r.some((function(t){return 0!==e[t]}))){for(o in a)i.o(a,o)&&(i.m[o]=a[o]);if(c)var d=c(i)}for(t&&t(n);l<r.length;l++)s=r[l],i.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return i.O(d)},n=self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=i.O(void 0,[504],(function(){return i(6307)}));n=i.O(n)})();
//# sourceMappingURL=app.28585015.js.map