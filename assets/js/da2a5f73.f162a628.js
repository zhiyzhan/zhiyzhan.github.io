"use strict";(self.webpackChunkgithubio=self.webpackChunkgithubio||[]).push([[8854],{2208:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"machine_learning/1.2 tensor","title":"1.2 tensor","description":"Tensor","source":"@site/docs/machine_learning/1.2 tensor.md","sourceDirName":"machine_learning","slug":"/machine_learning/1.2 tensor","permalink":"/docs/machine_learning/1.2 tensor","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var i=t(4848),o=t(8453);const s={},a=void 0,l={},c=[{value:"Tensor",id:"tensor",level:2},{value:"Data Representation using tensors",id:"data-representation-using-tensors",level:2}];function h(e){const n={h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"tensor",children:"Tensor"}),"\n",(0,i.jsx)(n.p,{children:"Deep learning consists of building a system that can transform data from one representation to another."}),"\n",(0,i.jsx)(n.p,{children:"The first step of this process is converting the input into floating-point numbers."}),"\n",(0,i.jsx)(n.p,{children:"For those who come from mathematics, physics, or engineering, the term tensor comes bundled with the notion of spaces, reference systems, and transformations between them. For everyone else, tensor refers to the generalization of vectors and matrices to an arbitrary number of dimensions, as shown in figure 2.2. Another name for the same concept is multidimensional arrays."}),"\n",(0,i.jsx)(n.p,{children:"A caveat, though: a small number of operations exist only as methods of the tensor\nobject. They\u2019re recognizable by the trailing underscore in their name, such as zero_,\nwhich indicates that the method operates in-place by modifying the input instead of\ncreating a new output tensor and returning it. The zero_ method, for example, zeros\nout all the elements of the input. Any method without the trailing underscore leaves\nthe source tensor unchanged and returns a new tensor:"}),"\n",(0,i.jsx)(n.h1,{id:"in73",children:"In[73]:"}),"\n",(0,i.jsx)(n.p,{children:"a = torch.ones(3, 2)"}),"\n",(0,i.jsx)(n.h1,{id:"in74",children:"In[74]:"}),"\n",(0,i.jsx)(n.p,{children:"a.zero_()\na"}),"\n",(0,i.jsx)(n.h1,{id:"out74",children:"Out[74]:"}),"\n",(0,i.jsx)(n.p,{children:"tensor([[0., 0.],\n[0., 0.],\n[0., 0.]])"}),"\n",(0,i.jsx)(n.p,{children:"Summary"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Neural networks transform floating-point representations into other floating-point representations, with the starting and ending representations typically being human-interpretable. The intermediate representations are less so."}),"\n",(0,i.jsx)(n.li,{children:"These floating-point representations are stored in tensors."}),"\n",(0,i.jsx)(n.li,{children:"Tensors are multidimensional arrays and the basic data structure in PyTorch."}),"\n",(0,i.jsx)(n.li,{children:"PyTorch has a comprehensive standard library for tensor creation and manipulation and for mathematical operations."}),"\n",(0,i.jsx)(n.li,{children:"Tensors can be serialized to disk and loaded back."}),"\n",(0,i.jsx)(n.li,{children:"All tensor operations in PyTorch can execute on the CPU as well as on the GPU with no change in the code."}),"\n",(0,i.jsx)(n.li,{children:"PyTorch uses a trailing underscore to indicate that a function operates in-place on a tensor (such as Tensor.sqrt_)."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"data-representation-using-tensors",children:"Data Representation using tensors"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Neural networks require data to be represented as multidimensional numerical tensors, often 32-bit floating-point."}),"\n",(0,i.jsx)(n.li,{children:"In general, PyTorch expects data to be laid out along specific dimensions according to the model architecture\u2014for example, convolutional versus recurrent. We can reshape data effectively with the PyTorch tensor API."}),"\n",(0,i.jsx)(n.li,{children:"Thanks to how the PyTorch libraries interact with the Python standard library and surrounding ecosystem, loading the most common types of data and converting them to PyTorch tensors is convenient"}),"\n",(0,i.jsx)(n.li,{children:"Images can have one or many channels. The most common are the red-greenblue channels of typical digital photos"}),"\n",(0,i.jsx)(n.li,{children:"Many images have a per-channel bit depth of 8, though 12 and 16 bits per channel are not uncommon. These bit depths can all be stored in a 32-bit floatingpoint number without loss of precision."}),"\n",(0,i.jsx)(n.li,{children:"Single-channel data formats sometimes omit an explicit channel dimension"}),"\n",(0,i.jsx)(n.li,{children:"Volumetric data is similar to 2D image data, with the exception of adding a third dimension (depth)."}),"\n",(0,i.jsx)(n.li,{children:"Converting spreadsheets to tensors can be very straightforward. Categoricaland ordinal-valued columns should be handled differently from interval-valued columns."}),"\n",(0,i.jsx)(n.li,{children:"Text or categorical data can be encoded to a one-hot representation through the use of dictionaries. Very often, embeddings give good, efficient representations."}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>a});var r=t(6540);const i={},o=r.createContext(i);function s(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);