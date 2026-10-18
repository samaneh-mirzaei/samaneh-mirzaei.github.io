// ===== Editable site configuration =====
const CONFIG = {
	name: "Samaneh Mirzaei",
	nameFa: "سمانه میرزایی",
	social: {
		github: "https://github.com/samaneh-mirzaei",
		linkedin: "",
	},
};

// ===== Themes (ids match [data-theme] blocks in css/style.css) =====
const DEFAULT_THEME = "pim";
const STORAGE_KEY = "portfolio-theme";
const THEMES = [
	{
		id: "pim",
		name: "PIM",
		colors: ["#fcfbfc", "#fcf291", "#febcfe", "#5e4af0", "#302534"],
	},
	{
		id: "halloween",
		name: "Halloween",
		colors: ["#06060e", "#361c7d", "#d34f0d", "#f99e90"],
	},
	// { id: "oil", name: "Oil", colors: ["#fbf5ef", "#f2d3ab", "#c69fa5", "#8b6d9c", "#494d7e", "#272744"] },
	{
		id: "twilight",
		name: "Twilight",
		colors: ["#fbbbad", "#ee8695", "#4a7a96", "#333f58", "#292831"],
	},
	{
		id: "icecream",
		name: "Ice Cream",
		colors: ["#7c3f58", "#eb6b6f", "#f9a875", "#fff6d3"],
	},
	// { id: "latenight", name: "Late Night", colors: ["#282d3c", "#5b5d70", "#74838c", "#ffc4b8", "#f69197"] },
	{
		id: "bittersweet",
		name: "Bitter Sweet",
		colors: ["#282328", "#545c7e", "#c56981", "#a3a29a"],
	},
	{
		id: "mold",
		name: "Mold",
		colors: ["#191b1a", "#294257", "#579c9a", "#99c9b3"],
	},
	{
		id: "watermelon",
		name: "Watermelon",
		colors: ["#fcdeea", "#ff4d6d", "#265935", "#012824"],
	},
	{
		id: "nightsky",
		name: "Night Sky",
		colors: ["#131626", "#4d4d80", "#e6a1cf", "#ffe6ea"],
	},
];

function initThemes() {
	const btn = document.getElementById("theme-btn");
	const menu = document.getElementById("theme-menu");
	const current = document.getElementById("theme-current");
	if (!btn || !menu) return;
	const dots = (c) => c.map((h) => `<i style="background:${h}"></i>`).join("");
	const opts = THEMES.map((t) => {
		const b = document.createElement("button");
		b.type = "button";
		b.className = "theme-opt";
		b.dataset.theme = t.id;
		b.innerHTML = `<span>${t.name}</span><span class="swatches" aria-hidden="true">${dots(t.colors)}</span>`;
		b.addEventListener("click", () => apply(t.id));
		menu.appendChild(b);
		return b;
	});
	function apply(id, save = true) {
		const t = THEMES.find((x) => x.id === id) || THEMES[0];
		document.documentElement.dataset.theme = t.id;
		current.innerHTML = dots(t.colors);
		opts.forEach((o) =>
			o.setAttribute("aria-pressed", String(o.dataset.theme === t.id)),
		);
		if (save)
			try {
				localStorage.setItem(STORAGE_KEY, t.id);
			} catch (e) {}
	}
	const toggle = (open) => {
		menu.hidden = !open;
		btn.setAttribute("aria-expanded", String(open));
	};
	btn.addEventListener("click", () => toggle(menu.hidden));
	document.addEventListener("click", (e) => {
		if (!e.target.closest(".theme")) toggle(false);
	});
	document.addEventListener("keydown", (e) => {
		if (e.key === "Escape" && !menu.hidden) {
			toggle(false);
			btn.focus();
		}
	});
	let saved = DEFAULT_THEME;
	try {
		saved = localStorage.getItem(STORAGE_KEY) || DEFAULT_THEME;
	} catch (e) {}
	apply(saved, false);
}

// ===== Language (EN default / FA) =====
const DEFAULT_LANG = "en";
const LANG_KEY = "portfolio-lang";
const FA_THEME_NAMES = {
	pim: "PIM",
	halloween: "هالووین",
	oil: "رنگ روغن",
	twilight: "گرگ‌ومیش",
	icecream: "بستنی",
	latenight: "نیمه‌شب",
	bittersweet: "تلخ‌وشیرین",
	mold: "سبزآبی",
	watermelon: "هندوانه",
	nightsky: "آسمان شب",
};

