//function to get the User agent details

async function getUserAgentDetails() {
  try{
    const response = await fetch(
      " https://api.apicagent.com/?ua=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.82 Safari/537.36"
    );
    const data = await response.json();
    console.log(data);
    showAgentDetails(data);

  }catch(err){
       console.log(err)
  }
}

//function to show the User agent details
function showAgentDetails(data) {
  const {
    client: { engine, name },
    device: { brand, type },
    os: { platform, version },
    os_family,
    user_agent,
  } = data;

  document.getElementById("browser-family").innerHTML = data.browser_family;

  document.getElementById("client-engine").innerHTML = engine;

  document.getElementById("client-name").innerHTML = name;
  document.getElementById("device-brand").innerHTML = brand;
  document.getElementById("device-type").innerHTML = type;
  document.getElementById("os-name").innerHTML = data.os.name;
  document.getElementById("os-platform").innerHTML = platform;
  document.getElementById("os-family").innerHTML = os_family;

  document.getElementById("user-agent").innerHTML = user_agent;
}
let browserContainer=document.getElementById("user-agent-container")
browserContainer.style.backgroundColor="orange"
browserContainer.style.width="90%"
browserContainer.style.height="500px"
browserContainer.style.margin="auto"
browserContainer.style.border="1px solid lightgray"
