var form = document.forms['addmo'];
form.addEventListener('submit',function(e){
    
    e.preventDefault();
    
    var vall=form.querySelector('input[type="text"]').value;
    
    var li=document.createElement('li');
    
    var muvi=document.createElement('span');
    
    var del=document.createElement('span');
    
    li.appendChild(muvi);
    li.appendChild(del);
    list.appendChild(li);

    muvi.textContent = vall;
    del.textContent = 'delete';
    
    muvi.classList.add('mo');
    del.classList.add('delete');
    