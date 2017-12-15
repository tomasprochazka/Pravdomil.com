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

/***/ 176:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	const React = __webpack_require__(5);
	const helper_1 = __webpack_require__(177);
	const Spacer_1 = __webpack_require__(60);
	function getTopic(topics, name) {
	    const found = topics.find(t => t.name === name);
	    if (found) {
	        return found;
	    } else {
	        const topic = { name, repos: [], stars: name === "uncategorized" ? -1 : 0 };
	        topics.push(topic);
	        return topic;
	    }
	}
	const RepoList = function ({ repos }) {
	    const topics = repos.reduce((accumulator, repo) => {
	        const topicCount = repo.repositoryTopics.nodes.length;
	        const name = topicCount ? repo.repositoryTopics.nodes[topicCount - 1].topic.name : "uncategorized";
	        const topic = getTopic(accumulator, name);
	        topic.stars += repo.stargazers.totalCount;
	        if (repo.viewerHasStarred) {
	            topic.stars += 99;
	        }
	        topic.repos.push(repo);
	        return accumulator;
	    }, []);
	    topics.sort((a, b) => a.stars < b.stars ? 1 : -1);
	    topics.forEach(topic => {
	        topic.repos.sort((a, b) => a.stargazers.totalCount < b.stargazers.totalCount ? 1 : -1);
	    });
	    return React.createElement("div", { className: "repos" }, topics.map((topic, i) => React.createElement("div", { key: i }, React.createElement(Spacer_1.default, { height: 6 }), React.createElement("h1", null, helper_1.humanReadable(topic.name)), React.createElement(Spacer_1.default, { height: 2 }), React.createElement("ul", { className: "list" }, topic.repos.map((repo, c) => React.createElement("li", { key: c }, React.createElement("a", { href: repo.url }, React.createElement("span", { className: "title" }, helper_1.humanReadable(repo.name)), React.createElement("span", { className: "desc" }, repo.shortDescriptionHTML))))))));
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
	        marginTop: height * 8
	    };
	    return React.createElement("div", { style: style }, children);
	};
	exports.default = Spacer;

/***/ }),

/***/ 177:
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	function humanReadable(input) {
	    const output = input.replace(/-/g, " ");
	    return output[0].toLocaleUpperCase() + output.substr(1);
	}
	exports.humanReadable = humanReadable;

/***/ }),

/***/ 180:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	const React = __webpack_require__(5);
	const RepoList_1 = __webpack_require__(176);
	const IndexPage = function ({ data }) {
	    const repos = data.githubData.data.viewer.repositories.nodes;
	    return React.createElement("div", null, React.createElement(RepoList_1.default, { repos: repos }));
	};
	exports.query = "** extracted graphql fragment **";
	exports.default = IndexPage;

/***/ })

});
//# sourceMappingURL=component---src-pages-index-tsx-f0140721e5b85ce4863d.js.map