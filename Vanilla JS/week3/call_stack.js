var a = 1;

function x(){
    console.log("hello");

}

function y(){
    x()
}
function z(){
    y()
    setTimeout(()=>{
        console.log("executed after 5 seconds")
    },5000);
}
z();