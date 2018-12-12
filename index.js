// Not using JQuery for this one so let's go with this
function Q(q) { return document.querySelector(q); }

var css = document.createElement("style");
css.type = "text/css";
css.innerHTML = '';
document.head.appendChild(css);

function addCSS(rule) {
	css.innerHTML += rule + '\n';
}

function getJSON(path, callback) {
	var request = new XMLHttpRequest();
	request.open('GET', path, true);

	request.onload = function() {
		if (request.status >= 200 && request.status < 400) {
			var data = JSON.parse(request.responseText);
			callback(data);
		}
	};

	request.send();
}


function createListElement(obj) {
	var elemID = obj['id'] + "_elem";
	
	var elem = document.createElement('div');
	elem.setAttribute('class', 'element');
	elem.setAttribute('id', elemID);

	var titlebar = document.createElement('div');
	titlebar.setAttribute('class', 'titlebar');

	title = document.createElement('span');
	title.setAttribute('id', 'title');
	title.setAttribute('class', 'unselectable');
	title.setAttribute('unselectable', 'on');
	title.innerHTML = obj['title'];
	titlebar.appendChild(title);

	var bgUrl = 'assets/projects/' + obj['id'] + '/titleimg.png';

	addCSS('#' + elemID + '>.titlebar { background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7)), url(' + bgUrl + ');}');
	addCSS('#' + elemID + '>.titlebar:hover { background-image: linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7)), url(' + bgUrl + ');}');
	addCSS('#' + elemID + '>.titlebar:active { background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3)), url(' + bgUrl + ');}');
	addCSS('#' + elemID + '>.titlebar:hover:active { background-image: linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3)), url(' + bgUrl + ');}');
	
	var expandedInfo = document.createElement('div');
	expandedInfo.setAttribute('class', 'collapsed');
	
	var container = document.createElement('div');
	container.setAttribute('style', 'display: none;');
	container.setAttribute('class', 'problemcontainer');
	expandedInfo.appendChild(container);

	var description = document.createElement('p');
	description.innerText = obj['description'];
	container.appendChild(description);

	var expanded = false;
	titlebar.onclick = function () {
		expanded = !expanded;

		if (expanded) {
			container.setAttribute('style', 'display: block;');
			expandedInfo.setAttribute('style', 'height: ' + container.scrollHeight + 'px; opacity: inherit;');
		} else {
			expandedInfo.setAttribute('class', 'collapsed');
			expandedInfo.setAttribute('style', '');
			container.setAttribute('style', 'display: none;');
		}
	};

	elem.appendChild(titlebar);
	elem.appendChild(expandedInfo);

	return elem;
}

getJSON('/assets/projects/projects.json', function (data) {
	var elem = Q('#projectlist');

	for (var i = 0; i < data['displayTags'].length; i++) {
		var tag = data['displayTags'][i]

		var sectionTitle = document.createElement('h2');
		sectionTitle.innerText = '' + tag;
		elem.appendChild(sectionTitle);

		for (var j = 0; j < data['projects'].length; j++) {
			var project = data['projects'][j];

			if (project['tags'].includes(tag))
				elem.appendChild(createListElement(project));
		}
	}
});
