//console.dir(document);
//console.log(document.URL);
//console.log(document.title);
//document.title="hi";
//console.log(document.title);
//console.log(document.doctype);
//console.log(document.head);
// console.log(document.body);
 //console.log(document.all);
 //console.log(document.all[10]);
 //document.all[10].textContent="hello";
//  //console.log(document.all[10]);
//  console.log(document.forms);
//  console.log(document.links);
//  console.log(document.images);


//  //GET ELEMENT BY ID//
//  console.log(document.getElementById('header-title'));
//  var headerTitle=document.getElementById('header-title');
//  //console.log(headerTitle);
// // headerTitle.textContent="good girl";
//  //console.log(headerTitle);
//  headerTitle.innerText="good bye";
//  console.log(headerTitle);
//  console.log(headerTitle);
// //  console.log(headerTitle.innerText);
// //  headerTitle.innerHTML='<h3>Hello world</h3>';
// //  console.log(headerTitle.innerHTML);
// headerTitle.style.borderBottom='solid 3px #000';


// //GET ELEMENT BY CLASS
// var items=document.getElementsByClassName('list-group-item');
// console.log(items);
// //console.log(items[1]);

//to channge the textcontent
// items[1].textContent='hello2';

// console.log(items[1]);
// items[1].style.fontWeight='bold';
// items[0].style.backgroundColor='yellow';

// items[0].style.backgroundColor='yellow';
// items[2].style.backgroundColor='yellow';
// items[3].style.backgroundColor='yellow';
// for(var i=0;i<items.length;i++){
//     items[i].style.backgroundColor='#f4f4f4';
// }
// console.log(items);

//GET ELEMENT BY TAG NAME

// var li=document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent="flowers";
// li[1].style.fontWeight="bold";

// //QUERY SELECTOR
// var header=document.querySelector('#main-header');
// header.style.borderBottom='solid 4px #000';

// var input=document.querySelector('input');
// input.value='namasthe';

// var submit=document.querySelector('input[type="submit"]');
// submit.value="SEND";

// var item=document.querySelector('.list-group-item');
// item.style.color="red";

// var lastitem=document.querySelector('.list-group-item:last-child');
// lastitem.style.color='blue';

// var secondItem=document.querySelector('.list-group-item:nth-child(2)')
// secondItem.style.color='coral';

//Parent node
 var itemList=document.querySelector('#items');
// console.log(itemList.parentNode);
// var itemList=document.querySelector('#items');
// itemList.parentNode.style.backgroundColor="red";
//console.log(itemList.parentNode);

//child nodes
// console.log(itemList.childNodes);
// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor="yellow";

// //First child
// console.log(itemList.firstChild);
// console.log(itemList.firstElementChild);

// itemList.firstElementChild.textContent="hello1";

// //last child
// console.log(itemList.lastChild);
// console.log(itemList.lastElementChild);

// itemList.lastElementChild.textContent="hello2";

// //next sbling
// console.log(itemList.nextSibling);
// console.log(itemList.nextElementSibling);

// //Previous
// console.log(itemList.previousSibling);
// console.log(itemList.previousElementSibling);

// itemList.previousElementSibling.style.color="green";

//ceate a element
//create div
// var newdiv=document.createElement('div');
// newdiv.className="rose";
// console.log(newdiv);

// var newDiv=document.createElement('div');
// newDiv.className="jasmine";
// console.log(newDiv);

// //create text node
// var newdivText=document.createTextNode('hello world');
// console.log(newdivText);

// //append text to div
// newDiv.appendChild(newdivText);
// console.log(newDiv);
// //Add it to dom
// var container=document.querySelector('header .container');
// var h1=document.querySelector('header h1');



// container.insertBefore(newDiv,h1);

// newDiv.style.fontSize="30px";



//Events
// var button=document.getElementById('button').addEventListener("click",buttonClick);
// function buttonClick(e){
//     console.log('button clicked');
// }
//to change the text
var button=document.getElementById('button').addEventListener("click",buttonClick);
// function buttonClick(e){
//     document.getElementById('button').textContent="text changed";
//     //console.log('button clicked');
// }

function buttonClick(e){
    console.log('button clicked');
    document.getElementById('header-title').textContent="text becom changed";
    document.querySelector('#main').style.backgroundColor='red';
    console.log(e);

    // console.log(e.target);
    // console.log(e.target.id);
    // console.log(e.target.className);
    // console.log(e.target.classList);
var output=document.getElementById('output');
output.innerHTML='<h3>'+e.target.id+'</h3>';
console.log(e.type);
//console.log(e.clientX);
console.log(e.clientY);

console.log(e.offsetX);
console.log(e.offsetY);

console.log(e.altKey);
console.log(e.ctrlKey);
console.log(e.shiftKey);

}
var button=document.getElementById('button');
var box=document.getElementById('box');
// //box.addEventListener('click',runEvent);
// //box.addEventListener('dblclick', runEvent);
// //box.addEventListener('mousedown', runEvent);
// //box.addEventListener('mouseup', runEvent);

// box.addEventListener('mouseleave', runEvent);
// // box.addEventListener('mouseover', runEvent);
// // box.addEventListener('mouseout', runEvent);
// // box.addEventListener('mouseenter', runEvent);

 box.addEventListener('mousemove', runEvent);
//
var itemInput=document.querySelector('input[type="text"]');
var form=document.querySelector('form');
var select=document.querySelector('select');
itemInput.addEventListener('input',runEvent);
itemInput.addEventListener('keyup',runEvent);
form.addEventListener('submit',runEvent);


function runEvent(e){
    //e.preventDefault();
    console.log('Event TYPE:'+e.type);
  
    // console.log(e);
    // console.log(e.target);
    console.log(e.target.value);
    //two way data binding
    document.getElementById('output').innerHTML='<h3>'+e.target.value+'</h3>';

output.innerHTML='<h3>MouseX:' +e.offsetX+ '</h3><h3>MouseX:' +e.offsetY+ '</h3>';
//box.style.backgroundColor="rgb("+e.offsetX+","+e.offsetY+",40)";
document.body.style.backgroundColor="rgb("+e.offsetX+","+e.offsetY+",40)";

}


