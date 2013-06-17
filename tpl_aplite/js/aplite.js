function apSetCookie(c_name,value,expiredays)
{
	var exdate=new Date();
	exdate.setDate(exdate.getDate()+expiredays);
	document.cookie=c_name+ "=" +escape(value)+
	((expiredays==null) ? "" : ";expires="+exdate.toGMTString());
}

function apGetCookie(c_name)
{
	if (document.cookie.length>0)
	{
		c_start=document.cookie.indexOf(c_name + "=");
		if (c_start!=-1)
		{ 
			c_start=c_start + c_name.length+1; 
			c_end=document.cookie.indexOf(";",c_start);
			if (c_end==-1) c_end=document.cookie.length;
			return unescape(document.cookie.substring(c_start,c_end));
		} 
	}
	return "";
}

function apSetLoginCookie()
{
	apSetCookie('ap_gotostartpage', 1, 7);
	apSetCookie('ap_loginpagelocation', document.location.href, 7);
}

function apSetStartPage(anchor)
{
	apSetCookie('ap_startpage', document.location.href, 7);
	var myFx = new Fx.Style(anchor, 'opacity');
	myFx.start(0,1);
}

