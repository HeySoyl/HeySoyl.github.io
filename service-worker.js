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

var precacheConfig = [["404.html","73864f59cb9722799c3f91f336ecf57e"],["APP/Docker/docker-compose-no.html","381bac2b93ac46833fab3184001ed94a"],["APP/Loadrunner/Loadrunner_Error.html","f165b58a1e7431073f45e56dab653399"],["APP/MongoDB/linux_mongodb.html","785728a767080a22b03dc289f7beb0e0"],["APP/MongoDB/windows_mongodb_install.html","3eaf48b6e5dbd0c1e58ae0b9a2b04821"],["APP/MyEclipse/MyEclipse2015_Failed_2.5.html","10cb96e0eb73f204b84ed083c37a276b"],["APP/MyEclipse/MyEclipse2015_HttpSession_error.html","126aa7e748cc2ace266e5b50c50c9d31"],["APP/MySQL/Percona_Tookit_pt-query-digest.html","e54edace1eef9eabdd7d1f976bc867e9"],["APP/MySQL/centos_mysql_install.html","7adc7d0d1cbb2169aff40a12d405a6da"],["APP/MySQL/centos_tookit_rmp_install.html","946653c80fa50dd41cc10372654c6c67"],["APP/MySQL/mysql_command.html","edffa71f2739a9fa7dbba837d84de2e4"],["APP/MySQL/mysql_parm.html","77979dbb0dd46e10585085a5c3cc1b3e"],["APP/MySQL/windows_mysql_install.html","897c15b4afcea0075197ea27fab62c3c"],["APP/Redis/CentOS7_Redis_install.html","84cf1cdb495208f6e5a54e483ecc6059"],["APP/Redis/macos_brew_redis.html","494d23c5dbbe53fd07deb6e6e30d8c43"],["APP/Shadowsocks/macos10_12_shadowsocks.html","fba0d54c0f1eac1698e11b3a4ba71f14"],["APP/Sketch/Sketch_Plugins.html","815b72c4012e70bde712912540a8fa3c"],["APP/Sketch/Sketch_key.html","949351d12a94530a7a5b5f2da3c0f620"],["APP/Terminal/Shadowsocks/terminal_ss.html","98bacf468fef4bb41729d6a08f1c03ae"],["Git/Github/github_host.html","f98cbbbae54352b1c6cff290e0f168cb"],["Git/ssh_key.html","b7f54e7bba6f0ade6b12600e77c351b6"],["Hexo/hexo_sitemap.html","375edd063fdc7a4105456d7f6ac0cff0"],["Swift/Core-Data/FetchRequest/swift_coredata_fetchrequest.html","d293f4e544363e021a4b182a9cf3f4c2"],["Swift/Vapor/APP/Mkit/mkit_api_data_doc.html","f3529b649b275b913b8ec622d1744ca3"],["Swift/Vapor/APP/Mkit/mkit_api_doc.html","2ab0d68118f06720a858087e5190e68e"],["Swift/Vapor/Vapor_MySQL_Use.html","02ad3420a9b295e993795e8bf67e843d"],["Swift/http_api.html","defc946a14fceb80b694dc8960cea137"],["Swift/mvvm_app.html","7570f29f8c3a0a139baf1734291c910e"],["Swift/swift_array_study.html","3ddaf64faf1dc1ea13a451f6f7e964f7"],["Swift/swift_dicrionary.html","8829e30333d2f5baf8d8d8a9e589240f"],["Swift/swift_string.html","46f443c8e8ed1826650dd8a18d087174"],["Swift/vapor_io.html","21425f6b9646e80317a426977cb9e17c"],["Swift/vapor_url_response.html","771692c6481acfa8a72db8e89cb99bbd"],["SwiftUI/swiftui_picker.html","71572973c4e42e83a36e57e37a4dd01c"],["about/index.html","8606a683612196d5c9c45ae1d7cb57ae"],["archives/2016/04/index.html","e518411e0ddeed6d6b26f1155d1c069f"],["archives/2016/05/index.html","496c180e87d247458205ed4ed1372876"],["archives/2016/06/index.html","81eb1c2b344c5d84c692864257dc17e1"],["archives/2016/index.html","153a0a3d8b758b07b437aaacdfea4278"],["archives/2016/page/2/index.html","85f12381bf804fd0696e0dbfb1a9100d"],["archives/2019/01/index.html","aba1d74a55d309fc78e0e33266ce4f4d"],["archives/2019/02/index.html","021f22583a6ba8a9f4eac7e2b040e60c"],["archives/2019/07/index.html","2c33d09d2599ace400b9994114f86551"],["archives/2019/08/index.html","a01dc62717842a8de33b072f51f4b7b8"],["archives/2019/index.html","4d23cc83a6d948c8ae425a96294cfa50"],["archives/2019/page/2/index.html","1f9f7b9b83347e20192422758dc4ab95"],["archives/2020/02/index.html","d6c0fc3bb18a62815884b18e73f7ad07"],["archives/2020/03/index.html","4d897616427757b97abf3cc5884892ed"],["archives/2020/04/index.html","6c9b8a123996e0a9b63c19fcea984890"],["archives/2020/05/index.html","c9e72e7e2afe76094373110350d594d8"],["archives/2020/index.html","c84d051b017d70531903452eba172974"],["archives/index.html","b701b47fe19997ed2f2523d941e67cdc"],["archives/page/2/index.html","002d109aa2b65ea84cd26ea6036463ca"],["archives/page/3/index.html","700bc9963db5c522346743afe8722afa"],["archives/page/4/index.html","4465e50bf143c9b87e894703bb1da44a"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["categories/APP/Docker/index.html","94c457810afadccd5ccac93432918ed0"],["categories/APP/Loadrunner/index.html","4ec2d78ecc24db1f5049f5cce070e279"],["categories/APP/MongoDB/index.html","2f03d58f55165b7b95d38873bf9456a4"],["categories/APP/MyEclipse/index.html","1bda6f0196130aa12a87a86cf428928e"],["categories/APP/MySQL/index.html","e7147e5ce30ef550bda79c437fd4d303"],["categories/APP/Redis/index.html","282f154642d07f8e16f75afc57b10db4"],["categories/APP/Shadowsocks/index.html","7b0f499368443f6848ed4d51c9eadaa4"],["categories/APP/Sketch/index.html","3b8ac391752935b40dc12debb32a6ec8"],["categories/APP/Terminal/Shadowsocks/index.html","4c5aebc5537c9102b9f312c57c48fb0c"],["categories/APP/Terminal/index.html","4309a94248d088bfe8b4f3ee1f6e922c"],["categories/APP/index.html","be87dac4b1053cb9a6b92f7d07efd0a6"],["categories/APP/page/2/index.html","a3e98cea24550481140d956740ab831f"],["categories/Git/Github/index.html","f983a55ab6e39f2230e368522beba193"],["categories/Git/index.html","c4915878db55040fffed16168cf16925"],["categories/Hexo/index.html","0449cdedf51ae3d7966e320829afca3f"],["categories/Swift/Core-Data/FetchRequest/index.html","29c67a936e65e8599585284b521079fb"],["categories/Swift/Core-Data/index.html","1dab78bbe789f7b765a81471ce36d836"],["categories/Swift/Vapor/APP/Mkit/index.html","29b089ad08b731cce41875519de84755"],["categories/Swift/Vapor/APP/index.html","c31986d2fd2f35ad6cfb95b462128833"],["categories/Swift/Vapor/index.html","8e5ff8e6af42de4741bd9c8817f94d1a"],["categories/Swift/index.html","9577b3077c4966933257028158d4ebc4"],["categories/Swift/page/2/index.html","0d2cbab6401d10c1e934103ad5f31d92"],["categories/SwiftUI/index.html","49774a84a88aa079f410247d40a3ec92"],["categories/index.html","144a67a5830d7c55431f339427fefad4"],["css/cyberpunk.css","67cc80d7931274f0d9d00f624cfd11bd"],["css/default.css","e5d134f504c5828b9a473464f6cce386"],["css/style.css","e5d134f504c5828b9a473464f6cce386"],["idevil/index.html","c5f6f3cc149076c5dd20965ab32affa9"],["images/pwaicons/144.png","b9aa9b60d2bbdb48abc20520e644ab1a"],["images/pwaicons/192.png","5c6e0cd31b2f86cc4ef8bedc8d0edb83"],["images/pwaicons/36.png","b14e60264a059706e13716098b7741e7"],["images/pwaicons/48.png","0bf6ca8995874845a857d684c710182a"],["images/pwaicons/512.png","ae6e496ac95bda14bd45f2b085689648"],["images/pwaicons/72.png","f7a4a1b3af148976cc9e719c4c9f5115"],["images/pwaicons/96.png","ca3a0d048b43e399aa0d53b208f6c5ee"],["img/avatar.png","5ba747df4ff87eba44e658c50aa64574"],["img/favicon.svg","f22ef129316ab6fdcf6c68bddde0a572"],["img/logo.svg","b06d5b47682b56c5a85d590149c21247"],["img/og_image.png","d8b00311b2a1607678da23db999c9d42"],["img/razor-bottom-black.svg","3f0f5185dd8f5c8b2145e8388c86bc5c"],["img/razor-top-black.svg","0d266d3422294d93cecc342bb3757473"],["img/thumbnail.svg","b15ba22d74204f664cdfed75d03de230"],["index.html","e6a04202531d4c090ad7d853ec2835a7"],["js/algolia.js","9a5211b37d86edf2eb0314b5f1f64ac4"],["js/animation.js","909a13a980da00854b246c544f2f9697"],["js/back_to_top.js","93c900ce5f3dc9f28b082c80456c5520"],["js/google_cse.js","f8df6329b2d17a7f2f6574963857c554"],["js/insight.js","a6cc440c6d601202680a98fb095adb6b"],["js/main.js","ca530b2ba040266166ab1e27d0d303ae"],["live2dw/assets/moc/koharu.2048/texture_00.png","495eea8d906c2b03abfe3fa9de2f2a8b"],["live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["page/2/index.html","0700671790fe3db1865138d5da6e472f"],["page/3/index.html","dccfa02268f0d628978084c57306345c"],["page/4/index.html","94fbb7f9ed51d2c62dd4b0f752bd7c0e"],["tags/API/index.html","258e76d121a0d86005d8cb96ef8fd264"],["tags/Architecture/index.html","11b8ff13ea3ee8b186412354b614270c"],["tags/Basis/index.html","d41698de66b3a4f329fea9f3fd685ec8"],["tags/Command/index.html","f0c07f83a46175354269293ded29dc29"],["tags/Document/index.html","2db7609c2f291c30ff90afbb5474164f"],["tags/Error/index.html","aca467ffd6ab6325b69bdc2e24c3e935"],["tags/Failed/index.html","a0d667363883d2fe003f6480128b1e9b"],["tags/Install/index.html","03dbb7c48cf71c8364ab418afd16fc4f"],["tags/JDK/index.html","c8df70955fe26069e468b67fac18b0ad"],["tags/Optimize/index.html","7e4064d8d43fb5f3701b9ecc05811fbf"],["tags/Svn/index.html","becf0750b6c118fac1550c197f725758"],["tags/Swift/index.html","1e963ee54b576aeb18dcaad5cd5b409e"],["tags/SwiftUI/index.html","7a5d6211cf5257fd4e2a8a176bb5fb69"],["tags/Tookit/index.html","c7443358dd5c196b165a01d31cf28c6c"],["tags/Tool/index.html","0c109e20213db55cb54220a773de6f24"],["tags/VPN/index.html","e1eab2b923a512ee84153f27d7ec1e30"],["tags/Vapor/index.html","5c27c4b726874c43472cfa8a556bcc13"],["tags/Vim/index.html","b440f435465fe3a4ec632f96cdefd1ce"],["tags/Xcode/index.html","bea5f8d99c0677350f777c275e3014bd"],["tags/index.html","7b72c42ec0fda2d74101fed383e19805"],["uncategorized/URLSession.html","d2e8d06ac4c891b0adc88c749476dae0"],["uncategorized/cloudkit_question.html","b0d3495138141c6428c0f6a5671af205"],["uncategorized/homebrew.html","ad3e2a9f20c6871a88c8e2541da03973"],["uncategorized/vim_vundle.html","85e789eaed80ae049b3d6c19a154f2b4"],["uncategorized/xcode_iphone_test.html","e31a3b5ebf90ef0629e3fa0a242893dd"],["uncategorized/yonghuxieyi.html","cd37916d5080d28f56a96f1cbfea62c8"]];
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







