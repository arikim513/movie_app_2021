import PropTypes from "prop-types";

//array
const mainDishList =[
                      {
                        id:1, 
                        rating: 6,
                        name:"pork", 
                        image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.Cn0052ZEJBRqsvDFh9mndgHaE8%26pid%3DApi&f=1"
                      },
                      {
                        id:2, 
                        rating: 7,
                        name:"beef", 
                        image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Gs5A8B1eV3PZb8HwljF4YAHaHa%26pid%3DApi&f=1"
                      },
                      {
                        id:3, 
                        rating: 5.5,
                        name:"chicken", 
                        image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.28QPrxoOwipg1lM7osjshgHaLG%26pid%3DApi&f=1"
                      },
                      {
                        id:4, 
                        rating: 10,
                        name:"lamb", 
                        image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.X_AKZvFY9-3q8mlXH7lqVgHaFI%26pid%3DApi&f=1"
                      },
                      {
                        id:5, 
                        rating: 8,
                        name:"fish", 
                        image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.C9G0PRLxgX_eeMfZyihzpgHaD4%26pid%3DApi&f=1"
                      }
                    ];

function renderFood(dish) {
  return <Food key={dish.id} favorite={dish.name} picture={dish.image}/>
}

//child component
//function Food(props) {
function Food({ favorite, picture, rating }) {
  return <div>
      <h3>I love {favorite}</h3>
      <h4>{rating}/10.0</h4>
      <img src={picture} alt={favorite}/>
    </div>
}

Food.propTypes = {
  favorite: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
}

//parent component
function PropsSample() {
  return (
    <div>
      <h1>props</h1>
      <Food favorite = "potato" likeIt = {true} fruits = {["apple", "orange", "grape"]}/>
      <Food favorite = "noodle" />

      <h1>array</h1>
      {mainDishList.map(dish => <Food key={dish.id} rating={dish.rating} favorite={dish.name} picture={dish.image}/>)};
      {/* {mainDishList.map(renderFood)} */}
    </div>
  );
}

export default PropsSample;
