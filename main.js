let main = document.getElementById('main')
let quest = document.getElementsByClassName('quest')
let a = document.getElementById('a')
let b = document.getElementById('b')
let c = document.getElementById('c')
let d = document.getElementById('d')
let nb = document.getElementById('false')
let bn = document.getElementById('next')
let r = document.getElementById('right')
a.onclick =  function(){
    main.style.display = 'none'
    
nb.style.display = 'block'

bn.style.display = 'block'
}
b.onclick =  function(){
    main.style.display = 'none'
    
r.style.display = 'block'

bn.style.display = 'block'
}
c.onclick =  function(){
    main.style.display = 'none'
    
nb.style.display = 'block'

bn.style.display = 'block'
}
d.onclick =  function(){
    main.style.display = 'none'
    
nb.style.display = 'block'

bn.style.display = 'block'
}
let main2 = document.getElementById('main2')
bn.addEventListener('click', function(){
    bn.style.display = 'none'
    main.style.display = 'none'
    nb.style.display = 'none'
    main2.style.display = 'block' 
    r.style.display = 'none'
    main3.style.display = 'none'
}
)
let a2 = document.getElementById('a2')
let b2 = document.getElementById('b2')
let c2 = document.getElementById('c2')
let d2 = document.getElementById('d2')
a2.onclick = ()=>{
    nb.style.display = 'block'
    next2.style.display = 'block'
    main2.style.display = 'none'
}
b2.onclick = function(){
    nb.style.display = 'block'
    next2.style.display = 'block'
    main2.style.display = 'none'
}
c2.onclick = function(){
    nb.style.display = 'block'
    next2.style.display = 'block'
    main2.style.display = 'none'
}
d2.onclick = function(){
    r.style.display = 'block'
    next2.style.display = 'block'
    main2.style.display = 'none'
}
let main3 = document.getElementById('main3')
let next2 = document.getElementById('next2')
next2.onclick = ()=>{
    r.style.display = 'none'
    nb.style.display = 'none'
    next2.style.display = 'none'
    bn.style.display = 'none'
    main2.style.display ='none'
    main3.style.display ='block'
}
let a3 = document.getElementById('a3')
let b3 = document.getElementById('b3')
let c3 = document.getElementById('c3')
let d3 = document.getElementById('d3')
let next3 = document.getElementById('next3')
a3.onclick = ()=>{
    nb.style.display = 'block'
    main3.style.display = 'none'
    next3.style.display = 'block'
    }
    b3.onclick = ()=>{
        nb.style.display = 'block'
        main3.style.display = 'none'
        next3.style.display = 'block'
        }
        c3.onclick = ()=>{
            r.style.display = 'block'
            main3.style.display = 'none'
            next3.style.display = 'block'
            }
        
            d3.onclick = ()=>{
                nb.style.display = 'block'
                main3.style.display = 'none'
                next3.style.display = 'block'
                }
let main4 = document.getElementById('main4')            
next3.onclick = ()=>{
    r.style.display = 'none'
    nb.style.display = 'none'
    
    bn.style.display = 'none'
    main4.style.display ='block'
    main3.style.display ='none'
    next3.style.display = 'none'
}
let a4 = document.getElementById('a4')
let b4 = document.getElementById('b4')
let c4 = document.getElementById('c4')
let d4 = document.getElementById('d4')
let next4 = document.getElementById('next4')

a4.onclick = ()=>{
    nb.style.display = 'block'
    next4.style.display = 'block'
    main4.style.display = 'none'
}
b4.onclick = ()=>{
    nb.style.display = 'block'
    next4.style.display = 'block'
    main4.style.display = 'none'
}
c4.onclick = ()=>{
    r.style.display = 'block'
    next4.style.display = 'block'
    main4.style.display = 'none'
}
d4.onclick = ()=>{
    nb.style.display = 'block'
    next4.style.display = 'block'
    main4.style.display = 'none'
}
let main5 = document.getElementById('main5')
next4.onclick = function(){
    main4.style.display = 'none'
    nb.style.display = 'none'
    next4.style.display = 'none'
    r.style.display = 'none'
    main5.style.display = 'block'
}
let a5 = document.getElementById('a5')
let b5 = document.getElementById('b5')
let c5 = document.getElementById('c5')
let d5 = document.getElementById('d5')
let next5 = document.getElementById('next5')
a5.onclick = ()=>{
    r.style.display = 'block'

    main5.style.display = 'none'
    next5.style.display = 'block'
}
b5.onclick = ()=>{
    nb.style.display = 'block'

    main5.style.display = 'none'
    next5.style.display = 'block'
}
c5.onclick = ()=>{
    nb.style.display = 'block'

    main5.style.display = 'none'
    next5.style.display = 'block'
}
d5.onclick = ()=>{
    nb.style.display = 'block'

    main5.style.display = 'none'
    next5.style.display = 'block'
}
let main6 = document.getElementById('main6')
next5.onclick = ()=>{
nb.style.display = 'none'
next5.style.display = 'none'
r.style.display = 'none'
main6.style.display = 'block'
}
let next6 = document.getElementById('next6')
let a6 = document.getElementById('a6')
let b6 = document.getElementById('b6')
let c6 = document.getElementById('c6')
let d6 = document.getElementById('d6')
a6.onclick = function(){
nb.style.display = 'block'
next6.style.display = 'block'
main6.style.display = 'none'
}
b6.onclick = function(){
    nb.style.display = 'block'
    next6.style.display = 'block'
    main6.style.display = 'none'}
    c6.onclick = function(){
        r.style.display = 'block'
        next6.style.display = 'block'
        main6.style.display = 'none'
        }
        d6.onclick = function(){
            nb.style.display = 'block'
            next6.style.display = 'block'
            main6.style.display = 'none'
            }
