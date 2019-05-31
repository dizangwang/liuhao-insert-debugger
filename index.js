
module.exports = function (src) {
 var str= src.replace(/this;/g,function(a,b){
          console.log(a)
  return a+";eval('debugger');"
 })
 return str
}