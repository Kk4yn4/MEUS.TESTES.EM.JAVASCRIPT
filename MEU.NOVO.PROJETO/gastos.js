function calc(){
   const gastonome = document.getElementById('gastoname').value;
   const valorgasto = document.getElementById('valorgasto').value;
   const res = document.getElementById('res');

   if(gastonome.includes('@') || gastonome.includes('$') || gastonome.includes('#')|| gastonome == ""){
    alert(22)
   }
   if(valorgasto.includes('@') || valorgasto.includes('$') || valorgasto.includes('#')|| valorgasto == "" || valorgasto <= 0){
    alert(11)
   }else{
    alert(`${gastonome}`)
   }
   

   const guardagasto = [];
   guardagasto.push({
    NomeDoGasto:`${gastonome}`,
    ValorDoGasto: `${valorgasto}`,
   })
   console.log(guardagasto)
   res.innerHTML= `${gastonome} ${valorgasto}`
}