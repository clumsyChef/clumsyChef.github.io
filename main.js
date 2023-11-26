const content = document.querySelector("#content");

// Route handling START
const route = (event) => {
	event = event || window.event;
	event.preventDefault();
	window.history.pushState({}, "", event.target.href);
	handlePath();
};

const routes = {
	404: "/pages/404.html",
	"/": "/pages/home.html",
	"/about": "/pages/about.html",
	"/memes": "/pages/memes.html",
};

const handlePath = async () => {
	const path = window.location.pathname;
	const route = routes[path] || routes[404];
	const pageHtml = await fetch(route).then((result) => result.text());
	content.innerHTML = pageHtml;
};

window.onpopstate = handlePath;
window.route = route;

handlePath();
// Route handling END

const createPopup = (linkOrText) => {
	const wrapper = document.createElement("DIV");
	wrapper.id = "popup-wrapper";
	const wrapperStyles = {
		height: "100vh",
		width: "100vw",
		backgroundColor: "rgba(0, 0, 0, 0.5)",
		position: "fixed",
		top: "0px",
		left: "0px",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	};
	for (const i in wrapperStyles) {
		wrapper.style[i] = wrapperStyles[i];
	}

	const content = document.createElement("DIV");
	const innerContent = linkOrText.dataset.imgLink;
	content.innerHTML = innerContent ? `<img src="${innerContent}" />` : linkOrText;
	content.style.backgroundColor = "white";
	content.style.maxWidth = "50%";
	content.style.padding = "20px";

	wrapper.append(content);
	wrapper.addEventListener("click", (e) => {
		if (e.target === e.currentTarget) {
			document.querySelector("#popup-wrapper").remove();
		}
	});

	document.body.append(wrapper);
};
