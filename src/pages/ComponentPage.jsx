import { useParams } from 'react-router-dom';
import componentsMap from '../componentMap';
import { Component1 } from "../homework/Component1";
import { Component2 } from "../homework/Component2";
import { Component3 } from '../homework/Component3';

const ComponentPage = () => {
	const { componentId } = useParams();

	// Находим объект компонента по пути из URL
	const componentInfo = componentsMap.find(item => item.path === componentId);

	// Получаем имя компонента из объекта компонента
	const ComponentToRender = componentInfo ? componentInfo.name : null;

	// Рендерим компонент
	return (
		<>
			<h1>{componentId}</h1>
			{ComponentToRender === 'Component1' && <Component1 />}
			{ComponentToRender === 'Component2' && <Component2 />}
			{ComponentToRender === 'Component3' && <Component3 />}
			{!ComponentToRender && <p>Компонент не найден</p>}
		</>
	);
};

export default ComponentPage;