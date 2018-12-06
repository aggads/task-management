
function shuffle () {
	var coloc = ["test1", "test2", "test3", "test4", "test5"];
	var participantsRestants=coloc.slice(0);
	var cinqAleatoires=[];
	while (cinqAleatoires.length<5) cinqAleatoires.push(participantsRestants.splice(Math.floor(Math.random()*participantsRestants.length),1)[0]);


	let blb = document.querySelector("td.roomate");
	blb.innerHTML = `
					<td>${participantsRestants}</td>
					<td>${participantsRestants}</td>
					<td>${participantsRestants}</td>
					<td>${participantsRestants}</td>
					<td>${participantsRestants}</td>
					`
	console.log(cinqAleatoires);
	console.log(participantsRestants);
	console.log(cinqAleatoires[participantsRestants]);

}

document.querySelector(".button").addEventListener("click", shuffle)



// function Fct_Test(){
//   var sCouleur = ['Trefle', 'Carreau', 'Coeur', 'Pique'];
//   var sCarte   = ['As', 'Roi', 'Dame', 'Valet', 'dix', 'neuf', 'huit', 'sept'];
//   var Tab      = [];
//   var Html     = '';
//   var i, k,
//       iMax = sCouleur.length,
//       kMax = sCarte.length;
//   //-- Init du Tableau
//   for( i =0; i < iMax; i++){
//     for( k =0; k < kMax; k++){
//      Tab.push ( sCarte[k]+ '<br>' + sCouleur[i] );
//     }
//   }
//   //-- Random du tableau
//   Tab = Rand_Tableau( Tab);
//   //-- Fomattage sortie
//   Html = '<table border>';
//   iMax = Tab.length;
//   for( var i=0; i < iMax; i++){
//     if( i %8 ==0) Html += '<tr>';
//     Html += '<td>' +Tab[i] +'</td>';
//     if( i %8 ==7) Html += '</tr>';
//   }
//   Html += '<\/table>';
//   //-- Affichage resultat
//   document.getElementById('D_RESULT').innerHTML += "<br>" +Html;
// }


// document.querySelector(".button").addEventListener("click", Rand_Tableau);
