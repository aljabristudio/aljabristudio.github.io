let men=document.getElementsByTagName("li")[0];
let ul1=document.getElementsByTagName("ul")[0];
let mensvg=document.getElementsByTagName("svg")[0];
let clo=document.getElementsByClassName("clock")[0];
let mentf=false;
men.onclick=()=>{
    if(mentf==false){
        ul1.style.width="200px";
        mensvg.style.transform="rotate(180deg)";
        clo.style.width="0px";
        clo.style.height="0px";
        mentf=true;
    }else{
        ul1.style.width="60px";
        mensvg.style.transform="rotate(0deg)";
        clo.style.width="200px";
        clo.style.height="200px";
        mentf=false;
    }
}
let s=document.getElementsByClassName("s")[0];
let m=document.getElementsByClassName("m")[0];
let h=document.getElementsByClassName("h")[0];
setInterval(()=>{
let t=new Date();
s.style.transform="translate(-50%,-50%) rotateZ("+t.getSeconds()*6+"deg)";
m.style.transform="translate(-50%,-50%) rotateZ("+t.getMinutes()*6+"deg)";
h.style.transform="translate(-50%,-50%) rotateZ("+t.getHours()*30+"deg)";
},1000);