
      
      var Memory = [
          ['CPU Usage', 'Memory in GBs '],
          ['used',     10],
          ['Unused', 90]
        ];

        var options = {
          title: 'My Daily Activities',
          is3D: true,
        };
      function drawChart() {
        var data = google.visualization.arrayToDataTable(dataValues);

        

        var chart = new google.visualization.PieChart(document.getElementById('piechart_3d'));
        chart.draw(data, options);
      }
    