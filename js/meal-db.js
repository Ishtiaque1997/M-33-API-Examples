//default error message not showing
document.getElementById('error-message').style.display='none';

//function for searching food
const searchFood=()=>{
 const searchField=document.getElementById('search-field');
 const searchText=searchField.value;
 //clear data
 searchField.value='';

 document.getElementById('error-message').style.display='none';

 //in case nothing is given to search
 if (searchText==''){
   const noSearch=document.getElementById('no-search');
   const div=document.createElement('h3');
   div.innerHTML='please enter something'
   noSearch.appendChild(div)
 }
 else{
 const url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;//url wih dynamic name 
 // console.log(url);

 //load data
 fetch(url)
 .then(res=>res.json())
 .then(data=>displaySearchResult(data.meals))
 .catch(error=>displayError(error))
}
}
 //display error part
 const displayError=error=>{
   document.getElementById('error-message').style.display='block';
}

//function to display the searched food
const displaySearchResult=meals=>{
  const searchResult=document.getElementById('search-result');
  searchResult.textContent='';
  
  meals.forEach(meal=>{
  // console.log(meal)
  const div=document.createElement('div');
  div.classList.add('col');
  div.innerHTML=`
   <div onClick="loadMealDetail(${meal.idMeal})" class="card h-100">
      <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
       <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
            <p class="card-text">${meal.strInstructions.slice(0,200)}</p>
       </div>
    </div>
  `;
  searchResult.appendChild(div);
 })

}

//function to load meal detail
const loadMealDetail=mealId=>{
  // console.log(mealId);
  const url=`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
  fetch(url)
  .then(res=>res.json())
  .then(data=>displayMealDetail(data.meals[0]))
}

//function to display meal detail
const displayMealDetail=meal=>{
  const mealDetails=document.getElementById('meal-details');
  mealDetails.innerHTML='';
  const div=document.createElement('div');
  div.classList.add('card');
  div.innerHTML=`
  <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${meal.strMeal}</h5>
      <p class="card-text">${meal.strInstructions.slice(0,100)}</p>
      <a href=${meal.strYoutube} class="btn btn-primary">Go somewhere</a>
    </div>
  `
  mealDetails.appendChild(div)
}