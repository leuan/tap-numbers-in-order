import{S as O,i as V,s as q,k as v,l as y,m as S,h as _,p as k,b as T,n as I,J as X,K as Z,r as x,u as M,q as ee,H as p,L as B,v as G,M as te,a as P,c as D,d as w,f as Y,g as A,w as z,x as H,N as le,z as J,e as U,A as K,B as Q,O as re,C as W,P as se}from"../chunks/index.9c9328c5.mjs";function j(i,e,t){const r=i.slice();return r[9]=e[t],r[11]=t,r}function L(i){let e,t=(i[9]==="x"?"":i[9])+"",r,l,n;function s(){return i[3](i[11])}return{c(){e=v("button"),r=x(t),this.h()},l(a){e=y(a,"BUTTON",{style:!0,class:!0});var f=S(e);r=M(f,t),f.forEach(_),this.h()},h(){ee(e,"color",i[1][Math.floor(Math.random()*9)]),k(e,"class","bg-gray-200 aspect-square rounded text-4xl font-bold")},m(a,f){T(a,e,f),p(e,r),l||(n=B(e,"click",s),l=!0)},p(a,f){i=a,f&1&&t!==(t=(i[9]==="x"?"":i[9])+"")&&G(r,t)},d(a){a&&_(e),l=!1,n()}}}function ne(i){let e,t=i[0],r=[];for(let l=0;l<t.length;l+=1)r[l]=L(j(i,t,l));return{c(){e=v("div");for(let l=0;l<r.length;l+=1)r[l].c();this.h()},l(l){e=y(l,"DIV",{class:!0});var n=S(e);for(let s=0;s<r.length;s+=1)r[s].l(n);n.forEach(_),this.h()},h(){k(e,"class","grid grid-cols-[repeat(4,_minmax(3rem,_1fr))] md:grid-cols-[repeat(4,_15%)] xl:grid-cols-[repeat(4,_7%)] place-content-center gap-2")},m(l,n){T(l,e,n);for(let s=0;s<r.length;s+=1)r[s].m(e,null)},p(l,[n]){if(n&7){t=l[0];let s;for(s=0;s<t.length;s+=1){const a=j(l,t,s);r[s]?r[s].p(a,n):(r[s]=L(a),r[s].c(),r[s].m(e,null))}for(;s<r.length;s+=1)r[s].d(1);r.length=t.length}},i:I,o:I,d(l){l&&_(e),X(r,l)}}}function oe(i,e,t){const r=Z();let l=1,n=1,s=Array(16);s=s.fill("x");let a=Array(16);a=Array.from(Array(16).keys());const f=["#fc0303","#fc5603","#fcce03","#4dff00","#0026ff","#a200ff","#ff00ff","#00eeff","#4400ff"];function u(){let c=a[Math.floor(Math.random()*a.length)];t(0,s[c]=l.toString(),s),l++,a=a.filter($=>$!=c)}for(let c=0;c<8;c++)u();function b(c){s[c]===n.toString()&&(n++,t(0,s[c]="x",s),a=[...a,c],l<=20&&u(),n==21&&r("finished"))}return[s,f,b,c=>{b(c)}]}class ie extends O{constructor(e){super(),V(this,e,oe,ne,q,{})}}function ae(i){let e,t=F(i[0])+"",r;return{c(){e=v("p"),r=x(t),this.h()},l(l){e=y(l,"P",{class:!0});var n=S(e);r=M(n,t),n.forEach(_),this.h()},h(){k(e,"class","font-bold text-2xl my-4")},m(l,n){T(l,e,n),p(e,r)},p(l,[n]){n&1&&t!==(t=F(l[0])+"")&&G(r,t)},i:I,o:I,d(l){l&&_(e)}}}function F(i){const e=Math.floor(i/60),t=i%60;return(e<10?"0"+e.toString():e.toString)+":"+(t<10?"0"+t.toString():t.toString())}function ce(i,e,t){let{totalSeconds:r=0}=e,l=setInterval(()=>t(0,r+=1),1e3);te(()=>clearInterval(l));function n(){clearInterval(l)}function s(){t(0,r=0),l=setInterval(()=>t(0,r+=1),1e3)}return i.$$set=a=>{"totalSeconds"in a&&t(0,r=a.totalSeconds)},[r,n,s]}class fe extends O{constructor(e){super(),V(this,e,ce,ae,q,{totalSeconds:0,stopTimer:1,restartTimer:2})}get stopTimer(){return this.$$.ctx[1]}get restartTimer(){return this.$$.ctx[2]}}function ue(i){let e,t,r,l,n;return{c(){e=v("div"),t=v("button"),r=x("Start Game"),this.h()},l(s){e=y(s,"DIV",{class:!0});var a=S(e);t=y(a,"BUTTON",{class:!0});var f=S(t);r=M(f,"Start Game"),f.forEach(_),a.forEach(_),this.h()},h(){k(t,"class","px-6 py-4 bg-orange-400 rounded text-gray-50 shadow font-bold text-4xl"),k(e,"class","flex justify-center items-center h-96")},m(s,a){T(s,e,a),p(e,t),p(t,r),l||(n=B(t,"click",i[8]),l=!0)},p:I,i:I,o:I,d(s){s&&_(e),l=!1,n()}}}function _e(i){let e,t,r,l,n,s,a,f;function u(o){i[6](o)}let b={};i[3]!==void 0&&(b.totalSeconds=i[3]),t=new fe({props:b}),i[5](t),H.push(()=>le(t,"totalSeconds",u));const E=[me,de],c=[];function $(o,d){return o[1]?1:0}return n=$(i),s=c[n]=E[n](i),{c(){e=v("div"),J(t.$$.fragment),l=P(),s.c(),a=U(),this.h()},l(o){e=y(o,"DIV",{class:!0});var d=S(e);K(t.$$.fragment,d),d.forEach(_),l=D(o),s.l(o),a=U(),this.h()},h(){k(e,"class","flex justify-center")},m(o,d){T(o,e,d),Q(t,e,null),T(o,l,d),c[n].m(o,d),T(o,a,d),f=!0},p(o,d){const m={};!r&&d&8&&(r=!0,m.totalSeconds=o[3],re(()=>r=!1)),t.$set(m);let h=n;n=$(o),n===h?c[n].p(o,d):(z(),w(c[h],1,1,()=>{c[h]=null}),Y(),s=c[n],s?s.p(o,d):(s=c[n]=E[n](o),s.c()),A(s,1),s.m(a.parentNode,a))},i(o){f||(A(t.$$.fragment,o),A(s),f=!0)},o(o){w(t.$$.fragment,o),w(s),f=!1},d(o){o&&_(e),i[5](null),W(t),o&&_(l),c[n].d(o),o&&_(a)}}}function de(i){let e,t,r,l=Math.floor(i[3]/60)>0,n=i[3]%60+"",s,a,f,u,b,E,c,$,o,d,m=l&&R(i);return{c(){e=v("div"),t=v("p"),r=x("Great! You finished in "),m&&m.c(),s=x(n),a=x(" seconds."),f=P(),u=v("button"),b=x("Restart game"),E=P(),c=v("img"),this.h()},l(h){e=y(h,"DIV",{class:!0});var g=S(e);t=y(g,"P",{class:!0});var N=S(t);r=M(N,"Great! You finished in "),m&&m.l(N),s=M(N,n),a=M(N," seconds."),N.forEach(_),f=D(g),u=y(g,"BUTTON",{class:!0});var C=S(u);b=M(C,"Restart game"),C.forEach(_),E=D(g),c=y(g,"IMG",{src:!0,alt:!0,class:!0}),g.forEach(_),this.h()},h(){k(t,"class","text-3xl mx-2 mb-3"),k(u,"class","px-6 py-4 bg-orange-400 rounded text-gray-50 shadow font-bold text-4xl mb-5"),se(c.src,$="/images/monkey.gif")||k(c,"src",$),k(c,"alt","monkey"),k(c,"class","rounded w-3/4 md:w-1/2 lg:w-1/4"),k(e,"class","grid place-items-center")},m(h,g){T(h,e,g),p(e,t),p(t,r),m&&m.m(t,null),p(t,s),p(t,a),p(e,f),p(e,u),p(u,b),p(e,E),p(e,c),o||(d=B(u,"click",i[7]),o=!0)},p(h,g){g&8&&(l=Math.floor(h[3]/60)>0),l?m?m.p(h,g):(m=R(h),m.c(),m.m(t,s)):m&&(m.d(1),m=null),g&8&&n!==(n=h[3]%60+"")&&G(s,n)},i:I,o:I,d(h){h&&_(e),m&&m.d(),o=!1,d()}}}function me(i){let e,t;return e=new ie({}),e.$on("finished",i[4]),{c(){J(e.$$.fragment)},l(r){K(e.$$.fragment,r)},m(r,l){Q(e,r,l),t=!0},p:I,i(r){t||(A(e.$$.fragment,r),t=!0)},o(r){w(e.$$.fragment,r),t=!1},d(r){W(e,r)}}}function R(i){let e=Math.floor(i[3]/60)+"",t,r;return{c(){t=x(e),r=x(` minutes and
					`)},l(l){t=M(l,e),r=M(l,` minutes and
					`)},m(l,n){T(l,t,n),T(l,r,n)},p(l,n){n&8&&e!==(e=Math.floor(l[3]/60)+"")&&G(t,e)},d(l){l&&_(t),l&&_(r)}}}function he(i){let e,t,r,l,n,s,a,f,u,b;const E=[_e,ue],c=[];function $(o,d){return o[0]?0:1}return f=$(i),u=c[f]=E[f](i),{c(){e=v("nav"),t=v("ul"),r=v("li"),l=v("p"),n=x("Tap Numbers in Order!"),s=P(),a=v("main"),u.c(),this.h()},l(o){e=y(o,"NAV",{class:!0});var d=S(e);t=y(d,"UL",{class:!0});var m=S(t);r=y(m,"LI",{});var h=S(r);l=y(h,"P",{class:!0});var g=S(l);n=M(g,"Tap Numbers in Order!"),g.forEach(_),h.forEach(_),m.forEach(_),d.forEach(_),s=D(o),a=y(o,"MAIN",{});var N=S(a);u.l(N),N.forEach(_),this.h()},h(){k(l,"class","text-4xl text-green-600 font-bold font-title"),k(t,"class","flex justify-center"),k(e,"class","py-4 border-b-2")},m(o,d){T(o,e,d),p(e,t),p(t,r),p(r,l),p(l,n),T(o,s,d),T(o,a,d),c[f].m(a,null),b=!0},p(o,[d]){let m=f;f=$(o),f===m?c[f].p(o,d):(z(),w(c[m],1,1,()=>{c[m]=null}),Y(),u=c[f],u?u.p(o,d):(u=c[f]=E[f](o),u.c()),A(u,1),u.m(a,null))},i(o){b||(A(u),b=!0)},o(o){w(u),b=!1},d(o){o&&_(e),o&&_(s),o&&_(a),c[f].d()}}}function pe(i,e,t){let r=!1,l=!1,n,s;function a(){n.stopTimer(),t(1,l=!0)}function f(c){H[c?"unshift":"push"](()=>{n=c,t(2,n)})}function u(c){s=c,t(3,s)}return[r,l,n,s,a,f,u,()=>{t(1,l=!1),n.restartTimer()},()=>{t(0,r=!0)}]}class ge extends O{constructor(e){super(),V(this,e,pe,he,q,{})}}export{ge as default};
