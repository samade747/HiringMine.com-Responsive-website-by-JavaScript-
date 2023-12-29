let com = document.querySelector('.com')
console.log(com)


function searchJobs(jobData){

com.innerHTML = ''

jobData.forEach(job => {
    com.innerHTML += `
    <div class="col-lg-5 col-sm-12 col-md-5 m-2"  >

    <div class="bg-white p-3" style="border-radius: 10px; box-shadow: 0px 10px 18px -3px rgba(7,4,0,5.1);">

                    <div class="d-flex justify-content-between align-items-center w-100">
                      <h6 id="CPNYName" class="m-2" >${job.companyName || "Not Mentioned"}</h6>
                      <img class="m-2" src="./images/innerlogo.png" width="30rem" style="border-radius: 50px; box-shadow: 0px 10px 18px -2px rgba(10,4,0,5.1);">
                    </div>

                    <h5 id="DESTN" class="m-2">${job.designation || "Not Mentioned"}</h5>

                    <h5 id="SALRY" class="m-2" >${job.salary || "Not Mentioned"}</h5>

                    

                    <h5 id="experience" class="m-2">${job.experience || "Not Mentioned"}</h5>

                    <p id="desc" class="m-2">${job.desc.slice(0 ,100) || "Not Mentioned"}</p>


                    <div class="d-flex justify-content-center align-items-center">
                      <h6 id="CITY" class="p-2 text-uppercase m-0">${job.city || "Not Mentioned"}</h6>
                      <h6 id="COUNTRY" class="p-2 text-uppercase m-0">${job.country || "Not Mentioned"}</h6>
                    </div>


                   <button id="BUTTON" class="d-flex justify-content-center align-items-center btn btn-outline-primary" class="m-2">ONSiTE</button>

                    <div class=" d-flex justify-content-between">
                      <p class="m-2 p-2" id="views">${job.views} Views </p>
                      
                   

                    <div class=" d-flex justify-content-between">
                      <p class="m-2 p-2" id="time">${job.updatedAt.slice(11, 19)} </p>  
                      
                    </div>
                  </div> 



                 </div>                                    
    
    `



});


}

let searchValue = document.querySelector('#searchvalue')
let searchbutton = document.querySelector('#searchbutton')

function search(){
    let searchValue = document.querySelector('#searchvalue')
    return searchValue.value
}


async function gettingApi(){
    let resp = await fetch(`https://maroon-shorts.cyclic.cloud/api/jobAds/all?limit=10&pageNo=1&keyWord=${search()}&category=`)
    .then((resp) => resp.json())
    .then((data) => {
        searchJobs(data.data)
        return data.data
    })
    .catch((error) => console.log(error));

    console.log(resp);
    return resp
}

gettingApi()

// let searchButton = document.querySelector('#searchbutton');
// searchButton.addEventListener('click', gettingApi);