const FA = {
	"meta.title": `${CONFIG.nameFa} — توسعه‌دهنده هوش مصنوعی و فول‌استک`,
	"meta.description": `نمونه‌کارهای ${CONFIG.nameFa} در زمینه هوش مصنوعی، توسعه وب و بازی‌سازی.`,

	"a11y.skip": "رفتن به محتوای اصلی",
	"a11y.mainNav": "ناوبری اصلی",
	"a11y.language": "انتخاب زبان",
	"a11y.langSwitch": "زبان فارسی",
	"a11y.changeTheme": "تغییر رنگ‌بندی سایت",
	"a11y.themeMenu": "انتخاب رنگ‌بندی",
	"a11y.social": "لینک‌های شبکه‌های اجتماعی",

	"nav.about": "درباره من",
	"nav.resume": "رزومه",
	"theme.label": "رنگ‌بندی",

	"hero.hello": "سلام، من",
	"hero.alt": `تصویر ${CONFIG.nameFa}`,
	"hero.tagline": "از ساخت سیستم‌های هوشمند تا توسعه وب و خلق بازی‌های تعاملی.",
	"hero.intro":
		"از تبدیل ایده‌ها به محصولاتی واقعی با کمک کدنویسی لذت می‌برم؛ چه ساخت راهکارهای مبتنی بر هوش مصنوعی و سیستم‌های بک‌اند باشد، چه طراحی رابط‌های کاربری جذاب یا توسعه بازی‌های تعاملی. دوست دارم فناوری‌های مختلف را تجربه کنم، سراغ مسئله‌های چالش‌برانگیز بروم و پروژه‌هایی بسازم که در آن‌ها خلاقیت و فناوری کنار هم قرار می‌گیرند.",

	"about.title": "درباره من",
	"about.background.title": "سوابق و تجربه‌ها",
	"about.background.text":
		"دانشجوی مهندسی کامپیوتر هستم و تجربه کار روی پروژه‌های هوش مصنوعی و توسعه فول‌استک را دارم. از جمله پروژه‌هایم، مدلی مبتنی بر یادگیری عمیق و بینایی کامپیوتر برای تشخیص چهار نوع تومور مغزی با دقت کلی ۹۸٫۹۹ درصد است. همچنین برای یک استارتاپ، روی دو پروژه مبتنی بر RAG (تولید تقویت‌شده با بازیابی اطلاعات) کار کرده‌ام. در کنار این‌ها، بازی‌های کوچک داستان‌محور با سبک پیکسل‌آرت می‌سازم و حدود ۶۰ قالب صفحه وب با HTML، CSS و JavaScript طراحی کرده‌ام.",

	"about.interests.title": "علایق من",
	"about.interests.text":
		"هوش مصنوعی و بازی‌سازی دو حوزه‌ای هستند که بیش از همه به آن‌ها علاقه دارم. از هوش مصنوعی برای ساخت ابزارها و برنامه‌های هوشمند استفاده می‌کنم و با ترکیب مهارت‌های فرانت‌اند و بک‌اند، ایده‌هایم را به پروژه‌های واقعی تبدیل می‌کنم. در اوقات فراغت هم بازی می‌کنم، به هنر می‌پردازم و با Blender انیمیشن‌های دوبعدی و مدل‌های سه‌بعدی می‌سازم.",

	"about.skills.title": "مهارت‌ها",
	"about.skills.linux": "مبانی لینوکس",

	"about.goals.title": "اهداف من",
	"about.goals.text":
		"می‌خواهم مسیر حرفه‌ای خودم را در مهندسی هوش مصنوعی و بازی‌سازی ادامه بدهم و سیستم‌های هوشمند را با تجربه‌های خلاقانه و تعاملی ترکیب کنم. یکی از هدف‌هایم این است که ایده بازی‌ای را که مدت‌هاست در ذهن دارم، به یک بازی واقعی تبدیل کنم. همچنین دوست دارم ابزارهای کاربردی برای توسعه‌دهندگان بسازم؛ از جمله پلتفرمی مبتنی بر FastAPI که امکان تست API، پایش عملکرد و شبیه‌سازی درخواست‌ها را در یک محیط واحد فراهم کند. در کنار این اهداف، به دنبال فرصت‌های کارآموزی، موقعیت‌های شغلی و همکاری در پروژه‌های متن‌باز هستم تا بیشتر یاد بگیرم و تجربه کسب کنم.",

	"resume.title": "رزومه",
	"resume.text":
		"برای آشنایی بیشتر با سوابق تحصیلی، مهارت‌ها و تجربه‌هایم، می‌توانید رزومه‌ام را دریافت کنید.",
	"resume.button": "دریافت رزومه (PDF)",

	"footer.rights": " — تمامی حقوق محفوظ است.",
	"footer.top": "بازگشت به بالای صفحه ↑",

	// ----- Navigation / homepage link -----
	"nav.home": "خانه",
	"nav.projects": "پروژه‌ها",
	"nav.cases": "مطالعه‌های موردی",
	"nav.learning": "یادگیری",
	"about.more": "مشاهده‌ی پروژه‌ها، مطالعه‌های موردی و گواهی‌نامه‌ها ←",

	// ----- details.html -----
	"d.meta.title": `پروژه‌ها و یادگیری | ${CONFIG.nameFa}`,
	"d.meta.description": `جزئیات پروژه‌ها، مطالعه‌های موردی و مسیر یادگیری ${CONFIG.nameFa}.`,
	"d.back": "→ بازگشت به صفحه اصلی",
	"d.eyebrow": "جزئیات نمونه‌کار",
	"d.title": "پروژه‌ها، مطالعه‌های موردی و یادگیری",
	"d.intro":
		"نگاهی دقیق‌تر به کارهایی که ساخته‌ام و مسیری که برای یادگیری ادامه می‌دهم.",
	"d.projects.title": "پروژه‌ها",
	"d.projects.lede": "گزیده‌ای از پروژه‌هایی که روی آن‌ها کار کرده‌ام.",
	"d.thumb": "جای تصویر پیش‌نمایش",
	"d.p1.title": "طبقه‌بندی تومور مغزی",
	"d.p1.desc":
		"برنامه‌ای مبتنی بر یادگیری عمیق و بینایی کامپیوتر که تومورهای مغزی را در چهار کلاس طبقه‌بندی می‌کند و به دقت کلی ۹۸٫۹۹ درصد رسیده است.",
	"d.p2.title": "دستیار RAG برای مقالات علمی",
	"d.p2.desc":
		"یک سیستم RAG مبتنی بر مقالات علمی که برای یک استارتاپ توسعه داده‌ام.",
	"d.p3.title": "بازی‌های داستان‌محور و پیکسل‌آرت",
	"d.p3.desc": "بازی‌های کوچک داستان‌محور و پیکسل‌آرت.",
	"d.p4.title": "قالب‌های صفحه وب با HTML، CSS و JavaScript",
	"d.p4.desc": "حدود ۶۰ قالب صفحه وب که با HTML، CSS و JavaScript ساخته‌ام.",
	"d.p5.title": "دستیار RAG برای محتوای Khamenei.ir",
	"d.p5.desc":
		"یک سیستم RAG برای یک استارتاپ که از محتوای وب‌سایت Khamenei.ir استفاده می‌کند و با Flask پیاده‌سازی شده است.",
	"d.role": "نقش:",
	"d.links": "لینک‌ها:",
	"d.cases.title": "جزئیات پروژه",
	"d.cases.lede": "مطالعه‌های موردی: مسئله، رویکرد، پیاده‌سازی و نتایج.",
	"d.case1.title": "مطالعه‌ی موردی: طبقه‌بندی تومور مغزی",
	"d.case1.problem":
		"طبقه‌بندی خودکار تومورهای مغزی در چهار کلاس با استفاده از بینایی کامپیوتر.",
	"d.case1.results": "دقت کلی ۹۸٫۹۹ درصد.",
	"d.problem": "مسئله",
	"d.approach": "رویکرد",
	"d.impl": "پیاده‌سازی",
	"d.results": "نتایج",
	"d.learning.title": "گواهی‌نامه‌ها و یادگیری",
	"d.learning.lede": "گواهی‌نامه‌ها، دوره‌ها، کارگاه‌ها و دستاوردهای یادگیری.",
	"d.l.cert": "گواهی‌نامه",
	"d.l.course": "دوره یا کارگاه",
	"d.l.ach": "دستاورد یادگیری",
	"d.issuer": "صادرکننده:",
	"d.date": "تاریخ:",
	"d.verify": "لینک تأیید:",
	"d.ph.role": "[نقش خود را اضافه کنید]",
	"d.ph.link": "[لینک را اضافه کنید]",
	"d.ph.tech": "[فناوری‌ها را اضافه کنید]",
	"d.ph.title": "[عنوان را اضافه کنید]",
	"d.ph.text": "[جزئیات را اینجا اضافه کنید]",
	"d.ph.value": "[اضافه کنید]",
};

