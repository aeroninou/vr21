

const get_meal_btn = document.getElementById('get_meal');
const meal_container = document.getElementById('meal');

get_meal_btn.addEventListener('click', () => {
	fetch('https://www.themealdb.com/api/json/v1/1/random.php')
		.then(res => res.json())
		.then(res => {
		createMeal(res.meals[0]);
        console.log(res);
	});
});

const createMeal = (meal) => {
	const ingredients = [];
	// Get all ingredients from the object. Up to 20
	for(let i=1; i<=20; i++) {
		if(meal[`strIngredient${i}`]) {
			ingredients.push(`${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`)
		} else {
			// Stop if no more ingredients
			break;
		}
	}
	
	const newInnerHTML = `

			<div class="col-md-6">
				<img src="${meal.strMealThumb}" alt="Meal Image">
			</div>
            <div class="col-md-6">
                ${meal.strCategory ? `<p><strong>Category:</strong> ${meal.strCategory}</p>` : ''}
                ${meal.strArea ? `<p><strong>Area:</strong> ${meal.strArea}</p>` : ''}
                ${meal.strTags ? `<p><strong>Tags:</strong> ${meal.strTags.split(',').join(', ')}</p>` : ''}
                <h5>Ingredients:</h5>
                <ul>
                    ${ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
                </ul>
            </div>
			<div class="columns seven">
				<h4>${meal.strMeal}</h4>
				<p>${meal.strInstructions}</p>
			</div>
		</div>
		${meal.strYoutube ? `
		<div class="row">
			<h5>Video Recipe</h5>
			<div class="videoWrapper">
				<iframe width="420" height="315"
				src="https://www.youtube.com/embed/${meal.strYoutube.slice(-11)}">
				</iframe>
			</div>
		</div>` : ''}
	`;
	
	meal_container.innerHTML = newInnerHTML;
}


const mealCard = (meal) => {
	const ingredients = [];
	// Get all ingredients from the object. Max 20
	for(let i = 1; i <= 20; i++) {
		if(meal[`strIngredient${i}`]) {
			ingredients.push(`${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`);
		} else {
			break; //Loop will stop when no more indgredients.
		}
	}
	
	const newCard = `
    <div data-aos="fade-up" class="col-md-3 col-sm-6">
        <div id=${meal.idMeal} class="card m-2" style="width: 20rem;">
        <img src="${meal.strMealThumb}" class="card-img-top" style="border-radius: 25%;" alt="imgae of meal">
        <div class="card-body">
            ${meal.strMeal ? `<h5 class="card-title">${meal.strMeal}</h5>` : ""}
            ${meal.strArea ? `<strong>Area:</strong> ${meal.strArea}` : ""}
        </div>
        <ul class="list-group list-group-flush">
            ${meal.strCategory ? `<li class="list-group-item"><strong>Category:</strong> ${meal.strCategory}</li>` : ""}
            ${meal.strTags ? `<li class="list-group-item"><strong>Tags:</strong> ${meal.strTags.split(',').join(', ')}</li>` : ""}
        </ul>
        <div class="card-body">
            <a class="card-link" onclick={}>Full Recipe</a>
            ${meal.strYoutube ? `<a href="${meal.strYoutube}" target="_blank" class="card-link _blank">Video Recipe</a>` : ""}
            
        </div>
        </div>
    </div>`;
	
        foodRow.insertAdjacentHTML("beforeend", newCard);
}





