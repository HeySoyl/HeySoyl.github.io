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

var precacheConfig = [["about/index.html","939a3ad353daa269539bd6df70d1526e"],["archives/2016/04/index.html","2619d8bce8ff9ccfc9142154ceeef9d4"],["archives/2016/05/index.html","60d05d7f3a087e00992bad3d1db2fb7e"],["archives/2016/06/index.html","3016b7d5dcd178e3bd6e7cdab163edb9"],["archives/2016/index.html","7ecea225ff4f3214a7a93306fd846396"],["archives/2016/page/2/index.html","824204a273ff2a3c29df682650fcbe00"],["archives/2019/01/index.html","2dc41bf37d32a6b6b6b9decfb903408b"],["archives/2019/02/index.html","6a32f991dc94ae74be1424702674caca"],["archives/2019/07/index.html","2114b2d3c61fac9614b0a0eb2b5a2091"],["archives/2019/08/index.html","d561233b1590bbc291f68df9539341c6"],["archives/2019/index.html","1e6964aab850cede016c477ec73e4aad"],["archives/2019/page/2/index.html","affdab388685da5e168e8afb1f58ba8d"],["archives/2020/02/index.html","0aabe13067d78621763b85db715b2e85"],["archives/2020/index.html","372f439150959a1b4b4df23e3d8d7e5f"],["archives/index.html","360eac0490c47b254e5f3ca635b0670d"],["archives/page/2/index.html","1f4ffc522032c4f440f24e37f5f58fef"],["archives/page/3/index.html","2f7f466228cec3683cbd92e61ad276a2"],["archives/page/4/index.html","a50987681b59552fb4b1c1af2f58ffca"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["categories/APP/Docker/index.html","9e675446f433fa879f86c621aa0c7c19"],["categories/APP/Loadrunner/index.html","11161ff2ca5aa181353f75fc37326e07"],["categories/APP/MongoDB/index.html","a5712bb89af56d070c6bf62829afcdf4"],["categories/APP/MyEclipse/index.html","c629fbefc9a5eb65ebc3a75c5704bd31"],["categories/APP/MySQL/index.html","098547f860c0b077856f54f4fbb95d7e"],["categories/APP/Redis/index.html","46741d8c490997f8121825cfe13e2386"],["categories/APP/Shadowsocks/index.html","7f724a175413591ab53d80397cc20b22"],["categories/APP/Sketch/index.html","08a09fd41e0047e9441b5ee306ca12e9"],["categories/APP/Terminal/Shadowsocks/index.html","fa016fd7bec8f21a08b55935866be545"],["categories/APP/Terminal/index.html","2411bee0eb24a5498c1cb971e3941eae"],["categories/APP/index.html","dc343ae2ea79ab5bb176585f0581dd7d"],["categories/APP/page/2/index.html","84f6faa94c8c8f4bc7c5fb603b4e370f"],["categories/Git/Github/index.html","4e899d7b6e05e2f382164f8aa39cbaa0"],["categories/Git/index.html","d45c76c8fb34de3a5a81b0e99335c0d9"],["categories/Hexo/index.html","4ba1493734bf8dd7586acdc9014e9390"],["categories/Swift/SwiftUI/Views-and-Controls/index.html","bf3373197d10ee129ccb960b58ad2d0a"],["categories/Swift/SwiftUI/index.html","fe53bc7544d2eda1941fd6b2ae412dea"],["categories/Swift/Vapor/APP/Mkit/index.html","072e2d1d844f2218fe85ec9c1db34209"],["categories/Swift/Vapor/APP/index.html","41738cd4060f0d2762bf3c796aa05985"],["categories/Swift/Vapor/index.html","786737a8fc6aee55357898d0aa352794"],["categories/Swift/index.html","7af59bc6805c249453ab13320a2a3b7f"],["categories/Swift/page/2/index.html","e2dd3b3c56fb6206324830168a1c6083"],["categories/index.html","cbe59a252669e3b6ab2b10a8f9f56c06"],["css/index.css","4a8fd9eb100df1df02b97fb2c65ccfc5"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["index.html","d90a5a00324f5c0818e09041b79b7b7e"],["js/copy.js","10b58e108593f60eb272b8ecda1f2a27"],["js/fancybox.js","9cfc893a86a6bfc51f4db6293c4d2b08"],["js/fireworks.js","35933ce61c158ef9c33b5e089fe757ac"],["js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["js/scroll.js","e2433ba220e56fa03095f6164bac719e"],["js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["js/search/local-search.js","1565b508bd866ed6fbd724a3858af5d8"],["js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["js/transition.js","bd261a5dda799613501070ecc19d6e69"],["js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["live2dw/assets/moc/koharu.2048/texture_00.png","495eea8d906c2b03abfe3fa9de2f2a8b"],["live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["page/2/index.html","7168e47f22522153446d0cd2ea6d16fa"],["page/3/index.html","1bcef11ef87b36d18ee33c42e0c1f5bb"],["page/4/index.html","fa90d437df08a8c9710ef441ffdb6cd0"],["tags/API/index.html","65dbd579f150f7cb5c31a3b4be446be6"],["tags/Architecture/index.html","d8bfe8c56c4147af55347830ada51daf"],["tags/Basis/index.html","5887527910bff468f8d841667b3cc25a"],["tags/Command/index.html","af1de84e9ddc6f5e1ea03946f356162c"],["tags/Document/index.html","ae4e90f0e5edc7c0e7a9500c60818b72"],["tags/Error/index.html","b7fe122a32737ffdc48f085b11dad743"],["tags/Failed/index.html","243078ce5b789f01125a8136182a4270"],["tags/Install/index.html","50ba192d03e158a02470601113382259"],["tags/JDK/index.html","b2a64fa64bb959adcc306b0d584d473f"],["tags/Optimize/index.html","1244ecd8f7d7330bbfb70a9421afe4b9"],["tags/Svn/index.html","5f4678bf58b4dd6b38a275848f4f2239"],["tags/Tookit/index.html","65405a6c8e49d8734d412800bf3517aa"],["tags/Tool/index.html","739411b4de5011b700a1c523aae98f0c"],["tags/VPN/index.html","ffdafc6d59e4459619b9d5dd6348622f"],["tags/Vapor/index.html","45c95eb7520fb4c02f4e634e1948f6cb"],["tags/Vim/index.html","316830d19068db232508e25be80c6245"],["tags/Xcode/index.html","bb497bc5356774533dc28ab8bea06516"],["tags/index.html","1b6575ecff1aa205c90b1ebf601b1bb9"],["zh-cn/APP/Docker/docker-compose-no.html","ba1adc559c19ce849db337bee50b816c"],["zh-cn/APP/Loadrunner/Loadrunner_Error.html","ffc6169e0690a8d8c60c844ea4b31e88"],["zh-cn/APP/MongoDB/linux_mongodb.html","39a909ab49b67b8eb3c033fd797a47c9"],["zh-cn/APP/MongoDB/windows_mongodb_install.html","27dda964c5d0f78f623299c8d449d4b3"],["zh-cn/APP/MyEclipse/MyEclipse2015_Failed_2.5.html","0f4438f7ead37b933731f2610cbdb8ba"],["zh-cn/APP/MyEclipse/MyEclipse2015_HttpSession_error.html","059775e4a6b7161c8b59aed7c98309ad"],["zh-cn/APP/MySQL/Percona_Tookit_pt-query-digest.html","65bf5fbb4873de00597dd2e227209fda"],["zh-cn/APP/MySQL/centos_mysql_install.html","a69cf14f215dd3f439adc22d98929134"],["zh-cn/APP/MySQL/centos_tookit_rmp_install.html","b5bc7da4f60b980b1a7578b57f68f9d1"],["zh-cn/APP/MySQL/mysql_command.html","508db429e501f8bacda630b7260ab7a5"],["zh-cn/APP/MySQL/mysql_parm.html","d6fc119e6fe92179af3b5a6ada60bf52"],["zh-cn/APP/MySQL/windows_mysql_install.html","32848e5551f83b203287d2c8504f8ad6"],["zh-cn/APP/Redis/CentOS7_Redis_install.html","40eb024f590756d9773514fb3a308e86"],["zh-cn/APP/Redis/macos_brew_redis.html","2cf770e21ba9b3a29f23b3321511f22f"],["zh-cn/APP/Shadowsocks/macos10_12_shadowsocks.html","8a8d9afa3b58e5b51d5082db182b6a6f"],["zh-cn/APP/Sketch/Sketch_Plugins.html","444576df9cb88b409323c11bc43b83b9"],["zh-cn/APP/Sketch/Sketch_key.html","4fe0e47084e960c0957d1003d4826171"],["zh-cn/APP/Terminal/Shadowsocks/terminal_ss.html","ceeaa162971f28813190ee2068e61d36"],["zh-cn/Git/Github/github_host.html","8cc75f652b3e537edd12b441a4c94985"],["zh-cn/Git/ssh_key.html","7eb60741402806fd37b683f3166242a1"],["zh-cn/Hexo/hexo_sitemap.html","ffa16e3476952d15900379aeda4bd928"],["zh-cn/Swift/SwiftUI/Views-and-Controls/swiftui_picker.html","3a7f2dd1be88297dd2715f12e56d2d8d"],["zh-cn/Swift/Vapor/APP/Mkit/mkit_api_data_doc.html","895063b8c8a3023aabffe0c24bcdfb18"],["zh-cn/Swift/Vapor/APP/Mkit/mkit_api_doc.html","5e072f2365d7d214ebb92ce4760a472c"],["zh-cn/Swift/Vapor/Vapor_MySQL_Use.html","6edd3182b184e0f20f8442b8ea754758"],["zh-cn/Swift/http_api.html","d253cb6e93e3b115a6e4bdf606736d81"],["zh-cn/Swift/mvvm_app.html","2cc087de83cf837ca0c550d7291d9b32"],["zh-cn/Swift/swift_array_study.html","71275544f9bb3c9af490e15f968dc930"],["zh-cn/Swift/swift_dicrionary.html","e01a0bf642da426880cc368fea121744"],["zh-cn/Swift/swift_string.html","9f9a97e6e52e3107b558dfd4f3e0f255"],["zh-cn/Swift/vapor_io.html","ba2c75d60050be32370ad4e655c0ef0a"],["zh-cn/Swift/vapor_url_response.html","33fc15e764345e30b34ae64128d43438"],["zh-cn/uncategorized/vim_vundle.html","f41de697cb2e43cfcc0855021b946faf"],["zh-cn/uncategorized/xcode_iphone_test.html","359256f557bfe25fd3beff4ae846cf7f"]];
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







