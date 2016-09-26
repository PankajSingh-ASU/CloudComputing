
      
      var dataValues = [
          ['Task', 'Hours per Day'],
          ['Work',     11],
          ['Eat',      2],
          ['Commute',  2],
          ['Watch TV', 2],
          ['Sleep',    7]
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
    