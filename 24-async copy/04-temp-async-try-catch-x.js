
//אסור לעשות את זה - אסור לטפל בקוד אסינכרוני באמצאות  ב שגיאות 
// try and catch 
function f() {
    let arr = [10, 20, 30];
    let index = Math.floor(Math.random() * 10);
    if(index >=3){
        throw new Error("Index is too large");
    }
    return arr[index];
}
try{
    setTimeout(f, 5000);
} catch (err) {
    console.log(err);
}
console.log("continue...");