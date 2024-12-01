"use strict";(self.webpackChunkgithubio=self.webpackChunkgithubio||[]).push([[4204],{3584:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"machine_learning/1.1 why pytorch","title":"Introducing machine learing and pytorch","description":"1. Why PyTorch","source":"@site/docs/machine_learning/1.1 why pytorch.md","sourceDirName":"machine_learning","slug":"/machine_learning/1.1 why pytorch","permalink":"/docs/machine_learning/1.1 why pytorch","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=t(4848),a=t(8453);const o={},s="Introducing machine learing and pytorch",h={},c=[{value:"1. Why PyTorch",id:"1-why-pytorch",level:2},{value:"1.1. The deep learning revolution",id:"11-the-deep-learning-revolution",level:3},{value:"1.2 Immediate versus deferred execution",id:"12-immediate-versus-deferred-execution",level:3},{value:"2. high-level map of the PyTorch main components",id:"2-high-level-map-of-the-pytorch-main-components",level:2}];function l(e){const n={h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"introducing-machine-learing-and-pytorch",children:"Introducing machine learing and pytorch"})}),"\n",(0,r.jsx)(n.h2,{id:"1-why-pytorch",children:"1. Why PyTorch"}),"\n",(0,r.jsx)(n.h3,{id:"11-the-deep-learning-revolution",children:"1.1. The deep learning revolution"}),"\n",(0,r.jsx)(n.p,{children:"Traditional machine learning is more like feature engineering, where engineers handcraft features from data and then train machine learning model. Features are transformations of input data resulting in numerical features that facilitate a downstream algorithm, such as a classifier, to produce correct outcomes on new data. Feature engineering aims to take the original data and come up with representations of the same data that can be fed to an algorithm to solve a problem."}),"\n",(0,r.jsx)(n.p,{children:"Deep learning, on the other hand, deals with finding such representations auto-matically, from raw data, to perform a task successfully."}),"\n",(0,r.jsx)(n.h3,{id:"12-immediate-versus-deferred-execution",children:"1.2 Immediate versus deferred execution"}),"\n",(0,r.jsx)(n.p,{children:"One key differentiator for deep learning libraries is immediate versus deferred execution. Much of PyTorch\u2019s ease of use is due to how it implements immediate execution."}),"\n",(0,r.jsx)(n.p,{children:"The major frameworks are converging toward supporting both modes of operation. PyTorch 1.0 gained the ability to record the execution of a model in a static computation graph or define it through a precompiled scripting language, with the goal of improved performance and ease of putting the model into production. TensorFlow has also gained \u201ceager mode,\u201d a new define-by-run API, increasing the library\u2019s flexibility as we have discussed."}),"\n",(0,r.jsx)(n.h2,{id:"2-high-level-map-of-the-pytorch-main-components",children:"2. high-level map of the PyTorch main components"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"For performance reasons, most of PyTorch is written in C++ and CUDA"}),"\n",(0,r.jsx)(n.li,{children:"At its core, PyTorch is a library that provides multidimensional arrays, called tensors in PyTorch parlance."}),"\n",(0,r.jsx)(n.li,{children:"The second core thing that PyTorch provides allows tensors to keep track of the operations performed on them and to compute derivatives of an output with respect to any of its inputs analytically via backpropagation. This capability is provided natively by tensors and further refined in torch.autograd."}),"\n",(0,r.jsx)(n.li,{children:"The core PyTorch modules for building neural networks are located in torch.nn"}),"\n",(0,r.jsx)(n.li,{children:"Utilities for data loading and handling can be found in torch.util.data."}),"\n",(0,r.jsx)(n.li,{children:"torch.nn.DataParallel and torch.distributed can be employed to leverage the additional hardware available to have multiple machines contribute their resources to training the model."}),"\n",(0,r.jsx)(n.li,{children:"torch.optim provides standard ways of updating the model so that the output starts to more closely resemble the answers specified in the training data."}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>s});var i=t(6540);const r={},a=i.createContext(r);function o(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);