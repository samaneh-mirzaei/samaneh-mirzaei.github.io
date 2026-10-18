// Classic (non-module) script, loaded in <head> so the saved theme/language
// is applied before first paint (prevents a flash of the default theme).
// Keys must match STORAGE_KEYS in js/config.js.
(function () {
	try {
		var theme = localStorage.getItem("portfolio-theme");
		if (theme) document.documentElement.dataset.theme = theme;
		if (localStorage.getItem("portfolio-lang") === "fa") {
			document.documentElement.lang = "fa";
			document.documentElement.dir = "rtl";
		}
	} catch (e) {}
})();
