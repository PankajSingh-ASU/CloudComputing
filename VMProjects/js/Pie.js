
      
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
    