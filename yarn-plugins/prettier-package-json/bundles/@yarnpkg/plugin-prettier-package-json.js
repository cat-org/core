/* eslint-disable */
module.exports = {
  name: '@yarnpkg/plugin-prettier-package-json',
  factory: function (require) {
    var plugin;
    (() => {
      var t = {
          3819: t => {
            t.exports = function (t) {
              if ('function' != typeof t)
                throw TypeError(String(t) + ' is not a function');
              return t;
            };
          },
          8505: (t, r, e) => {
            var n = e(5052);
            t.exports = function (t) {
              if (!n(t) && null !== t)
                throw TypeError("Can't set " + String(t) + ' as a prototype');
              return t;
            };
          },
          9736: (t, r, e) => {
            var n = e(95),
              o = e(2391),
              i = e(1787),
              a = n('unscopables'),
              c = Array.prototype;
            null == c[a] && i.f(c, a, { configurable: !0, value: o(null) }),
              (t.exports = function (t) {
                c[a][t] = !0;
              });
          },
          7728: t => {
            t.exports = function (t, r, e) {
              if (!(t instanceof r))
                throw TypeError(
                  'Incorrect ' + (e ? e + ' ' : '') + 'invocation',
                );
              return t;
            };
          },
          1176: (t, r, e) => {
            var n = e(5052);
            t.exports = function (t) {
              if (!n(t)) throw TypeError(String(t) + ' is not an object');
              return t;
            };
          },
          507: (t, r, e) => {
            'use strict';
            var n = e(7636),
              o = e(2991),
              i = e(4960),
              a = e(1943),
              c = e(4237),
              u = e(2324),
              s = e(8830);
            t.exports = function (t) {
              var r,
                e,
                f,
                l,
                p,
                v,
                h = o(t),
                y = 'function' == typeof this ? this : Array,
                d = arguments.length,
                g = d > 1 ? arguments[1] : void 0,
                m = void 0 !== g,
                x = s(h),
                b = 0;
              if (
                (m && (g = n(g, d > 2 ? arguments[2] : void 0, 2)),
                null == x || (y == Array && a(x)))
              )
                for (e = new y((r = c(h.length))); r > b; b++)
                  (v = m ? g(h[b], b) : h[b]), u(e, b, v);
              else
                for (
                  p = (l = x.call(h)).next, e = new y();
                  !(f = p.call(l)).done;
                  b++
                )
                  (v = m ? i(l, g, [f.value, b], !0) : f.value), u(e, b, v);
              return (e.length = b), e;
            };
          },
          9540: (t, r, e) => {
            var n = e(905),
              o = e(4237),
              i = e(3231),
              a = function (t) {
                return function (r, e, a) {
                  var c,
                    u = n(r),
                    s = o(u.length),
                    f = i(a, s);
                  if (t && e != e) {
                    for (; s > f; ) if ((c = u[f++]) != c) return !0;
                  } else
                    for (; s > f; f++)
                      if ((t || f in u) && u[f] === e) return t || f || 0;
                  return !t && -1;
                };
              };
            t.exports = { includes: a(!0), indexOf: a(!1) };
          },
          9996: (t, r, e) => {
            var n = e(7636),
              o = e(9337),
              i = e(2991),
              a = e(4237),
              c = e(7501),
              u = [].push,
              s = function (t) {
                var r = 1 == t,
                  e = 2 == t,
                  s = 3 == t,
                  f = 4 == t,
                  l = 6 == t,
                  p = 7 == t,
                  v = 5 == t || l;
                return function (h, y, d, g) {
                  for (
                    var m,
                      x,
                      b = i(h),
                      w = o(b),
                      S = n(y, d, 3),
                      O = a(w.length),
                      j = 0,
                      E = g || c,
                      A = r ? E(h, O) : e || p ? E(h, 0) : void 0;
                    O > j;
                    j++
                  )
                    if ((v || j in w) && ((x = S((m = w[j]), j, b)), t))
                      if (r) A[j] = x;
                      else if (x)
                        switch (t) {
                          case 3:
                            return !0;
                          case 5:
                            return m;
                          case 6:
                            return j;
                          case 2:
                            u.call(A, m);
                        }
                      else
                        switch (t) {
                          case 4:
                            return !1;
                          case 7:
                            u.call(A, m);
                        }
                  return l ? -1 : s || f ? f : A;
                };
              };
            t.exports = {
              forEach: s(0),
              map: s(1),
              filter: s(2),
              some: s(3),
              every: s(4),
              find: s(5),
              findIndex: s(6),
              filterOut: s(7),
            };
          },
          1460: (t, r, e) => {
            var n = e(4229),
              o = e(95),
              i = e(6358),
              a = o('species');
            t.exports = function (t) {
              return (
                i >= 51 ||
                !n(function () {
                  var r = [];
                  return (
                    ((r.constructor = {})[a] = function () {
                      return { foo: 1 };
                    }),
                    1 !== r[t](Boolean).foo
                  );
                })
              );
            };
          },
          7501: (t, r, e) => {
            var n = e(5052),
              o = e(3718),
              i = e(95)('species');
            t.exports = function (t, r) {
              var e;
              return (
                o(t) &&
                  ('function' != typeof (e = t.constructor) ||
                  (e !== Array && !o(e.prototype))
                    ? n(e) && null === (e = e[i]) && (e = void 0)
                    : (e = void 0)),
                new (void 0 === e ? Array : e)(0 === r ? 0 : r)
              );
            };
          },
          4960: (t, r, e) => {
            var n = e(1176),
              o = e(7281);
            t.exports = function (t, r, e, i) {
              try {
                return i ? r(n(e)[0], e[1]) : r(e);
              } catch (r) {
                throw (o(t), r);
              }
            };
          },
          4575: (t, r, e) => {
            var n = e(95)('iterator'),
              o = !1;
            try {
              var i = 0,
                a = {
                  next: function () {
                    return { done: !!i++ };
                  },
                  return: function () {
                    o = !0;
                  },
                };
              (a[n] = function () {
                return this;
              }),
                Array.from(a, function () {
                  throw 2;
                });
            } catch (t) {}
            t.exports = function (t, r) {
              if (!r && !o) return !1;
              var e = !1;
              try {
                var i = {};
                (i[n] = function () {
                  return {
                    next: function () {
                      return { done: (e = !0) };
                    },
                  };
                }),
                  t(i);
              } catch (t) {}
              return e;
            };
          },
          7079: t => {
            var r = {}.toString;
            t.exports = function (t) {
              return r.call(t).slice(8, -1);
            };
          },
          1589: (t, r, e) => {
            var n = e(1601),
              o = e(7079),
              i = e(95)('toStringTag'),
              a =
                'Arguments' ==
                o(
                  (function () {
                    return arguments;
                  })(),
                );
            t.exports = n
              ? o
              : function (t) {
                  var r, e, n;
                  return void 0 === t
                    ? 'Undefined'
                    : null === t
                    ? 'Null'
                    : 'string' ==
                      typeof (e = (function (t, r) {
                        try {
                          return t[r];
                        } catch (t) {}
                      })((r = Object(t)), i))
                    ? e
                    : a
                    ? o(r)
                    : 'Object' == (n = o(r)) && 'function' == typeof r.callee
                    ? 'Arguments'
                    : n;
                };
          },
          7081: (t, r, e) => {
            var n = e(816),
              o = e(4826),
              i = e(7933),
              a = e(1787);
            t.exports = function (t, r) {
              for (var e = o(r), c = a.f, u = i.f, s = 0; s < e.length; s++) {
                var f = e[s];
                n(t, f) || c(t, f, u(r, f));
              }
            };
          },
          7528: (t, r, e) => {
            var n = e(4229);
            t.exports = !n(function () {
              function t() {}
              return (
                (t.prototype.constructor = null),
                Object.getPrototypeOf(new t()) !== t.prototype
              );
            });
          },
          3723: (t, r, e) => {
            'use strict';
            var n = e(693).IteratorPrototype,
              o = e(2391),
              i = e(5358),
              a = e(4555),
              c = e(5495),
              u = function () {
                return this;
              };
            t.exports = function (t, r, e) {
              var s = r + ' Iterator';
              return (
                (t.prototype = o(n, { next: i(1, e) })),
                a(t, s, !1, !0),
                (c[s] = u),
                t
              );
            };
          },
          5762: (t, r, e) => {
            var n = e(7400),
              o = e(1787),
              i = e(5358);
            t.exports = n
              ? function (t, r, e) {
                  return o.f(t, r, i(1, e));
                }
              : function (t, r, e) {
                  return (t[r] = e), t;
                };
          },
          5358: t => {
            t.exports = function (t, r) {
              return {
                enumerable: !(1 & t),
                configurable: !(2 & t),
                writable: !(4 & t),
                value: r,
              };
            };
          },
          2324: (t, r, e) => {
            'use strict';
            var n = e(2066),
              o = e(1787),
              i = e(5358);
            t.exports = function (t, r, e) {
              var a = n(r);
              a in t ? o.f(t, a, i(0, e)) : (t[a] = e);
            };
          },
          7675: (t, r, e) => {
            'use strict';
            var n = e(3103),
              o = e(3723),
              i = e(7567),
              a = e(6540),
              c = e(4555),
              u = e(5762),
              s = e(7487),
              f = e(95),
              l = e(4231),
              p = e(5495),
              v = e(693),
              h = v.IteratorPrototype,
              y = v.BUGGY_SAFARI_ITERATORS,
              d = f('iterator'),
              g = function () {
                return this;
              };
            t.exports = function (t, r, e, f, v, m, x) {
              o(e, r, f);
              var b,
                w,
                S,
                O = function (t) {
                  if (t === v && T) return T;
                  if (!y && t in A) return A[t];
                  switch (t) {
                    case 'keys':
                    case 'values':
                    case 'entries':
                      return function () {
                        return new e(this, t);
                      };
                  }
                  return function () {
                    return new e(this);
                  };
                },
                j = r + ' Iterator',
                E = !1,
                A = t.prototype,
                L = A[d] || A['@@iterator'] || (v && A[v]),
                T = (!y && L) || O(v),
                P = ('Array' == r && A.entries) || L;
              if (
                (P &&
                  ((b = i(P.call(new t()))),
                  h !== Object.prototype &&
                    b.next &&
                    (l ||
                      i(b) === h ||
                      (a ? a(b, h) : 'function' != typeof b[d] && u(b, d, g)),
                    c(b, j, !0, !0),
                    l && (p[j] = g))),
                'values' == v &&
                  L &&
                  'values' !== L.name &&
                  ((E = !0),
                  (T = function () {
                    return L.call(this);
                  })),
                (l && !x) || A[d] === T || u(A, d, T),
                (p[r] = T),
                v)
              )
                if (
                  ((w = {
                    values: O('values'),
                    keys: m ? T : O('keys'),
                    entries: O('entries'),
                  }),
                  x)
                )
                  for (S in w) (y || E || !(S in A)) && s(A, S, w[S]);
                else n({ target: r, proto: !0, forced: y || E }, w);
              return w;
            };
          },
          8423: (t, r, e) => {
            var n = e(9276),
              o = e(816),
              i = e(5391),
              a = e(1787).f;
            t.exports = function (t) {
              var r = n.Symbol || (n.Symbol = {});
              o(r, t) || a(r, t, { value: i.f(t) });
            };
          },
          7400: (t, r, e) => {
            var n = e(4229);
            t.exports = !n(function () {
              return (
                7 !=
                Object.defineProperty({}, 1, {
                  get: function () {
                    return 7;
                  },
                })[1]
              );
            });
          },
          2635: (t, r, e) => {
            var n = e(9859),
              o = e(5052),
              i = n.document,
              a = o(i) && o(i.createElement);
            t.exports = function (t) {
              return a ? i.createElement(t) : {};
            };
          },
          5694: t => {
            t.exports = {
              CSSRuleList: 0,
              CSSStyleDeclaration: 0,
              CSSValueList: 0,
              ClientRectList: 0,
              DOMRectList: 0,
              DOMStringList: 0,
              DOMTokenList: 1,
              DataTransferItemList: 0,
              FileList: 0,
              HTMLAllCollection: 0,
              HTMLCollection: 0,
              HTMLFormElement: 0,
              HTMLSelectElement: 0,
              MediaList: 0,
              MimeTypeArray: 0,
              NamedNodeMap: 0,
              NodeList: 1,
              PaintRequestList: 0,
              Plugin: 0,
              PluginArray: 0,
              SVGLengthList: 0,
              SVGNumberList: 0,
              SVGPathSegList: 0,
              SVGPointList: 0,
              SVGStringList: 0,
              SVGTransformList: 0,
              SourceBufferList: 0,
              StyleSheetList: 0,
              TextTrackCueList: 0,
              TextTrackList: 0,
              TouchList: 0,
            };
          },
          2023: (t, r, e) => {
            var n = e(598);
            t.exports = /(iphone|ipod|ipad).*applewebkit/i.test(n);
          },
          8801: (t, r, e) => {
            var n = e(7079),
              o = e(9859);
            t.exports = 'process' == n(o.process);
          },
          263: (t, r, e) => {
            var n = e(598);
            t.exports = /web0s(?!.*chrome)/i.test(n);
          },
          598: (t, r, e) => {
            var n = e(1333);
            t.exports = n('navigator', 'userAgent') || '';
          },
          6358: (t, r, e) => {
            var n,
              o,
              i = e(9859),
              a = e(598),
              c = i.process,
              u = c && c.versions,
              s = u && u.v8;
            s
              ? (o = (n = s.split('.'))[0] + n[1])
              : a &&
                (!(n = a.match(/Edge\/(\d+)/)) || n[1] >= 74) &&
                (n = a.match(/Chrome\/(\d+)/)) &&
                (o = n[1]),
              (t.exports = o && +o);
          },
          3837: t => {
            t.exports = [
              'constructor',
              'hasOwnProperty',
              'isPrototypeOf',
              'propertyIsEnumerable',
              'toLocaleString',
              'toString',
              'valueOf',
            ];
          },
          3103: (t, r, e) => {
            var n = e(9859),
              o = e(7933).f,
              i = e(5762),
              a = e(7487),
              c = e(2079),
              u = e(7081),
              s = e(6541);
            t.exports = function (t, r) {
              var e,
                f,
                l,
                p,
                v,
                h = t.target,
                y = t.global,
                d = t.stat;
              if ((e = y ? n : d ? n[h] || c(h, {}) : (n[h] || {}).prototype))
                for (f in r) {
                  if (
                    ((p = r[f]),
                    (l = t.noTargetGet ? (v = o(e, f)) && v.value : e[f]),
                    !s(y ? f : h + (d ? '.' : '#') + f, t.forced) &&
                      void 0 !== l)
                  ) {
                    if (typeof p == typeof l) continue;
                    u(p, l);
                  }
                  (t.sham || (l && l.sham)) && i(p, 'sham', !0), a(e, f, p, t);
                }
            };
          },
          4229: t => {
            t.exports = function (t) {
              try {
                return !!t();
              } catch (t) {
                return !0;
              }
            };
          },
          7636: (t, r, e) => {
            var n = e(3819);
            t.exports = function (t, r, e) {
              if ((n(t), void 0 === r)) return t;
              switch (e) {
                case 0:
                  return function () {
                    return t.call(r);
                  };
                case 1:
                  return function (e) {
                    return t.call(r, e);
                  };
                case 2:
                  return function (e, n) {
                    return t.call(r, e, n);
                  };
                case 3:
                  return function (e, n, o) {
                    return t.call(r, e, n, o);
                  };
              }
              return function () {
                return t.apply(r, arguments);
              };
            };
          },
          1333: (t, r, e) => {
            var n = e(9276),
              o = e(9859),
              i = function (t) {
                return 'function' == typeof t ? t : void 0;
              };
            t.exports = function (t, r) {
              return arguments.length < 2
                ? i(n[t]) || i(o[t])
                : (n[t] && n[t][r]) || (o[t] && o[t][r]);
            };
          },
          8830: (t, r, e) => {
            var n = e(1589),
              o = e(5495),
              i = e(95)('iterator');
            t.exports = function (t) {
              if (null != t) return t[i] || t['@@iterator'] || o[n(t)];
            };
          },
          9859: t => {
            var r = function (t) {
              return t && t.Math == Math && t;
            };
            t.exports =
              r('object' == typeof globalThis && globalThis) ||
              r('object' == typeof window && window) ||
              r('object' == typeof self && self) ||
              r('object' == typeof global && global) ||
              (function () {
                return this;
              })() ||
              Function('return this')();
          },
          816: t => {
            var r = {}.hasOwnProperty;
            t.exports = function (t, e) {
              return r.call(t, e);
            };
          },
          5977: t => {
            t.exports = {};
          },
          4665: (t, r, e) => {
            var n = e(9859);
            t.exports = function (t, r) {
              var e = n.console;
              e &&
                e.error &&
                (1 === arguments.length ? e.error(t) : e.error(t, r));
            };
          },
          3777: (t, r, e) => {
            var n = e(1333);
            t.exports = n('document', 'documentElement');
          },
          4394: (t, r, e) => {
            var n = e(7400),
              o = e(4229),
              i = e(2635);
            t.exports =
              !n &&
              !o(function () {
                return (
                  7 !=
                  Object.defineProperty(i('div'), 'a', {
                    get: function () {
                      return 7;
                    },
                  }).a
                );
              });
          },
          9337: (t, r, e) => {
            var n = e(4229),
              o = e(7079),
              i = ''.split;
            t.exports = n(function () {
              return !Object('z').propertyIsEnumerable(0);
            })
              ? function (t) {
                  return 'String' == o(t) ? i.call(t, '') : Object(t);
                }
              : Object;
          },
          8511: (t, r, e) => {
            var n = e(5353),
              o = Function.toString;
            'function' != typeof n.inspectSource &&
              (n.inspectSource = function (t) {
                return o.call(t);
              }),
              (t.exports = n.inspectSource);
          },
          6407: (t, r, e) => {
            var n,
              o,
              i,
              a = e(8694),
              c = e(9859),
              u = e(5052),
              s = e(5762),
              f = e(816),
              l = e(5353),
              p = e(4399),
              v = e(5977),
              h = c.WeakMap;
            if (a) {
              var y = l.state || (l.state = new h()),
                d = y.get,
                g = y.has,
                m = y.set;
              (n = function (t, r) {
                return (r.facade = t), m.call(y, t, r), r;
              }),
                (o = function (t) {
                  return d.call(y, t) || {};
                }),
                (i = function (t) {
                  return g.call(y, t);
                });
            } else {
              var x = p('state');
              (v[x] = !0),
                (n = function (t, r) {
                  return (r.facade = t), s(t, x, r), r;
                }),
                (o = function (t) {
                  return f(t, x) ? t[x] : {};
                }),
                (i = function (t) {
                  return f(t, x);
                });
            }
            t.exports = {
              set: n,
              get: o,
              has: i,
              enforce: function (t) {
                return i(t) ? o(t) : n(t, {});
              },
              getterFor: function (t) {
                return function (r) {
                  var e;
                  if (!u(r) || (e = o(r)).type !== t)
                    throw TypeError(
                      'Incompatible receiver, ' + t + ' required',
                    );
                  return e;
                };
              },
            };
          },
          1943: (t, r, e) => {
            var n = e(95),
              o = e(5495),
              i = n('iterator'),
              a = Array.prototype;
            t.exports = function (t) {
              return void 0 !== t && (o.Array === t || a[i] === t);
            };
          },
          3718: (t, r, e) => {
            var n = e(7079);
            t.exports =
              Array.isArray ||
              function (t) {
                return 'Array' == n(t);
              };
          },
          6541: (t, r, e) => {
            var n = e(4229),
              o = /#|\.prototype\./,
              i = function (t, r) {
                var e = c[a(t)];
                return (
                  e == s || (e != u && ('function' == typeof r ? n(r) : !!r))
                );
              },
              a = (i.normalize = function (t) {
                return String(t).replace(o, '.').toLowerCase();
              }),
              c = (i.data = {}),
              u = (i.NATIVE = 'N'),
              s = (i.POLYFILL = 'P');
            t.exports = i;
          },
          5052: t => {
            t.exports = function (t) {
              return 'object' == typeof t ? null !== t : 'function' == typeof t;
            };
          },
          4231: t => {
            t.exports = !1;
          },
          9003: (t, r, e) => {
            var n = e(1176),
              o = e(1943),
              i = e(4237),
              a = e(7636),
              c = e(8830),
              u = e(7281),
              s = function (t, r) {
                (this.stopped = t), (this.result = r);
              };
            t.exports = function (t, r, e) {
              var f,
                l,
                p,
                v,
                h,
                y,
                d,
                g = e && e.that,
                m = !(!e || !e.AS_ENTRIES),
                x = !(!e || !e.IS_ITERATOR),
                b = !(!e || !e.INTERRUPTED),
                w = a(r, g, 1 + m + b),
                S = function (t) {
                  return f && u(f), new s(!0, t);
                },
                O = function (t) {
                  return m
                    ? (n(t), b ? w(t[0], t[1], S) : w(t[0], t[1]))
                    : b
                    ? w(t, S)
                    : w(t);
                };
              if (x) f = t;
              else {
                if ('function' != typeof (l = c(t)))
                  throw TypeError('Target is not iterable');
                if (o(l)) {
                  for (p = 0, v = i(t.length); v > p; p++)
                    if ((h = O(t[p])) && h instanceof s) return h;
                  return new s(!1);
                }
                f = l.call(t);
              }
              for (y = f.next; !(d = y.call(f)).done; ) {
                try {
                  h = O(d.value);
                } catch (t) {
                  throw (u(f), t);
                }
                if ('object' == typeof h && h && h instanceof s) return h;
              }
              return new s(!1);
            };
          },
          7281: (t, r, e) => {
            var n = e(1176);
            t.exports = function (t) {
              var r = t.return;
              if (void 0 !== r) return n(r.call(t)).value;
            };
          },
          693: (t, r, e) => {
            'use strict';
            var n,
              o,
              i,
              a = e(4229),
              c = e(7567),
              u = e(5762),
              s = e(816),
              f = e(95),
              l = e(4231),
              p = f('iterator'),
              v = !1;
            [].keys &&
              ('next' in (i = [].keys())
                ? (o = c(c(i))) !== Object.prototype && (n = o)
                : (v = !0));
            var h =
              null == n ||
              a(function () {
                var t = {};
                return n[p].call(t) !== t;
              });
            h && (n = {}),
              (l && !h) ||
                s(n, p) ||
                u(n, p, function () {
                  return this;
                }),
              (t.exports = { IteratorPrototype: n, BUGGY_SAFARI_ITERATORS: v });
          },
          5495: t => {
            t.exports = {};
          },
          4794: (t, r, e) => {
            var n,
              o,
              i,
              a,
              c,
              u,
              s,
              f,
              l = e(9859),
              p = e(7933).f,
              v = e(5795).set,
              h = e(2023),
              y = e(263),
              d = e(8801),
              g = l.MutationObserver || l.WebKitMutationObserver,
              m = l.document,
              x = l.process,
              b = l.Promise,
              w = p(l, 'queueMicrotask'),
              S = w && w.value;
            S ||
              ((n = function () {
                var t, r;
                for (d && (t = x.domain) && t.exit(); o; ) {
                  (r = o.fn), (o = o.next);
                  try {
                    r();
                  } catch (t) {
                    throw (o ? a() : (i = void 0), t);
                  }
                }
                (i = void 0), t && t.enter();
              }),
              h || d || y || !g || !m
                ? b && b.resolve
                  ? ((s = b.resolve(void 0)),
                    (f = s.then),
                    (a = function () {
                      f.call(s, n);
                    }))
                  : (a = d
                      ? function () {
                          x.nextTick(n);
                        }
                      : function () {
                          v.call(l, n);
                        })
                : ((c = !0),
                  (u = m.createTextNode('')),
                  new g(n).observe(u, { characterData: !0 }),
                  (a = function () {
                    u.data = c = !c;
                  }))),
              (t.exports =
                S ||
                function (t) {
                  var r = { fn: t, next: void 0 };
                  i && (i.next = r), o || ((o = r), a()), (i = r);
                });
          },
          4226: (t, r, e) => {
            var n = e(9859);
            t.exports = n.Promise;
          },
          3839: (t, r, e) => {
            var n = e(8801),
              o = e(6358),
              i = e(4229);
            t.exports =
              !!Object.getOwnPropertySymbols &&
              !i(function () {
                return !Symbol.sham && (n ? 38 === o : o > 37 && o < 41);
              });
          },
          8694: (t, r, e) => {
            var n = e(9859),
              o = e(8511),
              i = n.WeakMap;
            t.exports = 'function' == typeof i && /native code/.test(o(i));
          },
          6485: (t, r, e) => {
            'use strict';
            var n = e(3819),
              o = function (t) {
                var r, e;
                (this.promise = new t(function (t, n) {
                  if (void 0 !== r || void 0 !== e)
                    throw TypeError('Bad Promise constructor');
                  (r = t), (e = n);
                })),
                  (this.resolve = n(r)),
                  (this.reject = n(e));
              };
            t.exports.f = function (t) {
              return new o(t);
            };
          },
          2391: (t, r, e) => {
            var n,
              o = e(1176),
              i = e(219),
              a = e(3837),
              c = e(5977),
              u = e(3777),
              s = e(2635),
              f = e(4399),
              l = f('IE_PROTO'),
              p = function () {},
              v = function (t) {
                return '<script>' + t + '</script>';
              },
              h = function () {
                try {
                  n = document.domain && new ActiveXObject('htmlfile');
                } catch (t) {}
                var t, r;
                h = n
                  ? (function (t) {
                      t.write(v('')), t.close();
                      var r = t.parentWindow.Object;
                      return (t = null), r;
                    })(n)
                  : (((r = s('iframe')).style.display = 'none'),
                    u.appendChild(r),
                    (r.src = String('javascript:')),
                    (t = r.contentWindow.document).open(),
                    t.write(v('document.F=Object')),
                    t.close(),
                    t.F);
                for (var e = a.length; e--; ) delete h.prototype[a[e]];
                return h();
              };
            (c[l] = !0),
              (t.exports =
                Object.create ||
                function (t, r) {
                  var e;
                  return (
                    null !== t
                      ? ((p.prototype = o(t)),
                        (e = new p()),
                        (p.prototype = null),
                        (e[l] = t))
                      : (e = h()),
                    void 0 === r ? e : i(e, r)
                  );
                });
          },
          219: (t, r, e) => {
            var n = e(7400),
              o = e(1787),
              i = e(1176),
              a = e(5632);
            t.exports = n
              ? Object.defineProperties
              : function (t, r) {
                  i(t);
                  for (var e, n = a(r), c = n.length, u = 0; c > u; )
                    o.f(t, (e = n[u++]), r[e]);
                  return t;
                };
          },
          1787: (t, r, e) => {
            var n = e(7400),
              o = e(4394),
              i = e(1176),
              a = e(2066),
              c = Object.defineProperty;
            r.f = n
              ? c
              : function (t, r, e) {
                  if ((i(t), (r = a(r, !0)), i(e), o))
                    try {
                      return c(t, r, e);
                    } catch (t) {}
                  if ('get' in e || 'set' in e)
                    throw TypeError('Accessors not supported');
                  return 'value' in e && (t[r] = e.value), t;
                };
          },
          7933: (t, r, e) => {
            var n = e(7400),
              o = e(9195),
              i = e(5358),
              a = e(905),
              c = e(2066),
              u = e(816),
              s = e(4394),
              f = Object.getOwnPropertyDescriptor;
            r.f = n
              ? f
              : function (t, r) {
                  if (((t = a(t)), (r = c(r, !0)), s))
                    try {
                      return f(t, r);
                    } catch (t) {}
                  if (u(t, r)) return i(!o.f.call(t, r), t[r]);
                };
          },
          166: (t, r, e) => {
            var n = e(905),
              o = e(8151).f,
              i = {}.toString,
              a =
                'object' == typeof window &&
                window &&
                Object.getOwnPropertyNames
                  ? Object.getOwnPropertyNames(window)
                  : [];
            t.exports.f = function (t) {
              return a && '[object Window]' == i.call(t)
                ? (function (t) {
                    try {
                      return o(t);
                    } catch (t) {
                      return a.slice();
                    }
                  })(t)
                : o(n(t));
            };
          },
          8151: (t, r, e) => {
            var n = e(140),
              o = e(3837).concat('length', 'prototype');
            r.f =
              Object.getOwnPropertyNames ||
              function (t) {
                return n(t, o);
              };
          },
          894: (t, r) => {
            r.f = Object.getOwnPropertySymbols;
          },
          7567: (t, r, e) => {
            var n = e(816),
              o = e(2991),
              i = e(4399),
              a = e(7528),
              c = i('IE_PROTO'),
              u = Object.prototype;
            t.exports = a
              ? Object.getPrototypeOf
              : function (t) {
                  return (
                    (t = o(t)),
                    n(t, c)
                      ? t[c]
                      : 'function' == typeof t.constructor &&
                        t instanceof t.constructor
                      ? t.constructor.prototype
                      : t instanceof Object
                      ? u
                      : null
                  );
                };
          },
          140: (t, r, e) => {
            var n = e(816),
              o = e(905),
              i = e(9540).indexOf,
              a = e(5977);
            t.exports = function (t, r) {
              var e,
                c = o(t),
                u = 0,
                s = [];
              for (e in c) !n(a, e) && n(c, e) && s.push(e);
              for (; r.length > u; )
                n(c, (e = r[u++])) && (~i(s, e) || s.push(e));
              return s;
            };
          },
          5632: (t, r, e) => {
            var n = e(140),
              o = e(3837);
            t.exports =
              Object.keys ||
              function (t) {
                return n(t, o);
              };
          },
          9195: (t, r) => {
            'use strict';
            var e = {}.propertyIsEnumerable,
              n = Object.getOwnPropertyDescriptor,
              o = n && !e.call({ 1: 2 }, 1);
            r.f = o
              ? function (t) {
                  var r = n(this, t);
                  return !!r && r.enumerable;
                }
              : e;
          },
          6540: (t, r, e) => {
            var n = e(1176),
              o = e(8505);
            t.exports =
              Object.setPrototypeOf ||
              ('__proto__' in {}
                ? (function () {
                    var t,
                      r = !1,
                      e = {};
                    try {
                      (t = Object.getOwnPropertyDescriptor(
                        Object.prototype,
                        '__proto__',
                      ).set).call(e, []),
                        (r = e instanceof Array);
                    } catch (t) {}
                    return function (e, i) {
                      return (
                        n(e), o(i), r ? t.call(e, i) : (e.__proto__ = i), e
                      );
                    };
                  })()
                : void 0);
          },
          4059: (t, r, e) => {
            'use strict';
            var n = e(1601),
              o = e(1589);
            t.exports = n
              ? {}.toString
              : function () {
                  return '[object ' + o(this) + ']';
                };
          },
          4826: (t, r, e) => {
            var n = e(1333),
              o = e(8151),
              i = e(894),
              a = e(1176);
            t.exports =
              n('Reflect', 'ownKeys') ||
              function (t) {
                var r = o.f(a(t)),
                  e = i.f;
                return e ? r.concat(e(t)) : r;
              };
          },
          9276: (t, r, e) => {
            var n = e(9859);
            t.exports = n;
          },
          4624: t => {
            t.exports = function (t) {
              try {
                return { error: !1, value: t() };
              } catch (t) {
                return { error: !0, value: t };
              }
            };
          },
          7757: (t, r, e) => {
            var n = e(1176),
              o = e(5052),
              i = e(6485);
            t.exports = function (t, r) {
              if ((n(t), o(r) && r.constructor === t)) return r;
              var e = i.f(t);
              return (0, e.resolve)(r), e.promise;
            };
          },
          8787: (t, r, e) => {
            var n = e(7487);
            t.exports = function (t, r, e) {
              for (var o in r) n(t, o, r[o], e);
              return t;
            };
          },
          7487: (t, r, e) => {
            var n = e(9859),
              o = e(5762),
              i = e(816),
              a = e(2079),
              c = e(8511),
              u = e(6407),
              s = u.get,
              f = u.enforce,
              l = String(String).split('String');
            (t.exports = function (t, r, e, c) {
              var u,
                s = !!c && !!c.unsafe,
                p = !!c && !!c.enumerable,
                v = !!c && !!c.noTargetGet;
              'function' == typeof e &&
                ('string' != typeof r || i(e, 'name') || o(e, 'name', r),
                (u = f(e)).source ||
                  (u.source = l.join('string' == typeof r ? r : ''))),
                t !== n
                  ? (s ? !v && t[r] && (p = !0) : delete t[r],
                    p ? (t[r] = e) : o(t, r, e))
                  : p
                  ? (t[r] = e)
                  : a(r, e);
            })(Function.prototype, 'toString', function () {
              return ('function' == typeof this && s(this).source) || c(this);
            });
          },
          8885: t => {
            t.exports = function (t) {
              if (null == t) throw TypeError("Can't call method on " + t);
              return t;
            };
          },
          2079: (t, r, e) => {
            var n = e(9859),
              o = e(5762);
            t.exports = function (t, r) {
              try {
                o(n, t, r);
              } catch (e) {
                n[t] = r;
              }
              return r;
            };
          },
          1832: (t, r, e) => {
            'use strict';
            var n = e(1333),
              o = e(1787),
              i = e(95),
              a = e(7400),
              c = i('species');
            t.exports = function (t) {
              var r = n(t),
                e = o.f;
              a &&
                r &&
                !r[c] &&
                e(r, c, {
                  configurable: !0,
                  get: function () {
                    return this;
                  },
                });
            };
          },
          4555: (t, r, e) => {
            var n = e(1787).f,
              o = e(816),
              i = e(95)('toStringTag');
            t.exports = function (t, r, e) {
              t &&
                !o((t = e ? t : t.prototype), i) &&
                n(t, i, { configurable: !0, value: r });
            };
          },
          4399: (t, r, e) => {
            var n = e(3036),
              o = e(1441),
              i = n('keys');
            t.exports = function (t) {
              return i[t] || (i[t] = o(t));
            };
          },
          5353: (t, r, e) => {
            var n = e(9859),
              o = e(2079),
              i = n['__core-js_shared__'] || o('__core-js_shared__', {});
            t.exports = i;
          },
          3036: (t, r, e) => {
            var n = e(4231),
              o = e(5353);
            (t.exports = function (t, r) {
              return o[t] || (o[t] = void 0 !== r ? r : {});
            })('versions', []).push({
              version: '3.10.0',
              mode: n ? 'pure' : 'global',
              copyright: '© 2021 Denis Pushkarev (zloirock.ru)',
            });
          },
          7942: (t, r, e) => {
            var n = e(1176),
              o = e(3819),
              i = e(95)('species');
            t.exports = function (t, r) {
              var e,
                a = n(t).constructor;
              return void 0 === a || null == (e = n(a)[i]) ? r : o(e);
            };
          },
          966: (t, r, e) => {
            var n = e(6051),
              o = e(8885),
              i = function (t) {
                return function (r, e) {
                  var i,
                    a,
                    c = String(o(r)),
                    u = n(e),
                    s = c.length;
                  return u < 0 || u >= s
                    ? t
                      ? ''
                      : void 0
                    : (i = c.charCodeAt(u)) < 55296 ||
                      i > 56319 ||
                      u + 1 === s ||
                      (a = c.charCodeAt(u + 1)) < 56320 ||
                      a > 57343
                    ? t
                      ? c.charAt(u)
                      : i
                    : t
                    ? c.slice(u, u + 2)
                    : a - 56320 + ((i - 55296) << 10) + 65536;
                };
              };
            t.exports = { codeAt: i(!1), charAt: i(!0) };
          },
          5795: (t, r, e) => {
            var n,
              o,
              i,
              a = e(9859),
              c = e(4229),
              u = e(7636),
              s = e(3777),
              f = e(2635),
              l = e(2023),
              p = e(8801),
              v = a.location,
              h = a.setImmediate,
              y = a.clearImmediate,
              d = a.process,
              g = a.MessageChannel,
              m = a.Dispatch,
              x = 0,
              b = {},
              w = function (t) {
                if (b.hasOwnProperty(t)) {
                  var r = b[t];
                  delete b[t], r();
                }
              },
              S = function (t) {
                return function () {
                  w(t);
                };
              },
              O = function (t) {
                w(t.data);
              },
              j = function (t) {
                a.postMessage(t + '', v.protocol + '//' + v.host);
              };
            (h && y) ||
              ((h = function (t) {
                for (var r = [], e = 1; arguments.length > e; )
                  r.push(arguments[e++]);
                return (
                  (b[++x] = function () {
                    ('function' == typeof t ? t : Function(t)).apply(void 0, r);
                  }),
                  n(x),
                  x
                );
              }),
              (y = function (t) {
                delete b[t];
              }),
              p
                ? (n = function (t) {
                    d.nextTick(S(t));
                  })
                : m && m.now
                ? (n = function (t) {
                    m.now(S(t));
                  })
                : g && !l
                ? ((i = (o = new g()).port2),
                  (o.port1.onmessage = O),
                  (n = u(i.postMessage, i, 1)))
                : a.addEventListener &&
                  'function' == typeof postMessage &&
                  !a.importScripts &&
                  v &&
                  'file:' !== v.protocol &&
                  !c(j)
                ? ((n = j), a.addEventListener('message', O, !1))
                : (n =
                    'onreadystatechange' in f('script')
                      ? function (t) {
                          s.appendChild(
                            f('script'),
                          ).onreadystatechange = function () {
                            s.removeChild(this), w(t);
                          };
                        }
                      : function (t) {
                          setTimeout(S(t), 0);
                        })),
              (t.exports = { set: h, clear: y });
          },
          3231: (t, r, e) => {
            var n = e(6051),
              o = Math.max,
              i = Math.min;
            t.exports = function (t, r) {
              var e = n(t);
              return e < 0 ? o(e + r, 0) : i(e, r);
            };
          },
          905: (t, r, e) => {
            var n = e(9337),
              o = e(8885);
            t.exports = function (t) {
              return n(o(t));
            };
          },
          6051: t => {
            var r = Math.ceil,
              e = Math.floor;
            t.exports = function (t) {
              return isNaN((t = +t)) ? 0 : (t > 0 ? e : r)(t);
            };
          },
          4237: (t, r, e) => {
            var n = e(6051),
              o = Math.min;
            t.exports = function (t) {
              return t > 0 ? o(n(t), 9007199254740991) : 0;
            };
          },
          2991: (t, r, e) => {
            var n = e(8885);
            t.exports = function (t) {
              return Object(n(t));
            };
          },
          2066: (t, r, e) => {
            var n = e(5052);
            t.exports = function (t, r) {
              if (!n(t)) return t;
              var e, o;
              if (
                r &&
                'function' == typeof (e = t.toString) &&
                !n((o = e.call(t)))
              )
                return o;
              if ('function' == typeof (e = t.valueOf) && !n((o = e.call(t))))
                return o;
              if (
                !r &&
                'function' == typeof (e = t.toString) &&
                !n((o = e.call(t)))
              )
                return o;
              throw TypeError("Can't convert object to primitive value");
            };
          },
          1601: (t, r, e) => {
            var n = {};
            (n[e(95)('toStringTag')] = 'z'),
              (t.exports = '[object z]' === String(n));
          },
          1441: t => {
            var r = 0,
              e = Math.random();
            t.exports = function (t) {
              return (
                'Symbol(' +
                String(void 0 === t ? '' : t) +
                ')_' +
                (++r + e).toString(36)
              );
            };
          },
          6969: (t, r, e) => {
            var n = e(3839);
            t.exports = n && !Symbol.sham && 'symbol' == typeof Symbol.iterator;
          },
          5391: (t, r, e) => {
            var n = e(95);
            r.f = n;
          },
          95: (t, r, e) => {
            var n = e(9859),
              o = e(3036),
              i = e(816),
              a = e(1441),
              c = e(3839),
              u = e(6969),
              s = o('wks'),
              f = n.Symbol,
              l = u ? f : (f && f.withoutSetter) || a;
            t.exports = function (t) {
              return (
                (i(s, t) && (c || 'string' == typeof s[t])) ||
                  (c && i(f, t) ? (s[t] = f[t]) : (s[t] = l('Symbol.' + t))),
                s[t]
              );
            };
          },
          8178: (t, r, e) => {
            'use strict';
            var n = e(3103),
              o = e(4229),
              i = e(3718),
              a = e(5052),
              c = e(2991),
              u = e(4237),
              s = e(2324),
              f = e(7501),
              l = e(1460),
              p = e(95),
              v = e(6358),
              h = p('isConcatSpreadable'),
              y =
                v >= 51 ||
                !o(function () {
                  var t = [];
                  return (t[h] = !1), t.concat()[0] !== t;
                }),
              d = l('concat'),
              g = function (t) {
                if (!a(t)) return !1;
                var r = t[h];
                return void 0 !== r ? !!r : i(t);
              };
            n(
              { target: 'Array', proto: !0, forced: !y || !d },
              {
                concat: function (t) {
                  var r,
                    e,
                    n,
                    o,
                    i,
                    a = c(this),
                    l = f(a, 0),
                    p = 0;
                  for (r = -1, n = arguments.length; r < n; r++)
                    if (g((i = -1 === r ? a : arguments[r]))) {
                      if (p + (o = u(i.length)) > 9007199254740991)
                        throw TypeError('Maximum allowed index exceeded');
                      for (e = 0; e < o; e++, p++) e in i && s(l, p, i[e]);
                    } else {
                      if (p >= 9007199254740991)
                        throw TypeError('Maximum allowed index exceeded');
                      s(l, p++, i);
                    }
                  return (l.length = p), l;
                },
              },
            );
          },
          7233: (t, r, e) => {
            var n = e(3103),
              o = e(507);
            n(
              {
                target: 'Array',
                stat: !0,
                forced: !e(4575)(function (t) {
                  Array.from(t);
                }),
              },
              { from: o },
            );
          },
          8145: (t, r, e) => {
            e(3103)({ target: 'Array', stat: !0 }, { isArray: e(3718) });
          },
          5735: (t, r, e) => {
            'use strict';
            var n = e(905),
              o = e(9736),
              i = e(5495),
              a = e(6407),
              c = e(7675),
              u = a.set,
              s = a.getterFor('Array Iterator');
            (t.exports = c(
              Array,
              'Array',
              function (t, r) {
                u(this, {
                  type: 'Array Iterator',
                  target: n(t),
                  index: 0,
                  kind: r,
                });
              },
              function () {
                var t = s(this),
                  r = t.target,
                  e = t.kind,
                  n = t.index++;
                return !r || n >= r.length
                  ? ((t.target = void 0), { value: void 0, done: !0 })
                  : 'keys' == e
                  ? { value: n, done: !1 }
                  : 'values' == e
                  ? { value: r[n], done: !1 }
                  : { value: [n, r[n]], done: !1 };
              },
              'values',
            )),
              (i.Arguments = i.Array),
              o('keys'),
              o('values'),
              o('entries');
          },
          3450: (t, r, e) => {
            'use strict';
            var n = e(3103),
              o = e(9996).map;
            n(
              { target: 'Array', proto: !0, forced: !e(1460)('map') },
              {
                map: function (t) {
                  return o(
                    this,
                    t,
                    arguments.length > 1 ? arguments[1] : void 0,
                  );
                },
              },
            );
          },
          2501: (t, r, e) => {
            'use strict';
            var n = e(3103),
              o = e(5052),
              i = e(3718),
              a = e(3231),
              c = e(4237),
              u = e(905),
              s = e(2324),
              f = e(95),
              l = e(1460)('slice'),
              p = f('species'),
              v = [].slice,
              h = Math.max;
            n(
              { target: 'Array', proto: !0, forced: !l },
              {
                slice: function (t, r) {
                  var e,
                    n,
                    f,
                    l = u(this),
                    y = c(l.length),
                    d = a(t, y),
                    g = a(void 0 === r ? y : r, y);
                  if (
                    i(l) &&
                    ('function' != typeof (e = l.constructor) ||
                    (e !== Array && !i(e.prototype))
                      ? o(e) && null === (e = e[p]) && (e = void 0)
                      : (e = void 0),
                    e === Array || void 0 === e)
                  )
                    return v.call(l, d, g);
                  for (
                    n = new (void 0 === e ? Array : e)(h(g - d, 0)), f = 0;
                    d < g;
                    d++, f++
                  )
                    d in l && s(n, f, l[d]);
                  return (n.length = f), n;
                },
              },
            );
          },
          6936: (t, r, e) => {
            var n = e(7400),
              o = e(1787).f,
              i = Function.prototype,
              a = i.toString,
              c = /^\s*function ([^ (]*)/;
            n &&
              !('name' in i) &&
              o(i, 'name', {
                configurable: !0,
                get: function () {
                  try {
                    return a.call(this).match(c)[1];
                  } catch (t) {
                    return '';
                  }
                },
              });
          },
          5094: (t, r, e) => {
            var n = e(3103),
              o = e(7400);
            n(
              { target: 'Object', stat: !0, forced: !o, sham: !o },
              { defineProperty: e(1787).f },
            );
          },
          8188: (t, r, e) => {
            var n = e(1601),
              o = e(7487),
              i = e(4059);
            n || o(Object.prototype, 'toString', i, { unsafe: !0 });
          },
          3439: (t, r, e) => {
            'use strict';
            var n,
              o,
              i,
              a,
              c = e(3103),
              u = e(4231),
              s = e(9859),
              f = e(1333),
              l = e(4226),
              p = e(7487),
              v = e(8787),
              h = e(4555),
              y = e(1832),
              d = e(5052),
              g = e(3819),
              m = e(7728),
              x = e(8511),
              b = e(9003),
              w = e(4575),
              S = e(7942),
              O = e(5795).set,
              j = e(4794),
              E = e(7757),
              A = e(4665),
              L = e(6485),
              T = e(4624),
              P = e(6407),
              _ = e(6541),
              k = e(95),
              I = e(8801),
              M = e(6358),
              N = k('species'),
              F = 'Promise',
              R = P.get,
              C = P.set,
              G = P.getterFor(F),
              D = l,
              V = s.TypeError,
              U = s.document,
              W = s.process,
              q = f('fetch'),
              z = L.f,
              B = z,
              H = !!(U && U.createEvent && s.dispatchEvent),
              Y = 'function' == typeof PromiseRejectionEvent,
              $ = _(F, function () {
                if (!(x(D) !== String(D))) {
                  if (66 === M) return !0;
                  if (!I && !Y) return !0;
                }
                if (u && !D.prototype.finally) return !0;
                if (M >= 51 && /native code/.test(D)) return !1;
                var t = D.resolve(1),
                  r = function (t) {
                    t(
                      function () {},
                      function () {},
                    );
                  };
                return (
                  ((t.constructor = {})[N] = r),
                  !(t.then(function () {}) instanceof r)
                );
              }),
              J =
                $ ||
                !w(function (t) {
                  D.all(t).catch(function () {});
                }),
              K = function (t) {
                var r;
                return !(!d(t) || 'function' != typeof (r = t.then)) && r;
              },
              Q = function (t, r) {
                if (!t.notified) {
                  t.notified = !0;
                  var e = t.reactions;
                  j(function () {
                    for (
                      var n = t.value, o = 1 == t.state, i = 0;
                      e.length > i;

                    ) {
                      var a,
                        c,
                        u,
                        s = e[i++],
                        f = o ? s.ok : s.fail,
                        l = s.resolve,
                        p = s.reject,
                        v = s.domain;
                      try {
                        f
                          ? (o ||
                              (2 === t.rejection && rt(t), (t.rejection = 1)),
                            !0 === f
                              ? (a = n)
                              : (v && v.enter(),
                                (a = f(n)),
                                v && (v.exit(), (u = !0))),
                            a === s.promise
                              ? p(V('Promise-chain cycle'))
                              : (c = K(a))
                              ? c.call(a, l, p)
                              : l(a))
                          : p(n);
                      } catch (t) {
                        v && !u && v.exit(), p(t);
                      }
                    }
                    (t.reactions = []),
                      (t.notified = !1),
                      r && !t.rejection && Z(t);
                  });
                }
              },
              X = function (t, r, e) {
                var n, o;
                H
                  ? (((n = U.createEvent('Event')).promise = r),
                    (n.reason = e),
                    n.initEvent(t, !1, !0),
                    s.dispatchEvent(n))
                  : (n = { promise: r, reason: e }),
                  !Y && (o = s['on' + t])
                    ? o(n)
                    : 'unhandledrejection' === t &&
                      A('Unhandled promise rejection', e);
              },
              Z = function (t) {
                O.call(s, function () {
                  var r,
                    e = t.facade,
                    n = t.value;
                  if (
                    tt(t) &&
                    ((r = T(function () {
                      I
                        ? W.emit('unhandledRejection', n, e)
                        : X('unhandledrejection', e, n);
                    })),
                    (t.rejection = I || tt(t) ? 2 : 1),
                    r.error)
                  )
                    throw r.value;
                });
              },
              tt = function (t) {
                return 1 !== t.rejection && !t.parent;
              },
              rt = function (t) {
                O.call(s, function () {
                  var r = t.facade;
                  I
                    ? W.emit('rejectionHandled', r)
                    : X('rejectionhandled', r, t.value);
                });
              },
              et = function (t, r, e) {
                return function (n) {
                  t(r, n, e);
                };
              },
              nt = function (t, r, e) {
                t.done ||
                  ((t.done = !0),
                  e && (t = e),
                  (t.value = r),
                  (t.state = 2),
                  Q(t, !0));
              },
              ot = function (t, r, e) {
                if (!t.done) {
                  (t.done = !0), e && (t = e);
                  try {
                    if (t.facade === r)
                      throw V("Promise can't be resolved itself");
                    var n = K(r);
                    n
                      ? j(function () {
                          var e = { done: !1 };
                          try {
                            n.call(r, et(ot, e, t), et(nt, e, t));
                          } catch (r) {
                            nt(e, r, t);
                          }
                        })
                      : ((t.value = r), (t.state = 1), Q(t, !1));
                  } catch (r) {
                    nt({ done: !1 }, r, t);
                  }
                }
              };
            $ &&
              ((D = function (t) {
                m(this, D, F), g(t), n.call(this);
                var r = R(this);
                try {
                  t(et(ot, r), et(nt, r));
                } catch (t) {
                  nt(r, t);
                }
              }),
              ((n = function (t) {
                C(this, {
                  type: F,
                  done: !1,
                  notified: !1,
                  parent: !1,
                  reactions: [],
                  rejection: !1,
                  state: 0,
                  value: void 0,
                });
              }).prototype = v(D.prototype, {
                then: function (t, r) {
                  var e = G(this),
                    n = z(S(this, D));
                  return (
                    (n.ok = 'function' != typeof t || t),
                    (n.fail = 'function' == typeof r && r),
                    (n.domain = I ? W.domain : void 0),
                    (e.parent = !0),
                    e.reactions.push(n),
                    0 != e.state && Q(e, !1),
                    n.promise
                  );
                },
                catch: function (t) {
                  return this.then(void 0, t);
                },
              })),
              (o = function () {
                var t = new n(),
                  r = R(t);
                (this.promise = t),
                  (this.resolve = et(ot, r)),
                  (this.reject = et(nt, r));
              }),
              (L.f = z = function (t) {
                return t === D || t === i ? new o(t) : B(t);
              }),
              u ||
                'function' != typeof l ||
                ((a = l.prototype.then),
                p(
                  l.prototype,
                  'then',
                  function (t, r) {
                    var e = this;
                    return new D(function (t, r) {
                      a.call(e, t, r);
                    }).then(t, r);
                  },
                  { unsafe: !0 },
                ),
                'function' == typeof q &&
                  c(
                    { global: !0, enumerable: !0, forced: !0 },
                    {
                      fetch: function (t) {
                        return E(D, q.apply(s, arguments));
                      },
                    },
                  ))),
              c({ global: !0, wrap: !0, forced: $ }, { Promise: D }),
              h(D, F, !1, !0),
              y(F),
              (i = f(F)),
              c(
                { target: F, stat: !0, forced: $ },
                {
                  reject: function (t) {
                    var r = z(this);
                    return r.reject.call(void 0, t), r.promise;
                  },
                },
              ),
              c(
                { target: F, stat: !0, forced: u || $ },
                {
                  resolve: function (t) {
                    return E(u && this === i ? D : this, t);
                  },
                },
              ),
              c(
                { target: F, stat: !0, forced: J },
                {
                  all: function (t) {
                    var r = this,
                      e = z(r),
                      n = e.resolve,
                      o = e.reject,
                      i = T(function () {
                        var e = g(r.resolve),
                          i = [],
                          a = 0,
                          c = 1;
                        b(t, function (t) {
                          var u = a++,
                            s = !1;
                          i.push(void 0),
                            c++,
                            e.call(r, t).then(function (t) {
                              s || ((s = !0), (i[u] = t), --c || n(i));
                            }, o);
                        }),
                          --c || n(i);
                      });
                    return i.error && o(i.value), e.promise;
                  },
                  race: function (t) {
                    var r = this,
                      e = z(r),
                      n = e.reject,
                      o = T(function () {
                        var o = g(r.resolve);
                        b(t, function (t) {
                          o.call(r, t).then(e.resolve, n);
                        });
                      });
                    return o.error && n(o.value), e.promise;
                  },
                },
              );
          },
          8673: (t, r, e) => {
            'use strict';
            var n = e(966).charAt,
              o = e(6407),
              i = e(7675),
              a = o.set,
              c = o.getterFor('String Iterator');
            i(
              String,
              'String',
              function (t) {
                a(this, {
                  type: 'String Iterator',
                  string: String(t),
                  index: 0,
                });
              },
              function () {
                var t,
                  r = c(this),
                  e = r.string,
                  o = r.index;
                return o >= e.length
                  ? { value: void 0, done: !0 }
                  : ((t = n(e, o)),
                    (r.index += t.length),
                    { value: t, done: !1 });
              },
            );
          },
          634: (t, r, e) => {
            'use strict';
            var n = e(3103),
              o = e(7400),
              i = e(9859),
              a = e(816),
              c = e(5052),
              u = e(1787).f,
              s = e(7081),
              f = i.Symbol;
            if (
              o &&
              'function' == typeof f &&
              (!('description' in f.prototype) || void 0 !== f().description)
            ) {
              var l = {},
                p = function () {
                  var t =
                      arguments.length < 1 || void 0 === arguments[0]
                        ? void 0
                        : String(arguments[0]),
                    r =
                      this instanceof p ? new f(t) : void 0 === t ? f() : f(t);
                  return '' === t && (l[r] = !0), r;
                };
              s(p, f);
              var v = (p.prototype = f.prototype);
              v.constructor = p;
              var h = v.toString,
                y = 'Symbol(test)' == String(f('test')),
                d = /^Symbol\((.*)\)[^)]+$/;
              u(v, 'description', {
                configurable: !0,
                get: function () {
                  var t = c(this) ? this.valueOf() : this,
                    r = h.call(t);
                  if (a(l, t)) return '';
                  var e = y ? r.slice(7, -1) : r.replace(d, '$1');
                  return '' === e ? void 0 : e;
                },
              }),
                n({ global: !0, forced: !0 }, { Symbol: p });
            }
          },
          796: (t, r, e) => {
            e(8423)('iterator');
          },
          4115: (t, r, e) => {
            'use strict';
            var n = e(3103),
              o = e(9859),
              i = e(1333),
              a = e(4231),
              c = e(7400),
              u = e(3839),
              s = e(6969),
              f = e(4229),
              l = e(816),
              p = e(3718),
              v = e(5052),
              h = e(1176),
              y = e(2991),
              d = e(905),
              g = e(2066),
              m = e(5358),
              x = e(2391),
              b = e(5632),
              w = e(8151),
              S = e(166),
              O = e(894),
              j = e(7933),
              E = e(1787),
              A = e(9195),
              L = e(5762),
              T = e(7487),
              P = e(3036),
              _ = e(4399),
              k = e(5977),
              I = e(1441),
              M = e(95),
              N = e(5391),
              F = e(8423),
              R = e(4555),
              C = e(6407),
              G = e(9996).forEach,
              D = _('hidden'),
              V = M('toPrimitive'),
              U = C.set,
              W = C.getterFor('Symbol'),
              q = Object.prototype,
              z = o.Symbol,
              B = i('JSON', 'stringify'),
              H = j.f,
              Y = E.f,
              $ = S.f,
              J = A.f,
              K = P('symbols'),
              Q = P('op-symbols'),
              X = P('string-to-symbol-registry'),
              Z = P('symbol-to-string-registry'),
              tt = P('wks'),
              rt = o.QObject,
              et = !rt || !rt.prototype || !rt.prototype.findChild,
              nt =
                c &&
                f(function () {
                  return (
                    7 !=
                    x(
                      Y({}, 'a', {
                        get: function () {
                          return Y(this, 'a', { value: 7 }).a;
                        },
                      }),
                    ).a
                  );
                })
                  ? function (t, r, e) {
                      var n = H(q, r);
                      n && delete q[r], Y(t, r, e), n && t !== q && Y(q, r, n);
                    }
                  : Y,
              ot = function (t, r) {
                var e = (K[t] = x(z.prototype));
                return (
                  U(e, { type: 'Symbol', tag: t, description: r }),
                  c || (e.description = r),
                  e
                );
              },
              it = s
                ? function (t) {
                    return 'symbol' == typeof t;
                  }
                : function (t) {
                    return Object(t) instanceof z;
                  },
              at = function (t, r, e) {
                t === q && at(Q, r, e), h(t);
                var n = g(r, !0);
                return (
                  h(e),
                  l(K, n)
                    ? (e.enumerable
                        ? (l(t, D) && t[D][n] && (t[D][n] = !1),
                          (e = x(e, { enumerable: m(0, !1) })))
                        : (l(t, D) || Y(t, D, m(1, {})), (t[D][n] = !0)),
                      nt(t, n, e))
                    : Y(t, n, e)
                );
              },
              ct = function (t, r) {
                h(t);
                var e = d(r),
                  n = b(e).concat(lt(e));
                return (
                  G(n, function (r) {
                    (c && !ut.call(e, r)) || at(t, r, e[r]);
                  }),
                  t
                );
              },
              ut = function (t) {
                var r = g(t, !0),
                  e = J.call(this, r);
                return (
                  !(this === q && l(K, r) && !l(Q, r)) &&
                  (!(
                    e ||
                    !l(this, r) ||
                    !l(K, r) ||
                    (l(this, D) && this[D][r])
                  ) ||
                    e)
                );
              },
              st = function (t, r) {
                var e = d(t),
                  n = g(r, !0);
                if (e !== q || !l(K, n) || l(Q, n)) {
                  var o = H(e, n);
                  return (
                    !o ||
                      !l(K, n) ||
                      (l(e, D) && e[D][n]) ||
                      (o.enumerable = !0),
                    o
                  );
                }
              },
              ft = function (t) {
                var r = $(d(t)),
                  e = [];
                return (
                  G(r, function (t) {
                    l(K, t) || l(k, t) || e.push(t);
                  }),
                  e
                );
              },
              lt = function (t) {
                var r = t === q,
                  e = $(r ? Q : d(t)),
                  n = [];
                return (
                  G(e, function (t) {
                    !l(K, t) || (r && !l(q, t)) || n.push(K[t]);
                  }),
                  n
                );
              };
            (u ||
              (T(
                (z = function () {
                  if (this instanceof z)
                    throw TypeError('Symbol is not a constructor');
                  var t =
                      arguments.length && void 0 !== arguments[0]
                        ? String(arguments[0])
                        : void 0,
                    r = I(t),
                    e = function (t) {
                      this === q && e.call(Q, t),
                        l(this, D) && l(this[D], r) && (this[D][r] = !1),
                        nt(this, r, m(1, t));
                    };
                  return (
                    c && et && nt(q, r, { configurable: !0, set: e }), ot(r, t)
                  );
                }).prototype,
                'toString',
                function () {
                  return W(this).tag;
                },
              ),
              T(z, 'withoutSetter', function (t) {
                return ot(I(t), t);
              }),
              (A.f = ut),
              (E.f = at),
              (j.f = st),
              (w.f = S.f = ft),
              (O.f = lt),
              (N.f = function (t) {
                return ot(M(t), t);
              }),
              c &&
                (Y(z.prototype, 'description', {
                  configurable: !0,
                  get: function () {
                    return W(this).description;
                  },
                }),
                a || T(q, 'propertyIsEnumerable', ut, { unsafe: !0 }))),
            n({ global: !0, wrap: !0, forced: !u, sham: !u }, { Symbol: z }),
            G(b(tt), function (t) {
              F(t);
            }),
            n(
              { target: 'Symbol', stat: !0, forced: !u },
              {
                for: function (t) {
                  var r = String(t);
                  if (l(X, r)) return X[r];
                  var e = z(r);
                  return (X[r] = e), (Z[e] = r), e;
                },
                keyFor: function (t) {
                  if (!it(t)) throw TypeError(t + ' is not a symbol');
                  if (l(Z, t)) return Z[t];
                },
                useSetter: function () {
                  et = !0;
                },
                useSimple: function () {
                  et = !1;
                },
              },
            ),
            n(
              { target: 'Object', stat: !0, forced: !u, sham: !c },
              {
                create: function (t, r) {
                  return void 0 === r ? x(t) : ct(x(t), r);
                },
                defineProperty: at,
                defineProperties: ct,
                getOwnPropertyDescriptor: st,
              },
            ),
            n(
              { target: 'Object', stat: !0, forced: !u },
              { getOwnPropertyNames: ft, getOwnPropertySymbols: lt },
            ),
            n(
              {
                target: 'Object',
                stat: !0,
                forced: f(function () {
                  O.f(1);
                }),
              },
              {
                getOwnPropertySymbols: function (t) {
                  return O.f(y(t));
                },
              },
            ),
            B) &&
              n(
                {
                  target: 'JSON',
                  stat: !0,
                  forced:
                    !u ||
                    f(function () {
                      var t = z();
                      return (
                        '[null]' != B([t]) ||
                        '{}' != B({ a: t }) ||
                        '{}' != B(Object(t))
                      );
                    }),
                },
                {
                  stringify: function (t, r, e) {
                    for (var n, o = [t], i = 1; arguments.length > i; )
                      o.push(arguments[i++]);
                    if (((n = r), (v(r) || void 0 !== t) && !it(t)))
                      return (
                        p(r) ||
                          (r = function (t, r) {
                            if (
                              ('function' == typeof n &&
                                (r = n.call(this, t, r)),
                              !it(r))
                            )
                              return r;
                          }),
                        (o[1] = r),
                        B.apply(null, o)
                      );
                  },
                },
              );
            z.prototype[V] || L(z.prototype, V, z.prototype.valueOf),
              R(z, 'Symbol'),
              (k[D] = !0);
          },
          6886: (t, r, e) => {
            var n = e(9859),
              o = e(5694),
              i = e(5735),
              a = e(5762),
              c = e(95),
              u = c('iterator'),
              s = c('toStringTag'),
              f = i.values;
            for (var l in o) {
              var p = n[l],
                v = p && p.prototype;
              if (v) {
                if (v[u] !== f)
                  try {
                    a(v, u, f);
                  } catch (t) {
                    v[u] = f;
                  }
                if ((v[s] || a(v, s, l), o[l]))
                  for (var h in i)
                    if (v[h] !== i[h])
                      try {
                        a(v, h, i[h]);
                      } catch (t) {
                        v[h] = i[h];
                      }
              }
            }
          },
          5047: t => {
            var r = (function (t) {
              'use strict';
              var r = Object.prototype,
                e = r.hasOwnProperty,
                n = 'function' == typeof Symbol ? Symbol : {},
                o = n.iterator || '@@iterator',
                i = n.asyncIterator || '@@asyncIterator',
                a = n.toStringTag || '@@toStringTag';
              function c(t, r, e) {
                return (
                  Object.defineProperty(t, r, {
                    value: e,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  }),
                  t[r]
                );
              }
              try {
                c({}, '');
              } catch (t) {
                c = function (t, r, e) {
                  return (t[r] = e);
                };
              }
              function u(t, r, e, n) {
                var o = r && r.prototype instanceof l ? r : l,
                  i = Object.create(o.prototype),
                  a = new O(n || []);
                return (
                  (i._invoke = (function (t, r, e) {
                    var n = 'suspendedStart';
                    return function (o, i) {
                      if ('executing' === n)
                        throw new Error('Generator is already running');
                      if ('completed' === n) {
                        if ('throw' === o) throw i;
                        return E();
                      }
                      for (e.method = o, e.arg = i; ; ) {
                        var a = e.delegate;
                        if (a) {
                          var c = b(a, e);
                          if (c) {
                            if (c === f) continue;
                            return c;
                          }
                        }
                        if ('next' === e.method) e.sent = e._sent = e.arg;
                        else if ('throw' === e.method) {
                          if ('suspendedStart' === n)
                            throw ((n = 'completed'), e.arg);
                          e.dispatchException(e.arg);
                        } else
                          'return' === e.method && e.abrupt('return', e.arg);
                        n = 'executing';
                        var u = s(t, r, e);
                        if ('normal' === u.type) {
                          if (
                            ((n = e.done ? 'completed' : 'suspendedYield'),
                            u.arg === f)
                          )
                            continue;
                          return { value: u.arg, done: e.done };
                        }
                        'throw' === u.type &&
                          ((n = 'completed'),
                          (e.method = 'throw'),
                          (e.arg = u.arg));
                      }
                    };
                  })(t, e, a)),
                  i
                );
              }
              function s(t, r, e) {
                try {
                  return { type: 'normal', arg: t.call(r, e) };
                } catch (t) {
                  return { type: 'throw', arg: t };
                }
              }
              t.wrap = u;
              var f = {};
              function l() {}
              function p() {}
              function v() {}
              var h = {};
              h[o] = function () {
                return this;
              };
              var y = Object.getPrototypeOf,
                d = y && y(y(j([])));
              d && d !== r && e.call(d, o) && (h = d);
              var g = (v.prototype = l.prototype = Object.create(h));
              function m(t) {
                ['next', 'throw', 'return'].forEach(function (r) {
                  c(t, r, function (t) {
                    return this._invoke(r, t);
                  });
                });
              }
              function x(t, r) {
                var n;
                this._invoke = function (o, i) {
                  function a() {
                    return new r(function (n, a) {
                      !(function n(o, i, a, c) {
                        var u = s(t[o], t, i);
                        if ('throw' !== u.type) {
                          var f = u.arg,
                            l = f.value;
                          return l &&
                            'object' == typeof l &&
                            e.call(l, '__await')
                            ? r.resolve(l.__await).then(
                                function (t) {
                                  n('next', t, a, c);
                                },
                                function (t) {
                                  n('throw', t, a, c);
                                },
                              )
                            : r.resolve(l).then(
                                function (t) {
                                  (f.value = t), a(f);
                                },
                                function (t) {
                                  return n('throw', t, a, c);
                                },
                              );
                        }
                        c(u.arg);
                      })(o, i, n, a);
                    });
                  }
                  return (n = n ? n.then(a, a) : a());
                };
              }
              function b(t, r) {
                var e = t.iterator[r.method];
                if (void 0 === e) {
                  if (((r.delegate = null), 'throw' === r.method)) {
                    if (
                      t.iterator.return &&
                      ((r.method = 'return'),
                      (r.arg = void 0),
                      b(t, r),
                      'throw' === r.method)
                    )
                      return f;
                    (r.method = 'throw'),
                      (r.arg = new TypeError(
                        "The iterator does not provide a 'throw' method",
                      ));
                  }
                  return f;
                }
                var n = s(e, t.iterator, r.arg);
                if ('throw' === n.type)
                  return (
                    (r.method = 'throw'),
                    (r.arg = n.arg),
                    (r.delegate = null),
                    f
                  );
                var o = n.arg;
                return o
                  ? o.done
                    ? ((r[t.resultName] = o.value),
                      (r.next = t.nextLoc),
                      'return' !== r.method &&
                        ((r.method = 'next'), (r.arg = void 0)),
                      (r.delegate = null),
                      f)
                    : o
                  : ((r.method = 'throw'),
                    (r.arg = new TypeError('iterator result is not an object')),
                    (r.delegate = null),
                    f);
              }
              function w(t) {
                var r = { tryLoc: t[0] };
                1 in t && (r.catchLoc = t[1]),
                  2 in t && ((r.finallyLoc = t[2]), (r.afterLoc = t[3])),
                  this.tryEntries.push(r);
              }
              function S(t) {
                var r = t.completion || {};
                (r.type = 'normal'), delete r.arg, (t.completion = r);
              }
              function O(t) {
                (this.tryEntries = [{ tryLoc: 'root' }]),
                  t.forEach(w, this),
                  this.reset(!0);
              }
              function j(t) {
                if (t) {
                  var r = t[o];
                  if (r) return r.call(t);
                  if ('function' == typeof t.next) return t;
                  if (!isNaN(t.length)) {
                    var n = -1,
                      i = function r() {
                        for (; ++n < t.length; )
                          if (e.call(t, n))
                            return (r.value = t[n]), (r.done = !1), r;
                        return (r.value = void 0), (r.done = !0), r;
                      };
                    return (i.next = i);
                  }
                }
                return { next: E };
              }
              function E() {
                return { value: void 0, done: !0 };
              }
              return (
                (p.prototype = g.constructor = v),
                (v.constructor = p),
                (p.displayName = c(v, a, 'GeneratorFunction')),
                (t.isGeneratorFunction = function (t) {
                  var r = 'function' == typeof t && t.constructor;
                  return (
                    !!r &&
                    (r === p ||
                      'GeneratorFunction' === (r.displayName || r.name))
                  );
                }),
                (t.mark = function (t) {
                  return (
                    Object.setPrototypeOf
                      ? Object.setPrototypeOf(t, v)
                      : ((t.__proto__ = v), c(t, a, 'GeneratorFunction')),
                    (t.prototype = Object.create(g)),
                    t
                  );
                }),
                (t.awrap = function (t) {
                  return { __await: t };
                }),
                m(x.prototype),
                (x.prototype[i] = function () {
                  return this;
                }),
                (t.AsyncIterator = x),
                (t.async = function (r, e, n, o, i) {
                  void 0 === i && (i = Promise);
                  var a = new x(u(r, e, n, o), i);
                  return t.isGeneratorFunction(e)
                    ? a
                    : a.next().then(function (t) {
                        return t.done ? t.value : a.next();
                      });
                }),
                m(g),
                c(g, a, 'Generator'),
                (g[o] = function () {
                  return this;
                }),
                (g.toString = function () {
                  return '[object Generator]';
                }),
                (t.keys = function (t) {
                  var r = [];
                  for (var e in t) r.push(e);
                  return (
                    r.reverse(),
                    function e() {
                      for (; r.length; ) {
                        var n = r.pop();
                        if (n in t) return (e.value = n), (e.done = !1), e;
                      }
                      return (e.done = !0), e;
                    }
                  );
                }),
                (t.values = j),
                (O.prototype = {
                  constructor: O,
                  reset: function (t) {
                    if (
                      ((this.prev = 0),
                      (this.next = 0),
                      (this.sent = this._sent = void 0),
                      (this.done = !1),
                      (this.delegate = null),
                      (this.method = 'next'),
                      (this.arg = void 0),
                      this.tryEntries.forEach(S),
                      !t)
                    )
                      for (var r in this)
                        't' === r.charAt(0) &&
                          e.call(this, r) &&
                          !isNaN(+r.slice(1)) &&
                          (this[r] = void 0);
                  },
                  stop: function () {
                    this.done = !0;
                    var t = this.tryEntries[0].completion;
                    if ('throw' === t.type) throw t.arg;
                    return this.rval;
                  },
                  dispatchException: function (t) {
                    if (this.done) throw t;
                    var r = this;
                    function n(e, n) {
                      return (
                        (a.type = 'throw'),
                        (a.arg = t),
                        (r.next = e),
                        n && ((r.method = 'next'), (r.arg = void 0)),
                        !!n
                      );
                    }
                    for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                      var i = this.tryEntries[o],
                        a = i.completion;
                      if ('root' === i.tryLoc) return n('end');
                      if (i.tryLoc <= this.prev) {
                        var c = e.call(i, 'catchLoc'),
                          u = e.call(i, 'finallyLoc');
                        if (c && u) {
                          if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                          if (this.prev < i.finallyLoc) return n(i.finallyLoc);
                        } else if (c) {
                          if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                        } else {
                          if (!u)
                            throw new Error(
                              'try statement without catch or finally',
                            );
                          if (this.prev < i.finallyLoc) return n(i.finallyLoc);
                        }
                      }
                    }
                  },
                  abrupt: function (t, r) {
                    for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                      var o = this.tryEntries[n];
                      if (
                        o.tryLoc <= this.prev &&
                        e.call(o, 'finallyLoc') &&
                        this.prev < o.finallyLoc
                      ) {
                        var i = o;
                        break;
                      }
                    }
                    i &&
                      ('break' === t || 'continue' === t) &&
                      i.tryLoc <= r &&
                      r <= i.finallyLoc &&
                      (i = null);
                    var a = i ? i.completion : {};
                    return (
                      (a.type = t),
                      (a.arg = r),
                      i
                        ? ((this.method = 'next'),
                          (this.next = i.finallyLoc),
                          f)
                        : this.complete(a)
                    );
                  },
                  complete: function (t, r) {
                    if ('throw' === t.type) throw t.arg;
                    return (
                      'break' === t.type || 'continue' === t.type
                        ? (this.next = t.arg)
                        : 'return' === t.type
                        ? ((this.rval = this.arg = t.arg),
                          (this.method = 'return'),
                          (this.next = 'end'))
                        : 'normal' === t.type && r && (this.next = r),
                      f
                    );
                  },
                  finish: function (t) {
                    for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                      var e = this.tryEntries[r];
                      if (e.finallyLoc === t)
                        return this.complete(e.completion, e.afterLoc), S(e), f;
                    }
                  },
                  catch: function (t) {
                    for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                      var e = this.tryEntries[r];
                      if (e.tryLoc === t) {
                        var n = e.completion;
                        if ('throw' === n.type) {
                          var o = n.arg;
                          S(e);
                        }
                        return o;
                      }
                    }
                    throw new Error('illegal catch attempt');
                  },
                  delegateYield: function (t, r, e) {
                    return (
                      (this.delegate = {
                        iterator: j(t),
                        resultName: r,
                        nextLoc: e,
                      }),
                      'next' === this.method && (this.arg = void 0),
                      f
                    );
                  },
                }),
                t
              );
            })(t.exports);
            try {
              regeneratorRuntime = r;
            } catch (t) {
              Function('r', 'regeneratorRuntime = r')(r);
            }
          },
          1568: (t, r, e) => {
            'use strict';
            e(8145),
              e(4115),
              e(634),
              e(796),
              e(8673),
              e(5735),
              e(6886),
              e(7233),
              e(2501),
              e(6936),
              e(5094),
              Object.defineProperty(r, '__esModule', { value: !0 }),
              (r.default = void 0),
              e(5047),
              e(8178),
              e(3450),
              e(3439),
              e(8188);
            var n,
              o = (n = e(5622)) && n.__esModule ? n : { default: n },
              i = e(621);
            function a(t) {
              return (
                (function (t) {
                  if (Array.isArray(t)) return c(t);
                })(t) ||
                (function (t) {
                  if (
                    'undefined' != typeof Symbol &&
                    Symbol.iterator in Object(t)
                  )
                    return Array.from(t);
                })(t) ||
                (function (t, r) {
                  if (!t) return;
                  if ('string' == typeof t) return c(t, r);
                  var e = Object.prototype.toString.call(t).slice(8, -1);
                  'Object' === e && t.constructor && (e = t.constructor.name);
                  if ('Map' === e || 'Set' === e) return Array.from(t);
                  if (
                    'Arguments' === e ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)
                  )
                    return c(t, r);
                })(t) ||
                (function () {
                  throw new TypeError(
                    'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                  );
                })()
              );
            }
            function c(t, r) {
              (null == r || r > t.length) && (r = t.length);
              for (var e = 0, n = new Array(r); e < r; e++) n[e] = t[e];
              return n;
            }
            function u(t, r, e, n, o, i, a) {
              try {
                var c = t[i](a),
                  u = c.value;
              } catch (t) {
                return void e(t);
              }
              c.done ? r(u) : Promise.resolve(u).then(n, o);
            }
            var s,
              f,
              l = {
                hooks: {
                  afterAllInstalled:
                    ((s = regeneratorRuntime.mark(function t(r) {
                      var e;
                      return regeneratorRuntime.wrap(function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (
                                (e = r.workspaces),
                                (t.next = 3),
                                (0, i.execute)(
                                  'yarn',
                                  [
                                    'prettier',
                                    '--loglevel',
                                    'silent',
                                    '--write',
                                    '--parser',
                                    'json',
                                  ].concat(
                                    a(
                                      e.map(function (t) {
                                        var r = t.cwd;
                                        return o.default.resolve(
                                          r,
                                          './package.json',
                                        );
                                      }),
                                    ),
                                  ),
                                )
                              );
                            case 3:
                            case 'end':
                              return t.stop();
                          }
                      }, t);
                    })),
                    (f = function () {
                      var t = this,
                        r = arguments;
                      return new Promise(function (e, n) {
                        var o = s.apply(t, r);
                        function i(t) {
                          u(o, e, n, i, a, 'next', t);
                        }
                        function a(t) {
                          u(o, e, n, i, a, 'throw', t);
                        }
                        i(void 0);
                      });
                    }),
                    function (t) {
                      return f.apply(this, arguments);
                    }),
                },
              };
            (r.default = l), (t.exports = r.default);
          },
          621: t => {
            'use strict';
            t.exports = require('@yarnpkg/shell');
          },
          5622: t => {
            'use strict';
            t.exports = require('path');
          },
        },
        r = {};
      var e = (function e(n) {
        var o = r[n];
        if (void 0 !== o) return o.exports;
        var i = (r[n] = { exports: {} });
        return t[n](i, i.exports, e), i.exports;
      })(1568);
      plugin = e;
    })();
    return plugin;
  },
};
