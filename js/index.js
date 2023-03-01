let allData=[];

const loadData = () => {
    // const url = `https://raw.githubusercontent.com/hridoyfahad30/billionaires-api/main/api.json?fbclid=IwAR1U4SlFq3AN8ALOKFtNEGIQJWYhulVHIm2jNGsNEKUHjMKkAWxxAQz9rxw`
    const url = 'https://forbes400.onrender.com/api/forbes400'
    fetch(url)
        .then(res => res.json())
        .then(data => ShowAllBillionaires(data))
}

const ShowAllBillionaires = (data) => {
    console.log(data)
    allData=data;
    const cardParent = document.getElementById('card-parent')
    cardParent.innerHTML='';
    data.forEach(element => {
        const { uri, person, rank, countryOfCitizenship, state, city, financialAssets } = element;
        // console.log(financialAssets)

        cardParent.innerHTML += `
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
                                <!-- Button trigger modal -->
                                <button onclick="loadMillionaireDetails(${rank})" type="button" class="btn btn-primary mt-3" data-bs-toggle="modal" data-bs-target="#millionaireDetailsModal"> Details
                                </button>

                            
                                
                            </div>
                        </div>
                    </div>
        `


    });

}


// 

const loadMillionaireDetails= rank=>{
    console.log(rank)
    const modalBody= document.getElementById('modal-body')
    const findrank= allData.find(a=>{
        return a.rank==rank
        
    })


    
    modalBody.innerHTML= `
    <div id="card-parent" class="row row-cols-1 row-cols-md-1  p-2">
    <div class="col">
        <div class="card h-auto w-100 d-flex flex-row">
            <div class=" d-flex align-items-center bg-dark w-50 rounded-4">
                <img src="./images/reference-img-worlds-of-adventure-park-4-1920x9999.jpg"
                    class="img-fluid rounded " alt="...">
            </div>
            <div class="card-body w-50">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a longer card with supporting text below as a
                    natural
                    lead-in to additional content. This content is a little bit longer.</p>
            </div>
        </div>
    </div>

</div>
                   
        `
    


}
