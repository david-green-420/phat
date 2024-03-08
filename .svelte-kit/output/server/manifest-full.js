export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","audio.mp3","bg.png","bird.png","box-2.png","box-3.png","box-graphic.png","box.png","favicon.ico","fonts/gaming.otf","fonts/gaming.woff","fonts/valoon.woff","monchichi-logo.png","monchichi.png","raydium-white.png","telegram.png","twitter.png"]),
	mimeTypes: {".mp3":"audio/mpeg",".png":"image/png",".ico":"image/vnd.microsoft.icon",".otf":"font/otf",".woff":"font/woff"},
	_: {
		client: {"start":"_app/immutable/entry/start.67cb4df5.js","app":"_app/immutable/entry/app.9f2f37d2.js","imports":["_app/immutable/entry/start.67cb4df5.js","_app/immutable/chunks/index.0b4eca26.js","_app/immutable/chunks/singletons.953450fa.js","_app/immutable/entry/app.9f2f37d2.js","_app/immutable/chunks/index.0b4eca26.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/index",
				pattern: /^\/index\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
