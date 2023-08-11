
xhr = new XMLHttpRequest();
xhr.open('GET', 'https://planets-info-by-newbapi.p.rapidapi.com/api/v1/planets/');
xhr.setRequestHeader('X-RapidAPI-Key', '2a81661d4dmsh37dea867ee59994p1ae41fjsn84667b0ecc39');
xhr.setRequestHeader('X-RapidAPI-Host', 'planets-info-by-newbapi.p.rapidapi.com');
// console.log("bindu");
xhr.onreadystatechange = () => {
    console.log(`Remaining readyState -> ${xhr.readyState}`)
    if(xhr.readyState == 4 && xhr.status == 200) {
        res = JSON.parse(xhr.responseText)
        console.log(res)
		document.getElementById("srch-btn").addEventListener('click',()=>{
			const text=document.getElementById("search-text").value
			if(text)
			{
				document.getElementById("ref").style.display="none"
			}
			
			// console.log(text);
			output=''
			for (let i = 0; i < res.length; i++) {
				let modifyText = text.charAt(0).toUpperCase() + text.slice(1);
				if (modifyText==res[i].name)
				{
					output=`
					<div class="row glass">
  <div class="column-4" >
  <img style="height: 100%;
  " id="img" src="${res[i].imgSrc.img}" >
  </div>
  <div class="column-6" style="color:#fff">
  <span><h3>${res[i].name}</h3></span>
  <p>${res[i].description}</p>
  </div>
  </div
					
					`
				}
				
			}
				// <div class="glass img1">
					// <img style="height: 100%;
					// width: 60%;" id="img" src="${res[i].imgSrc.img}" width="400px">
					// <div style="text-align: left ; color:white">
					// <span><h3>${res[i].name}</h3></span>
					// <p>${res[i].description}</p>
					// </div>
					// </div>
			document.getElementById("my-div").innerHTML=output
		})
		
    }
}
xhr.send();

