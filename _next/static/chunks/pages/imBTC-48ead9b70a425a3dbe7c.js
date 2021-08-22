_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [35],
  {
    '/0+H': function (e, t, a) {
      'use strict'
        ; (t.__esModule = !0),
          (t.isInAmpMode = r),
          (t.useAmp = function () {
            return r(s.default.useContext(c.AmpStateContext))
          })
      var n,
        s = (n = a('q1tI')) && n.__esModule ? n : { default: n },
        c = a('lwAK')
      function r() {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = e.ampFirst,
          a = void 0 !== t && t,
          n = e.hybrid,
          s = void 0 !== n && n,
          c = e.hasQuery,
          r = void 0 !== c && c
        return a || (s && r)
      }
    },
    '3V8z': function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'imBTC', function () {
          return j
        })
      var n = a('o0o1'),
        s = a.n(n),
        c = a('ODXe'),
        r = a('HaE+'),
        o = a('1OyB'),
        i = a('vuIU'),
        l = a('JX7q'),
        u = a('Ji7U'),
        m = a('md7G'),
        d = a('foSv'),
        p = a('rePB'),
        f = a('q1tI'),
        v = a.n(f),
        g = a('g4pe'),
        h = a.n(g),
        b = (a('imaG'), a('oxfd')),
        N = a('Zw22'),
        _ = a('afAV'),
        w = a('nsdO'),
        y = a('i91u'),
        q = a('4Km+'),
        O = a('NJpm'),
        k = v.a.createElement
      function C(e) {
        var t = (function () {
          if ('undefined' === typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ('function' === typeof Proxy) return !0
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () { }),
              ),
              !0
            )
          } catch (e) {
            return !1
          }
        })()
        return function () {
          var a,
            n = Object(d.a)(e)
          if (t) {
            var s = Object(d.a)(this).constructor
            a = Reflect.construct(n, arguments, s)
          } else a = n.apply(this, arguments)
          return Object(m.a)(this, a)
        }
      }
      var j = (function (e) {
        Object(u.a)(a, e)
        var t = C(a)
        function a(e) {
          var n
          return (
            Object(o.a)(this, a),
            (n = t.call(this, e)),
            Object(p.a)(Object(l.a)(n), 'toggleHover', function (e) {
              return n.setState({ hover: e })
            }),
            Object(p.a)(Object(l.a)(n), 'toggleHoverB', function (e) {
              return n.setState({ hoverB: e })
            }),
            Object(p.a)(Object(l.a)(n), 'toggleQ', function (e) {
              var t = 'q'.concat(e),
                a = {}
                ; (a[t] = !n.state[t]), n.setState(a)
            }),
            Object(p.a)(Object(l.a)(n), 'renderFAQs', function () {
              var e = n.props,
                t = e.t,
                a = e.locale,
                s = n.state,
                c = s.q1,
                r = s.q2,
                o = s.q3,
                i = s.q4,
                u = s.q5,
                m = s.q6,
                d = s.q7,
                p = s.q8,
                f = 'zh' === a ? 'zh-cn' : 'en-us'
              return k(
                'div',
                null,
                k(
                  'div',
                  { className: 'faq-item '.concat(c ? 'unfold' : '') },
                  k(
                    'div',
                    {
                      className: 'q-row',
                      onClick: n.toggleQ.bind(Object(l.a)(n), 1),
                    },
                    k('p', { className: 'q' }, t('q1')),
                    k('img', {
                      src: 'images/arrow-'.concat(c ? 'down' : 'right', '.svg'),
                    }),
                  ),
                  c &&
                  k(
                    'div',
                    { className: 'a-row' },
                    k('p', { className: 'a' }, t('a1')),
                  ),
                ),
                k(
                  'div',
                  { className: 'faq-item '.concat(r ? 'unfold' : '') },
                  k(
                    'div',
                    {
                      className: 'q-row',
                      onClick: n.toggleQ.bind(Object(l.a)(n), 2),
                    },
                    k('p', { className: 'q' }, t('q2')),
                    k('img', {
                      src: 'images/arrow-'.concat(r ? 'down' : 'right', '.svg'),
                    }),
                  ),
                  r &&
                  k(
                    'div',
                    { className: 'a-row' },
                    k('p', { className: 'a' }, t('a2_1')),
                    k('p', { className: 'a' }, t('a2_2')),
                  ),
                ),
                k(
                  'div',
                  { className: 'faq-item '.concat(o ? 'unfold' : '') },
                  k(
                    'div',
                    {
                      className: 'q-row',
                      onClick: n.toggleQ.bind(Object(l.a)(n), 3),
                    },
                    k('p', { className: 'q' }, t('q3')),
                    k('img', {
                      src: 'images/arrow-'.concat(o ? 'down' : 'right', '.svg'),
                    }),
                  ),
                  o &&
                  k(
                    'div',
                    { className: 'a-row' },
                    k('p', { className: 'a' }, k('b', null, t('a3_1'))),
                    k(
                      'p',
                      { className: 'a' },
                      k('span', null, t('a3_2')),
                      k(
                        'a',
                        {
                          href: 'https://www.binance.com/',
                          target: 'blank',
                        },
                        t('a3_3'),
                      ),
                    ),
                    k('p', { className: 'a' }, k('b', null, t('a3_4'))),
                    k('p', { className: 'a' }, t('a3_5')),
                  ),
                ),
                k(
                  'div',
                  { className: 'faq-item '.concat(i ? 'unfold' : '') },
                  k(
                    'div',
                    {
                      className: 'q-row',
                      onClick: n.toggleQ.bind(Object(l.a)(n), 4),
                    },
                    k('p', { className: 'q' }, t('q4')),
                    k('img', {
                      src: 'images/arrow-'.concat(i ? 'down' : 'right', '.svg'),
                    }),
                  ),
                  i &&
                  k(
                    'div',
                    { className: 'a-row' },
                    k('p', { className: 'a' }, t('a4_1')),
                  ),
                ),
                k(
                  'div',
                  { className: 'faq-item '.concat(u ? 'unfold' : '') },
                  k(
                    'div',
                    {
                      className: 'q-row',
                      onClick: n.toggleQ.bind(Object(l.a)(n), 5),
                    },
                    k('p', { className: 'q' }, t('q5')),
                    k('img', {
                      src: 'images/arrow-'.concat(u ? 'down' : 'right', '.svg'),
                    }),
                  ),
                  u &&
                  k(
                    'div',
                    { className: 'a-row' },
                    k('p', { className: 'a' }, t('a5_1')),
                    k('p', { className: 'a li' }, t('a5_2')),
                    k('p', { className: 'a li' }, t('a5_3')),
                  ),
                ),
                k(
                  'div',
                  { className: 'faq-item '.concat(m ? 'unfold' : '') },
                  k(
                    'div',
                    {
                      className: 'q-row',
                      onClick: n.toggleQ.bind(Object(l.a)(n), 6),
                    },
                    k('p', { className: 'q' }, t('q6')),
                    k('img', {
                      src: 'images/arrow-'.concat(m ? 'down' : 'right', '.svg'),
                    }),
                  ),
                  m &&
                  k(
                    'div',
                    { className: 'a-row' },
                    k('p', { className: 'a' }, t('a6_1')),
                    k('p', { className: 'a li' }, t('a6_2')),
                    k('p', { className: 'a li' }, t('a6_3')),
                    k('p', { className: 'a' }, t('a6_4')),
                    k(
                      'ul',
                      null,
                      k('li', null, k('p', { className: 'a lo' }, t('a6_5'))),
                      k('li', null, k('p', { className: 'a lo' }, t('a6_6'))),
                      k('li', null, k('p', { className: 'a lo' }, t('a6_7'))),
                      k('li', null, k('p', { className: 'a lo' }, t('a6_8'))),
                    ),
                    k('p', { className: 'a' }, t('a6_9')),
                    k('p', { className: 'a' }, t('a6_10')),
                  ),
                ),
                k(
                  'div',
                  { className: 'faq-item '.concat(d ? 'unfold' : '') },
                  k(
                    'div',
                    {
                      className: 'q-row',
                      onClick: n.toggleQ.bind(Object(l.a)(n), 7),
                    },
                    k('p', { className: 'q' }, t('q7')),
                    k('img', {
                      src: 'images/arrow-'.concat(d ? 'down' : 'right', '.svg'),
                    }),
                  ),
                  d &&
                  k(
                    'div',
                    { className: 'a-row' },
                    k('p', { className: 'a' }, t('a7_1')),
                    k('p', { className: 'a' }, t('a7_2')),
                    k('p', { className: 'a' }, t('a7_3')),
                    k('p', { className: 'a' }, t('a7_4')),
                  ),
                ),
                k(
                  'div',
                  { className: 'faq-item '.concat(p ? 'unfold' : '') },
                  k(
                    'div',
                    {
                      className: 'q-row',
                      onClick: n.toggleQ.bind(Object(l.a)(n), 8),
                    },
                    k('p', { className: 'q' }, t('q8')),
                    k('img', {
                      src: 'images/arrow-'.concat(p ? 'down' : 'right', '.svg'),
                    }),
                  ),
                  p &&
                  k(
                    'div',
                    { className: 'a-row' },
                    k('p', { className: 'a' }, t('a8_1')),
                  ),
                ),
              )
            }),
            (n.state = {
              q1: !1,
              q2: !1,
              q3: !1,
              q4: !1,
              q5: !1,
              q6: !1,
              q7: !1,
              q8: !1,
              unfold: !1,
              hover: !1,
              hoverB: !1,
              data: {},
              deposit: 0,
            }),
            n
          )
        }
        return (
          Object(i.a)(a, [
            {
              key: 'componentDidMount',
              value: (function () {
                var e = Object(r.a)(
                  s.a.mark(function e() {
                    var t, a, n, r, o, i, l, u
                    return s.a.wrap(
                      function (e) {
                        for (; ;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (t = this.props.locale),
                                (e.prev = 1),
                                (e.next = 4),
                                Promise.all([
                                  Object(_.getimBTCData)(),
                                  Object(_.getBalances)(),
                                  Object(_.getBalancesWBTC)(),
                                ])
                              )
                            case 4:
                              ; (a = e.sent),
                                (n = Object(c.a)(a, 3)),
                                (r = n[0]),
                                (o = n[1]),
                                (i = n[2]),
                                (l = o.concat(i).reduce(function (e, t) {
                                  return +e + +t
                                })),
                                this.setState({ data: r, deposit: l }),
                                (e.next = 16)
                              break
                            case 13:
                              ; (e.prev = 13),
                                (e.t0 = e.catch(1)),
                                console.log(e.t0)
                            case 16:
                              window.Beacon &&
                                ((u =
                                  t === O.a.EN
                                    ? 'f0234c82-9931-4184-ae0a-9f08cb0a671b'
                                    : 'd7c4d4a6-3967-4198-9622-281736036e6d'),
                                  window.Beacon('init', u))
                            case 17:
                            case 'end':
                              return e.stop()
                          }
                      },
                      e,
                      this,
                      [[1, 13]],
                    )
                  }),
                )
                return function () {
                  return e.apply(this, arguments)
                }
              })(),
            },
            {
              key: 'render',
              value: function () {
                var e = this.props,
                  t = e.t,
                  a = e.locale,
                  n = this.state,
                  s = (n.hover, n.hoverB, n.deposit),
                  c = n.data,
                  r = c.total,
                  o = c.holder,
                  i = c.apr,
                  l = y.imUtils.is.mobile
                return k(
                  'div',
                  { className: 'imBTC-page' },
                  k(
                    h.a,
                    null,
                    k('title', null, t('imbtc_page_title')),
                    k('meta', {
                      name: 'description',
                      content: t('imbtc_page_desc'),
                    }),
                    k('meta', { name: 'keywords', content: t('keywords') }),
                    k('meta', { name: 'generator', content: t('generator') }),
                  ),
                  k(
                    'div',
                    null,
                    k(b.a, { pathname: '/imBTC' }),
                    k(
                      'div',
                      { className: 'imbtc-banner' },
                      k(
                        'div',
                        {
                          className: 'common-inner',
                          style: {
                            backgroundImage:
                              'url("images/imbtc-banner-bg.svg")',
                          },
                        },
                        k(
                          'div',
                          { className: 'text-desc' },
                          k('p', { className: 'title' }, t('imbtc_title')),
                          k(
                            'p',
                            { className: 'subtitle' },
                            t('imbtc_subtitle'),
                          ),
                            k(
                              'a',
                              {
                                href:"javascript:window.WalletConnectQRCodeModal.default.open(104, 42);",
                                className: 'button',
                              },
                              k('span', null, t('get_imbtc')),
                            ),
                        ),
                        k(
                          'div',
                          { className: 'card-wrap' },
                          k(
                            'div',
                            { className: 'card' },
                            k(
                              'p',
                              null,
                              k('span', { className: 'key' }, t('published')),
                              k('span', { className: 'value' }, t('discover')),
                            ),
                            k(
                              'p',
                              null,
                              k('span', { className: 'value' }, t('litepaper')),
                            ),
                            k(
                              'p',
                              null,
                              k(
                                'span',
                                { className: 'value' },
                                t('audit_report'),
                              ),
                            ),
                            k(
                              'p',
                              null,
                              k(
                                'span',
                                { className: 'value' },
                                t('update_app_desc'),
                              ),
                            ),
                            k(
                              'p',
                              null,
                              k(
                                'span',
                                { className: 'value' },
                                t('update_app_title'),
                              ),
                            ),
                          ),
                        ),
                      ),
                    ),
                    k(
                      'div',
                      { className: 'imbtc-is' },
                      k(
                        'div',
                        { className: 'common-inner' },
                        k('p', { className: 'title' }, t('what_is_imbtc')),
                        k('p', { className: 'subtitle' }, t('imbtc_is')),
                        k(
                          'div',
                          { className: 'features' },
                          [1, 2, 3].map(function (e) {
                            return k(
                              'div',
                              { className: 'feat', key: e },
                              k('img', {
                                src: 'images/imbtc-feat'.concat(e, '.svg'),
                              }),
                              k(
                                'p',
                                { className: 'title' },
                                t('imbtc_feat'.concat(e, '_title')),
                              ),
                              k(
                                'p',
                                { className: 'subtitle' },
                                t(
                                  'imbtc_feat'.concat(e, '_subtitle'),
                                  Object(w.d)(100 * i, 2),
                                ),
                              ),
                            )
                          }),
                        ),
                      ),
                    ),
                    k(
                      'div',
                      { className: 'faq' },
                      k(
                        'div',
                        { className: 'common-inner' },
                        k('p', { className: 'title' }, t('faq')),
                        this.renderFAQs(),
                      ),
                    ),
                    k(N.a, null),
                  ),
                )
              },
            },
          ]),
          a
        )
      })(f.Component)
      t.default = Object(O.b)(j)
    },
    '48fX': function (e, t, a) {
      var n = a('qhzo')
      e.exports = function (e, t) {
        if ('function' !== typeof t && null !== t)
          throw new TypeError(
            'Super expression must either be null or a function',
          )
          ; (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            t && n(e, t)
      }
    },
    '8Kt/': function (e, t, a) {
      'use strict'
      a('oI91')
        ; (t.__esModule = !0), (t.defaultHead = u), (t.default = void 0)
      var n,
        s = (function (e) {
          if (e && e.__esModule) return e
          if (null === e || ('object' !== typeof e && 'function' !== typeof e))
            return { default: e }
          var t = l()
          if (t && t.has(e)) return t.get(e)
          var a = {},
            n = Object.defineProperty && Object.getOwnPropertyDescriptor
          for (var s in e)
            if (Object.prototype.hasOwnProperty.call(e, s)) {
              var c = n ? Object.getOwnPropertyDescriptor(e, s) : null
              c && (c.get || c.set)
                ? Object.defineProperty(a, s, c)
                : (a[s] = e[s])
            }
          ; (a.default = e), t && t.set(e, a)
          return a
        })(a('q1tI')),
        c = (n = a('Xuae')) && n.__esModule ? n : { default: n },
        r = a('lwAK'),
        o = a('FYa8'),
        i = a('/0+H')
      function l() {
        if ('function' !== typeof WeakMap) return null
        var e = new WeakMap()
        return (
          (l = function () {
            return e
          }),
          e
        )
      }
      function u() {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          t = [s.default.createElement('meta', { charSet: 'utf-8' })]
        return (
          e ||
          t.push(
            s.default.createElement('meta', {
              name: 'viewport',
              content: 'width=device-width',
            }),
          ),
          t
        )
      }
      function m(e, t) {
        return 'string' === typeof t || 'number' === typeof t
          ? e
          : t.type === s.default.Fragment
            ? e.concat(
              s.default.Children.toArray(t.props.children).reduce(function (
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
      var d = ['name', 'httpEquiv', 'charSet', 'itemProp']
      function p(e, t) {
        return e
          .reduce(function (e, t) {
            var a = s.default.Children.toArray(t.props.children)
            return e.concat(a)
          }, [])
          .reduce(m, [])
          .reverse()
          .concat(u(t.inAmpMode))
          .filter(
            (function () {
              var e = new Set(),
                t = new Set(),
                a = new Set(),
                n = {}
              return function (s) {
                var c = !0
                if (
                  s.key &&
                  'number' !== typeof s.key &&
                  s.key.indexOf('$') > 0
                ) {
                  var r = s.key.slice(s.key.indexOf('$') + 1)
                  e.has(r) ? (c = !1) : e.add(r)
                }
                switch (s.type) {
                  case 'title':
                  case 'base':
                    t.has(s.type) ? (c = !1) : t.add(s.type)
                    break
                  case 'meta':
                    for (var o = 0, i = d.length; o < i; o++) {
                      var l = d[o]
                      if (s.props.hasOwnProperty(l))
                        if ('charSet' === l) a.has(l) ? (c = !1) : a.add(l)
                        else {
                          var u = s.props[l],
                            m = n[l] || new Set()
                          m.has(u) ? (c = !1) : (m.add(u), (n[l] = m))
                        }
                    }
                }
                return c
              }
            })(),
          )
          .reverse()
          .map(function (e, t) {
            var a = e.key || t
            return s.default.cloneElement(e, { key: a })
          })
      }
      function f(e) {
        var t = e.children,
          a = (0, s.useContext)(r.AmpStateContext),
          n = (0, s.useContext)(o.HeadManagerContext)
        return s.default.createElement(
          c.default,
          {
            reduceComponentsToState: p,
            headManager: n,
            inAmpMode: (0, i.isInAmpMode)(a),
          },
          t,
        )
      }
      f.rewind = function () { }
      var v = f
      t.default = v
    },
    FYa8: function (e, t, a) {
      'use strict'
      var n
        ; (t.__esModule = !0), (t.HeadManagerContext = void 0)
      var s = ((n = a('q1tI')) && n.__esModule
        ? n
        : { default: n }
      ).default.createContext({})
      t.HeadManagerContext = s
    },
    T0f4: function (e, t) {
      function a(t) {
        return (
          (e.exports = a = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e)
            }),
          a(t)
        )
      }
      e.exports = a
    },
    Xuae: function (e, t, a) {
      'use strict'
      var n = a('mPvQ'),
        s = a('/GRZ'),
        c = a('i2R6'),
        r = (a('qXWd'), a('48fX')),
        o = a('tCBg'),
        i = a('T0f4')
      function l(e) {
        var t = (function () {
          if ('undefined' === typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ('function' === typeof Proxy) return !0
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () { }),
              ),
              !0
            )
          } catch (e) {
            return !1
          }
        })()
        return function () {
          var a,
            n = i(e)
          if (t) {
            var s = i(this).constructor
            a = Reflect.construct(n, arguments, s)
          } else a = n.apply(this, arguments)
          return o(this, a)
        }
      }
      ; (t.__esModule = !0), (t.default = void 0)
      var u = a('q1tI'),
        m = (function (e) {
          r(a, e)
          var t = l(a)
          function a(e) {
            var c
            return (
              s(this, a),
              ((c = t.call(this, e))._hasHeadManager = void 0),
              (c.emitChange = function () {
                c._hasHeadManager &&
                  c.props.headManager.updateHead(
                    c.props.reduceComponentsToState(
                      n(c.props.headManager.mountedInstances),
                      c.props,
                    ),
                  )
              }),
              (c._hasHeadManager =
                c.props.headManager && c.props.headManager.mountedInstances),
              c
            )
          }
          return (
            c(a, [
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
            a
          )
        })(u.Component)
      t.default = m
    },
    g4pe: function (e, t, a) {
      e.exports = a('8Kt/')
    },
    lwAK: function (e, t, a) {
      'use strict'
      var n
        ; (t.__esModule = !0), (t.AmpStateContext = void 0)
      var s = ((n = a('q1tI')) && n.__esModule
        ? n
        : { default: n }
      ).default.createContext({})
      t.AmpStateContext = s
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
    rUxU: function (e, t, a) {
      ; (window.__NEXT_P = window.__NEXT_P || []).push([
        '/imBTC',
        function () {
          return a('3V8z')
        },
      ])
    },
    tCBg: function (e, t, a) {
      var n = a('C+bE'),
        s = a('qXWd')
      e.exports = function (e, t) {
        return !t || ('object' !== n(t) && 'function' !== typeof t) ? s(e) : t
      }
    },
  },
  [['rUxU', 0, 1, 5, 4, 10, 12, 2, 7, 6, 8, 9, 11, 13, 14, 23, 3]],
])
//# sourceMappingURL=imBTC-48ead9b70a425a3dbe7c.js.map
