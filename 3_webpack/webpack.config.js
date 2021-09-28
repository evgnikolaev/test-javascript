/*

	Gulp - это общая система для организации задач, которая сама по себе сборку не поддерживает, но её можно на ней написать, с помощью плагинов.
	При этом анализа кода, скорее всего, не будет, а значит ряд продвинутых фич отпадут.

	https://webpack.js.org/
	Webpack - это система сборки с массой возможностей. В частности, он анализирует JS-код (а также CSS или другой, через лоадеры), это даёт ему superpowers.
	То есть js будет компилироваться на этапе сборки на платформе node.js
	Рассмотрим webpack 4.


		мы уходим от такого подключения в index.html
		<script src="analitics.js"></script>
		<script src="Post.js"></script>
		<script src="index.js"></script>


	npm i -D webpack webpack-cli   // webpack-cli -  для консоли (первый раз лучше поставить их глобально)
									  -D - вспомогательные для разработки

	webpack.config.js             конфигурационный файл webpack
	Здесь нужно экспортировать объекты, которые будут объектом конфигурации для webpack

	минимальная конфигурация
	module.exports = {
		mode: ...,
		entry: ...,
		output: ...
	};


	Запуск:
		webpack                       (обычный)
		webpack --mode development    (принудительный в режиме разработки)
		webpack --mode production	  (принудительный в режиме продакшн)
		webpack --mode development --watch   (следит при этом за изменениями в файлах)


    @import "~normalize.css"; - подключаем css библиотеку в стилях через npm install normalize.css

*/


const path = require('path');//позволяет комфортно работать на платформе node.js

//npm i -D html-webpack-plugin  - для работы с html
const HTMLWebpackPlugin = require('html-webpack-plugin');

//npm i -D clean-webpack-plugin  - для очистки файлов и папок
const {CleanWebpackPlugin} = require('clean-webpack-plugin');


module.exports = {

	// говорит где лежат исходники нашего приложения. И webpack будет отталкиваться от данной папки
	context: path.resolve(__dirname, 'src'),

	// режим production/development
	mode: 'development',

	// 2 точки входа
	entry: {
		main: './index.js',
		analitics: './analitics.js'
	},

	// куда скомпилировать
	output: {
		path: path.resolve(__dirname, 'dist'), //__dirname - текущая директория
		/* паттерны - https://webpack.js.org/configuration/output/#outputfilename
		   [name] - здесь паттерн, сюда попадут ключи из entry
		   [contenthash] - hash, если изменился контент в файле, используется чтобы браузер не кешировал */
		filename: '[name].[contenthash].bundle.js',


		// publicPath: '/'
	},


	/* Дополнительные настройки */
	resolve: {

		/* расширения по умолчанию, которые должен понять webpack, ['.js','.json', 'можем указать и другие (например png)']
		   import Post from './Post'  - импортируем уже без  расширений*/
		extensions: ['.js', '.json'],

		/* Алиасы, например для import Post from '@models/Post';*/
		alias: {
			'@models': path.resolve(__dirname, 'src/models/'),
			'@': path.resolve(__dirname, 'src')
		}
	},


	/* Есть стандартные плагины, есть те, которые требуют установки
	   плагины должны задаваться через инстансы (new Plugin())*/
	plugins: [

		//npm i -D html-webpack-plugin  - для работы с html
		new HTMLWebpackPlugin({
			template: './index.html',  // чтобы за основу брал этот html
		}),

		//npm i -D clean-webpack-plugin  - для очистки файлов и папок
		new CleanWebpackPlugin()
	],


	/* webpack умеет работать только с js (ну и json файлами)
	   Лоадеры - это возможность дополнения к webpack функционала, позволяющая ему работать с другими типами файлов */
	module: {
		rules: [
			{
				/* используй лоадеры (выполняются справа налево) если совпала регулярка
				  'css-loader'  позволяет понимать такие импорты в js -  import './styles/styles.css';    (npm i -D css-loader)
				  'style-loader'  добавляет стили в секцию head в html динамически !!!    (npm i -D style-loader)  */
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},
			{
				//npm i -D file-loader  - импорты файлов, картинок  (!!!!  не заработал !!!)
				test: /\.(png|jpg|svg|gif)$/,
				use: ['file-loader']
			},
			{
				test: /\.(ttf|woff)$/,
				use: ['file-loader']
			},
			{
				// npm i -D xml-loader
				test: /\.xml$/,
				use: ['xml-loader']
			},
			{
				// npm i -D csv-loader,  npm i -D papaparse (т.к. csv-loader зависит от papaparse)
				test: /\.csv$/,
				use: ['csv-loader']
			},
		]
	}
};
// 125