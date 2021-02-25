// var lazyCreate1 = null;
// lazyCreate1 = setTimeout(function() {
//     var head = document.getElementsByTagName('head')[0];

//     var scriptArr = document.getElementsByTagName('script');
//     // console.log(scriptArr)
//     for(var i=0; i<scriptArr.length; i++) {
//         // console.log(scriptArr[i].src);
//         let h = scriptArr[i].src.split('http://');
//         // console.log(h);
//         if(h[1] == 'busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js') {
//             scriptArr[i].parentNode.removeChild(scriptArr[i]);
//             break;
//         }
//     }
//     var script = document.createElement('script');
//     script.type = 'text/javascript';
//     script.src = '//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js';
//     head.appendChild(script);
// },2000000);

function getBSZ() {
    // console.log(1)
    var lazyCreate1 = null;
    clearTimeout(lazyCreate1);
    var scriptArr = document.getElementsByTagName('script');
    // console.log(scriptArr)
    for(var i=0; i<scriptArr.length; i++) {
        let h = scriptArr[i].src.split('http://');
        if(h[1] == 'busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js') {
            scriptArr[i].parentNode.removeChild(scriptArr[i]);
            break;
        }
    }
    lazyCreate1 = setTimeout(function() {
        var head = document.getElementsByTagName('head')[0];
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = '//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js';
        head.appendChild(script);
        clearTimeout(lazyCreate1)
    },1000);
}

// var lBtns = document.getElementsByClassName('lazys');

// for(var j=0; j<lBtns.length; j++) {
//     lBtns[j].addEventListener('click',function() {
//         console.log(1)
//     })
// }