webpackJsonp([221374088121123],{

/***/ 4:
/***/ (function(module, exports) {

	/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/
	
	'use strict';
	/* eslint-disable no-unused-vars */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;
	
	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}
	
		return Object(val);
	}
	
	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}
	
			// Detect buggy property enumeration order in older V8 versions.
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}
	
			return true;
		} catch (err) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}
	
	module.exports = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;
	
		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);
	
			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}
	
			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}
	
		return to;
	};


/***/ }),

/***/ 177:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	const React = __webpack_require__(5);
	const humanReadable_1 = __webpack_require__(179);
	const Spacer_1 = __webpack_require__(60);
	const additionalRepos_1 = __webpack_require__(178);
	function getTopic(topics, name) {
	    const found = topics.find(t => t.name === name);
	    if (found) {
	        return found;
	    } else {
	        const stars = name === "uncategorized" ? -100 : 0;
	        const topic = { name, repos: [], stars };
	        topics.push(topic);
	        return topic;
	    }
	}
	const RepoList = function ({ repos }) {
	    // our main topic collection
	    const topics = [];
	    // add repos to corresponding topics
	    [...repos, ...additionalRepos_1.additionalRepos].forEach(repo => {
	        const repoTopics = repo.repositoryTopics.nodes;
	        const topicName = repoTopics.length ? repoTopics[0].topic.name : "uncategorized";
	        const topic = getTopic(topics, topicName);
	        topic.stars += repo.stargazers.totalCount;
	        topic.repos.push(repo);
	    });
	    // sort topic repos by stars
	    topics.forEach(topic => {
	        topic.repos.sort((a, b) => a.stargazers.totalCount < b.stargazers.totalCount ? 1 : -1);
	    });
	    // sort topics by stars sum
	    topics.sort((a, b) => a.stars < b.stars ? 1 : -1);
	    return React.createElement("div", { className: "repos" }, topics.map((topic, i) => React.createElement("div", { key: i, id: topic.name }, React.createElement(Spacer_1.default, { height: 6 }), React.createElement("h1", null, humanReadable_1.humanReadable(topic.name)), React.createElement(Spacer_1.default, { height: 2 }), React.createElement("ul", null, topic.repos.map(({ homepageUrl, url, name, description }, c) => React.createElement("li", { key: c }, React.createElement("a", { href: homepageUrl && !homepageUrl.includes("://pravdomil.com") ? homepageUrl : url + "#readme", target: "_blank" }, React.createElement("span", { className: "title" }, humanReadable_1.humanReadable(name)), React.createElement(Spacer_1.default, { height: .5 }), React.createElement("span", { className: "desc" }, description))))))));
	};
	exports.default = RepoList;

/***/ }),

/***/ 60:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	const React = __webpack_require__(5);
	const Spacer = function ({ children, height = 1 }) {
	    const style = {
	        height: height * 8
	    };
	    return React.createElement("div", { style: style }, children);
	};
	exports.default = Spacer;

/***/ }),

