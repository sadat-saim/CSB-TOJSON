// fetch('http://localhost:8080/').then(res=>res.json()).then(dataArr=> {
//     dataArr.forEach(data=>{
//         const tbody = document.querySelector('tbody')
//       console.log(data)
//     })
// })

async function fetchDataJSON() {
    const response = await fetch('http://localhost:8080/');
    const data = await response.json();
    return data;
  }

 fetchDataJSON().then(dataArr => {
    dataArr.reverse().forEach((data, i)=>{
                if(i===0 || i%17 === 0){
                const tbody = document.querySelector('tbody')
                tbody.insertAdjacentHTML('afterbegin',`<tr>
                <td scope="col" contenteditable="true" class='fw-bold'></td>
                <td scope="col">${data.field2}</td>
                <td scope="col">${data.field1}</td>
                <td scope="col">${((data.field2*1000)/(3.1416*8.083*8.083)).toFixed(2)}</td>
                <td scope="col">${(data.field1/200).toFixed(2)}</td>
                <td></td>
              </tr>`)
                }
            //   console.log(data)
            })
  }).then(()=>{
    
  })





