(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{116:function(e,t,n){},124:function(e,t,n){"use strict";n.r(t);var r=n(65),a=n.n(r),c=(n(107),n(0)),o=n.n(c),u=n(66),l=n.n(u),i=(n(116),n(22)),m=n.n(i),s=n(67),v=n.n(s),d=(n(62),n(118),["__ConnectComponent__","__ConnectComponentRef__"]),f=o.a.memo((function(e){var t=e.__ConnectComponent__,n=e.__ConnectComponentRef__,r=v()(e,d);return o.a.createElement(t,m()({},r,{ref:n}))}));function C(e){return function(t,n){void 0===n&&(n={});var r=n.pure,a=void 0===r||r;return function(n){var r=function(r,c){return o.a.createElement(e.Consumer,null,(function(e){var u=Object.assign({},r,t(e,r));return a?o.a.createElement(f,m()({},u,{__ConnectComponent__:n,__ConnectComponentRef__:c})):o.a.createElement(n,m()({},u,{ref:c}))}))};return o.a.forwardRef(r)}}}var E=o.a.createContext(null),p=C(E),h=o.a.createContext(null),_=o.a.createContext(null),y=o.a.createContext(null),b=o.a.createContext(null),k=function(e){var t=Object.keys(e),n=o.a.createContext({}),r=function(r){for(var a=r.children,c=Object.create(null),u=0;u<t.length;u++){var l=t[u];c[l]=o.a.useContext(e[l])}return o.a.createElement(n.Provider,{value:c},a)},a=n.Consumer;return n.Consumer=function(e){return o.a.createElement(r,null,o.a.createElement(a,e))},C(n)}({counter1:h,counter2:_,counter3:y,counter4:b}),g=n(68),w=n.n(g);function x(e){var t=o.a.useState(0),n=w()(t,2),r=n[0],a=n[1];return o.a.useEffect((function(){a(r+1)}),[e]),o.a.createElement("span",{style:{marginTop:8,color:"#7b7b7b"}},"\u5f53\u524d\u7ec4\u4ef6\u5237\u65b0\u6b21\u6570\uff1a",r)}var P=p((function(e,t){return{counter:e[t.type]}}))((function(e){return o.a.createElement("div",{className:"counter"},o.a.createElement("div",{style:{padding:16}},o.a.createElement("button",{onClick:function(){return e.onClick()}},"\u70b9\u51fb(",e.type,")"),o.a.createElement("span",{style:{marginLeft:8}},e.counter," \u6b21"),o.a.createElement("div",null,o.a.createElement(x,null)),o.a.createElement("div",null,e.children)))}));var S=k((function(e){return{counter1:e.counter1.value,counter3:e.counter3.value}}))((function(e){return o.a.createElement("div",{className:"counter"},o.a.createElement("div",{style:{padding:16}},o.a.createElement("div",null,"counter1\u70b9\u51fb ",e.counter1," \u6b21"),o.a.createElement("div",null,"counter3\u70b9\u51fb ",e.counter3," \u6b21"),o.a.createElement("div",null,o.a.createElement(x,null))))})),R=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).state={counter1:0,counter2:0,counter3:0,counter4:0},t.handleCounter1=function(){t.setState({counter1:t.state.counter1+1})},t.handleCounter2=function(){t.setState({counter2:t.state.counter2+1})},t.handleCounter3=function(){t.setState({counter3:t.state.counter3+1})},t.handleCounter4=function(){t.setState({counter4:t.state.counter4+1})},t}return a()(t,e),t.prototype.render=function(){return o.a.createElement("div",{className:"main"},o.a.createElement(E.Provider,{value:this.state},o.a.createElement(h.Provider,{value:{value:this.state.counter1}},o.a.createElement(_.Provider,{value:{value:this.state.counter2}},o.a.createElement(y.Provider,{value:{value:this.state.counter3}},o.a.createElement(b.Provider,{value:{value:this.state.counter4}},o.a.createElement(P,{type:"counter1",onClick:this.handleCounter1}),o.a.createElement(P,{type:"counter2",onClick:this.handleCounter2}),o.a.createElement(P,{type:"counter3",onClick:this.handleCounter3}),o.a.createElement(P,{type:"counter4",onClick:this.handleCounter4},o.a.createElement("span",null,"\u7531\u4e8e\u8be5\u7ec4\u4ef6children\u6bcf\u6b21\u90fd\u662f\u65b0\u7684\uff0c\u6240\u4ee5\u6bcf\u6b21\u90fd\u4f1a\u5237\u65b0")),o.a.createElement(S,null)))))))},t}(o.a.Component);l.a.render(o.a.createElement(R,null),document.getElementById("root"))},69:function(e,t,n){n(70),e.exports=n(124)}},[[69,1,2]]]);