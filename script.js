
// console.log(document.domain);
// console.log(document.title);
// console.log(document.body);
// console.log(document.URL)
// console.log(document.head);
// console.log(document.body);
// // console.log(document.all(10));
// console.log(document.doctype);
// console.log(document.forms[0]);

// console.log(document.images)
// console.dir(document)

// const mainContainer = document.getElementById('main');
// console.dir(mainContainer)


// console.log(headerTitle); 
// headerTitle.textContent = "hello"
// headerTitle.innerText = "Good Bye"
// console.log(headerTitle.textContent)
// console.log(headerTitle.innerText) 
// headerTitle.innerHTML = '<h4>Welcome React</h4>'


const header = document.getElementById('header');
header.style.borderBottom = '3px solid #333';


// Get ElementByClassName 
// const items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'item Number 2';
// items[1].style.color = 'red';
// items[1].style.fontWeight = 'bold';

// Error 
// items.style.backgroundColor = 'yellow'

// for(var i = 0; i < items.length; i++){
//     items[i].style.backgroundColor = '#f2f2f2';
// }


// Get ELEMENT BY TAG NAME 
// const li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[2]);
// li[2].textContent = 'Single List Item';
// li[2].style.backgroundColor = 'green';
// li[2].style.color = 'white';

// QUERY SELECTOR 

// var cardShadow = document.querySelector('.card-body');
// cardShadow.style.boxShadow = '3px 5px 10px rgba(0, 0, 0, 0.3)';

// const input = document.querySelector('input');
// input.value = "Welcome";
// const submit = document.querySelector("input[type='submit']");
// submit.value = 'SEND';

// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'green';

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'blue'


// var title = document.querySelectorAll('.title');
// console.log(title);
// title[1].style.color = 'green';
// title[1].style.textTransform = 'uppercase';
// title[1].style.fontWeight = 'bold',
// title[1].style.marginBottom = '20px';
// title[0].textContent = 'Hello Add item'

// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even = document.querySelectorAll('li:nth-child(even)');
// for(var i = 0; i < odd.length; i++){
//     odd[i].style.backgroundColor ="#f2f2f2";
//     even[i].style.backgroundColor ='#ccc';
// }


// PART 2

var itemList = document.querySelector('#items');


// PARENT NODE 
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = 'red';

// console.log(itemList.parentNode.parentNode.parentNode)

// PARENT ELEMENT 
// console.log(itemList.parentElement);
// itemList.parentElement.style.color = 'orange';
// console.log(itemList.parentElement.parentElement.parentElement)

// CHILD NODES 
// console.log(itemList.childNodes)
// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor ='red';


// First Child 
// console.log(itemList.firstChild)
// First ElementChild 
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent  = 'Hello JavaScript!';

// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'Last Element Child'
// itemList.lastElementChild.style.backgroundColor ='green'



// nextSibling 
// console.log(itemList.nextSibling)
// nextElementSibling 
// console.log(itemList.nextElementSibling.nextElementSibling)


// Previous Sibling 
// console.log(itemList.previousSibling);
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.backgroundColor ='green'

// CREATE ELEMENT 
var newDiv = document.createElement('div');

// Add Class 
newDiv.className = 'hello';

// Add Id 
newDiv.id = 'hello';

// Set att 
newDiv.setAttribute('title', 'Hello');

// Create New Content 
var newDivText = document.createTextNode('Hi React Js!');

// Add Content 
newDiv.appendChild(newDivText);

// select container 
var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

container.insertBefore(newDiv, h1);

console.log(newDiv)



