import { useParams } from 'react-router-dom';
import componentsMap from '../componentMap';
import { Profile } from "../homework/Profile/Profile";

import { Component3 } from '../homework/Component3';
import user from "../homework/Profile/user.json"
import { RecipeReview } from '../homework/RecipeReview/RecipeReview';
import recipes from "../homework/RecipeReview/recipes.json"

const ComponentPage = () => {
	const { componentId } = useParams();

	// Находим объект компонента по пути из URL
	const componentInfo = componentsMap.find(item => item.path === componentId);

	// Получаем имя компонента из объекта компонента
	const ComponentToRender = componentInfo ? componentInfo.name : null;

	// Рендерим компонент
	return (
		<>
			<h1>{ComponentToRender}</h1>
			{ComponentToRender === 'Profile' && <Profile userInfo={user} />}
			{ComponentToRender === 'RecipeReview' && <RecipeReview recipes={recipes} />}
			{ComponentToRender === 'Component3' && <Component3 />}
			{!ComponentToRender && <p>Компонент не найден</p>}
		</>
	);
};

export default ComponentPage;