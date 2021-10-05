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
			Плагины:
				npm install -D @babel/plugin-proposal-class-properties - дополнительно для кода вида:
																			class Util {
																				static id = Date.now();
																			}
				    */

// npm install @babel/polyfill
async function start() {
	return await Promise.resolve('async is working');
}
start().then(console.log);


// npm install -D @babel/plugin-proposal-class-properties
class Util {
	static id = Date.now();
}

console.log('Util id - ', Util.id);