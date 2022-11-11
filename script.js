const fname = document.getElementById("name");
const sname = document.getElementById("sname");
const age = document.getElementById("age");
const nationality = document.getElementById("nationality");
const position = document.getElementById("position");
const experience = document.getElementById("experience");
const submitbtn = document.getElementById("submit_btn")
const tbodyElement = document.getElementById("tbody")

submitbtn.addEventListener("click",function(e){
    e.preventDefault()
    if (fname.value === "" || sname.value === "" || age.value === "" || nationality.value === "" || position.value === "" ||  experience.value === "") return;
    const tdname = document.createElement("td")
    const tdsname = document.createElement("td")
    const tdage = document.createElement("td")
    const tdnat = document.createElement("td")
    const tdpos = document.createElement("td")
    const tdexp = document.createElement("td")
    const tdDelButton = document.createElement("button")
    tdDelButton.innerHTML="Delete";
    tdname.textContent = fname.value;
    tdsname.textContent = sname.value;
    tdage.textContent = age.value;
    tdnat.textContent = nationality.value;
    tdpos.textContent = position.value;
    tdexp.textContent = experience.value;
    const trElement = document.createElement("tr")
    trElement.appendChild(tdname);
    trElement.appendChild(tdsname);
    trElement.appendChild(tdage);
    trElement.appendChild(tdnat);
    trElement.appendChild(tdpos);
    trElement.appendChild(tdexp);
    trElement.appendChild(tdDelButton);

    tbodyElement.appendChild(trElement);

    fname.value = "";
    sname.value = "";
    age.value = "";
    nationality.value = "";
    position.value = "";
    experience.value = "";
    

    
    
    tdDelButton.addEventListener("click", function(){
        tbodyElement.removeChild(trElement)
    })


})



