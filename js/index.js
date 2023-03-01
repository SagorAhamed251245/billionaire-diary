const loadData= ()=>{
    const url = 'https://forbes400.onrender.com/api/forbes400?limit=10'
    fetch(url)
    .then(res=> res.json())
    .then(data=> ShowAllBillionaires(data))
}

const ShowAllBillionaires=(data)=>{
    const cardParent= document.getElementById('card-parent')
    data.forEach(element => {
        const{uri,person,rank,countryOfCitizenship,state,city,financialAssets}=element;
        // console.log(financialAssets)
       
        cardParent.innerHTML +=`
               <div class="col">
                        <div class="card h-auto w-100 d-flex flex-row">
                            <div class=" d-flex align-items-center bg-dark w-50 rounded-4" >
                                <img src=${person.squareImage} class="img-fluid rounded " alt="...">
                            </div>
                            <div class="card-body w-50">
                                <h5 class="card-title ">Name: ${uri} </h5>
                                <p class="p-0 m-0"> </p> 
                                <p class="p-0 m-0"><span>Rank:</span> ${rank} </p> 
                                <p class="p-0 m-0"><span>Citizenship:</span> ${countryOfCitizenship} </p> 
                                <p class="p-0 m-0"><span>state:</span> ${state} </p> 
                                <p class="p-0 m-0"><span>city:</span> ${city} </p> 
                                <p class="p-0 m-0"><span>Total Shares:</span> ${financialAssets[0].numberOfShares} </p> 
                                <p class="p-0 m-0"><span>Share Price:</span> ${financialAssets[0].sharePrice} </p> 
                                <p class="p-0 m-0"><span>Company Name:</span> ${financialAssets[0].companyName} </p> 
                                
                            </div>
                        </div>
                    </div>
        `

    
    });
   
}
loadData ();