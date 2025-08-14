function f(){
    let arr = [10, 20, 30];
    let index = Math.floor(Math.random() * 10);
    if(index >=3){
        throw new Error("Index is too large");
    }
    return arr[index];
}
try{
    let x = f();
    console.log(x);
} catch (err) {
    console.log(err.message);
}


