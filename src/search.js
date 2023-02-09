/**import { openOverlayPanel } from './detail'  */

/**
 * Recherche des coktails
 */
export async function searchForCocktails() {
  // On récupére la valeur de recherche
  const search = document.querySelector('#search').value

  // Si je n'ai rien rentré
  if (!search) {
    // On arréte la fonction
    return
  }

  // On fait une requête HTTP aux serveur contenant les cocktails
  const response = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`,
  )

  // Je récupére l'objet javascript que le serveur m'a renvoyé en utilisant json
  const data = await response.json()

  // Je récupére la liste de cocktails
  const drinks = data.drinks

  // Je récupére le container pour mes cocktails
  const container = document.querySelector('.cocktail-container')

  // Je vide le container
  container.innerHTML = ''

  // Je dois boucler sur les cocktails
  for (const drink of drinks) {
    // Je créer la div d'un cocktail
    const testp = drink.strDrink
    const  testt = drink.strDrinkThumb
    // J'ajoute la div dans le container
    //container.append(div)

    
  }
}