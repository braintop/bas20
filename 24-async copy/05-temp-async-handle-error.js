
//אסור לעשות את זה - אסור לטפל בקוד אסינכרוני באמצאות  ב שגיאות 
// try and catch 
function f(errorCallback, successCallback) {
    setTimeout(() => {
        let arr = [10, 20, 30];
        let index = Math.floor(Math.random() * 4);
        if (index >= 3) {
            // throw new Error("Index is too large");
            errorCallback();
        }
        else {
            successCallback(arr[index]);
        }
    }, 5000);
}
function zamarError(){
    console.log("no one listen to me");
}
function cookError(){
    console.log("no one eat my meal");
}
function firename(){
    console.log("fire fire...");
}

function zamarSuccess(x){

    console.log("zamar eat", x);
}

f(zamarError, zamarSuccess);


// f(zamarError);//asycn 
// f(cookError);

console.log("continue...");