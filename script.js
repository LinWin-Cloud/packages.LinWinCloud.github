window.onload = function()
{
    var menu = document.getElementById('menu');
    var leftmenu = document.getElementById('leftmenu');
    var iframe = document.getElementById('iframe');
    var exit = document.getElementById('exit');
    var iw = iframe.clientWidth;
    console.log(iw);
    iframe.style.width = iw - 60 + 'px';
    var ih = iframe.clientHeight;
    iframe.style.height = ih - 60 + 'px';
    console.log(ih)
    leftmenu.onmouseover = function()
    {
        menu.style.display = 'block';
        leftmenu.onmouseout = function()
        {
            menu.style.display = 'none';
        }
    }
    menu.onmouseover = function()
    {
        menu.style.display = 'block';
        menu.onmouseout = function()
        {
            menu.style.display = 'none';
        }
    }
    exit.onclick = function(){
        menu.style.display = 'none';
        console.log('close menu')
    }
}