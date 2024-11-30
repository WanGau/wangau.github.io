var _yt_player = {};
(function (g) {
  var window = this; /*

 Copyright 2017 Google LLC
 SPDX-License-Identifier: BSD-3-Clause
*/
  /*
 SPDX-License-Identifier: Apache-2.0
*/
  ("use strict");
  var jjb = function (a) {
      a.mutedAutoplay = !1;
      a.endSeconds = NaN;
      a.limitedPlaybackDurationInSeconds = NaN;
      g.fR(a);
    },
    kjb = function (a) {
      g.Yo(a);
      for (var b = 0; b < a.pg.length; b++) {
        var c = a.pg[b],
          d = a.Zy[b];
        if (d !== c.version) return !0;
        if (!g.Wo(c) || c.Vm)
          if (c.Vm || c.P_ !== g.ap)
            (c.l2(c) || kjb(c)) && c.m2(c), (c.Vm = !1), (c.P_ = g.ap);
        if (d !== c.version) return !0;
      }
      return !1;
    },
    D4 = function (a) {
      var b = g.Uo(a);
      a = {};
      return (
        (a[Symbol.dispose] = function () {
          g.Uo(b);
        }),
        a
      );
    },
    ljb = function () {
      var a = Object.assign({}, g.vcb);
      Object.getOwnPropertyNames(g.vcb).forEach(function (b) {
        g.dp[b] !== void 0 && (a[b] = g.dp[b]);
      });
      return a;
    },
    mjb = function () {
      return {
        J: "svg",
        Y: {
          height: "100%",
          version: "1.1",
          viewBox: "0 0 110 26",
          width: "100%",
        },
        X: [
          {
            J: "path",
            Jc: !0,
            S: "ytp-svg-fill",
            Y: {
              d: "M 16.68,.99 C 13.55,1.03 7.02,1.16 4.99,1.68 c -1.49,.4 -2.59,1.6 -2.99,3 -0.69,2.7 -0.68,8.31 -0.68,8.31 0,0 -0.01,5.61 .68,8.31 .39,1.5 1.59,2.6 2.99,3 2.69,.7 13.40,.68 13.40,.68 0,0 10.70,.01 13.40,-0.68 1.5,-0.4 2.59,-1.6 2.99,-3 .69,-2.7 .68,-8.31 .68,-8.31 0,0 .11,-5.61 -0.68,-8.31 -0.4,-1.5 -1.59,-2.6 -2.99,-3 C 29.11,.98 18.40,.99 18.40,.99 c 0,0 -0.67,-0.01 -1.71,0 z m 72.21,.90 0,21.28 2.78,0 .31,-1.37 .09,0 c .3,.5 .71,.88 1.21,1.18 .5,.3 1.08,.40 1.68,.40 1.1,0 1.99,-0.49 2.49,-1.59 .5,-1.1 .81,-2.70 .81,-4.90 l 0,-2.40 c 0,-1.6 -0.11,-2.90 -0.31,-3.90 -0.2,-0.89 -0.5,-1.59 -1,-2.09 -0.5,-0.4 -1.10,-0.59 -1.90,-0.59 -0.59,0 -1.18,.19 -1.68,.49 -0.49,.3 -1.01,.80 -1.21,1.40 l 0,-7.90 -3.28,0 z m -49.99,.78 3.90,13.90 .18,6.71 3.31,0 0,-6.71 3.87,-13.90 -3.37,0 -1.40,6.31 c -0.4,1.89 -0.71,3.19 -0.81,3.99 l -0.09,0 c -0.2,-1.1 -0.51,-2.4 -0.81,-3.99 l -1.37,-6.31 -3.40,0 z m 29.59,0 0,2.71 3.40,0 0,17.90 3.28,0 0,-17.90 3.40,0 c 0,0 .00,-2.71 -0.09,-2.71 l -9.99,0 z m -53.49,5.12 8.90,5.18 -8.90,5.09 0,-10.28 z m 89.40,.09 c -1.7,0 -2.89,.59 -3.59,1.59 -0.69,.99 -0.99,2.60 -0.99,4.90 l 0,2.59 c 0,2.2 .30,3.90 .99,4.90 .7,1.1 1.8,1.59 3.5,1.59 1.4,0 2.38,-0.3 3.18,-1 .7,-0.7 1.09,-1.69 1.09,-3.09 l 0,-0.5 -2.90,-0.21 c 0,1 -0.08,1.6 -0.28,2 -0.1,.4 -0.5,.62 -1,.62 -0.3,0 -0.61,-0.11 -0.81,-0.31 -0.2,-0.3 -0.30,-0.59 -0.40,-1.09 -0.1,-0.5 -0.09,-1.21 -0.09,-2.21 l 0,-0.78 5.71,-0.09 0,-2.62 c 0,-1.6 -0.10,-2.78 -0.40,-3.68 -0.2,-0.89 -0.71,-1.59 -1.31,-1.99 -0.7,-0.4 -1.48,-0.59 -2.68,-0.59 z m -50.49,.09 c -1.09,0 -2.01,.18 -2.71,.68 -0.7,.4 -1.2,1.12 -1.49,2.12 -0.3,1 -0.5,2.27 -0.5,3.87 l 0,2.21 c 0,1.5 .10,2.78 .40,3.78 .2,.9 .70,1.62 1.40,2.12 .69,.5 1.71,.68 2.81,.78 1.19,0 2.08,-0.28 2.78,-0.68 .69,-0.4 1.09,-1.09 1.49,-2.09 .39,-1 .49,-2.30 .49,-3.90 l 0,-2.21 c 0,-1.6 -0.2,-2.87 -0.49,-3.87 -0.3,-0.89 -0.8,-1.62 -1.49,-2.12 -0.7,-0.5 -1.58,-0.68 -2.68,-0.68 z m 12.18,.09 0,11.90 c -0.1,.3 -0.29,.48 -0.59,.68 -0.2,.2 -0.51,.31 -0.81,.31 -0.3,0 -0.58,-0.10 -0.68,-0.40 -0.1,-0.3 -0.18,-0.70 -0.18,-1.40 l 0,-10.99 -3.40,0 0,11.21 c 0,1.4 .18,2.39 .68,3.09 .49,.7 1.21,1 2.21,1 1.4,0 2.48,-0.69 3.18,-2.09 l .09,0 .31,1.78 2.59,0 0,-14.99 c 0,0 -3.40,.00 -3.40,-0.09 z m 17.31,0 0,11.90 c -0.1,.3 -0.29,.48 -0.59,.68 -0.2,.2 -0.51,.31 -0.81,.31 -0.3,0 -0.58,-0.10 -0.68,-0.40 -0.1,-0.3 -0.21,-0.70 -0.21,-1.40 l 0,-10.99 -3.40,0 0,11.21 c 0,1.4 .21,2.39 .71,3.09 .5,.7 1.18,1 2.18,1 1.39,0 2.51,-0.69 3.21,-2.09 l .09,0 .28,1.78 2.62,0 0,-14.99 c 0,0 -3.40,.00 -3.40,-0.09 z m 20.90,2.09 c .4,0 .58,.11 .78,.31 .2,.3 .30,.59 .40,1.09 .1,.5 .09,1.21 .09,2.21 l 0,1.09 -2.5,0 0,-1.09 c 0,-1 -0.00,-1.71 .09,-2.21 0,-0.4 .11,-0.8 .31,-1 .2,-0.3 .51,-0.40 .81,-0.40 z m -50.49,.12 c .5,0 .8,.18 1,.68 .19,.5 .28,1.30 .28,2.40 l 0,4.68 c 0,1.1 -0.08,1.90 -0.28,2.40 -0.2,.5 -0.5,.68 -1,.68 -0.5,0 -0.79,-0.18 -0.99,-0.68 -0.2,-0.5 -0.31,-1.30 -0.31,-2.40 l 0,-4.68 c 0,-1.1 .11,-1.90 .31,-2.40 .2,-0.5 .49,-0.68 .99,-0.68 z m 39.68,.09 c .3,0 .61,.10 .81,.40 .2,.3 .27,.67 .37,1.37 .1,.6 .12,1.51 .12,2.71 l .09,1.90 c 0,1.1 .00,1.99 -0.09,2.59 -0.1,.6 -0.19,1.08 -0.49,1.28 -0.2,.3 -0.50,.40 -0.90,.40 -0.3,0 -0.51,-0.08 -0.81,-0.18 -0.2,-0.1 -0.39,-0.29 -0.59,-0.59 l 0,-8.5 c .1,-0.4 .29,-0.7 .59,-1 .3,-0.3 .60,-0.40 .90,-0.40 z",
            },
          },
        ],
      };
    },
    njb = function () {
      return {
        J: "svg",
        Y: {
          fill: "none",
          height: "100%",
          viewBox: "0 0 143 51",
          width: "100%",
        },
        X: [
          {
            J: "path",
            Y: {
              d: "M58.37 41.39H62.79V27.23C62.79 23.03 62.69 18.69 62.43 13.59H62.93L63.69 16.89L68.67 41.39H73.17L78.07 16.89L78.89 13.59H79.37C79.15 18.45 79.03 22.89 79.03 27.23V41.39H83.45V8.79H75.95L73.41 20.81C72.35 25.85 71.51 32.01 71.01 35.19H70.73C70.33 31.95 69.49 25.81 68.41 20.85L65.81 8.79H58.37V41.39Z",
              fill: "white",
            },
          },
          {
            J: "path",
            Y: {
              d: "M91.45 41.73C93.91 41.73 95.83 40.59 97.17 38.13H97.35L97.69 41.39H101.43V17.73H96.47V36.61C95.91 37.67 94.81 38.29 93.73 38.29C92.33 38.29 91.89 37.17 91.89 35.13V17.73H86.93V35.43C86.93 39.49 88.19 41.73 91.45 41.73Z",
              fill: "white",
            },
          },
          {
            J: "path",
            Y: {
              d: "M110.79 41.89C115.15 41.89 117.75 39.83 117.75 35.65C117.75 31.79 115.93 30.39 111.85 27.47C109.67 25.91 108.39 25.09 108.39 22.95C108.39 21.47 109.27 20.61 110.89 20.61C112.69 20.61 113.33 21.81 113.33 25.29L117.45 25.07C117.77 19.57 115.71 17.23 110.97 17.23C106.57 17.23 104.17 19.27 104.17 23.45C104.17 27.25 105.97 28.83 108.93 31.03C111.89 33.23 113.55 34.53 113.55 36.23C113.55 37.75 112.51 38.61 111.01 38.61C109.13 38.61 108.11 36.97 108.29 34.41L104.21 34.49C103.51 39.25 105.89 41.89 110.79 41.89Z",
              fill: "white",
            },
          },
          {
            J: "path",
            Y: {
              d: "M122.5 14.59C124.22 14.59 125.04 13.99 125.04 11.59C125.04 9.33 124.16 8.65 122.5 8.65C120.84 8.65 119.94 9.27 119.94 11.59C119.94 13.99 120.82 14.59 122.5 14.59ZM120.2 41.39H125V17.73H120.2V41.39Z",
              fill: "white",
            },
          },
          {
            J: "path",
            Y: {
              d: "M134.95 41.79C137.31 41.79 138.63 41.49 139.71 40.47C141.31 39.01 141.97 36.63 141.85 33.11L137.41 32.87C137.41 36.87 136.81 38.45 135.03 38.45C133.13 38.45 132.77 36.45 132.77 31.97V27.21C132.77 22.41 133.23 20.51 135.07 20.51C136.67 20.51 137.29 22.01 137.29 26.47L141.65 26.15C141.97 22.93 141.59 20.29 140.09 18.83C139.01 17.77 137.37 17.29 135.15 17.29C129.65 17.29 127.75 20.73 127.75 28.03V31.17C127.75 38.47 129.23 41.79 134.95 41.79Z",
              fill: "white",
            },
          },
          {
            J: "path",
            Y: {
              "clip-rule": "evenodd",
              d: "M24.99 49C29.74 49.00 34.38 47.59 38.32 44.95C42.27 42.32 45.35 38.57 47.17 34.18C48.98 29.80 49.46 24.97 48.53 20.32C47.61 15.66 45.32 11.38 41.97 8.03C38.61 4.67 34.33 2.38 29.68 1.46C25.02 .53 20.20 1.01 15.81 2.82C11.43 4.64 7.68 7.71 5.04 11.66C2.40 15.61 1 20.25 1 25C0.99 28.15 1.61 31.27 2.82 34.18C4.03 37.09 5.79 39.74 8.02 41.97C10.25 44.19 12.89 45.96 15.81 47.17C18.72 48.37 21.84 49 24.99 49ZM24.99 12.36C27.49 12.36 29.94 13.10 32.02 14.48C34.10 15.87 35.72 17.84 36.68 20.15C37.64 22.46 37.89 25.01 37.41 27.46C36.92 29.91 35.72 32.17 33.95 33.94C32.18 35.70 29.93 36.91 27.48 37.40C25.02 37.89 22.48 37.64 20.17 36.68C17.86 35.72 15.88 34.10 14.50 32.02C13.11 29.94 12.37 27.50 12.37 25C12.37 21.65 13.70 18.44 16.07 16.07C18.43 13.70 21.64 12.37 24.99 12.36ZM24.99 10.43C22.11 10.43 19.29 11.28 16.89 12.88C14.50 14.48 12.63 16.76 11.53 19.42C10.42 22.09 10.13 25.02 10.70 27.85C11.26 30.67 12.65 33.27 14.69 35.31C16.73 37.35 19.32 38.73 22.15 39.30C24.98 39.86 27.91 39.57 30.57 38.46C33.23 37.36 35.51 35.49 37.11 33.09C38.71 30.70 39.57 27.88 39.56 25C39.56 23.08 39.19 21.19 38.46 19.42C37.72 17.65 36.65 16.04 35.30 14.69C33.94 13.34 32.34 12.27 30.57 11.53C28.80 10.80 26.90 10.43 24.99 10.43ZM32.63 24.99L20.36 32.09V17.91L32.63 24.99Z",
              fill: "white",
              "fill-rule": "evenodd",
            },
          },
        ],
      };
    },
    F4 = function (a) {
      var b = E4;
      E4 = a;
      a = {};
      return (
        (a[Symbol.dispose] = function () {
          E4 = b;
        }),
        a
      );
    },
    ojb = function (a, b) {
      a.kF || (a.kF = []);
      a.kF.push(b);
    },
    qjb = function (a) {
      var b = E4;
      b &&
        !b.Ja &&
        (ojb(b, function () {
          return void pjb(a);
        }),
        (a.parent = b));
    },
    sjb = function (a) {
      if (a.kF) {
        var b = { stack: [], error: void 0, hasError: !1 };
        try {
          var c;
          g.bb(b, (c = rjb) == null ? void 0 : c());
          for (var d = g.x(a.kF), e = d.next(); !e.done; e = d.next()) {
            var f = e.value;
            f();
          }
          a.kF.length = 0;
        } catch (h) {
          (b.error = h), (b.hasError = !0);
        } finally {
          g.cb(b);
        }
      }
    },
    pjb = function (a) {
      if (!a.Ja) {
        a.Ja = !0;
        var b;
        (b = a[Symbol.dispose]) == null || b.call(a);
        delete a.parent;
        sjb(a);
      }
    },
    ujb = function () {
      var a;
      var b = (a = tjb) != null ? a : (tjb = g.cp(!0));
      return D4(b);
    },
    wjb = function (a) {
      vjb.add(a);
      for (var b = g.x(a), c = b.next(); !c.done; c = b.next()) {
        var d = c.value;
        for (c = [d]; d.parent !== void 0; )
          (d = d.parent), a.has(d) && c.push(d);
        for (; c.length > 0; ) {
          d = c.pop();
          try {
            d.run();
          } finally {
            a.delete(d);
          }
        }
      }
      vjb.delete(a);
    },
    yjb = function () {
      var a;
      g.I(function (b) {
        if (b.j == 1)
          return (a = xjb), (xjb = new Set()), g.G(b, Promise.resolve(), 2);
        wjb(a);
        g.ta(b);
      });
    },
    zjb = function () {
      return Array.from(vjb).map(function (a) {
        return Array.from(a);
      });
    },
    Ajb = function (a) {
      var b = a.component;
      var c = a.debugInstance;
      a = a.wx;
      var d,
        e = (d = b.bu) != null ? d : b.name;
      G4.push({ name: c ? e + " (" + c + ")" : e, J_: !0 });
      b = a();
      G4.pop();
      return b;
    },
    H4 = function (a, b) {
      b = b === void 0 ? {} : b;
      var c = G4.length;
      b.stack && (G4 = [].concat(g.z(b.stack)));
      try {
        return a();
      } catch (d) {
        throw ((a = d), Bjb(a), a !== Cjb && (Djb = G4.slice()), (Cjb = a), a);
      } finally {
        (c = G4.length - c), c > 0 && G4.splice(-c);
      }
    },
    Bjb = function (a) {
      var b = G4;
      if (b.length !== 0 && !a.VE) {
        var c = b
          .slice(-20)
          .reverse()
          .map(function (d) {
            return d.name;
          })
          .join(" > ");
        c = a.message + "\n\nComponent stack: " + c;
        try {
          (a.VE = b.slice()),
            g.dp.a9 &&
              (a.stack && (a.stack = a.stack.replace(a.message, c)),
              (a.message = c));
        } catch (d) {}
      }
    },
    Ejb = function () {
      g.Yo(this);
      if (g.Wo(this))
        for (var a = 0; a < this.pg.length; a++) g.Xo(this.pg[a], this.Gn[a]);
      this.pg.length = this.Zy.length = this.Gn.length = 0;
      this.sj && (this.sj.length = this.Xu.length = 0);
      I4.delete(this);
      xjb.delete(this);
      pjb(this);
    },
    K4 = function (a, b, c) {
      var d, e;
      var f = {
        VE: (e = (d = Djb) == null ? void 0 : d.slice()) != null ? e : [],
        LA: c === void 0 ? 3 : c,
        toa: ljb(),
        Aqa: zjb(),
        pqa: E4,
        Bqa: [].concat(g.z(Fjb.slice(J4)), g.z(Fjb.slice(0, J4))),
        tagName: b,
      };
      return [a, f];
    },
    Gjb = function (a) {
      rjb = ujb;
      var b = E4;
      if (b) {
        var c = G4.slice();
        ojb(b, function () {
          return void H4(
            function () {
              return void a();
            },
            { stack: c }
          );
        });
      }
    },
    Hjb = function (a) {
      var b = g.dp.a8 || !!E4,
        c = {};
      (b === void 0 || b) && qjb(c);
      b = { stack: [], error: void 0, hasError: !1 };
      try {
        g.bb(b, F4(c)), a(c);
      } catch (d) {
        (b.error = d), (b.hasError = !0);
      } finally {
        g.cb(b);
      }
      return function () {
        return void pjb(c);
      };
    },
    Kjb = function (a, b) {
      Ijb++;
      var c = Object.create(Jjb);
      c.VE = G4.slice();
      c.RT = a;
      b && (c.bu = b);
      qjb(c);
      if ((a = g.To) && a.isAsync) {
        var d;
        (d = g.dp.handleError) == null ||
          d.call.apply(
            d,
            [g.dp].concat(
              g.z(
                K4(
                  Error(
                    "Sync reactions can not be called inside a reaction call."
                  )
                )
              )
            )
          );
      }
      c.run();
    },
    Ljb = function (a) {
      var b = { stack: [], error: void 0, hasError: !1 };
      try {
        return g.bb(b, D4(null)), a();
      } catch (c) {
        (b.error = c), (b.hasError = !0);
      } finally {
        g.cb(b);
      }
    },
    Ojb = function (a, b, c) {
      if (
        Object.hasOwnProperty.call(Mjb, a) &&
        ((a = Mjb[a]),
        Object.hasOwnProperty.call(a, b) && ((a = a[b]), a instanceof Array))
      ) {
        for (var d = null, e = !1, f = 0, h = a.length; f < h; ++f) {
          var l = a[f],
            m = l.Qi;
          if (!m) return l.Cd;
          d === null && (d = {});
          m = Object.hasOwnProperty.call(d, m) ? d[m] : (d[m] = c(m));
          if (m === l.Zi) return l.Cd;
          m == null && (e = !0);
        }
        if (e) return null;
      }
      b = Njb[b];
      return typeof b === "number" ? b : null;
    },
    Qjb = function (a, b) {
      b = Ojb(a.toLowerCase(), b, function () {
        var d;
        (d = g.dp.handleError) == null ||
          d.call.apply(
            d,
            [g.dp].concat(
              g.z(
                K4(
                  Error(
                    "Contingent attribute/property lookups are not supported."
                  ),
                  a.toLowerCase()
                )
              )
            )
          );
      });
      if (b === null) return null;
      var c;
      return (c = Pjb[b]) != null ? c : null;
    },
    Rjb = function (a, b, c) {
      if (c === null || c === void 0) return c;
      a = Qjb(a, b);
      return a === null ? c : a(b, c);
    },
    Tjb = function (a) {
      function b(d, e, f) {
        g.Kl(d, Sjb);
        for (var h = Math.min(e.length - f, d.length), l = 0; l < h; l++)
          if (d[l] !== Sjb(e[f + l])) return !1;
        return !0;
      }
      a = String(a);
      for (var c = 0; (c = a.indexOf("<", c)) != -1; ) {
        if (b("\x3c/script", a, c) || b("\x3c!--", a, c)) return "zSoyz";
        c += 1;
      }
      return a;
    },
    Sjb = function (a) {
      return "A" <= a && a <= "Z" ? a.toLowerCase() : a;
    },
    Ujb = function () {},
    L4 = function (a, b) {
      for (; a.length > b; ) a.pop();
    },
    Vjb = function (a) {
      a = Array(a);
      L4(a, 0);
      return a;
    },
    Wjb = function (a, b, c) {
      if (c == null) a.removeAttribute(b);
      else {
        var d =
          b.lastIndexOf("xml:", 0) === 0
            ? "http://www.w3.org/XML/1998/namespace"
            : b.lastIndexOf("xlink:", 0) === 0
            ? "http://www.w3.org/1999/xlink"
            : null;
        d ? a.setAttributeNS(d, b, c) : a.setAttribute(b, c);
      }
    },
    Yjb = function (a, b, c) {
      a = a.style;
      if (typeof c === "string") a.cssText = c;
      else {
        a.cssText = "";
        for (var d in c)
          if (Xjb.call(c, d)) {
            b = a;
            var e = d,
              f = c[d];
            e.indexOf("-") >= 0 ? b.setProperty(e, f) : (b[e] = f);
          }
      }
    },
    Zjb = function (a, b, c) {
      var d = typeof c;
      d === "object" || d === "function" ? (a[b] = c) : Wjb(a, b, c);
    },
    $jb = function () {
      var a = new Ujb();
      a.__default = Zjb;
      a.style = Yjb;
      return a;
    },
    akb = function (a, b, c, d) {
      (d[b] || d.__default)(a, b, c);
    },
    bkb = function (a) {
      this.created = [];
      this.j = [];
      this.node = a;
    },
    ckb = function (a, b) {
      this.j = null;
      this.B = a;
      this.key = b;
      this.text = void 0;
    },
    dkb = function (a, b, c) {
      b = new ckb(b, c);
      return (a.__incrementalDOMData = b);
    },
    M4 = function (a, b) {
      if (a.__incrementalDOMData) return a.__incrementalDOMData;
      var c = a.nodeType === 1 ? a.localName : a.nodeName,
        d = a.nodeType === 1 ? a.getAttribute("key") : null;
      b = dkb(a, c, a.nodeType === 1 ? d || b : null);
      if (a.nodeType === 1 && ((a = a.attributes), (c = a.length))) {
        d = b.j || (b.j = Vjb(c * 2));
        for (var e = 0, f = 0; e < c; e += 1, f += 2) {
          var h = a[e],
            l = h.value;
          d[f] = h.name;
          d[f + 1] = l;
        }
      }
      return b;
    },
    ekb = function (a, b, c, d, e) {
      return b == c && d == e;
    },
    Q4 = function (a) {
      for (var b = N4, c = O4(); c !== a; ) {
        var d = c.nextSibling;
        b.removeChild(c);
        P4.j.push(c);
        c = d;
      }
    },
    O4 = function () {
      return R4 ? R4.nextSibling : N4.firstChild;
    },
    fkb = function (a, b) {
      R4 = O4();
      var c;
      a: {
        if ((c = R4)) {
          do {
            var d = c,
              e = a,
              f = b,
              h = M4(d, f);
            if (S4(d, e, h.B, f, h.key)) break a;
          } while (b && (c = c.nextSibling));
        }
        c = null;
      }
      c ||
        (a === "#text"
          ? ((a = T4.createTextNode("")), dkb(a, "#text", null))
          : ((c = T4),
            (d = N4),
            typeof a === "function"
              ? (c = new a())
              : (c = (d =
                  a === "svg"
                    ? "http://www.w3.org/2000/svg"
                    : a === "math"
                    ? "http://www.w3.org/1998/Math/MathML"
                    : d == null || M4(d).B === "foreignObject"
                    ? null
                    : d.namespaceURI)
                  ? c.createElementNS(d, a)
                  : c.createElement(a)),
            dkb(c, a, b),
            (a = c)),
        P4.created.push(a),
        (c = a));
      a = c;
      if (a !== R4) {
        if (U4.indexOf(a) >= 0)
          for (b = N4, c = a.nextSibling, d = R4; d !== null && d !== a; )
            (e = d.nextSibling), b.insertBefore(d, c), (d = e);
        else N4.insertBefore(a, R4);
        R4 = a;
      }
    },
    gkb = function (a, b) {
      fkb(a, b);
      N4 = R4;
      R4 = null;
      return N4;
    },
    ikb = function (a, b) {
      b = b === void 0 ? {} : b;
      var c = b.matches === void 0 ? ekb : b.matches;
      return function (d, e, f) {
        var h = P4,
          l = T4,
          m = U4,
          n = V4,
          p = R4,
          q = N4,
          r = S4;
        T4 = d.ownerDocument;
        P4 = new bkb(d);
        S4 = c;
        V4 = [];
        R4 = null;
        var t = (N4 = d.parentNode),
          u,
          y = hkb.call(d);
        if (
          (u =
            y.nodeType === 11 || y.nodeType === 9 ? y.activeElement : null) &&
          d.contains(u)
        ) {
          for (y = []; u !== t; )
            y.push(u), (u = u.parentNode || (t ? u.host : null));
          t = y;
        } else t = [];
        U4 = t;
        try {
          return a(d, e, f);
        } finally {
          (d = P4),
            W4 && d.j.length > 0 && W4(d.j),
            (T4 = l),
            (P4 = h),
            (S4 = r),
            (V4 = n),
            (R4 = p),
            (N4 = q),
            (U4 = m);
        }
      };
    },
    jkb = function (a, b, c, d) {
      X4.push(akb);
      X4.push(a);
      X4.push(b);
      X4.push(c);
      X4.push(d);
    },
    kkb = function (a) {
      fkb("#text", null);
      var b = R4;
      var c = M4(b);
      if (c.text !== a) {
        c = c.text = a;
        for (var d = 1; d < arguments.length; d += 1) c = (0, arguments[d])(c);
        b.data !== c && (b.data = c);
      }
    },
    Y4 = function (a, b, c) {
      if (c === !1 && lkb.has(b)) Wjb(a, b, null);
      else if (
        b !== "idomKey" &&
        b !== "skip" &&
        b !== "skipchildren" &&
        b !== "children" &&
        b !== "el"
      ) {
        if (b.startsWith("on"))
          if (b[2] === ":") {
            if (c === void 0 || c === null) {
              var d;
              (d = g.dp.handleError) == null ||
                d.call.apply(
                  d,
                  [g.dp].concat(
                    g.z(
                      K4(
                        Error(
                          "The " +
                            b +
                            " attribute was set to undefined or null. This is not supported and may lead to unexpected behavior if an event handler is being conditionally set."
                        ),
                        a.tagName
                      )
                    )
                  )
                );
              a[b] = void 0;
              return;
            }
            if (typeof c !== "object" || c === null)
              throw Error(
                "Expected " +
                  b +
                  " to be an EventHandler but its type was: " +
                  (typeof c +
                    ". Event handlers must be created using useHandler.")
              );
            if (typeof c.oZ !== "function")
              throw Error(
                "Expected the event handler for " +
                  b +
                  " to have a 'getFn' property but its keys were: " +
                  (Object.keys(c) +
                    ". Event handlers must be created using useHandler.")
              );
            var e = c.oZ(0),
              f = b.slice(3);
            a["on" + f] === void 0
              ? (a.addEventListener(f, e),
                Gjb(function () {
                  return void a.removeEventListener(f, e);
                }))
              : (a["on" + f] = e);
          } else {
            mkb(a, b, c);
            return;
          }
        else if (b.startsWith("data-") && typeof c === "string")
          try {
            c = Tjb(c);
          } catch (h) {
            c = "zSoyz";
          }
        typeof c !== "function" || a._disposeEffects != null
          ? (g.dp.Z8 && (c = Rjb(a.tagName, b, c)),
            b === "style"
              ? nkb(a, b, c)
              : b.startsWith("prop:")
              ? (a[b.slice(5)] = c)
              : mkb(a, b, c))
          : (a._signalProps || (a._signalProps = []),
            a._signalValues || (a._signalValues = []),
            a._signalProps.push(b));
      }
    },
    okb = function (a, b, c) {
      c = (c === void 0 ? {} : c).J_;
      if (b == null ? 0 : b.el) {
        var d = b.el;
        if (typeof d === "function") d(a);
        else {
          var e;
          (e = d.Qca) == null || e.call(d, a);
          a._disposeRef ||
            ((a._disposeRef = function () {
              var f;
              (f = d.Hda) == null || f.call(d);
              delete a._disposeRef;
            }),
            c &&
              Gjb(function () {
                var f;
                return void ((f = a._disposeRef) == null ? void 0 : f.call(a));
              }));
        }
      }
    },
    Z4 = function (a, b) {
      var c = g.Ca.apply(2, arguments),
        d;
      b = (d = b) != null ? d : {};
      d = {};
      return (d.type = a), (d.props = b), (d.children = c), (d[pkb] = !0), d;
    },
    qkb = function (a) {
      return a.children;
    },
    rkb = function () {
      var a = !1;
      $4 !== a5 && (($4 = a5), (a = !0));
      var b = {};
      return (
        (b[Symbol.dispose] = function () {
          a && ($4 = Z4);
        }),
        b
      );
    },
    skb = function () {
      var a = !1;
      $4 !== Z4 && (($4 = Z4), (a = !0));
      var b = {};
      return (
        (b[Symbol.dispose] = function () {
          a && ($4 = a5);
        }),
        b
      );
    },
    tkb = function (a) {
      return (
        "(" +
        typeof a +
        ") " +
        (a != null && typeof a === "object" ? a.constructor.name : typeof a) +
        " " +
        a
      );
    },
    b5 = function () {
      return document.createTextNode("");
    },
    c5 = function (a) {
      a = document.createTextNode(String(a));
      a._isSignalTextNode = !0;
      return a;
    },
    d5 = function (a) {
      a = typeof a;
      return a === "string" || a === "number" || a === "boolean";
    },
    e5 = function (a) {
      return a instanceof g.If || g.Mf(a) || !1;
    },
    f5 = function (a, b) {
      a.parentElement && a.parentElement.replaceChild(b, a);
      return b;
    },
    g5 = function (a, b) {
      var c = a[0].parentElement;
      if (c)
        if (a[0].previousSibling || a[a.length - 1].nextSibling) {
          c.insertBefore(b, a[0]);
          for (var d = a.length - 1; d >= 0; d--) c.removeChild(a[d]);
        } else (c.textContent = ""), c.appendChild(b);
      return b;
    },
    ukb = function (a, b) {
      if (a[0].parentElement)
        for (
          var c = a[0].parentElement,
            d = b.length,
            e = a.length,
            f = d,
            h = 0,
            l = 0,
            m = a[e - 1].nextSibling,
            n = null;
          h < e || l < f;

        )
          if (a[h] === b[l]) h++, l++;
          else {
            for (; a[e - 1] === b[f - 1]; ) e--, f--;
            if (e === h)
              for (
                var p = f < d ? (l ? b[l - 1].nextSibling : b[f - l]) : m;
                l < f;

              )
                c.insertBefore(b[l++], p);
            else if (f === l)
              for (; h < e; )
                (p = a[h]), (n && n.has(p)) || c.removeChild(p), h++;
            else if (a[h] === b[f - 1] && b[l] === a[e - 1])
              (p = a[--e].nextSibling),
                c.insertBefore(b[l++], a[h++].nextSibling),
                c.insertBefore(b[--f], p),
                (a[e] = b[f]);
            else {
              if (!n) for (n = new Map(), p = l; p < f; ) n.set(b[p], p++);
              p = n.get(a[h]);
              if (p == null) c.removeChild(a[h]), h++;
              else if (l < p && p < f) {
                for (
                  var q = h, r = 1, t = void 0;
                  ++q < e && q < f && (t = n.get(a[q])) != null && t === p + r;

                )
                  r++;
                if (r > p - l)
                  for (q = a[h]; l < p; ) c.insertBefore(b[l++], q);
                else c.replaceChild(b[l++], a[h++]);
              } else h++;
            }
          }
      return b;
    },
    h5 = function (a) {
      return g.Sa(a) ? "nodeType" in a : !1;
    },
    ykb = function (a) {
      var b = vkb();
      Kjb(function () {
        var c = b[0];
        a: {
          var d = { stack: [], error: void 0, hasError: !1 };
          try {
            g.bb(d, rkb());
            var e = a();
            break a;
          } catch (f) {
            (d.error = f), (d.hasError = !0);
          } finally {
            g.cb(d);
          }
          e = void 0;
        }
        c = wkb(c, e, b);
        Array.isArray(c) || (b.PA = [c]);
        b[0] = c;
        for (c = 0; c < xkb.length; ) {
          e = xkb[c];
          if (!e) throw Error("Error executing syncOnInit function.");
          try {
            e();
          } catch (f) {}
          c++;
        }
        xkb.length = 0;
      }, "p9csj");
      return b;
    },
    wkb = function (a, b, c) {
      for (; typeof b === "function"; ) b = b();
      if (a == null)
        return b == null
          ? b5()
          : d5(b)
          ? c5(b)
          : e5(b)
          ? c5(b.toString())
          : h5(b)
          ? b
          : b.length === 0
          ? b5()
          : zkb(b, c);
      if (h5(a)) {
        if (b == null) return f5(a, b5());
        if (d5(b)) return Akb(a, b);
        if (e5(b)) return Akb(a, b.toString());
        if (h5(b)) return f5(a, b);
        if (b.length === 0) return f5(a, b5());
        b = zkb(b, c);
        ukb([a], c.PA);
        return b;
      }
      a = i5(a);
      if (b == null) return g5(a, b5());
      if (d5(b)) return g5(a, c5(b));
      if (e5(b)) return g5(a, c5(b.toString()));
      if (h5(b)) return ukb(a, [b])[0];
      if (b.length === 0) return g5(a, b5());
      b = zkb(b, c);
      ukb(a, c.PA);
      return b;
    },
    Akb = function (a, b) {
      a.nodeType === Node.TEXT_NODE
        ? a.textContent !== String(b) && (a.textContent = String(b))
        : (a = f5(a, c5(b)));
      return a;
    },
    i5 = function (a, b, c) {
      return Bkb(a, b != null ? b : [], c === void 0 ? !1 : c);
    },
    zkb = function (a, b) {
      var c = i5(a, void 0, !0);
      if (c.length === 0) return b5();
      b.PA = c;
      return a;
    },
    Bkb = function (a, b, c, d, e) {
      b = b === void 0 ? [] : b;
      c = c === void 0 ? !1 : c;
      e = e === void 0 ? -1 : e;
      if (a == null) return b;
      if (h5(b) && b.nodeType === Node.ELEMENT_NODE && b.tagName === "SCRIPT")
        a: {
          c = a;
          if (Array.isArray(c)) {
            if (c.length > 1)
              throw Error(
                "Script tags can contain at most 1 child. Got " +
                  c.length +
                  ": [" +
                  c.map(tkb).join(", ") +
                  "]"
              );
            c = c[0];
          }
          if (c != null) {
            if (!(c instanceof g.$f)) {
              var f, h;
              if (
                (f = window) == null
                  ? 0
                  : (h = f.trustedTypes) == null
                  ? 0
                  : h.isScript(c)
              )
                throw Error(
                  "Do not use a TrustedScript instance in a script tag directly. Use a SafeScript instead."
                );
              if (String(c).trim().length === 0) break a;
              throw Error(
                "Script tags must only contain SafeScript or LegacyScript instances. Got: " +
                  tkb(c)
              );
            }
            b.textContent = g.ag(c);
            g.bg(b);
          }
        }
      else {
        d5(a) && ((a = c5(a)), d && c && (d[e] = a));
        e5(a) && ((a = c5(a.toString())), d && c && (d[e] = a));
        if (h5(a)) return Ckb(b, a);
        if (Array.isArray(a)) {
          for (f = 0; f < a.length; f++) Bkb(a[f], b, c, a, f);
          return b;
        }
        if (typeof a === "function")
          return (a = ykb(a)[0]), d && c && (d[e] = a), Ckb(b, a);
        if (a != null && a[pkb]) {
          a: {
            f = { stack: [], error: void 0, hasError: !1 };
            try {
              g.bb(f, rkb());
              var l = $4.apply(null, [a.type, a.props].concat(g.z(a.children)));
              break a;
            } catch (n) {
              (f.error = n), (f.hasError = !0);
            } finally {
              g.cb(f);
            }
            l = void 0;
          }
          return Bkb(l, b, c);
        }
        var m;
        (m = g.dp.handleError) == null ||
          m.call.apply(
            m,
            [g.dp].concat(
              g.z(K4(Error("Unrecognized JSXResult type in flattening.")))
            )
          );
        return b;
      }
    },
    vkb = function () {
      var a = [];
      a.PA = [];
      return a;
    },
    Ckb = function (a, b) {
      Array.isArray(a) ? a.push(b) : a.appendChild(b);
      return a;
    },
    Dkb = function (a, b) {
      a: {
        var c = { stack: [], error: void 0, hasError: !1 };
        try {
          var d, e;
          var f =
            (e = (d = a.bu) != null ? d : a.name) != null ? e : "[component]";
          g.bb(c, rkb());
          g.bb(c, g.ep("render", f));
          var h = a(b);
          break a;
        } catch (l) {
          (c.error = l), (c.hasError = !0);
        } finally {
          g.cb(c);
        }
        h = void 0;
      }
      return h;
    },
    j5 = function (a) {
      this.props = a;
      this.C = !1;
    },
    Ekb = function () {
      throw Error(
        "Reactive components are not allowed to use useState or other memoization based hooks."
      );
    },
    Fkb = function (a) {
      j5.call(this, a);
      var b = this;
      this.jB = [];
      this.D = 0;
      Hjb(function (c) {
        b.fK = c;
        Gjb(function () {
          var d = b.el;
          if (!b.C && d) {
            b.C = !0;
            try {
              b.cK();
            } catch (h) {
              var e, f;
              (f = g.dp.handleError) == null ||
                f.call.apply(
                  f,
                  [g.dp].concat(g.z(K4(h, (e = b.B) == null ? void 0 : e.mE)))
                );
            }
            k5.cK(b);
            b.el = null;
            d.__instance && delete d.__instance;
          }
        });
      });
    },
    Hkb = function (a, b, c) {
      a._signalProps != null &&
        a._disposeEffects == null &&
        (g.dp.x8 && c !== void 0 && !c
          ? Gkb(a, b)
          : (a._disposeEffects = Hjb(function () {
              return void Gkb(a, b);
            })));
    },
    Gkb = function (a, b) {
      Kjb(function () {
        for (
          var c = a._signalProps, d = a._signalValues, e = 0;
          e < c.length;
          e++
        ) {
          var f = c[e],
            h = b[f]();
          d[e] !== h && ((d[e] = h), Y4(a, f, h));
        }
      }, "hTG0Sd");
    },
    Ikb = function (a, b) {
      a._disposeEffects = Hjb(function () {
        a._isSignalTextNode = !0;
        Kjb(function () {
          var c = b();
          c == null && (c = "");
          var d = typeof c;
          if (d === "object" || d === "function")
            throw Error(
              "Invalid text node kind: " +
                d +
                ". Text nodes must be primitives like numbers, strings, or null, but an object type was passed. See go/cow-errors#invalid-text-nodes for more information."
            );
          a.textContent = String(c);
        }, "FpvqPc");
      });
    },
    Jkb = function (a, b) {
      var c = g.Ca.apply(2, arguments);
      b != null || (b = {});
      if (a === qkb) return c;
      if (typeof a === "function")
        return Ajb({
          component: a,
          debugInstance: b.debugInstance,
          wx: function () {
            c.length > 0 && (b.children = c.length === 1 ? c[0] : c);
            return Dkb(a, b);
          },
        });
      var d = document.createElement(a),
        e;
      for (e in b) Y4(d, e, b[e]);
      Hkb(d, b, !1);
      i5(c, d);
      okb(d, b, { J_: !0 });
      return d;
    },
    Lkb = function (a) {
      Kkb.push(a) === 1 &&
        requestAnimationFrame(function () {
          setTimeout(function () {
            var b = [].concat(g.z(Kkb));
            Kkb = [];
            b = g.x(b);
            for (var c = b.next(); !c.done; c = b.next()) {
              c = c.value;
              try {
                for (var d = 0; d < c.length; d++);
              } catch (e) {
                (d = c = void 0),
                  (d = (c = g.dp).handleError) == null ||
                    d.call.apply(d, [c].concat(g.z(K4(e))));
              }
            }
          });
        });
    },
    l5 = function (a, b) {
      return Jkb.apply(null, [a, b].concat(g.z(g.Ca.apply(2, arguments))));
    },
    Mkb = function (a) {
      var b = null,
        c;
      return {
        value: null,
        Qca: function (d) {
          if (c && d !== c) {
            var e;
            (e = b) == null || e();
            c._disposeRef = void 0;
          }
          c = d;
          b = a(d) || null;
        },
        Hda: function () {
          var d;
          (d = b) == null || d();
        },
      };
    },
    Nkb = function (a, b) {
      return (
        !a ||
        a.length !== (b == null ? void 0 : b.length) ||
        a.some(function (c, d) {
          return c !== b[d];
        })
      );
    },
    Okb = function (a, b) {
      var c = Ekb();
      if (c == null)
        throw Error(
          "A valid hook context was not found. Please ensure you are using components from TSX and not invoking the component function directly"
        );
      var d = c.D++;
      c.jB || (c.jB = []);
      var e = c.jB;
      e[d] || (e[d] = { key: "onChange", host: c });
      if ("onChange" !== e[d].key) {
        var f, h;
        a =
          ((f = c.B) == null ? void 0 : f.name) ||
          ((h = c.j) == null ? void 0 : h.name);
        throw Error(
          "Hook called out of order in " +
            a +
            ". Hooks must be invoked unconditionally and in the same order every render. This could happen if you conditionally invoke a hook."
        );
      }
      c = e[d];
      f = Ekb();
      Nkb(c.xi, b) &&
        ((c.xi = b), (c.P1 = a), f.gA || (f.gA = []), f.gA.push(c));
    },
    Pkb = function (a) {
      var b = g.To;
      if (b && b.isAsync) {
        var c;
        (c = g.dp.handleError) == null ||
          c.call.apply(
            c,
            [g.dp].concat(
              g.z(K4(Error("onInit cannot be called inside a reaction.")))
            )
          );
      }
      var d = E4,
        e = G4.slice();
      Promise.resolve().then(function () {
        d &&
          !d.Ja &&
          H4(
            function () {
              var f = { stack: [], error: void 0, hasError: !1 };
              try {
                g.bb(f, F4(d)), a();
              } catch (h) {
                (f.error = h), (f.hasError = !0);
              } finally {
                g.cb(f);
              }
            },
            { stack: e }
          );
      });
    },
    m5 = function (a, b) {
      Okb(function () {
        return Ljb(a);
      }, b);
    },
    Qkb = function (a) {
      Pkb(function () {
        Ljb(a);
      });
    },
    Skb = function (a) {
      var b = [].concat(g.z(a));
      a.length = 0;
      a = g.x(b);
      for (b = a.next(); !b.done; b = a.next()) {
        b = b.value;
        Rkb(b);
        var c = b.P1;
        b.P1 = null;
        if ((c = c == null ? void 0 : c())) b.O1 = c;
      }
    },
    Rkb = function (a) {
      var b = a.O1;
      a.O1 = null;
      b == null || b();
    },
    n5 = function () {
      var a = Mkb(function (b) {
        (a.value && a.value === b) || (a.HX = a.HX ? a.HX + 1 : 1);
        a.value = b;
        var c = (function () {
          var d = { stack: [], error: void 0, hasError: !1 };
          try {
            g.bb(d, D4(null));
          } catch (e) {
            (d.error = e), (d.hasError = !0);
          } finally {
            g.cb(d);
          }
        })();
        return function () {
          c == null || c();
          a.value = null;
        };
      });
      return a;
    },
    Tkb = function (a) {
      var b = E4,
        c = G4.slice();
      return {
        oZ: function () {
          return function (d) {
            b.Ja ||
              (H4(
                function () {
                  var e = { stack: [], error: void 0, hasError: !1 };
                  try {
                    return g.bb(e, D4(null)), a(d);
                  } catch (f) {
                    (e.error = f), (e.hasError = !0);
                  } finally {
                    g.cb(e);
                  }
                },
                { stack: c }
              ) !== !0 &&
                d.stopPropagation());
          };
        },
      };
    },
    Ukb = function (a) {
      if (typeof a.children === "function") return a.children(), null;
      a = g.x(a.children);
      for (var b = a.next(); !b.done; b = a.next()) (b = b.value), b();
      return null;
    },
    Wkb = function (a, b, c) {
      c = c === void 0 ? !1 : c;
      H4(function () {
        return Vkb(a, b, c);
      });
    },
    Vkb = function (a, b, c) {
      c = ((c === void 0 ? 0 : c) ? Xkb : Ykb)(a, function () {
        o5(b);
      });
      return c === null ? a : c;
    },
    o5 = function (a) {
      if (a !== void 0 && a !== null)
        if (Array.isArray(a)) {
          var b = g.x(a);
          for (a = b.next(); !a.done; a = b.next()) o5(a.value);
        } else if (a instanceof g.If) kkb(a.toString());
        else if (h5(a)) {
          if (O4() !== a)
            throw Error(
              "Encountered a real dom node where a vdom node was expected. Real dom nodes should only come from the reactive renderer, and they can't be passed in JSX expressions directly. Tag name: " +
                a.tagName
            );
          R4 = O4();
        } else {
          g.Mf(a) && (a = a.toString());
          var c = typeof a;
          if (c === "boolean" || c === "number" || c === "string") kkb(a);
          else if (typeof a === "function") {
            b = N4;
            var d = O4();
            if (!d || !d._isSignalTextNode) {
              var e = b.insertBefore,
                f = document.createTextNode("");
              Ikb(f, a);
              e.call(b, f, d);
            }
            R4 = O4();
          } else {
            if (typeof a.type === "string") {
              a.Jr || gkb(a.type, a.props.idomKey);
              d = N4;
              for (e in a.props)
                a.props[e] !== Zkb &&
                  ((f = a.props[e]), (c = V4), c.push(e), c.push(f));
              e = g.dp.attributes;
              e = e === void 0 ? $kb : e;
              f = N4;
              var h = M4(f);
              c = e;
              e = V4;
              h = h.j || (h.j = Vjb(e.length));
              for (var l = !h.length || !1, m = 0; m < e.length; m += 2) {
                var n = e[m];
                if (l) h[m] = n;
                else if (h[m] !== n) break;
                var p = e[m + 1];
                if (l || h[m + 1] !== p) (h[m + 1] = p), jkb(f, n, p, c);
              }
              if (m < e.length || m < h.length) {
                for (m = l = m; m < h.length; m += 2) p5[h[m]] = h[m + 1];
                for (m = l; m < e.length; m += 2)
                  (l = e[m]),
                    (n = e[m + 1]),
                    p5[l] !== n && jkb(f, l, n, c),
                    (h[m] = l),
                    (h[m + 1] = n),
                    delete p5[l];
                L4(h, e.length);
                for (b in p5) jkb(f, b, void 0, c), delete p5[b];
              }
              b = alb;
              alb = f = X4.length;
              for (c = b; c < f; c += 5)
                (0, X4[c])(X4[c + 1], X4[c + 2], X4[c + 3], X4[c + 4]);
              alb = b;
              L4(X4, b);
              L4(e, 0);
              Hkb(d, a.props);
              (a.props.skip || a.props.skipchildren) && N4.hasChildNodes()
                ? (R4 = N4.lastChild)
                : o5(a.children);
              Q4(null);
              R4 = N4;
              N4 = N4.parentNode;
              a.Jr && (a.Jr = !1);
              okb(d, a.props);
              return d;
            }
            if (a.type === qkb) o5(a.children);
            else if (!blb(a)) {
              b = a;
              try {
                clb(b);
              } catch (q) {
                (a = q),
                  (f = g.dp.handleError) == null ||
                    f.call.apply(
                      f,
                      [g.dp].concat(
                        g.z(K4(a, (d = b.type) == null ? void 0 : d.mE))
                      )
                    );
              }
              b.Jr && (Q4(null), (R4 = N4), (N4 = N4.parentNode), (b.Jr = !1));
            }
          }
        }
    },
    elb = function (a, b) {
      dlb(a) ? ((b = new Fkb(b)), (b.j = a)) : (b = new a(b));
      b.B = a;
      b.PO = { uS: b.state, H_: !1 };
      return b;
    },
    clb = function (a) {
      var b = a.type,
        c = b.mE;
      if (b === Ukb) (a.props.children = a.children), b(a.props);
      else {
        a.children.length > 0 && (a.props.children = a.children);
        var d;
        (d = a.props).idomKey || (d.idomKey = b);
        if (c) {
          var e = gkb(c, a.props.idomKey);
          a.Jr = !0;
          var f = e.__instance;
        }
        f ||
          ((f = elb(b, a.props)),
          (f.props = null),
          e && ((e.__instance = f), (f.el = e)));
        var h;
        c = ((h = f.PO) != null ? h : { uS: f.state, H_: !1 }).uS;
        f.PO = void 0;
        b.N9 && (c = b.N9(a.props, c));
        f.props = a.props;
        f.state = c;
        h = function () {
          var l = f;
          k5.hY(l);
          var m = l.wC(l.props);
          m
            ? (l.props.idomKey && (m.props.idomKey = l.props.idomKey), (l = m))
            : (l = void 0);
          if ((m = l))
            if (((m.Jr = a.Jr), (l = o5(m)), (a.Jr = m.Jr), !b.mE))
              if (l)
                (b.mE = l.tagName.toLowerCase()),
                  (l.__instance = f),
                  (f.el = l);
              else {
                var n;
                if ((n = f.jB) == null ? 0 : n.length) {
                  var p;
                  (p = g.dp.handleError) == null ||
                    p.call.apply(
                      p,
                      [g.dp].concat(
                        g.z(
                          K4(
                            Error(
                              "A component used hooks, but failed to return a host element"
                            )
                          )
                        )
                      )
                    );
                }
              }
          f.bK();
          k5.bK(f);
        };
        (c = f.j)
          ? Ajb({ component: c, debugInstance: f.props.debugInstance, wx: h })
          : h();
      }
    },
    blb = function (a) {
      var b = a.type;
      if (!dlb(b) || b === Ukb) return !1;
      a.props.children = a.children.length > 1 ? a.children : a.children[0];
      var c,
        d = (c = a.props.idomKey) != null ? c : a.type,
        e;
      if (O4() && ((e = O4()[flb]) == null ? void 0 : e.key) === d) {
        b = O4();
        c = b[flb];
        if (!c)
          throw Error(
            "Reactive data has been lost on node. Tag name: " + b.tagName
          );
        var f;
        (f = c.pra) == null || f.call(c, a.props);
        glb(c);
        return !0;
      }
      if (hlb.has(b.name))
        throw Error(
          b.name +
            " can not be called from a IDOM component. See go/cow-errors#control-flow-component-called-from-Idom-Component"
        );
      a.props.Cqa = !0;
      (f = Ajb({
        component: a.type,
        debugInstance: a.props.debugInstance,
        wx: function () {
          return Dkb(a.type, a.props);
        },
      })) && ilb(f);
      return !0;
    },
    jlb = function (a) {
      for (var b = 0; b < i5(a).length; b++) R4 = O4();
    },
    glb = function (a) {
      var b = klb();
      if (b) jlb(b);
      else for (var c = 0; c < a.jqa; c++) (b = klb()) ? jlb(b) : (R4 = O4());
    },
    klb = function () {
      var a;
      return (a = O4()[flb]) == null ? void 0 : a.gra;
    },
    ilb = function (a) {
      a = a != null && a.PA ? a.PA : a;
      a = Array.isArray(a) ? a : [a];
      a = g.x(a);
      for (var b = a.next(); !b.done; b = a.next())
        N4.insertBefore(b.value, O4()), (R4 = O4());
    },
    dlb = function (a) {
      var b;
      return ((b = a.prototype) == null ? void 0 : b.wC) === void 0;
    },
    llb = function (a) {
      var b = Ekb(),
        c = typeof a === "function" ? a() : a;
      return [
        c,
        function (d) {
          var e = { stack: [], error: void 0, hasError: !1 };
          try {
            if (q5 !== null) {
              var f;
              (f = g.dp.handleError) == null ||
                f.call.apply(
                  f,
                  [g.dp].concat(
                    g.z(K4(Error("Can't set state during rendering")))
                  )
                );
            }
            c = typeof d === "function" ? d(c) : d;
            b.PO = { uS: b.state, H_: !0 };
            g.bb(e, F4(b.fK));
            g.bb(e, skb());
            if (b.el) {
              var h;
              d = {};
              var l =
                ((d.props = b.props),
                (d.type = b.B),
                (d.children = (h = b.props.children) != null ? h : []),
                (d[pkb] = !0),
                d);
              try {
                Wkb(b.el, l, !0);
              } catch (p) {
                var m, n;
                (n = g.dp.handleError) == null ||
                  n.call.apply(
                    n,
                    [g.dp].concat(g.z(K4(p, (m = b.B) == null ? void 0 : m.mE)))
                  );
              }
            }
          } catch (p) {
            (e.error = p), (e.hasError = !0);
          } finally {
            g.cb(e);
          }
        },
      ];
    },
    plb = function (a) {
      var b = mlb;
      nlb.push(a);
      olb ||
        (b(function () {
          for (var c = g.x(nlb), d = c.next(); !d.done; d = c.next())
            (d = d.value), d();
          nlb.length = 0;
          olb = !1;
        }),
        (olb = !0));
    },
    mlb = function (a) {
      Promise.resolve().then(a);
    },
    qlb = function (a) {
      a = g.x(llb(a));
      var b = a.next().value,
        c = a.next().value,
        d = !1;
      Qkb(function () {
        return function () {
          d = !0;
        };
      });
      return [
        b,
        function (e) {
          plb(function () {
            (d && !g.Kr("cow_prevent_state_setter_after_cleanup_killswitch")) ||
              c(e);
          });
        },
      ];
    },
    rlb = function (a) {
      function b() {
        var l = a.K.md() ? "Hide more shorts" : "Hide more videos";
        e(l);
      }
      var c = g.x(llb("Hide more videos")),
        d = c.next().value,
        e = c.next().value;
      m5(
        function () {
          var l = a.K;
          l.addEventListener("videodatachange", b);
          return function () {
            l.removeEventListener("videodatachange", b);
          };
        },
        [a.K]
      );
      var f = new g.Hx(g.ay()).element,
        h = n5();
      Qkb(function () {
        h.value.appendChild(f);
      });
      return l5(
        "button",
        {
          class: "ytp-button ytp-collapse",
          "aria-label": d,
          "on:click": Tkb(function () {
            a.action && a.action();
          }),
        },
        l5("div", { class: "ytp-collapse-icon", el: h, skip: !0 })
      );
    },
    slb = function (a) {
      function b() {
        var h = a.K.md() ? "More shorts" : "More videos";
        e(h);
      }
      var c = g.x(qlb("More videos")),
        d = c.next().value,
        e = c.next().value,
        f = n5();
      m5(
        function () {
          a.ZM && (a.ZM.value = f.value);
        },
        [a.ZM]
      );
      m5(
        function () {
          var h = a.K;
          h.addEventListener("videodatachange", b);
          return function () {
            h.removeEventListener("videodatachange", b);
          };
        },
        [a.K]
      );
      return l5(
        "button",
        {
          el: f,
          class: "ytp-button ytp-expand",
          "on:click": Tkb(function () {
            a.action && a.action();
          }),
        },
        d
      );
    },
    tlb = function (a, b) {
      var c = { value: null };
      m5(
        function () {
          var d = new g.E1(a);
          d.j = !0;
          c.value = d;
          return function () {
            var e;
            (e = c.value) == null || e.dispose();
          };
        },
        [a, b]
      );
      return c;
    },
    ulb = function (a) {
      function b(y) {
        a: {
          var A = g.x([1, 16, 32]);
          for (var C = A.next(); !C.done; C = A.next())
            if (g.T(y, C.value)) {
              A = !0;
              break a;
            }
          A = !1;
        }
        if (!A) {
          var F;
          (F = p.value) != null &&
            F.suggestionData.length > 0 &&
            h(g.T(y, 4) && !g.T(y, 2) && !g.T(y, 1024));
        }
      }
      function c() {
        b(a.K.getPlayerStateObject());
      }
      function d(y) {
        b(y.state);
      }
      var e = g.x(qlb(!1)),
        f = e.next().value,
        h = e.next().value,
        l = g.x(qlb(!1));
      e = l.next().value;
      var m = l.next().value,
        n = n5(),
        p = tlb(a.K, a.We),
        q = n5();
      l = { value: null };
      var r = { value: null };
      m5(
        function () {
          var y = a.K,
            A = y.md() ? 157212 : 172777;
          r.value = new g.O();
          y.createClientVe(q.value, r.value, A);
          y.addEventListener("presentingplayerstatechange", d);
          y.addEventListener("videodatachange", c);
          A = y.V().controlsType === "0";
          g.Ap(y.getRootNode(), "ytp-pause-overlay-controls-hidden", A);
          return function () {
            y.removeEventListener("videodatachange", c);
            y.removeEventListener("presentingplayerstatechange", d);
            var C;
            (C = r.value) == null || C.dispose();
          };
        },
        [a.K]
      );
      m5(
        function () {
          var y;
          (y = p.value) == null || y.Ga(n.value);
        },
        [p]
      );
      var t = a.K;
      if (f)
        if ((g.Ap(t.getRootNode(), "ytp-expand-pause-overlay", !e), e))
          l.value.focus();
        else {
          var u = p.value;
          g.F1(u);
          u.show();
          q.value.focus();
        }
      q.value && t.logVisibility(q.value, f && !e);
      return l5(
        "ytp-pause-overlay",
        { el: q, class: "ytp-pause-overlay", "aria-hidden": !f },
        l5(rlb, {
          K: a.K,
          We: a.We,
          action: function () {
            m(!0);
          },
        }),
        l5(slb, {
          K: a.K,
          We: a.We,
          action: function () {
            m(!1);
          },
          ZM: l,
        }),
        l5("div", { el: n, skip: !0 })
      );
    },
    vlb = function (a) {
      g.S.call(this, { J: "div", S: "ytp-related-on-error-overlay" });
      var b = this;
      this.api = a;
      this.G = this.B = 0;
      this.D = new g.dG(this);
      this.j = [];
      this.suggestionData = [];
      this.columns = this.containerWidth = 0;
      this.title = new g.S({
        J: "h2",
        S: "ytp-related-title",
        ya: "{{title}}",
      });
      this.previous = new g.S({
        J: "button",
        Ka: ["ytp-button", "ytp-previous"],
        Y: { "aria-label": "Show previous suggested videos" },
        X: [g.Rx()],
      });
      this.Z = new g.D1(function (f) {
        b.suggestions.element.scrollLeft = -f;
      });
      this.C = this.scrollPosition = 0;
      this.L = !0;
      this.next = new g.S({
        J: "button",
        Ka: ["ytp-button", "ytp-next"],
        Y: { "aria-label": "Show more suggested videos" },
        X: [g.Sx()],
      });
      g.P(this, this.D);
      a = a.V();
      this.api.N("embeds_web_enable_pause_overlay_rounding") &&
        g.wp(this.element, "ytp-error-overlay-round-corners");
      this.W = a.D;
      g.P(this, this.title);
      this.title.Ga(this.element);
      this.suggestions = new g.S({ J: "div", S: "ytp-suggestions" });
      g.P(this, this.suggestions);
      this.suggestions.Ga(this.element);
      g.P(this, this.previous);
      this.previous.Ga(this.element);
      this.previous.listen("click", this.t5, this);
      g.P(this, this.Z);
      for (var c = { nB: 0 }; c.nB < 16; c = { nB: c.nB }, c.nB++) {
        var d = new g.S({
          J: "a",
          S: "ytp-suggestion-link",
          Y: { href: "{{link}}", target: a.Z, "aria-label": "{{aria_label}}" },
          X: [
            {
              J: "div",
              S: "ytp-suggestion-image",
              X: [
                {
                  J: "div",
                  Y: { "data-is-live": "{{is_live}}" },
                  S: "ytp-suggestion-duration",
                  ya: "{{duration}}",
                },
              ],
            },
            {
              J: "div",
              S: "ytp-suggestion-title",
              Y: { title: "{{hover_title}}" },
              ya: "{{title}}",
            },
            { J: "div", S: "ytp-suggestion-author", ya: "{{views_or_author}}" },
          ],
        });
        g.P(this, d);
        d.Ga(this.suggestions.element);
        var e = d.Da("ytp-suggestion-link");
        g.zm(e, "transitionDelay", c.nB / 20 + "s");
        this.D.T(
          e,
          "click",
          (function (f) {
            return function (h) {
              var l = f.nB,
                m = b.suggestionData[l],
                n = m.sessionData;
              g.NP(b.api.V()) &&
              b.api.N(
                "web_player_log_click_before_generating_ve_conversion_params"
              )
                ? (b.api.logClick(b.j[l].element),
                  (l = m.Yl()),
                  (m = {}),
                  g.ENa(b.api, m),
                  (l = g.aj(l, m)),
                  g.kT(l, b.api, h))
                : g.jT(h, b.api, b.W, n || void 0) &&
                  b.api.Jp(m.videoId, n, m.playlistId);
            };
          })(c)
        );
        this.j.push(d);
      }
      g.P(this, this.next);
      this.next.Ga(this.element);
      this.next.listen("click", this.s5, this);
      this.D.T(this.api, "videodatachange", this.onVideoDataChange);
      this.resize(this.api.qb().getPlayerSize());
      this.onVideoDataChange();
      this.show();
    },
    wlb = function (a, b) {
      if (
        a.api
          .V()
          .N("web_player_log_click_before_generating_ve_conversion_params")
      )
        for (
          var c = Math.floor(-a.scrollPosition / (a.C + a.B)),
            d = Math.min(c + a.columns, a.suggestionData.length) - 1;
          c <= d;
          c++
        )
          a.api.logVisibility(a.j[c].element, b);
    },
    xlb = function (a) {
      a.next.element.style.bottom = a.G + "px";
      a.previous.element.style.bottom = a.G + "px";
      var b = a.scrollPosition,
        c = a.containerWidth - a.suggestionData.length * (a.C + a.B);
      g.Ap(a.element, "ytp-scroll-min", b >= 0);
      g.Ap(a.element, "ytp-scroll-max", b <= c);
    },
    ylb = function (a) {
      for (var b = 0; b < a.suggestionData.length; b++) {
        var c = a.suggestionData[b],
          d = a.j[b],
          e = c.shortViewCount ? c.shortViewCount : c.author,
          f = c.Yl(),
          h = a.api.V();
        if (
          g.NP(h) &&
          !h.N("web_player_log_click_before_generating_ve_conversion_params")
        ) {
          var l = {};
          g.dS(a.api, "addEmbedsConversionTrackingParams", [l]);
          f = g.aj(f, l);
        }
        d.element.style.display = "";
        l = d.Da("ytp-suggestion-title");
        g.Fp.test(c.title)
          ? (l.dir = "rtl")
          : g.xcb.test(c.title) && (l.dir = "ltr");
        l = d.Da("ytp-suggestion-author");
        g.Fp.test(e) ? (l.dir = "rtl") : g.xcb.test(e) && (l.dir = "ltr");
        d.update({
          views_or_author: e,
          duration: c.isLivePlayback
            ? "Live"
            : c.lengthSeconds
            ? g.Xy(c.lengthSeconds)
            : "",
          link: f,
          hover_title: c.title,
          title: c.title,
          aria_label: c.ariaLabel || null,
          is_live: c.isLivePlayback,
        });
        e = c.Ah();
        d.Da("ytp-suggestion-image").style.backgroundImage = e
          ? "url(" + e + ")"
          : "";
        h.N("web_player_log_click_before_generating_ve_conversion_params") &&
          (a.api.createServerVe(d.element, d),
          (c = (c = c.sessionData) && c.itct) &&
            a.api.setTrackingParams(d.element, c));
      }
      for (; b < a.j.length; b++) a.j[b].element.style.display = "none";
      xlb(a);
    },
    r5 = function (a) {
      g.IY.call(this, a);
      var b = this;
      this.j = null;
      var c = a.V(),
        d = { target: c.Z },
        e = ["ytp-small-redirect"];
      c.C
        ? e.push("no-link")
        : ((c = g.pQ(c)),
          (d.href = c),
          (d["aria-label"] = "Visit YouTube to search for more videos"));
      var f = new g.S({
        J: "a",
        Ka: e,
        Y: d,
        X: [
          {
            J: "svg",
            Y: {
              fill: "#fff",
              height: "100%",
              viewBox: "0 0 24 24",
              width: "100%",
            },
            X: [
              { J: "path", Y: { d: "M0 0h24v24H0V0z", fill: "none" } },
              {
                J: "path",
                Y: {
                  d: "M21.58 7.19c-.23-.86-.91-1.54-1.77-1.77C18.25 5 12 5 12 5s-6.25 0-7.81.42c-.86.23-1.54.91-1.77 1.77C2 8.75 2 12 2 12s0 3.25.42 4.81c.23.86.91 1.54 1.77 1.77C5.75 19 12 19 12 19s6.25 0 7.81-.42c.86-.23 1.54-.91 1.77-1.77C22 15.25 22 12 22 12s0-3.25-.42-4.81zM10 15V9l5.2 3-5.2 3z",
                },
              },
            ],
          },
        ],
      });
      f.Ga(this.element);
      a.createClientVe(f.element, this, 178053);
      this.T(f.element, "click", function (h) {
        zlb(b, h, f.element);
      });
      g.P(this, f);
      a.V().C ||
        ((this.j = new vlb(a)), this.j.Ga(this.element), g.P(this, this.j));
      this.T(a, "videodatachange", function () {
        b.show();
      });
      this.resize(this.api.qb().getPlayerSize());
    },
    zlb = function (a, b, c) {
      b.preventDefault();
      a.api.logClick(c);
      b = c.getAttribute("href");
      c = {};
      g.dS(a.api, "addEmbedsConversionTrackingParams", [c]);
      b = g.Mg(c) ? b : g.aj(b, c);
      g.Yf(window, b);
    },
    Alb = function (a, b) {
      a.Da("ytp-error-content").style.paddingTop = "0px";
      var c = a.Da("ytp-error-content"),
        d = c.clientHeight;
      a.j && a.j.resize(b, b.height - d);
      c.style.paddingTop =
        (b.height - (a.j ? a.j.element.clientHeight : 0)) / 2 - d / 2 + "px";
    },
    Dlb = function (a, b) {
      var c = a.api.V(),
        d;
      b.reason &&
        (Blb(b.reason) ? (d = g.Px(b.reason)) : (d = g.JY(g.Ox(b.reason))),
        a.Gd(d, "content"));
      var e;
      b.subreason &&
        (Blb(b.subreason)
          ? (e = g.Px(b.subreason))
          : (e = g.JY(g.Ox(b.subreason))),
        a.Gd(e, "subreason"));
      if (b.proceedButton && b.proceedButton.buttonRenderer) {
        d = a.Da("ytp-error-content-wrap-subreason");
        b = b.proceedButton.buttonRenderer;
        var f = g.kh("A");
        if (
          b.text &&
          b.text.simpleText &&
          ((e = b.text.simpleText),
          (f.textContent = e),
          !Clb(d, e) && (!c.C || c.embedsErrorLinks))
        ) {
          var h;
          c =
            (h = g.Q(b == null ? void 0 : b.navigationEndpoint, g.hy)) == null
              ? void 0
              : h.url;
          var l;
          h =
            (l = g.Q(b == null ? void 0 : b.navigationEndpoint, g.hy)) == null
              ? void 0
              : l.target;
          c &&
            (f.setAttribute("href", c),
            a.api.createClientVe(f, a, 178424),
            a.T(f, "click", function (m) {
              zlb(a, m, f);
            }));
          h && f.setAttribute("target", h);
          l = g.kh("DIV");
          l.appendChild(f);
          d.appendChild(l);
        }
      }
    },
    Blb = function (a) {
      if (a.runs)
        for (var b = 0; b < a.runs.length; b++)
          if (a.runs[b].navigationEndpoint) return !0;
      return !1;
    },
    Clb = function (a, b) {
      a = g.bh("A", a);
      for (var c = 0; c < a.length; c++) if (a[c].textContent === b) return !0;
      return !1;
    },
    Elb = function (a, b) {
      g.S.call(this, {
        J: "a",
        Ka: ["ytp-impression-link"],
        Y: {
          target: "{{target}}",
          href: "{{url}}",
          "aria-label": "Watch on YouTube",
        },
        X: [
          {
            J: "div",
            S: "ytp-impression-link-content",
            Y: { "aria-hidden": "true" },
            X: [
              { J: "div", S: "ytp-impression-link-text", ya: "Watch on" },
              { J: "div", S: "ytp-impression-link-logo", ya: "{{logoSvg}}" },
            ],
          },
        ],
      });
      this.api = a;
      this.We = b;
      this.updateValue("target", a.V().Z);
      this.T(a, "videodatachange", this.onVideoDataChange);
      this.T(this.api, "presentingplayerstatechange", this.Gi);
      this.T(this.api, "videoplayerreset", this.UV);
      this.T(this.element, "click", this.onClick);
      this.onVideoDataChange();
      this.UV();
    },
    Flb = function (a) {
      var b = {};
      g.dS(a.api, "addEmbedsConversionTrackingParams", [b]);
      a = a.api.getVideoUrl();
      return (a = g.aj(a, b));
    },
    s5 = function (a) {
      g.S.call(this, {
        J: "div",
        Ka: ["ytp-mobile-a11y-hidden-seek-button"],
        X: [
          {
            J: "button",
            Ka: ["ytp-mobile-a11y-hidden-seek-button-rewind", "ytp-button"],
            Y: { "aria-label": "Rewind 10 seconds", "aria-hidden": "false" },
          },
          {
            J: "button",
            Ka: ["ytp-mobile-a11y-hidden-seek-button-forward", "ytp-button"],
            Y: {
              "aria-label": "Fast forward 10 seconds",
              "aria-hidden": "false",
            },
          },
        ],
      });
      this.api = a;
      this.j = this.Da("ytp-mobile-a11y-hidden-seek-button-rewind");
      this.forwardButton = this.Da(
        "ytp-mobile-a11y-hidden-seek-button-forward"
      );
      this.api.createClientVe(this.j, this, 141902);
      this.api.createClientVe(this.forwardButton, this, 141903);
      this.T(this.api, "presentingplayerstatechange", this.Gi);
      this.T(this.j, "click", this.B);
      this.T(this.forwardButton, "click", this.C);
      this.Gi();
    },
    t5 = function (a) {
      g.S.call(this, {
        J: "div",
        S: "ytp-muted-autoplay-endscreen-overlay",
        X: [
          {
            J: "div",
            S: "ytp-muted-autoplay-end-panel",
            X: [
              {
                J: "button",
                Ka: ["ytp-muted-autoplay-end-text", "ytp-button"],
                ya: "{{text}}",
              },
            ],
          },
        ],
      });
      this.api = a;
      this.D = this.Da("ytp-muted-autoplay-end-panel");
      this.B = !1;
      this.api.createClientVe(this.element, this, 52428);
      this.T(this.api, "presentingplayerstatechange", this.C);
      this.T(a, "onMutedAutoplayStarts", this.onMutedAutoplayStarts);
      this.listen("click", this.onClick);
      this.hide();
    },
    u5 = function (a) {
      var b = a.V();
      g.S.call(this, {
        J: "a",
        Ka: ["ytp-watermark", "yt-uix-sessionlink"],
        Y: {
          target: b.Z,
          href: "{{url}}",
          "aria-label": g.NE("Watch on $WEBSITE", { WEBSITE: g.cQ(b) }),
          "data-sessionlink": "feature=player-watermark",
        },
        ya: "{{logoSvg}}",
      });
      this.api = a;
      this.j = null;
      this.B = !1;
      this.state = a.getPlayerStateObject();
      this.T(a, "videodatachange", this.onVideoDataChange);
      this.T(a, "presentingplayerstatechange", this.onStateChange);
      this.T(a, "appresize", this.pc);
      this.onVideoDataChange();
      this.zd(this.state);
      this.pc(a.qb().getPlayerSize());
    },
    Glb = function (a) {
      var b = a.api.getVideoData(),
        c = a.api.V();
      c =
        c.Md &&
        !g.T(a.state, 2) &&
        !g.WR(a.api.getVideoData(1)) &&
        !(
          c.N("embeds_enable_emc3ds_woyt_counterfactual") &&
          a.api.getPlayerStateObject().isCued()
        );
      b.mutedAutoplay || g.Kx(a, c);
      a.api.logVisibility(a.element, c);
    },
    Jlb = function (a) {
      g.S.call(this, {
        J: "div",
        S: "ytp-muted-autoplay-overlay",
        X: [
          {
            J: "div",
            S: "ytp-muted-autoplay-bottom-buttons",
            X: [
              {
                J: "button",
                Ka: ["ytp-muted-autoplay-equalizer", "ytp-button"],
                Y: { "aria-label": "Muted Playback Indicator" },
                X: [
                  {
                    J: "div",
                    Ka: ["ytp-muted-autoplay-equalizer-icon"],
                    X: [
                      {
                        J: "svg",
                        Y: {
                          height: "100%",
                          version: "1.1",
                          viewBox: "-4 -4 24 24",
                          width: "100%",
                        },
                        X: [
                          {
                            J: "g",
                            Y: { fill: "#fff" },
                            X: [
                              {
                                J: "rect",
                                S: "ytp-equalizer-bar-left",
                                Y: { height: "9", width: "4", x: "1", y: "7" },
                              },
                              {
                                J: "rect",
                                S: "ytp-equalizer-bar-middle",
                                Y: { height: "14", width: "4", x: "6", y: "2" },
                              },
                              {
                                J: "rect",
                                S: "ytp-equalizer-bar-right",
                                Y: {
                                  height: "12",
                                  width: "4",
                                  x: "11",
                                  y: "4",
                                },
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      });
      var b = this;
      this.api = a;
      this.bottomButtons = this.Da("ytp-muted-autoplay-bottom-buttons");
      this.C = new g.op(this.P$, 4e3, this);
      this.B = !1;
      a.createClientVe(this.element, this, 39306);
      this.T(a, "presentingplayerstatechange", this.iO);
      this.T(a, "onMutedAutoplayStarts", function () {
        Hlb(b);
        b.iO();
        Ilb(b);
        b.B = !1;
      });
      this.T(a, "onAutoplayBlocked", this.onAutoplayBlocked);
      this.listen("click", this.onClick);
      this.T(a, "onMutedAutoplayEnds", this.onMutedAutoplayEnds);
      this.hide();
      a.isMutedByEmbedsMutedAutoplay() && (Hlb(this), this.iO(), Ilb(this));
      g.P(this, this.C);
    },
    Ilb = function (a) {
      a.Fb && a.j && (a.j.show(), a.C.start());
    },
    Hlb = function (a) {
      a.watermark ||
        ((a.watermark = new u5(a.api)),
        g.P(a, a.watermark),
        a.watermark.Ga(a.bottomButtons, 0),
        g.Ap(a.watermark.element, "ytp-muted-autoplay-watermark", !0),
        (a.j = new g.Ay(a.watermark, 0, !0, 100)),
        g.P(a, a.j));
    },
    v5 = function (a) {
      g.S.call(this, {
        J: "div",
        S: "ytp-pause-overlay",
        Y: { tabIndex: "-1" },
      });
      var b = this;
      this.api = a;
      this.C = new g.dG(this);
      this.D = new g.Ay(
        this,
        1e3,
        !1,
        100,
        function () {
          b.j.j = !1;
        },
        function () {
          b.j.j = !0;
        }
      );
      this.B = !1;
      this.expandButton = new g.S({
        J: "button",
        Ka: ["ytp-button", "ytp-expand"],
        ya: this.api.md() ? "More shorts" : "More videos",
      });
      a.V().controlsType === "0" &&
        g.wp(a.getRootNode(), "ytp-pause-overlay-controls-hidden");
      this.api.N("embeds_web_enable_pause_overlay_rounding") &&
        g.wp(this.element, "ytp-pause-overlay-round-corners");
      g.P(this, this.C);
      g.P(this, this.D);
      var c = new g.S({
        J: "button",
        Ka: ["ytp-button", "ytp-collapse"],
        Y: {
          "aria-label": this.api.md() ? "Hide more shorts" : "Hide more videos",
        },
        X: [{ J: "div", S: "ytp-collapse-icon", X: [g.ay()] }],
      });
      g.P(this, c);
      c.Ga(this.element);
      c.listen("click", this.G, this);
      g.P(this, this.expandButton);
      this.expandButton.Ga(this.element);
      this.expandButton.listen("click", this.L, this);
      this.j = new g.E1(a);
      g.P(this, this.j);
      this.j.j = !1;
      this.j.Ga(this.element);
      this.api.md()
        ? this.api.createClientVe(this.element, this, 157212)
        : this.api.createClientVe(this.element, this, 172777);
      this.C.T(this.api, "presentingplayerstatechange", this.Ta);
      this.C.T(this.api, "videodatachange", this.Ta);
      this.hide();
    },
    w5 = function (a) {
      g.S.call(this, {
        J: "div",
        Ka: ["ytp-player-content", "ytp-iv-player-content"],
        X: [
          {
            J: "div",
            S: "ytp-countdown-timer",
            X: [
              {
                J: "svg",
                Y: {
                  height: "100%",
                  version: "1.1",
                  viewBox: "0 0 72 72",
                  width: "100%",
                },
                X: [
                  {
                    J: "circle",
                    S: "ytp-svg-countdown-timer-ring",
                    Y: {
                      cx: "-36",
                      cy: "36",
                      "fill-opacity": "0",
                      r: "33.5",
                      stroke: "#FFFFFF",
                      "stroke-dasharray": "211",
                      "stroke-dashoffset": "-211",
                      "stroke-width": "4",
                      transform: "rotate(-90)",
                    },
                  },
                  {
                    J: "circle",
                    S: "ytp-svg-countdown-timer-background",
                    Y: {
                      cx: "-36",
                      cy: "36",
                      "fill-opacity": "0",
                      r: "33.5",
                      stroke: "#FFFFFF",
                      "stroke-opacity": "0.3",
                      "stroke-width": "4",
                      transform: "rotate(-90)",
                    },
                  },
                ],
              },
              { J: "span", S: "ytp-countdown-timer-time", ya: "{{duration}}" },
            ],
          },
        ],
      });
      this.api = a;
      this.L = this.Da("ytp-svg-countdown-timer-ring");
      this.j = null;
      this.D = this.C = 0;
      this.B = !1;
      this.G = 0;
      this.api.createClientVe(this.element, this, 159628);
    },
    Llb = function (a) {
      a.j ||
        ((a.C = 5e3),
        (a.D = (0, g.Tt)()),
        (a.j = new g.np(function () {
          Klb(a);
        }, null)),
        Klb(a));
    },
    Klb = function (a) {
      if (!a.B) {
        var b = Math.min((0, g.Tt)() - a.D, a.C);
        var c = a.C - b;
        b = a.C === 0 ? 0 : Math.max(c / a.C, 0);
        c = Math.round(c / 1e3);
        a.L.setAttribute("stroke-dashoffset", "" + -211 * (b + 1));
        a.updateValue("duration", c);
        b <= 0 && a.j ? x5(a) : a.j && a.j.start();
      }
    },
    x5 = function (a) {
      a.j && (a.j.dispose(), (a.j = null), (a.B = !1));
    },
    Nlb = function (a) {
      g.qY.call(this, a);
      this.K = a;
      this.j = new g.dG(this);
      this.B = null;
      this.U = !1;
      this.countdownTimer = null;
      this.Z = !1;
      Mlb(this);
      g.P(this, this.j);
      this.load();
    },
    Plb = function (a) {
      var b = g.Iab(a.K);
      b !== a.Z &&
        ((a.Z = b),
        a.G && (a.G.dispose(), (a.G = null)),
        a.C && (a.C.dispose(), (a.C = null)),
        a.D && (a.D.dispose(), (a.D = null)),
        a.B && (a.B.stop(), a.B.dispose(), (a.B = null)),
        b &&
          ((b = g.hS(a.K)),
          a.K.md() &&
            ((a.D = new g.S({
              J: "div",
              S: "ytp-pause-overlay-backdrop",
              Y: { tabIndex: "-1" },
            })),
            g.P(a, a.D),
            g.wS(a.K, a.D.element, 4),
            (a.B = new g.Ay(a.D, 1e3, !1, 100)),
            g.P(a, a.B),
            a.D.hide()),
          (a.G = new g.S({
            J: "div",
            S: "ytp-pause-overlay-container",
            Y: { tabIndex: "-1" },
          })),
          g.P(a, a.G),
          a.K.N("embeds_web_enable_keto_pause_overlay")
            ? Wkb(a.G.element, l5(ulb, { K: a.K, We: b }))
            : ((a.C = new v5(a.K, b)), g.P(a, a.C), a.C.Ga(a.G.element)),
          g.wS(a.K, a.G.element, 4),
          Olb(a, a.K.getPlayerStateObject())));
    },
    Olb = function (a, b) {
      a.B &&
        ((!g.T(b, 4) && !g.T(b, 2)) || g.T(b, 1024) ? a.B.hide() : a.B.show());
    },
    Mlb = function (a) {
      var b = a.K;
      a = !!b.md();
      g.Ap(b.getRootNode(), "ytp-shorts-mode", a);
      if ((b = b.getVideoData())) b.C4 = a;
    },
    y5 = function (a, b) {
      var c = a.K.V();
      a = {
        adSource: "EMBEDS_AD_SOURCE_YOUTUBE",
        breakType:
          a.K.getCurrentTime() === 0
            ? "EMBEDS_AD_BREAK_TYPE_PRE_ROLL"
            : a.K.getPlayerState() === 0
            ? "EMBEDS_AD_BREAK_TYPE_POST_ROLL"
            : "EMBEDS_AD_BREAK_TYPE_MID_ROLL",
        embedUrl: g.Yfa(a.K.V().loaderUrl),
        eventType: b,
        youtubeHost: g.Vi(a.K.V().Ea) || "",
      };
      a.embeddedPlayerMode = c.Fa;
      g.Bt("embedsAdEvent", a);
    },
    Ijb = 0,
    Qlb = 0;
  var E4 = null;
  var rjb;
  var tjb;
  var I4 = new Set(),
    xjb = new Set(),
    vjb = new Set();
  g.Qla = function () {
    var a = I4;
    I4 = new Set();
    wjb(a);
    yjb();
  };
  var Fjb = [],
    J4 = 0;
  var Rlb = Symbol("idom");
  var G4 = [],
    Cjb,
    Djb;
  var z5 = {},
    Slb = Object.assign(
      {},
      { Ppa: !0 },
      g.bp,
      ((z5.pg = void 0),
      (z5.pR = !1),
      (z5.RT = null),
      (z5.JP = !0),
      (z5.XE = !1),
      (z5[Symbol.dispose] = Ejb),
      (z5.VE = void 0),
      (z5.bu = "[reaction]"),
      (z5.run = function () {
        var a = { stack: [], error: void 0, hasError: !1 };
        try {
          if (this.RT !== null && !this.Ja) {
            if (g.Vo)
              throw Error(
                "Schedulers cannot synchronously execute effects while scheduling."
              );
            this.Vm = !1;
            if (!this.pR || kjb(this)) {
              this.pR = !0;
              Qlb++;
              sjb(this);
              g.bb(a, F4(this));
              var b = g.Kla(this);
              try {
                var c = { stack: [], error: void 0, hasError: !1 };
                try {
                  g.bb(c, g.ep("reactionRun", this.bu)),
                    H4(this.RT, { stack: this.VE });
                } catch (d) {
                  (c.error = d), (c.hasError = !0);
                } finally {
                  g.cb(c);
                }
              } finally {
                g.Lla(this, b), (Fjb[J4] = this.bu), (J4 = (10 + J4 + 1) % 10);
              }
            }
          }
        } catch (d) {
          (a.error = d), (a.hasError = !0);
        } finally {
          g.cb(a);
        }
      }),
      z5)
    );
  var Jjb = Object.assign({}, Slb, {
    KP: function (a) {
      a.Ja || I4.add(a);
    },
    XE: !1,
  });
  var lkb = new Set(
    "allowfullscreen async autofocus autoplay checked controls default defer disabled formnovalidate hidden ismap itemscope jsshadow jsslot loop multiple muted novalidate open playsinline readonly required reversed scoped seamless selected spellcheck sortable typemustmatch".split(
      " "
    )
  );
  var Njb = {
      align: 1,
      alt: 1,
      "aria-activedescendant": 10,
      "aria-atomic": 1,
      "aria-autocomplete": 1,
      "aria-busy": 1,
      "aria-checked": 1,
      "aria-controls": 10,
      "aria-current": 1,
      "aria-describedby": 10,
      "aria-disabled": 1,
      "aria-dropeffect": 1,
      "aria-expanded": 1,
      "aria-haspopup": 1,
      "aria-hidden": 1,
      "aria-invalid": 1,
      "aria-label": 1,
      "aria-labelledby": 10,
      "aria-level": 1,
      "aria-live": 1,
      "aria-multiline": 1,
      "aria-multiselectable": 1,
      "aria-orientation": 1,
      "aria-owns": 10,
      "aria-posinset": 1,
      "aria-pressed": 1,
      "aria-readonly": 1,
      "aria-relevant": 1,
      "aria-required": 1,
      "aria-selected": 1,
      "aria-setsize": 1,
      "aria-sort": 1,
      "aria-valuemax": 1,
      "aria-valuemin": 1,
      "aria-valuenow": 1,
      "aria-valuetext": 1,
      async: 8,
      autocapitalize: 1,
      autocomplete: 1,
      autocorrect: 1,
      autofocus: 1,
      autoplay: 1,
      bgcolor: 1,
      border: 1,
      cellpadding: 1,
      cellspacing: 1,
      checked: 1,
      cite: 3,
      class: 1,
      color: 1,
      cols: 1,
      colspan: 1,
      contenteditable: 1,
      controls: 1,
      datetime: 1,
      dir: 8,
      disabled: 1,
      download: 1,
      draggable: 1,
      enctype: 1,
      face: 1,
      for: 10,
      formenctype: 1,
      frameborder: 1,
      height: 1,
      hidden: 1,
      href: 4,
      hreflang: 1,
      id: 10,
      ismap: 1,
      itemid: 1,
      itemprop: 1,
      itemref: 1,
      itemscope: 1,
      itemtype: 1,
      label: 1,
      lang: 1,
      list: 10,
      loading: 8,
      loop: 1,
      max: 1,
      maxlength: 1,
      media: 1,
      min: 1,
      minlength: 1,
      multiple: 1,
      muted: 1,
      name: 10,
      nonce: 1,
      open: 1,
      placeholder: 1,
      poster: 3,
      preload: 1,
      rel: 1,
      required: 1,
      reversed: 1,
      role: 1,
      rows: 1,
      rowspan: 1,
      selected: 1,
      shape: 1,
      size: 1,
      sizes: 1,
      slot: 1,
      span: 1,
      spellcheck: 1,
      src: 4,
      srcset: 12,
      start: 1,
      step: 1,
      style: 5,
      summary: 1,
      tabindex: 1,
      target: 8,
      title: 1,
      translate: 1,
      type: 1,
      valign: 1,
      value: 1,
      width: 1,
      wrap: 1,
    },
    Mjb = {
      a: { href: [{ Cd: 3 }] },
      area: { href: [{ Cd: 3 }] },
      audio: { src: [{ Cd: 3 }] },
      button: { formaction: [{ Cd: 3 }], formmethod: [{ Cd: 1 }] },
      form: { action: [{ Cd: 3 }], method: [{ Cd: 1 }] },
      iframe: { srcdoc: [{ Cd: 2 }] },
      img: { src: [{ Cd: 3 }], srcset: [{ Cd: 11 }] },
      input: {
        accept: [{ Cd: 1 }],
        formaction: [{ Cd: 3 }],
        formmethod: [{ Cd: 1 }],
        pattern: [{ Cd: 1 }],
        readonly: [{ Cd: 1 }],
        src: [{ Cd: 3 }],
      },
      link: {
        href: [
          { Cd: 3, Qi: "rel", Zi: "alternate" },
          { Cd: 3, Qi: "rel", Zi: "author" },
          { Cd: 3, Qi: "rel", Zi: "bookmark" },
          { Cd: 3, Qi: "rel", Zi: "canonical" },
          { Cd: 3, Qi: "rel", Zi: "cite" },
          { Cd: 3, Qi: "rel", Zi: "help" },
          { Cd: 3, Qi: "rel", Zi: "icon" },
          { Cd: 3, Qi: "rel", Zi: "license" },
          { Cd: 3, Qi: "rel", Zi: "next" },
          { Cd: 3, Qi: "rel", Zi: "prefetch" },
          { Cd: 3, Qi: "rel", Zi: "dns-prefetch" },
          { Cd: 3, Qi: "rel", Zi: "prerender" },
          { Cd: 3, Qi: "rel", Zi: "preconnect" },
          { Cd: 3, Qi: "rel", Zi: "preload" },
          { Cd: 3, Qi: "rel", Zi: "prev" },
          { Cd: 3, Qi: "rel", Zi: "search" },
          { Cd: 3, Qi: "rel", Zi: "subresource" },
        ],
      },
      script: { defer: [{ Cd: 1 }] },
      source: { src: [{ Cd: 3 }], srcset: [{ Cd: 11 }] },
      textarea: { readonly: [{ Cd: 1 }] },
      video: { src: [{ Cd: 3 }] },
    };
  var Tlb = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i,
    A5 = {},
    Pjb =
      ((A5[1] = null),
      (A5[2] = function (a, b) {
        return b instanceof g.Vf ? g.Xf(b) : g.Qf.toString();
      }),
      (A5[3] = function (a, b) {
        return g.Mf(b)
          ? g.Nf(b)
          : Tlb.test(String(b))
          ? String(b)
          : g.Qf.toString();
      }),
      (A5[4] = function (a, b) {
        return b instanceof g.If ? g.Kf(b) : g.Qf.toString();
      }),
      (A5[5] = function (a, b) {
        return String(b);
      }),
      (A5[7] = null),
      (A5[8] = null),
      (A5[10] = null),
      A5);
  var Zkb = Symbol("ATTR_TAG_VALUE");
  RegExp.prototype.hasOwnProperty("sticky");
  var Xjb = Object.prototype.hasOwnProperty;
  Ujb.prototype = Object.create(null);
  var $kb = $jb();
  var W4 = null;
  var hkb =
    (typeof Node !== "undefined" && Node.prototype.getRootNode) ||
    function () {
      for (var a = this, b = a; a; ) (b = a), (a = a.parentNode);
      return b;
    };
  var P4 = null,
    R4 = null,
    N4 = null,
    T4 = null,
    U4 = [],
    S4 = ekb,
    V4 = [],
    Ykb = (function (a) {
      return ikb(function (b, c, d) {
        N4 = R4 = b;
        R4 = null;
        c(d);
        Q4(null);
        R4 = N4;
        N4 = N4.parentNode;
        return b;
      }, a);
    })(),
    Xkb = (function (a) {
      return ikb(function (b, c, d) {
        var e = { nextSibling: b };
        R4 = e;
        c(d);
        N4 && Q4(b.nextSibling);
        return e === R4 ? null : R4;
      }, a);
    })();
  var X4 = [],
    alb = 0;
  var p5 = new Ujb();
  var Ulb = $jb(),
    mkb = Ulb.__default,
    nkb = Ulb.style;
  var pkb = Symbol("IS_VNODE");
  var a5,
    $4 = Z4;
  var flb = Symbol("reactiveData");
  g.cp(!1);
  var xkb = [];
  var k5 = {
    Mna: function () {},
    lqa: function () {},
    Pna: function () {},
    hY: function () {},
    Nna: function () {},
    N8: function () {},
    bK: function () {},
    cK: function () {},
    O8: function () {},
  };
  j5.prototype.bK = function () {};
  j5.prototype.N8 = function () {};
  j5.prototype.cK = function () {};
  j5.prototype.O8 = function () {};
  var q5 = null;
  g.w(Fkb, j5);
  Fkb.prototype.wC = function (a) {
    var b = q5;
    q5 = this;
    this.D = 0;
    try {
      var c = { stack: [], error: void 0, hasError: !1 };
      try {
        var d,
          e,
          f =
            (e = (d = this.j.bu) != null ? d : this.j.name) != null
              ? e
              : "[component]";
        g.bb(c, D4(g.ucb));
        g.bb(c, F4(this.fK));
        g.bb(c, g.ep("render", f));
        return this.j(a);
      } catch (h) {
        (c.error = h), (c.hasError = !0);
      } finally {
        g.cb(c);
      }
    } finally {
      q5 = b;
    }
  };
  var Kkb = [];
  g.Zo = function () {
    var a =
      g.To === tjb
        ? Error(
            "A Signal Setter was called within onCleanup, which can lead to infinite update loops. See go/cow-errors#signal-write-in-oncleanup for more information."
          )
        : g.To === g.ucb
        ? Error(
            "A Signal Setter was called during rendering, which can lead to consistency issues. See go/cow-errors#signal-write-during-rendering for more information."
          )
        : Error(
            "A Signal Setter was called within a Reaction, which can lead to infinite update loops. See go/cow-errors#signal-write-in-a-reactive-context for more information."
          );
    if (g.dp.faa) throw a;
    var b;
    (b = g.dp.handleError) == null ||
      b.call.apply(b, [g.dp].concat(g.z(K4(a, "", 2))));
  };
  (function () {
    var a = W4;
    W4 = function (b) {
      a == null || a(b);
      Lkb(b);
    };
  })();
  a5 = Jkb;
  (function (a) {
    var b = {},
      c;
    for (c in a)
      (b = { f2: void 0, H0: void 0 }),
        (b.f2 = k5[c]),
        (b.H0 = a[c]),
        (k5[c] = (function (d) {
          return function () {
            var e = g.Ca.apply(0, arguments);
            d.f2.apply(null, g.z(e));
            d.H0.apply(null, g.z(e));
          };
        })(b));
  })({
    hY: function (a) {
      var b = { stack: [], error: void 0, hasError: !1 };
      try {
        g.bb(b, F4(a.fK));
        var c;
        ((c = a.gA) == null ? 0 : c.length) && Skb(a.gA);
      } catch (d) {
        (b.error = d), (b.hasError = !0);
      } finally {
        g.cb(b);
      }
    },
    bK: function (a) {
      var b = { stack: [], error: void 0, hasError: !1 };
      try {
        g.bb(b, F4(a.fK));
        var c;
        ((c = a.gA) == null ? 0 : c.length) && Skb(a.gA);
      } catch (d) {
        (b.error = d), (b.hasError = !0);
      } finally {
        g.cb(b);
      }
    },
    cK: function (a) {
      var b;
      ((b = a.jB) == null ? 0 : b.length) && a.jB.forEach(Rkb);
    },
  });
  a5 = Jkb;
  var hlb = new Set(["For", "If", "Match", "Watch"]),
    Vlb = {},
    Wlb =
      ((Vlb.__default = function () {
        return Y4;
      }),
      (Vlb.style = function () {
        return Y4;
      }),
      Vlb),
    B5;
  for (B5 in Wlb) g.dp.attributes[B5] = Wlb[B5](g.dp.attributes[B5]);
  var nlb = [],
    olb = !1;
  rlb.componentType = Rlb;
  slb.componentType = Rlb;
  ulb.componentType = Rlb;
  g.w(vlb, g.S);
  g.k = vlb.prototype;
  g.k.hide = function () {
    this.L = !0;
    g.S.prototype.hide.call(this);
    wlb(this, !1);
  };
  g.k.show = function () {
    this.L = !1;
    g.S.prototype.show.call(this);
    wlb(this, !0);
  };
  g.k.isHidden = function () {
    return this.L;
  };
  g.k.s5 = function () {
    this.scrollTo(this.scrollPosition - this.containerWidth);
  };
  g.k.t5 = function () {
    this.scrollTo(this.scrollPosition + this.containerWidth);
  };
  g.k.resize = function (a, b) {
    var c = this.api.V(),
      d = 16 / 9,
      e = a.width >= 650,
      f = a.width < 480 || a.height < 290,
      h = Math.min(this.suggestionData.length, this.j.length);
    if (Math.min(a.width, a.height) <= 150 || h === 0 || !c.Bd) this.hide();
    else {
      var l;
      if (e) {
        var m = (l = 28);
        this.B = 16;
      } else this.B = m = l = 8;
      if (f) {
        var n = 6;
        e = 14;
        var p = 12;
        f = 24;
        c = 12;
      } else (n = 8), (e = 18), (p = 16), (f = 36), (c = 16);
      a = a.width - (48 + l + m);
      l = Math.ceil(a / 150);
      l = Math.min(3, l);
      m = a / l - this.B;
      var q = Math.floor(m / d);
      b &&
        q + 100 > b &&
        m > 50 &&
        ((q = Math.max(b, 50 / d)),
        (l = Math.ceil(a / (d * (q - 100) + this.B))),
        (m = a / l - this.B),
        (q = Math.floor(m / d)));
      m < 50 || g.tS(this.api) ? this.hide() : this.show();
      for (b = 0; b < h; b++) {
        d = this.j[b];
        var r = d.Da("ytp-suggestion-image");
        r.style.width = m + "px";
        r.style.height = q + "px";
        d.Da("ytp-suggestion-title").style.width = m + "px";
        d.Da("ytp-suggestion-author").style.width = m + "px";
        d = d.Da("ytp-suggestion-duration");
        d.style.display = d && m < 100 ? "none" : "";
      }
      h = e + n + p + 4;
      this.G = h + c + (q - f) / 2;
      this.suggestions.element.style.height = q + h + "px";
      this.C = m;
      this.containerWidth = a;
      this.columns = l;
      this.scrollPosition = 0;
      this.suggestions.element.scrollLeft = -0;
      xlb(this);
    }
  };
  g.k.onVideoDataChange = function () {
    var a = this.api.getVideoData(),
      b = this.api.V();
    this.W = a.Qf ? !1 : b.D;
    a.suggestions
      ? (this.suggestionData = g.un(a.suggestions, function (c) {
          return c && !c.playlistId;
        }))
      : (this.suggestionData.length = 0);
    ylb(this);
    a.Qf
      ? this.title.update({
          title: g.NE("More videos from $DNI_RELATED_CHANNEL", {
            DNI_RELATED_CHANNEL: a.author,
          }),
        })
      : this.title.update({ title: "More videos on YouTube" });
  };
  g.k.scrollTo = function (a) {
    a = g.vg(
      a,
      this.containerWidth - this.suggestionData.length * (this.C + this.B),
      0
    );
    this.Z.start(this.scrollPosition, a, 1e3);
    this.scrollPosition = a;
    xlb(this);
    wlb(this, !0);
  };
  g.w(r5, g.IY);
  r5.prototype.show = function () {
    g.IY.prototype.show.call(this);
    Alb(this, this.api.qb().getPlayerSize());
  };
  r5.prototype.resize = function (a) {
    g.IY.prototype.resize.call(this, a);
    this.j &&
      (Alb(this, a),
      g.Ap(
        this.element,
        "related-on-error-overlay-visible",
        !this.j.isHidden()
      ));
  };
  r5.prototype.B = function (a) {
    g.IY.prototype.B.call(this, a);
    var b = this.api.getVideoData();
    if (b.yG || b.playerErrorMessageRenderer)
      (a = b.yG)
        ? Dlb(this, a)
        : b.playerErrorMessageRenderer &&
          Dlb(this, b.playerErrorMessageRenderer);
    else {
      var c;
      a.Eo &&
        (b.sx
          ? Blb(b.sx)
            ? (c = g.Px(b.sx))
            : (c = g.JY(g.Ox(b.sx)))
          : (c = g.JY(a.Eo)),
        this.Gd(c, "subreason"));
    }
  };
  g.w(Elb, g.S);
  g.k = Elb.prototype;
  g.k.onVideoDataChange = function () {
    var a = this.api.getVideoData(),
      b = mjb(),
      c = 96714;
    g.YR(a)
      ? ((b = njb()),
        (c = 216165),
        g.wp(this.element, "ytp-music-impression-link"))
      : g.yp(this.element, "ytp-music-impression-link");
    this.api.V().N("embeds_enable_emc3ds_woyt_counterfactual") &&
      g.wp(this.element, "ytp-woyt-emc3ds-cf");
    this.updateValue("logoSvg", b);
    this.api.hasVe(this.element) && this.api.destroyVe(this.element);
    this.api.createClientVe(this.element, this, c);
  };
  g.k.Gi = function () {
    this.api.getPlayerStateObject().isCued() ||
      (this.hide(), this.api.logVisibility(this.element, !1));
  };
  g.k.UV = function () {
    var a = this.api.getVideoData(),
      b = this.api.V(),
      c = this.api.getVideoData().Qf,
      d = b.Md && !b.N("embeds_enable_emc3ds_woyt_counterfactual"),
      e = !b.Bd,
      f = this.We.fh() && !b.N("embeds_enable_emc3ds_woyt_counterfactual");
    b = b.C;
    d || f || c || e || b || this.api.md() || !a.videoId
      ? (this.hide(), this.api.logVisibility(this.element, !1))
      : ((a = Flb(this)), this.updateValue("url", a), this.show());
  };
  g.k.onClick = function (a) {
    this.api.N("web_player_log_click_before_generating_ve_conversion_params") &&
      this.api.logClick(this.element);
    var b = Flb(this);
    g.kT(b, this.api, a);
    this.api.N("web_player_log_click_before_generating_ve_conversion_params") ||
      this.api.logClick(this.element);
  };
  g.k.show = function () {
    this.api.getPlayerStateObject().isCued() &&
      (g.S.prototype.show.call(this),
      this.api.hasVe(this.element) && this.api.logVisibility(this.element, !0));
  };
  g.w(s5, g.S);
  s5.prototype.Gi = function () {
    var a = this.api.getPlayerStateObject();
    !this.api.Eh() || (g.T(a, 2) && g.qS(this.api)) || g.T(a, 64)
      ? (this.api.logVisibility(this.j, !1),
        this.api.logVisibility(this.forwardButton, !1),
        this.hide())
      : (this.show(),
        this.api.logVisibility(this.j, !0),
        this.api.logVisibility(this.forwardButton, !0));
  };
  s5.prototype.B = function () {
    this.api.seekBy(-10 * this.api.getPlaybackRate(), void 0, void 0, 83);
    this.api.logClick(this.j);
  };
  s5.prototype.C = function () {
    this.api.seekBy(10 * this.api.getPlaybackRate(), void 0, void 0, 82);
    this.api.logClick(this.forwardButton);
  };
  g.w(t5, g.S);
  t5.prototype.C = function () {
    var a = this.api.getPlayerStateObject();
    this.api.getVideoData().mutedAutoplay &&
      (g.T(a, 2) && !this.Fb
        ? (this.show(),
          this.j ||
            ((this.j = new g.GY(this.api)),
            g.P(this, this.j),
            this.j.Ga(this.D, 0),
            this.j.show()),
          (a = this.api.getVideoData()),
          this.updateValue("text", a.wX),
          g.Ap(this.element, "ytp-muted-autoplay-show-end-panel", !0),
          this.api.logVisibility(this.element, this.Fb),
          this.api.Ed("onMutedAutoplayEnds"))
        : this.hide());
  };
  t5.prototype.onClick = function () {
    if (!this.B) {
      this.j && (this.j.xa(), (this.j = null));
      g.Ap(this.api.getRootNode(), "ytp-muted-autoplay", !1);
      var a = this.api.getVideoData(),
        b = this.api.getCurrentTime();
      jjb(a);
      this.api.loadVideoById(a.videoId, b);
      this.api.OB();
      this.api.logClick(this.element);
      this.hide();
      this.B = !0;
    }
  };
  t5.prototype.onMutedAutoplayStarts = function () {
    this.B = !1;
    this.j && (this.j.xa(), (this.j = null));
  };
  g.w(u5, g.S);
  g.k = u5.prototype;
  g.k.onStateChange = function (a) {
    this.zd(a.state);
  };
  g.k.zd = function (a) {
    this.state !== a && (this.state = a);
    Glb(this);
  };
  g.k.onVideoDataChange = function () {
    var a = this.api.V();
    a.C && g.wp(this.element, "ytp-no-hover");
    var b = this.api.getVideoData();
    b.videoId && !a.C
      ? ((a = this.api.getVideoUrl(!0, !1, !1, !0)),
        this.updateValue("url", a),
        this.j || (this.j = this.listen("click", this.onClick)))
      : this.j &&
        (this.updateValue("url", null), this.Oc(this.j), (this.j = null));
    a = mjb();
    var c = 76758;
    g.YR(b) && ((a = njb()), (c = 216164));
    this.updateValue("logoSvg", a);
    this.api.hasVe(this.element) && this.api.destroyVe(this.element);
    this.api.createClientVe(this.element, this, c);
    Glb(this);
  };
  g.k.onClick = function (a) {
    this.api.N("web_player_log_click_before_generating_ve_conversion_params") &&
      this.api.logClick(this.element);
    var b = this.api.getVideoUrl(!g.Yy(a), !1, !0, !0);
    if (
      this.api.N("web_player_log_click_before_generating_ve_conversion_params")
    ) {
      var c = {};
      g.dS(this.api, "addEmbedsConversionTrackingParams", [c]);
      b = g.aj(b, c);
    }
    g.kT(b, this.api, a);
    this.api.N("web_player_log_click_before_generating_ve_conversion_params") ||
      this.api.logClick(this.element);
  };
  g.k.pc = function (a) {
    if (((a = a.width < 480) && !this.B) || (!a && this.B)) {
      var b = new g.S(mjb()),
        c = this.Da("ytp-watermark");
      g.Ap(c, "ytp-watermark-small", a);
      g.nh(c);
      b.Ga(c);
      this.B = a;
    }
  };
  g.w(Jlb, g.S);
  g.k = Jlb.prototype;
  g.k.iO = function () {
    var a = this.api.getPlayerStateObject();
    !this.api.getVideoData().mutedAutoplay || g.T(a, 2)
      ? this.hide()
      : this.Fb ||
        (g.S.prototype.show.call(this),
        this.api.logVisibility(this.element, this.Fb));
  };
  g.k.P$ = function () {
    this.j && this.j.hide();
  };
  g.k.onAutoplayBlocked = function () {
    this.hide();
    jjb(this.api.getVideoData());
  };
  g.k.onClick = function () {
    if (!this.B) {
      g.Ap(this.api.getRootNode(), "ytp-muted-autoplay", !1);
      var a = this.api.getVideoData(),
        b = this.api.getCurrentTime();
      jjb(a);
      this.api.loadVideoById(a.videoId, b);
      this.api.OB();
      this.api.logClick(this.element);
      this.api.Ed("onMutedAutoplayEnds");
      this.B = !0;
    }
  };
  g.k.onMutedAutoplayEnds = function () {
    this.watermark && (this.watermark.xa(), (this.watermark = null));
  };
  g.w(v5, g.S);
  v5.prototype.hide = function () {
    g.yp(this.api.getRootNode(), "ytp-expand-pause-overlay");
    g.S.prototype.hide.call(this);
  };
  v5.prototype.G = function () {
    this.B = !0;
    g.yp(this.api.getRootNode(), "ytp-expand-pause-overlay");
    this.api.md() && this.api.logVisibility(this.element, !1);
    this.expandButton.focus();
  };
  v5.prototype.L = function () {
    this.B = !1;
    g.wp(this.api.getRootNode(), "ytp-expand-pause-overlay");
    this.api.md() && this.api.logVisibility(this.element, !0);
    this.focus();
  };
  v5.prototype.Ta = function () {
    var a = this.api.getPlayerStateObject();
    g.T(a, 1) ||
      g.T(a, 16) ||
      g.T(a, 32) ||
      (!g.T(a, 4) || g.T(a, 2) || g.T(a, 1024)
        ? (this.B || this.api.logVisibility(this.element, !1), this.D.hide())
        : this.j.suggestionData.length > 0 &&
          (this.B ||
            (g.wp(this.api.getRootNode(), "ytp-expand-pause-overlay"),
            g.F1(this.j),
            this.j.show(),
            this.api.logVisibility(this.element, !0)),
          this.D.show()));
  };
  g.w(w5, g.S);
  w5.prototype.show = function () {
    g.S.prototype.show.call(this);
    this.api.logVisibility(this.element, !0);
  };
  w5.prototype.xa = function () {
    x5(this);
    g.S.prototype.xa.call(this);
  };
  g.w(Nlb, g.qY);
  g.k = Nlb.prototype;
  g.k.Nn = function () {
    return !1;
  };
  g.k.create = function () {
    var a = this.K.V(),
      b = g.hS(this.K),
      c,
      d = (c = this.K.getVideoData()) == null ? void 0 : c.clientPlaybackNonce;
    d && g.uA({ clientPlaybackNonce: d });
    a.Za && !a.disableOrganicUi && Plb(this);
    var e;
    (this.K.N("embeds_enable_emc3ds_muted_autoplay") &&
      ((e = a.getWebPlayerContextConfig()) == null
        ? 0
        : e.embedsEnableEmc3ds)) ||
      ((this.W = new Jlb(this.K)),
      g.P(this, this.W),
      g.wS(this.K, this.W.element, 4),
      (this.ra = new t5(this.K)),
      g.P(this, this.ra),
      g.wS(this.K, this.ra.element, 4));
    a.Md &&
      ((this.watermark = new u5(this.K)),
      g.P(this, this.watermark),
      g.wS(this.K, this.watermark.element, 8));
    b &&
      !a.disableOrganicUi &&
      ((this.L = new Elb(this.K, b)),
      g.P(this, this.L),
      g.wS(this.K, this.L.element, 8),
      this.K.isMutedByEmbedsMutedAutoplay() &&
        (this.onMutedAutoplayStarts(), this.L.hide()));
    a.B &&
      !a.disableOrganicUi &&
      ((this.qa = new s5(this.K)),
      g.P(this, this.qa),
      g.wS(this.K, this.qa.element, 4));
    this.j.T(this.K, "appresize", this.pc);
    this.j.T(this.K, "presentingplayerstatechange", this.Gi);
    this.j.T(this.K, "videodatachange", this.onVideoDataChange);
    this.j.T(this.K, "videoplayerreset", this.onReset);
    this.j.T(this.K, "onMutedAutoplayStarts", this.onMutedAutoplayStarts);
    this.j.T(this.K, "onAdStart", this.onAdStart);
    this.j.T(this.K, "onAdComplete", this.onAdComplete);
    this.j.T(this.K, "onAdSkip", this.onAdSkip);
    this.j.T(this.K, "onAdStateChange", this.onAdStateChange);
    if ((this.U = g.As(g.WP(a))))
      (this.countdownTimer = new w5(this.K)),
        g.P(this, this.countdownTimer),
        g.wS(this.K, this.countdownTimer.element, 4),
        this.countdownTimer.hide(),
        this.j.T(this.K, g.CE("embeds"), this.onCueRangeEnter),
        this.j.T(this.K, g.DE("embeds"), this.onCueRangeExit);
    this.Ic(this.K.getPlayerStateObject());
    this.player.Og("embed");
    var f, h;
    ((f = this.K.V().getWebPlayerContextConfig()) == null
      ? 0
      : (h = f.embedsHostFlags) == null
      ? 0
      : h.allowOverridingVisitorDataPlayerVars) &&
      (a = g.kr("IDENTITY_MEMENTO")) &&
      this.K.xf("onMementoChange", a);
  };
  g.k.onCueRangeEnter = function (a) {
    a.getId() === "countdown timer" &&
      this.countdownTimer &&
      (this.countdownTimer.show(), Llb(this.countdownTimer));
  };
  g.k.onCueRangeExit = function (a) {
    a.getId() === "countdown timer" &&
      this.countdownTimer &&
      (x5(this.countdownTimer), this.countdownTimer.hide());
  };
  g.k.pc = function () {
    var a = this.K.qb().getPlayerSize();
    this.Gg && this.Gg.resize(a);
  };
  g.k.onReset = function () {
    Mlb(this);
  };
  g.k.Gi = function (a) {
    this.Ic(a.state);
  };
  g.k.Ic = function (a) {
    g.T(a, 128)
      ? (this.Gg ||
          ((this.Gg = new r5(this.K)),
          g.P(this, this.Gg),
          g.wS(this.K, this.Gg.element, 4)),
        this.Gg.B(a.Zg),
        this.Gg.show(),
        g.wp(this.K.getRootNode(), "ytp-embed-error"))
      : this.Gg &&
        (this.Gg.dispose(),
        (this.Gg = null),
        g.yp(this.K.getRootNode(), "ytp-embed-error"));
    if (this.countdownTimer && this.countdownTimer.j)
      if (g.T(a, 64)) this.countdownTimer.hide(), x5(this.countdownTimer);
      else if (a.isPaused()) {
        var b = this.countdownTimer;
        b.B || ((b.B = !0), (b.G = (0, g.Tt)()));
      } else
        a.isPlaying() &&
          this.countdownTimer.B &&
          ((b = this.countdownTimer),
          b.B && ((b.D += (0, g.Tt)() - b.G), (b.B = !1), Klb(b)));
    Olb(this, a);
  };
  g.k.onMutedAutoplayStarts = function () {
    this.K.getVideoData().mutedAutoplay &&
      this.W &&
      g.Ap(this.K.getRootNode(), "ytp-muted-autoplay", !0);
  };
  g.k.onVideoDataChange = function (a, b) {
    var c = this.DG !== b.videoId;
    a = !c && a === "dataloaded";
    var d = { isShortsModeEnabled: !!this.K.md() };
    g.Bt("embedsVideoDataDidChange", {
      clientPlaybackNonce: b.clientPlaybackNonce,
      isReload: a,
      runtimeEnabledFeatures: d,
    });
    c &&
      ((this.DG = b.videoId),
      this.countdownTimer &&
        (this.countdownTimer.show(), this.countdownTimer.hide()),
      this.U &&
        (this.K.gf("embeds"),
        b.isAd() ||
          b.limitedPlaybackDurationInSeconds < 5 ||
          g.tS(this.K) ||
          ((b = Math.max(
            (b.startSeconds + b.limitedPlaybackDurationInSeconds - 5) * 1e3,
            0
          )),
          (b = new g.AE(b, b + 5e3, {
            id: "countdown timer",
            namespace: "embeds",
          })),
          this.K.Se([b]))),
      this.K.V().Za && !this.K.V().disableOrganicUi && (Mlb(this), Plb(this)));
    this.K.V().C && this.C && this.C.detach();
  };
  g.k.onAdStart = function () {
    y5(this, "EMBEDS_AD_EVENT_TYPE_AD_STARTED");
  };
  g.k.onAdComplete = function () {
    y5(this, "EMBEDS_AD_EVENT_TYPE_AD_COMPLETED");
  };
  g.k.onAdSkip = function () {
    y5(this, "EMBEDS_AD_EVENT_TYPE_AD_SKIPPED");
  };
  g.k.onAdStateChange = function (a) {
    a === 2 && y5(this, "EMBEDS_AD_EVENT_TYPE_AD_PAUSED");
  };
  g.pY("embed", Nlb);
})(_yt_player);
