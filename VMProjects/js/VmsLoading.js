/**
 * 
 */
function loadVMs()
{
	//
	$.ajax ({
		
	       url: "ListVMs.html",
	       data: "abc",
	       success: function(data) {
	    	   console.log('I am in ListVMs');
	    	   vms=getVMs(data);
	    	   addDivs(vms);
	    	   //window.location.href='ListVMs.html';
	}
	  });
	
}
function vmDetails(elem)
{
    console.log('Inside vmDetails ');
    	var url='Pie.html?id='+ elem.id+'&name='+elem.id ;
    	console.log(url);
        window.location.href = url;
    
}

function getVMs(data)
{
	console.log('I am in getVMs');
//	get data json and convert into list of names like
	var vms =["Virtual Machine 1","Virtual Machine 2","Virtual Machine 3","Virtual Machine 4","Virtual Machine 5"];
	return vms;
}

function addDivs(vms)
{
	var n=vms.length;
	var divElem;//=document.createElement("div");
	 s=2;//0+Math.sqrt(n);
	for(i=0;i<n;i++)
	{
		if(i%s==0)
			{
			console.log("i="+i+"s="+s);
			divElem = document.createElement("div");
			//divElem.setAttribute("class","imgContainer");
			document.getElementById("VMBox").appendChild(divElem);
			
		}
		var elem=getDiv(vms[i]);
		divElem.appendChild(elem);
		console.log('loadVMs method');
		

	}
}
function getDiv(name,w,h)
{
	var divElem = document.createElement("div");
	divElem.setAttribute("class","imgContainer");
	var elem = document.createElement("img");
	elem.src="./images/vm_icon.png";
	elem.setAttribute("height", "200");
	elem.setAttribute("width", "200");
	elem.setAttribute("id", name);
	elem.setAttribute("class","thumbnail");
	elem.setAttribute("onClick","vmDetails(this)");
	//elem.setAttribute("id", "1234");
	divElem.appendChild(elem);
	var label = document.createElement("p");
	label.innerHTML=name;
	divElem.appendChild(label);
	return divElem;
	

}