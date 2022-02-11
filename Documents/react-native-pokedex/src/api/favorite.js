import AsyncStorage from "@react-native-async-storage/async-storage";
import { includes, pull } from "lodash";
import { FAVORITE_STORAGE } from "../utils/constants";

export async function getPokemonsFavoriteApi() {
  try {
    /*obtenemos el item de favorite y se guarda en response */
    const response = await AsyncStorage.getItem(FAVORITE_STORAGE);
    return response;
  } catch (error) {
    throw error;
  }
}

/*RECIBE EL ID DE POKEMON */
export async function addPokemonFavorite(id) {
  try {
    /* */
    const favorites = [];
    /*añadimos el id al array con push */
    favorites.push(id);
    /*seteamos el valor y lo agregamos al FAVORITE_STORAGE Y CONVERTIMOS EL ARRAY A STRING PORQUE EN EL STORAGE NO PODEMOS GUARDAR MAS QUE SOLO UN ARRAY */
    await AsyncStorage.setItem(FAVORITE_STORAGE, JSON.stringify(favorites));
  } catch (error) {
    throw error;
  }
}
