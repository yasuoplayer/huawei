window.onload = function()
{
	var mqbox1 = document.getElementById("mqbox1");
	var mq1 = document.getElementById("mq1");
	
	var mqbox2 = document.getElementById("mqbox2");
	var mq2 = document.getElementById("mq4");	
	var i = 0;
	var i1 = 0;
	var nav1 = document.getElementById("nav1");
	var nav2 = document.getElementById("nav2");
	var left1 = document.getElementById("left1");
	var right1 = document.getElementById("right1");
	var left2 = document.getElementById("left2");
	var right2 = document.getElementById("right2");	
	var flg = false;
	var fix = false;
	var click1 = false;
	var chick2 = false;
	var mqbox2con = mqbox2.getElementsByClassName("one")[0].getElementsByClassName("content")[0];
	function mqmove()
	{
		nav1.getElementsByTagName("li")[0].className="";
		nav1.getElementsByTagName("li")[1].className="";
		i++
		{
			if(i>2)
			{
				i=1;
			}
		}
		if(i%2==0)
		{
			nav1.getElementsByTagName("li")[0].className="active";
		}
		if(i%2!=0)
		{
			nav1.getElementsByTagName("li")[1].className="active";
		}
		if(i==1||i==0)
		{
			mqbox1.style.transform = "translateX(-1396px)";
		}
		if(i==2)
		{
			mqbox1.style.transform = "translateX(-2792px)";
			nav1.getElementsByTagName("li")[1].onclick=a;
			setTimeout(function(){
				mqbox1.style.transition ="transform 0s";
				mqbox1.style.transform = "translateX(0px)";
				setTimeout(function(){
					nav1.getElementsByTagName("li")[1].onclick = function()
					{
						nav1.getElementsByTagName("li")[0].className="";
						nav1.getElementsByTagName("li")[1].className="";
						clearInterval(t1);
						this.className="active";
						i = this.index;
						mqbox1.style.transform = "translateX("+-1396*this.index+"px)";
						t1 = setInterval(mqmove,2000);					
					}
				},20);
				setTimeout(function(){
					mqbox1.style.transition ="transform 0.5s";
				},20);
			},500);
			
			
		}

	}
	
	
	function mqmove1()
	{
		nav2.getElementsByTagName("li")[0].className="";
		nav2.getElementsByTagName("li")[1].className="";
		i1++
		{
			if(i1>2)
			{
				i1=1;
			}
		}
		if(i1%2==0)
		{
			nav2.getElementsByTagName("li")[0].className="active";
		}
		if(i1%2!=0)
		{
			nav2.getElementsByTagName("li")[1].className="active";
		}
		if(i1==1||i1==0)
		{
			mqbox2.style.transform = "translateX(-1396px)";
		}
		if(i1==2)
		{
			mqbox2.style.transform = "translateX(-2792px)";
			nav2.getElementsByTagName("li")[1].onclick=a;
			setTimeout(function(){
				mqbox2.style.transition ="transform 0s";
				mqbox2.style.transform = "translateX(0px)";
				setTimeout(function(){
					nav2.getElementsByTagName("li")[1].onclick = function()
					{
						nav2.getElementsByTagName("li")[0].className="";
						nav2.getElementsByTagName("li")[1].className="";
						clearInterval(t2);
						this.className="active";
						i2 = this.index;
						mqbox2.style.transform = "translateX("+-1396*this.index+"px)";
						t2 = setInterval(mqmove1,2000);					
					}
				},20);
				setTimeout(function(){
					mqbox2.style.transition ="transform 0.5s";
				},20);
			},500);
			
			
		}

	}
	

	var t1=setInterval(mqmove,2000);
	var t2=setInterval(mqmove1,2000);
	
	mqbox1.onmouseenter = function()
	{
		clearTimeout(t1);
		clearInterval(t1);
		left1.style.opacity="0.6";
		right1.style.opacity="0.6";
	}
	
	mqbox1.onmouseleave = function()
	{
		clearTimeout(t1);
		t1=setInterval(mqmove,2000);		
		left1.style.opacity="0";
		right1.style.opacity="0";;	
	}
	
	
	
	
	mqbox2con.onmouseenter = function()
	{
		clearInterval(t2);
		clearInterval(t2);
		left2.style.opacity="0.6";
		right2.style.opacity="0.6";
	}
	
	mqbox2con.onmouseleave = function()
	{
		clearInterval(t2);
		t2=setInterval(mqmove1,2000);
		left2.style.opacity="0";
		right2.style.opacity="0";	
	}
	
	function a()
	{
		
	}
	
	left1.onmouseenter = function()
	{
		left1.style.opacity = "1";
		right1.style.opacity = "0.6";
//		left1.style.filter='alpha(opacity:100)';
	}
	
	left1.onmouseleave = function()
	{
		
		left1.style.opacity = "0.6";
		right1.style.opacity = "0.6";
//		left1.style.filter='alpha(opacity:60)';
	}
	
	
	
	right1.onmouseenter = function()
	{
		left1.style.opacity = "0.6";
		right1.style.opacity = "1";
	}
	
	right1.onmouseleave = function()
	{
		left1.style.opacity = "0.6";
		right1.style.opacity = "0.6";
	}	
	
	
	left1.onclick = function()
	{
		clearInterval(t1);
		mqmove();
		ban1();
		t1=setInterval(mqmove,2000);
		
	}
	
	function ban1()
	{
		left1.onclick = null;
		right1.onclick = null;
		setTimeout(function(){
			
			left1.onclick = function()
			{
				clearInterval(t1);
				mqmove();
				ban1();
				t1=setInterval(mqmove,2000);					
			}
			
			right1.onclick = function()
			{
				clearInterval(t1);
				mqmove();
				ban1();
				t1=setInterval(mqmove,2000);					
			}			
		},500);
	}
	
	
	function ban2()
	{
		left2.onclick = null;
		right2.onclick = null;
		setTimeout(function(){
			
			left2.onclick = function()
			{
				clearInterval(t2);
				mqmove1();
				ban2();
				t2=setInterval(mqmove1,2000);					
			}
			
			right2.onclick = function()
			{
				clearInterval(t2);
				mqmove1();
				ban2();
				t2=setInterval(mqmove1,2000);					
			}			
		},500);
	}	
	
	right1.onclick = function()
	{
		clearInterval(t1);
		mqmove();
		t1=setInterval(mqmove,2000);
	}
	
	
		left2.onmouseenter = function()
	{
		left2.style.opacity = "1";
		right2.style.opacity = "0.6";
	}
	
	left2.onmouseleave = function()
	{
		left2.style.opacity = "0.6";
		right2.style.opacity = "0.6";
	}
	
	
	
	right2.onmouseenter = function()
	{
		right2.style.opacity = "1";
		left2.style.opacity = "0.6";
	}
	
	right2.onmouseleave = function()
	{
		right2.style.opacity = "0.6";
		left2.style.opacity = "0.6";
	}	
	
	
	
	left2.onclick = function()
	{
		clearInterval(t2);
		mqmove1();
		ban2();
		t2=setInterval(mqmove1,2000);
	}
	
	right2.onclick = function()
	{
		clearInterval(t2);
		mqmove1();
		ban2();
		t2=setInterval(mqmove1,2000);
	}
	
	for(var i2=0;i2<nav1.getElementsByTagName("li").length;i2++)
	{
		nav1.getElementsByTagName("li")[i2].index = i2;
		nav2.getElementsByTagName("li")[i2].index = i2;
		nav1.getElementsByTagName("li")[i2].onclick = function()
		{
			nav1.getElementsByTagName("li")[0].className="";
			nav1.getElementsByTagName("li")[1].className="";
			clearInterval(t1);
			this.className="active";
			i = this.index;
			mqbox1.style.transform = "translateX("+-1396*this.index+"px)";
			t1 = setInterval(mqmove,2000);
			
		}
		nav2.getElementsByTagName("li")[i2].onclick = function()
		{
			nav2.getElementsByTagName("li")[0].className="";
			nav2.getElementsByTagName("li")[1].className="";
			clearInterval(t2);
			this.className="active";
			i2 = this.index;
			mqbox2.style.transform = "translateX("+-1396*this.index+"px)";
			t2 = setInterval(mqmove1,2000);
			
		}		
		
	}
	
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
//			topcontent.style.position="relative";
//			topcontent.style.top="0px";		
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
	
	var news = document.getElementById("news");
	news.onclick = function()
	{
		location.href="news.html";
	}
	
}

