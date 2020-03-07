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

var precacheConfig = [["about/index.html","8a9e00731ad5aad89935547a0aab85f2"],["archives/2016/04/index.html","2af3be401739b3c4aafc67b13c563a25"],["archives/2016/05/index.html","5eb2ab86dfb4fab82c97141438fda512"],["archives/2016/06/index.html","b1c12c148ab512f218d3cfcfc6d1e96f"],["archives/2016/index.html","a561d3af9d20c5e10ea679e7c5ed0b5f"],["archives/2016/page/2/index.html","2d45780f6ae8b08fc3176782538d5aea"],["archives/2019/01/index.html","ac0ead98ce2da9d69eb30adeef2cfdcf"],["archives/2019/02/index.html","94c538204dd35794232a2ca925eb4d73"],["archives/2019/07/index.html","8190dd47113bbc6039654d87c5fa554d"],["archives/2019/08/index.html","afbee97c4ab5f120e9023c1211452e46"],["archives/2019/index.html","49f724eef05b93652519fd31993e4f91"],["archives/2019/page/2/index.html","553359b8caeec9073065a01d655b96b2"],["archives/2020/02/index.html","22c1ecfb83e8983447f540aea6161ba8"],["archives/2020/index.html","a5136b9e3bfced710b706bbe2a68edfc"],["archives/index.html","2bb360a5e7a094e3e3f39ecb556cb872"],["archives/page/2/index.html","de95a9ef4d7337fd13d4b5f6faf6c7e7"],["archives/page/3/index.html","37cf1361574dde62d67bd701940217f7"],["archives/page/4/index.html","c5cafb9291018ce13b71522e3c40c7d1"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["categories/APP/Docker/index.html","f6f9ce031bf12115dc8a3fb268202ff0"],["categories/APP/Loadrunner/index.html","5198a4d2868542cd6fc4980728493d44"],["categories/APP/MongoDB/index.html","7b3f0bbb602f507c8e79a411f9a873f9"],["categories/APP/MyEclipse/index.html","83236d5da597297c4bcb86d3d3dcf671"],["categories/APP/MySQL/index.html","169b7552854932b4a08b4bbfb1e3e796"],["categories/APP/Redis/index.html","5e73150d0478d2fe6b2234db6b47fe61"],["categories/APP/Shadowsocks/index.html","fb0f4512784ba39ecc775a3602f2cc6a"],["categories/APP/Sketch/index.html","230fe2ea7c268a85137f937fdebddb77"],["categories/APP/Terminal/Shadowsocks/index.html","4b5a07f14c3284d45303dfc8f6421f17"],["categories/APP/Terminal/index.html","cc5c8ee895526b19cc49cfcac5009ca0"],["categories/APP/index.html","97001b84468f8a36160db62b3ef798fb"],["categories/APP/page/2/index.html","4d55b95f02732fc41cfd6f8e507c6a19"],["categories/Git/Github/index.html","26c78e249a582005118f76b8a29db1d6"],["categories/Git/index.html","57d9b882bd01c9d4cfc825a5330b9bcf"],["categories/Hexo/index.html","adaf9c1da71a8b121c3e666358ae4342"],["categories/Swift/SwiftUI/Views-and-Controls/index.html","daad8567c70183b6571a4916ea0ff014"],["categories/Swift/SwiftUI/index.html","16ccfa0342d9ab9fe7228bb3b062b39c"],["categories/Swift/Vapor/APP/Mkit/index.html","715b1e1aa966c6274c2e8c62ad3c76af"],["categories/Swift/Vapor/APP/index.html","568249d74585274ef45cddcefa88e5fc"],["categories/Swift/Vapor/index.html","8b82ea2b3f7f90f328b5510f11b14993"],["categories/Swift/index.html","b4f7abe6dfbf839ff0a95eefdb69db15"],["categories/Swift/page/2/index.html","6fa792e74822bbafe1395199e96362d9"],["categories/index.html","7e9e734e8a1e082c1191d6234b9dbabe"],["css/404.css","b1bb50e1fabe41adcec483f6427fb3aa"],["css/index.css","43c0eec7e34550d55ac3270b74f35ab2"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["index.html","a20e6ff9977cd8e3fedf47affd684f03"],["js/copy.js","45aae54bf2e43ac27ecc41eb5e0bacf7"],["js/fancybox.js","f84d626654b9bbc05720952b3effe062"],["js/fireworks.js","35933ce61c158ef9c33b5e089fe757ac"],["js/head.js","347edd99f8e3921b45fa617e839d8182"],["js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["js/katex.js","d971ba8b8dee1120ef66744b89cfd2b1"],["js/scroll.js","a12ad7e37b9e325f8da3d0523d3757c7"],["js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["js/search/local-search.js","1565b508bd866ed6fbd724a3858af5d8"],["js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["js/third-party/canvas-ribbon.js","09c181544ddff1db701db02ac30453e0"],["js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["js/transition.js","911db4268f0f6621073afcced9e1bfef"],["js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["live2dw/assets/moc/koharu.2048/texture_00.png","495eea8d906c2b03abfe3fa9de2f2a8b"],["live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["page/2/index.html","57c6243c36d28b48b9e684f5ac28fd84"],["page/3/index.html","136ad60ab5269748b18f6fd56186db41"],["page/4/index.html","bb50a42294bfc553609de84f0dabbd4c"],["tags/API/index.html","919d9a2b4d62b5dddbb951b8f3b3a3c8"],["tags/Architecture/index.html","761fcf206a06f1a88cbed3659f9fc619"],["tags/Basis/index.html","6f507fe63c4b9bf78f266b252950c6af"],["tags/Command/index.html","6e989baa5eb6de1b480a3f89887f3b1b"],["tags/Document/index.html","ac7e89a0b6020704709c6a230b16631c"],["tags/Error/index.html","224b439ee44f2ee2fda048a541b26d2b"],["tags/Failed/index.html","8726d2f4424578b91972ad77b0800d05"],["tags/Install/index.html","3bfd5efed958125d832b0c4a78449ac8"],["tags/JDK/index.html","4df7eab216ab1151dd582934a0eed415"],["tags/Optimize/index.html","c527495c9b356b798ff363a623f08f36"],["tags/Svn/index.html","23ee64c3e5c27b78d08d49ad24743a0f"],["tags/Tookit/index.html","c2f00acad36d84d5c3c043fa45760a76"],["tags/Tool/index.html","cb9488caccb5f2a82929fc8a3c146d87"],["tags/VPN/index.html","8f3dd17c918def8787ebd4040a893a22"],["tags/Vapor/index.html","fb06b7317cfecb7880e7e5c79b1a8438"],["tags/Vim/index.html","499f021b1bccf1d457f560e6405f8cf6"],["tags/Xcode/index.html","b16775f39464a3601d35cc89760836c2"],["tags/index.html","9efee28d9ab0a34dae073e5e12a7a9c7"],["zh-cn/APP/Docker/docker-compose-no.html","342cac7704ace5fd9c6a40c032862c1c"],["zh-cn/APP/Loadrunner/Loadrunner_Error.html","e4260f9c657c8bfbc3e5ede96f3e51b7"],["zh-cn/APP/MongoDB/linux_mongodb.html","27665f97e48fea9b1d5338fbe1895f68"],["zh-cn/APP/MongoDB/windows_mongodb_install.html","64644d24d6819503d4903b9e2e580fc4"],["zh-cn/APP/MyEclipse/MyEclipse2015_Failed_2.5.html","ea2b0a32f77975d8119313a71ca08eac"],["zh-cn/APP/MyEclipse/MyEclipse2015_HttpSession_error.html","fc6a6f18a0702783b05bfe5bf443dbb7"],["zh-cn/APP/MySQL/Percona_Tookit_pt-query-digest.html","e731f838c9945840577e61d5b11ae23f"],["zh-cn/APP/MySQL/centos_mysql_install.html","23ba28fe009203223c096bc64cddfe9e"],["zh-cn/APP/MySQL/centos_tookit_rmp_install.html","5b888d252bbc80403f63b857faada021"],["zh-cn/APP/MySQL/mysql_command.html","290e101a3d312b15dd27607fa98e9045"],["zh-cn/APP/MySQL/mysql_parm.html","3bdd3c20a06b779311e9af1818568140"],["zh-cn/APP/MySQL/windows_mysql_install.html","06e8878f3c7b8fb0e656565b7d7706e4"],["zh-cn/APP/Redis/CentOS7_Redis_install.html","99ba5197a43e3371806fdcca9d3cfe0a"],["zh-cn/APP/Redis/macos_brew_redis.html","4de21738a884e733cff821f4aa0c10ef"],["zh-cn/APP/Shadowsocks/macos10_12_shadowsocks.html","9b381f43f60e6755cdb91261eb64cf13"],["zh-cn/APP/Sketch/Sketch_Plugins.html","54bacbc7714583789ad53cc5826ce656"],["zh-cn/APP/Sketch/Sketch_key.html","ffefe5bc2e75c017f4fbf6f3b6af9237"],["zh-cn/APP/Terminal/Shadowsocks/terminal_ss.html","4bc3ccd8754fb5849b5e9afeb1d5624d"],["zh-cn/Git/Github/github_host.html","cafd407e2c7c21f56285721f326cb041"],["zh-cn/Git/ssh_key.html","5f6a1ba805851879d12b3d7cebf91131"],["zh-cn/Hexo/hexo_sitemap.html","d7a07583d389a6ac412ca6d5e50edf7c"],["zh-cn/Swift/SwiftUI/Views-and-Controls/swiftui_picker.html","ef5e55803d2bd7b1730592bd0d722aa0"],["zh-cn/Swift/Vapor/APP/Mkit/mkit_api_data_doc.html","15115a73cf1b6cf4d6287f8640a2f82a"],["zh-cn/Swift/Vapor/APP/Mkit/mkit_api_doc.html","173c6645941673ade6090871c772bcbb"],["zh-cn/Swift/Vapor/Vapor_MySQL_Use.html","059715ef27d11b61f4fe0da5608a8a55"],["zh-cn/Swift/http_api.html","2381093d4d71f37af04f6f061626c68d"],["zh-cn/Swift/mvvm_app.html","39b97f601c1becbc362722f0a0570003"],["zh-cn/Swift/swift_array_study.html","b19e0ebe085ce0221d3eec88dedfc8a9"],["zh-cn/Swift/swift_dicrionary.html","a54e56c7746177da503792142e54a008"],["zh-cn/Swift/swift_string.html","c6b387673b0de1199f7d1b6a30617a19"],["zh-cn/Swift/vapor_io.html","8250000950307bbd3194be655c69e9fd"],["zh-cn/Swift/vapor_url_response.html","b08826ffcf299db4fbe8f3c4ed50ff61"],["zh-cn/uncategorized/vim_vundle.html","1e868427b16ae0d530fb4ef54ef057c6"],["zh-cn/uncategorized/xcode_iphone_test.html","95a7d59b0883dbfff91413be2574109d"]];
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







