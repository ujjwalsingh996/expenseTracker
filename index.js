const myForm = document.querySelector('#my-form');
const expTracker = document.querySelector('#expense')
const description = document.querySelector('#description')
const choose = document.querySelector('#choose')
const msg = document.querySelector('.msg');
myForm.addEventListener('submit', onSubmit);
        
        function onSubmit(event)
        {
            event.preventDefault();
            if(expTracker.value === '' || description.value === '')
            {
                msg.classList.add('error');
                msg.innerHTML = 'Please enter all Fields'

                setTimeout(() => msg.remove(), 3000);
            }
            else
            {
                const userList = document.getElementById("users")
                
                expTracker1 = event.target.exp.value
                description1 = event.target.desc.value
                choose1 = event.target.category.value
                const obj = {
                    expTracker1,
                    description1,
                    choose1
                }
                
                localStorage.setItem(obj.description1, JSON.stringify(obj))

                
                const li = document.createElement('li')
                const delBtn = document.createElement('input');
                const editBtn = document.createElement('input')
                delBtn.type = 'button'
                delBtn.value = "Delete Expense"
                editBtn.type = 'button'
                editBtn.value = 'Edit Expense'


                    localStorage.setItem(obj.description1, JSON.stringify(obj))
                    li.appendChild(document.createTextNode(`${expTracker1}, ${description1}, ${choose1}`))
                    li.appendChild(delBtn)
                    li.appendChild(editBtn)
                    userList.appendChild(li);

                delBtn.onclick = () => {
                    localStorage.removeItem(obj.description1)
                    userList.removeChild(li)
                }
                editBtn.onclick = () => {
                    deserialized = JSON.parse(localStorage.getItem(obj.description1))
                    localStorage.removeItem(obj.description1)
                    userList.removeChild(li)
                    document.getElementById('expense').value = deserialized.expTracker1
                    document.getElementById('description').value = deserialized.description1
                    document.getElementById('choose').value = deserialized.choose1
                }
                expTracker.value = ''
                description.value = ''
                choose.value = ''

                
        }
        }
        window.addEventListener('load',() => 
        {
            for (let i = 0; i < localStorage.length; i++)
            {
                const key = localStorage.key(i)


                const value = JSON.parse(localStorage.getItem(key))
                
                const li = document.createElement('li')
                const delBtn = document.createElement('input');
                const editBtn = document.createElement('input')
                delBtn.type = 'button'
                delBtn.value = "Delete Expense"
                editBtn.type = 'button'
                editBtn.value = 'Edit Expense'

                li.appendChild(document.createTextNode(`${value.expTracker1}, ${value.description1}, ${value.choose1}`))
                li.appendChild(delBtn)
                li.appendChild(editBtn)
                document.getElementById("users").appendChild(li);

                delBtn.onclick = () => {
                    localStorage.removeItem(key)
                    li.remove()
                }
                editBtn.onclick = () => {
                    deserialized = JSON.parse(localStorage.getItem(key))
                    localStorage.removeItem(key)
                    li.remove()
                    document.getElementById('expense').value = deserialized.expTracker1
                    document.getElementById('description').value = deserialized.description1
                    document.getElementById('choose').value = deserialized.choose1
                }
            }
        })