;(window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [26],
  {
    '+924': function (t, e, n) {
      'use strict'
      n.d(e, 'd', function () {
        return i
      }),
        n.d(e, 'c', function () {
          return o
        }),
        n.d(e, 'b', function () {
          return s
        }),
        n.d(e, 'a', function () {
          return a
        })
      var r = n('9AQC')
      function i(t, e) {
        return (
          void 0 === e && (e = 0),
          'string' !== typeof t || 0 === e || t.length <= e
            ? t
            : t.substr(0, e) + '...'
        )
      }
      function o(t, e) {
        var n = t,
          r = n.length
        if (r <= 150) return n
        e > r && (e = r)
        var i = Math.max(e - 60, 0)
        i < 5 && (i = 0)
        var o = Math.min(i + 140, r)
        return (
          o > r - 5 && (o = r),
          o === r && (i = Math.max(o - 140, 0)),
          (n = n.slice(i, o)),
          i > 0 && (n = "'{snip} " + n),
          o < r && (n += ' {snip}'),
          n
        )
      }
      function s(t, e) {
        if (!Array.isArray(t)) return ''
        for (var n = [], r = 0; r < t.length; r++) {
          var i = t[r]
          try {
            n.push(String(i))
          } catch (o) {
            n.push('[value cannot be serialized]')
          }
        }
        return n.join(e)
      }
      function a(t, e) {
        return (
          !!Object(r.k)(t) &&
          (Object(r.j)(e)
            ? e.test(t)
            : 'string' === typeof e && -1 !== t.indexOf(e))
        )
      }
    },
    '+A1k': function (t, e, n) {
      'use strict'
      ;(function (t) {
        function r() {
          return (
            '[object process]' ===
            Object.prototype.toString.call('undefined' !== typeof t ? t : 0)
          )
        }
        function i(t, e) {
          return t.require(e)
        }
        n.d(e, 'b', function () {
          return r
        }),
          n.d(e, 'a', function () {
            return i
          })
      }.call(this, n('8oxB')))
    },
    '6PXS': function (t, e, n) {
      'use strict'
      ;(function (t) {
        n.d(e, 'c', function () {
          return u
        }),
          n.d(e, 'f', function () {
            return p
          }),
          n.d(e, 'e', function () {
            return d
          }),
          n.d(e, 'd', function () {
            return v
          }),
          n.d(e, 'b', function () {
            return y
          }),
          n.d(e, 'a', function () {
            return g
          })
        var r = n('mrSG'),
          i = n('vFt6'),
          o = n('9AQC'),
          s = n('wCA9'),
          a = n('pRiV'),
          c = n('+924')
        function u(t, e, n) {
          if (e in t) {
            var r = t[e],
              i = n(r)
            if ('function' === typeof i)
              try {
                ;(i.prototype = i.prototype || {}),
                  Object.defineProperties(i, {
                    __sentry_original__: { enumerable: !1, value: r },
                  })
              } catch (o) {}
            t[e] = i
          }
        }
        function p(t) {
          return Object.keys(t)
            .map(function (e) {
              return encodeURIComponent(e) + '=' + encodeURIComponent(t[e])
            })
            .join('&')
        }
        function h(t) {
          if (Object(o.d)(t)) {
            var e = t,
              n = { message: e.message, name: e.name, stack: e.stack }
            for (var r in e)
              Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r])
            return n
          }
          if (Object(o.f)(t)) {
            var s = t,
              a = {}
            a.type = s.type
            try {
              a.target = Object(o.c)(s.target)
                ? Object(i.a)(s.target)
                : Object.prototype.toString.call(s.target)
            } catch (c) {
              a.target = '<unknown>'
            }
            try {
              a.currentTarget = Object(o.c)(s.currentTarget)
                ? Object(i.a)(s.currentTarget)
                : Object.prototype.toString.call(s.currentTarget)
            } catch (c) {
              a.currentTarget = '<unknown>'
            }
            for (var r in ('undefined' !== typeof CustomEvent &&
              Object(o.g)(t, CustomEvent) &&
              (a.detail = s.detail),
            s))
              Object.prototype.hasOwnProperty.call(s, r) && (a[r] = s)
            return a
          }
          return t
        }
        function l(t) {
          return (function (t) {
            return ~-encodeURI(t).split(/%..|./).length
          })(JSON.stringify(t))
        }
        function d(t, e, n) {
          void 0 === e && (e = 3), void 0 === n && (n = 102400)
          var r = v(t, e)
          return l(r) > n ? d(t, e - 1, n) : r
        }
        function f(e, n) {
          return 'domain' === n && e && 'object' === typeof e && e._events
            ? '[Domain]'
            : 'domainEmitter' === n
            ? '[DomainEmitter]'
            : 'undefined' !== typeof t && e === t
            ? '[Global]'
            : 'undefined' !== typeof window && e === window
            ? '[Window]'
            : 'undefined' !== typeof document && e === document
            ? '[Document]'
            : Object(o.l)(e)
            ? '[SyntheticEvent]'
            : 'number' === typeof e && e !== e
            ? '[NaN]'
            : void 0 === e
            ? '[undefined]'
            : 'function' === typeof e
            ? '[Function: ' + Object(a.a)(e) + ']'
            : 'symbol' === typeof e
            ? '[' + String(e) + ']'
            : 'bigint' === typeof e
            ? '[BigInt: ' + String(e) + ']'
            : e
        }
        function _(t, e, n, r) {
          if (
            (void 0 === n && (n = 1 / 0),
            void 0 === r && (r = new s.a()),
            0 === n)
          )
            return (function (t) {
              var e = Object.prototype.toString.call(t)
              if ('string' === typeof t) return t
              if ('[object Object]' === e) return '[Object]'
              if ('[object Array]' === e) return '[Array]'
              var n = f(t)
              return Object(o.i)(n) ? n : e
            })(e)
          if (null !== e && void 0 !== e && 'function' === typeof e.toJSON)
            return e.toJSON()
          var i = f(e, t)
          if (Object(o.i)(i)) return i
          var a = h(e),
            c = Array.isArray(e) ? [] : {}
          if (r.memoize(e)) return '[Circular ~]'
          for (var u in a)
            Object.prototype.hasOwnProperty.call(a, u) &&
              (c[u] = _(u, a[u], n - 1, r))
          return r.unmemoize(e), c
        }
        function v(t, e) {
          try {
            return JSON.parse(
              JSON.stringify(t, function (t, n) {
                return _(t, n, e)
              }),
            )
          } catch (n) {
            return '**non-serializable**'
          }
        }
        function y(t, e) {
          void 0 === e && (e = 40)
          var n = Object.keys(h(t))
          if ((n.sort(), !n.length)) return '[object has no keys]'
          if (n[0].length >= e) return Object(c.d)(n[0], e)
          for (var r = n.length; r > 0; r--) {
            var i = n.slice(0, r).join(', ')
            if (!(i.length > e)) return r === n.length ? i : Object(c.d)(i, e)
          }
          return ''
        }
        function g(t) {
          var e, n
          if (Object(o.h)(t)) {
            var i = t,
              s = {}
            try {
              for (
                var a = Object(r.f)(Object.keys(i)), c = a.next();
                !c.done;
                c = a.next()
              ) {
                var u = c.value
                'undefined' !== typeof i[u] && (s[u] = g(i[u]))
              }
            } catch (p) {
              e = { error: p }
            } finally {
              try {
                c && !c.done && (n = a.return) && n.call(a)
              } finally {
                if (e) throw e.error
              }
            }
            return s
          }
          return Array.isArray(t) ? t.map(g) : t
        }
      }.call(this, n('3r9c')))
    },
    '8+Th': function (t, e, n) {
      'use strict'
      n.d(e, 'a', function () {
        return Kt
      }),
        n.d(e, 'b', function () {
          return _e
        })
      var r = {}
      n.r(r),
        n.d(r, 'FunctionToString', function () {
          return c
        }),
        n.d(r, 'InboundFilters', function () {
          return A
        })
      var i = {}
      n.r(i),
        n.d(i, 'GlobalHandlers', function () {
          return se
        }),
        n.d(i, 'TryCatch', function () {
          return oe
        }),
        n.d(i, 'Breadcrumbs', function () {
          return ne
        }),
        n.d(i, 'LinkedErrors', function () {
          return ae
        }),
        n.d(i, 'UserAgent', function () {
          return ue
        })
      var o,
        s,
        a = '6.3.2',
        c = (function () {
          function t() {
            this.name = t.id
          }
          return (
            (t.prototype.setupOnce = function () {
              ;(o = Function.prototype.toString),
                (Function.prototype.toString = function () {
                  for (var t = [], e = 0; e < arguments.length; e++)
                    t[e] = arguments[e]
                  var n = this.__sentry_original__ || this
                  return o.apply(n, t)
                })
            }),
            (t.id = 'FunctionToString'),
            t
          )
        })(),
        u = n('mrSG'),
        p = n('9AQC'),
        h = n('kdvv')
      !(function (t) {
        ;(t.PENDING = 'PENDING'),
          (t.RESOLVED = 'RESOLVED'),
          (t.REJECTED = 'REJECTED')
      })(s || (s = {}))
      var l,
        d = (function () {
          function t(t) {
            var e = this
            ;(this._state = s.PENDING),
              (this._handlers = []),
              (this._resolve = function (t) {
                e._setResult(s.RESOLVED, t)
              }),
              (this._reject = function (t) {
                e._setResult(s.REJECTED, t)
              }),
              (this._setResult = function (t, n) {
                e._state === s.PENDING &&
                  (Object(p.m)(n)
                    ? n.then(e._resolve, e._reject)
                    : ((e._state = t), (e._value = n), e._executeHandlers()))
              }),
              (this._attachHandler = function (t) {
                ;(e._handlers = e._handlers.concat(t)), e._executeHandlers()
              }),
              (this._executeHandlers = function () {
                if (e._state !== s.PENDING) {
                  var t = e._handlers.slice()
                  ;(e._handlers = []),
                    t.forEach(function (t) {
                      t.done ||
                        (e._state === s.RESOLVED &&
                          t.onfulfilled &&
                          t.onfulfilled(e._value),
                        e._state === s.REJECTED &&
                          t.onrejected &&
                          t.onrejected(e._value),
                        (t.done = !0))
                    })
                }
              })
            try {
              t(this._resolve, this._reject)
            } catch (n) {
              this._reject(n)
            }
          }
          return (
            (t.resolve = function (e) {
              return new t(function (t) {
                t(e)
              })
            }),
            (t.reject = function (e) {
              return new t(function (t, n) {
                n(e)
              })
            }),
            (t.all = function (e) {
              return new t(function (n, r) {
                if (Array.isArray(e))
                  if (0 !== e.length) {
                    var i = e.length,
                      o = []
                    e.forEach(function (e, s) {
                      t.resolve(e)
                        .then(function (t) {
                          ;(o[s] = t), 0 === (i -= 1) && n(o)
                        })
                        .then(null, r)
                    })
                  } else n([])
                else r(new TypeError('Promise.all requires an array as input.'))
              })
            }),
            (t.prototype.then = function (e, n) {
              var r = this
              return new t(function (t, i) {
                r._attachHandler({
                  done: !1,
                  onfulfilled: function (n) {
                    if (e)
                      try {
                        return void t(e(n))
                      } catch (r) {
                        return void i(r)
                      }
                    else t(n)
                  },
                  onrejected: function (e) {
                    if (n)
                      try {
                        return void t(n(e))
                      } catch (r) {
                        return void i(r)
                      }
                    else i(e)
                  },
                })
              })
            }),
            (t.prototype.catch = function (t) {
              return this.then(function (t) {
                return t
              }, t)
            }),
            (t.prototype.finally = function (e) {
              var n = this
              return new t(function (t, r) {
                var i, o
                return n
                  .then(
                    function (t) {
                      ;(o = !1), (i = t), e && e()
                    },
                    function (t) {
                      ;(o = !0), (i = t), e && e()
                    },
                  )
                  .then(function () {
                    o ? r(i) : t(i)
                  })
              })
            }),
            (t.prototype.toString = function () {
              return '[object SyncPromise]'
            }),
            t
          )
        })(),
        f = n('9/Zf'),
        _ = (function () {
          function t() {
            ;(this._notifyingListeners = !1),
              (this._scopeListeners = []),
              (this._eventProcessors = []),
              (this._breadcrumbs = []),
              (this._user = {}),
              (this._tags = {}),
              (this._extra = {}),
              (this._contexts = {})
          }
          return (
            (t.clone = function (e) {
              var n = new t()
              return (
                e &&
                  ((n._breadcrumbs = Object(u.e)(e._breadcrumbs)),
                  (n._tags = Object(u.a)({}, e._tags)),
                  (n._extra = Object(u.a)({}, e._extra)),
                  (n._contexts = Object(u.a)({}, e._contexts)),
                  (n._user = e._user),
                  (n._level = e._level),
                  (n._span = e._span),
                  (n._session = e._session),
                  (n._transactionName = e._transactionName),
                  (n._fingerprint = e._fingerprint),
                  (n._eventProcessors = Object(u.e)(e._eventProcessors))),
                n
              )
            }),
            (t.prototype.addScopeListener = function (t) {
              this._scopeListeners.push(t)
            }),
            (t.prototype.addEventProcessor = function (t) {
              return this._eventProcessors.push(t), this
            }),
            (t.prototype.setUser = function (t) {
              return (
                (this._user = t || {}),
                this._session && this._session.update({ user: t }),
                this._notifyScopeListeners(),
                this
              )
            }),
            (t.prototype.getUser = function () {
              return this._user
            }),
            (t.prototype.setTags = function (t) {
              return (
                (this._tags = Object(u.a)(Object(u.a)({}, this._tags), t)),
                this._notifyScopeListeners(),
                this
              )
            }),
            (t.prototype.setTag = function (t, e) {
              var n
              return (
                (this._tags = Object(u.a)(
                  Object(u.a)({}, this._tags),
                  (((n = {})[t] = e), n),
                )),
                this._notifyScopeListeners(),
                this
              )
            }),
            (t.prototype.setExtras = function (t) {
              return (
                (this._extra = Object(u.a)(Object(u.a)({}, this._extra), t)),
                this._notifyScopeListeners(),
                this
              )
            }),
            (t.prototype.setExtra = function (t, e) {
              var n
              return (
                (this._extra = Object(u.a)(
                  Object(u.a)({}, this._extra),
                  (((n = {})[t] = e), n),
                )),
                this._notifyScopeListeners(),
                this
              )
            }),
            (t.prototype.setFingerprint = function (t) {
              return (this._fingerprint = t), this._notifyScopeListeners(), this
            }),
            (t.prototype.setLevel = function (t) {
              return (this._level = t), this._notifyScopeListeners(), this
            }),
            (t.prototype.setTransactionName = function (t) {
              return (
                (this._transactionName = t), this._notifyScopeListeners(), this
              )
            }),
            (t.prototype.setTransaction = function (t) {
              return this.setTransactionName(t)
            }),
            (t.prototype.setContext = function (t, e) {
              var n
              return (
                null === e
                  ? delete this._contexts[t]
                  : (this._contexts = Object(u.a)(
                      Object(u.a)({}, this._contexts),
                      (((n = {})[t] = e), n),
                    )),
                this._notifyScopeListeners(),
                this
              )
            }),
            (t.prototype.setSpan = function (t) {
              return (this._span = t), this._notifyScopeListeners(), this
            }),
            (t.prototype.getSpan = function () {
              return this._span
            }),
            (t.prototype.getTransaction = function () {
              var t,
                e,
                n,
                r,
                i = this.getSpan()
              return (null === (t = i) || void 0 === t ? void 0 : t.transaction)
                ? null === (e = i) || void 0 === e
                  ? void 0
                  : e.transaction
                : (
                    null ===
                      (r =
                        null === (n = i) || void 0 === n
                          ? void 0
                          : n.spanRecorder) || void 0 === r
                      ? void 0
                      : r.spans[0]
                  )
                ? i.spanRecorder.spans[0]
                : void 0
            }),
            (t.prototype.setSession = function (t) {
              return (
                t ? (this._session = t) : delete this._session,
                this._notifyScopeListeners(),
                this
              )
            }),
            (t.prototype.getSession = function () {
              return this._session
            }),
            (t.prototype.update = function (e) {
              if (!e) return this
              if ('function' === typeof e) {
                var n = e(this)
                return n instanceof t ? n : this
              }
              return (
                e instanceof t
                  ? ((this._tags = Object(u.a)(
                      Object(u.a)({}, this._tags),
                      e._tags,
                    )),
                    (this._extra = Object(u.a)(
                      Object(u.a)({}, this._extra),
                      e._extra,
                    )),
                    (this._contexts = Object(u.a)(
                      Object(u.a)({}, this._contexts),
                      e._contexts,
                    )),
                    e._user &&
                      Object.keys(e._user).length &&
                      (this._user = e._user),
                    e._level && (this._level = e._level),
                    e._fingerprint && (this._fingerprint = e._fingerprint))
                  : Object(p.h)(e) &&
                    ((e = e),
                    (this._tags = Object(u.a)(
                      Object(u.a)({}, this._tags),
                      e.tags,
                    )),
                    (this._extra = Object(u.a)(
                      Object(u.a)({}, this._extra),
                      e.extra,
                    )),
                    (this._contexts = Object(u.a)(
                      Object(u.a)({}, this._contexts),
                      e.contexts,
                    )),
                    e.user && (this._user = e.user),
                    e.level && (this._level = e.level),
                    e.fingerprint && (this._fingerprint = e.fingerprint)),
                this
              )
            }),
            (t.prototype.clear = function () {
              return (
                (this._breadcrumbs = []),
                (this._tags = {}),
                (this._extra = {}),
                (this._user = {}),
                (this._contexts = {}),
                (this._level = void 0),
                (this._transactionName = void 0),
                (this._fingerprint = void 0),
                (this._span = void 0),
                (this._session = void 0),
                this._notifyScopeListeners(),
                this
              )
            }),
            (t.prototype.addBreadcrumb = function (t, e) {
              var n = Object(u.a)({ timestamp: Object(h.a)() }, t)
              return (
                (this._breadcrumbs =
                  void 0 !== e && e >= 0
                    ? Object(u.e)(this._breadcrumbs, [n]).slice(-e)
                    : Object(u.e)(this._breadcrumbs, [n])),
                this._notifyScopeListeners(),
                this
              )
            }),
            (t.prototype.clearBreadcrumbs = function () {
              return (
                (this._breadcrumbs = []), this._notifyScopeListeners(), this
              )
            }),
            (t.prototype.applyToEvent = function (t, e) {
              var n
              if (
                (this._extra &&
                  Object.keys(this._extra).length &&
                  (t.extra = Object(u.a)(
                    Object(u.a)({}, this._extra),
                    t.extra,
                  )),
                this._tags &&
                  Object.keys(this._tags).length &&
                  (t.tags = Object(u.a)(Object(u.a)({}, this._tags), t.tags)),
                this._user &&
                  Object.keys(this._user).length &&
                  (t.user = Object(u.a)(Object(u.a)({}, this._user), t.user)),
                this._contexts &&
                  Object.keys(this._contexts).length &&
                  (t.contexts = Object(u.a)(
                    Object(u.a)({}, this._contexts),
                    t.contexts,
                  )),
                this._level && (t.level = this._level),
                this._transactionName &&
                  (t.transaction = this._transactionName),
                this._span)
              ) {
                t.contexts = Object(u.a)(
                  { trace: this._span.getTraceContext() },
                  t.contexts,
                )
                var r =
                  null === (n = this._span.transaction) || void 0 === n
                    ? void 0
                    : n.name
                r && (t.tags = Object(u.a)({ transaction: r }, t.tags))
              }
              return (
                this._applyFingerprint(t),
                (t.breadcrumbs = Object(u.e)(
                  t.breadcrumbs || [],
                  this._breadcrumbs,
                )),
                (t.breadcrumbs =
                  t.breadcrumbs.length > 0 ? t.breadcrumbs : void 0),
                this._notifyEventProcessors(
                  Object(u.e)(v(), this._eventProcessors),
                  t,
                  e,
                )
              )
            }),
            (t.prototype._notifyEventProcessors = function (t, e, n, r) {
              var i = this
              return (
                void 0 === r && (r = 0),
                new d(function (o, s) {
                  var a = t[r]
                  if (null === e || 'function' !== typeof a) o(e)
                  else {
                    var c = a(Object(u.a)({}, e), n)
                    Object(p.m)(c)
                      ? c
                          .then(function (e) {
                            return i
                              ._notifyEventProcessors(t, e, n, r + 1)
                              .then(o)
                          })
                          .then(null, s)
                      : i
                          ._notifyEventProcessors(t, c, n, r + 1)
                          .then(o)
                          .then(null, s)
                  }
                })
              )
            }),
            (t.prototype._notifyScopeListeners = function () {
              var t = this
              this._notifyingListeners ||
                ((this._notifyingListeners = !0),
                this._scopeListeners.forEach(function (e) {
                  e(t)
                }),
                (this._notifyingListeners = !1))
            }),
            (t.prototype._applyFingerprint = function (t) {
              ;(t.fingerprint = t.fingerprint
                ? Array.isArray(t.fingerprint)
                  ? t.fingerprint
                  : [t.fingerprint]
                : []),
                this._fingerprint &&
                  (t.fingerprint = t.fingerprint.concat(this._fingerprint)),
                t.fingerprint && !t.fingerprint.length && delete t.fingerprint
            }),
            t
          )
        })()
      function v() {
        var t = Object(f.e)()
        return (
          (t.__SENTRY__ = t.__SENTRY__ || {}),
          (t.__SENTRY__.globalEventProcessors =
            t.__SENTRY__.globalEventProcessors || []),
          t.__SENTRY__.globalEventProcessors
        )
      }
      function y(t) {
        v().push(t)
      }
      !(function (t) {
        ;(t.Ok = 'ok'),
          (t.Exited = 'exited'),
          (t.Crashed = 'crashed'),
          (t.Abnormal = 'abnormal')
      })(l || (l = {}))
      var g = Object(f.e)(),
        b = 'Sentry Logger ',
        m = (function () {
          function t() {
            this._enabled = !1
          }
          return (
            (t.prototype.disable = function () {
              this._enabled = !1
            }),
            (t.prototype.enable = function () {
              this._enabled = !0
            }),
            (t.prototype.log = function () {
              for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e]
              this._enabled &&
                Object(f.c)(function () {
                  g.console.log(b + '[Log]: ' + t.join(' '))
                })
            }),
            (t.prototype.warn = function () {
              for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e]
              this._enabled &&
                Object(f.c)(function () {
                  g.console.warn(b + '[Warn]: ' + t.join(' '))
                })
            }),
            (t.prototype.error = function () {
              for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e]
              this._enabled &&
                Object(f.c)(function () {
                  g.console.error(b + '[Error]: ' + t.join(' '))
                })
            }),
            t
          )
        })()
      g.__SENTRY__ = g.__SENTRY__ || {}
      var O = g.__SENTRY__.logger || (g.__SENTRY__.logger = new m()),
        j = n('+A1k'),
        E = n('6PXS'),
        S = (function () {
          function t(t) {
            ;(this.errors = 0),
              (this.sid = Object(f.i)()),
              (this.timestamp = Date.now()),
              (this.started = Date.now()),
              (this.duration = 0),
              (this.status = l.Ok),
              (this.init = !0),
              t && this.update(t)
          }
          return (
            (t.prototype.update = function (t) {
              void 0 === t && (t = {}),
                t.user &&
                  (t.user.ip_address && (this.ipAddress = t.user.ip_address),
                  t.did ||
                    (this.did = t.user.id || t.user.email || t.user.username)),
                (this.timestamp = t.timestamp || Date.now()),
                t.sid &&
                  (this.sid = 32 === t.sid.length ? t.sid : Object(f.i)()),
                void 0 !== t.init && (this.init = t.init),
                t.did && (this.did = '' + t.did),
                'number' === typeof t.started && (this.started = t.started),
                'number' === typeof t.duration
                  ? (this.duration = t.duration)
                  : (this.duration = this.timestamp - this.started),
                t.release && (this.release = t.release),
                t.environment && (this.environment = t.environment),
                t.ipAddress && (this.ipAddress = t.ipAddress),
                t.userAgent && (this.userAgent = t.userAgent),
                'number' === typeof t.errors && (this.errors = t.errors),
                t.status && (this.status = t.status)
            }),
            (t.prototype.close = function (t) {
              t
                ? this.update({ status: t })
                : this.status === l.Ok
                ? this.update({ status: l.Exited })
                : this.update()
            }),
            (t.prototype.toJSON = function () {
              return Object(E.a)({
                sid: '' + this.sid,
                init: this.init,
                started: new Date(this.started).toISOString(),
                timestamp: new Date(this.timestamp).toISOString(),
                status: this.status,
                errors: this.errors,
                did:
                  'number' === typeof this.did || 'string' === typeof this.did
                    ? '' + this.did
                    : void 0,
                duration: this.duration,
                attrs: Object(E.a)({
                  release: this.release,
                  environment: this.environment,
                  ip_address: this.ipAddress,
                  user_agent: this.userAgent,
                }),
              })
            }),
            t
          )
        })(),
        x = (function () {
          function t(t, e, n) {
            void 0 === e && (e = new _()),
              void 0 === n && (n = 3),
              (this._version = n),
              (this._stack = [{}]),
              (this.getStackTop().scope = e),
              this.bindClient(t)
          }
          return (
            (t.prototype.isOlderThan = function (t) {
              return this._version < t
            }),
            (t.prototype.bindClient = function (t) {
              ;(this.getStackTop().client = t),
                t && t.setupIntegrations && t.setupIntegrations()
            }),
            (t.prototype.pushScope = function () {
              var t = _.clone(this.getScope())
              return (
                this.getStack().push({ client: this.getClient(), scope: t }), t
              )
            }),
            (t.prototype.popScope = function () {
              return !(this.getStack().length <= 1) && !!this.getStack().pop()
            }),
            (t.prototype.withScope = function (t) {
              var e = this.pushScope()
              try {
                t(e)
              } finally {
                this.popScope()
              }
            }),
            (t.prototype.getClient = function () {
              return this.getStackTop().client
            }),
            (t.prototype.getScope = function () {
              return this.getStackTop().scope
            }),
            (t.prototype.getStack = function () {
              return this._stack
            }),
            (t.prototype.getStackTop = function () {
              return this._stack[this._stack.length - 1]
            }),
            (t.prototype.captureException = function (t, e) {
              var n = (this._lastEventId = Object(f.i)()),
                r = e
              if (!e) {
                var i = void 0
                try {
                  throw new Error('Sentry syntheticException')
                } catch (t) {
                  i = t
                }
                r = { originalException: t, syntheticException: i }
              }
              return (
                this._invokeClient(
                  'captureException',
                  t,
                  Object(u.a)(Object(u.a)({}, r), { event_id: n }),
                ),
                n
              )
            }),
            (t.prototype.captureMessage = function (t, e, n) {
              var r = (this._lastEventId = Object(f.i)()),
                i = n
              if (!n) {
                var o = void 0
                try {
                  throw new Error(t)
                } catch (s) {
                  o = s
                }
                i = { originalException: t, syntheticException: o }
              }
              return (
                this._invokeClient(
                  'captureMessage',
                  t,
                  e,
                  Object(u.a)(Object(u.a)({}, i), { event_id: r }),
                ),
                r
              )
            }),
            (t.prototype.captureEvent = function (t, e) {
              var n = (this._lastEventId = Object(f.i)())
              return (
                this._invokeClient(
                  'captureEvent',
                  t,
                  Object(u.a)(Object(u.a)({}, e), { event_id: n }),
                ),
                n
              )
            }),
            (t.prototype.lastEventId = function () {
              return this._lastEventId
            }),
            (t.prototype.addBreadcrumb = function (t, e) {
              var n = this.getStackTop(),
                r = n.scope,
                i = n.client
              if (r && i) {
                var o = (i.getOptions && i.getOptions()) || {},
                  s = o.beforeBreadcrumb,
                  a = void 0 === s ? null : s,
                  c = o.maxBreadcrumbs,
                  p = void 0 === c ? 100 : c
                if (!(p <= 0)) {
                  var l = Object(h.a)(),
                    d = Object(u.a)({ timestamp: l }, t),
                    _ = a
                      ? Object(f.c)(function () {
                          return a(d, e)
                        })
                      : d
                  null !== _ && r.addBreadcrumb(_, Math.min(p, 100))
                }
              }
            }),
            (t.prototype.setUser = function (t) {
              var e = this.getScope()
              e && e.setUser(t)
            }),
            (t.prototype.setTags = function (t) {
              var e = this.getScope()
              e && e.setTags(t)
            }),
            (t.prototype.setExtras = function (t) {
              var e = this.getScope()
              e && e.setExtras(t)
            }),
            (t.prototype.setTag = function (t, e) {
              var n = this.getScope()
              n && n.setTag(t, e)
            }),
            (t.prototype.setExtra = function (t, e) {
              var n = this.getScope()
              n && n.setExtra(t, e)
            }),
            (t.prototype.setContext = function (t, e) {
              var n = this.getScope()
              n && n.setContext(t, e)
            }),
            (t.prototype.configureScope = function (t) {
              var e = this.getStackTop(),
                n = e.scope,
                r = e.client
              n && r && t(n)
            }),
            (t.prototype.run = function (t) {
              var e = k(this)
              try {
                t(this)
              } finally {
                k(e)
              }
            }),
            (t.prototype.getIntegration = function (t) {
              var e = this.getClient()
              if (!e) return null
              try {
                return e.getIntegration(t)
              } catch (n) {
                return (
                  O.warn(
                    'Cannot retrieve integration ' +
                      t.id +
                      ' from the current Hub',
                  ),
                  null
                )
              }
            }),
            (t.prototype.startSpan = function (t) {
              return this._callExtensionMethod('startSpan', t)
            }),
            (t.prototype.startTransaction = function (t, e) {
              return this._callExtensionMethod('startTransaction', t, e)
            }),
            (t.prototype.traceHeaders = function () {
              return this._callExtensionMethod('traceHeaders')
            }),
            (t.prototype.captureSession = function (t) {
              if ((void 0 === t && (t = !1), t)) return this.endSession()
              this._sendSessionUpdate()
            }),
            (t.prototype.endSession = function () {
              var t, e, n, r, i
              null ===
                (n =
                  null ===
                    (e =
                      null === (t = this.getStackTop()) || void 0 === t
                        ? void 0
                        : t.scope) || void 0 === e
                    ? void 0
                    : e.getSession()) ||
                void 0 === n ||
                n.close(),
                this._sendSessionUpdate(),
                null ===
                  (i =
                    null === (r = this.getStackTop()) || void 0 === r
                      ? void 0
                      : r.scope) ||
                  void 0 === i ||
                  i.setSession()
            }),
            (t.prototype.startSession = function (t) {
              var e = this.getStackTop(),
                n = e.scope,
                r = e.client,
                i = (r && r.getOptions()) || {},
                o = i.release,
                s = i.environment,
                a = new S(
                  Object(u.a)(
                    Object(u.a)(
                      { release: o, environment: s },
                      n && { user: n.getUser() },
                    ),
                    t,
                  ),
                )
              if (n) {
                var c = n.getSession && n.getSession()
                c && c.status === l.Ok && c.update({ status: l.Exited }),
                  this.endSession(),
                  n.setSession(a)
              }
              return a
            }),
            (t.prototype._sendSessionUpdate = function () {
              var t = this.getStackTop(),
                e = t.scope,
                n = t.client
              if (e) {
                var r = e.getSession && e.getSession()
                r && n && n.captureSession && n.captureSession(r)
              }
            }),
            (t.prototype._invokeClient = function (t) {
              for (var e, n = [], r = 1; r < arguments.length; r++)
                n[r - 1] = arguments[r]
              var i = this.getStackTop(),
                o = i.scope,
                s = i.client
              s && s[t] && (e = s)[t].apply(e, Object(u.e)(n, [o]))
            }),
            (t.prototype._callExtensionMethod = function (t) {
              for (var e = [], n = 1; n < arguments.length; n++)
                e[n - 1] = arguments[n]
              var r = w(),
                i = r.__SENTRY__
              if (i && i.extensions && 'function' === typeof i.extensions[t])
                return i.extensions[t].apply(this, e)
              O.warn(
                'Extension method ' + t + " couldn't be found, doing nothing.",
              )
            }),
            t
          )
        })()
      function w() {
        var t = Object(f.e)()
        return (
          (t.__SENTRY__ = t.__SENTRY__ || { extensions: {}, hub: void 0 }), t
        )
      }
      function k(t) {
        var e = w(),
          n = N(e)
        return I(e, t), n
      }
      function T() {
        var t = w()
        return (
          (R(t) && !N(t).isOlderThan(3)) || I(t, new x()),
          Object(j.b)()
            ? (function (t) {
                var e, n, r
                try {
                  var i =
                    null ===
                      (r =
                        null ===
                          (n =
                            null === (e = w().__SENTRY__) || void 0 === e
                              ? void 0
                              : e.extensions) || void 0 === n
                          ? void 0
                          : n.domain) || void 0 === r
                      ? void 0
                      : r.active
                  if (!i) return N(t)
                  if (!R(i) || N(i).isOlderThan(3)) {
                    var o = N(t).getStackTop()
                    I(i, new x(o.client, _.clone(o.scope)))
                  }
                  return N(i)
                } catch (s) {
                  return N(t)
                }
              })(t)
            : N(t)
        )
      }
      function R(t) {
        return !!(t && t.__SENTRY__ && t.__SENTRY__.hub)
      }
      function N(t) {
        return (
          (t && t.__SENTRY__ && t.__SENTRY__.hub) ||
            ((t.__SENTRY__ = t.__SENTRY__ || {}), (t.__SENTRY__.hub = new x())),
          t.__SENTRY__.hub
        )
      }
      function I(t, e) {
        return (
          !!t &&
          ((t.__SENTRY__ = t.__SENTRY__ || {}), (t.__SENTRY__.hub = e), !0)
        )
      }
      var L = n('+924'),
        C = [
          /^Script error\.?$/,
          /^Javascript error: Script error\.? on line 0$/,
        ],
        A = (function () {
          function t(e) {
            void 0 === e && (e = {}), (this._options = e), (this.name = t.id)
          }
          return (
            (t.prototype.setupOnce = function () {
              y(function (e) {
                var n = T()
                if (!n) return e
                var r = n.getIntegration(t)
                if (r) {
                  var i = n.getClient(),
                    o = i ? i.getOptions() : {},
                    s =
                      'function' === typeof r._mergeOptions
                        ? r._mergeOptions(o)
                        : {}
                  return 'function' !== typeof r._shouldDropEvent
                    ? e
                    : r._shouldDropEvent(e, s)
                    ? null
                    : e
                }
                return e
              })
            }),
            (t.prototype._shouldDropEvent = function (t, e) {
              return this._isSentryError(t, e)
                ? (O.warn(
                    'Event dropped due to being internal Sentry Error.\nEvent: ' +
                      Object(f.d)(t),
                  ),
                  !0)
                : this._isIgnoredError(t, e)
                ? (O.warn(
                    'Event dropped due to being matched by `ignoreErrors` option.\nEvent: ' +
                      Object(f.d)(t),
                  ),
                  !0)
                : this._isDeniedUrl(t, e)
                ? (O.warn(
                    'Event dropped due to being matched by `denyUrls` option.\nEvent: ' +
                      Object(f.d)(t) +
                      '.\nUrl: ' +
                      this._getEventFilterUrl(t),
                  ),
                  !0)
                : !this._isAllowedUrl(t, e) &&
                  (O.warn(
                    'Event dropped due to not being matched by `allowUrls` option.\nEvent: ' +
                      Object(f.d)(t) +
                      '.\nUrl: ' +
                      this._getEventFilterUrl(t),
                  ),
                  !0)
            }),
            (t.prototype._isSentryError = function (t, e) {
              if (!e.ignoreInternal) return !1
              try {
                return (
                  (t &&
                    t.exception &&
                    t.exception.values &&
                    t.exception.values[0] &&
                    'SentryError' === t.exception.values[0].type) ||
                  !1
                )
              } catch (n) {
                return !1
              }
            }),
            (t.prototype._isIgnoredError = function (t, e) {
              return (
                !(!e.ignoreErrors || !e.ignoreErrors.length) &&
                this._getPossibleEventMessages(t).some(function (t) {
                  return e.ignoreErrors.some(function (e) {
                    return Object(L.a)(t, e)
                  })
                })
              )
            }),
            (t.prototype._isDeniedUrl = function (t, e) {
              if (!e.denyUrls || !e.denyUrls.length) return !1
              var n = this._getEventFilterUrl(t)
              return (
                !!n &&
                e.denyUrls.some(function (t) {
                  return Object(L.a)(n, t)
                })
              )
            }),
            (t.prototype._isAllowedUrl = function (t, e) {
              if (!e.allowUrls || !e.allowUrls.length) return !0
              var n = this._getEventFilterUrl(t)
              return (
                !n ||
                e.allowUrls.some(function (t) {
                  return Object(L.a)(n, t)
                })
              )
            }),
            (t.prototype._mergeOptions = function (t) {
              return (
                void 0 === t && (t = {}),
                {
                  allowUrls: Object(u.e)(
                    this._options.whitelistUrls || [],
                    this._options.allowUrls || [],
                    t.whitelistUrls || [],
                    t.allowUrls || [],
                  ),
                  denyUrls: Object(u.e)(
                    this._options.blacklistUrls || [],
                    this._options.denyUrls || [],
                    t.blacklistUrls || [],
                    t.denyUrls || [],
                  ),
                  ignoreErrors: Object(u.e)(
                    this._options.ignoreErrors || [],
                    t.ignoreErrors || [],
                    C,
                  ),
                  ignoreInternal:
                    'undefined' === typeof this._options.ignoreInternal ||
                    this._options.ignoreInternal,
                }
              )
            }),
            (t.prototype._getPossibleEventMessages = function (t) {
              if (t.message) return [t.message]
              if (t.exception)
                try {
                  var e = (t.exception.values && t.exception.values[0]) || {},
                    n = e.type,
                    r = void 0 === n ? '' : n,
                    i = e.value,
                    o = void 0 === i ? '' : i
                  return ['' + o, r + ': ' + o]
                } catch (s) {
                  return (
                    O.error(
                      'Cannot extract message for event ' + Object(f.d)(t),
                    ),
                    []
                  )
                }
              return []
            }),
            (t.prototype._getEventFilterUrl = function (t) {
              try {
                if (t.stacktrace) {
                  var e = t.stacktrace.frames
                  return (e && e[e.length - 1].filename) || null
                }
                if (t.exception) {
                  var n =
                    t.exception.values &&
                    t.exception.values[0].stacktrace &&
                    t.exception.values[0].stacktrace.frames
                  return (n && n[n.length - 1].filename) || null
                }
                return null
              } catch (r) {
                return (
                  O.error('Cannot extract url for event ' + Object(f.d)(t)),
                  null
                )
              }
            }),
            (t.id = 'InboundFilters'),
            t
          )
        })()
      var D = n('pRiV')
      function U() {
        if (!('fetch' in Object(f.e)())) return !1
        try {
          return new Headers(), new Request(''), new Response(), !0
        } catch (t) {
          return !1
        }
      }
      function P(t) {
        return (
          t &&
          /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(t.toString())
        )
      }
      function M() {
        if (!U()) return !1
        try {
          return new Request('_', { referrerPolicy: 'origin' }), !0
        } catch (t) {
          return !1
        }
      }
      var F,
        B = Object(f.e)(),
        q = {},
        Y = {}
      function H(t) {
        if (!Y[t])
          switch (((Y[t] = !0), t)) {
            case 'console':
              !(function () {
                if (!('console' in B)) return
                ;['debug', 'info', 'warn', 'error', 'log', 'assert'].forEach(
                  function (t) {
                    t in B.console &&
                      Object(E.c)(B.console, t, function (e) {
                        return function () {
                          for (var n = [], r = 0; r < arguments.length; r++)
                            n[r] = arguments[r]
                          J('console', { args: n, level: t }),
                            e && Function.prototype.apply.call(e, B.console, n)
                        }
                      })
                  },
                )
              })()
              break
            case 'dom':
              !(function () {
                if (!('document' in B)) return
                var t = J.bind(null, 'dom'),
                  e = V(t, !0)
                B.document.addEventListener('click', e, !1),
                  B.document.addEventListener('keypress', e, !1),
                  ['EventTarget', 'Node'].forEach(function (e) {
                    var n = B[e] && B[e].prototype
                    n &&
                      n.hasOwnProperty &&
                      n.hasOwnProperty('addEventListener') &&
                      (Object(E.c)(n, 'addEventListener', function (e) {
                        return function (n, r, i) {
                          if ('click' === n || 'keypress' == n)
                            try {
                              var o = this,
                                s = (o.__sentry_instrumentation_handlers__ =
                                  o.__sentry_instrumentation_handlers__ || {}),
                                a = (s[n] = s[n] || { refCount: 0 })
                              if (!a.handler) {
                                var c = V(t)
                                ;(a.handler = c), e.call(this, n, c, i)
                              }
                              a.refCount += 1
                            } catch (u) {}
                          return e.call(this, n, r, i)
                        }
                      }),
                      Object(E.c)(n, 'removeEventListener', function (t) {
                        return function (e, n, r) {
                          if ('click' === e || 'keypress' == e)
                            try {
                              var i = this,
                                o = i.__sentry_instrumentation_handlers__ || {},
                                s = o[e]
                              s &&
                                ((s.refCount -= 1),
                                s.refCount <= 0 &&
                                  (t.call(this, e, s.handler, r),
                                  (s.handler = void 0),
                                  delete o[e]),
                                0 === Object.keys(o).length &&
                                  delete i.__sentry_instrumentation_handlers__)
                            } catch (a) {}
                          return t.call(this, e, n, r)
                        }
                      }))
                  })
              })()
              break
            case 'xhr':
              !(function () {
                if (!('XMLHttpRequest' in B)) return
                var t = [],
                  e = [],
                  n = XMLHttpRequest.prototype
                Object(E.c)(n, 'open', function (n) {
                  return function () {
                    for (var r = [], i = 0; i < arguments.length; i++)
                      r[i] = arguments[i]
                    var o = this,
                      s = r[1]
                    ;(o.__sentry_xhr__ = {
                      method: Object(p.k)(r[0]) ? r[0].toUpperCase() : r[0],
                      url: r[1],
                    }),
                      Object(p.k)(s) &&
                        'POST' === o.__sentry_xhr__.method &&
                        s.match(/sentry_key/) &&
                        (o.__sentry_own_request__ = !0)
                    var a = function () {
                      if (4 === o.readyState) {
                        try {
                          o.__sentry_xhr__ &&
                            (o.__sentry_xhr__.status_code = o.status)
                        } catch (s) {}
                        try {
                          var n = t.indexOf(o)
                          if (-1 !== n) {
                            t.splice(n)
                            var i = e.splice(n)[0]
                            o.__sentry_xhr__ &&
                              void 0 !== i[0] &&
                              (o.__sentry_xhr__.body = i[0])
                          }
                        } catch (s) {}
                        J('xhr', {
                          args: r,
                          endTimestamp: Date.now(),
                          startTimestamp: Date.now(),
                          xhr: o,
                        })
                      }
                    }
                    return (
                      'onreadystatechange' in o &&
                      'function' === typeof o.onreadystatechange
                        ? Object(E.c)(o, 'onreadystatechange', function (t) {
                            return function () {
                              for (var e = [], n = 0; n < arguments.length; n++)
                                e[n] = arguments[n]
                              return a(), t.apply(o, e)
                            }
                          })
                        : o.addEventListener('readystatechange', a),
                      n.apply(o, r)
                    )
                  }
                }),
                  Object(E.c)(n, 'send', function (n) {
                    return function () {
                      for (var r = [], i = 0; i < arguments.length; i++)
                        r[i] = arguments[i]
                      return (
                        t.push(this),
                        e.push(r),
                        J('xhr', {
                          args: r,
                          startTimestamp: Date.now(),
                          xhr: this,
                        }),
                        n.apply(this, r)
                      )
                    }
                  })
              })()
              break
            case 'fetch':
              !(function () {
                if (
                  !(function () {
                    if (!U()) return !1
                    var t = Object(f.e)()
                    if (P(t.fetch)) return !0
                    var e = !1,
                      n = t.document
                    if (n && 'function' === typeof n.createElement)
                      try {
                        var r = n.createElement('iframe')
                        ;(r.hidden = !0),
                          n.head.appendChild(r),
                          r.contentWindow &&
                            r.contentWindow.fetch &&
                            (e = P(r.contentWindow.fetch)),
                          n.head.removeChild(r)
                      } catch (i) {
                        O.warn(
                          'Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ',
                          i,
                        )
                      }
                    return e
                  })()
                )
                  return
                Object(E.c)(B, 'fetch', function (t) {
                  return function () {
                    for (var e = [], n = 0; n < arguments.length; n++)
                      e[n] = arguments[n]
                    var r = {
                      args: e,
                      fetchData: { method: G(e), url: X(e) },
                      startTimestamp: Date.now(),
                    }
                    return (
                      J('fetch', Object(u.a)({}, r)),
                      t.apply(B, e).then(
                        function (t) {
                          return (
                            J(
                              'fetch',
                              Object(u.a)(Object(u.a)({}, r), {
                                endTimestamp: Date.now(),
                                response: t,
                              }),
                            ),
                            t
                          )
                        },
                        function (t) {
                          throw (
                            (J(
                              'fetch',
                              Object(u.a)(Object(u.a)({}, r), {
                                endTimestamp: Date.now(),
                                error: t,
                              }),
                            ),
                            t)
                          )
                        },
                      )
                    )
                  }
                })
              })()
              break
            case 'history':
              !(function () {
                if (
                  !(function () {
                    var t = Object(f.e)(),
                      e = t.chrome,
                      n = e && e.app && e.app.runtime,
                      r =
                        'history' in t &&
                        !!t.history.pushState &&
                        !!t.history.replaceState
                    return !n && r
                  })()
                )
                  return
                var t = B.onpopstate
                function e(t) {
                  return function () {
                    for (var e = [], n = 0; n < arguments.length; n++)
                      e[n] = arguments[n]
                    var r = e.length > 2 ? e[2] : void 0
                    if (r) {
                      var i = F,
                        o = String(r)
                      ;(F = o), J('history', { from: i, to: o })
                    }
                    return t.apply(this, e)
                  }
                }
                ;(B.onpopstate = function () {
                  for (var e = [], n = 0; n < arguments.length; n++)
                    e[n] = arguments[n]
                  var r = B.location.href,
                    i = F
                  if (((F = r), J('history', { from: i, to: r }), t))
                    try {
                      return t.apply(this, e)
                    } catch (o) {}
                }),
                  Object(E.c)(B.history, 'pushState', e),
                  Object(E.c)(B.history, 'replaceState', e)
              })()
              break
            case 'error':
              ;($ = B.onerror),
                (B.onerror = function (t, e, n, r, i) {
                  return (
                    J('error', {
                      column: r,
                      error: i,
                      line: n,
                      msg: t,
                      url: e,
                    }),
                    !!$ && $.apply(this, arguments)
                  )
                })
              break
            case 'unhandledrejection':
              ;(Q = B.onunhandledrejection),
                (B.onunhandledrejection = function (t) {
                  return (
                    J('unhandledrejection', t), !Q || Q.apply(this, arguments)
                  )
                })
              break
            default:
              O.warn('unknown instrumentation type:', t)
          }
      }
      function W(t) {
        t &&
          'string' === typeof t.type &&
          'function' === typeof t.callback &&
          ((q[t.type] = q[t.type] || []), q[t.type].push(t.callback), H(t.type))
      }
      function J(t, e) {
        var n, r
        if (t && q[t])
          try {
            for (
              var i = Object(u.f)(q[t] || []), o = i.next();
              !o.done;
              o = i.next()
            ) {
              var s = o.value
              try {
                s(e)
              } catch (a) {
                O.error(
                  'Error while triggering instrumentation handler.\nType: ' +
                    t +
                    '\nName: ' +
                    Object(D.a)(s) +
                    '\nError: ' +
                    a,
                )
              }
            }
          } catch (c) {
            n = { error: c }
          } finally {
            try {
              o && !o.done && (r = i.return) && r.call(i)
            } finally {
              if (n) throw n.error
            }
          }
      }
      function G(t) {
        return (
          void 0 === t && (t = []),
          'Request' in B && Object(p.g)(t[0], Request) && t[0].method
            ? String(t[0].method).toUpperCase()
            : t[1] && t[1].method
            ? String(t[1].method).toUpperCase()
            : 'GET'
        )
      }
      function X(t) {
        return (
          void 0 === t && (t = []),
          'string' === typeof t[0]
            ? t[0]
            : 'Request' in B && Object(p.g)(t[0], Request)
            ? t[0].url
            : String(t[0])
        )
      }
      var K, z
      function V(t, e) {
        return (
          void 0 === e && (e = !1),
          function (n) {
            if (
              n &&
              z !== n &&
              !(function (t) {
                if ('keypress' !== t.type) return !1
                try {
                  var e = t.target
                  if (!e || !e.tagName) return !0
                  if (
                    'INPUT' === e.tagName ||
                    'TEXTAREA' === e.tagName ||
                    e.isContentEditable
                  )
                    return !1
                } catch (n) {}
                return !0
              })(n)
            ) {
              var r = 'keypress' === n.type ? 'input' : n.type
              ;(void 0 === K ||
                (function (t, e) {
                  if (!t) return !0
                  if (t.type !== e.type) return !0
                  try {
                    if (t.target !== e.target) return !0
                  } catch (n) {}
                  return !1
                })(z, n)) &&
                (t({ event: n, name: r, global: e }), (z = n)),
                clearTimeout(K),
                (K = B.setTimeout(function () {
                  K = void 0
                }, 1e3))
            }
          }
        )
      }
      var $ = null
      var Q = null
      var Z =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array
          ? function (t, e) {
              return (t.__proto__ = e), t
            }
          : function (t, e) {
              for (var n in e) t.hasOwnProperty(n) || (t[n] = e[n])
              return t
            })
      var tt = (function (t) {
          function e(e) {
            var n = this.constructor,
              r = t.call(this, e) || this
            return (
              (r.message = e),
              (r.name = n.prototype.constructor.name),
              Z(r, n.prototype),
              r
            )
          }
          return Object(u.b)(e, t), e
        })(Error),
        et = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+))?@)([\w.-]+)(?::(\d+))?\/(.+)/,
        nt = 'Invalid Dsn',
        rt = (function () {
          function t(t) {
            'string' === typeof t
              ? this._fromString(t)
              : this._fromComponents(t),
              this._validate()
          }
          return (
            (t.prototype.toString = function (t) {
              void 0 === t && (t = !1)
              var e = this,
                n = e.host,
                r = e.path,
                i = e.pass,
                o = e.port,
                s = e.projectId
              return (
                e.protocol +
                '://' +
                e.publicKey +
                (t && i ? ':' + i : '') +
                '@' +
                n +
                (o ? ':' + o : '') +
                '/' +
                (r ? r + '/' : r) +
                s
              )
            }),
            (t.prototype._fromString = function (t) {
              var e = et.exec(t)
              if (!e) throw new tt(nt)
              var n = Object(u.c)(e.slice(1), 6),
                r = n[0],
                i = n[1],
                o = n[2],
                s = void 0 === o ? '' : o,
                a = n[3],
                c = n[4],
                p = void 0 === c ? '' : c,
                h = '',
                l = n[5],
                d = l.split('/')
              if (
                (d.length > 1 &&
                  ((h = d.slice(0, -1).join('/')), (l = d.pop())),
                l)
              ) {
                var f = l.match(/^\d+/)
                f && (l = f[0])
              }
              this._fromComponents({
                host: a,
                pass: s,
                path: h,
                projectId: l,
                port: p,
                protocol: r,
                publicKey: i,
              })
            }),
            (t.prototype._fromComponents = function (t) {
              'user' in t && !('publicKey' in t) && (t.publicKey = t.user),
                (this.user = t.publicKey || ''),
                (this.protocol = t.protocol),
                (this.publicKey = t.publicKey || ''),
                (this.pass = t.pass || ''),
                (this.host = t.host),
                (this.port = t.port || ''),
                (this.path = t.path || ''),
                (this.projectId = t.projectId)
            }),
            (t.prototype._validate = function () {
              var t = this
              if (
                (['protocol', 'publicKey', 'host', 'projectId'].forEach(
                  function (e) {
                    if (!t[e]) throw new tt('Invalid Dsn: ' + e + ' missing')
                  },
                ),
                !this.projectId.match(/^\d+$/))
              )
                throw new tt('Invalid Dsn: Invalid projectId ' + this.projectId)
              if ('http' !== this.protocol && 'https' !== this.protocol)
                throw new tt('Invalid Dsn: Invalid protocol ' + this.protocol)
              if (this.port && isNaN(parseInt(this.port, 10)))
                throw new tt('Invalid Dsn: Invalid port ' + this.port)
            }),
            t
          )
        })(),
        it = []
      function ot(t) {
        var e = {}
        return (
          (function (t) {
            var e =
                (t.defaultIntegrations && Object(u.e)(t.defaultIntegrations)) ||
                [],
              n = t.integrations,
              r = []
            if (Array.isArray(n)) {
              var i = n.map(function (t) {
                  return t.name
                }),
                o = []
              e.forEach(function (t) {
                ;-1 === i.indexOf(t.name) &&
                  -1 === o.indexOf(t.name) &&
                  (r.push(t), o.push(t.name))
              }),
                n.forEach(function (t) {
                  ;-1 === o.indexOf(t.name) && (r.push(t), o.push(t.name))
                })
            } else
              'function' === typeof n
                ? ((r = n(e)), (r = Array.isArray(r) ? r : [r]))
                : (r = Object(u.e)(e))
            var s = r.map(function (t) {
                return t.name
              }),
              a = 'Debug'
            return (
              -1 !== s.indexOf(a) &&
                r.push.apply(r, Object(u.e)(r.splice(s.indexOf(a), 1))),
              r
            )
          })(t).forEach(function (t) {
            ;(e[t.name] = t),
              (function (t) {
                ;-1 === it.indexOf(t.name) &&
                  (t.setupOnce(y, T),
                  it.push(t.name),
                  O.log('Integration installed: ' + t.name))
              })(t)
          }),
          e
        )
      }
      var st,
        at = (function () {
          function t(t, e) {
            ;(this._integrations = {}),
              (this._processing = 0),
              (this._backend = new t(e)),
              (this._options = e),
              e.dsn && (this._dsn = new rt(e.dsn))
          }
          return (
            (t.prototype.captureException = function (t, e, n) {
              var r = this,
                i = e && e.event_id
              return (
                this._process(
                  this._getBackend()
                    .eventFromException(t, e)
                    .then(function (t) {
                      return r._captureEvent(t, e, n)
                    })
                    .then(function (t) {
                      i = t
                    }),
                ),
                i
              )
            }),
            (t.prototype.captureMessage = function (t, e, n, r) {
              var i = this,
                o = n && n.event_id,
                s = Object(p.i)(t)
                  ? this._getBackend().eventFromMessage(String(t), e, n)
                  : this._getBackend().eventFromException(t, n)
              return (
                this._process(
                  s
                    .then(function (t) {
                      return i._captureEvent(t, n, r)
                    })
                    .then(function (t) {
                      o = t
                    }),
                ),
                o
              )
            }),
            (t.prototype.captureEvent = function (t, e, n) {
              var r = e && e.event_id
              return (
                this._process(
                  this._captureEvent(t, e, n).then(function (t) {
                    r = t
                  }),
                ),
                r
              )
            }),
            (t.prototype.captureSession = function (t) {
              'string' !== typeof t.release
                ? O.warn(
                    'Discarded session because of missing or non-string release',
                  )
                : (this._sendSession(t), t.update({ init: !1 }))
            }),
            (t.prototype.getDsn = function () {
              return this._dsn
            }),
            (t.prototype.getOptions = function () {
              return this._options
            }),
            (t.prototype.flush = function (t) {
              var e = this
              return this._isClientProcessing(t).then(function (n) {
                return e
                  ._getBackend()
                  .getTransport()
                  .close(t)
                  .then(function (t) {
                    return n && t
                  })
              })
            }),
            (t.prototype.close = function (t) {
              var e = this
              return this.flush(t).then(function (t) {
                return (e.getOptions().enabled = !1), t
              })
            }),
            (t.prototype.setupIntegrations = function () {
              this._isEnabled() && (this._integrations = ot(this._options))
            }),
            (t.prototype.getIntegration = function (t) {
              try {
                return this._integrations[t.id] || null
              } catch (e) {
                return (
                  O.warn(
                    'Cannot retrieve integration ' +
                      t.id +
                      ' from the current Client',
                  ),
                  null
                )
              }
            }),
            (t.prototype._updateSessionFromEvent = function (t, e) {
              var n,
                r,
                i,
                o = !1,
                s = !1,
                a = e.exception && e.exception.values
              if (a) {
                s = !0
                try {
                  for (
                    var c = Object(u.f)(a), p = c.next();
                    !p.done;
                    p = c.next()
                  ) {
                    var h = p.value.mechanism
                    if (h && !1 === h.handled) {
                      o = !0
                      break
                    }
                  }
                } catch (v) {
                  n = { error: v }
                } finally {
                  try {
                    p && !p.done && (r = c.return) && r.call(c)
                  } finally {
                    if (n) throw n.error
                  }
                }
              }
              var d = e.user
              if (!t.userAgent) {
                var f = e.request ? e.request.headers : {}
                for (var _ in f)
                  if ('user-agent' === _.toLowerCase()) {
                    i = f[_]
                    break
                  }
              }
              t.update(
                Object(u.a)(Object(u.a)({}, o && { status: l.Crashed }), {
                  user: d,
                  userAgent: i,
                  errors: t.errors + Number(s || o),
                }),
              ),
                this.captureSession(t)
            }),
            (t.prototype._sendSession = function (t) {
              this._getBackend().sendSession(t)
            }),
            (t.prototype._isClientProcessing = function (t) {
              var e = this
              return new d(function (n) {
                var r = 0,
                  i = setInterval(function () {
                    0 == e._processing
                      ? (clearInterval(i), n(!0))
                      : ((r += 1), t && r >= t && (clearInterval(i), n(!1)))
                  }, 1)
              })
            }),
            (t.prototype._getBackend = function () {
              return this._backend
            }),
            (t.prototype._isEnabled = function () {
              return !1 !== this.getOptions().enabled && void 0 !== this._dsn
            }),
            (t.prototype._prepareEvent = function (t, e, n) {
              var r = this,
                i = this.getOptions().normalizeDepth,
                o = void 0 === i ? 3 : i,
                s = Object(u.a)(Object(u.a)({}, t), {
                  event_id:
                    t.event_id ||
                    (n && n.event_id ? n.event_id : Object(f.i)()),
                  timestamp: t.timestamp || Object(h.a)(),
                })
              this._applyClientOptions(s), this._applyIntegrationsMetadata(s)
              var a = e
              n && n.captureContext && (a = _.clone(a).update(n.captureContext))
              var c = d.resolve(s)
              return (
                a && (c = a.applyToEvent(s, n)),
                c.then(function (t) {
                  return 'number' === typeof o && o > 0
                    ? r._normalizeEvent(t, o)
                    : t
                })
              )
            }),
            (t.prototype._normalizeEvent = function (t, e) {
              if (!t) return null
              var n = Object(u.a)(
                Object(u.a)(
                  Object(u.a)(
                    Object(u.a)(
                      Object(u.a)({}, t),
                      t.breadcrumbs && {
                        breadcrumbs: t.breadcrumbs.map(function (t) {
                          return Object(u.a)(
                            Object(u.a)({}, t),
                            t.data && { data: Object(E.d)(t.data, e) },
                          )
                        }),
                      },
                    ),
                    t.user && { user: Object(E.d)(t.user, e) },
                  ),
                  t.contexts && { contexts: Object(E.d)(t.contexts, e) },
                ),
                t.extra && { extra: Object(E.d)(t.extra, e) },
              )
              return (
                t.contexts &&
                  t.contexts.trace &&
                  (n.contexts.trace = t.contexts.trace),
                n
              )
            }),
            (t.prototype._applyClientOptions = function (t) {
              var e = this.getOptions(),
                n = e.environment,
                r = e.release,
                i = e.dist,
                o = e.maxValueLength,
                s = void 0 === o ? 250 : o
              'environment' in t ||
                (t.environment = 'environment' in e ? n : 'production'),
                void 0 === t.release && void 0 !== r && (t.release = r),
                void 0 === t.dist && void 0 !== i && (t.dist = i),
                t.message && (t.message = Object(L.d)(t.message, s))
              var a = t.exception && t.exception.values && t.exception.values[0]
              a && a.value && (a.value = Object(L.d)(a.value, s))
              var c = t.request
              c && c.url && (c.url = Object(L.d)(c.url, s))
            }),
            (t.prototype._applyIntegrationsMetadata = function (t) {
              var e = Object.keys(this._integrations)
              e.length > 0 &&
                ((t.sdk = t.sdk || {}),
                (t.sdk.integrations = Object(u.e)(t.sdk.integrations || [], e)))
            }),
            (t.prototype._sendEvent = function (t) {
              this._getBackend().sendEvent(t)
            }),
            (t.prototype._captureEvent = function (t, e, n) {
              return this._processEvent(t, e, n).then(
                function (t) {
                  return t.event_id
                },
                function (t) {
                  O.error(t)
                },
              )
            }),
            (t.prototype._processEvent = function (t, e, n) {
              var r = this,
                i = this.getOptions(),
                o = i.beforeSend,
                s = i.sampleRate
              if (!this._isEnabled())
                return d.reject(new tt('SDK not enabled, will not send event.'))
              var a = 'transaction' === t.type
              return !a && 'number' === typeof s && Math.random() > s
                ? d.reject(
                    new tt(
                      "Discarding event because it's not included in the random sample (sampling rate = " +
                        s +
                        ')',
                    ),
                  )
                : this._prepareEvent(t, n, e)
                    .then(function (t) {
                      if (null === t)
                        throw new tt(
                          'An event processor returned null, will not send event.',
                        )
                      if ((e && e.data && !0 === e.data.__sentry__) || a || !o)
                        return t
                      var n = o(t, e)
                      if ('undefined' === typeof n)
                        throw new tt(
                          '`beforeSend` method has to return `null` or a valid event.',
                        )
                      return Object(p.m)(n)
                        ? n.then(
                            function (t) {
                              return t
                            },
                            function (t) {
                              throw new tt('beforeSend rejected with ' + t)
                            },
                          )
                        : n
                    })
                    .then(function (t) {
                      if (null === t)
                        throw new tt(
                          '`beforeSend` returned `null`, will not send event.',
                        )
                      var e = n && n.getSession && n.getSession()
                      return (
                        !a && e && r._updateSessionFromEvent(e, t),
                        r._sendEvent(t),
                        t
                      )
                    })
                    .then(null, function (t) {
                      if (t instanceof tt) throw t
                      throw (
                        (r.captureException(t, {
                          data: { __sentry__: !0 },
                          originalException: t,
                        }),
                        new tt(
                          'Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.\nReason: ' +
                            t,
                        ))
                      )
                    })
            }),
            (t.prototype._process = function (t) {
              var e = this
              ;(this._processing += 1),
                t.then(
                  function (t) {
                    return (e._processing -= 1), t
                  },
                  function (t) {
                    return (e._processing -= 1), t
                  },
                )
            }),
            t
          )
        })()
      !(function (t) {
        ;(t.Unknown = 'unknown'),
          (t.Skipped = 'skipped'),
          (t.Success = 'success'),
          (t.RateLimit = 'rate_limit'),
          (t.Invalid = 'invalid'),
          (t.Failed = 'failed')
      })(st || (st = {})),
        (function (t) {
          t.fromHttpCode = function (e) {
            return e >= 200 && e < 300
              ? t.Success
              : 429 === e
              ? t.RateLimit
              : e >= 400 && e < 500
              ? t.Invalid
              : e >= 500
              ? t.Failed
              : t.Unknown
          }
        })(st || (st = {}))
      var ct,
        ut = (function () {
          function t() {}
          return (
            (t.prototype.sendEvent = function (t) {
              return d.resolve({
                reason:
                  'NoopTransport: Event has been skipped because no Dsn is configured.',
                status: st.Skipped,
              })
            }),
            (t.prototype.close = function (t) {
              return d.resolve(!0)
            }),
            t
          )
        })(),
        pt = (function () {
          function t(t) {
            ;(this._options = t),
              this._options.dsn ||
                O.warn('No DSN provided, backend will not do anything.'),
              (this._transport = this._setupTransport())
          }
          return (
            (t.prototype.eventFromException = function (t, e) {
              throw new tt(
                'Backend has to implement `eventFromException` method',
              )
            }),
            (t.prototype.eventFromMessage = function (t, e, n) {
              throw new tt('Backend has to implement `eventFromMessage` method')
            }),
            (t.prototype.sendEvent = function (t) {
              this._transport.sendEvent(t).then(null, function (t) {
                O.error('Error while sending event: ' + t)
              })
            }),
            (t.prototype.sendSession = function (t) {
              this._transport.sendSession
                ? this._transport.sendSession(t).then(null, function (t) {
                    O.error('Error while sending session: ' + t)
                  })
                : O.warn(
                    "Dropping session because custom transport doesn't implement sendSession",
                  )
            }),
            (t.prototype.getTransport = function () {
              return this._transport
            }),
            (t.prototype._setupTransport = function () {
              return new ut()
            }),
            t
          )
        })()
      !(function (t) {
        ;(t.Fatal = 'fatal'),
          (t.Error = 'error'),
          (t.Warning = 'warning'),
          (t.Log = 'log'),
          (t.Info = 'info'),
          (t.Debug = 'debug'),
          (t.Critical = 'critical')
      })(ct || (ct = {})),
        (function (t) {
          t.fromString = function (e) {
            switch (e) {
              case 'debug':
                return t.Debug
              case 'info':
                return t.Info
              case 'warn':
              case 'warning':
                return t.Warning
              case 'error':
                return t.Error
              case 'fatal':
                return t.Fatal
              case 'critical':
                return t.Critical
              case 'log':
              default:
                return t.Log
            }
          }
        })(ct || (ct = {}))
      var ht = '?',
        lt = /^\s*at (?:(.*?) ?\()?((?:file|https?|blob|chrome-extension|address|native|eval|webpack|<anonymous>|[-a-z]+:|.*bundle|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
        dt = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension|capacitor).*?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
        ft = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i,
        _t = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
        vt = /\((\S*)(?::(\d+))(?::(\d+))\)/,
        yt = /Minified React error #\d+;/i
      function gt(t) {
        var e = null,
          n = 0
        t &&
          ('number' === typeof t.framesToPop
            ? (n = t.framesToPop)
            : yt.test(t.message) && (n = 1))
        try {
          if (
            (e = (function (t) {
              if (!t || !t.stacktrace) return null
              for (
                var e,
                  n = t.stacktrace,
                  r = / line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i,
                  i = / line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^)]+))\((.*)\))? in (.*):\s*$/i,
                  o = n.split('\n'),
                  s = [],
                  a = 0;
                a < o.length;
                a += 2
              ) {
                var c = null
                ;(e = r.exec(o[a]))
                  ? (c = {
                      url: e[2],
                      func: e[3],
                      args: [],
                      line: +e[1],
                      column: null,
                    })
                  : (e = i.exec(o[a])) &&
                    (c = {
                      url: e[6],
                      func: e[3] || e[4],
                      args: e[5] ? e[5].split(',') : [],
                      line: +e[1],
                      column: +e[2],
                    }),
                  c && (!c.func && c.line && (c.func = ht), s.push(c))
              }
              if (!s.length) return null
              return { message: mt(t), name: t.name, stack: s }
            })(t))
          )
            return bt(e, n)
        } catch (r) {}
        try {
          if (
            (e = (function (t) {
              if (!t || !t.stack) return null
              for (
                var e, n, r, i = [], o = t.stack.split('\n'), s = 0;
                s < o.length;
                ++s
              ) {
                if ((n = lt.exec(o[s]))) {
                  var a = n[2] && 0 === n[2].indexOf('native')
                  n[2] &&
                    0 === n[2].indexOf('eval') &&
                    (e = vt.exec(n[2])) &&
                    ((n[2] = e[1]), (n[3] = e[2]), (n[4] = e[3]))
                  var c =
                      n[2] && 0 === n[2].indexOf('address at ')
                        ? n[2].substr('address at '.length)
                        : n[2],
                    u = n[1] || ht,
                    p = -1 !== u.indexOf('safari-extension'),
                    h = -1 !== u.indexOf('safari-web-extension')
                  ;(p || h) &&
                    ((u = -1 !== u.indexOf('@') ? u.split('@')[0] : ht),
                    (c = p
                      ? 'safari-extension:' + c
                      : 'safari-web-extension:' + c)),
                    (r = {
                      url: c,
                      func: u,
                      args: a ? [n[2]] : [],
                      line: n[3] ? +n[3] : null,
                      column: n[4] ? +n[4] : null,
                    })
                } else if ((n = ft.exec(o[s])))
                  r = {
                    url: n[2],
                    func: n[1] || ht,
                    args: [],
                    line: +n[3],
                    column: n[4] ? +n[4] : null,
                  }
                else {
                  if (!(n = dt.exec(o[s]))) continue
                  n[3] && n[3].indexOf(' > eval') > -1 && (e = _t.exec(n[3]))
                    ? ((n[1] = n[1] || 'eval'),
                      (n[3] = e[1]),
                      (n[4] = e[2]),
                      (n[5] = ''))
                    : 0 !== s ||
                      n[5] ||
                      void 0 === t.columnNumber ||
                      (i[0].column = t.columnNumber + 1),
                    (r = {
                      url: n[3],
                      func: n[1] || ht,
                      args: n[2] ? n[2].split(',') : [],
                      line: n[4] ? +n[4] : null,
                      column: n[5] ? +n[5] : null,
                    })
                }
                !r.func && r.line && (r.func = ht), i.push(r)
              }
              if (!i.length) return null
              return { message: mt(t), name: t.name, stack: i }
            })(t))
          )
            return bt(e, n)
        } catch (r) {}
        return { message: mt(t), name: t && t.name, stack: [], failed: !0 }
      }
      function bt(t, e) {
        try {
          return Object(u.a)(Object(u.a)({}, t), { stack: t.stack.slice(e) })
        } catch (n) {
          return t
        }
      }
      function mt(t) {
        var e = t && t.message
        return e
          ? e.error && 'string' === typeof e.error.message
            ? e.error.message
            : e
          : 'No error message'
      }
      function Ot(t) {
        var e = Et(t.stack),
          n = { type: t.name, value: t.message }
        return (
          e && e.length && (n.stacktrace = { frames: e }),
          void 0 === n.type &&
            '' === n.value &&
            (n.value = 'Unrecoverable error caught'),
          n
        )
      }
      function jt(t) {
        return { exception: { values: [Ot(t)] } }
      }
      function Et(t) {
        if (!t || !t.length) return []
        var e = t,
          n = e[0].func || '',
          r = e[e.length - 1].func || ''
        return (
          (-1 === n.indexOf('captureMessage') &&
            -1 === n.indexOf('captureException')) ||
            (e = e.slice(1)),
          -1 !== r.indexOf('sentryWrapped') && (e = e.slice(0, -1)),
          e
            .slice(0, 50)
            .map(function (t) {
              return {
                colno: null === t.column ? void 0 : t.column,
                filename: t.url || e[0].url,
                function: t.func || '?',
                in_app: !0,
                lineno: null === t.line ? void 0 : t.line,
              }
            })
            .reverse()
        )
      }
      function St(t, e, n) {
        var r
        if ((void 0 === n && (n = {}), Object(p.e)(t) && t.error))
          return (r = jt(gt((t = t.error))))
        if (Object(p.a)(t) || Object(p.b)(t)) {
          var i = t,
            o = i.name || (Object(p.a)(i) ? 'DOMError' : 'DOMException'),
            s = i.message ? o + ': ' + i.message : o
          return (
            (r = xt(s, e, n)),
            Object(f.b)(r, s),
            'code' in i &&
              (r.tags = Object(u.a)(Object(u.a)({}, r.tags), {
                'DOMException.code': '' + i.code,
              })),
            r
          )
        }
        return Object(p.d)(t)
          ? (r = jt(gt(t)))
          : Object(p.h)(t) || Object(p.f)(t)
          ? ((r = (function (t, e, n) {
              var r = {
                exception: {
                  values: [
                    {
                      type: Object(p.f)(t)
                        ? t.constructor.name
                        : n
                        ? 'UnhandledRejection'
                        : 'Error',
                      value:
                        'Non-Error ' +
                        (n ? 'promise rejection' : 'exception') +
                        ' captured with keys: ' +
                        Object(E.b)(t),
                    },
                  ],
                },
                extra: { __serialized__: Object(E.e)(t) },
              }
              if (e) {
                var i = Et(gt(e).stack)
                r.stacktrace = { frames: i }
              }
              return r
            })(t, e, n.rejection)),
            Object(f.a)(r, { synthetic: !0 }),
            r)
          : ((r = xt(t, e, n)),
            Object(f.b)(r, '' + t, void 0),
            Object(f.a)(r, { synthetic: !0 }),
            r)
      }
      function xt(t, e, n) {
        void 0 === n && (n = {})
        var r = { message: t }
        if (n.attachStacktrace && e) {
          var i = Et(gt(e).stack)
          r.stacktrace = { frames: i }
        }
        return r
      }
      function wt(t) {
        if (t.metadata && t.metadata.sdk) {
          var e = t.metadata.sdk
          return { name: e.name, version: e.version }
        }
      }
      function kt(t, e) {
        return e
          ? ((t.sdk = t.sdk || {}),
            (t.sdk.name = t.sdk.name || e.name),
            (t.sdk.version = t.sdk.version || e.version),
            (t.sdk.integrations = Object(u.e)(
              t.sdk.integrations || [],
              e.integrations || [],
            )),
            (t.sdk.packages = Object(u.e)(
              t.sdk.packages || [],
              e.packages || [],
            )),
            t)
          : t
      }
      function Tt(t, e) {
        var n = wt(e)
        return {
          body:
            JSON.stringify(
              Object(u.a)(
                { sent_at: new Date().toISOString() },
                n && { sdk: n },
              ),
            ) +
            '\n' +
            JSON.stringify({ type: 'session' }) +
            '\n' +
            JSON.stringify(t),
          type: 'session',
          url: e.getEnvelopeEndpointWithUrlEncodedAuth(),
        }
      }
      function Rt(t, e) {
        var n = wt(e),
          r = t.type || 'event',
          i = 'transaction' === r,
          o = t.debug_meta || {},
          s = o.transactionSampling,
          a = Object(u.d)(o, ['transactionSampling']),
          c = s || {},
          p = c.method,
          h = c.rate
        0 === Object.keys(a).length ? delete t.debug_meta : (t.debug_meta = a)
        var l = {
          body: JSON.stringify(n ? kt(t, e.metadata.sdk) : t),
          type: r,
          url: i
            ? e.getEnvelopeEndpointWithUrlEncodedAuth()
            : e.getStoreEndpointWithUrlEncodedAuth(),
        }
        if (i) {
          var d =
            JSON.stringify(
              Object(u.a)(
                { event_id: t.event_id, sent_at: new Date().toISOString() },
                n && { sdk: n },
              ),
            ) +
            '\n' +
            JSON.stringify({
              type: t.type,
              sample_rates: [{ id: p, rate: h }],
            }) +
            '\n' +
            l.body
          l.body = d
        }
        return l
      }
      var Nt = (function () {
          function t(t, e) {
            void 0 === e && (e = {}),
              (this.dsn = t),
              (this._dsnObject = new rt(t)),
              (this.metadata = e)
          }
          return (
            (t.prototype.getDsn = function () {
              return this._dsnObject
            }),
            (t.prototype.getBaseApiEndpoint = function () {
              var t = this._dsnObject,
                e = t.protocol ? t.protocol + ':' : '',
                n = t.port ? ':' + t.port : ''
              return (
                e + '//' + t.host + n + (t.path ? '/' + t.path : '') + '/api/'
              )
            }),
            (t.prototype.getStoreEndpoint = function () {
              return this._getIngestEndpoint('store')
            }),
            (t.prototype.getStoreEndpointWithUrlEncodedAuth = function () {
              return this.getStoreEndpoint() + '?' + this._encodedAuth()
            }),
            (t.prototype.getEnvelopeEndpointWithUrlEncodedAuth = function () {
              return this._getEnvelopeEndpoint() + '?' + this._encodedAuth()
            }),
            (t.prototype.getStoreEndpointPath = function () {
              var t = this._dsnObject
              return (
                (t.path ? '/' + t.path : '') + '/api/' + t.projectId + '/store/'
              )
            }),
            (t.prototype.getRequestHeaders = function (t, e) {
              var n = this._dsnObject,
                r = ['Sentry sentry_version=7']
              return (
                r.push('sentry_client=' + t + '/' + e),
                r.push('sentry_key=' + n.publicKey),
                n.pass && r.push('sentry_secret=' + n.pass),
                {
                  'Content-Type': 'application/json',
                  'X-Sentry-Auth': r.join(', '),
                }
              )
            }),
            (t.prototype.getReportDialogEndpoint = function (t) {
              void 0 === t && (t = {})
              var e = this._dsnObject,
                n = this.getBaseApiEndpoint() + 'embed/error-page/',
                r = []
              for (var i in (r.push('dsn=' + e.toString()), t))
                if ('dsn' !== i)
                  if ('user' === i) {
                    if (!t.user) continue
                    t.user.name &&
                      r.push('name=' + encodeURIComponent(t.user.name)),
                      t.user.email &&
                        r.push('email=' + encodeURIComponent(t.user.email))
                  } else
                    r.push(
                      encodeURIComponent(i) + '=' + encodeURIComponent(t[i]),
                    )
              return r.length ? n + '?' + r.join('&') : n
            }),
            (t.prototype._getEnvelopeEndpoint = function () {
              return this._getIngestEndpoint('envelope')
            }),
            (t.prototype._getIngestEndpoint = function (t) {
              return (
                '' +
                this.getBaseApiEndpoint() +
                this._dsnObject.projectId +
                '/' +
                t +
                '/'
              )
            }),
            (t.prototype._encodedAuth = function () {
              var t = {
                sentry_key: this._dsnObject.publicKey,
                sentry_version: '7',
              }
              return Object(E.f)(t)
            }),
            t
          )
        })(),
        It = (function () {
          function t(t) {
            ;(this._limit = t), (this._buffer = [])
          }
          return (
            (t.prototype.isReady = function () {
              return void 0 === this._limit || this.length() < this._limit
            }),
            (t.prototype.add = function (t) {
              var e = this
              return this.isReady()
                ? (-1 === this._buffer.indexOf(t) && this._buffer.push(t),
                  t
                    .then(function () {
                      return e.remove(t)
                    })
                    .then(null, function () {
                      return e.remove(t).then(null, function () {})
                    }),
                  t)
                : d.reject(
                    new tt('Not adding Promise due to buffer limit reached.'),
                  )
            }),
            (t.prototype.remove = function (t) {
              return this._buffer.splice(this._buffer.indexOf(t), 1)[0]
            }),
            (t.prototype.length = function () {
              return this._buffer.length
            }),
            (t.prototype.drain = function (t) {
              var e = this
              return new d(function (n) {
                var r = setTimeout(function () {
                  t && t > 0 && n(!1)
                }, t)
                d.all(e._buffer)
                  .then(function () {
                    clearTimeout(r), n(!0)
                  })
                  .then(null, function () {
                    n(!0)
                  })
              })
            }),
            t
          )
        })(),
        Lt = { event: 'error', transaction: 'transaction', session: 'session' },
        Ct = (function () {
          function t(t) {
            ;(this.options = t),
              (this._buffer = new It(30)),
              (this._rateLimits = {}),
              (this._api = new Nt(t.dsn, t._metadata)),
              (this.url = this._api.getStoreEndpointWithUrlEncodedAuth())
          }
          return (
            (t.prototype.sendEvent = function (t) {
              throw new tt(
                'Transport Class has to implement `sendEvent` method',
              )
            }),
            (t.prototype.close = function (t) {
              return this._buffer.drain(t)
            }),
            (t.prototype._handleResponse = function (t) {
              var e = t.requestType,
                n = t.response,
                r = t.headers,
                i = t.resolve,
                o = t.reject,
                s = st.fromHttpCode(n.status)
              this._handleRateLimit(r) &&
                O.warn(
                  'Too many requests, backing off until: ' +
                    this._disabledUntil(e),
                ),
                s !== st.Success ? o(n) : i({ status: s })
            }),
            (t.prototype._disabledUntil = function (t) {
              var e = Lt[t]
              return this._rateLimits[e] || this._rateLimits.all
            }),
            (t.prototype._isRateLimited = function (t) {
              return this._disabledUntil(t) > new Date(Date.now())
            }),
            (t.prototype._handleRateLimit = function (t) {
              var e,
                n,
                r,
                i,
                o = Date.now(),
                s = t['x-sentry-rate-limits'],
                a = t['retry-after']
              if (s) {
                try {
                  for (
                    var c = Object(u.f)(s.trim().split(',')), p = c.next();
                    !p.done;
                    p = c.next()
                  ) {
                    var h = p.value.split(':', 2),
                      l = parseInt(h[0], 10),
                      d = 1e3 * (isNaN(l) ? 60 : l)
                    try {
                      for (
                        var _ = ((r = void 0), Object(u.f)(h[1].split(';'))),
                          v = _.next();
                        !v.done;
                        v = _.next()
                      ) {
                        var y = v.value
                        this._rateLimits[y || 'all'] = new Date(o + d)
                      }
                    } catch (g) {
                      r = { error: g }
                    } finally {
                      try {
                        v && !v.done && (i = _.return) && i.call(_)
                      } finally {
                        if (r) throw r.error
                      }
                    }
                  }
                } catch (b) {
                  e = { error: b }
                } finally {
                  try {
                    p && !p.done && (n = c.return) && n.call(c)
                  } finally {
                    if (e) throw e.error
                  }
                }
                return !0
              }
              return (
                !!a &&
                ((this._rateLimits.all = new Date(o + Object(f.g)(o, a))), !0)
              )
            }),
            t
          )
        })()
      var At = (function (t) {
          function e(e, n) {
            void 0 === n &&
              (n = (function () {
                var t,
                  e,
                  n = Object(f.e)()
                if (P(n.fetch)) return n.fetch.bind(n)
                var r = n.document,
                  i = n.fetch
                if (
                  'function' ===
                  typeof (null === (t = r) || void 0 === t
                    ? void 0
                    : t.createElement)
                )
                  try {
                    var o = r.createElement('iframe')
                    ;(o.hidden = !0),
                      r.head.appendChild(o),
                      (null === (e = o.contentWindow) || void 0 === e
                        ? void 0
                        : e.fetch) && (i = o.contentWindow.fetch),
                      r.head.removeChild(o)
                  } catch (s) {
                    O.warn(
                      'Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ',
                      s,
                    )
                  }
                return i.bind(n)
              })())
            var r = t.call(this, e) || this
            return (r._fetch = n), r
          }
          return (
            Object(u.b)(e, t),
            (e.prototype.sendEvent = function (t) {
              return this._sendRequest(Rt(t, this._api), t)
            }),
            (e.prototype.sendSession = function (t) {
              return this._sendRequest(Tt(t, this._api), t)
            }),
            (e.prototype._sendRequest = function (t, e) {
              var n = this
              if (this._isRateLimited(t.type))
                return Promise.reject({
                  event: e,
                  type: t.type,
                  reason:
                    'Transport locked till ' +
                    this._disabledUntil(t.type) +
                    ' due to too many requests.',
                  status: 429,
                })
              var r = {
                body: t.body,
                method: 'POST',
                referrerPolicy: M() ? 'origin' : '',
              }
              return (
                void 0 !== this.options.fetchParameters &&
                  Object.assign(r, this.options.fetchParameters),
                void 0 !== this.options.headers &&
                  (r.headers = this.options.headers),
                this._buffer.add(
                  new d(function (e, i) {
                    n._fetch(t.url, r)
                      .then(function (r) {
                        var o = {
                          'x-sentry-rate-limits': r.headers.get(
                            'X-Sentry-Rate-Limits',
                          ),
                          'retry-after': r.headers.get('Retry-After'),
                        }
                        n._handleResponse({
                          requestType: t.type,
                          response: r,
                          headers: o,
                          resolve: e,
                          reject: i,
                        })
                      })
                      .catch(i)
                  }),
                )
              )
            }),
            e
          )
        })(Ct),
        Dt = (function (t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this
          }
          return (
            Object(u.b)(e, t),
            (e.prototype.sendEvent = function (t) {
              return this._sendRequest(Rt(t, this._api), t)
            }),
            (e.prototype.sendSession = function (t) {
              return this._sendRequest(Tt(t, this._api), t)
            }),
            (e.prototype._sendRequest = function (t, e) {
              var n = this
              return this._isRateLimited(t.type)
                ? Promise.reject({
                    event: e,
                    type: t.type,
                    reason:
                      'Transport locked till ' +
                      this._disabledUntil(t.type) +
                      ' due to too many requests.',
                    status: 429,
                  })
                : this._buffer.add(
                    new d(function (e, r) {
                      var i = new XMLHttpRequest()
                      for (var o in ((i.onreadystatechange = function () {
                        if (4 === i.readyState) {
                          var o = {
                            'x-sentry-rate-limits': i.getResponseHeader(
                              'X-Sentry-Rate-Limits',
                            ),
                            'retry-after': i.getResponseHeader('Retry-After'),
                          }
                          n._handleResponse({
                            requestType: t.type,
                            response: i,
                            headers: o,
                            resolve: e,
                            reject: r,
                          })
                        }
                      }),
                      i.open('POST', t.url),
                      n.options.headers))
                        n.options.headers.hasOwnProperty(o) &&
                          i.setRequestHeader(o, n.options.headers[o])
                      i.send(t.body)
                    }),
                  )
            }),
            e
          )
        })(Ct),
        Ut = (function (t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this
          }
          return (
            Object(u.b)(e, t),
            (e.prototype.eventFromException = function (t, e) {
              return (function (t, e, n) {
                var r = St(e, (n && n.syntheticException) || void 0, {
                  attachStacktrace: t.attachStacktrace,
                })
                return (
                  Object(f.a)(r, { handled: !0, type: 'generic' }),
                  (r.level = ct.Error),
                  n && n.event_id && (r.event_id = n.event_id),
                  d.resolve(r)
                )
              })(this._options, t, e)
            }),
            (e.prototype.eventFromMessage = function (t, e, n) {
              return (
                void 0 === e && (e = ct.Info),
                (function (t, e, n, r) {
                  void 0 === n && (n = ct.Info)
                  var i = xt(e, (r && r.syntheticException) || void 0, {
                    attachStacktrace: t.attachStacktrace,
                  })
                  return (
                    (i.level = n),
                    r && r.event_id && (i.event_id = r.event_id),
                    d.resolve(i)
                  )
                })(this._options, t, e, n)
              )
            }),
            (e.prototype._setupTransport = function () {
              if (!this._options.dsn)
                return t.prototype._setupTransport.call(this)
              var e = Object(u.a)(
                Object(u.a)({}, this._options.transportOptions),
                { dsn: this._options.dsn, _metadata: this._options._metadata },
              )
              return this._options.transport
                ? new this._options.transport(e)
                : U()
                ? new At(e)
                : new Dt(e)
            }),
            e
          )
        })(pt),
        Pt = (function () {
          function t() {
            ;(this._notifyingListeners = !1),
              (this._scopeListeners = []),
              (this._eventProcessors = []),
              (this._breadcrumbs = []),
              (this._user = {}),
              (this._tags = {}),
              (this._extra = {}),
              (this._contexts = {})
          }
          return (
            (t.clone = function (e) {
              var n = new t()
              return (
                e &&
                  ((n._breadcrumbs = Object(u.e)(e._breadcrumbs)),
                  (n._tags = Object(u.a)({}, e._tags)),
                  (n._extra = Object(u.a)({}, e._extra)),
                  (n._contexts = Object(u.a)({}, e._contexts)),
                  (n._user = e._user),
                  (n._level = e._level),
                  (n._span = e._span),
                  (n._session = e._session),
                  (n._transactionName = e._transactionName),
                  (n._fingerprint = e._fingerprint),
                  (n._eventProcessors = Object(u.e)(e._eventProcessors))),
                n
              )
            }),
            (t.prototype.addScopeListener = function (t) {
              this._scopeListeners.push(t)
            }),
            (t.prototype.addEventProcessor = function (t) {
              return this._eventProcessors.push(t), this
            }),
            (t.prototype.setUser = function (t) {
              return (
                (this._user = t || {}),
                this._session && this._session.update({ user: t }),
                this._notifyScopeListeners(),
                this
              )
            }),
            (t.prototype.getUser = function () {
              return this._user
            }),
            (t.prototype.setTags = function (t) {
              return (
                (this._tags = Object(u.a)(Object(u.a)({}, this._tags), t)),
                this._notifyScopeListeners(),
                this
              )
            }),
            (t.prototype.setTag = function (t, e) {
              var n
              return (
                (this._tags = Object(u.a)(
                  Object(u.a)({}, this._tags),
                  (((n = {})[t] = e), n),
                )),
                this._notifyScopeListeners(),
                this
              )
            }),
            (t.prototype.setExtras = function (t) {
              return (
                (this._extra = Object(u.a)(Object(u.a)({}, this._extra), t)),
                this._notifyScopeListeners(),
                this
              )
            }),
            (t.prototype.setExtra = function (t, e) {
              var n
              return (
                (this._extra = Object(u.a)(
                  Object(u.a)({}, this._extra),
                  (((n = {})[t] = e), n),
                )),
                this._notifyScopeListeners(),
                this
              )
            }),
            (t.prototype.setFingerprint = function (t) {
              return (this._fingerprint = t), this._notifyScopeListeners(), this
            }),
            (t.prototype.setLevel = function (t) {
              return (this._level = t), this._notifyScopeListeners(), this
            }),
            (t.prototype.setTransactionName = function (t) {
              return (
                (this._transactionName = t), this._notifyScopeListeners(), this
              )
            }),
            (t.prototype.setTransaction = function (t) {
              return this.setTransactionName(t)
            }),
            (t.prototype.setContext = function (t, e) {
              var n
              return (
                null === e
                  ? delete this._contexts[t]
                  : (this._contexts = Object(u.a)(
                      Object(u.a)({}, this._contexts),
                      (((n = {})[t] = e), n),
                    )),
                this._notifyScopeListeners(),
                this
              )
            }),
            (t.prototype.setSpan = function (t) {
              return (this._span = t), this._notifyScopeListeners(), this
            }),
            (t.prototype.getSpan = function () {
              return this._span
            }),
            (t.prototype.getTransaction = function () {
              var t,
                e,
                n,
                r,
                i = this.getSpan()
              return (null === (t = i) || void 0 === t ? void 0 : t.transaction)
                ? null === (e = i) || void 0 === e
                  ? void 0
                  : e.transaction
                : (
                    null ===
                      (r =
                        null === (n = i) || void 0 === n
                          ? void 0
                          : n.spanRecorder) || void 0 === r
                      ? void 0
                      : r.spans[0]
                  )
                ? i.spanRecorder.spans[0]
                : void 0
            }),
            (t.prototype.setSession = function (t) {
              return (
                t ? (this._session = t) : delete this._session,
                this._notifyScopeListeners(),
                this
              )
            }),
            (t.prototype.getSession = function () {
              return this._session
            }),
            (t.prototype.update = function (e) {
              if (!e) return this
              if ('function' === typeof e) {
                var n = e(this)
                return n instanceof t ? n : this
              }
              return (
                e instanceof t
                  ? ((this._tags = Object(u.a)(
                      Object(u.a)({}, this._tags),
                      e._tags,
                    )),
                    (this._extra = Object(u.a)(
                      Object(u.a)({}, this._extra),
                      e._extra,
                    )),
                    (this._contexts = Object(u.a)(
                      Object(u.a)({}, this._contexts),
                      e._contexts,
                    )),
                    e._user &&
                      Object.keys(e._user).length &&
                      (this._user = e._user),
                    e._level && (this._level = e._level),
                    e._fingerprint && (this._fingerprint = e._fingerprint))
                  : Object(p.h)(e) &&
                    ((e = e),
                    (this._tags = Object(u.a)(
                      Object(u.a)({}, this._tags),
                      e.tags,
                    )),
                    (this._extra = Object(u.a)(
                      Object(u.a)({}, this._extra),
                      e.extra,
                    )),
                    (this._contexts = Object(u.a)(
                      Object(u.a)({}, this._contexts),
                      e.contexts,
                    )),
                    e.user && (this._user = e.user),
                    e.level && (this._level = e.level),
                    e.fingerprint && (this._fingerprint = e.fingerprint)),
                this
              )
            }),
            (t.prototype.clear = function () {
              return (
                (this._breadcrumbs = []),
                (this._tags = {}),
                (this._extra = {}),
                (this._user = {}),
                (this._contexts = {}),
                (this._level = void 0),
                (this._transactionName = void 0),
                (this._fingerprint = void 0),
                (this._span = void 0),
                (this._session = void 0),
                this._notifyScopeListeners(),
                this
              )
            }),
            (t.prototype.addBreadcrumb = function (t, e) {
              var n = Object(u.a)({ timestamp: Object(h.a)() }, t)
              return (
                (this._breadcrumbs =
                  void 0 !== e && e >= 0
                    ? Object(u.e)(this._breadcrumbs, [n]).slice(-e)
                    : Object(u.e)(this._breadcrumbs, [n])),
                this._notifyScopeListeners(),
                this
              )
            }),
            (t.prototype.clearBreadcrumbs = function () {
              return (
                (this._breadcrumbs = []), this._notifyScopeListeners(), this
              )
            }),
            (t.prototype.applyToEvent = function (t, e) {
              var n
              if (
                (this._extra &&
                  Object.keys(this._extra).length &&
                  (t.extra = Object(u.a)(
                    Object(u.a)({}, this._extra),
                    t.extra,
                  )),
                this._tags &&
                  Object.keys(this._tags).length &&
                  (t.tags = Object(u.a)(Object(u.a)({}, this._tags), t.tags)),
                this._user &&
                  Object.keys(this._user).length &&
                  (t.user = Object(u.a)(Object(u.a)({}, this._user), t.user)),
                this._contexts &&
                  Object.keys(this._contexts).length &&
                  (t.contexts = Object(u.a)(
                    Object(u.a)({}, this._contexts),
                    t.contexts,
                  )),
                this._level && (t.level = this._level),
                this._transactionName &&
                  (t.transaction = this._transactionName),
                this._span)
              ) {
                t.contexts = Object(u.a)(
                  { trace: this._span.getTraceContext() },
                  t.contexts,
                )
                var r =
                  null === (n = this._span.transaction) || void 0 === n
                    ? void 0
                    : n.name
                r && (t.tags = Object(u.a)({ transaction: r }, t.tags))
              }
              return (
                this._applyFingerprint(t),
                (t.breadcrumbs = Object(u.e)(
                  t.breadcrumbs || [],
                  this._breadcrumbs,
                )),
                (t.breadcrumbs =
                  t.breadcrumbs.length > 0 ? t.breadcrumbs : void 0),
                this._notifyEventProcessors(
                  Object(u.e)(Mt(), this._eventProcessors),
                  t,
                  e,
                )
              )
            }),
            (t.prototype._notifyEventProcessors = function (t, e, n, r) {
              var i = this
              return (
                void 0 === r && (r = 0),
                new d(function (o, s) {
                  var a = t[r]
                  if (null === e || 'function' !== typeof a) o(e)
                  else {
                    var c = a(Object(u.a)({}, e), n)
                    Object(p.m)(c)
                      ? c
                          .then(function (e) {
                            return i
                              ._notifyEventProcessors(t, e, n, r + 1)
                              .then(o)
                          })
                          .then(null, s)
                      : i
                          ._notifyEventProcessors(t, c, n, r + 1)
                          .then(o)
                          .then(null, s)
                  }
                })
              )
            }),
            (t.prototype._notifyScopeListeners = function () {
              var t = this
              this._notifyingListeners ||
                ((this._notifyingListeners = !0),
                this._scopeListeners.forEach(function (e) {
                  e(t)
                }),
                (this._notifyingListeners = !1))
            }),
            (t.prototype._applyFingerprint = function (t) {
              ;(t.fingerprint = t.fingerprint
                ? Array.isArray(t.fingerprint)
                  ? t.fingerprint
                  : [t.fingerprint]
                : []),
                this._fingerprint &&
                  (t.fingerprint = t.fingerprint.concat(this._fingerprint)),
                t.fingerprint && !t.fingerprint.length && delete t.fingerprint
            }),
            t
          )
        })()
      function Mt() {
        var t = Object(f.e)()
        return (
          (t.__SENTRY__ = t.__SENTRY__ || {}),
          (t.__SENTRY__.globalEventProcessors =
            t.__SENTRY__.globalEventProcessors || []),
          t.__SENTRY__.globalEventProcessors
        )
      }
      var Ft = (function () {
          function t(t) {
            ;(this.errors = 0),
              (this.sid = Object(f.i)()),
              (this.timestamp = Date.now()),
              (this.started = Date.now()),
              (this.duration = 0),
              (this.status = l.Ok),
              (this.init = !0),
              t && this.update(t)
          }
          return (
            (t.prototype.update = function (t) {
              void 0 === t && (t = {}),
                t.user &&
                  (t.user.ip_address && (this.ipAddress = t.user.ip_address),
                  t.did ||
                    (this.did = t.user.id || t.user.email || t.user.username)),
                (this.timestamp = t.timestamp || Date.now()),
                t.sid &&
                  (this.sid = 32 === t.sid.length ? t.sid : Object(f.i)()),
                void 0 !== t.init && (this.init = t.init),
                t.did && (this.did = '' + t.did),
                'number' === typeof t.started && (this.started = t.started),
                'number' === typeof t.duration
                  ? (this.duration = t.duration)
                  : (this.duration = this.timestamp - this.started),
                t.release && (this.release = t.release),
                t.environment && (this.environment = t.environment),
                t.ipAddress && (this.ipAddress = t.ipAddress),
                t.userAgent && (this.userAgent = t.userAgent),
                'number' === typeof t.errors && (this.errors = t.errors),
                t.status && (this.status = t.status)
            }),
            (t.prototype.close = function (t) {
              t
                ? this.update({ status: t })
                : this.status === l.Ok
                ? this.update({ status: l.Exited })
                : this.update()
            }),
            (t.prototype.toJSON = function () {
              return Object(E.a)({
                sid: '' + this.sid,
                init: this.init,
                started: new Date(this.started).toISOString(),
                timestamp: new Date(this.timestamp).toISOString(),
                status: this.status,
                errors: this.errors,
                did:
                  'number' === typeof this.did || 'string' === typeof this.did
                    ? '' + this.did
                    : void 0,
                duration: this.duration,
                attrs: Object(E.a)({
                  release: this.release,
                  environment: this.environment,
                  ip_address: this.ipAddress,
                  user_agent: this.userAgent,
                }),
              })
            }),
            t
          )
        })(),
        Bt = (function () {
          function t(t, e, n) {
            void 0 === e && (e = new Pt()),
              void 0 === n && (n = 3),
              (this._version = n),
              (this._stack = [{}]),
              (this.getStackTop().scope = e),
              this.bindClient(t)
          }
          return (
            (t.prototype.isOlderThan = function (t) {
              return this._version < t
            }),
            (t.prototype.bindClient = function (t) {
              ;(this.getStackTop().client = t),
                t && t.setupIntegrations && t.setupIntegrations()
            }),
            (t.prototype.pushScope = function () {
              var t = Pt.clone(this.getScope())
              return (
                this.getStack().push({ client: this.getClient(), scope: t }), t
              )
            }),
            (t.prototype.popScope = function () {
              return !(this.getStack().length <= 1) && !!this.getStack().pop()
            }),
            (t.prototype.withScope = function (t) {
              var e = this.pushScope()
              try {
                t(e)
              } finally {
                this.popScope()
              }
            }),
            (t.prototype.getClient = function () {
              return this.getStackTop().client
            }),
            (t.prototype.getScope = function () {
              return this.getStackTop().scope
            }),
            (t.prototype.getStack = function () {
              return this._stack
            }),
            (t.prototype.getStackTop = function () {
              return this._stack[this._stack.length - 1]
            }),
            (t.prototype.captureException = function (t, e) {
              var n = (this._lastEventId = Object(f.i)()),
                r = e
              if (!e) {
                var i = void 0
                try {
                  throw new Error('Sentry syntheticException')
                } catch (t) {
                  i = t
                }
                r = { originalException: t, syntheticException: i }
              }
              return (
                this._invokeClient(
                  'captureException',
                  t,
                  Object(u.a)(Object(u.a)({}, r), { event_id: n }),
                ),
                n
              )
            }),
            (t.prototype.captureMessage = function (t, e, n) {
              var r = (this._lastEventId = Object(f.i)()),
                i = n
              if (!n) {
                var o = void 0
                try {
                  throw new Error(t)
                } catch (s) {
                  o = s
                }
                i = { originalException: t, syntheticException: o }
              }
              return (
                this._invokeClient(
                  'captureMessage',
                  t,
                  e,
                  Object(u.a)(Object(u.a)({}, i), { event_id: r }),
                ),
                r
              )
            }),
            (t.prototype.captureEvent = function (t, e) {
              var n = (this._lastEventId = Object(f.i)())
              return (
                this._invokeClient(
                  'captureEvent',
                  t,
                  Object(u.a)(Object(u.a)({}, e), { event_id: n }),
                ),
                n
              )
            }),
            (t.prototype.lastEventId = function () {
              return this._lastEventId
            }),
            (t.prototype.addBreadcrumb = function (t, e) {
              var n = this.getStackTop(),
                r = n.scope,
                i = n.client
              if (r && i) {
                var o = (i.getOptions && i.getOptions()) || {},
                  s = o.beforeBreadcrumb,
                  a = void 0 === s ? null : s,
                  c = o.maxBreadcrumbs,
                  p = void 0 === c ? 100 : c
                if (!(p <= 0)) {
                  var l = Object(h.a)(),
                    d = Object(u.a)({ timestamp: l }, t),
                    _ = a
                      ? Object(f.c)(function () {
                          return a(d, e)
                        })
                      : d
                  null !== _ && r.addBreadcrumb(_, Math.min(p, 100))
                }
              }
            }),
            (t.prototype.setUser = function (t) {
              var e = this.getScope()
              e && e.setUser(t)
            }),
            (t.prototype.setTags = function (t) {
              var e = this.getScope()
              e && e.setTags(t)
            }),
            (t.prototype.setExtras = function (t) {
              var e = this.getScope()
              e && e.setExtras(t)
            }),
            (t.prototype.setTag = function (t, e) {
              var n = this.getScope()
              n && n.setTag(t, e)
            }),
            (t.prototype.setExtra = function (t, e) {
              var n = this.getScope()
              n && n.setExtra(t, e)
            }),
            (t.prototype.setContext = function (t, e) {
              var n = this.getScope()
              n && n.setContext(t, e)
            }),
            (t.prototype.configureScope = function (t) {
              var e = this.getStackTop(),
                n = e.scope,
                r = e.client
              n && r && t(n)
            }),
            (t.prototype.run = function (t) {
              var e = Yt(this)
              try {
                t(this)
              } finally {
                Yt(e)
              }
            }),
            (t.prototype.getIntegration = function (t) {
              var e = this.getClient()
              if (!e) return null
              try {
                return e.getIntegration(t)
              } catch (n) {
                return (
                  O.warn(
                    'Cannot retrieve integration ' +
                      t.id +
                      ' from the current Hub',
                  ),
                  null
                )
              }
            }),
            (t.prototype.startSpan = function (t) {
              return this._callExtensionMethod('startSpan', t)
            }),
            (t.prototype.startTransaction = function (t, e) {
              return this._callExtensionMethod('startTransaction', t, e)
            }),
            (t.prototype.traceHeaders = function () {
              return this._callExtensionMethod('traceHeaders')
            }),
            (t.prototype.captureSession = function (t) {
              if ((void 0 === t && (t = !1), t)) return this.endSession()
              this._sendSessionUpdate()
            }),
            (t.prototype.endSession = function () {
              var t, e, n, r, i
              null ===
                (n =
                  null ===
                    (e =
                      null === (t = this.getStackTop()) || void 0 === t
                        ? void 0
                        : t.scope) || void 0 === e
                    ? void 0
                    : e.getSession()) ||
                void 0 === n ||
                n.close(),
                this._sendSessionUpdate(),
                null ===
                  (i =
                    null === (r = this.getStackTop()) || void 0 === r
                      ? void 0
                      : r.scope) ||
                  void 0 === i ||
                  i.setSession()
            }),
            (t.prototype.startSession = function (t) {
              var e = this.getStackTop(),
                n = e.scope,
                r = e.client,
                i = (r && r.getOptions()) || {},
                o = i.release,
                s = i.environment,
                a = new Ft(
                  Object(u.a)(
                    Object(u.a)(
                      { release: o, environment: s },
                      n && { user: n.getUser() },
                    ),
                    t,
                  ),
                )
              if (n) {
                var c = n.getSession && n.getSession()
                c && c.status === l.Ok && c.update({ status: l.Exited }),
                  this.endSession(),
                  n.setSession(a)
              }
              return a
            }),
            (t.prototype._sendSessionUpdate = function () {
              var t = this.getStackTop(),
                e = t.scope,
                n = t.client
              if (e) {
                var r = e.getSession && e.getSession()
                r && n && n.captureSession && n.captureSession(r)
              }
            }),
            (t.prototype._invokeClient = function (t) {
              for (var e, n = [], r = 1; r < arguments.length; r++)
                n[r - 1] = arguments[r]
              var i = this.getStackTop(),
                o = i.scope,
                s = i.client
              s && s[t] && (e = s)[t].apply(e, Object(u.e)(n, [o]))
            }),
            (t.prototype._callExtensionMethod = function (t) {
              for (var e = [], n = 1; n < arguments.length; n++)
                e[n - 1] = arguments[n]
              var r = qt(),
                i = r.__SENTRY__
              if (i && i.extensions && 'function' === typeof i.extensions[t])
                return i.extensions[t].apply(this, e)
              O.warn(
                'Extension method ' + t + " couldn't be found, doing nothing.",
              )
            }),
            t
          )
        })()
      function qt() {
        var t = Object(f.e)()
        return (
          (t.__SENTRY__ = t.__SENTRY__ || { extensions: {}, hub: void 0 }), t
        )
      }
      function Yt(t) {
        var e = qt(),
          n = Jt(e)
        return Gt(e, t), n
      }
      function Ht() {
        var t = qt()
        return (
          (Wt(t) && !Jt(t).isOlderThan(3)) || Gt(t, new Bt()),
          Object(j.b)()
            ? (function (t) {
                var e, n, r
                try {
                  var i =
                    null ===
                      (r =
                        null ===
                          (n =
                            null === (e = qt().__SENTRY__) || void 0 === e
                              ? void 0
                              : e.extensions) || void 0 === n
                          ? void 0
                          : n.domain) || void 0 === r
                      ? void 0
                      : r.active
                  if (!i) return Jt(t)
                  if (!Wt(i) || Jt(i).isOlderThan(3)) {
                    var o = Jt(t).getStackTop()
                    Gt(i, new Bt(o.client, Pt.clone(o.scope)))
                  }
                  return Jt(i)
                } catch (s) {
                  return Jt(t)
                }
              })(t)
            : Jt(t)
        )
      }
      function Wt(t) {
        return !!(t && t.__SENTRY__ && t.__SENTRY__.hub)
      }
      function Jt(t) {
        return (
          (t && t.__SENTRY__ && t.__SENTRY__.hub) ||
            ((t.__SENTRY__ = t.__SENTRY__ || {}),
            (t.__SENTRY__.hub = new Bt())),
          t.__SENTRY__.hub
        )
      }
      function Gt(t, e) {
        return (
          !!t &&
          ((t.__SENTRY__ = t.__SENTRY__ || {}), (t.__SENTRY__.hub = e), !0)
        )
      }
      function Xt(t) {
        for (var e = [], n = 1; n < arguments.length; n++)
          e[n - 1] = arguments[n]
        var r = Ht()
        if (r && r[t]) return r[t].apply(r, Object(u.e)(e))
        throw new Error(
          'No hub defined or ' +
            t +
            ' was not found on the hub, please open a bug report.',
        )
      }
      function Kt(t, e) {
        var n
        try {
          throw new Error('Sentry syntheticException')
        } catch (t) {
          n = t
        }
        return Xt('captureException', t, {
          captureContext: e,
          originalException: t,
          syntheticException: n,
        })
      }
      function zt(t) {
        Xt('withScope', t)
      }
      var Vt = 0
      function $t() {
        return Vt > 0
      }
      function Qt() {
        ;(Vt += 1),
          setTimeout(function () {
            Vt -= 1
          })
      }
      function Zt(t, e, n) {
        if ((void 0 === e && (e = {}), 'function' !== typeof t)) return t
        try {
          if (t.__sentry__) return t
          if (t.__sentry_wrapped__) return t.__sentry_wrapped__
        } catch (o) {
          return t
        }
        var r = function () {
          var r = Array.prototype.slice.call(arguments)
          try {
            n && 'function' === typeof n && n.apply(this, arguments)
            var i = r.map(function (t) {
              return Zt(t, e)
            })
            return t.handleEvent
              ? t.handleEvent.apply(this, i)
              : t.apply(this, i)
          } catch (o) {
            throw (
              (Qt(),
              zt(function (t) {
                t.addEventProcessor(function (t) {
                  var n = Object(u.a)({}, t)
                  return (
                    e.mechanism &&
                      (Object(f.b)(n, void 0, void 0),
                      Object(f.a)(n, e.mechanism)),
                    (n.extra = Object(u.a)(Object(u.a)({}, n.extra), {
                      arguments: r,
                    })),
                    n
                  )
                }),
                  Kt(o)
              }),
              o)
            )
          }
        }
        try {
          for (var i in t)
            Object.prototype.hasOwnProperty.call(t, i) && (r[i] = t[i])
        } catch (s) {}
        ;(t.prototype = t.prototype || {}),
          (r.prototype = t.prototype),
          Object.defineProperty(t, '__sentry_wrapped__', {
            enumerable: !1,
            value: r,
          }),
          Object.defineProperties(r, {
            __sentry__: { enumerable: !1, value: !0 },
            __sentry_original__: { enumerable: !1, value: t },
          })
        try {
          Object.getOwnPropertyDescriptor(r, 'name').configurable &&
            Object.defineProperty(r, 'name', {
              get: function () {
                return t.name
              },
            })
        } catch (s) {}
        return r
      }
      function te(t) {
        if ((void 0 === t && (t = {}), t.eventId))
          if (t.dsn) {
            var e = document.createElement('script')
            ;(e.async = !0),
              (e.src = new Nt(t.dsn).getReportDialogEndpoint(t)),
              t.onLoad && (e.onload = t.onLoad),
              (document.head || document.body).appendChild(e)
          } else O.error('Missing dsn option in showReportDialog call')
        else O.error('Missing eventId option in showReportDialog call')
      }
      var ee = n('vFt6'),
        ne = (function () {
          function t(e) {
            ;(this.name = t.id),
              (this._options = Object(u.a)(
                {
                  console: !0,
                  dom: !0,
                  fetch: !0,
                  history: !0,
                  sentry: !0,
                  xhr: !0,
                },
                e,
              ))
          }
          return (
            (t.prototype.addSentryBreadcrumb = function (t) {
              this._options.sentry &&
                T().addBreadcrumb(
                  {
                    category:
                      'sentry.' +
                      ('transaction' === t.type ? 'transaction' : 'event'),
                    event_id: t.event_id,
                    level: t.level,
                    message: Object(f.d)(t),
                  },
                  { event: t },
                )
            }),
            (t.prototype.setupOnce = function () {
              var t = this
              this._options.console &&
                W({
                  callback: function () {
                    for (var e = [], n = 0; n < arguments.length; n++)
                      e[n] = arguments[n]
                    t._consoleBreadcrumb.apply(t, Object(u.e)(e))
                  },
                  type: 'console',
                }),
                this._options.dom &&
                  W({
                    callback: function () {
                      for (var e = [], n = 0; n < arguments.length; n++)
                        e[n] = arguments[n]
                      t._domBreadcrumb.apply(t, Object(u.e)(e))
                    },
                    type: 'dom',
                  }),
                this._options.xhr &&
                  W({
                    callback: function () {
                      for (var e = [], n = 0; n < arguments.length; n++)
                        e[n] = arguments[n]
                      t._xhrBreadcrumb.apply(t, Object(u.e)(e))
                    },
                    type: 'xhr',
                  }),
                this._options.fetch &&
                  W({
                    callback: function () {
                      for (var e = [], n = 0; n < arguments.length; n++)
                        e[n] = arguments[n]
                      t._fetchBreadcrumb.apply(t, Object(u.e)(e))
                    },
                    type: 'fetch',
                  }),
                this._options.history &&
                  W({
                    callback: function () {
                      for (var e = [], n = 0; n < arguments.length; n++)
                        e[n] = arguments[n]
                      t._historyBreadcrumb.apply(t, Object(u.e)(e))
                    },
                    type: 'history',
                  })
            }),
            (t.prototype._consoleBreadcrumb = function (t) {
              var e = {
                category: 'console',
                data: { arguments: t.args, logger: 'console' },
                level: ct.fromString(t.level),
                message: Object(L.b)(t.args, ' '),
              }
              if ('assert' === t.level) {
                if (!1 !== t.args[0]) return
                ;(e.message =
                  'Assertion failed: ' +
                  (Object(L.b)(t.args.slice(1), ' ') || 'console.assert')),
                  (e.data.arguments = t.args.slice(1))
              }
              T().addBreadcrumb(e, { input: t.args, level: t.level })
            }),
            (t.prototype._domBreadcrumb = function (t) {
              var e
              try {
                e = t.event.target
                  ? Object(ee.a)(t.event.target)
                  : Object(ee.a)(t.event)
              } catch (n) {
                e = '<unknown>'
              }
              0 !== e.length &&
                T().addBreadcrumb(
                  { category: 'ui.' + t.name, message: e },
                  { event: t.event, name: t.name, global: t.global },
                )
            }),
            (t.prototype._xhrBreadcrumb = function (t) {
              if (t.endTimestamp) {
                if (t.xhr.__sentry_own_request__) return
                var e = t.xhr.__sentry_xhr__ || {},
                  n = e.method,
                  r = e.url,
                  i = e.status_code,
                  o = e.body
                T().addBreadcrumb(
                  {
                    category: 'xhr',
                    data: { method: n, url: r, status_code: i },
                    type: 'http',
                  },
                  { xhr: t.xhr, input: o },
                )
              } else;
            }),
            (t.prototype._fetchBreadcrumb = function (t) {
              t.endTimestamp &&
                ((t.fetchData.url.match(/sentry_key/) &&
                  'POST' === t.fetchData.method) ||
                  (t.error
                    ? T().addBreadcrumb(
                        {
                          category: 'fetch',
                          data: t.fetchData,
                          level: ct.Error,
                          type: 'http',
                        },
                        { data: t.error, input: t.args },
                      )
                    : T().addBreadcrumb(
                        {
                          category: 'fetch',
                          data: Object(u.a)(Object(u.a)({}, t.fetchData), {
                            status_code: t.response.status,
                          }),
                          type: 'http',
                        },
                        { input: t.args, response: t.response },
                      )))
            }),
            (t.prototype._historyBreadcrumb = function (t) {
              var e = Object(f.e)(),
                n = t.from,
                r = t.to,
                i = Object(f.h)(e.location.href),
                o = Object(f.h)(n),
                s = Object(f.h)(r)
              o.path || (o = i),
                i.protocol === s.protocol &&
                  i.host === s.host &&
                  (r = s.relative),
                i.protocol === o.protocol &&
                  i.host === o.host &&
                  (n = o.relative),
                T().addBreadcrumb({
                  category: 'navigation',
                  data: { from: n, to: r },
                })
            }),
            (t.id = 'Breadcrumbs'),
            t
          )
        })(),
        re = (function (t) {
          function e(e) {
            void 0 === e && (e = {})
            return (
              (e._metadata = e._metadata || {}),
              (e._metadata.sdk = e._metadata.sdk || {
                name: 'sentry.javascript.browser',
                packages: [{ name: 'npm:@sentry/browser', version: a }],
                version: a,
              }),
              t.call(this, Ut, e) || this
            )
          }
          return (
            Object(u.b)(e, t),
            (e.prototype.showReportDialog = function (t) {
              void 0 === t && (t = {}),
                Object(f.e)().document &&
                  (this._isEnabled()
                    ? te(
                        Object(u.a)(Object(u.a)({}, t), {
                          dsn: t.dsn || this.getDsn(),
                        }),
                      )
                    : O.error(
                        'Trying to call showReportDialog with Sentry Client disabled',
                      ))
            }),
            (e.prototype._prepareEvent = function (e, n, r) {
              return (
                (e.platform = e.platform || 'javascript'),
                t.prototype._prepareEvent.call(this, e, n, r)
              )
            }),
            (e.prototype._sendEvent = function (e) {
              var n = this.getIntegration(ne)
              n && n.addSentryBreadcrumb(e),
                t.prototype._sendEvent.call(this, e)
            }),
            e
          )
        })(at),
        ie = [
          'EventTarget',
          'Window',
          'Node',
          'ApplicationCache',
          'AudioTrackList',
          'ChannelMergerNode',
          'CryptoOperation',
          'EventSource',
          'FileReader',
          'HTMLUnknownElement',
          'IDBDatabase',
          'IDBRequest',
          'IDBTransaction',
          'KeyOperation',
          'MediaController',
          'MessagePort',
          'ModalWindow',
          'Notification',
          'SVGElementInstance',
          'Screen',
          'TextTrack',
          'TextTrackCue',
          'TextTrackList',
          'WebSocket',
          'WebSocketWorker',
          'Worker',
          'XMLHttpRequest',
          'XMLHttpRequestEventTarget',
          'XMLHttpRequestUpload',
        ],
        oe = (function () {
          function t(e) {
            ;(this.name = t.id),
              (this._options = Object(u.a)(
                {
                  XMLHttpRequest: !0,
                  eventTarget: !0,
                  requestAnimationFrame: !0,
                  setInterval: !0,
                  setTimeout: !0,
                },
                e,
              ))
          }
          return (
            (t.prototype.setupOnce = function () {
              var t = Object(f.e)()
              ;(this._options.setTimeout &&
                Object(E.c)(t, 'setTimeout', this._wrapTimeFunction.bind(this)),
              this._options.setInterval &&
                Object(E.c)(
                  t,
                  'setInterval',
                  this._wrapTimeFunction.bind(this),
                ),
              this._options.requestAnimationFrame &&
                Object(E.c)(
                  t,
                  'requestAnimationFrame',
                  this._wrapRAF.bind(this),
                ),
              this._options.XMLHttpRequest &&
                'XMLHttpRequest' in t &&
                Object(E.c)(
                  XMLHttpRequest.prototype,
                  'send',
                  this._wrapXHR.bind(this),
                ),
              this._options.eventTarget) &&
                (Array.isArray(this._options.eventTarget)
                  ? this._options.eventTarget
                  : ie
                ).forEach(this._wrapEventTarget.bind(this))
            }),
            (t.prototype._wrapTimeFunction = function (t) {
              return function () {
                for (var e = [], n = 0; n < arguments.length; n++)
                  e[n] = arguments[n]
                var r = e[0]
                return (
                  (e[0] = Zt(r, {
                    mechanism: {
                      data: { function: Object(D.a)(t) },
                      handled: !0,
                      type: 'instrument',
                    },
                  })),
                  t.apply(this, e)
                )
              }
            }),
            (t.prototype._wrapRAF = function (t) {
              return function (e) {
                return t.call(
                  this,
                  Zt(e, {
                    mechanism: {
                      data: {
                        function: 'requestAnimationFrame',
                        handler: Object(D.a)(t),
                      },
                      handled: !0,
                      type: 'instrument',
                    },
                  }),
                )
              }
            }),
            (t.prototype._wrapEventTarget = function (t) {
              var e = Object(f.e)(),
                n = e[t] && e[t].prototype
              n &&
                n.hasOwnProperty &&
                n.hasOwnProperty('addEventListener') &&
                (Object(E.c)(n, 'addEventListener', function (e) {
                  return function (n, r, i) {
                    try {
                      'function' === typeof r.handleEvent &&
                        (r.handleEvent = Zt(r.handleEvent.bind(r), {
                          mechanism: {
                            data: {
                              function: 'handleEvent',
                              handler: Object(D.a)(r),
                              target: t,
                            },
                            handled: !0,
                            type: 'instrument',
                          },
                        }))
                    } catch (o) {}
                    return e.call(
                      this,
                      n,
                      Zt(r, {
                        mechanism: {
                          data: {
                            function: 'addEventListener',
                            handler: Object(D.a)(r),
                            target: t,
                          },
                          handled: !0,
                          type: 'instrument',
                        },
                      }),
                      i,
                    )
                  }
                }),
                Object(E.c)(n, 'removeEventListener', function (t) {
                  return function (e, n, r) {
                    var i,
                      o = n
                    try {
                      var s =
                        null === (i = o) || void 0 === i
                          ? void 0
                          : i.__sentry_wrapped__
                      s && t.call(this, e, s, r)
                    } catch (a) {}
                    return t.call(this, e, o, r)
                  }
                }))
            }),
            (t.prototype._wrapXHR = function (t) {
              return function () {
                for (var e = [], n = 0; n < arguments.length; n++)
                  e[n] = arguments[n]
                var r = this,
                  i = ['onload', 'onerror', 'onprogress', 'onreadystatechange']
                return (
                  i.forEach(function (t) {
                    t in r &&
                      'function' === typeof r[t] &&
                      Object(E.c)(r, t, function (e) {
                        var n = {
                          mechanism: {
                            data: { function: t, handler: Object(D.a)(e) },
                            handled: !0,
                            type: 'instrument',
                          },
                        }
                        return (
                          e.__sentry_original__ &&
                            (n.mechanism.data.handler = Object(D.a)(
                              e.__sentry_original__,
                            )),
                          Zt(e, n)
                        )
                      })
                  }),
                  t.apply(this, e)
                )
              }
            }),
            (t.id = 'TryCatch'),
            t
          )
        })(),
        se = (function () {
          function t(e) {
            ;(this.name = t.id),
              (this._onErrorHandlerInstalled = !1),
              (this._onUnhandledRejectionHandlerInstalled = !1),
              (this._options = Object(u.a)(
                { onerror: !0, onunhandledrejection: !0 },
                e,
              ))
          }
          return (
            (t.prototype.setupOnce = function () {
              ;(Error.stackTraceLimit = 50),
                this._options.onerror &&
                  (O.log('Global Handler attached: onerror'),
                  this._installGlobalOnErrorHandler()),
                this._options.onunhandledrejection &&
                  (O.log('Global Handler attached: onunhandledrejection'),
                  this._installGlobalOnUnhandledRejectionHandler())
            }),
            (t.prototype._installGlobalOnErrorHandler = function () {
              var e = this
              this._onErrorHandlerInstalled ||
                (W({
                  callback: function (n) {
                    var r = n.error,
                      i = T(),
                      o = i.getIntegration(t),
                      s = r && !0 === r.__sentry_own_request__
                    if (o && !$t() && !s) {
                      var a = i.getClient(),
                        c = Object(p.i)(r)
                          ? e._eventFromIncompleteOnError(
                              n.msg,
                              n.url,
                              n.line,
                              n.column,
                            )
                          : e._enhanceEventWithInitialFrame(
                              St(r, void 0, {
                                attachStacktrace:
                                  a && a.getOptions().attachStacktrace,
                                rejection: !1,
                              }),
                              n.url,
                              n.line,
                              n.column,
                            )
                      Object(f.a)(c, { handled: !1, type: 'onerror' }),
                        i.captureEvent(c, { originalException: r })
                    }
                  },
                  type: 'error',
                }),
                (this._onErrorHandlerInstalled = !0))
            }),
            (t.prototype._installGlobalOnUnhandledRejectionHandler = function () {
              var e = this
              this._onUnhandledRejectionHandlerInstalled ||
                (W({
                  callback: function (n) {
                    var r = n
                    try {
                      'reason' in n
                        ? (r = n.reason)
                        : 'detail' in n &&
                          'reason' in n.detail &&
                          (r = n.detail.reason)
                    } catch (u) {}
                    var i = T(),
                      o = i.getIntegration(t),
                      s = r && !0 === r.__sentry_own_request__
                    if (!o || $t() || s) return !0
                    var a = i.getClient(),
                      c = Object(p.i)(r)
                        ? e._eventFromRejectionWithPrimitive(r)
                        : St(r, void 0, {
                            attachStacktrace:
                              a && a.getOptions().attachStacktrace,
                            rejection: !0,
                          })
                    ;(c.level = ct.Error),
                      Object(f.a)(c, {
                        handled: !1,
                        type: 'onunhandledrejection',
                      }),
                      i.captureEvent(c, { originalException: r })
                  },
                  type: 'unhandledrejection',
                }),
                (this._onUnhandledRejectionHandlerInstalled = !0))
            }),
            (t.prototype._eventFromIncompleteOnError = function (t, e, n, r) {
              var i,
                o = Object(p.e)(t) ? t.message : t
              if (Object(p.k)(o)) {
                var s = o.match(
                  /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i,
                )
                s && ((i = s[1]), (o = s[2]))
              }
              var a = {
                exception: { values: [{ type: i || 'Error', value: o }] },
              }
              return this._enhanceEventWithInitialFrame(a, e, n, r)
            }),
            (t.prototype._eventFromRejectionWithPrimitive = function (t) {
              return {
                exception: {
                  values: [
                    {
                      type: 'UnhandledRejection',
                      value:
                        'Non-Error promise rejection captured with value: ' +
                        String(t),
                    },
                  ],
                },
              }
            }),
            (t.prototype._enhanceEventWithInitialFrame = function (t, e, n, r) {
              ;(t.exception = t.exception || {}),
                (t.exception.values = t.exception.values || []),
                (t.exception.values[0] = t.exception.values[0] || {}),
                (t.exception.values[0].stacktrace =
                  t.exception.values[0].stacktrace || {}),
                (t.exception.values[0].stacktrace.frames =
                  t.exception.values[0].stacktrace.frames || [])
              var i = isNaN(parseInt(r, 10)) ? void 0 : r,
                o = isNaN(parseInt(n, 10)) ? void 0 : n,
                s = Object(p.k)(e) && e.length > 0 ? e : Object(f.f)()
              return (
                0 === t.exception.values[0].stacktrace.frames.length &&
                  t.exception.values[0].stacktrace.frames.push({
                    colno: i,
                    filename: s,
                    function: '?',
                    in_app: !0,
                    lineno: o,
                  }),
                t
              )
            }),
            (t.id = 'GlobalHandlers'),
            t
          )
        })(),
        ae = (function () {
          function t(e) {
            void 0 === e && (e = {}),
              (this.name = t.id),
              (this._key = e.key || 'cause'),
              (this._limit = e.limit || 5)
          }
          return (
            (t.prototype.setupOnce = function () {
              y(function (e, n) {
                var r = T().getIntegration(t)
                return r ? r._handler(e, n) : e
              })
            }),
            (t.prototype._handler = function (t, e) {
              if (
                !t.exception ||
                !t.exception.values ||
                !e ||
                !Object(p.g)(e.originalException, Error)
              )
                return t
              var n = this._walkErrorTree(e.originalException, this._key)
              return (
                (t.exception.values = Object(u.e)(n, t.exception.values)), t
              )
            }),
            (t.prototype._walkErrorTree = function (t, e, n) {
              if (
                (void 0 === n && (n = []),
                !Object(p.g)(t[e], Error) || n.length + 1 >= this._limit)
              )
                return n
              var r = Ot(gt(t[e]))
              return this._walkErrorTree(t[e], e, Object(u.e)([r], n))
            }),
            (t.id = 'LinkedErrors'),
            t
          )
        })(),
        ce = Object(f.e)(),
        ue = (function () {
          function t() {
            this.name = t.id
          }
          return (
            (t.prototype.setupOnce = function () {
              y(function (e) {
                var n, r, i
                if (T().getIntegration(t)) {
                  if (!ce.navigator && !ce.location && !ce.document) return e
                  var o =
                      (null === (n = e.request) || void 0 === n
                        ? void 0
                        : n.url) ||
                      (null === (r = ce.location) || void 0 === r
                        ? void 0
                        : r.href),
                    s = (ce.document || {}).referrer,
                    a = (ce.navigator || {}).userAgent,
                    c = Object(u.a)(
                      Object(u.a)(
                        Object(u.a)(
                          {},
                          null === (i = e.request) || void 0 === i
                            ? void 0
                            : i.headers,
                        ),
                        s && { Referer: s },
                      ),
                      a && { 'User-Agent': a },
                    ),
                    p = Object(u.a)(Object(u.a)({}, o && { url: o }), {
                      headers: c,
                    })
                  return Object(u.a)(Object(u.a)({}, e), { request: p })
                }
                return e
              })
            }),
            (t.id = 'UserAgent'),
            t
          )
        })(),
        pe = [
          new r.InboundFilters(),
          new r.FunctionToString(),
          new oe(),
          new ne(),
          new se(),
          new ae(),
          new ue(),
        ]
      function he(t) {
        if (
          (void 0 === t && (t = {}),
          void 0 === t.defaultIntegrations && (t.defaultIntegrations = pe),
          void 0 === t.release)
        ) {
          var e = Object(f.e)()
          e.SENTRY_RELEASE &&
            e.SENTRY_RELEASE.id &&
            (t.release = e.SENTRY_RELEASE.id)
        }
        void 0 === t.autoSessionTracking && (t.autoSessionTracking = !0),
          (function (t, e) {
            !0 === e.debug && O.enable()
            var n = T(),
              r = new t(e)
            n.bindClient(r)
          })(re, t),
          t.autoSessionTracking &&
            (function () {
              if ('undefined' === typeof Object(f.e)().document)
                return void O.warn(
                  'Session tracking in non-browser environment with @sentry/browser is not supported.',
                )
              var t = T()
              if (
                'function' !== typeof t.startSession ||
                'function' !== typeof t.captureSession
              )
                return
              t.startSession(),
                t.captureSession(),
                W({
                  callback: function () {
                    t.startSession(), t.captureSession()
                  },
                  type: 'history',
                })
            })()
      }
      var le = (function () {
          function t(t, e) {
            ;(this._options = t), (this._packageNames = e)
          }
          return (
            (t.prototype.addSdkMetadata = function () {
              ;(this._options._metadata = this._options._metadata || {}),
                (this._options._metadata.sdk = this._getSdkInfo())
            }),
            (t.prototype._getSdkInfo = function () {
              return {
                name: 'sentry.javascript.nextjs',
                version: a,
                packages: this._getPackages(),
              }
            }),
            (t.prototype._getPackages = function () {
              return this._packageNames.map(function (t) {
                return { name: 'npm:@sentry/' + t, version: a }
              })
            }),
            t
          )
        })(),
        de = {},
        fe = Object(f.e)()
      fe.Sentry && fe.Sentry.Integrations && (de = fe.Sentry.Integrations)
      Object(u.a)(Object(u.a)(Object(u.a)({}, de), r), i)
      function _e(t) {
        new le(t, ['nextjs', 'react']).addSdkMetadata(),
          (function (t) {
            ;(t._metadata = t._metadata || {}),
              (t._metadata.sdk = t._metadata.sdk || {
                name: 'sentry.javascript.react',
                packages: [{ name: 'npm:@sentry/react', version: a }],
                version: a,
              }),
              he(t)
          })(t),
          Xt('configureScope', function (t) {
            t.setTag('runtime', 'browser')
          })
      }
    },
    '9/Zf': function (t, e, n) {
      'use strict'
      ;(function (t) {
        n.d(e, 'e', function () {
          return o
        }),
          n.d(e, 'i', function () {
            return s
          }),
          n.d(e, 'h', function () {
            return a
          }),
          n.d(e, 'd', function () {
            return c
          }),
          n.d(e, 'c', function () {
            return u
          }),
          n.d(e, 'b', function () {
            return p
          }),
          n.d(e, 'a', function () {
            return h
          }),
          n.d(e, 'f', function () {
            return l
          }),
          n.d(e, 'g', function () {
            return d
          })
        var r = n('+A1k'),
          i = (n('+924'), {})
        function o() {
          return Object(r.b)()
            ? t
            : 'undefined' !== typeof window
            ? window
            : 'undefined' !== typeof self
            ? self
            : i
        }
        function s() {
          var t = o(),
            e = t.crypto || t.msCrypto
          if (void 0 !== e && e.getRandomValues) {
            var n = new Uint16Array(8)
            e.getRandomValues(n),
              (n[3] = (4095 & n[3]) | 16384),
              (n[4] = (16383 & n[4]) | 32768)
            var r = function (t) {
              for (var e = t.toString(16); e.length < 4; ) e = '0' + e
              return e
            }
            return (
              r(n[0]) +
              r(n[1]) +
              r(n[2]) +
              r(n[3]) +
              r(n[4]) +
              r(n[5]) +
              r(n[6]) +
              r(n[7])
            )
          }
          return 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function (
            t,
          ) {
            var e = (16 * Math.random()) | 0
            return ('x' === t ? e : (3 & e) | 8).toString(16)
          })
        }
        function a(t) {
          if (!t) return {}
          var e = t.match(
            /^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/,
          )
          if (!e) return {}
          var n = e[6] || '',
            r = e[8] || ''
          return {
            host: e[4],
            path: e[5],
            protocol: e[2],
            relative: e[5] + n + r,
          }
        }
        function c(t) {
          if (t.message) return t.message
          if (t.exception && t.exception.values && t.exception.values[0]) {
            var e = t.exception.values[0]
            return e.type && e.value
              ? e.type + ': ' + e.value
              : e.type || e.value || t.event_id || '<unknown>'
          }
          return t.event_id || '<unknown>'
        }
        function u(t) {
          var e = o()
          if (!('console' in e)) return t()
          var n = e.console,
            r = {}
          ;['debug', 'info', 'warn', 'error', 'log', 'assert'].forEach(
            function (t) {
              t in e.console &&
                n[t].__sentry_original__ &&
                ((r[t] = n[t]), (n[t] = n[t].__sentry_original__))
            },
          )
          var i = t()
          return (
            Object.keys(r).forEach(function (t) {
              n[t] = r[t]
            }),
            i
          )
        }
        function p(t, e, n) {
          ;(t.exception = t.exception || {}),
            (t.exception.values = t.exception.values || []),
            (t.exception.values[0] = t.exception.values[0] || {}),
            (t.exception.values[0].value =
              t.exception.values[0].value || e || ''),
            (t.exception.values[0].type =
              t.exception.values[0].type || n || 'Error')
        }
        function h(t, e) {
          void 0 === e && (e = {})
          try {
            ;(t.exception.values[0].mechanism =
              t.exception.values[0].mechanism || {}),
              Object.keys(e).forEach(function (n) {
                t.exception.values[0].mechanism[n] = e[n]
              })
          } catch (n) {}
        }
        function l() {
          try {
            return document.location.href
          } catch (t) {
            return ''
          }
        }
        function d(t, e) {
          if (!e) return 6e4
          var n = parseInt('' + e, 10)
          if (!isNaN(n)) return 1e3 * n
          var r = Date.parse('' + e)
          return isNaN(r) ? 6e4 : r - t
        }
      }.call(this, n('3r9c')))
    },
    '9AQC': function (t, e, n) {
      'use strict'
      function r(t) {
        switch (Object.prototype.toString.call(t)) {
          case '[object Error]':
          case '[object Exception]':
          case '[object DOMException]':
            return !0
          default:
            return _(t, Error)
        }
      }
      function i(t) {
        return '[object ErrorEvent]' === Object.prototype.toString.call(t)
      }
      function o(t) {
        return '[object DOMError]' === Object.prototype.toString.call(t)
      }
      function s(t) {
        return '[object DOMException]' === Object.prototype.toString.call(t)
      }
      function a(t) {
        return '[object String]' === Object.prototype.toString.call(t)
      }
      function c(t) {
        return null === t || ('object' !== typeof t && 'function' !== typeof t)
      }
      function u(t) {
        return '[object Object]' === Object.prototype.toString.call(t)
      }
      function p(t) {
        return 'undefined' !== typeof Event && _(t, Event)
      }
      function h(t) {
        return 'undefined' !== typeof Element && _(t, Element)
      }
      function l(t) {
        return '[object RegExp]' === Object.prototype.toString.call(t)
      }
      function d(t) {
        return Boolean(t && t.then && 'function' === typeof t.then)
      }
      function f(t) {
        return (
          u(t) &&
          'nativeEvent' in t &&
          'preventDefault' in t &&
          'stopPropagation' in t
        )
      }
      function _(t, e) {
        try {
          return t instanceof e
        } catch (n) {
          return !1
        }
      }
      n.d(e, 'd', function () {
        return r
      }),
        n.d(e, 'e', function () {
          return i
        }),
        n.d(e, 'a', function () {
          return o
        }),
        n.d(e, 'b', function () {
          return s
        }),
        n.d(e, 'k', function () {
          return a
        }),
        n.d(e, 'i', function () {
          return c
        }),
        n.d(e, 'h', function () {
          return u
        }),
        n.d(e, 'f', function () {
          return p
        }),
        n.d(e, 'c', function () {
          return h
        }),
        n.d(e, 'j', function () {
          return l
        }),
        n.d(e, 'm', function () {
          return d
        }),
        n.d(e, 'l', function () {
          return f
        }),
        n.d(e, 'g', function () {
          return _
        })
    },
    kdvv: function (t, e, n) {
      'use strict'
      ;(function (t) {
        n.d(e, 'a', function () {
          return c
        })
        var r = n('9/Zf'),
          i = n('+A1k'),
          o = {
            nowSeconds: function () {
              return Date.now() / 1e3
            },
          }
        var s = Object(i.b)()
            ? (function () {
                try {
                  return Object(i.a)(t, 'perf_hooks').performance
                } catch (e) {
                  return
                }
              })()
            : (function () {
                var t = Object(r.e)().performance
                if (t && t.now)
                  return {
                    now: function () {
                      return t.now()
                    },
                    timeOrigin: Date.now() - t.now(),
                  }
              })(),
          a =
            void 0 === s
              ? o
              : {
                  nowSeconds: function () {
                    return (s.timeOrigin + s.now()) / 1e3
                  },
                },
          c = o.nowSeconds.bind(o)
        a.nowSeconds.bind(a),
          (function () {
            var t = Object(r.e)().performance
            if (t) {
              var e = 36e5,
                n = t.now(),
                i = Date.now(),
                o = t.timeOrigin ? Math.abs(t.timeOrigin + n - i) : e,
                s = o < e,
                a = t.timing && t.timing.navigationStart,
                c = 'number' === typeof a ? Math.abs(a + n - i) : e
              return s || c < e
                ? o <= c
                  ? ('timeOrigin', t.timeOrigin)
                  : ('navigationStart', a)
                : ('dateNow', i)
            }
            ;('none')
          })()
      }.call(this, n('BKcT')(t)))
    },
    mrSG: function (t, e, n) {
      'use strict'
      n.d(e, 'b', function () {
        return i
      }),
        n.d(e, 'a', function () {
          return o
        }),
        n.d(e, 'd', function () {
          return s
        }),
        n.d(e, 'f', function () {
          return a
        }),
        n.d(e, 'c', function () {
          return c
        }),
        n.d(e, 'e', function () {
          return u
        })
      var r = function (t, e) {
        return (r =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (t, e) {
              t.__proto__ = e
            }) ||
          function (t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
          })(t, e)
      }
      function i(t, e) {
        function n() {
          this.constructor = t
        }
        r(t, e),
          (t.prototype =
            null === e
              ? Object.create(e)
              : ((n.prototype = e.prototype), new n()))
      }
      var o = function () {
        return (o =
          Object.assign ||
          function (t) {
            for (var e, n = 1, r = arguments.length; n < r; n++)
              for (var i in (e = arguments[n]))
                Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i])
            return t
          }).apply(this, arguments)
      }
      function s(t, e) {
        var n = {}
        for (var r in t)
          Object.prototype.hasOwnProperty.call(t, r) &&
            e.indexOf(r) < 0 &&
            (n[r] = t[r])
        if (null != t && 'function' === typeof Object.getOwnPropertySymbols) {
          var i = 0
          for (r = Object.getOwnPropertySymbols(t); i < r.length; i++)
            e.indexOf(r[i]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(t, r[i]) &&
              (n[r[i]] = t[r[i]])
        }
        return n
      }
      function a(t) {
        var e = 'function' === typeof Symbol && Symbol.iterator,
          n = e && t[e],
          r = 0
        if (n) return n.call(t)
        if (t && 'number' === typeof t.length)
          return {
            next: function () {
              return (
                t && r >= t.length && (t = void 0),
                { value: t && t[r++], done: !t }
              )
            },
          }
        throw new TypeError(
          e ? 'Object is not iterable.' : 'Symbol.iterator is not defined.',
        )
      }
      function c(t, e) {
        var n = 'function' === typeof Symbol && t[Symbol.iterator]
        if (!n) return t
        var r,
          i,
          o = n.call(t),
          s = []
        try {
          for (; (void 0 === e || e-- > 0) && !(r = o.next()).done; )
            s.push(r.value)
        } catch (a) {
          i = { error: a }
        } finally {
          try {
            r && !r.done && (n = o.return) && n.call(o)
          } finally {
            if (i) throw i.error
          }
        }
        return s
      }
      function u() {
        for (var t = [], e = 0; e < arguments.length; e++)
          t = t.concat(c(arguments[e]))
        return t
      }
    },
    pRiV: function (t, e, n) {
      'use strict'
      n.d(e, 'a', function () {
        return i
      })
      var r = '<anonymous>'
      function i(t) {
        try {
          return (t && 'function' === typeof t && t.name) || r
        } catch (e) {
          return r
        }
      }
    },
    vFt6: function (t, e, n) {
      'use strict'
      n.d(e, 'a', function () {
        return i
      })
      var r = n('9AQC')
      function i(t) {
        try {
          for (
            var e = t, n = [], r = 0, i = 0, s = ' > '.length, a = void 0;
            e &&
            r++ < 5 &&
            !(
              'html' === (a = o(e)) ||
              (r > 1 && i + n.length * s + a.length >= 80)
            );

          )
            n.push(a), (i += a.length), (e = e.parentNode)
          return n.reverse().join(' > ')
        } catch (c) {
          return '<unknown>'
        }
      }
      function o(t) {
        var e,
          n,
          i,
          o,
          s,
          a = t,
          c = []
        if (!a || !a.tagName) return ''
        if (
          (c.push(a.tagName.toLowerCase()),
          a.id && c.push('#' + a.id),
          (e = a.className) && Object(r.k)(e))
        )
          for (n = e.split(/\s+/), s = 0; s < n.length; s++) c.push('.' + n[s])
        var u = ['type', 'name', 'title', 'alt']
        for (s = 0; s < u.length; s++)
          (i = u[s]),
            (o = a.getAttribute(i)) && c.push('[' + i + '="' + o + '"]')
        return c.join('')
      }
    },
    wCA9: function (t, e, n) {
      'use strict'
      n.d(e, 'a', function () {
        return r
      })
      var r = (function () {
        function t() {
          ;(this._hasWeakSet = 'function' === typeof WeakSet),
            (this._inner = this._hasWeakSet ? new WeakSet() : [])
        }
        return (
          (t.prototype.memoize = function (t) {
            if (this._hasWeakSet)
              return !!this._inner.has(t) || (this._inner.add(t), !1)
            for (var e = 0; e < this._inner.length; e++) {
              if (this._inner[e] === t) return !0
            }
            return this._inner.push(t), !1
          }),
          (t.prototype.unmemoize = function (t) {
            if (this._hasWeakSet) this._inner.delete(t)
            else
              for (var e = 0; e < this._inner.length; e++)
                if (this._inner[e] === t) {
                  this._inner.splice(e, 1)
                  break
                }
          }),
          t
        )
      })()
    },
  },
])
//# sourceMappingURL=b7231992ea56b2b24fe7c1cb30d43d005f2c6057.1f1d3efaa1361c307794.js.map
