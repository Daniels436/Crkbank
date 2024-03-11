const transactionData = {
    labels: ['2024-03-08', '2024-03-09', '2024-03-10'],
    datasets: [{
      label: 'Transações',
      data: [200, 500, 1000],
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1
    }]
  };
  
  // Renderizar o gráfico
  const ctx = document.getElementById('transaction-chart').getContext('2d');
  new Chart(ctx, {
    type: 'line',
    data: transactionData,
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            color: 'white' // Define a cor das letras do eixo y como branco
          }
        },
        x: {
          ticks: {
            color: 'white' // Define a cor das letras do eixo x como branco
          }
        }
      },
      plugins: {
        legend: {
          labels: {
            color: 'white' // Define a cor do texto da legenda como branco
          }
        }
      }
    }
  });