let title=document.getElementById('title');
let price=document.getElementById('price');
let taxes=document.getElementById('taxes');
let adds=document.getElementById('adds');
let discount=document.getElementById('discount');
let total=document.getElementById('total');
let count=document.getElementById('count');
let category=document.getElementById('category');
let submit=document.getElementById('submit');


/*console.log(title,price,taxes,adds,discount,total,count,category,submit);*/ 

function gettotal(){
if(price.value !=''){
    let res=(+price.value+ +taxes.value + +adds.value)
    -+discount.value;
    total.innerHTML=res;
    total.style.background = '#040';
}
else{
    total.innerHTML='';
    total.style.background = 'rgb(185, 3, 3)'
}
}

let newarray;
if(localStorage.pro !=null){
    newarray=JSON.parse(localStorage.pro)
}else{
    newarray=[];
}

submit.onclick =function(){
    let newpro ={ 
        title:title.value,
        price:price.value,
        taxes:taxes.value,
        adds:adds.value,
        discount:discount.value,
        total:total.innerHTML,
        count:count.value,
        category:category.value

    }
    newarray.push(newpro);
     localStorage.setItem('pro', JSON.stringify(newarray) )
    

    cleardata()
    showdata()
    
}
function cleardata(){
        title.value='';
        price.value='';
        taxes.value='';
        adds.value='';
        discount.value='';
        total.innerHTML='';
        count.value='';
        category.value='';

}
function showdata(){
    
    let table;
    for(i=0;i<newarray.length;i++){
        table += `
        <tr>
                        <td>${i}</td>
                        <td>${newarray[i].title}</td>
                        <td>${newarray[i].price} </td>
                        <td>${newarray[i].taxes}</td>
                        <td>${newarray[i].adds}</td>
                        <td>${newarray[i].discount}</td>
                        <td>${newarray[i].total}</td>
                        <td>${newarray[i].count}</td>
                        <td>${newarray[i].category}</td>
                        <td><button onclick =deletedata('${i}') id="delete">delete</button></td>
                    </tr>
                    `

    }
document.getElementById('body').innerHTML=table;
}
showdata();
function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }
 
 function deletedata(i){
    newarray.splice(i,1);
    localStorage.pro=JSON.stringify(newarray);
    showdata();

 }
 