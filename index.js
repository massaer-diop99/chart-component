
var url = 'data.json';
var request = new XMLHttpRequest();
request.open('GET', url);
 request.responseType = 'json';


request.onreadystatechange = function() {
  if (request.readyState === 4 && request.status === 200) {
    var data = request.response;
    console.log(data);

    let days = data.map(function (elem) {
      return elem.day
    })
    console.log(days);


    let amounts = data.map(function (elem) {
      return elem.amount
      
    })
   //console.log(amounts);

//-------

    const ctx = document.getElementById('myChart');
    let backgroundcolor = [];
    let hoverBackgroundcolor = [];

    let date = new Date();
    let datelocal = date.toLocaleString('en', {
    weekday: 'short',
  });
    c = datelocal.toLowerCase();

  //  console.log(c);
/*
    for (let i = 0; i < days.length; i++) {
      const b = days[i];     
     // console.log(element);
     if (days[i] == c) {
      backgroundcolor.push('#76b5bc')
      hoverBackgroundcolor.push('#b4dfe5')
     }else{
      backgroundcolor.push('#ec755d')
      hoverBackgroundcolor.push('#ff9b87')
     }

    }
*/
    let charts = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: days,

      datasets: [
        {
        data: amounts,
        backgroundColor:data.map((item) => item.day === c ? 'hsl(186, 34%, 60%)' : 'hsl(10, 79%, 65%)' ),
      //  backgroundColor: backgroundcolor,
        borderRadius:[3],
        //hoverBackgroundColor: hoverBackgroundcolor, 
      },
    ],
    },

    options: {
      
      plugins: {
          legend: {
            display: false,                    
        },
       
  
      },
    
  }
  
  });

 // charts.config._config.data.datasets[0].backgroundColor.push('red')
  
  //charts.config._config.data.datasets[0].hoverBackgroundColor.push('blue')
//-------

  
  //console.log(charts);
 
 
  //console.log(hoverBackgroundColor);


    
}
}

 request.send();






//var d = document.getElementById('t');
//let c = 7;
//let date = new Date();
//let datelocal = date.toLocaleString('en', {
 // weekday: 'short',
//});
//c =  datelocal;
//console.log(c);

//const days = data.map(function (elem) {
 // return elem.day
//})
//console.log(days);
//const jourj = days.find(elem => elem == c.toLowerCase());


//console.log(jourj);
