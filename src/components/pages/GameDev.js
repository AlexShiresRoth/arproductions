import React, { useEffect } from 'react';
import Layout from '../layout/Layout';
import Game from '../game/Game';
import ModelRender from '../modeling/ModelRender';
const GameDev = (props) => {
	useEffect(() => {
		setTimeout(() => {
			window.scrollTo({ top: 0 });
		}, 500);

		return () => clearTimeout();
	}, []);

	return (
		<Layout>
			<Game />
			<ModelRender />
		</Layout>
	);
};

export default GameDev;
