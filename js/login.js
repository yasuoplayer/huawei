window.onload = function()
{
	
	var reg1 = new RegExp('[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}');
	var reg2 = new RegExp('((13[0-9])|(15[^4,\\D])|(14[57])|(17[0-9])|(18[0,0-9]))\\d{8}');
	var account = document.getElementById("account");
	var psw = document.getElementById('psw');
	var tips1 = document.getElementsByClassName("tips1")[0];
	var tips2 = document.getElementsByClassName("tips2")[0];
	var find = false;
	var j = [
	{'account':'13414851441','psw':'qwerty'},
	{'account':'28449484@qq.com','psw':'asdfgh'},
	];
	var flg;
	check = function()
	{
		av = account.value.trim();
		pv = psw.value.trim();
		find=false;
		flg=true;
		if(av=='')
		{
			account.focus();
			tips1.innerHTML='账号不能为空';
			account.style.border="red 1px solid";
			flg=false;
		}
		else
		{
			tips1.innerHTML='';
			account.style.border="#D4D4D4 1px solid";
		}
		if(pv=='')
		{
			psw.focus();
			tips2.innerHTML='密码不能为空';
			psw.style.border="red 1px solid";
			flg=false;
		}
		else
		{
			tips2.innerHTML='';
			psw.style.border="#D4D4D4 1px solid";
		}

		
		if(reg1.test(av)==false&&reg2.test(av)==false&&flg==true)
		{
			account.focus();
			tips1.innerHTML='请输入正确的电话号码或者邮箱';
			account.style.border="red 1px solid";
			flg=false;
		}
		else
		{
			tips1.innerHTML='';
			account.style.border="#d4d4d4 1px solid";
		}
		
		
		
		if(flg==true)
		{
			for(var i=0;i<j.length;i++)
			{
				if(av==j[i].account)
				{
					find=true;
					if(pv!=j[i].psw)
					{
					psw.focus();
					tips2.innerHTML='密码错误';
					psw.style.border="red 1px solid"
					flg=false;
					}
					else
					{
						psw.style.border="#D4D4D4 1px solid";
					}
				if(av==j[i].account&&pv==j[i].psw&&flg==true)
					{
						alert("登录成功");
						tips1.innerHTML="";
						tips2.innerHTML="";
						account.style.border="#D4D4D4 1px solid";
						psw.style.border="#D4D4D4 1px solid";		
					}					
				}
				if(find==false)
				{
					account.focus();
					tips1.innerHTML='账号不存在';
					account.style.border="red 1px solid";					
				}
			}
		}
		
//		if(flg==true)
//		{
//			alert("登录成功");
//			tips1.innerHTML="";
//			tips2.innerHTML="";
//			account.style.border="#D4D4D4 1px solid";
//			psw.style.border="#D4D4D4 1px solid";			
//		}
	}
	
	
	
}
