/*
	https://www.youtube.com/watch?v=eSaF8NXeNsA&ab_channel=%D0%92%D0%BB%D0%B0%D0%B4%D0%B8%D0%BB%D0%B5%D0%BD%D0%9C%D0%B8%D0%BD%D0%B8%D0%BD

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

//npm i -D copy-webpack-plugin  - для копирования фалйлов и папок
const CopyWebpackPlugin = require('copy-webpack-plugin');

//npm i -D mini-css-extract-plugin  -  для работы с css. Также это класс, который дает возможность добавить лоадер
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

//npm i -D optimize-css-assets-webpack-plugin  - для сжатия css
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');

//npm i -D terser-webpack-plugin  - для сжатия js
const TerserWebpackPlugin = require('terser-webpack-plugin');

//npm i -D webpack-bundle-analyzer  - полезен при анализа, оптимизации приложения (в браузере наглядно)
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer');


/*
Мжоно задать системные переменные для windows и linux:
	SET NODE_ENV=development
	export NODE_ENV=development
Но это неудобно, поэтому ставим пакет "npm i -D cross-env" и
в package.json запускаем строчкой "cross-env NODE_ENV=development webpack --mode development"
*/
const isDev = process.env.NODE_ENV === 'development'; // системная переменная NODE_ENV == development
const isProd = !isDev;


/* Ф-ия используется в строчке конфига optimization: optimization() */
const optimization = () => {
	const config = {
		/* для оптимизации, когда в 2-х точках входа (index.js и main.js), мы импортируем одну и ту же библиотеку
	   jquery.  После сборки общие вещи выносятся в vendor.. .js */
		splitChunks: {
			chunks: 'all'
		}
	};

	if (isProd) {
		// Переписываем стандартный минимизер использую плагины
		config.minimizer = [
			new OptimizeCssAssetsWebpackPlugin(),// минимизация css
			new TerserWebpackPlugin() // минимизация js
		];
	}

	return config;
};


// выводимый файл filename: '[name].[hash].js
const filename = ext => isDev ? `[name].${ext}` : `[name].[hash].${ext}`;


/* Есть стандартные плагины, есть те, которые требуют установки
	   плагины должны задаваться через инстансы (new Plugin())*/
const plugins = () => {
	const base = [

		//npm i -D html-webpack-plugin  - для работы с html
		new HTMLWebpackPlugin({
			template: './index.html',  // чтобы за основу брал этот html
			minify: {
				collapseWhitespace: isProd // оптимизируем html
			}
		}),

		//npm i -D clean-webpack-plugin  - для очистки файлов и папок
		new CleanWebpackPlugin(),

		//npm i -D copy-webpack-plugin  - для копирования фалйлов и папок
		new CopyWebpackPlugin([
			{
				from: path.resolve(__dirname, 'src/favicon.ico'),
				to: path.resolve(__dirname, 'dist')
			}
		]),


		//npm i -D mini-css-extract-plugin  -  для работы с css. Также это класс, который дает возможность добавить лоадер
		new MiniCssExtractPlugin({
			// filename: '[name].[contenthash].bundle.css',
			filename: filename('css'),
		}),
	];

	if (isProd) {
		/* npm i -D webpack-bundle-analyzer  - полезен при анализа, оптимизации приложения (в браузере наглядно)
		  В package.json Можно при помощи команды записать в файл webpack --json > stats.json &&  А после считать его при помощи webpack-bundle-analyzer stats.json" */
		base.push(new BundleAnalyzerPlugin())
	}

	return base;
};