/***/ 178:
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.additionalRepos = [{
	    name: "Services",
	    description: "That's what I do for living",
	    url: "",
	    homepageUrl: "https://services.pravdomil.com",
	    viewerHasStarred: false,
	    stargazers: { totalCount: 0 },
	    repositoryTopics: { nodes: [] }
	}, {
	    name: "Whetstone",
	    description: "Image processing application for macOS with no UI",
	    url: "",
	    homepageUrl: "https://whetstone.pravdomil.com",
	    viewerHasStarred: false,
	    stargazers: { totalCount: 0 },
	    repositoryTopics: { nodes: [{ topic: { name: "applications" } }] }
	}, {
	    name: "Nodepad",
	    description: "Another developer tool",
	    url: "",
	    homepageUrl: "https://nodepad.pravdomil.com",
	    viewerHasStarred: false,
	    stargazers: { totalCount: 0 },
	    repositoryTopics: { nodes: [{ topic: { name: "applications" } }] }
	}, {
	    name: "papercut",
	    description: "Video editor concept",
	    url: "",
	    homepageUrl: "https://papercut.pravdomil.com",
	    viewerHasStarred: false,
	    stargazers: { totalCount: 0 },
	    repositoryTopics: { nodes: [{ topic: { name: "applications" } }] }
	}, {
	    name: "Mac-Keyboard-Piano",
	    description: "Use your Mac keyboard as piano keys",
	    url: "",
	    homepageUrl: "https://mackeyboardpiano.pravdomil.com",
	    viewerHasStarred: false,
	    stargazers: { totalCount: 0 },
	    repositoryTopics: { nodes: [{ topic: { name: "applications" } }] }
	}, {
	    name: "Pravdomil Piano",
	    description: "My piano in development",
	    url: "",
	    homepageUrl: "https://piano.pravdomil.com",
	    viewerHasStarred: false,
	    stargazers: { totalCount: 0 },
	    repositoryTopics: { nodes: [{ topic: { name: "design" } }] }
	}, {
	    name: "Přijímačky UMPRUM",
	    description: "Má první kniha",
	    url: "",
	    homepageUrl: "https://prijimackyumprum.pravdomil.com",
	    viewerHasStarred: false,
	    stargazers: { totalCount: 0 },
	    repositoryTopics: { nodes: [{ topic: { name: "czech" } }] }
	}, {
	    name: "prawood",
	    description: "DIY wooden furniture",
	    url: "",
	    homepageUrl: "https://prawood.pravdomil.com",
	    viewerHasStarred: false,
	    stargazers: { totalCount: 0 },
	    repositoryTopics: { nodes: [{ topic: { name: "art" } }] }
	}, {
	    name: "photography",
	    description: "Nice photos",
	    url: "",
	    homepageUrl: "https://www.icloud.com/sharedalbum/#B0P5oqs3qkAGn;30709E02-4714-4CEA-B4DE-17C88DB668FC",
	    viewerHasStarred: false,
	    stargazers: { totalCount: 0 },
	    repositoryTopics: { nodes: [{ topic: { name: "art" } }] }
	}, {
	    name: "graphics-design",
	    description: "Posters, logos, brand identity I have created",
	    url: "",
	    homepageUrl: "https://graphic.pravdomil.com",
	    viewerHasStarred: false,
	    stargazers: { totalCount: 0 },
	    repositoryTopics: { nodes: [{ topic: { name: "art" } }] }
	}, {
	    name: "web-development",
	    description: "That's what I used to do for living",
	    url: "",
	    homepageUrl: "https://web.pravdomil.com",
	    viewerHasStarred: false,
	    stargazers: { totalCount: 0 },
	    repositoryTopics: { nodes: [] }
	}, {
	    name: "3D-print",
	    description: "My experiences with 3D printing",
	    url: "",
	    homepageUrl: "https://3dprint.pravdomil.com",
	    viewerHasStarred: false,
	    stargazers: { totalCount: 0 },
	    repositoryTopics: { nodes: [{ topic: { name: "art" } }] }
	}, {
	    name: "sound",
	    description: "My sound experiments",
	    url: "",
	    homepageUrl: "https://sound.pravdomil.com",
	    viewerHasStarred: false,
	    stargazers: { totalCount: 0 },
	    repositoryTopics: { nodes: [{ topic: { name: "art" } }] }
	}, {
	    name: "Magic-Lantern",
	    description: "Hacks for Canon cameras",
	    url: "",
	    homepageUrl: "https://magiclantern.pravdomil.com",
	    viewerHasStarred: false,
	    stargazers: { totalCount: 0 },
	    repositoryTopics: { nodes: [] }
	}, {
	    name: "newton-law",
	    description: "Newton’s law experiments",
	    url: "",
	    homepageUrl: "https://newton-law.pravdomil.com",
	    viewerHasStarred: false,
	    stargazers: { totalCount: 0 },
	    repositoryTopics: { nodes: [] }
	}];

/***/ }),

/***/ 179:
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	function humanReadable(input) {
	    const output = input.replace(/^wp-/, "").replace(/-/g, " ");
	    return output[0].toLocaleUpperCase() + output.substr(1);
	}
	exports.humanReadable = humanReadable;

/***/ }),

/***/ 182:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	const React = __webpack_require__(5);
	const RepoList_1 = __webpack_require__(177);
	const IndexPage = function ({ data }) {
	    if (!(data && data.githubData)) {
	        throw new Error("No data from GitHub");
	    }
	    const repos = data.githubData.data.viewer.repositories.nodes;
	    return React.createElement("div", null, React.createElement(RepoList_1.default, { repos: repos }));
	};
	exports.query = "** extracted graphql fragment **";
	exports.default = IndexPage;

/***/ })

});
//# sourceMappingURL=component---src-pages-index-tsx-e4a1cefd6b80c80bbde5.js.map