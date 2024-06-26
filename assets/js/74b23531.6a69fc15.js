"use strict";(self.webpackChunkhep_guide=self.webpackChunkhep_guide||[]).push([[2442],{969:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>l,default:()=>y,frontMatter:()=>i,metadata:()=>c,toc:()=>h});var t=n(4848),r=n(8453),a=n(1470),o=n(9365);const i={id:"ssh-setup",title:"SSH Setup",description:"How to setup SSH keys for secure access to your servers"},l=void 0,c={id:"CSG/tools/ssh-setup",title:"SSH Setup",description:"How to setup SSH keys for secure access to your servers",source:"@site/docs/CSG/tools/ssh.mdx",sourceDirName:"CSG/tools",slug:"/CSG/tools/ssh-setup",permalink:"/~tong/survival/docs/CSG/tools/ssh-setup",draft:!1,unlisted:!1,editUrl:"https://github.com/wtxdew/hep-guide/edit/master/docs/CSG/tools/ssh.mdx",tags:[],version:"current",lastUpdatedBy:"wutong",lastUpdatedAt:1719367453e3,frontMatter:{id:"ssh-setup",title:"SSH Setup",description:"How to setup SSH keys for secure access to your servers"},sidebar:"tutorialSidebar",previous:{title:"Tools and resources",permalink:"/~tong/survival/docs/category/tools-and-resources"},next:{title:"Advanced Setting",permalink:"/~tong/survival/docs/category/advanced-setting"}},d={},h=[{value:"SSH-Key",id:"ssh-key",level:2},{value:"Generate a new SSH key",id:"generate-a-new-ssh-key",level:3},{value:"Adding your SSH key to the ssh-agent",id:"adding-your-ssh-key-to-the-ssh-agent",level:3},{value:"Copy your public key pair to the server",id:"copy-your-public-key-pair-to-the-server",level:3},{value:"SSH Configuration",id:"ssh-configuration",level:2},{value:"Legacy system",id:"legacy-system",level:3},{value:"Jump host",id:"jump-host",level:3},{value:"SSH login w/o password",id:"ssh-login-wo-password",level:2}];function u(e){const s={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",mermaid:"mermaid",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h2,{id:"ssh-key",children:"SSH-Key"}),"\n",(0,t.jsxs)(s.p,{children:["Github provides a detailed guideline for SSH key. You can refer to this ",(0,t.jsx)(s.a,{href:"https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent",children:"site"}),".\nOr you can also follow the simple steps below."]}),"\n",(0,t.jsx)(s.h3,{id:"generate-a-new-ssh-key",children:"Generate a new SSH key"}),"\n",(0,t.jsx)(s.p,{children:"Paste the following command in your terminal to generate a new SSH key pair.\nReplace the email with your own email address."}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:'# For usual server\nssh-keygen -t ed25519 -C "your_email@example.com"\n\n# some legacy system (HEP1) only accepts RSA keys.\nssh-keygen -t rsa -b 4096 -C "your_email@example.com"\n'})}),"\n",(0,t.jsx)(s.h3,{id:"adding-your-ssh-key-to-the-ssh-agent",children:"Adding your SSH key to the ssh-agent"}),"\n",(0,t.jsx)(s.p,{children:"Start the ssh-agent in the background.\nDepending on your shell, you may need to use different commands."}),"\n",(0,t.jsxs)(a.A,{children:[(0,t.jsxs)(o.A,{value:"bash",children:[(0,t.jsx)(s.p,{children:"For bash shell"}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:'eval "$(ssh-agent -s)"\n'})})]}),(0,t.jsxs)(o.A,{value:"csh/fish",children:[(0,t.jsx)(s.p,{children:"For csh/fish shell"}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"eval (ssh-agent -c)\n"})})]})]}),"\n",(0,t.jsx)(s.p,{children:"Then add your SSH private key to the ssh-agent."}),"\n",(0,t.jsxs)(a.A,{children:[(0,t.jsxs)(o.A,{value:"Mac",children:[(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["Modify ",(0,t.jsx)(s.code,{children:"$HOME/.ssh/config"})," file to load ssh key into ssh-agent automatically"]}),"\n"]}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",metastring:'title="~/.ssh/config"',children:"Host github.com\n  AddKeysToAgent yes\n  UseKeychain yes\n  IdentityFile ~/.ssh/id_ed25519\n"})}),(0,t.jsxs)(s.ol,{start:"2",children:["\n",(0,t.jsx)(s.li,{children:"Add your SSH private key to the ssh-agent and store your passphrase in the keychain."}),"\n"]}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"ssh-add --apple-use-keychain ~/.ssh/id_ed25519\n"})})]}),(0,t.jsx)(o.A,{value:"Linux",children:(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Add the ssh-key to ssh-agent"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"ssh-add ~/.ssh/id_ed25519\n"})}),"\n",(0,t.jsxs)(s.p,{children:["You can check all the keys you add to the ssh-agent by ",(0,t.jsx)(s.code,{children:"ssh-add -l"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Add the following to your ",(0,t.jsx)(s.code,{children:"~/.bashrc"}),".\nThis will automatically start the agent and ensure that only one ",(0,t.jsx)(s.code,{children:"ssh-agent"})," process is running at a time."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",metastring:'title="~/.bashrc"',children:'#!/bin/bash\n\nif ! pgrep -u "$USER" ssh-agent > /dev/null; then\n    ssh-agent -t 1h > "$XDG_RUNTIME_DIR/ssh-agent.env"\nfi\nif [[ ! -f "$SSH_AUTH_SOCK" ]]; then\n    source "$XDG_RUNTIME_DIR/ssh-agent.env" >/dev/null\nfi\n'})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Use ",(0,t.jsx)(s.code,{children:"Keychain"})," to manage your keys, allowing you to avoid entering your password in each session.\n",(0,t.jsx)(s.strong,{children:"install"})," ",(0,t.jsx)(s.code,{children:"Keychain"}),". Then, add the following command to your ",(0,t.jsx)(s.code,{children:".bashrc"})," file to configure Keychain."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"#!/bin/bash\neval $(keychain --eval --quiet id_ed25519 id_rsa ~/.keys/my_custom_key)\n"})}),"\n"]}),"\n"]})})]}),"\n",(0,t.jsx)(s.h3,{id:"copy-your-public-key-pair-to-the-server",children:"Copy your public key pair to the server"}),"\n",(0,t.jsxs)(a.A,{children:[(0,t.jsxs)(o.A,{value:"By command",children:[(0,t.jsxs)(s.p,{children:["Use command ",(0,t.jsx)(s.code,{children:"ssh-copy-id"})," to copy your public key to the server."]}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"ssh-copy-id -i your_key_path username@server_host\n"})})]}),(0,t.jsxs)(o.A,{value:"Manually",children:[(0,t.jsx)(s.p,{children:"manually copy the public key to the server."}),(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["Copy the contents of file ",(0,t.jsx)(s.code,{children:"$HOME/.ssh/your_key_path.pub"})]}),"\n",(0,t.jsxs)(s.li,{children:["Access the server and paste the contents into the ",(0,t.jsx)(s.code,{children:"$HOME/.ssh/authorized_keys"})," file."]}),"\n"]})]})]}),"\n",(0,t.jsx)(s.h2,{id:"ssh-configuration",children:"SSH Configuration"}),"\n",(0,t.jsx)(s.p,{children:"The ssh configuration file is used to save the SSH setting for each server.\nThis can save you time and make your workflow more efficient."}),"\n",(0,t.jsxs)(s.p,{children:["The SSH configuration file is located at ",(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"$HOME/.ssh/config"})})," on Unix-like systems or ",(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"c:\\User\\username\\.ssh\\config"})})," on Windows.\nHere is an example configuration:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sh",metastring:'title="~/.ssh/config"',children:"Host <server_name>\n  User <user_name>\n  HostName <host_name>\n  ForwardX11Trusted yes\n  ForwardX11 yes\n  UseKeychain yes # MacOS only\n  AddKeysToAgent yes\n  ForwardAgent yes\n  IdentityFile ~/.ssh/id_ed25519\n  LocalForward 8939 localhost:8939 # optional\n"})}),"\n",(0,t.jsxs)(s.p,{children:["Replace the placeholder in ",(0,t.jsx)(s.code,{children:"<...>"})," with your information.\nThen you can connect to this server by running ",(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"ssh <server_name>"})}),"."]}),"\n",(0,t.jsx)(s.admonition,{type:"danger",children:(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"NEVER"})," put your password in the configuration."]})}),"\n",(0,t.jsx)(s.h3,{id:"legacy-system",children:"Legacy system"}),"\n",(0,t.jsx)(s.p,{children:"For connecting to the legacy system server (e.g. hep1), which requires RSA keys, you need to add specific flags to the configuration:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sh",metastring:'title="~/.ssh/config"',children:"Host hep1\n   // highlight-start\n  HostKeyAlgorithms=+ssh-rsa\n  PubkeyAcceptedKeyTypes=+ssh-rsa\n  PubkeyAcceptedAlgorithms=+ssh-rsa\n  // highlight-end\n  User <user_name> \n  HostName hep1.phys.ntu.edu.tw\n  ForwardX11Trusted yes\n  ForwardX11 yes\n  AddKeysToAgent yes\n  UseKeychain yes # MacOS only\n  ForwardAgent yes\n  IdentityFile ~/.ssh/id_rsa_hep1\n"})}),"\n",(0,t.jsx)(s.h3,{id:"jump-host",children:"Jump host"}),"\n",(0,t.jsx)(s.p,{children:"Some servers cannot be directly connected to and require you to connect through a jump host (e.g., 'kekcc' and 'sshcc').\nHowever, you can easily use a one-line command to jump to your target server."}),"\n",(0,t.jsx)(s.mermaid,{value:"graph LR;\n    local --\x3e sshcc --\x3e kekcc;"}),"\n",(0,t.jsx)(s.p,{children:"Here is an example configuration:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sh",metastring:'title="~/.ssh/config"',children:"Host kekcc\n  User Username\n  HostName ccx04.cc.kek.jp\n  ForwardX11Trusted yes\n  ForwardX11 yes\n  UseKeychain yes # MacOS only\n  AddKeysToAgent yes\n  ForwardAgent yes\n  IdentityFile ~/.ssh/id_ed25519\n  // highlight-next-line\n  ProxyCommand ssh -q -W %h:%p sshcc\n\nHost sshcc\n  User Username\n  HostName sshcc1.kek.jp\n  ForwardX11Trusted yes\n  ForwardX11 yes\n  AddKeysToAgent yes\n  UseKeychain yes # MacOS only\n  ForwardAgent yes\n  IdentityFile ~/.ssh/id_ed25519\n"})}),"\n",(0,t.jsxs)(s.p,{children:["Then you can connect to 'kekcc' by running ",(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"ssh kekcc"})}),"."]}),"\n",(0,t.jsx)(s.h2,{id:"ssh-login-wo-password",children:(0,t.jsx)(s.a,{href:"/docs/CSG/advanced/ssh-login-wo-password",children:"SSH login w/o password"})})]})}function y(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},9365:(e,s,n)=>{n.d(s,{A:()=>o});n(6540);var t=n(4164);const r={tabItem:"tabItem_Ymn6"};var a=n(4848);function o(e){let{children:s,hidden:n,className:o}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,t.A)(r.tabItem,o),hidden:n,children:s})}},1470:(e,s,n)=>{n.d(s,{A:()=>k});var t=n(6540),r=n(4164),a=n(3104),o=n(6347),i=n(205),l=n(7485),c=n(1682),d=n(679);function h(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:s}=e;return!!s&&"object"==typeof s&&"value"in s}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:s,children:n}=e;return(0,t.useMemo)((()=>{const e=s??function(e){return h(e).map((e=>{let{props:{value:s,label:n,attributes:t,default:r}}=e;return{value:s,label:n,attributes:t,default:r}}))}(n);return function(e){const s=(0,c.X)(e,((e,s)=>e.value===s.value));if(s.length>0)throw new Error(`Docusaurus error: Duplicate values "${s.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[s,n])}function y(e){let{value:s,tabValues:n}=e;return n.some((e=>e.value===s))}function p(e){let{queryString:s=!1,groupId:n}=e;const r=(0,o.W6)(),a=function(e){let{queryString:s=!1,groupId:n}=e;if("string"==typeof s)return s;if(!1===s)return null;if(!0===s&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:s,groupId:n});return[(0,l.aZ)(a),(0,t.useCallback)((e=>{if(!a)return;const s=new URLSearchParams(r.location.search);s.set(a,e),r.replace({...r.location,search:s.toString()})}),[a,r])]}function g(e){const{defaultValue:s,queryString:n=!1,groupId:r}=e,a=u(e),[o,l]=(0,t.useState)((()=>function(e){let{defaultValue:s,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(s){if(!y({value:s,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${s}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return s}const t=n.find((e=>e.default))??n[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:s,tabValues:a}))),[c,h]=p({queryString:n,groupId:r}),[g,m]=function(e){let{groupId:s}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(s),[r,a]=(0,d.Dv)(n);return[r,(0,t.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:r}),x=(()=>{const e=c??g;return y({value:e,tabValues:a})?e:null})();(0,i.A)((()=>{x&&l(x)}),[x]);return{selectedValue:o,selectValue:(0,t.useCallback)((e=>{if(!y({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),h(e),m(e)}),[h,m,a]),tabValues:a}}var m=n(2303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=n(4848);function j(e){let{className:s,block:n,selectedValue:t,selectValue:o,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),d=e=>{const s=e.currentTarget,n=l.indexOf(s),r=i[n].value;r!==t&&(c(s),o(r))},h=e=>{let s=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;s=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;s=l[n]??l[l.length-1];break}}s?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},s),children:i.map((e=>{let{value:s,label:n,attributes:a}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:t===s?0:-1,"aria-selected":t===s,ref:e=>l.push(e),onKeyDown:h,onClick:d,...a,className:(0,r.A)("tabs__item",x.tabItem,a?.className,{"tabs__item--active":t===s}),children:n??s},s)}))})}function v(e){let{lazy:s,children:n,selectedValue:r}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(s){const e=a.find((e=>e.props.value===r));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:a.map(((e,s)=>(0,t.cloneElement)(e,{key:s,hidden:e.props.value!==r})))})}function b(e){const s=g(e);return(0,f.jsxs)("div",{className:(0,r.A)("tabs-container",x.tabList),children:[(0,f.jsx)(j,{...s,...e}),(0,f.jsx)(v,{...s,...e})]})}function k(e){const s=(0,m.A)();return(0,f.jsx)(b,{...e,children:h(e.children)},String(s))}},8453:(e,s,n)=>{n.d(s,{R:()=>o,x:()=>i});var t=n(6540);const r={},a=t.createContext(r);function o(e){const s=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(a.Provider,{value:s},e.children)}}}]);