function initLang() {
	const html = document.documentElement;
	const langToggle = document.getElementById("lang-toggle");
	const els = document.querySelectorAll("[data-i18n], [data-i18n-attr]");
	const pairs = (el) =>
		(el.dataset.i18nAttr || "")
			.split(",")
			.filter(Boolean)
			.map((p) => p.split(":"));
	const EN = {};
	// Remember the English source text from the HTML (once)
	els.forEach((el) => {
		const k = el.dataset.i18n;
		if (k && !(k in EN)) EN[k] = el.textContent.replace(/\s+/g, " ").trim();
		pairs(el).forEach(([attr, key]) => {
			if (!(key in EN)) EN[key] = el.getAttribute(attr);
		});
	});
	const tr = (lang, key) => (lang === "fa" && FA[key]) || EN[key];

	function apply(lang, save = true) {
		if (lang !== "fa") lang = "en";
		html.lang = lang;
		html.dir = lang === "fa" ? "rtl" : "ltr";

		document
			.querySelectorAll("[data-site-name]")
			.forEach(
				(el) => (el.textContent = lang === "fa" ? CONFIG.nameFa : CONFIG.name),
			);

		els.forEach((el) => {
			if (el.dataset.i18n) el.textContent = tr(lang, el.dataset.i18n);
			pairs(el).forEach(([attr, key]) => el.setAttribute(attr, tr(lang, key)));
		});
		// Theme names are created by initThemes(), so update them here
		document.querySelectorAll(".theme-opt").forEach((b) => {
			const t = THEMES.find((x) => x.id === b.dataset.theme);
			if (t)
				b.firstElementChild.textContent =
					lang === "fa" ? FA_THEME_NAMES[t.id] || t.name : t.name;
		});
		// Toggle state: "on" = Persian
		if (langToggle)
			langToggle.setAttribute("aria-checked", String(lang === "fa"));
		if (save)
			try {
				localStorage.setItem(LANG_KEY, lang);
			} catch (e) {}
	}

	if (langToggle)
		langToggle.addEventListener("click", () =>
			apply(html.lang === "fa" ? "en" : "fa"),
		);
	let saved = DEFAULT_LANG;
	try {
		saved = localStorage.getItem(LANG_KEY) || DEFAULT_LANG;
	} catch (e) {}
	apply(saved, false);
}

document.addEventListener("DOMContentLoaded", () => {
	document
		.querySelectorAll("[data-site-name]")
		.forEach((el) => (el.textContent = CONFIG.name));
	document.querySelectorAll("[data-social]").forEach((el) => {
		const url = CONFIG.social[el.dataset.social];
		if (url) el.href = url;
	});
	const year = document.getElementById("year");
	if (year) year.textContent = new Date().getFullYear();

	initThemes();
	initLang();

	// Scroll reveal
	const items = document.querySelectorAll(
		".hero-text, .hero-photo, .card, .resume",
	);
	items.forEach((el) => el.classList.add("reveal"));
	if (!("IntersectionObserver" in window))
		return items.forEach((el) => el.classList.add("visible"));
	const io = new IntersectionObserver(
		(entries) => {
			entries.forEach((e) => {
				if (e.isIntersecting) {
					e.target.classList.add("visible");
					io.unobserve(e.target);
				}
			});
		},
		{ threshold: 0.12 },
	);
	items.forEach((el) => io.observe(el));
});
