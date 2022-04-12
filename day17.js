// function raj(a,b){
// c=a+b
// console.log(c)
// }
// function get(demo,fun){
//     console.log(demo)
//     fun(8,9)
// }
// get('raji',raj)
let container=document.createElement("div")
h1=document.createElement("h1")
container.append(h1)
document.body.append(container)
let count=10
setTimeout(()=>{    
   count -=1
   h1.innerHTML=count
   setTimeout(()=>{
    count -=1
    h1.innerHTML=count
    setTimeout(()=>{
        count -=1
        h1.innerHTML=count
        setTimeout(()=>{
            count -=1
            h1.innerHTML=count
            setTimeout(()=>{
                count -=1
                h1.innerHTML=count
                setTimeout(()=>{
                    count -=1
                    h1.innerHTML=count
                    setTimeout(()=>{
                        count -=1
                        h1.innerHTML=count
                        setTimeout(()=>{
                            count -=1
                            h1.innerHTML=count
                            setTimeout(()=>{
                                count -=1
                                h1.innerHTML=count
                                setTimeout(()=>{
                                    count -=1
                                    h1.innerHTML=count
                                    h1.innerHTML="happy newyear"
                                    
                                    
                                 },2000)
                                
                                
                             },2000)
                           
                         },2000)
                        
                     },2000)
                    
                 },2000)
                
             },2000)
            
         },2000)
        
     },2000)
    
 } ,2000)
   
})