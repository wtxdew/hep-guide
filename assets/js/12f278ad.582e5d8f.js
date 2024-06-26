"use strict";(self.webpackChunkhep_guide=self.webpackChunkhep_guide||[]).push([[6984],{5876:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var t=r(4848),a=r(8453),l=r(1470),s=r(9365);const o={id:"cern-root",title:"CERN ROOT"},i=void 0,c={id:"CSG/programming/cern-root",title:"CERN ROOT",description:"Jack's lecture notes",source:"@site/docs/CSG/programming/cern-root.mdx",sourceDirName:"CSG/programming",slug:"/CSG/programming/cern-root",permalink:"/~tong/survival/docs/CSG/programming/cern-root",draft:!1,unlisted:!1,editUrl:"https://github.com/wtxdew/hep-guide/edit/master/docs/CSG/programming/cern-root.mdx",tags:[],version:"current",lastUpdatedBy:"wutong",lastUpdatedAt:1719365781e3,frontMatter:{id:"cern-root",title:"CERN ROOT"},sidebar:"tutorialSidebar",previous:{title:"Programing",permalink:"/~tong/survival/docs/category/programing"},next:{title:"Tools and resources",permalink:"/~tong/survival/docs/category/tools-and-resources"}},u={},d=[{value:"Jack&#39;s <strong>lecture notes</strong>",id:"jacks-lecture-notes",level:2},{value:"Installation",id:"installation",level:2},{value:"Install from package",id:"install-from-package",level:3},{value:"CentOS",id:"centos",level:4},{value:"Arch Linux",id:"arch-linux",level:4},{value:"Ubuntu",id:"ubuntu",level:4},{value:"Install from pre-built binary",id:"install-from-pre-built-binary",level:3},{value:"Install form source code",id:"install-form-source-code",level:3}];function h(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h2,{id:"jacks-lecture-notes",children:["Jack's ",(0,t.jsx)(n.strong,{children:"lecture notes"})]}),"\n",(0,t.jsxs)(n.p,{children:["This is a lecture note from Jack which contains the ROOT tutorial:\n",(0,t.jsx)(n.a,{href:"https://hep1.phys.ntu.edu.tw/~kfjack/lecture/hepcomp/2016/",children:"Computational Methods in Experimental Particle Physics"})]}),"\n",(0,t.jsx)(n.p,{children:"These three lectures are specialized ROOT tutorials."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"http://hep1.phys.ntu.edu.tw/~kfjack/lecture/hepcomp/2016/03/lecture-03.pdf",children:"Lecture03: Basic Visualization with ROOT"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"http://hep1.phys.ntu.edu.tw/~kfjack/lecture/hepcomp/2016/08/lecture-08.pdf",children:"Lecture08: Root Finding and Minimum Finding"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"http://hep1.phys.ntu.edu.tw/~kfjack/lecture/hepcomp/2016/09/lecture-09.pdf",children:"Lecture09: Access to ROOT data format"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,t.jsxs)(n.p,{children:["You can install ROOT from ",(0,t.jsx)(n.strong,{children:"package"}),", ",(0,t.jsx)(n.strong,{children:"pre-built binary"})," or ",(0,t.jsx)(n.em,{children:"build from source"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"install-from-package",children:"Install from package"}),"\n",(0,t.jsxs)(n.p,{children:["Packages are listed below. (You can also\xa0",(0,t.jsx)(n.a,{href:"https://github.com/neovim/neovim/wiki/Installing-Neovim#install-from-source",children:"build from source"}),".)"]}),"\n",(0,t.jsxs)(l.A,{children:[(0,t.jsxs)(s.A,{value:"MacOS",children:[(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.a,{href:"https://brew.sh/",children:"Homebrew"})})}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"$ brew install root\n"})}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://www.macports.org/",children:(0,t.jsx)(n.strong,{children:"MacPorts"})})}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"$ sudo port install root6\n"})})]}),(0,t.jsxs)(s.A,{value:"Linux",children:[(0,t.jsx)(n.h4,{id:"centos",children:"CentOS"}),(0,t.jsxs)(n.p,{children:["ROOT is available on CentOS via\xa0",(0,t.jsx)(n.a,{href:"https://fedoraproject.org/wiki/EPEL",children:"EPEL"}),". To install ROOT on CentOS, run the following commands."]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"$ yum install epel-release\n$ yum install root\n"})}),(0,t.jsx)(n.h4,{id:"arch-linux",children:"Arch Linux"}),(0,t.jsxs)(n.p,{children:["Arch\u2019s\xa0",(0,t.jsx)(n.a,{href:"https://www.archlinux.org/packages/community/x86_64/root",children:"ROOT package"}),"\xa0can be installed with the following command.\nThe Arch package uses C++17."]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"pacman -Syu root\n"})}),(0,t.jsx)(n.h4,{id:"ubuntu",children:"Ubuntu"}),(0,t.jsx)(n.p,{children:"Use conda"})]}),(0,t.jsxs)(s.A,{value:"Conda",children:[(0,t.jsxs)(n.p,{children:["For any Linux distribution and MacOS, ROOT is available as a\xa0",(0,t.jsx)(n.a,{href:"https://anaconda.org/conda-forge/root/",children:"conda package"}),". To create a new conda environment containing ROOT and activate it, execute the following commands."]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"$ conda config --set channel_priority strict\n$ conda create -c conda-forge --name <my-environment> root\n$ conda activate <my-environment>\n"})})]})]}),"\n",(0,t.jsx)(n.h3,{id:"install-from-pre-built-binary",children:"Install from pre-built binary"}),"\n",(0,t.jsxs)(n.p,{children:["Find the ",(0,t.jsx)(n.a,{href:"https://root.cern/install/all_releases/",children:"Release"})," for your OS and ROOT version. Get the correlated file name ",(0,t.jsx)(n.code,{children:"root_<version>.tar.gz"}),", then run the following commands."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"$ wget https://root.cern/download/root_<version>.tar.gz\n$ tar -xzvf root_<version>.tar.gz\n$ source root/bin/thisroot.sh\n"})}),"\n",(0,t.jsx)(n.h3,{id:"install-form-source-code",children:"Install form source code"}),"\n",(0,t.jsxs)(n.p,{children:["Please following the official document: ",(0,t.jsx)(n.a,{href:"https://root.cern/install/#build-from-source",children:"Installing ROOT"})]})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},9365:(e,n,r)=>{r.d(n,{A:()=>s});r(6540);var t=r(4164);const a={tabItem:"tabItem_Ymn6"};var l=r(4848);function s(e){let{children:n,hidden:r,className:s}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,t.A)(a.tabItem,s),hidden:r,children:n})}},1470:(e,n,r)=>{r.d(n,{A:()=>y});var t=r(6540),a=r(4164),l=r(3104),s=r(6347),o=r(205),i=r(7485),c=r(1682),u=r(679);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:r}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:r,attributes:t,default:a}}=e;return{value:n,label:r,attributes:t,default:a}}))}(r);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function p(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:r}=e;const a=(0,s.W6)(),l=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,i.aZ)(l),(0,t.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(a.location.search);n.set(l,e),a.replace({...a.location,search:n.toString()})}),[l,a])]}function f(e){const{defaultValue:n,queryString:r=!1,groupId:a}=e,l=h(e),[s,i]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:l}))),[c,d]=m({queryString:r,groupId:a}),[f,g]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,l]=(0,u.Dv)(r);return[a,(0,t.useCallback)((e=>{r&&l.set(e)}),[r,l])]}({groupId:a}),x=(()=>{const e=c??f;return p({value:e,tabValues:l})?e:null})();(0,o.A)((()=>{x&&i(x)}),[x]);return{selectedValue:s,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),g(e)}),[d,g,l]),tabValues:l}}var g=r(2303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=r(4848);function v(e){let{className:n,block:r,selectedValue:t,selectValue:s,tabValues:o}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.a_)(),u=e=>{const n=e.currentTarget,r=i.indexOf(n),a=o[r].value;a!==t&&(c(n),s(a))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=i.indexOf(e.currentTarget)+1;n=i[r]??i[0];break}case"ArrowLeft":{const r=i.indexOf(e.currentTarget)-1;n=i[r]??i[i.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":r},n),children:o.map((e=>{let{value:n,label:r,attributes:l}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>i.push(e),onKeyDown:d,onClick:u,...l,className:(0,a.A)("tabs__item",x.tabItem,l?.className,{"tabs__item--active":t===n}),children:r??n},n)}))})}function j(e){let{lazy:n,children:r,selectedValue:a}=e;const l=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===a));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function w(e){const n=f(e);return(0,b.jsxs)("div",{className:(0,a.A)("tabs-container",x.tabList),children:[(0,b.jsx)(v,{...n,...e}),(0,b.jsx)(j,{...n,...e})]})}function y(e){const n=(0,g.A)();return(0,b.jsx)(w,{...e,children:d(e.children)},String(n))}},8453:(e,n,r)=>{r.d(n,{R:()=>s,x:()=>o});var t=r(6540);const a={},l=t.createContext(a);function s(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);