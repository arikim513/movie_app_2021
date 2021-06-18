import React from "react";
import PropTypes from "prop-types";
import PropsSample from "./Props";
import "./margaritaRecipes.css"

function MargaritaRecipes({id,title,category,glass,ingredients,instruction,image}) {
    return (
        <div className="margarita_recipe">
            <img src={image} alt={title} />
            <div className="margarita_data">
                <h3 className="margarita_title">{title}</h3>
                <h5 className="margarita_category">{category}</h5>
                <h5 className="margarita_glass">{glass}</h5>
                <h5 className="margarita_ingredients"><ul>{ingredients.map((ingredient, index) => (
                    <li className="margarita_ingredient" key={index}>{ingredient}</li>
                ))}</ul></h5>
                <p className="margarita_instruction">{instruction}</p>
                {/* <p className="margarita_instruction">{instruction.slice(0, 180)}...</p> */}
            </div>
        </div>
    )
}

MargaritaRecipes.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    glass: PropTypes.string.isRequired,
    ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
    instruction: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
}

export default MargaritaRecipes;