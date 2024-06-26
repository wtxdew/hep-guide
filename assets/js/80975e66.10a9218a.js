"use strict";(self.webpackChunkhep_guide=self.webpackChunkhep_guide||[]).push([[5041],{489:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>r,toc:()=>l});var t=n(4848),o=n(8453);const i={id:"ssh-login-wo-password",title:"SSH Login Without Password"},a=void 0,r={id:"CSG/advanced/ssh-login-wo-password",title:"SSH Login Without Password",description:"There are several ways to login to the server without a password.",source:"@site/docs/CSG/advanced/ssh-login-wo-password.mdx",sourceDirName:"CSG/advanced",slug:"/CSG/advanced/ssh-login-wo-password",permalink:"/~tong/survival/docs/CSG/advanced/ssh-login-wo-password",draft:!1,unlisted:!1,editUrl:"https://github.com/wtxdew/hep-guide/edit/master/docs/CSG/advanced/ssh-login-wo-password.mdx",tags:[],version:"current",lastUpdatedBy:"wutong",lastUpdatedAt:1719365781e3,frontMatter:{id:"ssh-login-wo-password",title:"SSH Login Without Password"},sidebar:"tutorialSidebar",previous:{title:"Remote Image Preview",permalink:"/~tong/survival/docs/CSG/advanced/remote-image-preview"},next:{title:"Troubleshooting",permalink:"/~tong/survival/docs/category/troubleshooting"}},d={},l=[{value:"SSH key authentication",id:"ssh-key-authentication",level:2},{value:"Setup:",id:"setup",level:2}];function h(e){const s={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components},{Details:n}=s;return n||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.p,{children:"There are several ways to login to the server without a password."}),"\n",(0,t.jsx)(s.h2,{id:"ssh-key-authentication",children:"SSH key authentication"}),"\n",(0,t.jsx)(s.admonition,{type:"danger",children:(0,t.jsx)(s.p,{children:"For security, it is you must add a passphrase to the SSH key."})}),"\n",(0,t.jsxs)(s.p,{children:["SSH key is the best and most convenient method for SSH authentication.\nWith ssh-agent, you can easily implement ssh password-free login.\nPlease refer to the GitHub document for a detailed setup:\n",(0,t.jsx)(s.a,{href:"https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent",children:"Generating a new SSH key and adding it to the ssh-agent - GitHub Docs"})]}),"\n",(0,t.jsx)(s.p,{children:"The only disadvantage of SSH key is that some servers (e.g. grid5, lxplus) do not allow SSH key authentication and must use a password."}),"\n",(0,t.jsxs)(s.h1,{id:"2-the-ssh_askpass",children:["2. The ",(0,t.jsx)(s.code,{children:"SSH_ASKPASS"})]}),"\n",(0,t.jsxs)(s.p,{children:["If you must use a password login because the server manager requires it, this method is probably a good solution for you.\nYou can just follow this site, it is clear enough.\n",(0,t.jsx)(s.a,{href:"https://verynomagic.com/2015/06/say-no-to-sshpass.html",children:"Say 'No' to sshpass"}),".\nTo prevent this site from dead, I'll explain how to set it up below."]}),"\n",(0,t.jsx)(s.h2,{id:"setup",children:"Setup:"}),"\n",(0,t.jsx)(s.admonition,{type:"info",children:(0,t.jsx)(s.p,{children:"This setup method is only for MacOS. If you are using a different operating system, you will need to find the setup instructions on your own."})}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["Store your password in ",(0,t.jsx)(s.code,{children:"Keychain Access.app"})," which is the default app in MacOS."]}),"\n"]}),"\n",(0,t.jsxs)(n,{children:[(0,t.jsx)("summary",{children:"For anybody don\u2019t know how to do:"}),(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["Open the ",(0,t.jsx)(s.code,{children:"Keychain Access.app"})]}),"\n",(0,t.jsxs)(s.li,{children:["Press ",(0,t.jsx)(s.code,{children:"\u2318 + N"})," to add a new password."]}),"\n",(0,t.jsxs)(s.li,{children:["Remember your ",(0,t.jsx)(s.code,{children:"itemName"})," and ",(0,t.jsx)(s.code,{children:"accountName"}),". They will be used later."]}),"\n"]})]}),"\n",(0,t.jsxs)(s.ol,{start:"2",children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Place the following code in the file ",(0,t.jsx)(s.code,{children:"~/.local/bin/askpass"})," (or any path you want)."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sh",metastring:'title="~/.local/bin/askpass"',children:"#!/usr/bin/env bash\n/usr/bin/security find-generic-password -a <accountName> -s <itemName> -w\n"})}),"\n",(0,t.jsx)(s.admonition,{type:"tip",children:(0,t.jsx)(s.p,{children:"This script works only for a single password. If you have multiple settings, you will need to make some changes."})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"make it executable:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"$ chmod u+x ~/.local/bin/askpass\n"})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["install ",(0,t.jsx)(s.code,{children:"notty"})," following the GitHub repo. You need to compile it by yourself."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"https://github.com/pharaujo/notty",children:"GitHub - pharaujo/notty: notty is a command line tool to detach a process from a tty."})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Create another script ",(0,t.jsx)(s.code,{children:"~/.local/bin/myssh"})]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sh",metastring:'title="~/.local/bin/myssh"',children:'#!/usr/bin/env bash\n\nexport DISPLAY=:99\nexport SSH_ASKPASS="$HOME/.local/bin/askpass"\n\nnotty ssh $@\n'})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Then you can use ",(0,t.jsx)(s.code,{children:"myssh USER@HOSTNAME"})," to log in ssh server without a password."]}),"\n",(0,t.jsxs)(s.admonition,{type:"note",children:[(0,t.jsxs)(s.p,{children:["Don\u2019t forget to add the path: ",(0,t.jsx)(s.code,{children:"~/.local/bin"})," (or your path) to $PATH"]}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sh",metastring:'title="~/.bashrc"',children:'export PATH="$HOME/.local/bin:$PATH"\n'})})]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h1,{id:"3-iterm2-password-manager",children:"3. iTerm2 password manager"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Using iTerm2 is an easy way, you don\u2019t need to set up anything."}),"\n",(0,t.jsxs)(s.li,{children:["You only need to press ",(0,t.jsx)(s.code,{children:"Enter"})," every time."]}),"\n",(0,t.jsxs)(s.li,{children:["Press ",(0,t.jsx)(s.code,{children:"\u2325 \u2318 F"}),", open the \u2018Password Manager\u2019, and you can add your password to it."]}),"\n"]}),"\n",(0,t.jsx)(s.h1,{id:"4-termius",children:"4. Termius"}),"\n",(0,t.jsxs)(s.p,{children:["Termius is an SSH client that remembers your password.\nIt doesn't use X11 forwarding, but you can use other drawing methods to get around it.\nIt is basically free, and you can request ",(0,t.jsx)(s.a,{href:"https://education.github.com/",children:"GitHub education"})," to get the full version."]}),"\n",(0,t.jsxs)(s.h1,{id:"5-sshpass-security-risk",children:["5. ",(0,t.jsx)(s.code,{children:"sshpass"})," (!!SECURITY RISK!!)"]}),"\n",(0,t.jsx)(s.admonition,{type:"danger",children:(0,t.jsx)(s.p,{children:"\ud83d\udeab DO NOT use sshpass for security reasons."})}),"\n",(0,t.jsx)(s.p,{children:"sshpass is very unsafe because it uses the password in plain words.\nEven you can't install it from the homebrew.\nSo if you are using this way, please change to another method on this page."})]})}function c(e={}){const{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>a,x:()=>r});var t=n(6540);const o={},i=t.createContext(o);function a(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);