 function convertcm(){
          let cmVal=Number(document.getElementById("display").value)
          let inchVal=cmVal/2.54
          let result=document.getElementById("convert")
          result.innerHTML=inchVal.toFixed(2) +"inchs"  
        
}
 function convertinch(){
          let secVal=Number(document.getElementById("display").value)
          let thirdVal=secVal*2.54
          let result=document.getElementById("convert")
          result.innerHTML=thirdVal.toFixed(2)   + "cm"
}
function convertm(){
          let fourVal=Number(document.getElementById("display").value)
          let fifthVal=fourVal/100
          let result=document.getElementById("convert")
          result.innerHTML=fifthVal.toFixed(2)   + "meter"
}
function convertcent(){
          let sixVal=Number(document.getElementById("display").value)
          let sevenVal=sixVal*100
          let result=document.getElementById("convert")
          result.innerHTML=sevenVal.toFixed(2)   + "cm"
}
function convertkm(){
          let eightVal=Number(document.getElementById("display").value)
          let nineVal=eightVal/1000
          let result=document.getElementById("convert")
          result.innerHTML=nineVal.toFixed(2)   + "km"

}
function convertmet(){
          let tenVal=Number(document.getElementById("display").value)
          let oneVal=tenVal*1000
          let result=document.getElementById("convert")
          result.innerHTML=oneVal.toFixed(2)   + "meter"
}


