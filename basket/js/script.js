let basketbutton=document.querySelectorAll(".btn-primary");
function createBasket(){
    if (!localStorage.getItem("basket")) {
        localStorage.setItem("basket",JSON.stringify([]))
    }
}
createBasket()



function basketCount(){
    document.querySelector("sup").innerText=JSON.parse(localStorage.getItem("basket")).length
}
basketCount()
basketbutton.forEach(btn =>{
    btn.addEventListener("click",function(e){
        e.preventDefault();
        
        let Id=this.parentElement.parentElement.getAttribute("data-id");
        let Price=this.previousElementSibling.innerText;
        let Title=this.parentElement.firstElementChild.innerText;
        let Cardimg=this.parentElement.parentElement.firstElementChild.getAttribute("src");
        createBasket()
        let basket=getBasket(Id,Price,Title,Cardimg)
        localStorage.setItem("basket",JSON.stringify(basket))
        basketCount()
    })
})

function getBasket(Id,Price,Title,Cardimg){
    let basket=JSON.parse(localStorage.getItem("basket"));
    let sameProduct=basket.find(item=>item.id==Id)
    if(sameProduct==undefined){
        basket.push({
            id:Id,
            price:Price,
            title:Title,
            cardimg:Cardimg,
            count:1
        })
    }else{
        sameProduct.count++;
    }
    return basket;
}
