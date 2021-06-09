
function rp() {
   return new Promise((resolve, reject) => {
    setTimeout(function(){
        console.log('执行完成');
        resolve({
            success: true,
            data: {a:1}
        });
    }, 2000);
})
}

import{  rp } from'xx/aip.js'
async function test() {
    
    rp().then( res => {
         console.log('res----',res)
     })
     .catch( err => {
         console.log(err)
     })
    // const res = await rp()
    // console.log(res)
}
test()