/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/2014/03/22/vuejs-010-release/index.html","9ed41de9ed1be1a673203c06f00b47f6"],["/2014/07/29/vue-next/index.html","3c5a5c89cfb6a58cb2eade26540a6764"],["/2014/11/09/vue-011-release/index.html","84ae136f4f0e0b5fc670e0374bb142e9"],["/2014/12/08/011-component/index.html","8f686f0deb9ea0cc0cb6030675e81ac7"],["/2015/06/11/012-release/index.html","1bb343a98e418647b00913bd1ed01ac4"],["/2015/10/26/1.0.0-release/index.html","4ba05e2708e5363ea20e5d926ea2a1b0"],["/2015/10/28/why-no-template-url/index.html","103edd083d6288b836c76df94e7aea78"],["/2015/12/28/vue-cli/index.html","c00e4e241c7673b2ce622b793f6e1b46"],["/2016/02/06/common-gotchas/index.html","f0f1169b70110faee54539326e0ec6af"],["/2016/03/14/march-update/index.html","fd68c9d2bcb3d5c997318cd0e6adc419"],["/2016/04/27/announcing-2.0/index.html","f42e8e7b5f7828c8450350adedb9ec38"],["/2016/10/01/here-2.0/index.html","c3b86ec8087cfb5da5ceabc48c0c07a0"],["/2016/11/03/retiring-vue-resource/index.html","6ea9c615915f68d7e629a0d967ff3ca8"],["/2016/12/28/vue-in-2016/index.html","f8e336c4cb09524043468070284e2e30"],["/api/index.html","176a72f4aaa42c3b6a404d370e87fbb8"],["/archives/2014/03/index.html","0be0cfa560250eed8b09959bf9413548"],["/archives/2014/07/index.html","8e5bca2c63e6cfe42389f1e871b99692"],["/archives/2014/11/index.html","c454340d3240fecae018e22b8148700f"],["/archives/2014/12/index.html","e08fa380329498adb91f415c4f1657d3"],["/archives/2014/index.html","c2431d3a070b439c484b41d9c23a0de4"],["/archives/2015/06/index.html","677179cea60982f88f0c4af4cea4b7b6"],["/archives/2015/10/index.html","34f7e7fd36e83635e12cb2f4ccd7a30c"],["/archives/2015/12/index.html","bc43e9add7ae9c0a3a27b2fe9fdad640"],["/archives/2015/index.html","943405babbf864f98cf396999d0f22af"],["/archives/2016/02/index.html","dd96795994847c6eaec5f67750188c7e"],["/archives/2016/03/index.html","801dbee261d0b81ca7439c1c2b1aacfa"],["/archives/2016/04/index.html","b7c68bfd5be5bf88414c22699ab7d011"],["/archives/2016/10/index.html","11fbcbce86d08bc6c94c642e080cc5b3"],["/archives/2016/11/index.html","9717a6978e3838a2875ff55280f62b94"],["/archives/2016/12/index.html","ce7cb5a9243a550e86c08635d6161b52"],["/archives/2016/index.html","0580eb697211db2dd73848f4e31b08c2"],["/archives/index.html","88d52986535b680542b3429f8aed3997"],["/archives/page/2/index.html","bb1eafbd377f986dfac2c4b16538fff1"],["/atom.xml","2281fb0d00ed3fda9f431ddc11f4962e"],["/blog/index.html","a8dae5a70831e3ed3219e2955baca513"],["/browserconfig.xml","a9461fcba28550a616a19a0aee8450ac"],["/contribution/index.html","9efaccf7f6af07ab648a08823678e4c9"],["/css/benchmark.css","b083e0006589a5ba88a250eb8ee12cc5"],["/css/index.css","6533fcca478c3c6f4140972b4e8ff364"],["/css/page.css","8aa9496ca767f4e29a728ffbaa428947"],["/css/search.css","3dcc544a48aa7c4457804073636b059c"],["/examples/commits.html","3cd3b2db40187e7f2d236473bae9ce59"],["/examples/elastic-header.html","198f4c19911bf30785905adb996ef899"],["/examples/firebase.html","266080b80e262a2b93289d466d1337b5"],["/examples/grid-component.html","3119ba25bb6b9dcc2f40d3f60e2136df"],["/examples/hackernews.html","f793aeb8d340c60945b0a58f3afa25c9"],["/examples/index.html","dc91b34e726c12318c4d083a3090c156"],["/examples/modal.html","88b6a98ec8a44cd783eaf0d71fcf46a7"],["/examples/select2.html","b812ad3b215af513c979c0d9759fe5c9"],["/examples/svg.html","0a1876c72d22212d243ed8c2d5b0404e"],["/examples/todomvc.html","a048618225f78a66ff322bb1dde98a37"],["/examples/tree-view.html","4815e09c4b3af4132da0e95dc1fbc945"],["/guide/class-and-style.html","a3174f2083dd58fbd1aa965dcc98133f"],["/guide/comparison.html","7c06634379b01b8e7ef0dfc90b9b8517"],["/guide/components.html","d98663b0d45a91f0a40541c1efe2bbfc"],["/guide/computed.html","3fcf408c7cdfd856ea75b6a5562ba8aa"],["/guide/conditional.html","896e19e7955f2616eb31ab4d8c65178c"],["/guide/custom-directive.html","697987fdd04783febdbff2aa2932c41d"],["/guide/deployment.html","be96515c673712671d042337366ddf63"],["/guide/events.html","0ebaec88003f2e1ab59ff868764d961a"],["/guide/forms.html","09ead2d35e42cdd09d848b27ec357491"],["/guide/index.html","e3171c7c94b236d5caa91894d8fdd581"],["/guide/installation.html","8acd1ab4fbaa082958259bf3a22d7b22"],["/guide/instance.html","61021765831307e8278d034c23502dd6"],["/guide/join.html","f2287c54050c9b576ed05af7baf6af73"],["/guide/list.html","772e05d65b4587501785906a4b681efd"],["/guide/migration-vue-router.html","e0d8a3e2dc09e2bda939c23c1e967765"],["/guide/migration-vuex.html","9b8659c8a4506acd24f2c0e3bee160f3"],["/guide/migration.html","af37d4bfb217e88a7f02eb92c446497f"],["/guide/mixins.html","270f751a44e1d1e18b9a31406a34fe8b"],["/guide/plugins.html","40467c9724e4917ae32582ac543db41b"],["/guide/reactivity.html","5b1e83c4a12b5f3e687e89e0a0b1ef05"],["/guide/render-function.html","4139dd80783f9eecb92d57dcf23dc54d"],["/guide/routing.html","f7f89a93550ee84e925ed84d6912a650"],["/guide/single-file-components.html","095eb3d7152439579d7a56227fe273f4"],["/guide/ssr.html","9143accd02c56349a3ec40d79eeefb4d"],["/guide/state-management.html","81ea6d4aee3ef538b507e4a5a0c3e3a0"],["/guide/syntax.html","611a256a910e0d1adfd5b418535e0ac1"],["/guide/transitioning-state.html","3f36248a3d9f6f21f10725f15775c5d6"],["/guide/transitions.html","4513c62165ee217697830a40e1795365"],["/guide/unit-testing.html","0f69c6b7a8d743af6384b8a2208b9a33"],["/images/100offer.png","5fc04cb5266c2171ce5cc68ca6be8ea4"],["/images/2mhost.png","4b8d618675f5ae2e25873930e0f1a33b"],["/images/actualize.png","caed3eca0208a349140a95b354d07382"],["/images/chaitin.png","2e90c7e1644d533624b59194544aab8b"],["/images/check.png","1ab55a9d7d368f9e185314b4ee3e108a"],["/images/component_io.png","62cc2842e0be59abcea55226b7b9f779"],["/images/components.png","7769fd61a903797e4273c74888ed8b9b"],["/images/conf.png","122b20796747d08484fc2cdfefcba97a"],["/images/data.png","2fdee1ad51c9b990ca186769cbc92dc4"],["/images/deepstream.png","2e6302d3d38d6e29da5e757edf42dedd"],["/images/down.png","39cee69a29f44c5ae8acacf0c7c0c9fe"],["/images/famebroker.png","50c05f70a13a6ccf44ebc50d6b97263c"],["/images/feed.png","fc48422363785bd7645699a57c9c9660"],["/images/hn-architecture.png","2414356400811f80a25178bad519927e"],["/images/hn.png","907b2c671bfe609f3bbf7b4e51480c0b"],["/images/htmlburger.png","3c838f6dbddb1361e6019f521578171f"],["/images/icons.png","24c9ea5274c732f8ec0ee13fb2361313"],["/images/icons/android-icon-144x144.png","42d2c151cc101a4c42ac51bd96c8b24d"],["/images/icons/android-icon-192x192.png","ad7d1af025254f7fb6c45917d26c0486"],["/images/icons/android-icon-36x36.png","005fffcd0a3cce3dacf8856645501213"],["/images/icons/android-icon-48x48.png","e898ac737b264364a216e2007b1fd7da"],["/images/icons/android-icon-72x72.png","ad659ec7e8eae4a50b73145c69772d42"],["/images/icons/android-icon-96x96.png","90c13bf806fb3b3749ef1f60cc5dc34c"],["/images/icons/apple-icon-114x114.png","69c4653429d7ac74ef8b968ad0676a19"],["/images/icons/apple-icon-120x120.png","3bb7b09526b130a7713f247e7db6b835"],["/images/icons/apple-icon-144x144.png","42d2c151cc101a4c42ac51bd96c8b24d"],["/images/icons/apple-icon-152x152.png","6f0e515bd57131a7e9c584c0a99492c6"],["/images/icons/apple-icon-180x180.png","91bc1dd313b750413e8e54349d2d7feb"],["/images/icons/apple-icon-57x57.png","d322b29db86a269ca682d6d54450a6d1"],["/images/icons/apple-icon-60x60.png","99b633995d668a30d869843d322cb2d5"],["/images/icons/apple-icon-72x72.png","ad659ec7e8eae4a50b73145c69772d42"],["/images/icons/apple-icon-76x76.png","293bd080883b88e811ec54fd1d17f04c"],["/images/icons/apple-icon-precomposed.png","8366f4f77f84f5945d37c8b6b5e85466"],["/images/icons/apple-icon.png","8366f4f77f84f5945d37c8b6b5e85466"],["/images/icons/favicon-16x16.png","b0fb918340bdb38c3f82934c3b83da28"],["/images/icons/favicon-32x32.png","495a42102231b5a1e1999b969fe59ca9"],["/images/icons/favicon-96x96.png","90c13bf806fb3b3749ef1f60cc5dc34c"],["/images/icons/ms-icon-144x144.png","42d2c151cc101a4c42ac51bd96c8b24d"],["/images/icons/ms-icon-150x150.png","81b31836aa22a0861e979c3f798c2257"],["/images/icons/ms-icon-310x310.png","dc00a74758f465cf5545d759a7fc26fc"],["/images/icons/ms-icon-70x70.png","e20d096831d0fe142137fb69fd7c5915"],["/images/itunescn.png","ca4a777f3e67fda2fc0c703e5a0f3845"],["/images/jsfiddle.png","cdaaf61398b8ccde5fbfb28daab02dc2"],["/images/juejin.png","f8a801162a92753a9f69ee528ea72d81"],["/images/laravel.png","854ba2a1472cff4b73bbb98cc2bf6e74"],["/images/lifecycle.png","b6749746ba4b05899f1e721a8084e572"],["/images/logo.png","c2a605fbc0e687b2e1b4b90a7c445cdd"],["/images/menu.png","f97c6cafce76896f725f56d22c33dc5d"],["/images/monterail.png","a1b2c43f5834a30140acf56a56ee3d7e"],["/images/mvvm.png","9ef4a737380c1e72d3c1a5fae8480533"],["/images/patreon.png","c55a20c3dface37cde7d1534e243c9fe"],["/images/paypal.png","cdc87f756d415712f06c68dda7fa5f87"],["/images/props-events.png","a18498cd0176946ccee943d2fec4f420"],["/images/search.png","57bde6918157195ab105e3c5d0967dec"],["/images/shuttleworth.png","a511730065708edf9f15d5ca6518accc"],["/images/someline.png","2e05b0cfb1eaa734666dab9e5f92cea1"],["/images/state.png","ca9bd676c6d66f5f0797ec6ad35eb2b4"],["/images/stdlib.png","0c3292d4d501cfb819cf38e8324d9220"],["/images/strikingly.png","c220cba956cba87d47c972340ef872d1"],["/images/tde.png","dfd1f4c2d07907d379fc26e890827f14"],["/images/tmvuejs2.png","260af8aecb932915b0aff029550a80a4"],["/images/transition.png","ca34aef3910abf105dc112aa23026d54"],["/images/trisoft.png","2cfc914f05b223404cf753d9427373d0"],["/images/typescript-type-error.png","ac1a1aa8c51a40565dc603917925a14e"],["/images/vue-component-with-pre-processors.png","6af17bf9a1a6eadb50d5545313c1db77"],["/images/vue-component-with-preprocessors.png","f1bdf44c793758fc8576724406014986"],["/images/vue-component.png","91752852891f91a4afd27d95bb00b22d"],["/images/vuejobs.png","e050f9a94eb0f893093529fcce61d707"],["/images/vuejobs.svg","c31e68ce1f2663afbe9655c368c6dd35"],["/index.html","b2ac7c89c232fdc63fd7d971214dbc8d"],["/js/common.js","12441954df316db2e568d78998df1a8b"],["/js/css.escape.js","fe4db48c9e3f272a6d12cf1312de889e"],["/js/smooth-scroll.min.js","53a7fcc785e987d5ed08302f36de6653"],["/js/vue.js","5445010465a1e12f1890fb139142f28a"],["/js/vue.min.js","807a5d77fb2f341e03d4d1faa0e78f38"],["/manifest.json","bd8de9895abf2cc1faa760a8bd1004d8"],["/menu/index.html","de9d3a1a6c8dcf6ac0c3440932abdd12"],["/page/2/index.html","d17d404a2b026ca92afae53babe4826c"],["/perf/index.html","547d055365eca73accab8f88800ff3aa"],["/support-vuejs/index.html","16a7495bdd3c4b0cbdcd6c4c07c3ddc4"],["/v2/api/index.html","ba170991a4dd79fbfb7efb930c15d5a7"],["/v2/cookbook/adding-instance-properties.html","f9f865a3140dea454834e2defce1105f"],["/v2/cookbook/index.html","8aa7313edb09f9b67e5c04f9ed2b05e4"],["/v2/examples/commits.html","9c3fc8870bae63377ad2a3c8ada002a2"],["/v2/examples/deepstream.html","58d3c4b60470f59d56a2bdd71335bbc8"],["/v2/examples/elastic-header.html","7012b57e8b82457bad78c2ae5acf6737"],["/v2/examples/firebase.html","7ec07ea9527e43d1b80ad2fc180b4df3"],["/v2/examples/grid-component.html","34868e54157d3944ce0988a2af428014"],["/v2/examples/hackernews.html","87bee27d74c78d18955655b3ceaa8c64"],["/v2/examples/index.html","2a54063d7cc6f236e3aa1cf5595711f8"],["/v2/examples/modal.html","b8eaf42d92fb09c866ab6c8d3774d3aa"],["/v2/examples/select2.html","8750a41cb1e5caadb75d8fe678b3589c"],["/v2/examples/svg.html","a05788c0d3631d99fb6595c0e754452f"],["/v2/examples/todomvc.html","280c3123c0ed3b55fa6147657d6681f1"],["/v2/examples/tree-view.html","729ab1f3ea259e0f91ea923852040690"],["/v2/guide/class-and-style.html","a0bfe91901a2254209a60ff6077f7cc2"],["/v2/guide/comparison.html","06dde9c13a99f3c8009e3cb7e9ff2461"],["/v2/guide/components.html","3ef88e05894c74823fc7a9a706c3d8db"],["/v2/guide/computed.html","206a7a94ac4812f442d50a28644ee9d3"],["/v2/guide/conditional.html","b1309ce97878439054a4aeb033a69ffb"],["/v2/guide/custom-directive.html","a56f08bdc535783f7fa2770316b3046b"],["/v2/guide/deployment.html","fe8c37d1571278a81f41e80762eacc20"],["/v2/guide/events.html","31adc8539e55b96e136d12533d741ff6"],["/v2/guide/forms.html","1bb4dc1455a09d323e92f4ee89c6350f"],["/v2/guide/index.html","3a0548fc37f8122b805abd01601af5a8"],["/v2/guide/installation.html","8c48f6608e0a12a522abe800d840573c"],["/v2/guide/instance.html","987c053b877fd2c9f69322ab0eedf2ad"],["/v2/guide/join.html","15ab0d284583ff6344d9bc665075c282"],["/v2/guide/list.html","caaab1ca00632721f999d3227303e75e"],["/v2/guide/migration-vue-router.html","5d6fdb6fd543b3e3b8112726b06ca35c"],["/v2/guide/migration-vuex.html","9bededacadeffaa3317cea3c04444bd3"],["/v2/guide/migration.html","71136663388b069f15cbb48ee05840f3"],["/v2/guide/mixins.html","d25551ccfb5ed1184b4effde10b1f943"],["/v2/guide/plugins.html","812993868d7ff66f4754dac434ea5dc2"],["/v2/guide/reactivity.html","f3919e0c02d2acc9b33464a987277226"],["/v2/guide/render-function.html","3c543fd2fe765325ceb5c00ddb752a5a"],["/v2/guide/routing.html","aea50af244cb08952045952e6a096473"],["/v2/guide/single-file-components.html","56834da36f1ce7621ce2fdc431bc5093"],["/v2/guide/ssr.html","bc1a28baabd751544d25ab08fc63fff3"],["/v2/guide/state-management.html","dae0883425abaa2d47da69a66ae6f761"],["/v2/guide/syntax.html","9b03e5646f914cad9e28f49266813821"],["/v2/guide/team.html","fbc6674839fc5c330241d4069a9127c8"],["/v2/guide/transitioning-state.html","0ecbfda0333c57a49d16be36e7e7fd97"],["/v2/guide/transitions.html","01e78729cb0689b2253f2004a8aa5392"],["/v2/guide/typescript.html","c4e96109998d5cfe85ffe92541360a31"],["/v2/guide/unit-testing.html","066be2f13f7b57d2243f3c1eb0a0ef16"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});


