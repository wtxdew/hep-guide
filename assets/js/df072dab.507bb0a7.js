"use strict";(self.webpackChunkhep_guide=self.webpackChunkhep_guide||[]).push([[7385],{4422:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>h});var r=n(4848),s=n(8453),o=n(1470),a=n(9365);const i=n.p+"assets/images/vscode-ssh-config-65b9ff8e6dafdef52fe876f7db17285b.png",l={title:"Startup for Windows",sidebar_position:1},u=void 0,c={id:"startup/windows",title:"Startup for Windows",description:"For Windows users, I suggest utilizing the Windows Subsystem for Linux (WSL) as your local working space instead of a virtual machine. You have two options for server connections: you can connect to the server via SSH using WSL, or you can utilize the VSCode Remote SSH extension to connect directly to the server.",source:"@site/docs/startup/windows.md",sourceDirName:"startup",slug:"/startup/windows",permalink:"/~tong/survival/docs/startup/windows",draft:!1,unlisted:!1,editUrl:"https://github.com/wtxdew/hep-guide/edit/main/docs/startup/windows.md",tags:[],version:"current",lastUpdatedBy:"wutong",lastUpdatedAt:1719154118e3,sidebarPosition:1,frontMatter:{title:"Startup for Windows",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Startup",permalink:"/~tong/survival/docs/category/startup"},next:{title:"Startup for MacOS",permalink:"/~tong/survival/docs/startup/macOS"}},d={},h=[{value:"WSL",id:"wsl",level:2},{value:"Windows Terminal",id:"windows-terminal",level:3},{value:"Installation",id:"installation",level:3},{value:"VSCode Remote SSH",id:"vscode-remote-ssh",level:2},{value:"Setup",id:"setup",level:3}];function f(e){const t={a:"a",admonition:"admonition",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"For Windows users, I suggest utilizing the Windows Subsystem for Linux (WSL) as your local working space instead of a virtual machine. You have two options for server connections: you can connect to the server via SSH using WSL, or you can utilize the VSCode Remote SSH extension to connect directly to the server."}),"\n",(0,r.jsx)(t.h2,{id:"wsl",children:"WSL"}),"\n",(0,r.jsx)(t.h3,{id:"windows-terminal",children:"Windows Terminal"}),"\n",(0,r.jsx)(t.p,{children:"For running your bash (WSL) or PowerShell, it is strongly recommended to use a Windows terminal for the reasons of convenience and aesthetic!!"}),"\n",(0,r.jsxs)(t.p,{children:["Installation: Install Windows terminal via ",(0,r.jsx)(t.a,{href:"https://apps.microsoft.com/detail/9N0DX20HK701?rtc=1&hl=zh-tw&gl=TW",children:"Microsoft Store"})]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Reference:"}),"\n",(0,r.jsx)(t.a,{href:"https://learn.microsoft.com/zh-tw/windows/terminal/",children:"Windows \u7d42\u7aef\u6a5f\u6982\u89c0"})]}),"\n",(0,r.jsx)(t.h3,{id:"installation",children:"Installation"}),"\n",(0,r.jsx)(t.admonition,{type:"warning",children:(0,r.jsx)(t.p,{children:"During the installation process, make sure you understand what you are typing."})}),"\n",(0,r.jsx)(t.p,{children:"If you are comfortable with Ubuntu, you can refer to Microsoft's official installation guide to install WSL."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://learn.microsoft.com/zh-tw/windows/wsl/install",children:"Install WSL"})}),"\n",(0,r.jsxs)(t.p,{children:["However, if you prefer to install a different distribution not included in the official list, I can provide guides for two common distros: ",(0,r.jsx)(t.strong,{children:"Arch"})," and ",(0,r.jsx)(t.strong,{children:"Fedora"}),"."]}),"\n",(0,r.jsxs)(o.A,{children:[(0,r.jsxs)(a.A,{value:"Fedora",children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Fedora:"})," You can install Fedora WSL from ",(0,r.jsx)(t.a,{href:"https://apps.microsoft.com/store/detail/fedora-wsl/9NPCP8DRCHSN",children:"Microsoft Store"})," (Recommend) ",(0,r.jsx)(t.strong,{children:"OR"})," if you don't want to use Microsoft Store then download the latest msix package from\xa0",(0,r.jsx)(t.a,{href:"https://github.com/VSWSL/Fedora-WSL/releases/latest",children:"Release Page"})]}),(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:'"This is an unofficial Fedora WSL based on the rootfs of Fedora docker images with a few packages installed to make your life easy"'}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://github.com/VSWSL/Fedora-WSL?tab=readme-ov-file#readme",children:"Reference"})}),"\n"]})]}),(0,r.jsx)(a.A,{value:"Arch",children:(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Arch:"})," ",(0,r.jsx)(t.a,{href:"https://wsldl-pg.github.io/ArchW-docs/How-to-Setup/",children:"How to Setup | ArchWSL official documentation (wsldl-pg.github.io)"})]})})]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"vscode-remote-ssh",children:"VSCode Remote SSH"}),"\n","\n",(0,r.jsx)(t.h3,{id:"setup",children:"Setup"}),"\n",(0,r.jsx)("img",{align:"right",src:i,alt:"vscode-ssh-config",style:{width:"220px"}}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Install the following extensions:","\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Remote - SSH"}),"\n",(0,r.jsx)(t.li,{children:"Remote - WSL (optional: if you want to use VSCode to access the WSL)"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.li,{children:"After installation, you can connect to the remote server using these extensions."}),"\n",(0,r.jsx)(t.li,{children:"I suggest configuring your SSH settings to simplify the connection process. Refer to steps 1 and 2, as shown in the image."}),"\n",(0,r.jsxs)(t.li,{children:["Here is the guide for ",(0,r.jsx)(t.a,{href:"https://www.notion.so/ac0479d192014d97bb8965866d2eedea?pvs=21",children:"SSH Configuration"}),"."]}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(f,{...e})}):f(e)}},9365:(e,t,n)=>{n.d(t,{A:()=>a});n(6540);var r=n(4164);const s={tabItem:"tabItem_Ymn6"};var o=n(4848);function a(e){let{children:t,hidden:n,className:a}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,a),hidden:n,children:t})}},1470:(e,t,n)=>{n.d(t,{A:()=>j});var r=n(6540),s=n(4164),o=n(3104),a=n(6347),i=n(205),l=n(7485),u=n(1682),c=n(679);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:s}}=e;return{value:t,label:n,attributes:r,default:s}}))}(n);return function(e){const t=(0,u.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function f(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:n}=e;const s=(0,a.W6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(s.location.search);t.set(o,e),s.replace({...s.location,search:t.toString()})}),[o,s])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:s}=e,o=h(e),[a,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[u,d]=p({queryString:n,groupId:s}),[m,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,o]=(0,c.Dv)(n);return[s,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:s}),v=(()=>{const e=u??m;return f({value:e,tabValues:o})?e:null})();(0,i.A)((()=>{v&&l(v)}),[v]);return{selectedValue:a,selectValue:(0,r.useCallback)((e=>{if(!f({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),g(e)}),[d,g,o]),tabValues:o}}var g=n(2303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var w=n(4848);function b(e){let{className:t,block:n,selectedValue:r,selectValue:a,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.a_)(),c=e=>{const t=e.currentTarget,n=l.indexOf(t),s=i[n].value;s!==r&&(u(t),a(s))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,w.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:o}=e;return(0,w.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>l.push(e),onKeyDown:d,onClick:c,...o,className:(0,s.A)("tabs__item",v.tabItem,o?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function x(e){let{lazy:t,children:n,selectedValue:s}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,w.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function S(e){const t=m(e);return(0,w.jsxs)("div",{className:(0,s.A)("tabs-container",v.tabList),children:[(0,w.jsx)(b,{...t,...e}),(0,w.jsx)(x,{...t,...e})]})}function j(e){const t=(0,g.A)();return(0,w.jsx)(S,{...e,children:d(e.children)},String(t))}},8453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>i});var r=n(6540);const s={},o=r.createContext(s);function a(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);