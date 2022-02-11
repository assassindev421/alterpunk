function initChart() {
  const ctx = document.getElementById('myChart');
  ctx.width = 3600;
  ctx.height = 500;

  const myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Private Sale 1%', 'Team 10%', 'Liquidity 2%', 'Farm 72.75%', 'Staking Events 15%', 'Public Events .25%'],
      datasets: [{
        label: '# of Votes',
        data: [1, 10, 2, 72.75, 15, 0.25],
        backgroundColor: [
          'rgba(255, 99, 132, 0.7)',
          'rgba(54, 162, 235, 0.7)',
          'rgba(255, 206, 86, 0.7)',
          'rgba(75, 192, 192, 0.7)',
          'rgba(153, 102, 255, 0.7)',
          'rgba(255, 159, 64, 0.7)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1,
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        xAxes: [{
          barPercentage: 0.9
        }]
      },
      plugins: {
        width: '500px',
        legend: {
          position: 'top',
          labels: {
            font: {
              size: 15
            },
            color: 'white',
            padding: 20,
            maxWidth: '1000px',
          },
        },
      }
    },
  });
}