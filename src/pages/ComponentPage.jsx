
import { useParams } from 'react-router-dom';
import componentsMap from '../componentMap';
import { Profile } from "../homework/Profile/Profile";
import { createContext, useContext, useState } from 'react';

import user from "../homework/Profile/user.json"
import { RecipeReview } from '../homework/RecipeReview/RecipeReview';
import recipes from "../homework/RecipeReview/recipes.json"
import Pokemon from '../homework/Pokemon/Pokemon';



const UrlContext = createContext();

export const ComponentPage = () => {
	const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
	const { componentId } = useParams();
	// Находим объект компонента по пути из URL

	const componentInfo = componentsMap.find(item => item.path === componentId);
	// Получаем имя компонента из объекта компонента
	const ComponentToRender = componentInfo ? componentInfo.name : null;

	// Рендерим компонент
	return (
		<UrlContext.Provider value={{ url, setUrl }}>
			<>
				<h1>{ComponentToRender}</h1>
				{ComponentToRender === 'Profile' && <Profile userInfo={user} />}
				{ComponentToRender === 'RecipeReview' && <RecipeReview recipes={recipes} />}
				{ComponentToRender === 'Pokemon' && <Pokemon />}
				{!ComponentToRender && <p>Компонент не найден</p>}
			</>
		</UrlContext.Provider>
	);
};


export const useUrl = () => useContext(UrlContext);