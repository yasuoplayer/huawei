window.onload = function()
{
	var service = document.getElementById("service");
	var ic1 = document.getElementById("ic1");
	var showservice = document.getElementById("showservice");
	var count = 0;
	var oldact ='';
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
		};
	}
	
	
	

	
	var time = document.getElementsByName("time");
	var place = document.getElementsByName("place");
	var gt="";
	var gp="";
	
	var j = [
	{"place":"中国","time":"09"},
	{"place":"德国","time":"04"},	                                     
	{"place":"德国","time":"09"},
	{"place":"中国","time":"04"},
	{"place":"法国","time":"04"},
	];
	
	var activity = document.getElementById("activity");
	
	function getmsg()
	{
		document.getElementById("pagenumber").value='5';
		document.getElementById("page").value='1';
		all=0;
		for(var i=0;i<time.length;i++)
		{
			if(time[i].checked)
			{
				for(var i1=0;i1<time.length;i1++)
				{
				time[i1].parentNode.children[1].className="fa fa-circle-o";			
				}

				time[i].parentNode.children[1].className="fa fa-dot-circle-o";
				gt = time[i].value.trim();
				if(gt=="1")
				{
					gt="09";
				}
				else if(gt=="2")
				{
					gt="04";
				}
			}
		}
		
		for(var i1=0;i1<place.length;i1++)
		{

			if(place[i1].checked)
			{
				gp =place[i1].value.trim();
				if(gp=="z")
				{
					gp="中国";
				}
				else if(gp=="d")
				{
					gp="德国";
				}
				else if(gp=="f")
				{
					gp="法国";
				}
				for(var i=0;i<place.length;i++)
				{
					place[i].parentNode.children[1].className="fa fa-circle-o";			
				}
				place[i1].parentNode.children[1].className="fa fa-dot-circle-o";				
			}
		}
		
		while(activity.hasChildNodes())
		{
			activity.removeChild(activity.firstChild);
		}
		
		for(var i3=0;i3<j.length;i3++)
		{

			if(gt==j[i3].time&&gp=="")
			{
				var li = document.createElement("li");
				activity.appendChild(li);
				li.innerHTML = '<span class="time">展会活动 | 2018年'+gt+'月03日 - 04日</span><br /><span class="name">2018运营转型峰会</span><br /><span class="place">'+j[i3].place+'</span><div class="img">	<div class="ic"><i class="fa fa-long-arrow-right"></i><span>了解更多</span></div></div>';	
			}
			if(gt==j[i3].time&&gp==j[i3].place)
			{
				var li = document.createElement("li");
				activity.appendChild(li);
				li.innerHTML = '<span class="time">展会活动 | 2018年'+gt+'月03日 - 04日</span><br /><span class="name">2018运营转型峰会</span><br /><span class="place">'+gp+'</span><div class="img">	<div class="ic"><i class="fa fa-long-arrow-right"></i><span>了解更多</span></div></div>';	
			}
			if(gt==""&&gp==j[i3].place)
			{
				var li = document.createElement("li");
				activity.appendChild(li);
				li.innerHTML = '<span class="time">展会活动 | 2018年'+j[i3].time+'月03日 - 04日</span><br /><span class="name">2018运营转型峰会</span><br /><span class="place">'+gp+'</span><div class="img">	<div class="ic"><i class="fa fa-long-arrow-right"></i><span>了解更多</span></div></div>';	
			}	
			if(gt==""&&gp=="")
			{
				var li = document.createElement("li");
				activity.appendChild(li);
				li.innerHTML = '<span class="time">展会活动 | 2018年'+j[i3].time+'月03日 - 04日</span><br /><span class="name">2018运营转型峰会</span><br /><span class="place">'+j[i3].place+'</span><div class="img">	<div class="ic"><i class="fa fa-long-arrow-right"></i><span>了解更多</span></div></div>';	
			}			
		}
		oldact = activity.innerHTML;
		
		
	}
	
	
	function  update()
	{
			for(i=0;i<time.length;i++)
		{
			time[i].onclick = function()
				{
					getmsg();
				}
		}
	
			for(i1=0;i1<place.length;i1++)
		{
			place[i1].onclick = function()
				{
					getmsg();
				}
		}
		getmsg();
	}
	
	update();
	
	var country = document.getElementById("country");

	var search = document.getElementById("tosearch");
	var countrycount=0;
	var old = country.innerHTML;
	search.onclick = function()
	{
		document.getElementById("pagenumber").value='5';
//		document.getElementById("page").value='1';		
		document.getElementById("page").value = 1;
		document.getElementById("pagenumber").value="5";
		var iplace = document.getElementById("iplace").value.trim();		
		countrycount=0;
		for(var i=0;i<j.length;i++)
		{
			if(iplace==j[i].place)
			{
				countrycount++;
			}
		}
		while(country.hasChildNodes())
		{
			country.removeChild(country.firstChild);
		}
		
		if(iplace=='')
		{
			country.innerHTML=old;
			getmsg();
			
		}
		else 
		{	for(var i1=0;i1<j.length;i1++)
			{
				if(iplace==j[i1].place)
				{
					var li = document.createElement("li");
					var vl='';
					country.appendChild(li);
					if(iplace=="中国")
					{
						vl='z';
					}
					if(iplace=="法国")
					{
						vl='f';
					}
					if(iplace=="德国")
					{
						vl='d';
					}
					li.innerHTML ='<input type="radio" name="place" id="place'+i1+'" value="'+vl+'"/><i class="fa fa-circle-o" aria-hidden="true"></i><label for="place'+i1+'">'+iplace+'</label><div>'+countrycount+'</div>';
					break;
				}
			}
		}
		update();
	}
	
	var cp = document.getElementById("clearpalce");			
	cp.onclick = function()
	{	
		document.getElementById("pagenumber").value='5';
		document.getElementById("page").value='1';		
		for(var i1=0;i1<place.length;i1++)
		{
			if(place[i1].checked==true)
			{
				place[i1].parentNode.children[1].className="fa fa-circle-o";
				place[i1].checked = false;
				gp="";
			}	
		}
		document.getElementById("iplace").value='';
		country.innerHTML=old;
		update();
	}
	
	var ct = document.getElementById("cleartime");		
	ct.onclick = function()
	{
		document.getElementById("pagenumber").value='5';
		document.getElementById("page").value='1';		
		for(var i1=0;i1<time.length;i1++)
		{
			if(time[i1].checked==true)
				{
					time[i1].parentNode.children[1].className="fa fa-circle-o";
					time[i1].checked = false;
					gt="";
				}
		}
		getmsg();
	}
	
	
	var pn = document.getElementById("pagenumber");
	var pg = document.getElementById("page");
	var nb = document.getElementById("number");	
	
	pn.onblur = change;
	pg.onblur = change;
	
	
	function change()
	{
		activity.innerHTML = oldact;
		var all = activity.getElementsByTagName("li").length;
		var pnv = pn.value.trim();	
		var ap = Math.ceil(all/pnv);
		var page = document.getElementById("page").value.trim();
		page = parseInt(page);
		if(page=="NaN"||page=="0")
		{
			page=1;
		}
//		alert("pnv="+pnv+" page="+page);
		if(all>=pnv)
		{
			for(i=1;i<=all;i++)
			{
				if(i<=(page-1)*pnv)
				{
					activity.removeChild(activity.firstChild);
				}
				if(i>page*pnv)
				{
					activity.removeChild(activity.lastChild);
				}
			}
		}
		else
		{
			while(activity.hasChildNodes())
			{
				activity.removeChild(activity.firstChild);
			}
		}
		nb.innerText = ap+'';
	}
	
	var next = document.getElementById("next");
	next.onclick = function()
	{
		var a = document.getElementById("page").value.trim();
		var b = document.getElementById("number").innerText;
		a = parseInt(a);
		b = parseInt(b);
		if(a<b)
		{
			
			a++;
			document.getElementById("page").value=a+'';
			change();
		}
	}
	
}
