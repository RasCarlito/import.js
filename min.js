/*! (C) Andrea Giammarchi, ISC License */
!function e(t,n){var r=self.__import__||(self.__import__=t),i=[],o=/([`"'])(?:(?=(\\?))\2.)*?\1/g,s=function(e,t){return i.push(e),t+"$"+t},c=function(){return i.shift()},u=function(e){if(/^(?:[a-z]+:)\/\//.test(e))return e;for(var t,n=_.slice(0,_.lastIndexOf("/")),r=e.length,i=0,o=0;i<r;o=i+1)if((i=e.indexOf("/",o))<0)i=r,n+="/"+e.slice(o);else if(0===i)n="";else{for(t=o,o=i;o&&"."===e.charAt(o-1);)--o;switch(i-o){case 0:n+="/"+e.slice(t,i);break;case 1:break;case 2:n=n.slice(0,n.lastIndexOf("/"))}}return n.replace(/\/\.\//g,"/")},a=function(n){return r.m[n]||(r.m[n]=new Promise(function(r,i){var u=new XMLHttpRequest;u.open("GET",n),u.onerror=i,u.onload=function(){var i,a,f=u.responseText.replace(o,s),_=/^(?:export|import)\s/m.test(f),m="__import__",d=m+"r"+t.i++,h=0;f=f.replace(/(^|[^._a-zA-Z0-9$])import\(/g,"$1__import__(").replace(o,c),self[d]=function(e){delete self[d],r(e)},n=JSON.stringify(n),_?(i=[],p(l("module"),"const __import__="+e+"(self."+m+","+n+");let __import__default;\n"+f.replace(/^export\s+(default\s+)?([^=({;]+)/gm,function(e,t,n){return a=n.replace(/^[a-z]+\s(\S+)[\s\S]*$/,"$1")||n,t?(/^(?:class|function)\s*$/.test(a)?(a="__import__"+h++,e=e.replace(n,n+" "+a)):/^new\s/.test(n)&&(a="__import__default",e=e.replace(n,a+"="+n)),i.push("default:"+a)):i.push(a),e}).replace(/export\s+\{([^}]+?)\}/g,function(e,t){return i.push(t.replace(/(\S+)\s+as\s+(\S+)/g,"$2:$1")),e})+";\n"+d+"({"+i.join(",")+"})")):p(l(""),d+"(function(exports,"+m+'){"use strict";return function(){'+f+";\n}(),exports}({},"+e+"("+m+","+n+")))")},u.send(null)}))},l=function(e){return n=document.createElement("script"),e&&(n.type=e),n},p=function(e,t){r.n&&e.setAttribute("nonce",r.n),e.textContent=t,setTimeout(function(){m.removeChild(e)},1),m.appendChild(e)},f=location.pathname,_="string"==typeof n?n:function(e){return"/"===e.charAt(0)?e:f.slice(0,f.lastIndexOf("/")+1)+e.replace(/^[a-zA-Z_-]/,"./$&")}(n.getAttribute("data-main")),m=document.documentElement;return r.m||(t.m=Object.create(null),t.i=0,t.n=n.getAttribute("nonce"),a(u(_))),function(e){return a(u(e))}}({},document.querySelector("script[data-main]"));
