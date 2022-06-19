	var names=["陈茜","常正义","冯亚云","雷金萍","李旭","刘琪","柳黄河","秦鸿哲","朱宏杰",
				"陈茜","常正义","冯亚云","雷金萍","李旭","刘琪","柳黄河","秦鸿哲","朱宏杰",
				"陈茜","常正义","冯亚云","雷金萍","李旭","刘琪","柳黄河","秦鸿哲","朱宏杰",
				"陈茜","常正义","冯亚云","雷金萍","李旭","刘琪","柳黄河","秦鸿哲","朱宏杰"];
	var dis_names=document.getElementsByClassName('names')[0];
	var names_list="";
	for(var i=0;i<35;i++) names_list+="<li>"+names[i]+"</li>";
	dis_names.innerHTML=names_list;
	console.log(names[0]);