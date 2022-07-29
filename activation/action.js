window.onload = function()
{
    var code = document.getElementById('code');
    var Getcode = document.getElementById('GetCode');
    var text = document.getElementById('text');
    Getcode.onclick = function()
    {
        randomMath = Math.floor(Math.random()*30); 
        code.src = randomMath+"/"+randomMath+".txt";
        text.innerHTML = "通道 Passage: <em>"+randomMath+"</em>";
    }
}