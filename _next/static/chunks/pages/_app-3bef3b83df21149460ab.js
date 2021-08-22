_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [30],
  {
    '/0+H': function (e, t, n) {
      'use strict'
      ;(t.__esModule = !0),
        (t.isInAmpMode = a),
        (t.useAmp = function () {
          return a(o.default.useContext(i.AmpStateContext))
        })
      var r,
        o = (r = n('q1tI')) && r.__esModule ? r : { default: r },
        i = n('lwAK')
      function a() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = e.ampFirst,
          n = void 0 !== t && t,
          r = e.hybrid,
          o = void 0 !== r && r,
          i = e.hasQuery,
          a = void 0 !== i && i
        return n || (o && a)
      }
    },
    '/9ee': function (e, t, n) {
      'use strict'
      function r(e) {
        if ('undefined' !== typeof Symbol && Symbol.iterator in Object(e))
          return Array.from(e)
      }
      n.d(t, 'a', function () {
        return r
      })
    },
    '1Nqh': function (e, t, n) {
      'use strict'
      ;(t.__esModule = !0),
        (t.default = function (e) {
          var t = (0, o.default)(e)
          return {
            getItem: function (e) {
              return new Promise(function (n, r) {
                n(t.getItem(e))
              })
            },
            setItem: function (e, n) {
              return new Promise(function (r, o) {
                r(t.setItem(e, n))
              })
            },
            removeItem: function (e) {
              return new Promise(function (n, r) {
                n(t.removeItem(e))
              })
            },
          }
        })
      var r,
        o = (r = n('ycJa')) && r.__esModule ? r : { default: r }
    },
    '2cAS': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return h
      }),
        n.d(t, 'c', function () {
          return O
        }),
        n.d(t, 'b', function () {
          return g
        })
      var r = n('o0o1'),
        o = n.n(r),
        i = n('HaE+'),
        a = (n('0FX9'), n('LcFi')),
        c = n('CtZX'),
        u = n('c/mw'),
        s = n('FU1e'),
        f = n('d9yM'),
        l = n('/J+T'),
        p = n('YtZZ'),
        d = n('3ovW'),
        b = n('aRBO'),
        y = n('an7V'),
        v = n('meUc'),
        m = n.n(v),
        h =
          (n('q1tI'),
          (function () {
            var e = Object(i.a)(
              o.a.mark(function e() {
                var t
                return o.a.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (window.web3 && window.web3.currentProvider) {
                            e.next = 3
                            break
                          }
                          return (
                            console.error(
                              '\ud83d\udc8e wallet(WalletConnect): kill session failed - no provider',
                            ),
                            e.abrupt('return', '')
                          )
                        case 3:
                          return (
                            (e.prev = 3),
                            (t = function (e, t) {
                              return new Promise(function (n, r) {
                                setTimeout(function () {
                                  var e = null
                                  'function' === typeof t && (e = t()), n(e)
                                }, e)
                              })
                            }),
                            (e.next = 7),
                            t(300, function () {
                              var e = window.web3.currentProvider.connector.uri
                              return (
                                console.info(
                                  '\ud83d\udc8e wallet: ws QRCode uri '.concat(
                                    e,
                                  ),
                                ),
                                e
                              )
                            })
                          )
                        case 7:
                          return e.abrupt('return', e.sent)
                        case 10:
                          return (
                            (e.prev = 10),
                            (e.t0 = e.catch(3)),
                            e.abrupt('return', '')
                          )
                        case 13:
                        case 'end':
                          return e.stop()
                      }
                  },
                  e,
                  null,
                  [[3, 10]],
                )
              }),
            )
            return function () {
              return e.apply(this, arguments)
            }
          })()),
        O = (function () {
          var e = Object(i.a)(
            o.a.mark(function e(t) {
              return o.a.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (window.web3 && window.web3.currentProvider) {
                          e.next = 3
                          break
                        }
                        return (
                          console.error(
                            '\ud83d\udc8e wallet(WalletConnect): kill session failed - no provider',
                          ),
                          e.abrupt('return', !1)
                        )
                      case 3:
                        return (
                          (e.prev = 3),
                          (e.next = 6),
                          window.web3.currentProvider.close()
                        )
                      case 6:
                        return e.abrupt('return', !0)
                      case 9:
                        return (
                          (e.prev = 9),
                          (e.t0 = e.catch(3)),
                          e.abrupt('return', !1)
                        )
                      case 12:
                      case 'end':
                        return e.stop()
                    }
                },
                e,
                null,
                [[3, 9]],
              )
            }),
          )
          return function (t) {
            return e.apply(this, arguments)
          }
        })(),
        g = function (e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
          Object(c.b)(Object(a.y)(s.a.WALLET_CONNECT))
          var n = s.h.getProvider(t)
          return (
            n.on('accountsChanged', function (t) {
              for (
                var n = arguments.length,
                  r = new Array(n > 1 ? n - 1 : 0),
                  o = 1;
                o < n;
                o++
              )
                r[o - 1] = arguments[o]
              console.info(
                '\ud83d\udc8e wallet(event): ws accountsChanged '.concat(t),
                r,
              )
              var i = t[0]
              i &&
                (console.info(
                  '\ud83d\udc8e wallet(event): ws connected to '.concat(i),
                ),
                Promise.all([
                  Object(c.b)(
                    Object(a.l)({
                      visible: !1,
                      type: p.b.WALLET_CONNECT_MODAL,
                    }),
                  ),
                  Object(c.b)(Object(a.f)(i)),
                  Object(c.b)(Object(a.x)(!0)),
                  Object(y.h)(),
                ]),
                b.a.success(e('connect_success')),
                Object(l.a)('web_metamask_connected', {
                  source: 'walletConnect',
                }),
                f.a.emit('update/connect', { isWalletConnect: !0 }))
            }),
            n.on('chainChanged', function (t) {
              console.info(
                '\ud83d\udc8e wallet(event): ws chainChanged '.concat(t),
              ),
                Object(c.b)(Object(a.m)(t)),
                Object(d.a)(e, t),
                Object(y.h)()
            }),
            n.once('disconnect', function () {
              console.info('\ud83d\udc8e wallet(event): ws disconnect'),
                b.a.error(e('connect_dismiss')),
                Promise.all([
                  Object(c.b)(Object(a.f)('')),
                  Object(c.b)(Object(a.x)(!1)),
                  Object(c.b)(Object(a.m)(u.b.MAINNET)),
                  Object(c.b)(Object(a.e)({ isClaiming: !1 })),
                ])
            }),
            n.once('close', function () {
              console.info('\ud83d\udc8e wallet(event): ws closed')
            }),
            n.enable(),
            (window.web3 = new m.a(n)),
            n
          )
        }
    },
    4: function (e, t, n) {
      n('74v/'), (e.exports = n('nOHt'))
    },
    '48fX': function (e, t, n) {
      var r = n('qhzo')
      e.exports = function (e, t) {
        if ('function' !== typeof t && null !== t)
          throw new TypeError(
            'Super expression must either be null or a function',
          )
        ;(e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          t && r(e, t)
      }
    },
    '74v/': function (e, t, n) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/_app',
        function () {
          return n('cha2')
        },
      ])
    },
    '8Kt/': function (e, t, n) {
      'use strict'
      n('oI91')
      ;(t.__esModule = !0), (t.defaultHead = f), (t.default = void 0)
      var r,
        o = (function (e) {
          if (e && e.__esModule) return e
          if (null === e || ('object' !== typeof e && 'function' !== typeof e))
            return { default: e }
          var t = s()
          if (t && t.has(e)) return t.get(e)
          var n = {},
            r = Object.defineProperty && Object.getOwnPropertyDescriptor
          for (var o in e)
            if (Object.prototype.hasOwnProperty.call(e, o)) {
              var i = r ? Object.getOwnPropertyDescriptor(e, o) : null
              i && (i.get || i.set)
                ? Object.defineProperty(n, o, i)
                : (n[o] = e[o])
            }
          ;(n.default = e), t && t.set(e, n)
          return n
        })(n('q1tI')),
        i = (r = n('Xuae')) && r.__esModule ? r : { default: r },
        a = n('lwAK'),
        c = n('FYa8'),
        u = n('/0+H')
      function s() {
        if ('function' !== typeof WeakMap) return null
        var e = new WeakMap()
        return (
          (s = function () {
            return e
          }),
          e
        )
      }
      function f() {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          t = [o.default.createElement('meta', { charSet: 'utf-8' })]
        return (
          e ||
            t.push(
              o.default.createElement('meta', {
                name: 'viewport',
                content: 'width=device-width',
              }),
            ),
          t
        )
      }
      function l(e, t) {
        return 'string' === typeof t || 'number' === typeof t
          ? e
          : t.type === o.default.Fragment
          ? e.concat(
              o.default.Children.toArray(t.props.children).reduce(function (
                e,
                t,
              ) {
                return 'string' === typeof t || 'number' === typeof t
                  ? e
                  : e.concat(t)
              },
              []),
            )
          : e.concat(t)
      }
      var p = ['name', 'httpEquiv', 'charSet', 'itemProp']
      function d(e, t) {
        return e
          .reduce(function (e, t) {
            var n = o.default.Children.toArray(t.props.children)
            return e.concat(n)
          }, [])
          .reduce(l, [])
          .reverse()
          .concat(f(t.inAmpMode))
          .filter(
            (function () {
              var e = new Set(),
                t = new Set(),
                n = new Set(),
                r = {}
              return function (o) {
                var i = !0
                if (
                  o.key &&
                  'number' !== typeof o.key &&
                  o.key.indexOf('$') > 0
                ) {
                  var a = o.key.slice(o.key.indexOf('$') + 1)
                  e.has(a) ? (i = !1) : e.add(a)
                }
                switch (o.type) {
                  case 'title':
                  case 'base':
                    t.has(o.type) ? (i = !1) : t.add(o.type)
                    break
                  case 'meta':
                    for (var c = 0, u = p.length; c < u; c++) {
                      var s = p[c]
                      if (o.props.hasOwnProperty(s))
                        if ('charSet' === s) n.has(s) ? (i = !1) : n.add(s)
                        else {
                          var f = o.props[s],
                            l = r[s] || new Set()
                          l.has(f) ? (i = !1) : (l.add(f), (r[s] = l))
                        }
                    }
                }
                return i
              }
            })(),
          )
          .reverse()
          .map(function (e, t) {
            var n = e.key || t
            return o.default.cloneElement(e, { key: n })
          })
      }
      function b(e) {
        var t = e.children,
          n = (0, o.useContext)(a.AmpStateContext),
          r = (0, o.useContext)(c.HeadManagerContext)
        return o.default.createElement(
          i.default,
          {
            reduceComponentsToState: d,
            headManager: r,
            inAmpMode: (0, u.isInAmpMode)(n),
          },
          t,
        )
      }
      b.rewind = function () {}
      var y = b
      t.default = y
    },
    'C+HQ': function (e, t, n) {
      'use strict'
      var r
      ;(t.__esModule = !0), (t.default = void 0)
      var o = (0,
      ((r = n('1Nqh')) && r.__esModule ? r : { default: r }).default)('local')
      t.default = o
    },
    FYa8: function (e, t, n) {
      'use strict'
      var r
      ;(t.__esModule = !0), (t.HeadManagerContext = void 0)
      var o = ((r = n('q1tI')) && r.__esModule
        ? r
        : { default: r }
      ).default.createContext({})
      t.HeadManagerContext = o
    },
    Ff2n: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return o
      })
      var r = n('VMWa')
      function o(e, t) {
        if (null == e) return {}
        var n,
          o,
          i = Object(r.a)(e, t)
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e)
          for (o = 0; o < a.length; o++)
            (n = a[o]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (i[n] = e[n]))
        }
        return i
      }
    },
    HOZL: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return r
      })
      var r = '0x0000000000000000000000000000000000000000'
    },
    KQm4: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return a
      })
      var r = n('/g2W')
      var o = n('/9ee'),
        i = n('aQ8+')
      function a(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return Object(r.a)(e)
          })(e) ||
          Object(o.a)(e) ||
          Object(i.a)(e) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
            )
          })()
        )
      }
    },
    N19j: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return c
      }),
        n.d(t, 'c', function () {
          return u
        }),
        n.d(t, 'a', function () {
          return s
        })
      n('rePB')
      var r = n('cIqF')
      var o = {
          Authorization: ''.concat(Object(r.a)()),
          'X-IDENTIFIER': 'im14x5LYrMuCYqiwSG5AxXZ9yFD9HvivVbJt5LF',
          'X-CLIENT-VERSION': 'ios:2.3.1.515:14',
          'X-DEVICE-TOKEN': 'EAB6AE2D-8E4F-4AC1-B838-092D031669FA',
          'X-LOCALE': 'en-US',
          'X-CURRENCY': 'CNY',
          'X-DEVICE-LOCALE': 'en',
          'X-APP-ID': 'im.token.app',
          'X-API-KEY': '3bdc0a49ba634a8e8f3333f8e66e0b84',
          'Content-Type': 'application/json',
        },
        i = '\u5f53\u524d\u4e0d\u662f imToken \u73af\u5883'
      window.imToken = window.imToken || {
        callPromisifyAPI: function (e, t) {
          switch (e) {
            case 'private.getHeaders':
              return Promise.resolve(o)
            default:
              return console.log(e, t), Promise.reject(new Error(i))
          }
        },
        callAPI: function (e, t, n) {
          switch (e) {
            case 'private.getHeaders':
              n && n(null, o)
            default:
              console.log(e, t), n && n(new Error(i), null)
          }
        },
      }
      var a = window.imToken,
        c = function () {
          return !!(window && window.imToken && window.imToken.agent)
        }
      function u(e) {
        return a.callPromisifyAPI('navigator.routeTo', e).catch(function (e) {
          return console.warn(e)
        })
      }
      function s(e) {
        c()
          ? u({ screen: 'Tokenlon', passProps: { xChainReceiver: e } })
          : (window.location.href = ''.concat(
              window.location.origin,
              '/instant',
            ))
      }
    },
    T0f4: function (e, t) {
      function n(t) {
        return (
          (e.exports = n = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
              }),
          n(t)
        )
      }
      e.exports = n
    },
    Xuae: function (e, t, n) {
      'use strict'
      var r = n('mPvQ'),
        o = n('/GRZ'),
        i = n('i2R6'),
        a = (n('qXWd'), n('48fX')),
        c = n('tCBg'),
        u = n('T0f4')
      function s(e) {
        var t = (function () {
          if ('undefined' === typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ('function' === typeof Proxy) return !0
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {}),
              ),
              !0
            )
          } catch (e) {
            return !1
          }
        })()
        return function () {
          var n,
            r = u(e)
          if (t) {
            var o = u(this).constructor
            n = Reflect.construct(r, arguments, o)
          } else n = r.apply(this, arguments)
          return c(this, n)
        }
      }
      ;(t.__esModule = !0), (t.default = void 0)
      var f = n('q1tI'),
        l = (function (e) {
          a(n, e)
          var t = s(n)
          function n(e) {
            var i
            return (
              o(this, n),
              ((i = t.call(this, e))._hasHeadManager = void 0),
              (i.emitChange = function () {
                i._hasHeadManager &&
                  i.props.headManager.updateHead(
                    i.props.reduceComponentsToState(
                      r(i.props.headManager.mountedInstances),
                      i.props,
                    ),
                  )
              }),
              (i._hasHeadManager =
                i.props.headManager && i.props.headManager.mountedInstances),
              i
            )
          }
          return (
            i(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  this._hasHeadManager &&
                    this.props.headManager.mountedInstances.add(this),
                    this.emitChange()
                },
              },
              {
                key: 'componentDidUpdate',
                value: function () {
                  this.emitChange()
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  this._hasHeadManager &&
                    this.props.headManager.mountedInstances.delete(this),
                    this.emitChange()
                },
              },
              {
                key: 'render',
                value: function () {
                  return null
                },
              },
            ]),
            n
          )
        })(f.Component)
      t.default = l
    },
    YtZZ: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return l
      }),
        n.d(t, 'b', function () {
          return r
        })
      var r,
        o = n('q1tI'),
        i = n.n(o),
        a = n('i8i4'),
        c = n('i91u'),
        u = (n('kAU4'), n('znru')),
        s = n('zl+k'),
        f = i.a.createElement,
        l = function (e) {
          var t = Object(o.useRef)(),
            n = e.children,
            r = e.onClose,
            i = e.visible,
            l = e.theme,
            p = e.portalCls,
            d = Object(u.c)('modal', function () {
              return (
                document.querySelector('.main-area-container') ||
                (p && document.querySelector(p))
              )
            }),
            b = function () {
              r && r()
            }
          return (
            Object(o.useEffect)(
              function () {
                return (
                  Object(s.f)(i),
                  function () {
                    Object(s.f)(!1)
                  }
                )
              },
              [i],
            ),
            Object(u.b)(t, b),
            i && d
              ? Object(a.createPortal)(
                  f(
                    'div',
                    { className: 'common-modal-container' },
                    f(
                      'div',
                      { className: 'common-modal-inner' },
                      f(
                        'div',
                        {
                          className: 'common-state-modal '.concat(l || ''),
                          ref: t,
                        },
                        f('img', {
                          className: 'modal-close',
                          src: c.imUtils.is.mobile()
                            ? '/images/modal-close.svg'
                            : '/images/modal-close-white.svg',
                          onClick: b,
                        }),
                        n,
                      ),
                    ),
                  ),
                  d,
                )
              : null
          )
        }
      !(function (e) {
        ;(e[(e.APPROVAL_MODAL = 0)] = 'APPROVAL_MODAL'),
          (e[(e.SIGN_MODAL = 1)] = 'SIGN_MODAL'),
          (e[(e.WALLET_CONNECT_MODAL = 2)] = 'WALLET_CONNECT_MODAL'),
          (e[(e.WALLET_CONNECT_FULLPAGE_MODAL = 3)] =
            'WALLET_CONNECT_FULLPAGE_MODAL'),
          (e[(e.CHARGE_FEE_MODAL = 4)] = 'CHARGE_FEE_MODAL'),
          (e[(e.SLIPPAGE_MODAL = 5)] = 'SLIPPAGE_MODAL'),
          (e[(e.TRADE_DETAIL_MODAL = 6)] = 'TRADE_DETAIL_MODAL'),
          (e[(e.BUY_BACK_MODAL = 7)] = 'BUY_BACK_MODAL'),
          (e[(e.SIMPLE_STATUS_MODAL = 8)] = 'SIMPLE_STATUS_MODAL')
      })(r || (r = {}))
    },
    cha2: function (e, t, n) {
      'use strict'
      n.r(t)
      var r = n('Ff2n'),
        o = n('o0o1'),
        i = n.n(o),
        a = n('HaE+'),
        c = n('ODXe'),
        u = n('q1tI'),
        s = n.n(u),
        f = n('/MKj'),
        l = n('KQm4'),
        p = n('ANjH')
      function d(e) {
        return function (t) {
          var n = t.dispatch,
            r = t.getState
          return function (t) {
            return function (o) {
              return 'function' === typeof o ? o(n, r, e) : t(o)
            }
          }
        }
      }
      var b = d()
      b.withExtraArgument = d
      var y = b,
        v = 'persist:',
        m = 'persist/FLUSH',
        h = 'persist/REHYDRATE',
        O = 'persist/PAUSE',
        g = 'persist/PERSIST',
        w = 'persist/PURGE',
        j = 'persist/REGISTER'
      function P(e) {
        return (P =
          'function' === typeof Symbol && 'symbol' === typeof Symbol.iterator
            ? function (e) {
                return typeof e
              }
            : function (e) {
                return e &&
                  'function' === typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e
              })(e)
      }
      function A(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function k(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        )
      }
      function _(e, t, n, r) {
        r.debug
        var o = (function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {}
            t % 2
              ? A(n, !0).forEach(function (t) {
                  k(e, t, n[t])
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : A(n).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  )
                })
          }
          return e
        })({}, n)
        return (
          e &&
            'object' === P(e) &&
            Object.keys(e).forEach(function (r) {
              '_persist' !== r && t[r] === n[r] && (o[r] = e[r])
            }),
          o
        )
      }
      function S(e) {
        var t,
          n = e.blacklist || null,
          r = e.whitelist || null,
          o = e.transforms || [],
          i = e.throttle || 0,
          a = ''.concat(void 0 !== e.keyPrefix ? e.keyPrefix : v).concat(e.key),
          c = e.storage
        t =
          !1 === e.serialize
            ? function (e) {
                return e
              }
            : 'function' === typeof e.serialize
            ? e.serialize
            : E
        var u = e.writeFailHandler || null,
          s = {},
          f = {},
          l = [],
          p = null,
          d = null
        function b() {
          if (0 === l.length) return p && clearInterval(p), void (p = null)
          var e = l.shift(),
            n = o.reduce(function (t, n) {
              return n.in(t, e, s)
            }, s[e])
          if (void 0 !== n)
            try {
              f[e] = t(n)
            } catch (r) {
              console.error(
                'redux-persist/createPersistoid: error serializing state',
                r,
              )
            }
          else delete f[e]
          0 === l.length &&
            (Object.keys(f).forEach(function (e) {
              void 0 === s[e] && delete f[e]
            }),
            (d = c.setItem(a, t(f)).catch(m)))
        }
        function y(e) {
          return (
            (!r || -1 !== r.indexOf(e) || '_persist' === e) &&
            (!n || -1 === n.indexOf(e))
          )
        }
        function m(e) {
          u && u(e)
        }
        return {
          update: function (e) {
            Object.keys(e).forEach(function (t) {
              y(t) && s[t] !== e[t] && -1 === l.indexOf(t) && l.push(t)
            }),
              Object.keys(s).forEach(function (t) {
                void 0 === e[t] &&
                  y(t) &&
                  -1 === l.indexOf(t) &&
                  void 0 !== s[t] &&
                  l.push(t)
              }),
              null === p && (p = setInterval(b, i)),
              (s = e)
          },
          flush: function () {
            for (; 0 !== l.length; ) b()
            return d || Promise.resolve()
          },
        }
      }
      function E(e) {
        return JSON.stringify(e)
      }
      function C(e) {
        var t,
          n = e.transforms || [],
          r = ''.concat(void 0 !== e.keyPrefix ? e.keyPrefix : v).concat(e.key),
          o = e.storage
        e.debug
        return (
          (t =
            !1 === e.deserialize
              ? function (e) {
                  return e
                }
              : 'function' === typeof e.deserialize
              ? e.deserialize
              : M),
          o.getItem(r).then(function (e) {
            if (e)
              try {
                var r = {},
                  o = t(e)
                return (
                  Object.keys(o).forEach(function (e) {
                    r[e] = n.reduceRight(function (t, n) {
                      return n.out(t, e, o)
                    }, t(o[e]))
                  }),
                  r
                )
              } catch (i) {
                throw i
              }
          })
        )
      }
      function M(e) {
        return JSON.parse(e)
      }
      function x(e) {
        0
      }
      function T(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function I(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? T(n, !0).forEach(function (t) {
                D(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : T(n).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t),
                )
              })
        }
        return e
      }
      function D(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        )
      }
      function L(e, t) {
        if (null == e) return {}
        var n,
          r,
          o = (function (e, t) {
            if (null == e) return {}
            var n,
              r,
              o = {},
              i = Object.keys(e)
            for (r = 0; r < i.length; r++)
              (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n])
            return o
          })(e, t)
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e)
          for (r = 0; r < i.length; r++)
            (n = i[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (o[n] = e[n]))
        }
        return o
      }
      function N(e, t) {
        var n = void 0 !== e.version ? e.version : -1,
          r = (e.debug, void 0 === e.stateReconciler ? _ : e.stateReconciler),
          o = e.getStoredState || C,
          i = void 0 !== e.timeout ? e.timeout : 5e3,
          a = null,
          c = !1,
          u = !0,
          s = function (e) {
            return e._persist.rehydrated && a && !u && a.update(e), e
          }
        return function (f, l) {
          var p = f || {},
            d = p._persist,
            b = L(p, ['_persist'])
          if (l.type === g) {
            var y = !1,
              j = function (t, n) {
                y || (l.rehydrate(e.key, t, n), (y = !0))
              }
            if (
              (i &&
                setTimeout(function () {
                  !y &&
                    j(
                      void 0,
                      new Error(
                        'redux-persist: persist timed out for persist key "'.concat(
                          e.key,
                          '"',
                        ),
                      ),
                    )
                }, i),
              (u = !1),
              a || (a = S(e)),
              d)
            )
              return I({}, t(b, l), { _persist: d })
            if (
              'function' !== typeof l.rehydrate ||
              'function' !== typeof l.register
            )
              throw new Error(
                'redux-persist: either rehydrate or register is not a function on the PERSIST action. This can happen if the action is being replayed. This is an unexplored use case, please open an issue and we will figure out a resolution.',
              )
            return (
              l.register(e.key),
              o(e).then(
                function (t) {
                  ;(
                    e.migrate ||
                    function (e, t) {
                      return Promise.resolve(e)
                    }
                  )(t, n).then(
                    function (e) {
                      j(e)
                    },
                    function (e) {
                      j(void 0, e)
                    },
                  )
                },
                function (e) {
                  j(void 0, e)
                },
              ),
              I({}, t(b, l), { _persist: { version: n, rehydrated: !1 } })
            )
          }
          if (l.type === w)
            return (
              (c = !0),
              l.result(
                (function (e) {
                  var t = e.storage,
                    n = ''
                      .concat(void 0 !== e.keyPrefix ? e.keyPrefix : v)
                      .concat(e.key)
                  return t.removeItem(n, x)
                })(e),
              ),
              I({}, t(b, l), { _persist: d })
            )
          if (l.type === m)
            return l.result(a && a.flush()), I({}, t(b, l), { _persist: d })
          if (l.type === O) u = !0
          else if (l.type === h) {
            if (c) return I({}, b, { _persist: I({}, d, { rehydrated: !0 }) })
            if (l.key === e.key) {
              var P = t(b, l),
                A = l.payload,
                k = I({}, !1 !== r && void 0 !== A ? r(A, f, P, e) : P, {
                  _persist: I({}, d, { rehydrated: !0 }),
                })
              return s(k)
            }
          }
          if (!d) return t(f, l)
          var _ = t(b, l)
          return _ === b ? f : s(I({}, _, { _persist: d }))
        }
      }
      function R(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) {
              for (var t = 0, n = new Array(e.length); t < e.length; t++)
                n[t] = e[t]
              return n
            }
          })(e) ||
          (function (e) {
            if (
              Symbol.iterator in Object(e) ||
              '[object Arguments]' === Object.prototype.toString.call(e)
            )
              return Array.from(e)
          })(e) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to spread non-iterable instance',
            )
          })()
        )
      }
      function U(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function F(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? U(n, !0).forEach(function (t) {
                H(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : U(n).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t),
                )
              })
        }
        return e
      }
      function H(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        )
      }
      var W = { registry: [], bootstrapped: !1 },
        q = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : W,
            t = arguments.length > 1 ? arguments[1] : void 0
          switch (t.type) {
            case j:
              return F({}, e, { registry: [].concat(R(e.registry), [t.key]) })
            case h:
              var n = e.registry.indexOf(t.key),
                r = R(e.registry)
              return (
                r.splice(n, 1),
                F({}, e, { registry: r, bootstrapped: 0 === r.length })
              )
            default:
              return e
          }
        }
      var z = n('C+HQ'),
        B = n.n(z),
        X = n('CtZX'),
        K = n('rePB')
      function V(e) {
        for (
          var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1;
          r < t;
          r++
        )
          n[r - 1] = arguments[r]
        throw Error(
          '[Immer] minified error nr: ' +
            e +
            (n.length
              ? ' ' +
                n
                  .map(function (e) {
                    return "'" + e + "'"
                  })
                  .join(',')
              : '') +
            '. Find the full error at: https://bit.ly/3cXEKWf',
        )
      }
      function Y(e) {
        return !!e && !!e[Le]
      }
      function G(e) {
        return (
          !!e &&
          ((function (e) {
            if (!e || 'object' != typeof e) return !1
            var t = Object.getPrototypeOf(e)
            return !t || t === Object.prototype
          })(e) ||
            Array.isArray(e) ||
            !!e[De] ||
            !!e.constructor[De] ||
            ne(e) ||
            re(e))
        )
      }
      function Z(e, t, n) {
        void 0 === n && (n = !1),
          0 === J(e)
            ? (n ? Object.keys : Ne)(e).forEach(function (r) {
                ;(n && 'symbol' == typeof r) || t(r, e[r], e)
              })
            : e.forEach(function (n, r) {
                return t(r, n, e)
              })
      }
      function J(e) {
        var t = e[Le]
        return t
          ? t.i > 3
            ? t.i - 4
            : t.i
          : Array.isArray(e)
          ? 1
          : ne(e)
          ? 2
          : re(e)
          ? 3
          : 0
      }
      function Q(e, t) {
        return 2 === J(e)
          ? e.has(t)
          : Object.prototype.hasOwnProperty.call(e, t)
      }
      function $(e, t) {
        return 2 === J(e) ? e.get(t) : e[t]
      }
      function ee(e, t, n) {
        var r = J(e)
        2 === r ? e.set(t, n) : 3 === r ? (e.delete(t), e.add(n)) : (e[t] = n)
      }
      function te(e, t) {
        return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t
      }
      function ne(e) {
        return Me && e instanceof Map
      }
      function re(e) {
        return xe && e instanceof Set
      }
      function oe(e) {
        return e.o || e.t
      }
      function ie(e) {
        if (Array.isArray(e)) return Array.prototype.slice.call(e)
        var t = Re(e)
        delete t[Le]
        for (var n = Ne(t), r = 0; r < n.length; r++) {
          var o = n[r],
            i = t[o]
          !1 === i.writable && ((i.writable = !0), (i.configurable = !0)),
            (i.get || i.set) &&
              (t[o] = {
                configurable: !0,
                writable: !0,
                enumerable: i.enumerable,
                value: e[o],
              })
        }
        return Object.create(Object.getPrototypeOf(e), t)
      }
      function ae(e, t) {
        return (
          void 0 === t && (t = !1),
          ue(e) ||
            Y(e) ||
            !G(e) ||
            (J(e) > 1 && (e.set = e.add = e.clear = e.delete = ce),
            Object.freeze(e),
            t &&
              Z(
                e,
                function (e, t) {
                  return ae(t, !0)
                },
                !0,
              )),
          e
        )
      }
      function ce() {
        V(2)
      }
      function ue(e) {
        return null == e || 'object' != typeof e || Object.isFrozen(e)
      }
      function se(e) {
        var t = Ue[e]
        return t || V(18, e), t
      }
      function fe() {
        return Ee
      }
      function le(e, t) {
        t && (se('Patches'), (e.u = []), (e.s = []), (e.v = t))
      }
      function pe(e) {
        de(e), e.p.forEach(ye), (e.p = null)
      }
      function de(e) {
        e === Ee && (Ee = e.l)
      }
      function be(e) {
        return (Ee = { p: [], l: Ee, h: e, m: !0, _: 0 })
      }
      function ye(e) {
        var t = e[Le]
        0 === t.i || 1 === t.i ? t.j() : (t.g = !0)
      }
      function ve(e, t) {
        t._ = t.p.length
        var n = t.p[0],
          r = void 0 !== e && e !== n
        return (
          t.h.O || se('ES5').S(t, e, r),
          r
            ? (n[Le].P && (pe(t), V(4)),
              G(e) && ((e = me(t, e)), t.l || Oe(t, e)),
              t.u && se('Patches').M(n[Le], e, t.u, t.s))
            : (e = me(t, n, [])),
          pe(t),
          t.u && t.v(t.u, t.s),
          e !== Ie ? e : void 0
        )
      }
      function me(e, t, n) {
        if (ue(t)) return t
        var r = t[Le]
        if (!r)
          return (
            Z(
              t,
              function (o, i) {
                return he(e, r, t, o, i, n)
              },
              !0,
            ),
            t
          )
        if (r.A !== e) return t
        if (!r.P) return Oe(e, r.t, !0), r.t
        if (!r.I) {
          ;(r.I = !0), r.A._--
          var o = 4 === r.i || 5 === r.i ? (r.o = ie(r.k)) : r.o
          Z(3 === r.i ? new Set(o) : o, function (t, i) {
            return he(e, r, o, t, i, n)
          }),
            Oe(e, o, !1),
            n && e.u && se('Patches').R(r, n, e.u, e.s)
        }
        return r.o
      }
      function he(e, t, n, r, o, i) {
        if (Y(o)) {
          var a = me(
            e,
            o,
            i && t && 3 !== t.i && !Q(t.D, r) ? i.concat(r) : void 0,
          )
          if ((ee(n, r, a), !Y(a))) return
          e.m = !1
        }
        if (G(o) && !ue(o)) {
          if (!e.h.N && e._ < 1) return
          me(e, o), (t && t.A.l) || Oe(e, o)
        }
      }
      function Oe(e, t, n) {
        void 0 === n && (n = !1), e.h.N && e.m && ae(t, n)
      }
      function ge(e, t) {
        var n = e[Le]
        return (n ? oe(n) : e)[t]
      }
      function we(e, t) {
        if (t in e)
          for (var n = Object.getPrototypeOf(e); n; ) {
            var r = Object.getOwnPropertyDescriptor(n, t)
            if (r) return r
            n = Object.getPrototypeOf(n)
          }
      }
      function je(e) {
        e.P || ((e.P = !0), e.l && je(e.l))
      }
      function Pe(e) {
        e.o || (e.o = ie(e.t))
      }
      function Ae(e, t, n) {
        var r = ne(t)
          ? se('MapSet').T(t, n)
          : re(t)
          ? se('MapSet').F(t, n)
          : e.O
          ? (function (e, t) {
              var n = Array.isArray(e),
                r = {
                  i: n ? 1 : 0,
                  A: t ? t.A : fe(),
                  P: !1,
                  I: !1,
                  D: {},
                  l: t,
                  t: e,
                  k: null,
                  o: null,
                  j: null,
                  C: !1,
                },
                o = r,
                i = Fe
              n && ((o = [r]), (i = He))
              var a = Proxy.revocable(o, i),
                c = a.revoke,
                u = a.proxy
              return (r.k = u), (r.j = c), u
            })(t, n)
          : se('ES5').J(t, n)
        return (n ? n.A : fe()).p.push(r), r
      }
      function ke(e) {
        return (
          Y(e) || V(22, e),
          (function e(t) {
            if (!G(t)) return t
            var n,
              r = t[Le],
              o = J(t)
            if (r) {
              if (!r.P && (r.i < 4 || !se('ES5').K(r))) return r.t
              ;(r.I = !0), (n = _e(t, o)), (r.I = !1)
            } else n = _e(t, o)
            return (
              Z(n, function (t, o) {
                ;(r && $(r.t, t) === o) || ee(n, t, e(o))
              }),
              3 === o ? new Set(n) : n
            )
          })(e)
        )
      }
      function _e(e, t) {
        switch (t) {
          case 2:
            return new Map(e)
          case 3:
            return Array.from(e)
        }
        return ie(e)
      }
      var Se,
        Ee,
        Ce = 'undefined' != typeof Symbol && 'symbol' == typeof Symbol('x'),
        Me = 'undefined' != typeof Map,
        xe = 'undefined' != typeof Set,
        Te =
          'undefined' != typeof Proxy &&
          void 0 !== Proxy.revocable &&
          'undefined' != typeof Reflect,
        Ie = Ce
          ? Symbol.for('immer-nothing')
          : (((Se = {})['immer-nothing'] = !0), Se),
        De = Ce ? Symbol.for('immer-draftable') : '__$immer_draftable',
        Le = Ce ? Symbol.for('immer-state') : '__$immer_state',
        Ne =
          ('undefined' != typeof Symbol && Symbol.iterator,
          'undefined' != typeof Reflect && Reflect.ownKeys
            ? Reflect.ownKeys
            : void 0 !== Object.getOwnPropertySymbols
            ? function (e) {
                return Object.getOwnPropertyNames(e).concat(
                  Object.getOwnPropertySymbols(e),
                )
              }
            : Object.getOwnPropertyNames),
        Re =
          Object.getOwnPropertyDescriptors ||
          function (e) {
            var t = {}
            return (
              Ne(e).forEach(function (n) {
                t[n] = Object.getOwnPropertyDescriptor(e, n)
              }),
              t
            )
          },
        Ue = {},
        Fe = {
          get: function (e, t) {
            if (t === Le) return e
            var n = oe(e)
            if (!Q(n, t))
              return (function (e, t, n) {
                var r,
                  o = we(t, n)
                return o
                  ? 'value' in o
                    ? o.value
                    : null === (r = o.get) || void 0 === r
                    ? void 0
                    : r.call(e.k)
                  : void 0
              })(e, n, t)
            var r = n[t]
            return e.I || !G(r)
              ? r
              : r === ge(e.t, t)
              ? (Pe(e), (e.o[t] = Ae(e.A.h, r, e)))
              : r
          },
          has: function (e, t) {
            return t in oe(e)
          },
          ownKeys: function (e) {
            return Reflect.ownKeys(oe(e))
          },
          set: function (e, t, n) {
            var r = we(oe(e), t)
            if (null == r ? void 0 : r.set) return r.set.call(e.k, n), !0
            if (!e.P) {
              var o = ge(oe(e), t),
                i = null == o ? void 0 : o[Le]
              if (i && i.t === n) return (e.o[t] = n), (e.D[t] = !1), !0
              if (te(n, o) && (void 0 !== n || Q(e.t, t))) return !0
              Pe(e), je(e)
            }
            return (e.o[t] = n), (e.D[t] = !0), !0
          },
          deleteProperty: function (e, t) {
            return (
              void 0 !== ge(e.t, t) || t in e.t
                ? ((e.D[t] = !1), Pe(e), je(e))
                : delete e.D[t],
              e.o && delete e.o[t],
              !0
            )
          },
          getOwnPropertyDescriptor: function (e, t) {
            var n = oe(e),
              r = Reflect.getOwnPropertyDescriptor(n, t)
            return r
              ? {
                  writable: !0,
                  configurable: 1 !== e.i || 'length' !== t,
                  enumerable: r.enumerable,
                  value: n[t],
                }
              : r
          },
          defineProperty: function () {
            V(11)
          },
          getPrototypeOf: function (e) {
            return Object.getPrototypeOf(e.t)
          },
          setPrototypeOf: function () {
            V(12)
          },
        },
        He = {}
      Z(Fe, function (e, t) {
        He[e] = function () {
          return (arguments[0] = arguments[0][0]), t.apply(this, arguments)
        }
      }),
        (He.deleteProperty = function (e, t) {
          return Fe.deleteProperty.call(this, e[0], t)
        }),
        (He.set = function (e, t, n) {
          return Fe.set.call(this, e[0], t, n, e[0])
        })
      var We = new ((function () {
          function e(e) {
            ;(this.O = Te),
              (this.N = !0),
              'boolean' == typeof (null == e ? void 0 : e.useProxies) &&
                this.setUseProxies(e.useProxies),
              'boolean' == typeof (null == e ? void 0 : e.autoFreeze) &&
                this.setAutoFreeze(e.autoFreeze),
              (this.produce = this.produce.bind(this)),
              (this.produceWithPatches = this.produceWithPatches.bind(this))
          }
          var t = e.prototype
          return (
            (t.produce = function (e, t, n) {
              if ('function' == typeof e && 'function' != typeof t) {
                var r = t
                t = e
                var o = this
                return function (e) {
                  var n = this
                  void 0 === e && (e = r)
                  for (
                    var i = arguments.length,
                      a = Array(i > 1 ? i - 1 : 0),
                      c = 1;
                    c < i;
                    c++
                  )
                    a[c - 1] = arguments[c]
                  return o.produce(e, function (e) {
                    var r
                    return (r = t).call.apply(r, [n, e].concat(a))
                  })
                }
              }
              var i
              if (
                ('function' != typeof t && V(6),
                void 0 !== n && 'function' != typeof n && V(7),
                G(e))
              ) {
                var a = be(this),
                  c = Ae(this, e, void 0),
                  u = !0
                try {
                  ;(i = t(c)), (u = !1)
                } finally {
                  u ? pe(a) : de(a)
                }
                return 'undefined' != typeof Promise && i instanceof Promise
                  ? i.then(
                      function (e) {
                        return le(a, n), ve(e, a)
                      },
                      function (e) {
                        throw (pe(a), e)
                      },
                    )
                  : (le(a, n), ve(i, a))
              }
              if (!e || 'object' != typeof e) {
                if ((i = t(e)) === Ie) return
                return void 0 === i && (i = e), this.N && ae(i, !0), i
              }
              V(21, e)
            }),
            (t.produceWithPatches = function (e, t) {
              var n,
                r,
                o = this
              return 'function' == typeof e
                ? function (t) {
                    for (
                      var n = arguments.length,
                        r = Array(n > 1 ? n - 1 : 0),
                        i = 1;
                      i < n;
                      i++
                    )
                      r[i - 1] = arguments[i]
                    return o.produceWithPatches(t, function (t) {
                      return e.apply(void 0, [t].concat(r))
                    })
                  }
                : [
                    this.produce(e, t, function (e, t) {
                      ;(n = e), (r = t)
                    }),
                    n,
                    r,
                  ]
            }),
            (t.createDraft = function (e) {
              G(e) || V(8), Y(e) && (e = ke(e))
              var t = be(this),
                n = Ae(this, e, void 0)
              return (n[Le].C = !0), de(t), n
            }),
            (t.finishDraft = function (e, t) {
              var n = (e && e[Le]).A
              return le(n, t), ve(void 0, n)
            }),
            (t.setAutoFreeze = function (e) {
              this.N = e
            }),
            (t.setUseProxies = function (e) {
              e && !Te && V(20), (this.O = e)
            }),
            (t.applyPatches = function (e, t) {
              var n
              for (n = t.length - 1; n >= 0; n--) {
                var r = t[n]
                if (0 === r.path.length && 'replace' === r.op) {
                  e = r.value
                  break
                }
              }
              var o = se('Patches').$
              return Y(e)
                ? o(e, t)
                : this.produce(e, function (e) {
                    return o(e, t.slice(n + 1))
                  })
            }),
            e
          )
        })())(),
        qe = We.produce,
        ze = (We.produceWithPatches.bind(We), We.setAutoFreeze.bind(We)),
        Be =
          (We.setUseProxies.bind(We),
          We.applyPatches.bind(We),
          We.createDraft.bind(We),
          We.finishDraft.bind(We),
          qe),
        Xe = n('B5kW'),
        Ke = n('zl+k'),
        Ve = n('LvDl')
      function Ye(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function Ge(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Ye(Object(n), !0).forEach(function (t) {
                Object(K.a)(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Ye(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t),
                )
              })
        }
        return e
      }
      ze(!1)
      var Ze = {
        addressBookV5: {
          AMMQuoter: '',
          AMMWrapper: '',
          AllowanceTarget: '',
          PMM: '',
          PermanentStorage: '',
          Tokenlon: '',
          UserProxy: '',
        },
        address: '',
        fingerprint: '',
        approveInfo: { token: { symbol: '', logo: '' }, action: '' },
        signInfo: { status: '', visible: !1 },
        allowancePending: {},
        tokenlonBalanceStack: {},
        tokenlonConfig: {
          slippageConfig: { min: 0.1, max: 1, step: 0.1, default: 0.5 },
        },
        tokenlonTokens: [],
        download: { visible: !1 },
        wallet: {
          walletConnect: {},
          metaMask: { isInstalled: !1 },
          isProviderConnected: !1,
          type: '',
        },
        usedPair: '',
        networkType: 1,
        transferAmount: { makerTokenAmount: '', takerTokenAmount: '' },
        slippageValue: 1,
        userSetSlippageConfig: { min: 0.1, max: 1, step: 0.1, default: 0.5 },
        modalState: {
          visible: !1,
          type: '',
          status: '',
          token: { symbol: '', logo: '' },
        },
        disableMainArea: !1,
        locale: null,
        buybackTokenState: { time: '', symbol: '' },
        stakingState: {
          fromToken: '',
          toToken: '',
          status: '',
          visible: !1,
          txHash: '',
          lastAddress: '',
        },
        lonUnlocking: !1,
        isClaiming: !1,
        recentTradeTokens: [],
      }
      function Je() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ze,
          t = arguments.length > 1 ? arguments[1] : void 0
        return Be(e, function (n) {
          switch (t.type) {
            case Xe.o:
              return (
                console.log(
                  [].concat(
                    Object(l.a)(t.payload),
                    Object(l.a)(e.recentTradeTokens.slice(0, 99)),
                  ),
                ),
                void (n.recentTradeTokens = Object(Ve.uniqBy)(
                  [].concat(
                    Object(l.a)(t.payload),
                    Object(l.a)(e.recentTradeTokens.slice(0, 99)),
                  ),
                  function (e) {
                    return e.contractAddress
                  },
                ))
              )
            case Xe.f:
              var r = t.payload.address
              return void (n.address = r)
            case Xe.h:
              var o = t.payload.fingerprint
              return void (n.fingerprint = o)
            case Xe.r:
              var i = t.payload.data
              return void (n.tokenlonConfig = i)
            case Xe.u:
              var a = t.payload.data
              return void (n.tokenlonTokens = a)
            case Xe.q:
              var c = t.payload,
                u = c.walletAddress,
                s = c.contractAddress,
                f = c.balance
              return void (n.tokenlonBalanceStack[u.toLowerCase()]
                ? (n.tokenlonBalanceStack[u.toLowerCase()][s.toLowerCase()] = f)
                : (n.tokenlonBalanceStack[u.toLowerCase()] = Object(K.a)(
                    {},
                    s.toLowerCase(),
                    f,
                  )))
            case Xe.a:
              var p = t.payload,
                d = p.walletAddress,
                b = p.contractAddress,
                y = p.txHash,
                v = p.operateType
              return void (n.allowancePending = Ge(
                Ge({}, n.allowancePending),
                {},
                Object(K.a)(
                  {},
                  Object(Ke.b)({ walletAddress: d, contractAddress: b }),
                  { txHash: y, timestamp: Object(Ke.d)(), operateType: v },
                ),
              ))
            case Xe.b:
              var m = t.payload,
                h = m.walletAddress,
                O = m.contractAddress,
                g = Ge({}, n.allowancePending)
              return void (
                g[Object(Ke.b)({ walletAddress: h, contractAddress: O })] &&
                (delete g[
                  Object(Ke.b)({ walletAddress: h, contractAddress: O })
                ],
                (n.allowancePending = g))
              )
            case Xe.g:
              return void (n.download.visible = t.payload.visible)
            case Xe.l:
              return void (n.wallet.metaMask.isInstalled =
                t.payload.isInstalled)
            case Xe.y:
              return void (n.wallet.isProviderConnected =
                t.payload.isWalletConnected)
            case Xe.z:
              return void (n.wallet.type = t.payload.walletType)
            case Xe.c:
              return void (n.approveInfo = t.payload.info)
            case Xe.x:
              return void (n.usedPair = t.payload.pair)
            case Xe.v:
              return void (n.transferAmount = t.payload.transferAmount)
            case Xe.n:
              n.networkType = t.payload.network
            case Xe.s:
              return void (n.userSetSlippageConfig = t.payload)
            case Xe.t:
              return void (n.slippageValue = t.payload)
            case Xe.m:
              return void (n.modalState = t.payload)
            case Xe.j:
              return void (n.disableMainArea = t.payload.disable)
            case Xe.i:
              return void (n.locale = t.payload.locale)
            case Xe.d:
              return void (n.buybackTokenState = t.payload)
            case Xe.p:
              return void (n.stakingState = Ge(
                Ge({}, n.stakingState),
                t.payload,
              ))
            case Xe.w:
              return void (n.lonUnlocking = t.payload)
            case Xe.e:
              n.isClaiming = t.payload.isClaiming
            default:
              return n
          }
        })
      }
      var Qe = n('i91u'),
        $e = Qe.imUtils.is.client,
        et = ''
      if ($e()) {
        var tt = Qe.imUtils.is,
          nt = tt.dev,
          rt = tt.staging
        et = nt() ? '-dev' : rt() ? '-staging' : ''
      }
      var ot = N({ key: 'root'.concat(et), storage: B.a }, Je),
        it = function (e) {
          var t = [].concat(y),
            n = p.a.apply(void 0, Object(l.a)(t)),
            r = null
          if ($e()) {
            var o = (function (e, t, n) {
              var r = n || !1,
                o = Object(p.d)(q, W, t && t.enhancer ? t.enhancer : void 0),
                i = function (e) {
                  o.dispatch({ type: j, key: e })
                },
                a = function (t, n, i) {
                  var a = { type: h, payload: n, err: i, key: t }
                  e.dispatch(a),
                    o.dispatch(a),
                    r && c.getState().bootstrapped && (r(), (r = !1))
                },
                c = F({}, o, {
                  purge: function () {
                    var t = []
                    return (
                      e.dispatch({
                        type: w,
                        result: function (e) {
                          t.push(e)
                        },
                      }),
                      Promise.all(t)
                    )
                  },
                  flush: function () {
                    var t = []
                    return (
                      e.dispatch({
                        type: m,
                        result: function (e) {
                          t.push(e)
                        },
                      }),
                      Promise.all(t)
                    )
                  },
                  pause: function () {
                    e.dispatch({ type: O })
                  },
                  persist: function () {
                    e.dispatch({ type: g, register: i, rehydrate: a })
                  },
                })
              return (t && t.manualPersist) || c.persist(), c
            })((r = Object(p.d)(ot, e, n)))
            ;(r.__PERSISTOR = o),
              (X.a.cleanStore = o.purge.bind(o)),
              (X.a.getState = r.getState.bind(r)),
              (X.a.dispatch = r.dispatch.bind(r))
          } else
            (r = Object(p.d)(Je, e, n)),
              (X.a.getState = r.getState.bind(r)),
              (X.a.dispatch = r.dispatch.bind(r))
          return r
        },
        at = function (e) {
          return Object(u.useMemo)(
            function () {
              return it(e)
            },
            [e],
          )
        }
      function ct(e) {
        return (ct =
          'function' === typeof Symbol && 'symbol' === typeof Symbol.iterator
            ? function (e) {
                return typeof e
              }
            : function (e) {
                return e &&
                  'function' === typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e
              })(e)
      }
      function ut(e, t) {
        if (!(e instanceof t))
          throw new TypeError('Cannot call a class as a function')
      }
      function st(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n]
          ;(r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r)
        }
      }
      function ft(e, t) {
        return !t || ('object' !== ct(t) && 'function' !== typeof t) ? pt(e) : t
      }
      function lt(e) {
        return (lt = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
      }
      function pt(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          )
        return e
      }
      function dt(e, t) {
        return (dt =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e
          })(e, t)
      }
      function bt(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        )
      }
      var yt = (function (e) {
        function t() {
          var e, n
          ut(this, t)
          for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
            o[i] = arguments[i]
          return (
            bt(
              pt((n = ft(this, (e = lt(t)).call.apply(e, [this].concat(o))))),
              'state',
              { bootstrapped: !1 },
            ),
            bt(pt(n), '_unsubscribe', void 0),
            bt(pt(n), 'handlePersistorState', function () {
              n.props.persistor.getState().bootstrapped &&
                (n.props.onBeforeLift
                  ? Promise.resolve(n.props.onBeforeLift()).finally(
                      function () {
                        return n.setState({ bootstrapped: !0 })
                      },
                    )
                  : n.setState({ bootstrapped: !0 }),
                n._unsubscribe && n._unsubscribe())
            }),
            n
          )
        }
        var n, r, o
        return (
          (function (e, t) {
            if ('function' !== typeof t && null !== t)
              throw new TypeError(
                'Super expression must either be null or a function',
              )
            ;(e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && dt(e, t)
          })(t, e),
          (n = t),
          (r = [
            {
              key: 'componentDidMount',
              value: function () {
                ;(this._unsubscribe = this.props.persistor.subscribe(
                  this.handlePersistorState,
                )),
                  this.handlePersistorState()
              },
            },
            {
              key: 'componentWillUnmount',
              value: function () {
                this._unsubscribe && this._unsubscribe()
              },
            },
            {
              key: 'render',
              value: function () {
                return 'function' === typeof this.props.children
                  ? this.props.children(this.state.bootstrapped)
                  : this.state.bootstrapped
                  ? this.props.children
                  : this.props.loading
              },
            },
          ]) && st(n.prototype, r),
          o && st(n, o),
          t
        )
      })(u.PureComponent)
      bt(yt, 'defaultProps', { children: null, loading: null })
      var vt = n('g4pe'),
        mt = n.n(vt),
        ht = n('NJpm'),
        Ot = n('8+Th'),
        gt = (n('o6Zt'), n('FU1e')),
        wt = n('N19j'),
        jt = n('LcFi'),
        Pt = n('an7V'),
        At = n('2cAS'),
        kt = s.a.createElement
      function _t(e) {
        var t = window.ethereum
        t &&
          (t.on('accountsChanged', function (e) {
            console.info(
              '\ud83d\udc8e wallet(event): accountsChanged '.concat(e),
            ),
              e.length
                ? Object(X.b)(Object(jt.f)(e[0]))
                : (Object(X.b)(Object(jt.x)(!1)), Object(X.b)(Object(jt.f)('')))
          }),
          t.on('chainChanged', function (t) {
            console.info('\ud83d\udc8e wallet(event): chainChanged '.concat(t)),
              Object(gt.c)(e),
              Object(Pt.h)()
          }))
      }
      var St = function (e) {
        var t = e.children,
          n = Object(ht.c)(),
          r = Object(c.a)(n, 3)[2],
          o = Object(f.d)(function (e) {
            return e.wallet.type
          }),
          l = (function () {
            var e = Object(a.a)(
              i.a.mark(function e() {
                return i.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (
                          o !== gt.a.META_MASK &&
                          !Object(wt.b)() &&
                          o !== gt.a.IMKEY
                        ) {
                          e.next = 3
                          break
                        }
                        return _t(r), e.abrupt('return', Object(gt.g)())
                      case 3:
                        if (o !== gt.a.WALLET_CONNECT) {
                          e.next = 7
                          break
                        }
                        return (e.next = 6), Object(At.b)(r)
                      case 6:
                        return e.abrupt('return', e.sent)
                      case 7:
                      case 'end':
                        return e.stop()
                    }
                }, e)
              }),
            )
            return function () {
              return e.apply(this, arguments)
            }
          })(),
          p = (function () {
            var e = Object(a.a)(
              i.a.mark(function e() {
                var t
                return i.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (!Object(wt.b)()) {
                          e.next = 8
                          break
                        }
                        return (
                          console.log('imTokenApp init'),
                          Object(X.b)(Object(jt.y)(gt.a.META_MASK)),
                          Object(gt.g)(),
                          (e.next = 6),
                          Object(gt.d)()
                        )
                      case 6:
                        ;(t = e.sent).length > 0 &&
                          (Object(X.b)(Object(jt.x)(!0)),
                          Object(X.b)(Object(jt.y)(gt.a.META_MASK)),
                          Object(X.b)(Object(jt.f)(t[0])))
                      case 8:
                      case 'end':
                        return e.stop()
                    }
                }, e)
              }),
            )
            return function () {
              return e.apply(this, arguments)
            }
          })()
        return (
          Object(u.useEffect)(
            function () {
              !(function (e) {
                try {
                  if ((Object(gt.c)(r), !e)) return
                  l(), p()
                } catch (t) {
                  console.error('init', t)
                }
              })(o)
            },
            [o],
          ),
          kt(
            s.a.Fragment,
            null,
            kt(
              mt.a,
              null,
              kt(
                'title',
                { 'data-react-helmet': 'true' },
                r('tokenlon_web_title'),
              ),
              kt('meta', {
                name: 'description',
                property: 'og:description',
                content: r('tokenlon_web_description'),
              }),
              kt('meta', {
                name: 'keywords',
                content: r('tokenlon_web_keywords'),
              }),
              kt('meta', {
                name: 'apple-mobile-web-app-capable',
                content: 'yes',
              }),
              kt('meta', {
                name: 'apple-mobile-web-app-status-bar-style',
                content: 'black',
              }),
              kt('meta', {
                name: 'format-detection',
                content: 'telephone=no, email=no',
              }),
              kt('meta', { name: 'renderer', content: 'webkit' }),
              kt('meta', { httpEquiv: 'X-UA-Compatible', content: 'IE=edge' }),
              kt('meta', { name: 'HandheldFriendly', content: 'true' }),
              kt('meta', { name: 'MobileOptimized', content: '320' }),
              kt('meta', { name: 'screen-orientation', content: 'portrait' }),
              kt('meta', { name: 'x5-orientation', content: 'portrait' }),
              kt('meta', { name: 'full-screen', content: 'yes' }),
              kt('meta', { name: 'x5-fullscreen', content: 'true' }),
              kt('meta', { name: 'browsermode', content: 'application' }),
              kt('meta', { name: 'x5-page-mode', content: 'app' }),
              kt('meta', {
                name: 'msapplication-tap-highlight',
                content: 'no',
              }),
              kt('meta', {
                httpEquiv: 'Content-Type',
                content: 'text/html; charset=utf-8',
              }),
              kt('meta', {
                name: 'viewport',
                content:
                  'width=device-width, initial-scale=1, user-scalable=no,maximum-scale=1,minimum-scale=1,viewport-fit=cover',
              }),
              kt('meta', { name: 'format-detection', content: 'telephone=no' }),
            ),
            t,
          )
        )
      }
      t.default = function (e) {
        var t = e.Component,
          o = e.pageProps,
          i =
            (Object(r.a)(e, ['Component', 'pageProps']),
            at(o.initialReduxState))
        return (
          Object(u.useEffect)(function () {
            Qe.imUtils.is.client() &&
              (n('k+uP').init({
                server_url:
                  'https://imtoken.datasink.sensorsdata.cn/sa?project=production&token=27d69b3e7fd25949',
              }),
              Ot.b({
                dsn:
                  'https://6d94ff045d2f4e24b901318c9e304051@sentry-v2.tokenlon.im/69',
                environment: Qe.imUtils.is.dev() ? 'development' : 'production',
                enabled: !Qe.imUtils.is.staging() && !Qe.imUtils.is.dev(),
                ignoreErrors: ['ResizeObserver loop limit exceeded'],
              }),
              console.log('Sentry initialized'))
          }, []),
          kt(
            f.a,
            { store: i },
            kt(
              yt,
              { persistor: i.__PERSISTOR, loading: null },
              kt(St, null, kt(t, o)),
            ),
          )
        )
      }
    },
    d9yM: function (e, t, n) {
      'use strict'
      var r = n('i91u'),
        o = n('+qE3'),
        i = n.n(o)
      i.a.prototype.setMaxListeners(1e3)
      var a = new i.a.EventEmitter()
      ;(r.imUtils.is.dev() || r.imUtils.is.staging()) &&
        a.on('*', function () {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n]
          console.log('PUBSUB:', this.event, t)
        }),
        (t.a = a)
    },
    g4pe: function (e, t, n) {
      e.exports = n('8Kt/')
    },
    kAU4: function (e, t, n) {},
    lwAK: function (e, t, n) {
      'use strict'
      var r
      ;(t.__esModule = !0), (t.AmpStateContext = void 0)
      var o = ((r = n('q1tI')) && r.__esModule
        ? r
        : { default: r }
      ).default.createContext({})
      t.AmpStateContext = o
    },
    qXWd: function (e, t) {
      e.exports = function (e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          )
        return e
      }
    },
    tCBg: function (e, t, n) {
      var r = n('C+bE'),
        o = n('qXWd')
      e.exports = function (e, t) {
        return !t || ('object' !== r(t) && 'function' !== typeof t) ? o(e) : t
      }
    },
    ycJa: function (e, t, n) {
      'use strict'
      function r(e) {
        return (r =
          'function' === typeof Symbol && 'symbol' === typeof Symbol.iterator
            ? function (e) {
                return typeof e
              }
            : function (e) {
                return e &&
                  'function' === typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e
              })(e)
      }
      function o() {}
      ;(t.__esModule = !0),
        (t.default = function (e) {
          var t = ''.concat(e, 'Storage')
          return (function (e) {
            if (
              'object' !==
                ('undefined' === typeof self ? 'undefined' : r(self)) ||
              !(e in self)
            )
              return !1
            try {
              var t = self[e],
                n = 'redux-persist '.concat(e, ' test')
              t.setItem(n, 'test'), t.getItem(n), t.removeItem(n)
            } catch (o) {
              return !1
            }
            return !0
          })(t)
            ? self[t]
            : i
        })
      var i = { getItem: o, setItem: o, removeItem: o }
    },
    znru: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return a
      }),
        n.d(t, 'c', function () {
          return s
        }),
        n.d(t, 'b', function () {
          return f
        }),
        n.d(t, 'd', function () {
          return y
        })
      var r = n('q1tI'),
        o = n('i91u'),
        i = function () {
          var e = o.imUtils.is.client,
            t = Object(r.useState)(!1),
            n = t[0],
            i = t[1]
          return (
            Object(r.useEffect)(function () {
              i(e())
            }, []),
            { isBrowser: n, isServer: !n }
          )
        },
        a = function (e, t, n) {
          var o = !0,
            i =
              n ||
              function (e) {
                throw e
              }
          Object(r.useEffect)(function () {
            return (
              Promise.resolve(
                e(function () {
                  return o
                }),
              ).catch(i),
              function () {
                o = !1
              }
            )
          }, t)
        },
        c = function () {
          return Math.random().toString(32).slice(2, 10)
        },
        u = function (e) {
          var t = document.createElement('div')
          return t.setAttribute('id', e), t
        },
        s = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : c(),
            t = arguments.length > 1 ? arguments[1] : void 0,
            n = 'tokenlon-'.concat(e),
            o = i(),
            a = o.isBrowser,
            s = Object(r.useState)(a ? u(n) : null),
            f = s[0],
            l = s[1]
          return (
            Object(r.useEffect)(function () {
              var e = (t ? t() : null) || document.body,
                r = e.querySelector('#'.concat(n)),
                o = r || u(n)
              r || e.appendChild(o), l(o)
            }, []),
            f
          )
        },
        f = function (e, t) {
          var n = o.imUtils.is.client
          Object(r.useEffect)(
            function () {
              var r = function (n) {
                var r = e.current
                n && r && !r.contains(n.target) && t(n)
              }
              if (n())
                return (
                  document.addEventListener('click', r, !0),
                  function () {
                    return document.removeEventListener('click', r, !0)
                  }
                )
            },
            [e, t],
          )
        },
        l = n('afAV'),
        p = n('HOZL'),
        d = n('hP3F'),
        b = n('/MKj'),
        y = function () {
          for (
            var e = Object(r.useState)([]),
              t = e[0],
              n = e[1],
              o = Object(b.d)(d.c),
              i = arguments.length,
              a = new Array(i),
              c = 0;
            c < i;
            c++
          )
            a[c] = arguments[c]
          return (
            Object(r.useEffect)(function () {
              o &&
                Object(l.getUserTokenList)(o).then(function (e) {
                  var t = e.find(function (e) {
                    return 'eth' === e.id
                  })
                  t && (t.id = p.a), n(e)
                })
            }, [].concat(a, [o])),
            t
          )
        }
    },
  },
  [[4, 0, 1, 5, 4, 2, 7, 6, 8, 26, 3]],
])
//# sourceMappingURL=_app-3bef3b83df21149460ab.js.map