// *** Start of auto-included sw-toolbox code. ***
/* 
 Copyright 2016 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.toolbox=e()}}(function(){return function e(t,n,r){function o(c,s){if(!n[c]){if(!t[c]){var a="function"==typeof require&&require;if(!s&&a)return a(c,!0);if(i)return i(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[c]={exports:{}};t[c][0].call(f.exports,function(e){var n=t[c][1][e];return o(n?n:e)},f,f.exports,e,t,n,r)}return n[c].exports}for(var i="function"==typeof require&&require,c=0;c<r.length;c++)o(r[c]);return o}({1:[function(e,t,n){"use strict";function r(e,t){t=t||{};var n=t.debug||m.debug;n&&console.log("[sw-toolbox] "+e)}function o(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||m.cache.name,caches.open(t)}function i(e,t){t=t||{};var n=t.successResponses||m.successResponses;return fetch(e.clone()).then(function(r){return"GET"===e.method&&n.test(r.status)&&o(t).then(function(n){n.put(e,r).then(function(){var r=t.cache||m.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&c(e,n,r)})}),r.clone()})}function c(e,t,n){var r=s.bind(null,e,t,n);d=d?d.then(r):r()}function s(e,t,n){var o=e.url,i=n.maxAgeSeconds,c=n.maxEntries,s=n.name,a=Date.now();return r("Updating LRU order for "+o+". Max entries is "+c+", max age is "+i),g.getDb(s).then(function(e){return g.setTimestampForUrl(e,o,a)}).then(function(e){return g.expireEntries(e,c,i,a)}).then(function(e){r("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}function a(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],r=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return r.put(e,t)})}))}).then(function(){return caches.delete(e)})})})}function u(e,t){return o(t).then(function(t){return t.add(e)})}function f(e,t){return o(t).then(function(t){return t.delete(e)})}function h(e){e instanceof Promise||p(e),m.preCacheItems=m.preCacheItems.concat(e)}function p(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}function l(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r){var o=new Date(r);if(o.getTime()+1e3*t<n)return!1}}return!0}var d,m=e("./options"),g=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:i,openCache:o,renameCache:a,cache:u,uncache:f,precache:h,validatePrecacheInput:p,isResponseFresh:l}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){"use strict";function r(e){return new Promise(function(t,n){var r=indexedDB.open(u+e,f);r.onupgradeneeded=function(){var e=r.result.createObjectStore(h,{keyPath:p});e.createIndex(l,l,{unique:!1})},r.onsuccess=function(){t(r.result)},r.onerror=function(){n(r.error)}})}function o(e){return e in d||(d[e]=r(e)),d[e]}function i(e,t,n){return new Promise(function(r,o){var i=e.transaction(h,"readwrite"),c=i.objectStore(h);c.put({url:t,timestamp:n}),i.oncomplete=function(){r(e)},i.onabort=function(){o(i.error)}})}function c(e,t,n){return t?new Promise(function(r,o){var i=1e3*t,c=[],s=e.transaction(h,"readwrite"),a=s.objectStore(h),u=a.index(l);u.openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-i>t.value[l]){var r=t.value[p];c.push(r),a.delete(r),t.continue()}},s.oncomplete=function(){r(c)},s.onabort=o}):Promise.resolve([])}function s(e,t){return t?new Promise(function(n,r){var o=[],i=e.transaction(h,"readwrite"),c=i.objectStore(h),s=c.index(l),a=s.count();s.count().onsuccess=function(){var e=a.result;e>t&&(s.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var i=r.value[p];o.push(i),c.delete(i),e-o.length>t&&r.continue()}})},i.oncomplete=function(){n(o)},i.onabort=r}):Promise.resolve([])}function a(e,t,n,r){return c(e,n,r).then(function(n){return s(e,t).then(function(e){return n.concat(e)})})}var u="sw-toolbox-",f=1,h="store",p="url",l="timestamp",d={};t.exports={getDb:o,setTimestampForUrl:i,expireEntries:a}},{}],3:[function(e,t,n){"use strict";function r(e){var t=a.match(e.request);t?e.respondWith(t(e.request)):a.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(a.default(e.request))}function o(e){s.debug("activate event fired");var t=u.cache.name+"$$$inactive$$$";e.waitUntil(s.renameCache(t,u.cache.name))}function i(e){return e.reduce(function(e,t){return e.concat(t)},[])}function c(e){var t=u.cache.name+"$$$inactive$$$";s.debug("install event fired"),s.debug("creating cache ["+t+"]"),e.waitUntil(s.openCache({cache:{name:t}}).then(function(e){return Promise.all(u.preCacheItems).then(i).then(s.validatePrecacheInput).then(function(t){return s.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}e("serviceworker-cache-polyfill");var s=e("./helpers"),a=e("./router"),u=e("./options");t.exports={fetchListener:r,activateListener:o,installListener:c}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){"use strict";var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){"use strict";var r=new URL("./",self.location),o=r.pathname,i=e("path-to-regexp"),c=function(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=o+t),this.keys=[],this.regexp=i(t,this.keys)),this.method=e,this.options=r,this.handler=n};c.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,r){t[e.name]=n[r+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=c},{"path-to-regexp":15}],6:[function(e,t,n){"use strict";function r(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var o=e("./route"),i=e("./helpers"),c=function(e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;){var i=new RegExp(r.value[0]);i.test(t)&&o.push(r.value[1]),r=n.next()}return o},s=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){s.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}}),s.prototype.add=function(e,t,n,c){c=c||{};var s;t instanceof RegExp?s=RegExp:(s=c.origin||self.location.origin,s=s instanceof RegExp?s.source:r(s)),e=e.toLowerCase();var a=new o(e,t,n,c);this.routes.has(s)||this.routes.set(s,new Map);var u=this.routes.get(s);u.has(e)||u.set(e,new Map);var f=u.get(e),h=a.regexp||a.fullUrlRegExp;f.has(h.source)&&i.debug('"'+t+'" resolves to same regex as existing route.'),f.set(h.source,a)},s.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,o=n.pathname;return this._match(e,c(this.routes,r),o)||this._match(e,[this.routes.get(RegExp)],t)},s.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=t[r],i=o&&o.get(e.toLowerCase());if(i){var s=c(i,n);if(s.length>0)return s[0].makeHandler(n)}}return null},s.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new s},{"./helpers":1,"./route":5}],7:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache first ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(t){var r=n.cache||o.cache,c=Date.now();return i.isResponseFresh(t,r.maxAgeSeconds,c)?t:i.fetchAndCache(e,n)})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],8:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache only ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(e){var t=n.cache||o.cache,r=Date.now();if(i.isResponseFresh(e,t.maxAgeSeconds,r))return e})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],9:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(r,c){var s=!1,a=[],u=function(e){a.push(e.toString()),s?c(new Error('Both cache and network failed: "'+a.join('", "')+'"')):s=!0},f=function(e){e instanceof Response?r(e):u("No result returned")};o.fetchAndCache(e.clone(),n).then(f,u),i(e,t,n).then(f,u)})}var o=e("../helpers"),i=e("./cacheOnly");t.exports=r},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){"use strict";function r(e,t,n){n=n||{};var r=n.successResponses||o.successResponses,c=n.networkTimeoutSeconds||o.networkTimeoutSeconds;return i.debug("Strategy: network first ["+e.url+"]",n),i.openCache(n).then(function(t){var s,a,u=[];if(c){var f=new Promise(function(r){s=setTimeout(function(){t.match(e).then(function(e){var t=n.cache||o.cache,c=Date.now(),s=t.maxAgeSeconds;i.isResponseFresh(e,s,c)&&r(e)})},1e3*c)});u.push(f)}var h=i.fetchAndCache(e,n).then(function(e){if(s&&clearTimeout(s),r.test(e.status))return e;throw i.debug("Response was an HTTP error: "+e.statusText,n),a=e,new Error("Bad response")}).catch(function(r){return i.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(a)return a;throw r})});return u.push(h),Promise.race(u)})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],12:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}var o=e("../helpers");t.exports=r},{"../helpers":1}],13:[function(e,t,n){"use strict";var r=e("./options"),o=e("./router"),i=e("./helpers"),c=e("./strategies"),s=e("./listeners");i.debug("Service Worker Toolbox is loading"),self.addEventListener("install",s.installListener),self.addEventListener("activate",s.activateListener),self.addEventListener("fetch",s.fetchListener),t.exports={networkOnly:c.networkOnly,networkFirst:c.networkFirst,cacheOnly:c.cacheOnly,cacheFirst:c.cacheFirst,fastest:c.fastest,router:o,options:r,cache:i.cache,uncache:i.uncache,precache:i.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n,r=[],o=0,i=0,c="",s=t&&t.delimiter||"/";null!=(n=x.exec(e));){var f=n[0],h=n[1],p=n.index;if(c+=e.slice(i,p),i=p+f.length,h)c+=h[1];else{var l=e[i],d=n[2],m=n[3],g=n[4],v=n[5],w=n[6],y=n[7];c&&(r.push(c),c="");var b=null!=d&&null!=l&&l!==d,E="+"===w||"*"===w,R="?"===w||"*"===w,k=n[2]||s,$=g||v;r.push({name:m||o++,prefix:d||"",delimiter:k,optional:R,repeat:E,partial:b,asterisk:!!y,pattern:$?u($):y?".*":"[^"+a(k)+"]+?"})}}return i<e.length&&(c+=e.substr(i)),c&&r.push(c),r}function o(e,t){return s(r(e,t))}function i(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function c(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function s(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",s=n||{},a=r||{},u=a.pretty?i:encodeURIComponent,f=0;f<e.length;f++){var h=e[f];if("string"!=typeof h){var p,l=s[h.name];if(null==l){if(h.optional){h.partial&&(o+=h.prefix);continue}throw new TypeError('Expected "'+h.name+'" to be defined')}if(v(l)){if(!h.repeat)throw new TypeError('Expected "'+h.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(h.optional)continue;throw new TypeError('Expected "'+h.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(p=u(l[d]),!t[f].test(p))throw new TypeError('Expected all "'+h.name+'" to match "'+h.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===d?h.prefix:h.delimiter)+p}}else{if(p=h.asterisk?c(l):u(l),!t[f].test(p))throw new TypeError('Expected "'+h.name+'" to match "'+h.pattern+'", but received "'+p+'"');o+=h.prefix+p}}else o+=h}return o}}function a(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function u(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function f(e,t){return e.keys=t,e}function h(e){return e.sensitive?"":"i"}function p(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(e,t)}function l(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(g(e[o],t,n).source);var i=new RegExp("(?:"+r.join("|")+")",h(n));return f(i,t)}function d(e,t,n){return m(r(e,n),t,n)}function m(e,t,n){v(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,o=n.end!==!1,i="",c=0;c<e.length;c++){var s=e[c];if("string"==typeof s)i+=a(s);else{var u=a(s.prefix),p="(?:"+s.pattern+")";t.push(s),s.repeat&&(p+="(?:"+u+p+")*"),p=s.optional?s.partial?u+"("+p+")?":"(?:"+u+"("+p+"))?":u+"("+p+")",i+=p}}var l=a(n.delimiter||"/"),d=i.slice(-l.length)===l;return r||(i=(d?i.slice(0,-l.length):i)+"(?:"+l+"(?=$))?"),i+=o?"$":r&&d?"":"(?="+l+"|$)",f(new RegExp("^"+i,h(n)),t)}function g(e,t,n){return v(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?p(e,t):v(e)?l(e,t,n):d(e,t,n)}var v=e("isarray");t.exports=g,t.exports.parse=r,t.exports.compile=o,t.exports.tokensToFunction=s,t.exports.tokensToRegExp=m;var x=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function(t,r){return n.put(e[r],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)});


// *** End of auto-included sw-toolbox code. ***



// Runtime cache configuration, using the sw-toolbox library.

toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"sendgrid.sp1.convertro.com"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"ad.doubleclick.net"});
toolbox.router.get("/*", toolbox.networkFirst, {"origin":"srv.carbonads.net"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"cdn.jsdelivr.net"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"fonts.googleapis.com"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"fonts.gstatic.com"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"cdnjs.cloudflare.com"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"maxcdn.bootstrapcdn.com"});