let main7 = document.getElementById('main7')
next6.onclick = function(){
main6.style.display = 'none'
r.style.display = 'none'
next6.style.display = 'none'
nb.style.display = 'none'
main7.style.display = 'block'
}        
let a7 = document.getElementById('a7')
let b7 = document.getElementById('b7')
let c7 = document.getElementById('c7')
let d7 = document.getElementById('d7')
let next7 = document.getElementById('next7')
a7.onclick = ()=>{
    nb.style.display = 'block'
    next7.style.display = 'block'
    
    main7.style.display = 'none'
}
b7.onclick = ()=>{
     nb.style.display = 'block'
    next7.style.display = 'block'
    
    main7.style.display = 'none'
}
c7.onclick = ()=>{
    nb.style.display = 'block'
    next7.style.display = 'block'
    
    main7.style.display = 'none'
}
d7.onclick = ()=>{
    r.style.display = 'block'
    next7.style.display = 'block'
    
    main7.style.display = 'none'
}
let main8 = document.getElementById('main8')
next7.onclick = ()=>{
        r.style.display = 'none'
    next7.style.display = 'none'
         nb.style.display = 'none'
         main8.style.display = 'block'
}






let a8 = document.getElementById('a8')
let b8 = document.getElementById('b8')
let c8 = document.getElementById('c8')
let d8 = document.getElementById('d8')
let next8 = document.getElementById('next8')
a8.onclick = function(){
    nb.style.display = 'block'
    next8.style.display = 'block'
    main8.style.display = 'none'
}
b8.onclick = function(){
    nb.style.display = 'block'
    next8.style.display = 'block'
    main8.style.display = 'none'
}
c8.onclick = function(){
    nb.style.display = 'block'
    next8.style.display = 'block'
    main8.style.display = 'none'
}
d8.onclick = function(){
    nb.style.display = 'block'
    next8.style.display = 'block'
    main8.style.display = 'none'
}
let main9 = document.getElementById('main9')
next8.onclick = function(){
    nb.style.display = 'none'
    next8.style.display = 'none'
    r.style.display = 'none'
    main9.style.display = 'block'
}
let a9 = document.getElementById('a9')
let b9 = document.getElementById('b9')
let c9 = document.getElementById('c9')
let d9 = document.getElementById('d9')
let next9 = document.getElementById('next9')
a9.onclick = ()=>{
    r.style.display = 'block'
    main9.style.display = 'none'
    next9.style.display = 'block'
}
b9.onclick = ()=>{
    nb.style.display = 'block'
    main9.style.display = 'none'
    next9.style.display = 'block'
}
c9.onclick = ()=>{
    nb.style.display = 'block'
    main9.style.display = 'none'
    next9.style.display = 'block'
}
d9.onclick = ()=>{
    nb.style.display = 'block'
    main9.style.display = 'none'
    next9.style.display = 'block'
}
let main10 = document.getElementById('main10')
next9.onclick = ()=>{
    nb.style.display = 'none'
    r.style.display = 'none'
    next9.style.display = 'none'
    main10.style.display = 'block'
}
let a10 = document.getElementById('a10')
let b10 = document.getElementById('b10')
let c10 = document.getElementById('c10')
let d10 = document.getElementById('d10')
let previous = document.getElementById('previous')
let img1 = document.getElementById('img1')
let img2 = document.getElementById('img2')
let img3 = document.getElementById('img3')
let img4 = document.getElementById('img4')
a10.onclick = ()=>{
    img2.style.display = 'block'
    previous.style.display = 'block'
    main10.style.display = 'none'
}
b10.onclick = ()=>{
    img4.style.display = 'block'
    previous.style.display = 'block'
    main10.style.display = 'none'
}
c10.onclick = ()=>{
    img1.style.display = 'block'
    previous.style.display = 'block'
    main10.style.display = 'none'
}
d10.onclick = ()=>{
    img3.style.display = 'block'
    previous.style.display = 'block'
    main10.style.display = 'none'
}
previous.onclick = ()=>{
       img3.style.display = 'none'
        img1.style.display = 'none'
         img2.style.display = 'none'
          img4.style.display = 'none'
          previous.style.display = 'none'
          main10.style.display = 'block'
}









