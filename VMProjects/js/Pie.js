
      
      var Memory = [
          ['CPU Usage', 'Memory in GBs '],
          ['used',     10],
          ['Unused', 90]
        ];
      var CPU = [
                    ['CPU Usage', 'Memory in GBs '],
                    ['used',     30],
                    ['Unused', 70]
                  ];
      var Resources = [
                    ['CPU Usage', 'Memory in GBs '],
                    ['used',     20],
                    ['Unused', 80]
                  ];

        var options = {
          title: 'CPU Usage',
          is3D: true,
        };
        var options1 = {
                title: 'Memory Usage',
                is3D: true,
              };
        var options2 = {
                title: 'Resource Utilization',
                is3D: true,
              };
        
function getUrlParameter(sParam) {
            var sPageURL = decodeURIComponent(window.location.search.substring(1)),
                sURLVariables = sPageURL.split('&'),
                sParameterName,
                i;

            for (i = 0; i < sURLVariables.length; i++) {
                sParameterName = sURLVariables[i].split('=');

                if (sParameterName[0] === sParam) {
                    return sParameterName[1] === undefined ? true : sParameterName[1];
                }
            }
        };     
        
  //collect data from ajax call 
        function loadVMData()
        {
        	//
        	var heading=getUrlParameter('name');
        	console.log(heading);
        	$('heading').text(heading);
        	$.ajax ({
        		
        	       url: "Pie.html",
        	       data: "abc",
        	       success: function(data) {
        	    	   console.log('I am in loadVMData');
        	    	   //replace Memory, cpu, Resources variables from data object values
        	    	   
        	    	   google.charts.load("current", {packages:["corechart"]});
        	    	   google.charts.setOnLoadCallback(drawChart);
        	    	   //window.location.href='ListVMs.html';
        	}
        	  });
        	
        }
        
        
      function drawChart() {
        var data = google.visualization.arrayToDataTable(Memory);
        var chart = new google.visualization.PieChart(document.getElementById('piechart_3d'));
        chart.draw(data, options);
        
        data = google.visualization.arrayToDataTable(CPU);
        var chart1 = new google.visualization.PieChart(document.getElementById('piechart_ram'));
        chart1.draw(data, options1);
        
        data = google.visualization.arrayToDataTable(Resources);
        var chart2 = new google.visualization.PieChart(document.getElementById('piechart_cpu'));
        chart2.draw(data, options2);
      }
    