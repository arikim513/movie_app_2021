import React from "react";
import axios from "axios";
import MargaritaRecipes from "./MargaritaRecipes";
import "./App.css"
// import PropsSample from "./Props";
// import StateAndLifeCycle from "./StateAndLifeCycle";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
    margaritaRecipes: []
  }

  getMovies = async () => {
    // const movies = await axios.get("http://boostcourse-appapi.connect.or.kr:10000/movie/readMovieList?type=1");
    const movies = await axios.get("https://yts.mx/api/v2/list_movies.json");
    console.log(movies);
  }

  getTVshows = async () => {
    const TVshows = await axios.get("http://api.tvmaze.com/search/shows?q=golden girls");
    console.log(TVshows);
  }

  getMemes = async () => {
    const memes = await axios.get("https://api.imgflip.com/get_memes");
    console.log(memes);
  }

  getMargaritaRecipes = async () => {
    const {data: {drinks}} = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita");
    this.setState({margaritaRecipes:drinks, isLoading: false});
    console.log(this.state);
  }

  componentDidMount() {
    // setTimeout(() => {
    //   this.setState({isLoading: false})
    // }, 3000);

    this.getMargaritaRecipes();
    // this.getMovies();
  }

  render(){
    const { isLoading, margaritaRecipes } = this.state;
    return (
      <section className="container">
      { 
        isLoading ? (
          <div className="loader">
            <span className="loader_text">
              "Loading..." 
            </span>
          </div>
        ) : (
          <div className="margarita_recipes">
          {
            margaritaRecipes.map(margaritaRecipe => {
              let ingredients = [];
              for (let index = 1; index < 16; index++) {
                let strIngredient = "strIngredient"+ index;
                let strMeasure = "strMeasure"+ index;
                const ingredient = margaritaRecipe[strIngredient];
                const measure = margaritaRecipe[strMeasure];
                if(ingredient) {
                  if(measure) {
                    ingredients.push(ingredient+ " (" + measure + ")");
                  }else {
                    ingredients.push(ingredient);
                  }

                }
              }
              return <MargaritaRecipes 
              key={margaritaRecipe.idDrink} 
              id={margaritaRecipe.idDrink} 
              title={margaritaRecipe.strDrink} 
              category={margaritaRecipe.strCategory}
              glass={margaritaRecipe.strGlass} 
              ingredients={ingredients} 
              instruction={margaritaRecipe.strInstructions} 
              image={margaritaRecipe.strDrinkThumb} 
              />
              })
          }
          </div>
        )
      }
      </section>
    );
  }

}

export default App;
