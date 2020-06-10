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

var precacheConfig = [["404.html","992690de1907598e8904865813b3f5ab"],["APP/Docker/docker-compose-no.html","59155e63098f4884f585e1ee148e7377"],["APP/Loadrunner/Loadrunner_Error.html","5eb195317e53bd4f9909630a78d54ea8"],["APP/MongoDB/linux_mongodb.html","6743e37063282c466eeefe8289fd222c"],["APP/MongoDB/windows_mongodb_install.html","5db2b0ce349b1a1d7b815e851c4e577c"],["APP/MyEclipse/MyEclipse2015_Failed_2.5.html","951ce9c38e5d98364a8db1fccc6159dd"],["APP/MyEclipse/MyEclipse2015_HttpSession_error.html","28c1f160059b6759c390b60251cc9c3c"],["APP/MySQL/Percona_Tookit_pt-query-digest.html","e89cd2ea94c32c02148ea4c0a49e92a3"],["APP/MySQL/centos_mysql_install.html","3da317c665be4971b2079aac20d89b49"],["APP/MySQL/centos_tookit_rmp_install.html","2d1f38af1411290f1614d81d9dce0922"],["APP/MySQL/mysql_command.html","7ce8a56a8fc7c81dd9cb546dbf1a6c0d"],["APP/MySQL/mysql_parm.html","a22689a5e5ebec45bc074258806a1554"],["APP/MySQL/windows_mysql_install.html","92953a24b8d08d9c95a40a176d39bf6f"],["APP/Redis/CentOS7_Redis_install.html","60f25252b0f6ced34d1917bf053d81e3"],["APP/Redis/macos_brew_redis.html","e70f51c1672c0d934f18b2e4e3a3ff4a"],["APP/Shadowsocks/macos10_12_shadowsocks.html","7905e6b448cfb492cc28a3cd9c8526f3"],["APP/Sketch/Sketch_Plugins.html","041817547e54492aeaa220522850d395"],["APP/Sketch/Sketch_key.html","f00fa8c804da2e554ed779f6f016850e"],["APP/Terminal/Shadowsocks/terminal_ss.html","a89734448985b0537f281fb48960f6a1"],["Git/Github/github_host.html","2f5dc3439fa6afd2bf3ad5b015a44343"],["Git/ssh_key.html","e32c8ea82b1b04e47c2f0dbba301210d"],["Hexo/hexo_sitemap.html","19a24f7d63d124bf019a72487efe8ffb"],["Swift/Core-Data/FetchRequest/swift_coredata_fetchrequest.html","da94a358a10608fef8a7b86a1ee711bc"],["Swift/Vapor/APP/Mkit/mkit_api_data_doc.html","9f053816f39b573a8b91c3038d13340e"],["Swift/Vapor/APP/Mkit/mkit_api_doc.html","a53577328b8b02b8746f074af85b045b"],["Swift/Vapor/Vapor_MySQL_Use.html","c79178624aeca76acfc012b4c2886d13"],["Swift/http_api.html","72d3821f4beab21f34ba27ca57de4a20"],["Swift/mvvm_app.html","46f6470866b764a26118aa88cb682938"],["Swift/swift_array_study.html","ef9eec022b7ea4bea4b592e27e8d5bb3"],["Swift/swift_dicrionary.html","4974092856502642c6970ab1e1ace82d"],["Swift/swift_string.html","15d37e52a0ae811d731683143e076794"],["Swift/vapor_io.html","4d31676d7ad05a5465aa8988465fff60"],["Swift/vapor_url_response.html","ef6899dae878e0af41d2347f1815c488"],["SwiftUI/swiftui_picker.html","97aed71ffd7f97baa003adadf415199c"],["about/index.html","659c7eb3553a5358e4cc0be3ff70cc22"],["archives/2016/04/index.html","e5f9e57aca53cb290513d3836ae98113"],["archives/2016/05/index.html","520e6bf02fa0a46c214340a4654cdcbc"],["archives/2016/06/index.html","25c60872cd18321c64f46629a84c1f88"],["archives/2016/index.html","f218b8c4b931d458aaff2b5ee3031b91"],["archives/2016/page/2/index.html","074974cdc4eb8f4773a3894fd4f47625"],["archives/2019/01/index.html","1a43a5853090b20bbcc014d9c88a421a"],["archives/2019/02/index.html","361cec7b062d43ddbbe44d2e376f432c"],["archives/2019/07/index.html","34504d24e01cd11c4551a037fb1ecaa5"],["archives/2019/08/index.html","af71c6257d8161632ec2b78ad866f0cd"],["archives/2019/index.html","e53df45feef8d8d0dbd6e56e95a8ad9f"],["archives/2019/page/2/index.html","9dacadd47d4afd46259bba3e1ccd3c92"],["archives/2020/02/index.html","d822ebb0c284bd63d1d84eed0c1d5f27"],["archives/2020/03/index.html","462c8b1d79f6c686046f928b6bcdbe40"],["archives/2020/04/index.html","8bd77292d69336d79c11e79e68f2c4e8"],["archives/2020/05/index.html","b3fb327fe81016747ac585fde8587624"],["archives/2020/06/index.html","9d857313ac7d9c89e61fed3138ed87f0"],["archives/2020/index.html","64f589f108eaac88e6c4f98165e7fc92"],["archives/index.html","785ab51f24b4df5d3a34ed4ce1a90c95"],["archives/page/2/index.html","44fabc6d869a4dfa97349ffcd75dfd86"],["archives/page/3/index.html","ec6c44024ddf7ba29047d14b747d1669"],["archives/page/4/index.html","4d557c6003488f0e3844085a41908693"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["categories/APP/Docker/index.html","3618708156b505d0f182994aca07bc1f"],["categories/APP/Loadrunner/index.html","ff374bd4d0977df27645bed460a50a50"],["categories/APP/MongoDB/index.html","99254d3ad3bafa7837930e4988c04f77"],["categories/APP/MyEclipse/index.html","e99c92c0f7162224c91a48c72810db96"],["categories/APP/MySQL/index.html","9fdc3fbe878d340b18ab9371ead18c47"],["categories/APP/Redis/index.html","ce62cadd69c0e4ede42f1be6e92dfaaa"],["categories/APP/Shadowsocks/index.html","80fd7a49f25d563ed6afe7b71240f804"],["categories/APP/Sketch/index.html","59fe625bbed9156507e5d319f21ff24d"],["categories/APP/Terminal/Shadowsocks/index.html","a08910ffe1a479bf48e57cf27b91b23e"],["categories/APP/Terminal/index.html","82b5b26c61b4190870ef993d9aaaae92"],["categories/APP/index.html","6beaece4336cedd4dff9f6d39915f88a"],["categories/APP/page/2/index.html","a5f8e87f495e68b325d9424055f33ef6"],["categories/Git/Github/index.html","8a5a11ea56d7db587d73c9877cf2e032"],["categories/Git/index.html","3441626d5c5db2de4d40c8e43d8ccd21"],["categories/Hexo/index.html","afa81db026519a490fd6831074e7d9b3"],["categories/Swift/Core-Data/FetchRequest/index.html","705088a51891ddd85f1fb8291f53888f"],["categories/Swift/Core-Data/index.html","e86e2e411903aac61e8a29d666c22f40"],["categories/Swift/Vapor/APP/Mkit/index.html","29a37d2b227d466b2706135da4abfd09"],["categories/Swift/Vapor/APP/index.html","af5b91c5f5d0304f2ab95758a703edef"],["categories/Swift/Vapor/index.html","895774b153f35638a1d536bdc4dd44c3"],["categories/Swift/index.html","bbd31f103c1356bf2201e7d12801d0b8"],["categories/Swift/page/2/index.html","958420a1c6a23352af51fa8ac5aad829"],["categories/SwiftUI/index.html","615a881e57ba90c6b42def231ee5e179"],["categories/index.html","7bded5708b196238a094272df90d9405"],["css/cyberpunk.css","efcd1e507bb5e36afda2e3e526c38718"],["css/default.css","5972f8b2869d65b0ae8c6bd5e021ac67"],["css/font/font.css","477f66d8b2cf091f7a24d3982243b29d"],["css/font/fontawesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["css/font/fontawesome/webfonts/fa-brands-400.eot","c1868c9545d2de1cf8488f1dadd8c9d0"],["css/font/fontawesome/webfonts/fa-brands-400.svg","0cb5a5c0d251c109458c85c6afeffbaa"],["css/font/fontawesome/webfonts/fa-brands-400.ttf","13685372945d816a2b474fc082fd9aaa"],["css/font/fontawesome/webfonts/fa-brands-400.woff","ec3cfddedb8bebd2d7a3fdf511f7c1cc"],["css/font/fontawesome/webfonts/fa-regular-400.eot","261d666b0147c6c5cda07265f98b8f8c"],["css/font/fontawesome/webfonts/fa-regular-400.svg","89ffa3aba80d30ee0a9371b25c968bbb"],["css/font/fontawesome/webfonts/fa-regular-400.ttf","db78b9359171f24936b16d84f63af378"],["css/font/fontawesome/webfonts/fa-regular-400.woff","f89ea91ecd1ca2db7e09baa2c4b156d1"],["css/font/fontawesome/webfonts/fa-solid-900.eot","a0369ea57eb6d3843d6474c035111f29"],["css/font/fontawesome/webfonts/fa-solid-900.svg","ec763292e583294612f124c0b0def500"],["css/font/fontawesome/webfonts/fa-solid-900.ttf","1ab236ed440ee51810c56bd16628aef0"],["css/font/fontawesome/webfonts/fa-solid-900.woff","bea989e82b07e9687c26fc58a4805021"],["css/imaegoo.css","5ec1dbdfed9ec6f2695a65eb4d869b44"],["css/live2d/flat-ui-icons-regular.eot","f1d025e1d5dc1b25678397fcf6ae70d7"],["css/live2d/flat-ui-icons-regular.svg","ffc6ede02a31ec3b6990bfa29c64fdd6"],["css/live2d/flat-ui-icons-regular.ttf","71b22c7da4697bc0680e3f603929faba"],["css/live2d/flat-ui-icons-regular.woff","b850ecca5ab51e9035e6a36eb33b421a"],["css/live2d/waifu.css","b42b0777d1b38711d9a3c57fe2e445c2"],["css/night.css","ffd2adb61e5a3d1e3faac5d01803982e"],["css/style.css","5972f8b2869d65b0ae8c6bd5e021ac67"],["idevil/index.html","23bdd63a0c865210352e6870aa4aafd1"],["images/pwaicons/144.png","b9aa9b60d2bbdb48abc20520e644ab1a"],["images/pwaicons/192.png","5c6e0cd31b2f86cc4ef8bedc8d0edb83"],["images/pwaicons/36.png","b14e60264a059706e13716098b7741e7"],["images/pwaicons/48.png","0bf6ca8995874845a857d684c710182a"],["images/pwaicons/512.png","ae6e496ac95bda14bd45f2b085689648"],["images/pwaicons/72.png","f7a4a1b3af148976cc9e719c4c9f5115"],["images/pwaicons/96.png","ca3a0d048b43e399aa0d53b208f6c5ee"],["img/avatar.png","8c257f9fdc3c92ebd07e84f3eb181297"],["img/favicon.svg","f22ef129316ab6fdcf6c68bddde0a572"],["img/logo-dark.png","6bd7649100ab5a063b3003e48441225d"],["img/logo.png","9f8ed7509f69f721fa3b5387cf2fa380"],["img/logo.svg","78c34960b55c12a2e1286351c45358f5"],["img/og_image.png","c0c40988f5babf31dba70bccd41506a4"],["img/razor-bottom-black.svg","3f0f5185dd8f5c8b2145e8388c86bc5c"],["img/razor-top-black.svg","0d266d3422294d93cecc342bb3757473"],["img/thumbnail.svg","b15ba22d74204f664cdfed75d03de230"],["index.html","be004687fbeb7aefb04a796bdaccc595"],["js/algolia.js","9a5211b37d86edf2eb0314b5f1f64ac4"],["js/animation.js","909a13a980da00854b246c544f2f9697"],["js/back_to_top.js","0bf5fd9022c5645259b8dc63b926728b"],["js/google_cse.js","f8df6329b2d17a7f2f6574963857c554"],["js/imaegoo/imaegoo.js","0b8a2d000040be6c76479af2f67ccca6"],["js/imaegoo/night.js","6b839a7281f65cfa6739dde95cddf7ce"],["js/imaegoo/pinyin.js","0673bdbc574b707b1a1f05a34281fca0"],["js/imaegoo/ribbon.js","5fa7c54a4135720b6074633b4614a958"],["js/imaegoo/universe.js","5b8b3dd95c7a1955e8b08ed3c9641e5a"],["js/insight.js","f4162ca9688cac4f585b7880bbfb68a7"],["js/live2d/autoload.js","78d3e5c8c8c65c93f816258b3dc760e5"],["js/live2d/live2d.js","ff5a1f4c3814af933efac10875257527"],["js/live2d/waifu-tips.js","d725a9ad5ba4190ad32bfe8a3bb7ff2b"],["js/main.js","9de06784980c58d14d1c42680ce445bb"],["page/2/index.html","d793fe291940fb7c3f3d48599dca61a1"],["page/3/index.html","53f7bdf703fcba2b7b9b9058d357fbd4"],["page/4/index.html","bfbd861d249e9695d59dd4a14712836b"],["tags/API/index.html","aa6ddb5b9f294e9d4716948aebdfcb37"],["tags/Architecture/index.html","8bcc92f8d29b91a1491ad63292466a58"],["tags/Basis/index.html","c3e724f37dda6d4966b7459d5d75defb"],["tags/Command/index.html","58a762e10e269b4009d1b7613eef5310"],["tags/Document/index.html","ddeeb27a16774036bd302450d6fb2189"],["tags/Error/index.html","bd50d626026edbc8967401e8c2073c4e"],["tags/Failed/index.html","5c2dbde99a951519794ed7ebeac4dc65"],["tags/Install/index.html","8a787d409f9f640446d87517030948e7"],["tags/JDK/index.html","4c360ecddcfa8f132efbab0d186e0dc7"],["tags/Optimize/index.html","61cdf37871b1df72599f62c42eac0151"],["tags/Svn/index.html","c526bf50c4e3ca5f3848cb2c825990fb"],["tags/Swift/index.html","6110318c45a37228e6bbee37205e9489"],["tags/SwiftUI/index.html","01636e78822ad5918fd1084fdc5f5a09"],["tags/Tookit/index.html","511df44ddca57230ebf88ed58b1aa28b"],["tags/Tool/index.html","e00776476b4c0ee5f6a628f77006b495"],["tags/VPN/index.html","d394c81002ec796948695dd7b51e1329"],["tags/Vapor/index.html","5d41b5c6c65a44bd65fdf5d2a22a9fc1"],["tags/Vim/index.html","f9c4d62e03f17cda66210e0abb70cf94"],["tags/Xcode/index.html","3fb36dcca1fa39e4ddab863a115ce56c"],["tags/index.html","257bd9f6c9973d89155a9507a0b07d1f"],["uncategorized/URLSession.html","e3e434575fcdab4626a95e7a9e3f98ad"],["uncategorized/baidu_url_submit.html","57faca1d4916fae07b78129c7c39d2a3"],["uncategorized/cloudkit_question.html","1ea6cfb5c78503129f849885c56cade0"],["uncategorized/homebrew.html","b627685046ab947a4f08a352e71a74f3"],["uncategorized/vim_vundle.html","ccf3ff71043b9ca9682557ad7bbc2f6f"],["uncategorized/xcode_iphone_test.html","fc54481d76eaba74b4a62aed139c8842"],["uncategorized/yonghuxieyi.html","bfd21fe00c2001b2b847de1ebd3cbc77"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
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

var createCacheKey = function(originalUrl, paramName, paramValue,
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

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
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

var stripIgnoredUrlParameters = function(originalUrl,
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







