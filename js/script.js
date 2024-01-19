function handlepro_change(product,isIncreased){
    console.log("hello")
    console.log(product)

    const pro=document.getElementById(product);
    const productCount=parseInt(pro.value);
    
    let productCoun=productCount;
    let total_price=2500000+150000;
    console.log(productCoun);
 if(isIncreased==true){
    productCoun=productCount+1;
 }
 if(isIncreased==false && productCount>1)
 {
    productCoun=productCount-1;
 }

 pro.value=productCoun;

 if(product=='laptop'){
    price=productCoun*250000;
    total_price=total_price+price;
 }
 if(product=='phone'){
    price=productCoun*150000;
    total_price=total_price+price;
 }
 const newprice=document.getElementById(product+'-total')
  newprice.innerText=price;

  const total_cal=document.getElementById("sub-total")
  total_cal.innerText=total_price;

  const final_price=total_price-total_price*(10/100);

  const grand_total=document.getElementById("grand-total")
  grand_total.innerText=final_price;


}

function checkout(){
    alert("Thanks for shopping with us");
    location.reload();
}