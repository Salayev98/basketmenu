function addtoTable(){
    let basketitems=JSON.parse(localStorage.getItem("basket"))
    basketitems.forEach(item => {
    let basketbody = document.querySelector("tbody")
    let tr=document.createElement("tr")
    basketbody.appendChild(tr)
    let td1=document.createElement("td")
    let td2=document.createElement("td")
    let td3=document.createElement("td")
    let td4=document.createElement("td")
    let td5=document.createElement("td")
    let a=document.createElement("a")
    let img = document.createElement("img")
    img.setAttribute("src",item.cardimg)
    img.style.height = "30px";
    img.style.width = "60px";
    td2.appendChild(img)
    a.setAttribute("href","#")
    a.setAttribute("class","removebutton")
    a.innerText="X"
    td5.appendChild(a)
    td1.innerText=item.title
    td3.innerText=item.price
    td4.innerText=item.count
    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)
    tr.appendChild(td4)
    tr.appendChild(td5)
   });
}
addtoTable()

let removebutton=document.querySelectorAll(".removebutton")
let buttonsToArray = Array.prototype.slice.call(removebutton);

for (let i = 0; i < buttonsToArray.length; i++) {
    buttonsToArray[i].addEventListener("click", function (e) {
        let indexofbutton = buttonsToArray.indexOf(this);
        buttonsToArray.splice(indexofbutton, 1);
        let basketitems = JSON.parse(localStorage.getItem("basket"));
        basketitems.splice(indexofbutton, 1);
        removebutton[i].parentElement.parentElement.remove();
        localStorage.setItem("basket", JSON.stringify(basketitems));
        document.querySelector("sup").innerText = JSON.parse(localStorage.getItem("basket")).length;
    });
}

