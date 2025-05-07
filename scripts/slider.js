setInterval(fun,2500);
var n=1;
function fun() { 
    var temp =document.getElementById("im"+n);
    temp.style.display="none"
    var icon=document.getElementById("i"+n);
    icon.style.color=" rgba(255, 255, 255, 0.31)";
    n++;
    if(n==7)
        {
            n=1;
        }
    var temp =document.getElementById("im"+n);
    temp.style.display="block"
    var icon=document.getElementById("i"+n);
    icon.style.color="rgba(0, 0, 0, 0.664)";
}
function change(obj) {
    var x = obj.id;
    if(x == "right")
        {
            var temp =document.getElementById("im"+n);
            temp.style.display="none";
            var icon=document.getElementById("i"+n);
            icon.style.color=" rgba(255, 255, 255, 0.31)";
            n++;
            if(n==7)
                {
                    n=1;
                }
            var temp =document.getElementById("im"+n);
            temp.style.display="block"
            var icon=document.getElementById("i"+n);
            icon.style.color="rgba(0, 0, 0, 0.664)";
        }
    else
        {
            var temp =document.getElementById("im"+n);
            temp.style.display="none"
            var icon=document.getElementById("i"+n);
            icon.style.color=" rgba(255, 255, 255, 0.31)";
            n--;
            if(n==0)
                {
                    n=6;
                }
            var temp =document.getElementById("im"+n);
            temp.style.display="block"  
            var icon=document.getElementById("i"+n);
            icon.style.color="rgba(0, 0, 0, 0.664)";  
        }
}