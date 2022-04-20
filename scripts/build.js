window["$"] = document.querySelector.bind(document);
window["$$"] = document.querySelectorAll.bind(document);

const container = $("#container");
const pageLinks = $$(".navbar > a");
pageLinks.forEach((link, index) => {
	link.addEventListener("click", (e) => {
		preventAndFetch(e);
	});
});

const allRoutes = {
	404: "/pages/404.html",
	about: "/pages/about.html",
	contact: "/pages/contact.html",
	education: "/pages/education.html",
	home: "/pages/home.html",
	xp: "/pages/xp.html",
};

const preventAndFetch = (event) => {
	event = event || window.event;
	event.preventDefault();
	window.history.pushState({}, "", event.target.href);
	getPage();
};

const getPage = async () => {
	const path = window.location.pathname.replace("/", "");
	const route = allRoutes[path] || allRoutes[404];
	const content = await fetch(route).then((data) => data.text());
	container.innerHTML = content;
};

window.onpopstate = getPage;
window.route = preventAndFetch;
getPage();
