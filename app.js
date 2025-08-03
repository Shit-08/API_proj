const url ="http://universities.hipolabs.com/search?country=";
let btn=document.querySelector("button");
let list=document.querySelector("#list");
let inp=document.querySelector("#inputField");

btn.addEventListener("click",async ()=>{
    list.innerText="";
    let clgArr=await getUniversities();
    for(li of clgArr){
        let liEle=document.createElement("li");
        liEle.innerText=li.name;
        list.append(liEle);
    }
})

async function getUniversities() {
    try{
        const response = await axios.get(url+inp.value);
        return response.data;
    }
    catch(error) {
        console.error("Error fetching universities:", error);
        return [];
    }
}


