# liuhao-insert-debugger
#####给页面中插入大量debugger,使页面无法调试 ，防止恶意攻击者调试代码

```
module: {
       rules: [{
         test: /\.(js|vue)$/,
         use: [{
           loader: "liuhao-insert-debugger"
         }]
       
      }]
     }

```
