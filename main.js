var input = document.getElementById("myInput")
var addButton = document.querySelector(".addBtn")
var clearButton = document.querySelector(".clearBtn")

var li = document.getElementsByTagName("li")
clearButton.addEventListener("click",function(){
                    
    li.remove()

}
)





// Enter key
input.addEventListener("keyup", function(event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
    addingLi()
    }
  });

// The actual add
var addButton = document.querySelector(".addBtn")
addButton.addEventListener("click",addingLi)


            // Adding li including all the features
            function addingLi(){
                
                let list = document.getElementById("myUL")
                let input = document.getElementById("myInput")
                let text = document.createTextNode(input.value)
                let instruction = document.querySelector(".instruction")


            instruction.innerText = "Click Add or Press Enter ⏎"
            if(input.value==""){
            
                instruction.classList.add("alert")
                instruction.innerText="** This is a required field, please enter a valid task **"
            }
            else{

                instruction.classList.remove("alert") 

                let li = document.createElement('li')
                li.appendChild(text)
                list.appendChild(li)
                input.value=""

                doneButton = document.createElement("button")
                doneButton.innerText= "🗸"
                doneButton.classList.add("doneBtn")
            
                removeButton = document.createElement("button")
                removeButton.innerText= "X"
                removeButton.classList.add("removeBtn")

                dateTime = document.createElement("span")
                dateTime.innerText = document.getElementById("ct").innerText
                dateTime.style.fontSize="10px"

                
                // date miniature
                    var x = new Date()
                    var x1=x.getMonth() + 1+ "/" + x.getDate() + "/" + x.getYear(); 
                    x1 = x1 + " - " +  x.getHours( )+ ":" +  x.getMinutes() + ":" +  x.getSeconds();
                    dateTime.innerHTML = x1;
                




                container=document.createElement("div")
                container.classList.add("container")
            

                container.appendChild(removeButton)
                container.appendChild(doneButton)
                container.appendChild(dateTime)
                li.appendChild(container)

                removeButton.addEventListener("click",function(){
                    li.remove()
                })

                doneButton.addEventListener("click",function(){
                    li.classList.add("doneTask")
                })

                li.addEventListener("mouseover",function(){
                    li.style.backgroundColor="lightgray"
                    li.style.cursor="pointer"
                })
                li.addEventListener("mouseout",function(){
                    li.style.backgroundColor="whitesmoke"
                })

                // clear
                clearButton.addEventListener("click",function(){
                    
                    li.remove()
              
                }
                )
                
            }

            }





                // Date and Time (clock)
                function display_c(){
                var refresh=1000; // Refresh rate in milli seconds
                mytime=setTimeout('display_ct()',refresh)
                }
                
                function display_ct() {
                var x = new Date()
                document.getElementById('ct').innerHTML = x;
                display_c();
                }

