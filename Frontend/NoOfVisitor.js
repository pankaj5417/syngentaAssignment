//Funtion to get the value of number of visitors

async function getData() {
  try{
    const response = await fetch(
      "https://api.countapi.xyz/hit/bololo/6d3139b2-da5c-4e6d-9e14-b7bba1a9ce59?"
    );
    const data = await response.json();
    console.log(data);
    document.getElementById("visits").innerHTML = data.value;

  }catch(err){
    console.log(err)
  }
}
getData();
