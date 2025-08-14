function f() {
    let p =  new Promise((resolve, reject) => {
        setTimeout(() => {
            let num =Math.floor(Math.random()*10);
            if(num%2==0){
                resolve("success" +num);
            }else{
                reject("error"+num);
            }
        }, 10000);
    });
    return p;
}

// f().then((result) => {
//     console.log(result);
// }).catch((err) => {
//     console.log(err);
// });


async function main(){
    try{
        let p = await f();
        console.log(p);
    }
    catch(err){
        console.log(err);
    }
}

main();
console.log("end");
