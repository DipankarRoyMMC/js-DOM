
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


// const header = document.getElementById('header');
// header.style.borderBottom = '3px solid #333';


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

// var itemList = document.querySelector('#items');


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
// var newDiv = document.createElement('div');

// Add Class 
// newDiv.className = 'hello';

// Add Id 
// newDiv.id = 'hello';

// Set att 
// newDiv.setAttribute('title', 'Hello');

// Create New Content 
// var newDivText = document.createTextNode('Hi React Js!');

// Add Content 
// newDiv.appendChild(newDivText);

// select container 
// var container = document.querySelector('header .container');
// var h1 = document.querySelector('header h1');

// container.insertBefore(newDiv, h1);

// console.log(newDiv)


// PART 3 
// var button = document.getElementById('button').addEventListener('click', btnClick);

// function btnClick(e){
    // console.log('Clicked');
    // document.getElementById('header-title').textContent = 'Changed';
    // document.getElementById('main').style.backgroundColor = '#f2f2f2';

    // console.log(e.target);
    // console.log(e.target.id);
    // console.log(e.target.className);
    // console.log(e.target.classList);

    // var output = document.getElementById('output');
    // output.innerHTML = '<h3>' + e.target.id+  '<h3>'

    // console.log(e.type)
    // console.log(e.clientX)
    // console.log(e.clientY)
    // console.log(e.offsetX);
    // console.log(e.offsetY)
    // console.log(e.altKey)
    // console.log(e.ctrlKey)
    // console.log(e.shiftKey)
// }

//     var button = document.getElementById('button');
//     var box = document.getElementById('box');

    // button.addEventListener('click',  runEvent);
    // button.addEventListener('dblclick', runEvent);
    // button.addEventListener('mouseenter', runEvent);
    // button.addEventListener('mouseleave', runEvent);

    // box.addEventListener('mouseover', runEvent);
    // box.addEventListener('mouseout', runEvent);
    // box.addEventListener('mousemove', runEvent);




    // function runEvent(e){
    //     console.log('Event Type: ' + e.type);
    //     output.innerHTML = '<h3> MouseX: ' +e.offsetX +  '</h3> <h3> MouseX: ' + e.offsetY + '</h3>'  ;
    // }

    // var itemInput = document.querySelector('input[type="text"]');
    // var form = document.querySelector('form');
    // var select = document.querySelector('select');


    
    // itemInput.addEventListener('keydown', runEvent);
    // itemInput.addEventListener('keyup', runEvent);
    // itemInput.addEventListener('keypress', runEvent)
    // itemInput.addEventListener('focus', runEvent);
    // itemInput.addEventListener('blur', runEvent)
    // itemInput.addEventListener('copy', runEvent);
    // itemInput.addEventListener('paste', runEvent);
    // select.addEventListener('change', runEvent);
    // select.addEventListener('input', runEvent)
    // form.addEventListener('submit', runEvent);


    // function runEvent(e){
    //     e.preventDefault();
    //     console.log('Event Type: ' + e.type);

        // document.body.style.display = 'none'
        // console.log(e.target.value);
        // var output = document.querySelector('#output');
        // output.innerHTML = '<h3>'+e.target.value +'</h3>';
    // }


// PART -4

var form = document.getElementById('form');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form Submit Event 
form.addEventListener('submit', addItem);

// Delete Item 
itemList.addEventListener('click', removeItem);

// Filter Item  
filter.addEventListener('keyup', filterItems);

function addItem(e){
    e.preventDefault();

    // Get Input Value  
    var newItem = document.getElementById('item').value;

    // Create element Li 
    var li = document.createElement('li');
    // Add Class 
    li.className = 'list-group-item d-flex justify-content-between align-items-center';
    // Add text node with input value 
    li.appendChild(document.createTextNode(newItem));   

    // Create Delete Button Element 
    var deleteBtn = document.createElement('button');
    // Add class to delete btn 
    deleteBtn.className = 'delete btn btn-danger';

    // Append text node 
    deleteBtn.appendChild(document.createTextNode('X'));

    // Append button to li 
    li.appendChild(deleteBtn)

    // Append li to List 
    itemList.appendChild(li);

}

// Remove Item  Function 
function removeItem(e){
   if(e.target.classList.contains('delete')){
        // console.log('clicked')
        if(confirm('Are Your Sure?')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
   }
   
}


// Filter is not working Solve this problem (IMPORTANT)
// Filter Items 
function filterItems(e){
    // Text convent to LowerCase
    var text = e.target.value.toLowerCase();
    // console.log(text);
    
    // Get LI 
    var items = itemList.getElementsByTagName('LI');
    // console.log(items)

    Array.from(items).forEach(function(item){
        var itemName = item.textContent;
        // console.log(itemName)
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        } else{
            item.style.display = 'none'
            // DON'T ADD STYLE AND REMOVE STYLE SOLVE THIS 
        }

    })

}


