let links = document.querySelectorAll(".menu-item > a");
for (let i = 0; i < links.length; i++) {
   links[i].onclick = function () {
      document.getElementById(links[i].getAttribute("data-link")).scrollIntoView({
         behavior: "smooth"
      });
   }
}

gsap.to(".main-title", {
   opacity:1,
   duration:4
}
)

gsap.to(".common-title", {
opacity:1,
x:140,
duration:5
})



let buttons = document.getElementsByClassName("product-button");
for (let i = 0; i < buttons.length; i++) {
   buttons[i].onclick = function () {
      document.getElementById("order").scrollIntoView({
         behavior: "smooth"
      });
   }
}

let prices = document.getElementsByClassName("products-item-price");

document.getElementById("change-currency").onclick = function (e) {
   let currentCurrency = e.target.innerText;

   let newCurrency = "$";
   let coefficient = 1;

   if (currentCurrency === "$") {
      newCurrency = "€";
      coefficient = 1;
   } else if (currentCurrency === "€") {
      newCurrency = "£";
      coefficient = 1;
   } else if (currentCurrency === "£") {
      newCurrency = "¥";
      coefficient = 7;
   } else if (currentCurrency === "¥") {
      newCurrency = "zl";
      coefficient = 4;
   }
   e.target.innerText = newCurrency;

   for (let i = 0; i < prices.length; i++) {
      prices[i].innerText = +(prices[i].getAttribute("data-base-price") * coefficient).toFixed(1) + " " + newCurrency;
   }
}