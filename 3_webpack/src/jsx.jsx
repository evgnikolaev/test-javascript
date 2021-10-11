import React from 'react';
import {render} from 'react-dom';

const App = () => (
	<div className="container">
		<br/><br/><br/>
		<h1>webpack course jsx</h1>
		<hr/>
		<div className="logo"/>
		<hr/>
		<div className="box">
			<h2>less jsx</h2>
		</div>
	</div>
);
render(<App/>, document.getElementById('app'));