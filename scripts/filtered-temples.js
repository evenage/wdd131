 function RenderTemples (temples) {
const templegrid= document.getElementById("temple-album")
	temples.forEach (temple=> {
		const card= document.createElement("div")
		card.className="card"
		const title= document.createElement("p")
		const location= document.createElement("p")
		const dedicated=document.createElement("p")
		const area= document.createElement("p")
		const image= document.createElement("img")

title.innerHTML=temple.templeName
location.innerHTML=temple.location
dedicated.innerHTML=temple.dedicated
area.innerHTML=temple.area
image.src=temple.imageUrl
image.alt=temple.templeName
card.appendChild(title)
card.appendChild(location)
card.appendChild(dedicated)
card.appendChild(area)
card.appendChild(image)


templegrid.appendChild(card)
	})

}
export{RenderTemples}