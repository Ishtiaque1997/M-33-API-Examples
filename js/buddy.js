//function to load data
const loadBuddies=()=>{
 fetch('https://randomuser.me/api/?results=5')//loading first five only
 .then(res=>res.json())
 .then(data=>displayBuddies(data))
}
loadBuddies();
//function to display
const displayBuddies=data=>{
 const buddies=data.results;//taking all
 const buddiesDiv=document.getElementById('buddies')
 for(const buddy of buddies)//throw loop for getting one by one
 {
  // console.log(buddy.name.first)
  const p=document.createElement('p');
  p.innerText=`Name: ${buddy.name.first}  ${buddy.name.last} ${buddy.phone}`;//the value is inside another object of the parent object
  buddiesDiv.appendChild(p)
 }
}