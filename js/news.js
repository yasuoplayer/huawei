window.onload = function()
{
	var service = document.getElementById("service");
	var ic1 = document.getElementById("ic1");
	var showservice = document.getElementById("showservice");
	var count = 0;
	showservice.onclick = function()
	{
		if(count%2==0)
		{
			show();
			
		}
		else
		{
			hide();
			
		}
		count++;
	}
	function show()
	{
		service.style.display="block";
		showservice.getElementsByTagName("i")[0].className="fa fa-chevron-up";
		setTimeout(function(){
			if(fix==false)
			{
				service.style.top = "106px";
				service.style.opacity = "1";				
			}
			else
			{
				service.style.top = "76px";
				service.style.opacity = "1";
			}

		},100);	
		flg = true;
	}
	
	function hide()
	{
		showservice.getElementsByTagName("i")[0].className="fa fa-chevron-down";
		if(fix==true)
		{
			service.style.top = "46px";
		service.style.opacity = "0";			
		}
		else
		{
			service.style.top = "76px";
			service.style.opacity = "0";			
		}

		setTimeout(function(){
		service.style.display="none";	
		},100);
		flg = false;
	}
	
	var topcontent = document.getElementById("topcontent");
	var oldtop = 0;
	window.onscroll = function()
	{
	var top = document.documentElement.scrollTop;
	if(top<30)
	{
		fix=false;
		topcontent.style.transition="all 0s";
		setTimeout(function(){
			topcontent.style.position="relative";
			topcontent.style.top="0px";
		},15);

	}
	if(top=>30)
	{
		fix=true;
		service.style.top = '46px';
		topcontent.style.transition="all 1s";
		topcontent.style.position="fixed";
		topcontent.style.top="0px";
	}
	
	hide();
	if(oldtop<top) //往下走
	{
		topcontent.style.top="-76px";
	}
	else //往上走
	{
	
	}
		oldtop = top;
	}
	var sps = service.getElementsByClassName("top")[0].getElementsByTagName("span");
	var cons = service.getElementsByClassName("content")[0].children;
	for(var n=0;n<sps.length;n++)
	{
		sps[n].index=n;
		cons[n].index=n;
		sps[n].onclick = function()
		{
			sps[0].style.borderBottom="none";
			sps[1].style.borderBottom="none";
			sps[2].style.borderBottom="none";
			sps[this.index].style.borderBottom="2px red solid";	
			cons[0].style.display="none";
			cons[1].style.display="none";
			cons[2].style.display="none";
			cons[this.index].style.display="block";
//			alert(this.index);
		};
	}	
}
