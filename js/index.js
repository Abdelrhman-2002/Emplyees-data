let inps=document.getElementsByTagName("input");
let btn=document.getElementById("btn");
let peopleData=[];
let people=document.getElementById("people");
let saveBtn=document.getElementById("saveBtn");
btn.addEventListener("click",function(){
    let person={
        Title: inps[0].value,
        Name: inps[1].value,
        image: inps[2].value,
        Description: inps[3].value
    }
    peopleData.push(person);
    showPeople();
    clear();
});
if(window.localStorage.getItem("People")){
    peopleData=JSON.parse(window.localStorage.getItem("People"));
    showPeople();
}
function showPeople(){
    let str=``;
    for (let i=0; i<peopleData.length;i++){
        str+=`
        <div class="person">
        <span>
            <img src="${peopleData[i].image}">
            <div class="data">
                <p>${peopleData[i].Name}</p>
                <p>${peopleData[i].Title}</p>
            </div>
        </span>
        <div class="description">
            <p>
                Job Description:
            </p><br>
            <p>${peopleData[i].Description}</p>
        </div>
        <div class="buttons">
            <button onclick="deletePerson(${i})">Delete</button>
            <button onclick="updatePerson(${i})">Update</button>
        </div>
    </div>
        `
    }
    people.innerHTML=str;
    window.localStorage.setItem('People',JSON.stringify(peopleData));
    
}
let i=-1;
function updatePerson(index){
    btn.classList.toggle("hide");
    saveBtn.classList.toggle("hide");
    inps[0].value=peopleData[index].Title;
    inps[1].value=peopleData[index].Name;
    inps[2].value=peopleData[index].image;
    inps[3].value=peopleData[index].Description;
    i=index;
}
saveBtn.addEventListener("click",function(){
    peopleData[i].Title=inps[0].value;
    peopleData[i].Name=inps[1].value;
    peopleData[i].image=inps[2].value;
    peopleData[i].Description=inps[3].value;
    btn.classList.toggle("hide");
    saveBtn.classList.toggle("hide");
    window.localStorage.setItem('People',JSON.stringify(peopleData));
    showPeople();
    clear();
})
function deletePerson(index){
    peopleData.splice(index, 1);
    window.localStorage.setItem('People',JSON.stringify(peopleData));
    showPeople();
}

function clear(){
    inps[0].value='';
    inps[1].value='';
    inps[2].value='';
    inps[3].value='';
}