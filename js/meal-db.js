//function for searching food

const searchFood=()=>{
 const searchField=document.getElementById('search-field');
 const searchText=searchField.value;
 // console.log(searchText)
 //clear data
 searchField.value='';
 if (searchText==''){
   window.alert('Please enter something')
 }
 else{
   const url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;//url wih dynamic name 
 // console.log(url);
 fetch(url)
 .then(res=>res.json())
 .then(data=>displaySearchResult(data.meals))
}
 }
//load data


//function to display the searched food
const displaySearchResult=meals=>{
   console.log(meals)
 
  const searchResult=document.getElementById('search-result');
  searchResult.textContent='';
  if(meals.length == 0){
     window.alert('vhvhvv')
   } 
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