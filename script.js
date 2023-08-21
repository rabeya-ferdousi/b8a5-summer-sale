let total_price = 0;
let discountPrice = 0;
const purchaseBtn = document.getElementById("p-btn");
const applyBtn = document.getElementById("apply_btn");
const couponField =document.getElementById("coupon");
const afterDiscountTotal =document.getElementById("a_discount");
const discountField = document.getElementById("d-price");

function ClickBtn(target) {
    const selectedAllItem = document.getElementById("selected-items");

    const cardElement = target.querySelector(".card-body");
    const itemName = cardElement.querySelector(".card-title").innerText;

    const list = document.createElement("li");
    list.innerText = itemName;
    selectedAllItem.appendChild(list);
  
    const priceString = cardElement.querySelector("h6").innerText;
    
    const price = parseFloat(priceString);
    total_price += price;
    //console.log(total_price);
    document.getElementById("total_price").innerText = total_price;

    if(total_price>0){
        purchaseBtn.removeAttribute("disabled");
    }

    if(total_price>=200)
    {
        applyBtn.removeAttribute("disabled");
        couponField.removeAttribute("disabled");
        applyBtn.addEventListener("click",function(){
            const couponText = couponField.value;
            if(couponText.includes("SELL200")){
                discountPrice = total_price*0.2;
                const afterDiscount = total_price-discountPrice;
                //console.log(afterDiscount);
                discountField.innerText = discountPrice.toFixed(2);
                afterDiscountTotal.innerText = afterDiscount; 
            } 
        });
    } 
}
