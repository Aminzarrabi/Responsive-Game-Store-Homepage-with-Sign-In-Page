setInterval(fun,4000);
var n=1;
function fun() { 
    var temp =document.getElementById("im"+n);
    temp.style.display="none"
    var icon=document.getElementById("i"+n);
    icon.style.color=" rgba(0, 0, 0, 0.368)";
    n++;
    if(n==5)
        {
            n=1;
        }
    var temp =document.getElementById("im"+n);
    temp.style.display="block"
    var icon=document.getElementById("i"+n);
    icon.style.color="black";
}
function change(obj) {
    var x = obj.id;
    if(x == "right")
        {
            var temp =document.getElementById("im"+n);
            temp.style.display="none";
            var icon=document.getElementById("i"+n);
            icon.style.color=" rgba(0, 0, 0, 0.368)";
            n++;
            if(n==5)
                {
                    n=1;
                }
            var temp =document.getElementById("im"+n);
            temp.style.display="block"
            var icon=document.getElementById("i"+n);
            icon.style.color="black";
        }
    else
        {
            var temp =document.getElementById("im"+n);
            temp.style.display="none"
            var icon=document.getElementById("i"+n);
            icon.style.color=" rgba(0, 0, 0, 0.368)";
            n--;
            if(n==0)
                {
                    n=4;
                }
            var temp =document.getElementById("im"+n);
            temp.style.display="block"  
            var icon=document.getElementById("i"+n);
            icon.style.color="black";  
        }
}