module.exports = {

	// говорит где лежат исходники нашего приложения. И webpack будет отталкиваться от данной папки
	context: path.resolve(__dirname, 'src'),

	// режим production/development
	mode: 'development',

	// 2 точки входа (плюс дополнительно для теста typescript и react и eslint)
	entry: {
		/*  Полифилы: npm install @babel/polyfill - дополнительно для кода вида: async await  */
		main: ['@babel/polyfill', './index.js'],
		analitics: './analitics.js',

		typescript: './ts.ts',
		jsx: './jsx.jsx',
		eslint: './eslint.js',
	},

	// куда скомпилировать
	output: {
		path: path.resolve(__dirname, 'dist'), //__dirname - текущая директория
		/* паттерны - https://webpack.js.org/configuration/output/#outputfilename
		   [name] - здесь паттерн, сюда попадут ключи из entry
		   [contenthash] - hash, если изменился контент в файле, используется чтобы браузер не кешировал
		filename: '[name].[hash].js',*/
		filename: filename('js'),
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


	/* npm i -D webpack-dev-server  -  автоматическое обновление браузера
	   webpack-dev-server --mode development --open  - запуск из package.json (--open автоматически открывай окно в браузере)
	   webpack-dev-server при работе собирает все не в папку dist, а в оперативную память*/
	devServer: {
		port: 4200,
		hot: isDev,
	},


	/* для оптимизации в продакшн */
	optimization: optimization(),

	/* devtool   -  для исходных карт, удобно в браузере ориентироваться */
	devtool: isDev ? 'source-map' : '',


	/* Есть стандартные плагины, есть те, которые требуют установки
	   плагины должны задаваться через инстансы (new Plugin())*/
	plugins: plugins(),

	/* webpack умеет работать только с js (ну и json файлами)
	   Лоадеры - это возможность дополнения к webpack функционала, позволяющая ему работать с другими типами файлов */
	module: {
		rules: [
			{
				/* используй лоадеры (выполняются справа налево) если совпала регулярка
				  'css-loader'  позволяет понимать такие импорты в js -  import './styles/styles.css';    (npm i -D css-loader)
				  'style-loader'  добавляет стили в секцию head в html динамически !!!    (npm i -D style-loader)
				  MiniCssExtractPlugin.loader  вывод стилей в отдельный файл  (npm i -D mini-css-extract-plugin) */
				test: /\.css$/,
				//use: ['style-loader', 'css-loader']
				use: [{
					loader: MiniCssExtractPlugin.loader,
					options: {
						hmr: isDev, //hot module replacement - можно изменять сущность без перезагрузки страницы (полезно в разработке)
						reloadAll: true
					},
				}, 'css-loader']
			},
			{
				/* npm i -D less   и   npm i -D less-loader */
				test: /\.less$/,
				use: [{
					loader: MiniCssExtractPlugin.loader,
					options: {
						hmr: isDev,
						reloadAll: true
					},
				},
					'css-loader',
					'less-loader']
			},
			{
				/* npm i -D node-sass   и   npm i -D sass-loader */
				test: /\.s[ac]ss$/,
				use: [{
					loader: MiniCssExtractPlugin.loader,
					options: {
						hmr: isDev,
						reloadAll: true
					},
				},
					'css-loader',
					'sass-loader']
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
			{
				/*  babel - компилятор js (новые стандарты по старые браузеры)
				npm install --save-dev babel-loader @babel/core

				Presets набор определенных плагинов:

					Экспериментальные пресеты:
						Stage 0 - Strawman (идея)
						Stage 1 - Proposal (предложение)
						Stage 2 - Draft: (готов черновик)
						Stage 3 - Candidate: (кандидат)
						Stage 4 - Finished: (готово)

					Официальные пресеты:
						@babel/preset-env for compiling ES2015+ syntax  - (набор плагинов в современном формате)
																		  "npm install --save-dev @babel/preset-env"
																		   package.json  "browserslist": "> 0.25%, not dead"
						@babel/preset-typescript for TypeScript
						@babel/preset-react for React
						@babel/preset-flow for Flow

				    Полифилы:
				    	npm install @babel/polyfill - дополнительно для кода вида: async await
						При этом в entry тоже надо добавить:
									entry: {
										main: ['@babel/polyfill', './index.js'],
										analitics: './analitics.js'
									},

					Плагины:
				    	npm install -D @babel/plugin-proposal-class-properties - дополнительно для кода вида:
																					class Util {
																						static id = Date.now();
																					}
				    */
				test: /\.m?js$/,
				exclude: /(node_modules|eslint.js)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
						plugins: ['@babel/plugin-proposal-class-properties']
					}
				}
			},
			{
				// npm install -D @babel/preset-typescript    - для работы с type script
				test: /\.ts$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', '@babel/preset-typescript'],
						plugins: ['@babel/plugin-proposal-class-properties']
					}
				}
			},
			{
				// npm install -D @babel/preset-react     - для работы с react
				// npm i react react-dom    -  в зависимость разработки
				test: /\.jsx$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', '@babel/preset-react'],
						plugins: ['@babel/plugin-proposal-class-properties']
					}
				}
			},
			{
				/* npm i  -D eslint eslint-loader   -  подключаем eslint (корневой функционал) и eslint-loader
				.eslintrc - файл конфигурации eslint

					 {
					  "parser": "babel-eslint",             // npm i  -D babel-eslint - для того чтобы eslint знал синтаксис
					  "rules": {
						"no-unused-vars": "warn"			//чтобы выходили warning для неиспользуемых переменных
					  },
					  "env": {
						"es6": true,						// чтобы понимал es6 синтаксис
						"browser": true						// чтобы понимал, что работаем в браузере ( понимал console.log() )
					  },
					  "extends": [
						"eslint:recommended"                // конфигурация eslint
					   ]
					}

				 */
				test: /eslint.js$/,
				exclude: /node_modules/,
				use: [{
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', '@babel/preset-react'],
						plugins: ['@babel/plugin-proposal-class-properties']
					}
				},
					'eslint-loader'
				]
			},
		]
	}
};
/*
	npm i lodash - библиотека для работы с динамическими импортами

	Использование:
	import ('lodash').then(_ => {
		console.log('Lodash', _.random(0, 42, true));
	});
	Отдельно будет подключаться во вкладке network браузера файл 0.js
*/