import { App } from './app/app';

// start http server.
App.listen(App.get("port"), () => {
	console.log("[*] - App is running at http://%s:%s", App.get("host"), App.get("port"));
});