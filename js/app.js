const MENU=[
{id:1,name:"Classic Burger",price:55,img:"images/classic-burger.svg"},
{id:2,name:"Cheeseburger",price:65,img:"images/cheeseburger.svg"},
{id:3,name:"Ham Sandwich",price:40,img:"images/ham-sandwich.svg"},
{id:4,name:"French Fries (Regular)",price:45,img:"images/french-fries.svg"},
{id:5,name:"Nachos",price:50,img:"images/nachos.svg"},
{id:6,name:"Soda (Can)",price:25,img:"images/soda-can.svg"}];
const get=k=>JSON.parse(localStorage.getItem(k)||"null"),set=(k,v)=>localStorage.setItem(k,JSON.stringify(v));
const cart=()=>get("cart")||{};
const peso=n=>"₱"+n.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,",");
const lines=()=>Object.entries(cart()).map(([id,q])=>{const m=MENU.find(x=>x.id==id);return{...m,q,sub:m.price*q}});
const total=()=>lines().reduce((s,l)=>s+l.sub,0),count=()=>lines().reduce((s,l)=>s+l.q,0);
function setQty(id,q){const c=cart();q<=0?delete c[id]:c[id]=Math.min(q,99);set("cart",c)}
function hdr(i){document.body.insertAdjacentHTML("afterbegin",`<header><a class="brand" href="index.html"><img src="images/logo.svg" alt="">Campus Snack Bar</a><nav class="steps">${["Menu","Cart","Payment","Confirm","Receipt"].map((s,j)=>`<span class="${j==i?"on":""}">${s}</span>`).join("")}</nav></header>`)}
