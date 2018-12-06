
// function shuffle () {
// 	var coloc = ["test1", "test2", "test3", "test4", "test5"];
// 	var participantsRestants=coloc.slice(0);
// 	var cinqAleatoires=[];
// 	while (cinqAleatoires.length<5) cinqAleatoires.push(participantsRestants.splice(Math.floor(Math.random()*participantsRestants.length),1)[0]);


// 	let blb = document.querySelector(".blabla");
// 	blb.innerHTML = `
// 					<tr>
// 					<td  class="week1">Task1</td>
// 					<td  class="case1">${cinqAleatoires}</td>
// 					<td  class="case2">${cinqAleatoires}</td>
// 					<td  class="case3">${cinqAleatoires}</td>
// 					<td  class="case4">${cinqAleatoires}</td>
// 					<td  class="case5">${cinqAleatoires}</td>
// 				</tr>
// 				<tr>
// 					<td  class="week1">Task2</td>
// 					<td  class="case1">${cinqAleatoires}</td>
// 					<td  class="case2">${cinqAleatoires}</td>
// 					<td  class="case3">${cinqAleatoires}</td>
// 					<td  class="case4">${cinqAleatoires}</td>
// 					<td  class="case5">${cinqAleatoires}</td>
// 				</tr>
// 					`
// 	console.log(cinqAleatoires);
// 	console.log(participantsRestants);
// 	console.log(cinqAleatoires[coloc.length]);

// }

// document.querySelector(".button").addEventListener("click", shuffle)


function shuffle () {


	var coloc = new Array("test1", "test2", "test3", "test4", "test5")
	var index = Math.floor(Math.random() * coloc.length);
	var participantsRestants=coloc.slice(0);
	var case1=[];
	case1.push(participantsRestants.splice(Math.floor(Math.random()*participantsRestants.length),1)[0]);
	var case2=[];
	case2.push(participantsRestants.splice(Math.floor(Math.random()*participantsRestants.length),1)[0]);
	var case3=[];
	case3.push(participantsRestants.splice(Math.floor(Math.random()*participantsRestants.length),1)[0]);
	var case4=[];
	case4.push(participantsRestants.splice(Math.floor(Math.random()*participantsRestants.length),1)[0]);
	var case5=[];
	case5.push(participantsRestants.splice(Math.floor(Math.random()*participantsRestants.length),1)[0]);
	if (index == coloc.length) index = index--;
	let blb = document.querySelector(".blabla");
	blb.innerHTML = 
	`
	<tr>
	<td  class="week1">Task1</td>
	<td  class="case1">${case1}</td>
	<td  class="case2">${case2}</td>
	<td  class="case3">${case3}</td>
	<td  class="case4">${case4}</td>
	<td  class="case5">${case5}</td>
	</tr>
	<tr>
	<td  class="week1">Task2</td>
	<td  class="case1">${case5}</td>
	<td  class="case2">${case1}</td>
	<td  class="case3">${case2}</td>
	<td  class="case4">${case3}</td>
	<td  class="case5">${case4}</td>
	</tr>
	<tr>
	<td  class="week1">Task3</td>
	<td  class="case1">${case2}</td>
	<td  class="case2">${case4}</td>
	<td  class="case3">${case1}</td>
	<td  class="case4">${case5}</td>
	<td  class="case5">${case3}</td>
	</tr>
	<tr>
	<td  class="week1">Task4</td>
	<td  class="case1">${case3}</td>
	<td  class="case2">${case5}</td>
	<td  class="case3">${case4}</td>
	<td  class="case4">${case1}</td>
	<td  class="case5">${case2}</td>
	</tr>
	<tr>
	<td  class="week1">Task5</td>
	<td  class="case1">${case4}</td>
	<td  class="case2">${case3}</td>
	<td  class="case3">${case5}</td>
	<td  class="case4">${case4}</td>
	<td  class="case5">${case1}</td>
	</tr>


	`

	console.log(coloc[index]);
	console.log('---------------------------------------');
	console.log(coloc);
	console.log('---------------------------------------');
	console.log(index);
	console.log('---------------------------------------');
}


document.querySelector(".button").addEventListener("click", shuffle);


// function shuffleA(a)
// {
//    var j = 0;
//    var valI = '';
//    var valJ = valI;
//    var l = a.length - 1;
//    while(l > -1)
//    {
// 		j = Math.floor(Math.random() * l);
// 		valI = a[l];
// 		valJ = a[j];
// 		a[l] = valJ;
// 		a[j] = valI;
// 		l = l - 1;
// 	}
// 	return a;
//  }