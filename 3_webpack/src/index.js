import * as $ from 'jquery';// установка библиотеки npm i -S jquery
import Post from '@models/Post';
import json from './assets/json';
import xml from './assets/data.xml';
import csv from './assets/data.csv';
import WebpackLogo from '@/assets/webpack-logo.png';
import './styles/styles.css';
import './styles/less.less';
import './styles/scss.scss';
import './babel.js';


console.log('JSON - ', json);
console.log('XML - ', xml);
console.log('CSV - ', csv);


const post = new Post('Webpack Post Title', WebpackLogo);
$('pre').addClass('code').html(post.toString());


// lodash библиотека для работы с динамическим импортом
import ('lodash').then(_ => {
	console.log('Lodash', _.random(0, 42, true));
});