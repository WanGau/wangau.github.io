var _yt_player = {};
(function (g) {
  var window = this;
  ("use strict");
  var v7 = function (a) {
      g.Ek(
        a,
        "zx",
        Math.floor(Math.random() * 2147483648).toString(36) +
          Math.abs(Math.floor(Math.random() * 2147483648) ^ g.Ya()).toString(36)
      );
      return a;
    },
    w7 = function (a, b, c) {
      Array.isArray(c) || (c = [String(c)]);
      g.oha(a.D, b, c);
    },
    otb = function (a) {
      if (a instanceof g.pn) return a;
      if (typeof a.Mm == "function") return a.Mm(!1);
      if (g.Ra(a)) {
        var b = 0,
          c = new g.pn();
        c.next = function () {
          for (;;) {
            if (b >= a.length) return g.S1;
            if (b in a) return g.qn(a[b++]);
            b++;
          }
        };
        return c;
      }
      throw Error("Not implemented");
    },
    ptb = function (a, b, c) {
      if (g.Ra(a)) g.nc(a, b, c);
      else
        for (a = otb(a); ; ) {
          var d = a.next();
          if (d.done) break;
          b.call(c, d.value, void 0, a);
        }
    },
    qtb = function (a, b) {
      var c = [];
      ptb(
        b,
        function (d) {
          try {
            var e = g.Up.prototype.B.call(this, d, !0);
          } catch (f) {
            if (f == "Storage: Invalid value was encountered") return;
            throw f;
          }
          e === void 0 ? c.push(d) : g.wma(e) && c.push(d);
        },
        a
      );
      return c;
    },
    rtb = function (a, b) {
      qtb(a, b).forEach(function (c) {
        g.Up.prototype.remove.call(this, c);
      }, a);
    },
    stb = function (a) {
      if (a.qa) {
        if (a.qa.locationOverrideToken)
          return { locationOverrideToken: a.qa.locationOverrideToken };
        if (a.qa.latitudeE7 != null && a.qa.longitudeE7 != null)
          return { latitudeE7: a.qa.latitudeE7, longitudeE7: a.qa.longitudeE7 };
      }
      return null;
    },
    ttb = function (a, b) {
      g.Yb(a, b) || a.push(b);
    },
    utb = function (a) {
      var b = 0,
        c;
      for (c in a) b++;
      return b;
    },
    vtb = function (a, b) {
      return g.Kg(a, b);
    },
    wtb = function (a) {
      try {
        return g.Ma.JSON.parse(a);
      } catch (b) {}
      a = String(a);
      if (
        /^\s*$/.test(a)
          ? 0
          : /^[\],:{}\s\u2028\u2029]*$/.test(
              a
                .replace(/\\["\\\/bfnrtu]/g, "@")
                .replace(
                  /(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g,
                  "]"
                )
                .replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, "")
            )
      )
        try {
          return eval("(" + a + ")");
        } catch (b) {}
      throw Error("Invalid JSON string: " + a);
    },
    x7 = function (a) {
      if (g.Ma.JSON)
        try {
          return g.Ma.JSON.parse(a);
        } catch (b) {}
      return wtb(a);
    },
    xtb = function (a) {
      if (a.fn && typeof a.fn == "function") return a.fn();
      if (
        (typeof Map !== "undefined" && a instanceof Map) ||
        (typeof Set !== "undefined" && a instanceof Set)
      )
        return Array.from(a.values());
      if (typeof a === "string") return a.split("");
      if (g.Ra(a)) {
        for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
        return b;
      }
      return g.Hg(a);
    },
    ytb = function (a) {
      if (a.Lo && typeof a.Lo == "function") return a.Lo();
      if (!a.fn || typeof a.fn != "function") {
        if (typeof Map !== "undefined" && a instanceof Map)
          return Array.from(a.keys());
        if (!(typeof Set !== "undefined" && a instanceof Set)) {
          if (g.Ra(a) || typeof a === "string") {
            var b = [];
            a = a.length;
            for (var c = 0; c < a; c++) b.push(c);
            return b;
          }
          return g.Ig(a);
        }
      }
    },
    ztb = function (a, b) {
      if (a.forEach && typeof a.forEach == "function") a.forEach(b, void 0);
      else if (g.Ra(a) || typeof a === "string")
        Array.prototype.forEach.call(a, b, void 0);
      else
        for (var c = ytb(a), d = xtb(a), e = d.length, f = 0; f < e; f++)
          b.call(void 0, d[f], c && c[f], a);
    },
    Atb = function (a, b, c, d) {
      var e = new g.wk(null);
      a && g.xk(e, a);
      b && g.yk(e, b);
      c && g.zk(e, c);
      d && (e.B = d);
      return e;
    },
    Btb = function () {
      var a = y7();
      this.j = a;
      a.Gj(
        "/client_streamz/youtube/living_room/mdx/channel/opened",
        g.qb("channel_type")
      );
    },
    Ctb = function (a, b) {
      a.j.Bk("/client_streamz/youtube/living_room/mdx/channel/opened", b);
    },
    Dtb = function () {
      var a = y7();
      this.j = a;
      a.Gj(
        "/client_streamz/youtube/living_room/mdx/channel/closed",
        g.qb("channel_type")
      );
    },
    Etb = function (a, b) {
      a.j.Bk("/client_streamz/youtube/living_room/mdx/channel/closed", b);
    },
    Ftb = function () {
      var a = y7();
      this.j = a;
      a.Gj(
        "/client_streamz/youtube/living_room/mdx/channel/message_received",
        g.qb("channel_type")
      );
    },
    Gtb = function (a, b) {
      a.j.Bk(
        "/client_streamz/youtube/living_room/mdx/channel/message_received",
        b
      );
    },
    Htb = function () {
      var a = y7();
      this.j = a;
      a.Gj(
        "/client_streamz/youtube/living_room/mdx/channel/error",
        g.qb("channel_type")
      );
    },
    Itb = function (a, b) {
      a.j.Bk("/client_streamz/youtube/living_room/mdx/channel/error", b);
    },
    Jtb = function () {
      var a = y7();
      this.j = a;
      a.Gj(
        "/client_streamz/youtube/living_room/mdx/browser_channel/pending_maps"
      );
    },
    Ktb = function () {
      var a = y7();
      this.j = a;
      a.Gj(
        "/client_streamz/youtube/living_room/mdx/browser_channel/undelivered_maps"
      );
    },
    Ltb = function (a, b) {
      return new g.sp(a, b);
    },
    z7 = function (a, b) {
      return Object.prototype.hasOwnProperty.call(a, b);
    },
    A7 = function (a, b) {
      this.B = {};
      this.j = [];
      this.jw = this.size = 0;
      var c = arguments.length;
      if (c > 1) {
        if (c % 2) throw Error("Uneven number of arguments");
        for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1]);
      } else if (a)
        if (a instanceof A7)
          for (c = a.Lo(), d = 0; d < c.length; d++)
            this.set(c[d], a.get(c[d]));
        else for (d in a) this.set(d, a[d]);
    },
    B7 = function (a) {
      if (a.size != a.j.length) {
        for (var b = 0, c = 0; b < a.j.length; ) {
          var d = a.j[b];
          z7(a.B, d) && (a.j[c++] = d);
          b++;
        }
        a.j.length = c;
      }
      if (a.size != a.j.length) {
        b = {};
        for (d = c = 0; c < a.j.length; ) {
          var e = a.j[c];
          z7(b, e) || ((a.j[d++] = e), (b[e] = 1));
          c++;
        }
        a.j.length = d;
      }
    },
    Ptb = function (a) {
      this.name = this.id = "";
      this.clientName = "UNKNOWN_INTERFACE";
      this.app = "";
      this.type = "REMOTE_CONTROL";
      this.ownerObfuscatedGaiaId =
        this.obfuscatedGaiaId =
        this.avatar =
        this.username =
          "";
      this.capabilities = new Set();
      this.compatibleSenderThemes = new Set();
      this.experiments = new Set();
      this.theme = "u";
      new A7();
      this.model = this.brand = "";
      this.year = 0;
      this.chipset = this.osVersion = this.os = "";
      this.mdxDialServerType = "MDX_DIAL_SERVER_TYPE_UNKNOWN";
      a &&
        ((this.id = a.id || a.name),
        (this.name = a.name),
        (this.clientName = a.clientName
          ? a.clientName.toUpperCase()
          : "UNKNOWN_INTERFACE"),
        (this.app = a.app),
        (this.type = a.type || "REMOTE_CONTROL"),
        (this.username = a.user || ""),
        (this.avatar = a.userAvatarUri || ""),
        (this.obfuscatedGaiaId = a.obfuscatedGaiaId || ""),
        (this.ownerObfuscatedGaiaId = a.ownerObfuscatedGaiaId || ""),
        (this.theme = a.theme || "u"),
        Mtb(this, a.capabilities || ""),
        Ntb(this, a.compatibleSenderThemes || ""),
        Otb(this, a.experiments || ""),
        (this.brand = a.brand || ""),
        (this.model = a.model || ""),
        (this.year = a.year || 0),
        (this.os = a.os || ""),
        (this.osVersion = a.osVersion || ""),
        (this.chipset = a.chipset || ""),
        (this.mdxDialServerType =
          a.mdxDialServerType || "MDX_DIAL_SERVER_TYPE_UNKNOWN"),
        (a = a.deviceInfo)) &&
        ((a = JSON.parse(a)),
        (this.brand = a.brand || ""),
        (this.model = a.model || ""),
        (this.year = a.year || 0),
        (this.os = a.os || ""),
        (this.osVersion = a.osVersion || ""),
        (this.chipset = a.chipset || ""),
        (this.clientName = a.clientName
          ? a.clientName.toUpperCase()
          : "UNKNOWN_INTERFACE"),
        (this.mdxDialServerType =
          a.mdxDialServerType || "MDX_DIAL_SERVER_TYPE_UNKNOWN"));
    },
    Mtb = function (a, b) {
      a.capabilities.clear();
      g.un(b.split(","), g.Xa(vtb, Qtb)).forEach(function (c) {
        a.capabilities.add(c);
      });
    },
    Ntb = function (a, b) {
      a.compatibleSenderThemes.clear();
      g.un(b.split(","), g.Xa(vtb, Rtb)).forEach(function (c) {
        a.compatibleSenderThemes.add(c);
      });
    },
    Otb = function (a, b) {
      a.experiments.clear();
      b.split(",").forEach(function (c) {
        a.experiments.add(c);
      });
    },
    C7 = function (a) {
      a = a || {};
      this.name = a.name || "";
      this.id = a.id || a.screenId || "";
      this.token = a.token || a.loungeToken || "";
      this.uuid = a.uuid || a.dialId || "";
      this.idType = a.screenIdType || "normal";
    },
    D7 = function (a, b) {
      return !!b && (a.id == b || a.uuid == b);
    },
    Stb = function (a) {
      return {
        name: a.name,
        screenId: a.id,
        loungeToken: a.token,
        dialId: a.uuid,
        screenIdType: a.idType,
      };
    },
    Ttb = function (a) {
      return new C7(a);
    },
    Utb = function (a) {
      return Array.isArray(a) ? g.Kl(a, Ttb) : [];
    },
    E7 = function (a) {
      return a
        ? '{name:"' +
            a.name +
            '",id:' +
            a.id.substr(0, 6) +
            "..,token:" +
            ((a.token ? ".." + a.token.slice(-6) : "-") +
              ",uuid:" +
              (a.uuid ? ".." + a.uuid.slice(-6) : "-") +
              ",idType:" +
              a.idType +
              "}")
        : "null";
    },
    Vtb = function (a) {
      return Array.isArray(a) ? "[" + g.Kl(a, E7).join(",") + "]" : "null";
    },
    Wtb = function () {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
        /[xy]/g,
        function (a) {
          var b = (Math.random() * 16) | 0;
          return (a == "x" ? b : (b & 3) | 8).toString(16);
        }
      );
    },
    Xtb = function (a) {
      return g.Kl(a, function (b) {
        return { key: b.id, name: b.name };
      });
    },
    Ytb = function (a, b) {
      return g.Wb(a, function (c) {
        return c || b ? (!c != !b ? !1 : c.id == b.id) : !0;
      });
    },
    F7 = function (a, b) {
      return g.Wb(a, function (c) {
        return D7(c, b);
      });
    },
    Ztb = function () {
      var a = (0, g.Vs)();
      a && rtb(a, a.j.Mm(!0));
    },
    G7 = function () {
      var a = g.Ys("yt-remote-connected-devices") || [];
      g.kc(a);
      return a;
    },
    $tb = function (a) {
      if (a.length == 0) return [];
      var b = a[0].indexOf("#"),
        c = b == -1 ? a[0] : a[0].substring(0, b);
      return g.Kl(a, function (d, e) {
        return e == 0 ? d : d.substring(c.length);
      });
    },
    aub = function (a) {
      g.Xs("yt-remote-connected-devices", a, 86400);
    },
    H7 = function () {
      if (bub) return bub;
      var a = g.Ys("yt-remote-device-id");
      a || ((a = Wtb()), g.Xs("yt-remote-device-id", a, 31536e3));
      for (var b = G7(), c = 1, d = a; g.Yb(b, d); ) c++, (d = a + "#" + c);
      return (bub = d);
    },
    cub = function () {
      var a = G7(),
        b = H7();
      g.$s() && g.mc(a, b);
      a = $tb(a);
      if (a.length == 0)
        try {
          g.as("remote_sid");
        } catch (c) {}
      else
        try {
          g.Zr("remote_sid", a.join(","), -1);
        } catch (c) {}
    },
    dub = function () {
      return g.Ys("yt-remote-session-browser-channel");
    },
    eub = function () {
      return g.Ys("yt-remote-local-screens") || [];
    },
    fub = function () {
      g.Xs("yt-remote-lounge-token-expiration", !0, 86400);
    },
    gub = function (a) {
      a.length > 5 && (a = a.slice(a.length - 5));
      var b = g.Kl(eub(), function (d) {
          return d.loungeToken;
        }),
        c = g.Kl(a, function (d) {
          return d.loungeToken;
        });
      g.Ll(c, function (d) {
        return !g.Yb(b, d);
      }) && fub();
      g.Xs("yt-remote-local-screens", a, 31536e3);
    },
    I7 = function (a) {
      a ||
        (g.Zs("yt-remote-session-screen-id"),
        g.Zs("yt-remote-session-video-id"));
      cub();
      a = G7();
      g.$b(a, H7());
      aub(a);
    },
    hub = function () {
      if (!J7) {
        var a = g.$p();
        a && (J7 = new g.Rp(a));
      }
    },
    iub = function () {
      hub();
      return J7 ? !!J7.get("yt-remote-use-staging-server") : !1;
    },
    K7 = function (a, b) {
      g.Bv[a] = !0;
      var c = g.zv();
      c && c.publish.apply(c, arguments);
      g.Bv[a] = !1;
    },
    jub = function () {},
    y7 = function () {
      if (!L7) {
        L7 = new g.Ki(new jub());
        var a = g.Lr("client_streamz_web_flush_count", -1);
        a !== -1 && (L7.C = a);
      }
      return L7;
    },
    kub = function () {
      var a = window.navigator.userAgent.match(/Chrome\/([0-9]+)/);
      return a ? parseInt(a[1], 10) : 0;
    },
    lub = function (a) {
      return (
        !!document.currentScript &&
        (document.currentScript.src.indexOf("?" + a) != -1 ||
          document.currentScript.src.indexOf("&" + a) != -1)
      );
    },
    mub = function () {
      return typeof window.__onGCastApiAvailable == "function"
        ? window.__onGCastApiAvailable
        : null;
    },
    M7 = function (a) {
      a.length
        ? nub(a.shift(), function () {
            M7(a);
          })
        : oub();
    },
    pub = function (a) {
      return "chrome-extension://" + a + "/cast_sender.js";
    },
    nub = function (a, b, c) {
      var d = document.createElement("script");
      d.onerror = b;
      c && (d.onload = c);
      g.cg(d, g.Oq(a));
      (document.head || document.documentElement).appendChild(d);
    },
    qub = function () {
      var a = kub(),
        b = [];
      if (a > 1) {
        var c = a - 1;
        b.push("//www.gstatic.com/eureka/clank/" + a + "/cast_sender.js");
        b.push("//www.gstatic.com/eureka/clank/" + c + "/cast_sender.js");
      }
      return b;
    },
    oub = function () {
      var a = mub();
      a && a(!1, "No cast extension found");
    },
    sub = function () {
      if (rub) {
        var a = 2,
          b = mub(),
          c = function () {
            a--;
            a == 0 && b && b(!0);
          };
        window.__onGCastApiAvailable = c;
        nub(
          "//www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js",
          oub,
          c
        );
      }
    },
    tub = function () {
      sub();
      var a = qub();
      a.push("//www.gstatic.com/eureka/clank/cast_sender.js");
      M7(a);
    },
    vub = function () {
      sub();
      var a = qub();
      a.push.apply(a, g.z(uub.map(pub)));
      a.push("//www.gstatic.com/eureka/clank/cast_sender.js");
      M7(a);
    },
    N7 = function (a, b, c) {
      g.O.call(this);
      this.L = c != null ? (0, g.Va)(a, c) : a;
      this.qj = b;
      this.G = (0, g.Va)(this.K5, this);
      this.j = !1;
      this.B = 0;
      this.C = this.ud = null;
      this.D = [];
    },
    O7 = function (a, b, c) {
      g.O.call(this);
      this.D = c != null ? a.bind(c) : a;
      this.qj = b;
      this.C = null;
      this.j = !1;
      this.B = 0;
      this.ud = null;
    },
    wub = function (a) {
      a.ud = g.Ii(function () {
        a.ud = null;
        a.j && !a.B && ((a.j = !1), wub(a));
      }, a.qj);
      var b = a.C;
      a.C = null;
      a.D.apply(null, b);
    },
    P7 = function () {},
    xub = function () {
      g.Uh.call(this, "p");
    },
    yub = function () {
      g.Uh.call(this, "o");
    },
    Aub = function () {
      return (zub = zub || new g.ki());
    },
    Bub = function (a) {
      g.Uh.call(this, "serverreachability", a);
    },
    Q7 = function (a) {
      var b = Aub();
      b.dispatchEvent(new Bub(b, a));
    },
    Cub = function (a) {
      g.Uh.call(this, "statevent", a);
    },
    R7 = function (a) {
      var b = Aub();
      b.dispatchEvent(new Cub(b, a));
    },
    Dub = function (a, b, c, d) {
      g.Uh.call(this, "timingevent", a);
      this.size = b;
      this.rtt = c;
      this.retries = d;
    },
    S7 = function (a, b) {
      if (typeof a !== "function")
        throw Error("Fn must not be null and must be a function");
      return g.Ma.setTimeout(function () {
        a();
      }, b);
    },
    T7 = function () {},
    U7 = function (a, b, c, d) {
      this.C = a;
      this.D = b;
      this.Zb = c;
      this.Wb = d || 1;
      this.ub = new g.Jk(this);
      this.ib = 45e3;
      this.La = null;
      this.L = !1;
      this.Z = this.Za = this.W = this.Pa = this.Ba = this.rb = this.qa = null;
      this.ra = [];
      this.j = null;
      this.U = 0;
      this.G = this.Ea = null;
      this.Vb = -1;
      this.Ma = !1;
      this.bb = 0;
      this.Ua = null;
      this.Mb = this.Va = this.Bb = this.Fa = !1;
      this.B = new Eub();
    },
    Eub = function () {
      this.C = null;
      this.j = "";
      this.B = !1;
    },
    Gub = function (a, b, c) {
      a.Pa = 1;
      a.W = v7(b.clone());
      a.Z = c;
      a.Fa = !0;
      Fub(a, null);
    },
    Fub = function (a, b) {
      a.Ba = Date.now();
      V7(a);
      a.Za = a.W.clone();
      w7(a.Za, "t", a.Wb);
      a.U = 0;
      var c = a.C.Pa;
      a.B = new Eub();
      a.j = Hub(a.C, c ? b : null, !a.Z);
      a.bb > 0 && (a.Ua = new O7((0, g.Va)(a.cW, a, a.j), a.bb));
      a.ub.listen(a.j, "readystatechange", a.M5);
      b = a.La ? g.Pg(a.La) : {};
      a.Z
        ? (a.Ea || (a.Ea = "POST"),
          (b["Content-Type"] = "application/x-www-form-urlencoded"),
          a.j.send(a.Za, a.Ea, a.Z, b))
        : ((a.Ea = "GET"), a.j.send(a.Za, a.Ea, null, b));
      Q7(1);
    },
    Jub = function (a) {
      if (!Iub(a)) return g.jj(a.j);
      var b = g.kj(a.j);
      if (b === "") return "";
      var c = "",
        d = b.length,
        e = g.hj(a.j) == 4;
      if (!a.B.C) {
        if (typeof TextDecoder === "undefined") return W7(a), X7(a), "";
        a.B.C = new g.Ma.TextDecoder();
      }
      for (var f = 0; f < d; f++)
        (a.B.B = !0), (c += a.B.C.decode(b[f], { stream: !(e && f == d - 1) }));
      b.length = 0;
      a.B.j += c;
      a.U = 0;
      return a.B.j;
    },
    Iub = function (a) {
      return a.j ? a.Ea == "GET" && a.Pa != 2 && a.C.Ff : !1;
    },
    Mub = function (a, b) {
      var c = a.U,
        d = b.indexOf("\n", c);
      if (d == -1) return Kub;
      c = Number(b.substring(c, d));
      if (isNaN(c)) return Lub;
      d += 1;
      if (d + c > b.length) return Kub;
      b = b.slice(d, d + c);
      a.U = d + c;
      return b;
    },
    V7 = function (a) {
      a.rb = Date.now() + a.ib;
      Nub(a, a.ib);
    },
    Nub = function (a, b) {
      if (a.qa != null) throw Error("WatchDog timer not null");
      a.qa = S7((0, g.Va)(a.L5, a), b);
    },
    Oub = function (a) {
      a.qa && (g.Ma.clearTimeout(a.qa), (a.qa = null));
    },
    X7 = function (a) {
      a.C.eh() || a.Ma || Pub(a.C, a);
    },
    W7 = function (a) {
      Oub(a);
      g.ib(a.Ua);
      a.Ua = null;
      a.ub.removeAll();
      if (a.j) {
        var b = a.j;
        a.j = null;
        b.abort();
        b.dispose();
      }
    },
    Xub = function (a, b) {
      try {
        var c = a.C;
        if (c.gi != 0 && (c.j == a || Qub(c.B, a)))
          if (!a.Va && Qub(c.B, a) && c.gi == 3) {
            try {
              var d = c.Re.j.parse(b);
            } catch (y) {
              d = null;
            }
            if (Array.isArray(d) && d.length == 3) {
              var e = d;
              if (e[0] == 0)
                a: {
                  if (!c.W) {
                    if (c.j)
                      if (c.j.Ba + 3e3 < a.Ba) Y7(c), Z7(c);
                      else break a;
                    Rub(c);
                    R7(18);
                  }
                }
              else
                (c.Bd = e[1]),
                  0 < c.Bd - c.Ua &&
                    e[2] < 37500 &&
                    c.Va &&
                    c.ra == 0 &&
                    !c.qa &&
                    (c.qa = S7((0, g.Va)(c.N5, c), 6e3));
              if (Sub(c.B) <= 1 && c.Cc) {
                try {
                  c.Cc();
                } catch (y) {}
                c.Cc = void 0;
              }
            } else $7(c, 11);
          } else if (((a.Va || c.j == a) && Y7(c), !g.yb(b)))
            for (e = c.Re.j.parse(b), b = 0; b < e.length; b++) {
              var f = e[b];
              c.Ua = f[0];
              f = f[1];
              if (c.gi == 2)
                if (f[0] == "c") {
                  c.D = f[1];
                  c.Wb = f[2];
                  var h = f[3];
                  h != null && (c.dW = h);
                  var l = f[5];
                  l != null &&
                    typeof l === "number" &&
                    l > 0 &&
                    (c.bb = 1.5 * l);
                  d = c;
                  var m = a.cR();
                  if (m) {
                    var n = g.lj(m, "X-Client-Wire-Protocol");
                    if (n) {
                      var p = d.B;
                      !p.j &&
                        (g.zb(n, "spdy") || g.zb(n, "quic") || g.zb(n, "h2")) &&
                        ((p.D = p.G),
                        (p.j = new Set()),
                        p.B && (Tub(p, p.B), (p.B = null)));
                    }
                    if (d.Fa) {
                      var q = g.lj(m, "X-HTTP-Session-Id");
                      q && ((d.Rd = q), g.Ek(d.La, d.Fa, q));
                    }
                  }
                  c.gi = 3;
                  c.G && c.G.jW();
                  c.wc && (c.Pc = Date.now() - a.Ba);
                  d = c;
                  var r = a;
                  d.wd = Uub(d, d.Pa ? d.Wb : null, d.Zb);
                  if (r.Va) {
                    Vub(d.B, r);
                    var t = r,
                      u = d.bb;
                    u && t.setTimeout(u);
                    t.qa && (Oub(t), V7(t));
                    d.j = r;
                  } else Wub(d);
                  c.C.length > 0 && a8(c);
                } else (f[0] != "stop" && f[0] != "close") || $7(c, 7);
              else
                c.gi == 3 &&
                  (f[0] == "stop" || f[0] == "close"
                    ? f[0] == "stop"
                      ? $7(c, 7)
                      : c.disconnect()
                    : f[0] != "noop" && c.G && c.G.iW(f),
                  (c.ra = 0));
            }
        Q7(4);
      } catch (y) {}
    },
    Yub = function (a, b) {
      this.j = a;
      this.map = b;
      this.context = null;
    },
    Zub = function (a) {
      this.G = a || 10;
      g.Ma.PerformanceNavigationTiming
        ? ((a = g.Ma.performance.getEntriesByType("navigation")),
          (a =
            a.length > 0 &&
            (a[0].nextHopProtocol == "hq" || a[0].nextHopProtocol == "h2")))
        : (a = !!(
            g.Ma.chrome &&
            g.Ma.chrome.loadTimes &&
            g.Ma.chrome.loadTimes() &&
            g.Ma.chrome.loadTimes().wasFetchedViaSpdy
          ));
      this.D = a ? this.G : 1;
      this.j = null;
      this.D > 1 && (this.j = new Set());
      this.B = null;
      this.C = [];
    },
    $ub = function (a) {
      return a.B ? !0 : a.j ? a.j.size >= a.D : !1;
    },
    Sub = function (a) {
      return a.B ? 1 : a.j ? a.j.size : 0;
    },
    Qub = function (a, b) {
      return a.B ? a.B == b : a.j ? a.j.has(b) : !1;
    },
    Tub = function (a, b) {
      a.j ? a.j.add(b) : (a.B = b);
    },
    Vub = function (a, b) {
      a.B && a.B == b ? (a.B = null) : a.j && a.j.has(b) && a.j.delete(b);
    },
    avb = function (a) {
      if (a.B != null) return a.C.concat(a.B.ra);
      if (a.j != null && a.j.size !== 0) {
        var b = a.C;
        a = g.x(a.j.values());
        for (var c = a.next(); !c.done; c = a.next()) b = b.concat(c.value.ra);
        return b;
      }
      return g.cc(a.C);
    },
    bvb = function (a, b) {
      var c = new T7();
      if (g.Ma.Image) {
        var d = new Image();
        d.onload = g.Xa(b8, c, "TestLoadImage: loaded", !0, b, d);
        d.onerror = g.Xa(b8, c, "TestLoadImage: error", !1, b, d);
        d.onabort = g.Xa(b8, c, "TestLoadImage: abort", !1, b, d);
        d.ontimeout = g.Xa(b8, c, "TestLoadImage: timeout", !1, b, d);
        g.Ma.setTimeout(function () {
          if (d.ontimeout) d.ontimeout();
        }, 1e4);
        d.src = a;
      } else b(!1);
    },
    cvb = function (a, b) {
      var c = new T7(),
        d = new AbortController(),
        e = setTimeout(function () {
          d.abort();
          b8(c, "TestPingServer: timeout", !1, b);
        }, 1e4);
      fetch(a, { signal: d.signal })
        .then(function (f) {
          clearTimeout(e);
          f.ok
            ? b8(c, "TestPingServer: ok", !0, b)
            : b8(c, "TestPingServer: server error", !1, b);
        })
        .catch(function () {
          clearTimeout(e);
          b8(c, "TestPingServer: error", !1, b);
        });
    },
    b8 = function (a, b, c, d, e) {
      try {
        e &&
          ((e.onload = null),
          (e.onerror = null),
          (e.onabort = null),
          (e.ontimeout = null)),
          d(c);
      } catch (f) {}
    },
    dvb = function () {
      this.j = new P7();
    },
    evb = function (a, b, c) {
      var d = c || "";
      try {
        ztb(a, function (e, f) {
          var h = e;
          g.Sa(e) && (h = g.Mi(e));
          b.push(d + f + "=" + encodeURIComponent(h));
        });
      } catch (e) {
        throw (b.push(d + "type=" + encodeURIComponent("_badmap")), e);
      }
    },
    c8 = function (a, b, c) {
      return c && c.U$ ? c.U$[a] || b : b;
    },
    fvb = function (a) {
      this.C = [];
      this.Wb =
        this.wd =
        this.La =
        this.Zb =
        this.j =
        this.Rd =
        this.Fa =
        this.Ma =
        this.U =
        this.Vb =
        this.Z =
          null;
      this.Gf = this.Za = 0;
      this.zf = c8("failFast", !1, a);
      this.Va = this.qa = this.W = this.L = this.G = null;
      this.vc = !0;
      this.Bd = this.Ua = -1;
      this.Mb = this.ra = this.Ba = 0;
      this.yf = c8("baseRetryDelayMs", 5e3, a);
      this.nh = c8("retryDelaySeedMs", 1e4, a);
      this.Af = c8("forwardChannelMaxRetries", 2, a);
      this.ge = c8("forwardChannelRequestTimeoutMs", 2e4, a);
      this.Md = (a && a.ura) || void 0;
      this.cg = (a && a.gqa) || void 0;
      this.Ff = (a && a.sra) || !1;
      this.bb = void 0;
      this.Pa = (a && a.Ifa) || !1;
      this.D = "";
      this.B = new Zub(a && a.Zna);
      this.Re = new dvb();
      this.ub = (a && a.soa) || !1;
      this.rb = (a && a.goa) || !1;
      this.ub && this.rb && (this.rb = !1);
      this.ag = (a && a.Qna) || !1;
      a && a.voa && (this.vc = !1);
      this.wc = (!this.ub && this.vc && a && a.doa) || !1;
      this.Xc = void 0;
      a && a.n0 && a.n0 > 0 && (this.Xc = a.n0);
      this.Cc = void 0;
      this.Pc = 0;
      this.ib = !1;
      this.Bb = this.Ea = null;
    },
    Z7 = function (a) {
      a.j && (gvb(a), a.j.cancel(), (a.j = null));
    },
    hvb = function (a) {
      Z7(a);
      a.W && (g.Ma.clearTimeout(a.W), (a.W = null));
      Y7(a);
      a.B.cancel();
      a.L && (typeof a.L === "number" && g.Ma.clearTimeout(a.L), (a.L = null));
    },
    a8 = function (a) {
      $ub(a.B) || a.L || ((a.L = !0), g.ti(a.fW, a), (a.Ba = 0));
    },
    jvb = function (a, b) {
      if (Sub(a.B) >= a.B.D - (a.L ? 1 : 0)) return !1;
      if (a.L) return (a.C = b.ra.concat(a.C)), !0;
      if (a.gi == 1 || a.gi == 2 || a.Ba >= (a.zf ? 0 : a.Af)) return !1;
      a.L = S7((0, g.Va)(a.fW, a, b), ivb(a, a.Ba));
      a.Ba++;
      return !0;
    },
    lvb = function (a, b) {
      var c;
      b ? (c = b.Zb) : (c = a.Za++);
      var d = a.La.clone();
      g.Ek(d, "SID", a.D);
      g.Ek(d, "RID", c);
      g.Ek(d, "AID", a.Ua);
      d8(a, d);
      a.U && a.Z && g.Ik(d, a.U, a.Z);
      c = new U7(a, a.D, c, a.Ba + 1);
      a.U === null && (c.La = a.Z);
      b && (a.C = b.ra.concat(a.C));
      b = kvb(a, c, 1e3);
      c.setTimeout(
        Math.round(a.ge * 0.5) + Math.round(a.ge * 0.5 * Math.random())
      );
      Tub(a.B, c);
      Gub(c, d, b);
    },
    d8 = function (a, b) {
      a.Ma &&
        g.Cg(a.Ma, function (c, d) {
          g.Ek(b, d, c);
        });
      a.G &&
        ztb({}, function (c, d) {
          g.Ek(b, d, c);
        });
    },
    kvb = function (a, b, c) {
      c = Math.min(a.C.length, c);
      var d = a.G ? (0, g.Va)(a.G.O5, a.G, a) : null;
      a: {
        for (var e = a.C, f = -1; ; ) {
          var h = ["count=" + c];
          f == -1
            ? c > 0
              ? ((f = e[0].j), h.push("ofs=" + f))
              : (f = 0)
            : h.push("ofs=" + f);
          for (var l = !0, m = 0; m < c; m++) {
            var n = e[m].j,
              p = e[m].map;
            n -= f;
            if (n < 0) (f = Math.max(0, e[m].j - 100)), (l = !1);
            else
              try {
                evb(p, h, "req" + n + "_");
              } catch (q) {
                d && d(p);
              }
          }
          if (l) {
            d = h.join("&");
            break a;
          }
        }
        d = void 0;
      }
      a = a.C.splice(0, c);
      b.ra = a;
      return d;
    },
    Wub = function (a) {
      a.j || a.W || ((a.Mb = 1), g.ti(a.eW, a), (a.ra = 0));
    },
    Rub = function (a) {
      if (a.j || a.W || a.ra >= 3) return !1;
      a.Mb++;
      a.W = S7((0, g.Va)(a.eW, a), ivb(a, a.ra));
      a.ra++;
      return !0;
    },
    gvb = function (a) {
      a.Ea != null && (g.Ma.clearTimeout(a.Ea), (a.Ea = null));
    },
    mvb = function (a) {
      a.j = new U7(a, a.D, "rpc", a.Mb);
      a.U === null && (a.j.La = a.Z);
      a.j.bb = 0;
      var b = a.wd.clone();
      g.Ek(b, "RID", "rpc");
      g.Ek(b, "SID", a.D);
      g.Ek(b, "AID", a.Ua);
      g.Ek(b, "CI", a.Va ? "0" : "1");
      !a.Va && a.Xc && g.Ek(b, "TO", a.Xc);
      g.Ek(b, "TYPE", "xmlhttp");
      d8(a, b);
      a.U && a.Z && g.Ik(b, a.U, a.Z);
      a.bb && a.j.setTimeout(a.bb);
      var c = a.j;
      a = a.Wb;
      c.Pa = 1;
      c.W = v7(b.clone());
      c.Z = null;
      c.Fa = !0;
      Fub(c, a);
    },
    Y7 = function (a) {
      a.qa != null && (g.Ma.clearTimeout(a.qa), (a.qa = null));
    },
    Pub = function (a, b) {
      var c = null;
      if (a.j == b) {
        Y7(a);
        gvb(a);
        a.j = null;
        var d = 2;
      } else if (Qub(a.B, b)) (c = b.ra), Vub(a.B, b), (d = 1);
      else return;
      if (a.gi != 0)
        if (b.L)
          if (d == 1) {
            c = b.Z ? b.Z.length : 0;
            b = Date.now() - b.Ba;
            var e = a.Ba;
            d = Aub();
            d.dispatchEvent(new Dub(d, c, b, e));
            a8(a);
          } else Wub(a);
        else {
          var f = b.Vb;
          e = b.getLastError();
          if (
            e == 3 ||
            (e == 0 && f > 0) ||
            !((d == 1 && jvb(a, b)) || (d == 2 && Rub(a)))
          )
            switch (
              (c && c.length > 0 && ((b = a.B), (b.C = b.C.concat(c))), e)
            ) {
              case 1:
                $7(a, 5);
                break;
              case 4:
                $7(a, 10);
                break;
              case 3:
                $7(a, 6);
                break;
              default:
                $7(a, 2);
            }
        }
    },
    ivb = function (a, b) {
      var c = a.yf + Math.floor(Math.random() * a.nh);
      a.isActive() || (c *= 2);
      return c * b;
    },
    $7 = function (a, b) {
      if (b == 2) {
        var c = (0, g.Va)(a.Pfa, a),
          d = a.cg,
          e = !d;
        d = new g.wk(d || "//www.google.com/images/cleardot.gif");
        (g.Ma.location && g.Ma.location.protocol == "http") || g.xk(d, "https");
        v7(d);
        e ? bvb(d.toString(), c) : cvb(d.toString(), c);
      } else R7(2);
      a.gi = 0;
      a.G && a.G.hW(b);
      nvb(a);
      hvb(a);
    },
    nvb = function (a) {
      a.gi = 0;
      a.Bb = [];
      if (a.G) {
        var b = avb(a.B);
        if (b.length != 0 || a.C.length != 0)
          g.dc(a.Bb, b),
            g.dc(a.Bb, a.C),
            (a.B.C.length = 0),
            g.cc(a.C),
            (a.C.length = 0);
        a.G.gW();
      }
    },
    ovb = function (a) {
      if (a.gi == 0) return a.Bb;
      var b = [];
      g.dc(b, avb(a.B));
      g.dc(b, a.C);
      return b;
    },
    Uub = function (a, b, c) {
      var d = g.Fk(c);
      d.j != ""
        ? (b && g.yk(d, b + "." + d.j), g.zk(d, d.C))
        : ((d = g.Ma.location),
          (d = Atb(
            d.protocol,
            b ? b + "." + d.hostname : d.hostname,
            +d.port,
            c
          )));
      b = a.Fa;
      c = a.Rd;
      b && c && g.Ek(d, b, c);
      g.Ek(d, "VER", a.dW);
      d8(a, d);
      return d;
    },
    Hub = function (a, b, c) {
      if (b && !a.Pa)
        throw Error("Can't create secondary domain capable XhrIo object.");
      b = a.Ff && !a.Md ? new g.ej(new g.sk({ x3: c })) : new g.ej(a.Md);
      b.U = a.Pa;
      return b;
    },
    pvb = function () {},
    qvb = function () {},
    f8 = function (a, b) {
      g.ki.call(this);
      this.j = new fvb(b);
      this.G = a;
      this.B = (b && b.Uaa) || null;
      a = (b && b.Taa) || null;
      b &&
        b.Xna &&
        (a
          ? (a["X-Client-Protocol"] = "webchannel")
          : (a = { "X-Client-Protocol": "webchannel" }));
      this.j.Z = a;
      a = (b && b.Gpa) || null;
      b &&
        b.z0 &&
        (a
          ? (a["X-WebChannel-Content-Type"] = b.z0)
          : (a = { "X-WebChannel-Content-Type": b.z0 }));
      b &&
        b.xY &&
        (a
          ? (a["X-WebChannel-Client-Profile"] = b.xY)
          : (a = { "X-WebChannel-Client-Profile": b.xY }));
      this.j.Vb = a;
      (a = b && b.Fpa) && !g.yb(a) && (this.j.U = a);
      this.L = (b && b.Ifa) || !1;
      this.D = (b && b.Iqa) || !1;
      (b = b && b.R$) &&
        !g.yb(b) &&
        ((this.j.Fa = b),
        g.Jg(this.B, b) && ((a = this.B), b in a && delete a[b]));
      this.C = new e8(this);
    },
    rvb = function (a) {
      xub.call(this);
      a.__headers__ &&
        ((this.headers = a.__headers__),
        (this.statusCode = a.__status__),
        delete a.__headers__,
        delete a.__status__);
      var b = a.__sm__;
      b
        ? (this.data = (this.j = g.Gg(b)) ? g.Ng(b, this.j) : b)
        : (this.data = a);
    },
    svb = function (a) {
      yub.call(this);
      this.status = 1;
      this.errorCode = a;
    },
    e8 = function (a) {
      this.j = a;
    },
    tvb = function (a, b) {
      this.B = a;
      this.j = b;
    },
    uvb = function (a) {
      return ovb(a.j).map(function (b) {
        var c = a.B;
        b = b.map;
        "__data__" in b ? ((b = b.__data__), (c = c.D ? wtb(b) : b)) : (c = b);
        return c;
      });
    },
    g8 = function (a, b) {
      if (typeof a !== "function")
        throw Error("Fn must not be null and must be a function");
      return g.Ma.setTimeout(function () {
        a();
      }, b);
    },
    i8 = function (a) {
      h8.dispatchEvent(new vvb(h8, a));
    },
    vvb = function (a) {
      g.Uh.call(this, "statevent", a);
    },
    j8 = function (a, b, c, d) {
      this.j = a;
      this.D = b;
      this.U = c;
      this.L = d || 1;
      this.B = 45e3;
      this.C = new g.Jk(this);
      this.G = new g.Hi();
      this.G.setInterval(250);
    },
    xvb = function (a, b, c) {
      a.eJ = 1;
      a.DD = v7(b.clone());
      a.xw = c;
      a.Fa = !0;
      wvb(a, null);
    },
    yvb = function (a, b, c, d, e) {
      a.eJ = 1;
      a.DD = v7(b.clone());
      a.xw = null;
      a.Fa = c;
      e && (a.S2 = !1);
      wvb(a, d);
    },
    wvb = function (a, b) {
      a.GD = Date.now();
      zvb(a);
      a.dJ = a.DD.clone();
      w7(a.dJ, "t", a.L);
      a.gJ = 0;
      a.Ej = a.j.oO(a.j.HD() ? b : null);
      a.mO > 0 && (a.cJ = new O7((0, g.Va)(a.kW, a, a.Ej), a.mO));
      a.C.listen(a.Ej, "readystatechange", a.Q5);
      b = a.uw ? g.Pg(a.uw) : {};
      a.xw
        ? ((a.fJ = "POST"),
          (b["Content-Type"] = "application/x-www-form-urlencoded"),
          a.Ej.send(a.dJ, a.fJ, a.xw, b))
        : ((a.fJ = "GET"),
          a.S2 && !g.gh && (b.Connection = "close"),
          a.Ej.send(a.dJ, a.fJ, null, b));
      a.j.Hs(1);
    },
    Cvb = function (a, b) {
      var c = a.gJ,
        d = b.indexOf("\n", c);
      if (d == -1) return Avb;
      c = Number(b.substring(c, d));
      if (isNaN(c)) return Bvb;
      d += 1;
      if (d + c > b.length) return Avb;
      b = b.slice(d, d + c);
      a.gJ = d + c;
      return b;
    },
    zvb = function (a) {
      a.nO = Date.now() + a.B;
      Dvb(a, a.B);
    },
    Dvb = function (a, b) {
      if (a.Wz != null) throw Error("WatchDog timer not null");
      a.Wz = g8((0, g.Va)(a.P5, a), b);
    },
    Evb = function (a) {
      a.Wz && (g.Ma.clearTimeout(a.Wz), (a.Wz = null));
    },
    Fvb = function (a) {
      a.j.eh() || a.ED || a.j.qO(a);
    },
    k8 = function (a) {
      Evb(a);
      g.ib(a.cJ);
      a.cJ = null;
      a.G.stop();
      a.C.removeAll();
      if (a.Ej) {
        var b = a.Ej;
        a.Ej = null;
        b.abort();
        b.dispose();
      }
      a.Q3 && (a.Q3 = null);
    },
    Gvb = function (a, b) {
      try {
        a.j.lW(a, b), a.j.Hs(4);
      } catch (c) {}
    },
    Ivb = function (a, b, c, d, e) {
      if (d == 0) c(!1);
      else {
        var f = e || 0;
        d--;
        Hvb(a, b, function (h) {
          h
            ? c(!0)
            : g.Ma.setTimeout(function () {
                Ivb(a, b, c, d, f);
              }, f);
        });
      }
    },
    Hvb = function (a, b, c) {
      var d = new Image();
      d.onload = function () {
        try {
          l8(d), c(!0);
        } catch (e) {}
      };
      d.onerror = function () {
        try {
          l8(d), c(!1);
        } catch (e) {}
      };
      d.onabort = function () {
        try {
          l8(d), c(!1);
        } catch (e) {}
      };
      d.ontimeout = function () {
        try {
          l8(d), c(!1);
        } catch (e) {}
      };
      g.Ma.setTimeout(function () {
        if (d.ontimeout) d.ontimeout();
      }, b);
      d.src = a;
    },
    l8 = function (a) {
      a.onload = null;
      a.onerror = null;
      a.onabort = null;
      a.ontimeout = null;
    },
    Jvb = function (a) {
      this.j = a;
      this.B = new P7();
    },
    Kvb = function (a) {
      var b = m8(a.j, a.NE, "/mail/images/cleardot.gif");
      v7(b);
      Ivb(b.toString(), 5e3, (0, g.Va)(a.j8, a), 3, 2e3);
      a.Hs(1);
    },
    Lvb = function (a) {
      var b = a.j.L;
      b != null
        ? (i8(5), b ? (i8(11), n8(a.j, a, !1)) : (i8(12), n8(a.j, a, !0)))
        : ((a.Jl = new j8(a)),
          (a.Jl.uw = a.pO),
          (b = a.j),
          (b = m8(b, b.HD() ? a.hJ : null, a.rO)),
          i8(5),
          w7(b, "TYPE", "xmlhttp"),
          yvb(a.Jl, b, !1, a.hJ, !1));
    },
    Mvb = function (a, b, c) {
      this.j = 1;
      this.B = [];
      this.C = [];
      this.G = new P7();
      this.Z = a || null;
      this.L = b != null ? b : null;
      this.W = c || !1;
    },
    Nvb = function (a, b) {
      this.j = a;
      this.map = b;
      this.context = null;
    },
    Ovb = function (a, b, c, d) {
      g.Uh.call(this, "timingevent", a);
      this.size = b;
      this.rtt = c;
      this.retries = d;
    },
    Pvb = function (a) {
      g.Uh.call(this, "serverreachability", a);
    },
    Rvb = function (a) {
      a.R5(1, 0);
      a.iJ = m8(a, null, a.tO);
      Qvb(a);
    },
    Svb = function (a) {
      a.Xt && (a.Xt.abort(), (a.Xt = null));
      a.kh && (a.kh.cancel(), (a.kh = null));
      a.Gr && (g.Ma.clearTimeout(a.Gr), (a.Gr = null));
      o8(a);
      a.Pk && (a.Pk.cancel(), (a.Pk = null));
      a.Kt && (g.Ma.clearTimeout(a.Kt), (a.Kt = null));
    },
    Tvb = function (a, b) {
      if (a.j == 0)
        throw Error("Invalid operation: sending map when state is closed");
      a.B.push(new Nvb(a.S5++, b));
      (a.j != 2 && a.j != 3) || Qvb(a);
    },
    Uvb = function (a) {
      var b = 0;
      a.kh && b++;
      a.Pk && b++;
      return b;
    },
    Qvb = function (a) {
      a.Pk || a.Kt || ((a.Kt = g8((0, g.Va)(a.pW, a), 0)), (a.Yz = 0));
    },
    Xvb = function (a, b) {
      if (a.j == 1) {
        if (!b) {
          a.JD = Math.floor(Math.random() * 1e5);
          b = a.JD++;
          var c = new j8(a, "", b);
          c.uw = a.Lp;
          var d = Vvb(a),
            e = a.iJ.clone();
          g.Ek(e, "RID", b);
          g.Ek(e, "CVER", "1");
          p8(a, e);
          xvb(c, e, d);
          a.Pk = c;
          a.j = 2;
        }
      } else a.j == 3 && (b ? Wvb(a, b) : a.B.length == 0 || a.Pk || Wvb(a));
    },
    Wvb = function (a, b) {
      if (b)
        if (a.yw > 6) {
          a.B = a.C.concat(a.B);
          a.C.length = 0;
          var c = a.JD - 1;
          b = Vvb(a);
        } else (c = b.U), (b = b.xw);
      else (c = a.JD++), (b = Vvb(a));
      var d = a.iJ.clone();
      g.Ek(d, "SID", a.D);
      g.Ek(d, "RID", c);
      g.Ek(d, "AID", a.Zz);
      p8(a, d);
      c = new j8(a, a.D, c, a.Yz + 1);
      c.uw = a.Lp;
      c.setTimeout(1e4 + Math.round(1e4 * Math.random()));
      a.Pk = c;
      xvb(c, d, b);
    },
    p8 = function (a, b) {
      a.cj &&
        (a = a.cj.tW()) &&
        g.Cg(a, function (c, d) {
          g.Ek(b, d, c);
        });
    },
    Vvb = function (a) {
      var b = Math.min(a.B.length, 1e3),
        c = ["count=" + b];
      if (a.yw > 6 && b > 0) {
        var d = a.B[0].j;
        c.push("ofs=" + d);
      } else d = 0;
      for (var e = {}, f = 0; f < b; e = { NG: void 0 }, f++) {
        e.NG = a.B[f].j;
        var h = a.B[f].map;
        e.NG = a.yw <= 6 ? f : e.NG - d;
        try {
          g.Cg(
            h,
            (function (l) {
              return function (m, n) {
                c.push("req" + l.NG + "_" + n + "=" + encodeURIComponent(m));
              };
            })(e)
          );
        } catch (l) {
          c.push("req" + e.NG + "_type=" + encodeURIComponent("_badmap"));
        }
      }
      a.C = a.C.concat(a.B.splice(0, b));
      return c.join("&");
    },
    Yvb = function (a) {
      a.kh ||
        a.Gr ||
        ((a.U = 1), (a.Gr = g8((0, g.Va)(a.oW, a), 0)), (a.Xz = 0));
    },
    $vb = function (a) {
      if (a.kh || a.Gr || a.Xz >= 3) return !1;
      a.U++;
      a.Gr = g8((0, g.Va)(a.oW, a), Zvb(a, a.Xz));
      a.Xz++;
      return !0;
    },
    n8 = function (a, b, c) {
      a.TN = a.L == null ? c : !a.L;
      a.Mp = b.Fr;
      a.W || Rvb(a);
    },
    o8 = function (a) {
      a.zw != null && (g.Ma.clearTimeout(a.zw), (a.zw = null));
    },
    Zvb = function (a, b) {
      var c = 5e3 + Math.floor(Math.random() * 1e4);
      a.isActive() || (c *= 2);
      return c * b;
    },
    q8 = function (a, b) {
      if (b == 2 || b == 9) {
        var c = null;
        a.cj && (c = null);
        var d = (0, g.Va)(a.Ofa, a);
        c || ((c = new g.wk("//www.google.com/images/cleardot.gif")), v7(c));
        Hvb(c.toString(), 1e4, d);
      } else i8(2);
      awb(a, b);
    },
    awb = function (a, b) {
      a.j = 0;
      a.cj && a.cj.qW(b);
      bwb(a);
      Svb(a);
    },
    bwb = function (a) {
      a.j = 0;
      a.Mp = -1;
      if (a.cj)
        if (a.C.length == 0 && a.B.length == 0) a.cj.uO();
        else {
          var b = g.cc(a.C),
            c = g.cc(a.B);
          a.C.length = 0;
          a.B.length = 0;
          a.cj.uO(b, c);
        }
    },
    m8 = function (a, b, c) {
      var d = g.Fk(c);
      if (d.j != "") b && g.yk(d, b + "." + d.j), g.zk(d, d.C);
      else {
        var e = window.location;
        d = Atb(e.protocol, b ? b + "." + e.hostname : e.hostname, +e.port, c);
      }
      a.ID &&
        g.Cg(a.ID, function (f, h) {
          g.Ek(d, h, f);
        });
      g.Ek(d, "VER", a.yw);
      p8(a, d);
      return d;
    },
    cwb = function () {},
    dwb = function () {
      this.j = [];
      this.B = [];
    },
    ewb = function (a) {
      g.Uh.call(this, "channelMessage");
      this.message = a;
    },
    fwb = function (a) {
      g.Uh.call(this, "channelError");
      this.error = a;
    },
    gwb = function (a, b) {
      this.action = a;
      this.params = b || {};
    },
    r8 = function (a, b) {
      g.O.call(this);
      this.j = new g.op(this.Ada, 0, this);
      g.P(this, this.j);
      this.qj = 5e3;
      this.B = 0;
      if (typeof a === "function") b && (a = (0, g.Va)(a, b));
      else if (a && typeof a.handleEvent === "function")
        a = (0, g.Va)(a.handleEvent, a);
      else throw Error("Invalid listener argument");
      this.C = a;
    },
    hwb = function (a, b, c, d, e) {
      c = c === void 0 ? !1 : c;
      d =
        d === void 0
          ? function () {
              return "";
            }
          : d;
      e = e === void 0 ? !1 : e;
      this.Ba = a;
      this.U = b;
      this.C = new g.Qp();
      this.B = new r8(this.Uea, this);
      this.j = null;
      this.qa = !1;
      this.L = null;
      this.Z = "";
      this.W = this.G = 0;
      this.D = [];
      this.Pa = c;
      this.ra = d;
      this.Va = e;
      this.La = new Btb();
      this.Ea = new Dtb();
      this.Ma = new Ftb();
      this.Fa = new Htb();
      this.Ua = new Jtb();
      this.Za = new Ktb();
    },
    iwb = function (a) {
      if (a.j) {
        var b = a.ra(),
          c = a.j.Lp || {};
        b
          ? (c["x-youtube-lounge-xsrf-token"] = b)
          : delete c["x-youtube-lounge-xsrf-token"];
        a.j.Lp = c;
      }
    },
    s8 = function (a) {
      this.scheme = "https";
      this.port = this.domain = "";
      this.j = "/api/lounge";
      this.B = !0;
      a = a || document.location.href;
      var b = Number(g.Ui(4, a)) || "";
      b && (this.port = ":" + b);
      this.domain = g.Vi(a) || "";
      a = g.Eb();
      a.search("MSIE") >= 0 &&
        ((a = a.match(/MSIE ([\d.]+)/)[1]),
        g.Db(a, "10.0") < 0 && (this.B = !1));
    },
    t8 = function (a, b) {
      var c = a.j;
      a.B && (c = a.scheme + "://" + a.domain + a.port + a.j);
      return g.aj(c + b, {});
    },
    jwb = function (a, b) {
      g.ki.call(this);
      var c = this;
      this.Nd = a();
      this.Nd.subscribe("handlerOpened", this.U5, this);
      this.Nd.subscribe("handlerClosed", this.onClosed, this);
      this.Nd.subscribe("handlerError", function (d, e) {
        c.onError(e);
      });
      this.Nd.subscribe("handlerMessage", this.onMessage, this);
      this.j = b;
    },
    kwb = function (a, b, c) {
      var d = this;
      c =
        c === void 0
          ? function () {
              return "";
            }
          : c;
      var e = e === void 0 ? new qvb() : e;
      var f = f === void 0 ? new g.Qp() : f;
      this.pathPrefix = a;
      this.j = b;
      this.Ba = c;
      this.G = f;
      this.W = null;
      this.Z = this.U = 0;
      this.channel = null;
      this.L = 0;
      this.C = new r8(function () {
        d.C.isActive();
        var h;
        ((h = d.channel) == null ? void 0 : Sub(new tvb(h, h.j).j.B)) === 0 &&
          d.connect(d.W, d.U);
      });
      this.D = {};
      this.B = {};
      this.qa = !1;
      this.logger = null;
      this.ra = [];
      this.Ig = void 0;
      this.La = new Btb();
      this.Ea = new Dtb();
      this.Ma = new Ftb();
      this.Fa = new Htb();
    },
    lwb = function (a) {
      g.di(a.channel, "m", function () {
        a.L = 3;
        a.C.reset();
        a.W = null;
        a.U = 0;
        for (var b = g.x(a.ra), c = b.next(); !c.done; c = b.next())
          (c = c.value), a.channel && a.channel.send(c);
        a.ra = [];
        a.publish("webChannelOpened");
        Ctb(a.La, "WEB_CHANNEL");
      });
      g.di(a.channel, "n", function () {
        a.L = 0;
        a.C.isActive() || a.publish("webChannelClosed");
        var b,
          c = (b = a.channel) == null ? void 0 : uvb(new tvb(b, b.j));
        c && (a.ra = [].concat(g.z(c)));
        Etb(a.Ea, "WEB_CHANNEL");
      });
      g.di(a.channel, "p", function (b) {
        var c = b.data;
        c[0] === "gracefulReconnect"
          ? (a.C.start(), a.channel && a.channel.close())
          : a.publish("webChannelMessage", new gwb(c[0], c[1]));
        a.Ig = b.statusCode;
        Gtb(a.Ma, "WEB_CHANNEL");
      });
      g.di(a.channel, "o", function () {
        a.Ig === 401 || a.C.start();
        a.publish("webChannelError");
        Itb(a.Fa, "WEB_CHANNEL");
      });
    },
    mwb = function (a) {
      var b = a.Ba();
      b
        ? (a.D["x-youtube-lounge-xsrf-token"] = b)
        : delete a.D["x-youtube-lounge-xsrf-token"];
    },
    nwb = function (a) {
      g.ki.call(this);
      this.j = a();
      this.j.subscribe("webChannelOpened", this.V5, this);
      this.j.subscribe("webChannelClosed", this.onClosed, this);
      this.j.subscribe("webChannelError", this.onError, this);
      this.j.subscribe("webChannelMessage", this.onMessage, this);
    },
    owb = function (a, b, c, d, e) {
      function f() {
        return new hwb(t8(a, "/bc"), b, !1, c, d);
      }
      c =
        c === void 0
          ? function () {
              return "";
            }
          : c;
      return g.Kr("enable_mdx_web_channel_desktop")
        ? new nwb(function () {
            return new kwb(t8(a, "/wc"), b, c);
          })
        : new jwb(f, e);
    },
    swb = function () {
      var a = pwb;
      qwb();
      u8.push(a);
      rwb();
    },
    v8 = function (a, b) {
      qwb();
      var c = twb(a, String(b));
      u8.length == 0
        ? uwb(c)
        : (rwb(),
          g.nc(u8, function (d) {
            d(c);
          }));
    },
    w8 = function (a) {
      v8("CP", a);
    },
    qwb = function () {
      u8 ||
        ((u8 = g.Oa("yt.mdx.remote.debug.handlers_") || []),
        g.Na("yt.mdx.remote.debug.handlers_", u8));
    },
    uwb = function (a) {
      var b = (x8 + 1) % 50;
      x8 = b;
      y8[b] = a;
      z8 || (z8 = b == 49);
    },
    rwb = function () {
      var a = u8;
      if (y8[0]) {
        var b = z8 ? x8 : -1,
          c = {};
        do
          (c = { t2: void 0 }),
            (b = (b + 1) % 50),
            (c.t2 = y8[b]),
            g.nc(
              a,
              (function (d) {
                return function (e) {
                  e(d.t2);
                };
              })(c)
            );
        while (b != x8);
        y8 = Array(50);
        x8 = -1;
        z8 = !1;
      }
    },
    twb = function (a, b) {
      var c = (Date.now() - vwb) / 1e3;
      c.toFixed && (c = c.toFixed(3));
      var d = [];
      d.push("[", c + "s", "] ");
      d.push("[", "yt.mdx.remote", "] ");
      d.push(a + ": " + b, "\n");
      return d.join("");
    },
    A8 = function (a) {
      g.Dx.call(this);
      this.L = a;
      this.screens = [];
    },
    wwb = function (a, b) {
      var c = a.get(b.uuid) || a.get(b.id);
      if (c)
        return (
          (a = c.name),
          (c.id = b.id || c.id),
          (c.name = b.name),
          (c.token = b.token),
          (c.uuid = b.uuid || c.uuid),
          c.name != a
        );
      a.screens.push(b);
      return !0;
    },
    xwb = function (a, b) {
      var c = a.screens.length != b.length;
      a.screens = g.un(a.screens, function (f) {
        return !!Ytb(b, f);
      });
      for (var d = b.length, e = 0; e < d; e++) c = wwb(a, b[e]) || c;
      return c;
    },
    ywb = function (a, b) {
      var c = a.screens.length;
      a.screens = g.un(a.screens, function (d) {
        return !(d || b ? (!d != !b ? 0 : d.id == b.id) : 1);
      });
      return a.screens.length < c;
    },
    zwb = function (a, b, c, d, e) {
      g.Dx.call(this);
      this.C = a;
      this.U = b;
      this.D = c;
      this.L = d;
      this.G = e;
      this.B = 0;
      this.j = null;
      this.ud = NaN;
    },
    C8 = function (a) {
      A8.call(this, "LocalScreenService");
      this.B = a;
      this.j = NaN;
      B8(this);
      this.info("Initializing with " + Vtb(this.screens));
    },
    Awb = function (a) {
      if (a.screens.length) {
        var b = g.Kl(a.screens, function (d) {
            return d.id;
          }),
          c = t8(a.B, "/pairing/get_lounge_token_batch");
        a.B.sendRequest(
          "POST",
          c,
          { screen_ids: b.join(",") },
          (0, g.Va)(a.s$, a),
          (0, g.Va)(a.r$, a)
        );
      }
    },
    B8 = function (a) {
      if (g.Kr("deprecate_pair_servlet_enabled")) return xwb(a, []);
      var b = Utb(eub());
      b = g.un(b, function (c) {
        return !c.uuid;
      });
      return xwb(a, b);
    },
    D8 = function (a, b) {
      gub(g.Kl(a.screens, Stb));
      b && fub();
    },
    Cwb = function (a, b) {
      g.Dx.call(this);
      this.L = b;
      b = (b = g.Ys("yt-remote-online-screen-ids") || "") ? b.split(",") : [];
      for (var c = {}, d = this.L(), e = d.length, f = 0; f < e; ++f) {
        var h = d[f].id;
        c[h] = g.Yb(b, h);
      }
      this.j = c;
      this.G = a;
      this.C = this.D = NaN;
      this.B = null;
      Bwb("Initialized with " + g.Mi(this.j));
    },
    Dwb = function (a, b, c) {
      var d = t8(a.G, "/pairing/get_screen_availability");
      a.G.sendRequest(
        "POST",
        d,
        { lounge_token: b.token },
        (0, g.Va)(function (e) {
          e = e.screens || [];
          for (var f = e.length, h = 0; h < f; ++h)
            if (e[h].loungeToken == b.token) {
              c(e[h].status == "online");
              return;
            }
          c(!1);
        }, a),
        (0, g.Va)(function () {
          c(!1);
        }, a)
      );
    },
    Fwb = function (a, b) {
      a: if (utb(b) != utb(a.j)) var c = !1;
      else {
        c = g.Ig(b);
        for (var d = c.length, e = 0; e < d; ++e)
          if (!a.j[c[e]]) {
            c = !1;
            break a;
          }
        c = !0;
      }
      c ||
        (Bwb("Updated online screens: " + g.Mi(a.j)),
        (a.j = b),
        a.publish("screenChange"));
      Ewb(a);
    },
    E8 = function (a) {
      isNaN(a.C) || g.Hr(a.C);
      a.C = g.Fr((0, g.Va)(a.cU, a), a.D > 0 && a.D < g.Ya() ? 2e4 : 1e4);
    },
    Bwb = function (a) {
      v8("OnlineScreenService", a);
    },
    Gwb = function (a) {
      var b = {};
      g.nc(a.L(), function (c) {
        c.token
          ? (b[c.token] = c.id)
          : this.xg("Requesting availability of screen w/o lounge token.");
      });
      return b;
    },
    Ewb = function (a) {
      a = g.Ig(
        g.Dg(a.j, function (b) {
          return b;
        })
      );
      g.kc(a);
      a.length
        ? g.Xs("yt-remote-online-screen-ids", a.join(","), 60)
        : g.Zs("yt-remote-online-screen-ids");
    },
    F8 = function (a, b) {
      b = b === void 0 ? !1 : b;
      A8.call(this, "ScreenService");
      this.D = a;
      this.U = b;
      this.j = this.B = null;
      this.C = [];
      this.G = {};
      Hwb(this);
    },
    Jwb = function (a, b, c, d, e, f) {
      a.info("getAutomaticScreenByIds " + c + " / " + b);
      c || (c = a.G[b]);
      var h = a.Xl(),
        l = c ? F7(h, c) : null;
      (c && (a.U || l)) || (l = F7(h, b));
      if (l) {
        l.uuid = b;
        var m = G8(a, l);
        Dwb(a.j, m, function (n) {
          e(n ? m : null);
        });
      } else
        c
          ? Iwb(
              a,
              c,
              (0, g.Va)(function (n) {
                var p = G8(
                  this,
                  new C7({
                    name: d,
                    screenId: c,
                    loungeToken: n,
                    dialId: b || "",
                  })
                );
                Dwb(this.j, p, function (q) {
                  e(q ? p : null);
                });
              }, a),
              f
            )
          : e(null);
    },
    Kwb = function (a, b) {
      for (var c = a.screens.length, d = 0; d < c; ++d)
        if (a.screens[d].name == b) return a.screens[d];
      return null;
    },
    Lwb = function (a, b, c) {
      Dwb(a.j, b, c);
    },
    Iwb = function (a, b, c, d) {
      a.info("requestLoungeToken_ for " + b);
      var e = {
        postParams: { screen_ids: b },
        method: "POST",
        context: a,
        onSuccess: function (f, h) {
          f = (h && h.screens) || [];
          f[0] && f[0].screenId == b
            ? c(f[0].loungeToken)
            : d(Error("Missing lounge token in token response"));
        },
        onError: function () {
          d(Error("Request screen lounge token failed"));
        },
      };
      g.Pr(t8(a.D, "/pairing/get_lounge_token_batch"), e);
    },
    Mwb = function (a) {
      a.screens = a.B.Xl();
      var b = a.G,
        c = {},
        d;
      for (d in b) c[b[d]] = d;
      b = a.screens.length;
      for (d = 0; d < b; ++d) {
        var e = a.screens[d];
        e.uuid = c[e.id] || "";
      }
      a.info("Updated manual screens: " + Vtb(a.screens));
    },
    Hwb = function (a) {
      Nwb(a);
      a.B = new C8(a.D);
      a.B.subscribe("screenChange", (0, g.Va)(a.C$, a));
      Mwb(a);
      a.U || (a.C = Utb(g.Ys("yt-remote-automatic-screen-cache") || []));
      Nwb(a);
      a.info("Initializing automatic screens: " + Vtb(a.C));
      a.j = new Cwb(a.D, (0, g.Va)(a.Xl, a, !0));
      a.j.subscribe(
        "screenChange",
        (0, g.Va)(function () {
          this.publish("onlineScreenChange");
        }, a)
      );
    },
    G8 = function (a, b) {
      var c = a.get(b.id);
      c
        ? ((c.uuid = b.uuid), (b = c))
        : ((c = F7(a.C, b.uuid))
            ? ((c.id = b.id), (c.token = b.token), (b = c))
            : a.C.push(b),
          a.U || Owb(a));
      Nwb(a);
      a.G[b.uuid] = b.id;
      g.Xs("yt-remote-device-id-map", a.G, 31536e3);
      return b;
    },
    Owb = function (a) {
      a = g.un(a.C, function (b) {
        return b.idType != "shortLived";
      });
      g.Xs("yt-remote-automatic-screen-cache", g.Kl(a, Stb));
    },
    Nwb = function (a) {
      a.G = g.Ys("yt-remote-device-id-map") || {};
    },
    H8 = function (a, b, c) {
      g.Dx.call(this);
      this.Fa = c;
      this.D = a;
      this.B = b;
      this.j = null;
    },
    I8 = function (a, b) {
      a.j = b;
      a.publish("sessionScreen", a.j);
    },
    Pwb = function (a, b) {
      a.j && ((a.j.token = b), G8(a.D, a.j));
      a.publish("sessionScreen", a.j);
    },
    J8 = function (a, b) {
      v8(a.Fa, b);
    },
    K8 = function (a, b, c) {
      H8.call(this, a, b, "CastSession");
      var d = this;
      this.config_ = c;
      this.C = null;
      this.ra = (0, g.Va)(this.a6, this);
      this.Ea = (0, g.Va)(this.Oda, this);
      this.qa = g.Fr(function () {
        Qwb(d, null);
      }, 12e4);
      this.U = this.G = this.L = this.W = 0;
      this.Ba = !1;
      this.Z = "unknown";
    },
    Swb = function (a, b) {
      g.Hr(a.U);
      a.U = 0;
      b == 0
        ? Rwb(a)
        : (a.U = g.Fr(function () {
            Rwb(a);
          }, b));
    },
    Rwb = function (a) {
      Twb(a, "getLoungeToken");
      g.Hr(a.G);
      a.G = g.Fr(function () {
        Uwb(a, null);
      }, 3e4);
    },
    Twb = function (a, b) {
      a.info("sendYoutubeMessage_: " + b + " " + g.Mi());
      var c = {};
      c.type = b;
      a.C
        ? a.C.sendMessage(
            "urn:x-cast:com.google.youtube.mdx",
            c,
            function () {},
            (0, g.Va)(function () {
              J8(this, "Failed to send message: " + b + ".");
            }, a)
          )
        : J8(a, "Sending yt message without session: " + g.Mi(c));
    },
    Vwb = function (a, b) {
      b
        ? (a.info("onConnectedScreenId_: Received screenId: " + b),
          (a.j && a.j.id == b) ||
            a.FZ(
              b,
              function (c) {
                I8(a, c);
              },
              function () {
                return a.bk();
              },
              5
            ))
        : a.bk(Error("Waiting for session status timed out."));
    },
    Xwb = function (a, b, c) {
      a.info(
        "onConnectedScreenData_: Received screenData: " + JSON.stringify(b)
      );
      var d = new C7(b);
      Wwb(
        a,
        d,
        function (e) {
          e
            ? ((a.Ba = !0), G8(a.D, d), I8(a, d), (a.Z = "unknown"), Swb(a, c))
            : (g.nr(
                Error(
                  "CastSession, RemoteScreen from screenData: " +
                    JSON.stringify(b) +
                    " is not online."
                )
              ),
              a.bk());
        },
        5
      );
    },
    Qwb = function (a, b) {
      g.Hr(a.qa);
      a.qa = 0;
      b
        ? a.config_.enableCastLoungeToken && b.loungeToken
          ? b.deviceId
            ? (a.j && a.j.uuid == b.deviceId) ||
              (b.loungeTokenRefreshIntervalMs
                ? Xwb(
                    a,
                    {
                      name: a.B.friendlyName,
                      screenId: b.screenId,
                      loungeToken: b.loungeToken,
                      dialId: b.deviceId,
                      screenIdType: "shortLived",
                    },
                    b.loungeTokenRefreshIntervalMs
                  )
                : (g.nr(
                    Error(
                      "No loungeTokenRefreshIntervalMs presents in mdxSessionStatusData: " +
                        JSON.stringify(b) +
                        "."
                    )
                  ),
                  Vwb(a, b.screenId)))
            : (g.nr(
                Error(
                  "No device id presents in mdxSessionStatusData: " +
                    JSON.stringify(b) +
                    "."
                )
              ),
              Vwb(a, b.screenId))
          : Vwb(a, b.screenId)
        : a.bk(Error("Waiting for session status timed out."));
    },
    Uwb = function (a, b) {
      g.Hr(a.G);
      a.G = 0;
      var c = null;
      if (b)
        if (b.loungeToken) {
          var d;
          ((d = a.j) == null ? void 0 : d.token) == b.loungeToken &&
            (c = "staleLoungeToken");
        } else c = "missingLoungeToken";
      else c = "noLoungeTokenResponse";
      c
        ? (a.info(
            "Did not receive a new lounge token in onLoungeToken_ with data: " +
              (JSON.stringify(b) + ", error: " + c)
          ),
          (a.Z = c),
          Swb(a, 3e4))
        : (Pwb(a, b.loungeToken),
          (a.Ba = !1),
          (a.Z = "unknown"),
          Swb(a, b.loungeTokenRefreshIntervalMs));
    },
    Wwb = function (a, b, c, d) {
      g.Hr(a.L);
      a.L = 0;
      Lwb(a.D, b, function (e) {
        e || d < 0
          ? c(e)
          : (a.L = g.Fr(function () {
              Wwb(a, b, c, d - 1);
            }, 300));
      });
    },
    Ywb = function (a) {
      g.Hr(a.W);
      a.W = 0;
      g.Hr(a.L);
      a.L = 0;
      g.Hr(a.qa);
      a.qa = 0;
      g.Hr(a.G);
      a.G = 0;
      g.Hr(a.U);
      a.U = 0;
    },
    L8 = function (a, b, c, d) {
      H8.call(this, a, b, "DialSession");
      this.config_ = d;
      this.C = this.W = null;
      this.Ea = "";
      this.Pa = c;
      this.La = null;
      this.qa = function () {};
      this.Z = NaN;
      this.Ma = (0, g.Va)(this.b6, this);
      this.G = function () {};
      this.U = this.L = 0;
      this.ra = !1;
      this.Ba = "unknown";
    },
    M8 = function (a) {
      var b;
      return !!(
        a.config_.enableDialLoungeToken &&
        ((b = a.C) == null ? 0 : b.getDialAppInfo)
      );
    },
    Zwb = function (a) {
      a.G = a.D.vW(
        a.Ea,
        a.B.label,
        a.B.friendlyName,
        M8(a),
        function (b, c) {
          a.G = function () {};
          a.ra = !0;
          I8(a, b);
          b.idType == "shortLived" && c > 0 && N8(a, c);
        },
        function (b) {
          a.G = function () {};
          a.bk(b);
        }
      );
    },
    $wb = function (a) {
      var b = {};
      b.pairingCode = a.Ea;
      b.theme = a.Pa;
      iub() && (b.env_useStageMdx = 1);
      return g.$i(b);
    },
    axb = function (a) {
      return new Promise(function (b) {
        a.Ea = Wtb();
        if (a.La) {
          var c = new chrome.cast.DialLaunchResponse(!0, $wb(a));
          b(c);
          Zwb(a);
        } else
          (a.qa = function () {
            g.Hr(a.Z);
            a.qa = function () {};
            a.Z = NaN;
            var d = new chrome.cast.DialLaunchResponse(!0, $wb(a));
            b(d);
            Zwb(a);
          }),
            (a.Z = g.Fr(function () {
              a.qa();
            }, 100));
      });
    },
    cxb = function (a, b, c) {
      a.info(
        "initOnConnectedScreenDataPromise_: Received screenData: " +
          JSON.stringify(b)
      );
      var d = new C7(b);
      return new Promise(function (e) {
        bxb(
          a,
          d,
          function (f) {
            f
              ? ((a.ra = !0), G8(a.D, d), I8(a, d), N8(a, c))
              : g.nr(
                  Error(
                    "DialSession, RemoteScreen from screenData: " +
                      JSON.stringify(b) +
                      " is not online."
                  )
                );
            e(f);
          },
          5
        );
      }).then(function (e) {
        return e ? new chrome.cast.DialLaunchResponse(!1) : axb(a);
      });
    },
    dxb = function (a, b) {
      var c = a.W.receiver.label,
        d = a.B.friendlyName;
      return new Promise(function (e) {
        Jwb(
          a.D,
          c,
          b,
          d,
          function (f) {
            f && f.token && I8(a, f);
            e(f);
          },
          function (f) {
            J8(a, "Failed to get DIAL screen: " + f);
            e(null);
          }
        );
      }).then(function (e) {
        return e && e.token ? new chrome.cast.DialLaunchResponse(!1) : axb(a);
      });
    },
    bxb = function (a, b, c, d) {
      g.Hr(a.L);
      a.L = 0;
      Lwb(a.D, b, function (e) {
        e || d < 0
          ? c(e)
          : (a.L = g.Fr(function () {
              bxb(a, b, c, d - 1);
            }, 300));
      });
    },
    N8 = function (a, b) {
      a.info("getDialAppInfoWithTimeout_ " + b);
      M8(a) &&
        (g.Hr(a.U),
        (a.U = 0),
        b == 0
          ? exb(a)
          : (a.U = g.Fr(function () {
              exb(a);
            }, b)));
    },
    exb = function (a) {
      M8(a) &&
        a.C.getDialAppInfo(
          function (b) {
            a.info("getDialAppInfo dialLaunchData: " + JSON.stringify(b));
            b = b.extraData || {};
            var c = null;
            if (b.loungeToken) {
              var d;
              ((d = a.j) == null ? void 0 : d.token) == b.loungeToken &&
                (c = "staleLoungeToken");
            } else c = "missingLoungeToken";
            c
              ? ((a.Ba = c), N8(a, 3e4))
              : ((a.ra = !1),
                (a.Ba = "unknown"),
                Pwb(a, b.loungeToken),
                N8(a, b.loungeTokenRefreshIntervalMs));
          },
          function (b) {
            a.info("getDialAppInfo error: " + b);
            a.Ba = "noLoungeTokenResponse";
            N8(a, 3e4);
          }
        );
    },
    fxb = function (a) {
      g.Hr(a.L);
      a.L = 0;
      g.Hr(a.U);
      a.U = 0;
      a.G();
      a.G = function () {};
      g.Hr(a.Z);
    },
    O8 = function (a, b) {
      H8.call(this, a, b, "ManualSession");
      this.C = g.Fr((0, g.Va)(this.HB, this, null), 150);
    },
    P8 = function (a, b) {
      g.Dx.call(this);
      this.config_ = b;
      this.B = a;
      this.W = b.appId || "233637DE";
      this.D = b.theme || "cl";
      this.Z = b.disableCastApi || !1;
      this.L = b.forceMirroring || !1;
      this.j = null;
      this.U = !1;
      this.C = [];
      this.G = (0, g.Va)(this.Kca, this);
    },
    gxb = function (a, b) {
      return b
        ? g.Wb(
            a.C,
            function (c) {
              return D7(b, c.label);
            },
            a
          )
        : null;
    },
    Q8 = function (a) {
      v8("Controller", a);
    },
    pwb = function (a) {
      window.chrome &&
        chrome.cast &&
        chrome.cast.logMessage &&
        chrome.cast.logMessage(a);
    },
    R8 = function (a) {
      return a.U || !!a.C.length || !!a.j;
    },
    S8 = function (a, b, c) {
      b != a.j &&
        (g.ib(a.j),
        (a.j = b)
          ? (c
              ? a.publish("yt-remote-cast2-receiver-resumed", b.B)
              : a.publish("yt-remote-cast2-receiver-selected", b.B),
            b.subscribe("sessionScreen", (0, g.Va)(a.B1, a, b)),
            b.subscribe("sessionFailed", function () {
              return hxb(a, b);
            }),
            b.j
              ? a.publish("yt-remote-cast2-session-change", b.j)
              : c && a.j.HB(null))
          : a.publish("yt-remote-cast2-session-change", null));
    },
    hxb = function (a, b) {
      a.j == b && a.publish("yt-remote-cast2-session-failed");
    },
    ixb = function (a) {
      var b = a.B.uW(),
        c = a.j && a.j.B;
      a = g.Kl(
        b,
        function (d) {
          c && D7(d, c.label) && (c = null);
          var e = d.uuid ? d.uuid : d.id,
            f = gxb(this, d);
          f
            ? ((f.label = e), (f.friendlyName = d.name))
            : ((f = new chrome.cast.Receiver(e, d.name)),
              (f.receiverType = chrome.cast.ReceiverType.CUSTOM));
          return f;
        },
        a
      );
      c &&
        (c.receiverType != chrome.cast.ReceiverType.CUSTOM &&
          ((c = new chrome.cast.Receiver(c.label, c.friendlyName)),
          (c.receiverType = chrome.cast.ReceiverType.CUSTOM)),
        a.push(c));
      return a;
    },
    pxb = function (a, b, c, d) {
      d.disableCastApi
        ? T8("Cannot initialize because disabled by Mdx config.")
        : jxb()
        ? kxb(b, d) &&
          (lxb(!0),
          window.chrome && chrome.cast && chrome.cast.isAvailable
            ? mxb(a, c)
            : ((window.__onGCastApiAvailable = function (e, f) {
                e
                  ? mxb(a, c)
                  : (U8("Failed to load cast API: " + f),
                    nxb(!1),
                    lxb(!1),
                    g.Zs("yt-remote-cast-available"),
                    g.Zs("yt-remote-cast-receiver"),
                    oxb(),
                    c(!1));
              }),
              d.loadCastApiSetupScript
                ? g.Gv("https://www.gstatic.com/cv/js/sender/v1/cast_sender.js")
                : window.navigator.userAgent.indexOf("Android") >= 0 &&
                  window.navigator.userAgent.indexOf("Chrome/") >= 0 &&
                  window.navigator.presentation
                ? kub() >= 60 && tub()
                : !window.chrome ||
                  !window.navigator.presentation ||
                  window.navigator.userAgent.indexOf("Edge") >= 0
                ? oub()
                : kub() >= 89
                ? vub()
                : (sub(), M7(uub.map(pub)))))
        : T8("Cannot initialize because not running Chrome");
    },
    oxb = function () {
      T8("dispose");
      var a = V8();
      a && a.dispose();
      g.Na("yt.mdx.remote.cloudview.instance_", null);
      qxb(!1);
      g.Ev(rxb);
      rxb.length = 0;
    },
    W8 = function () {
      return !!g.Ys("yt-remote-cast-installed");
    },
    sxb = function () {
      var a = g.Ys("yt-remote-cast-receiver");
      return a ? a.friendlyName : null;
    },
    txb = function () {
      T8("clearCurrentReceiver");
      g.Zs("yt-remote-cast-receiver");
    },
    uxb = function () {
      return W8()
        ? V8()
          ? V8().getCastSession()
          : (U8("getCastSelector: Cast is not initialized."), null)
        : (U8("getCastSelector: Cast API is not installed!"), null);
    },
    vxb = function () {
      W8()
        ? V8()
          ? X8()
            ? (T8("Requesting cast selector."), V8().requestSession())
            : (T8("Wait for cast API to be ready to request the session."),
              rxb.push(g.Dv("yt-remote-cast2-api-ready", vxb)))
          : U8("requestCastSelector: Cast is not initialized.")
        : U8("requestCastSelector: Cast API is not installed!");
    },
    Y8 = function (a, b) {
      X8()
        ? V8().setConnectedScreenStatus(a, b)
        : U8("setConnectedScreenStatus called before ready.");
    },
    jxb = function () {
      var a = g.Eb().search(/ (CrMo|Chrome|CriOS)\//) >= 0;
      return g.$F || a;
    },
    wxb = function (a, b) {
      V8().init(a, b);
    },
    kxb = function (a, b) {
      var c = !1;
      V8() ||
        ((a = new P8(a, b)),
        a.subscribe("yt-remote-cast2-availability-change", function (d) {
          g.Xs("yt-remote-cast-available", d);
          K7("yt-remote-cast2-availability-change", d);
        }),
        a.subscribe("yt-remote-cast2-receiver-selected", function (d) {
          T8("onReceiverSelected: " + d.friendlyName);
          g.Xs("yt-remote-cast-receiver", d);
          K7("yt-remote-cast2-receiver-selected", d);
        }),
        a.subscribe("yt-remote-cast2-receiver-resumed", function (d) {
          T8("onReceiverResumed: " + d.friendlyName);
          g.Xs("yt-remote-cast-receiver", d);
          K7("yt-remote-cast2-receiver-resumed", d);
        }),
        a.subscribe("yt-remote-cast2-session-change", function (d) {
          T8("onSessionChange: " + E7(d));
          d || g.Zs("yt-remote-cast-receiver");
          K7("yt-remote-cast2-session-change", d);
        }),
        g.Na("yt.mdx.remote.cloudview.instance_", a),
        (c = !0));
      T8("cloudview.createSingleton_: " + c);
      return c;
    },
    V8 = function () {
      return g.Oa("yt.mdx.remote.cloudview.instance_");
    },
    mxb = function (a, b) {
      nxb(!0);
      lxb(!1);
      wxb(a, function (c) {
        c
          ? (qxb(!0), g.Fv("yt-remote-cast2-api-ready"))
          : (U8("Failed to initialize cast API."),
            nxb(!1),
            g.Zs("yt-remote-cast-available"),
            g.Zs("yt-remote-cast-receiver"),
            oxb());
        b(c);
      });
    },
    T8 = function (a) {
      v8("cloudview", a);
    },
    U8 = function (a) {
      v8("cloudview", a);
    },
    nxb = function (a) {
      T8("setCastInstalled_ " + a);
      g.Xs("yt-remote-cast-installed", a);
    },
    X8 = function () {
      return !!g.Oa("yt.mdx.remote.cloudview.apiReady_");
    },
    qxb = function (a) {
      T8("setApiReady_ " + a);
      g.Na("yt.mdx.remote.cloudview.apiReady_", a);
    },
    lxb = function (a) {
      g.Na("yt.mdx.remote.cloudview.initializing_", a);
    },
    Z8 = function (a) {
      this.index = -1;
      this.videoId = this.listId = "";
      this.volume = this.playerState = -1;
      this.muted = !1;
      this.audioTrackId = null;
      this.L = this.U = 0;
      this.trackData = null;
      this.Zl = this.mq = !1;
      this.W = this.G = this.j = this.D = 0;
      this.C = NaN;
      this.B = !1;
      this.reset(a);
    },
    xxb = function (a) {
      a.audioTrackId = null;
      a.trackData = null;
      a.playerState = -1;
      a.mq = !1;
      a.Zl = !1;
      a.U = 0;
      a.L = g.Ya();
      a.D = 0;
      a.j = 0;
      a.G = 0;
      a.W = 0;
      a.C = NaN;
      a.B = !1;
    },
    $8 = function (a) {
      return a.isPlaying() ? (g.Ya() - a.L) / 1e3 : 0;
    },
    a9 = function (a, b) {
      a.U = b;
      a.L = g.Ya();
    },
    b9 = function (a) {
      switch (a.playerState) {
        case 1:
        case 1081:
          return (g.Ya() - a.L) / 1e3 + a.U;
        case -1e3:
          return 0;
      }
      return a.U;
    },
    c9 = function (a, b, c) {
      var d = a.videoId;
      a.videoId = b;
      a.index = c;
      b != d && xxb(a);
    },
    yxb = function (a) {
      var b = {};
      b.index = a.index;
      b.listId = a.listId;
      b.videoId = a.videoId;
      b.playerState = a.playerState;
      b.volume = a.volume;
      b.muted = a.muted;
      b.audioTrackId = a.audioTrackId;
      b.trackData = g.Qg(a.trackData);
      b.hasPrevious = a.mq;
      b.hasNext = a.Zl;
      b.playerTime = a.U;
      b.playerTimeAt = a.L;
      b.seekableStart = a.D;
      b.seekableEnd = a.j;
      b.duration = a.G;
      b.loadedTime = a.W;
      b.liveIngestionTime = a.C;
      return b;
    },
    e9 = function (a, b) {
      g.Dx.call(this);
      var c = this;
      this.C = 0;
      this.D = a;
      this.L = [];
      this.G = new dwb();
      this.B = this.j = null;
      this.Z = (0, g.Va)(this.Aba, this);
      this.U = (0, g.Va)(this.aH, this);
      this.W = (0, g.Va)(this.zba, this);
      this.qa = (0, g.Va)(this.Cba, this);
      var d = 0;
      a
        ? ((d = a.getProxyState()),
          d != 3 && (a.subscribe("proxyStateChange", this.yU, this), zxb(this)))
        : (d = 3);
      d != 0 &&
        (b
          ? this.yU(d)
          : g.Fr(function () {
              c.yU(d);
            }, 0));
      (a = uxb()) && d9(this, a);
      this.subscribe("yt-remote-cast2-session-change", this.qa);
    },
    f9 = function (a) {
      return new Z8(a.D.getPlayerContextData());
    },
    zxb = function (a) {
      g.nc(
        "nowAutoplaying autoplayDismissed remotePlayerChange remoteQueueChange autoplayModeChange autoplayUpNext previousNextChange multiStateLoopEnabled loopModeChange".split(
          " "
        ),
        function (b) {
          this.L.push(this.D.subscribe(b, g.Xa(this.Ica, b), this));
        },
        a
      );
    },
    Axb = function (a) {
      g.nc(
        a.L,
        function (b) {
          this.D.unsubscribeByKey(b);
        },
        a
      );
      a.L.length = 0;
    },
    g9 = function (a) {
      return a.getState() == 1;
    },
    h9 = function (a, b) {
      var c = a.G;
      c.j.length + c.B.length < 50 && a.G.enqueue(b);
    },
    Bxb = function (a, b, c) {
      var d = f9(a);
      a9(d, c);
      d.playerState != -1e3 && (d.playerState = b);
      i9(a, d);
    },
    j9 = function (a, b, c) {
      a.D.sendMessage(b, c);
    },
    i9 = function (a, b) {
      Axb(a);
      a.D.setPlayerContextData(yxb(b));
      zxb(a);
    },
    d9 = function (a, b) {
      a.B &&
        (a.B.removeUpdateListener(a.Z),
        a.B.removeMediaListener(a.U),
        a.aH(null));
      a.B = b;
      a.B &&
        (w8("Setting cast session: " + a.B.sessionId),
        a.B.addUpdateListener(a.Z),
        a.B.addMediaListener(a.U),
        a.B.media.length && a.aH(a.B.media[0]));
    },
    Cxb = function (a) {
      var b = a.j.media,
        c = a.j.customData;
      if (b && c) {
        var d = f9(a);
        b.contentId != d.videoId &&
          w8("Cast changing video to: " + b.contentId);
        d.videoId = b.contentId;
        d.playerState = c.playerState;
        a9(d, a.j.getEstimatedTime());
        i9(a, d);
      } else w8("No cast media video. Ignoring state update.");
    },
    k9 = function (a, b, c) {
      return (0, g.Va)(function (d) {
        this.xg(
          "Failed to " + b + " with cast v2 channel. Error code: " + d.code
        );
        d.code != chrome.cast.ErrorCode.TIMEOUT &&
          (this.xg("Retrying " + b + " using MDx browser channel."),
          j9(this, b, c));
      }, a);
    },
    n9 = function (a, b, c, d) {
      d = d === void 0 ? !1 : d;
      g.Dx.call(this);
      var e = this;
      this.L = NaN;
      this.Ea = !1;
      this.Z = this.W = this.ra = this.Ba = NaN;
      this.qa = [];
      this.G = this.U = this.D = this.j = this.B = null;
      this.La = a;
      this.Ma = d;
      this.qa.push(
        g.Ms(window, "beforeunload", function () {
          e.JA(2);
        })
      );
      this.C = [];
      this.j = new Z8();
      this.Pa = b.id;
      this.Fa = b.idType;
      this.B = owb(this.La, c, this.zW, this.Fa == "shortLived", this.Pa);
      this.B.listen("channelOpened", function () {
        Dxb(e);
      });
      this.B.listen("channelClosed", function () {
        l9("Channel closed");
        isNaN(e.L) ? I7(!0) : I7();
        e.dispose();
      });
      this.B.listen("channelError", function (f) {
        I7();
        isNaN(e.VF())
          ? (f == 1 &&
              e.Fa == "shortLived" &&
              e.publish("browserChannelAuthError", f),
            l9("Channel error: " + f + " without reconnection"),
            e.dispose())
          : ((e.Ea = !0),
            l9(
              "Channel error: " + f + " with reconnection in " + e.VF() + " ms"
            ),
            m9(e, 2));
      });
      this.B.listen("channelMessage", function (f) {
        Exb(e, f);
      });
      this.B.Ys(b.token);
      this.subscribe("remoteQueueChange", function () {
        var f = e.j.videoId;
        g.$s() && g.Xs("yt-remote-session-video-id", f);
      });
    },
    Fxb = function (a) {
      return g.Wb(a.C, function (b) {
        return b.type == "LOUNGE_SCREEN";
      });
    },
    l9 = function (a) {
      v8("conn", a);
    },
    m9 = function (a, b) {
      a.publish("proxyStateChange", b);
    },
    Gxb = function (a) {
      a.L = g.Fr(function () {
        l9("Connecting timeout");
        a.JA(1);
      }, 2e4);
    },
    Hxb = function (a) {
      g.Hr(a.L);
      a.L = NaN;
    },
    Ixb = function (a) {
      g.Hr(a.Ba);
      a.Ba = NaN;
    },
    Kxb = function (a) {
      Jxb(a);
      a.ra = g.Fr(function () {
        o9(a, "getNowPlaying");
      }, 2e4);
    },
    Jxb = function (a) {
      g.Hr(a.ra);
      a.ra = NaN;
    },
    Dxb = function (a) {
      l9("Channel opened");
      a.Ea &&
        ((a.Ea = !1),
        Ixb(a),
        (a.Ba = g.Fr(function () {
          l9("Timing out waiting for a screen.");
          a.JA(1);
        }, 15e3)));
    },
    Mxb = function (a, b) {
      var c = null;
      if (b) {
        var d = Fxb(a);
        d &&
          (c = {
            clientName: d.clientName,
            deviceMake: d.brand,
            deviceModel: d.model,
            osVersion: d.osVersion,
          });
      }
      g.Na("yt.mdx.remote.remoteClient_", c);
      b && (Hxb(a), Ixb(a));
      c = a.B.vB() && isNaN(a.L);
      b == c
        ? b && (m9(a, 1), o9(a, "getSubtitlesTrack"))
        : b
        ? (a.AZ() && a.j.reset(), m9(a, 1), o9(a, "getNowPlaying"), Lxb(a))
        : a.JA(1);
    },
    Nxb = function (a, b) {
      var c = b.params.videoId;
      delete b.params.videoId;
      c == a.j.videoId &&
        (g.Mg(b.params) ? (a.j.trackData = null) : (a.j.trackData = b.params),
        a.publish("remotePlayerChange"));
    },
    Oxb = function (a, b, c) {
      var d = b.params.videoId || b.params.video_id,
        e = parseInt(b.params.currentIndex, 10);
      a.j.listId = b.params.listId || a.j.listId;
      c9(a.j, d, e);
      a.publish("remoteQueueChange", c);
    },
    Qxb = function (a, b) {
      b.params = b.params || {};
      Oxb(a, b, "NOW_PLAYING_MAY_CHANGE");
      Pxb(a, b);
      a.publish("autoplayDismissed");
    },
    Pxb = function (a, b) {
      var c = parseInt(b.params.currentTime || b.params.current_time, 10);
      a9(a.j, isNaN(c) ? 0 : c);
      c = parseInt(b.params.state, 10);
      c = isNaN(c) ? -1 : c;
      c == -1 && a.j.playerState == -1e3 && (c = -1e3);
      a.j.playerState = c;
      c = Number(b.params.loadedTime);
      a.j.W = isNaN(c) ? 0 : c;
      a.j.Xq(Number(b.params.duration));
      c = a.j;
      var d = Number(b.params.liveIngestionTime);
      c.C = d;
      c.B = isNaN(d) ? !1 : !0;
      c = a.j;
      d = Number(b.params.seekableStartTime);
      b = Number(b.params.seekableEndTime);
      c.D = isNaN(d) ? 0 : d;
      c.j = isNaN(b) ? 0 : b;
      a.j.playerState == 1 ? Kxb(a) : Jxb(a);
      a.publish("remotePlayerChange");
    },
    Rxb = function (a, b) {
      if (a.j.playerState != -1e3) {
        var c = 1085;
        switch (parseInt(b.params.adState, 10)) {
          case 1:
            c = 1081;
            break;
          case 2:
            c = 1084;
            break;
          case 0:
            c = 1083;
        }
        a.j.playerState = c;
        b = parseInt(b.params.currentTime, 10);
        a9(a.j, isNaN(b) ? 0 : b);
        a.publish("remotePlayerChange");
      }
    },
    Sxb = function (a, b) {
      var c = b.params.muted == "true";
      a.j.volume = parseInt(b.params.volume, 10);
      a.j.muted = c;
      a.publish("remotePlayerChange");
    },
    Txb = function (a, b) {
      a.U = b.params.videoId;
      a.publish("nowAutoplaying", parseInt(b.params.timeout, 10));
    },
    Uxb = function (a, b) {
      a.U = b.params.videoId || null;
      a.publish("autoplayUpNext", a.U);
    },
    Vxb = function (a, b) {
      a.G = b.params.autoplayMode;
      a.publish("autoplayModeChange", a.G);
      a.G == "DISABLED" && a.publish("autoplayDismissed");
    },
    Wxb = function (a, b) {
      var c = b.params.hasNext == "true";
      a.j.mq = b.params.hasPrevious == "true";
      a.j.Zl = c;
      a.publish("previousNextChange");
    },
    Exb = function (a, b) {
      b = b.message;
      b.params
        ? l9("Received: action=" + b.action + ", params=" + g.Mi(b.params))
        : l9("Received: action=" + b.action + " {}");
      switch (b.action) {
        case "loungeStatus":
          b = x7(b.params.devices);
          a.C = g.Kl(b, function (d) {
            return new Ptb(d);
          });
          b = !!g.Wb(a.C, function (d) {
            return d.type == "LOUNGE_SCREEN";
          });
          Mxb(a, b);
          b = a.E_("mlm");
          a.publish("multiStateLoopEnabled", b);
          break;
        case "loungeScreenDisconnected":
          g.ac(a.C, function (d) {
            return d.type == "LOUNGE_SCREEN";
          });
          Mxb(a, !1);
          break;
        case "remoteConnected":
          var c = new Ptb(x7(b.params.device));
          g.Wb(a.C, function (d) {
            return c ? d.id == c.id : !1;
          }) || ttb(a.C, c);
          break;
        case "remoteDisconnected":
          c = new Ptb(x7(b.params.device));
          g.ac(a.C, function (d) {
            return c ? d.id == c.id : !1;
          });
          break;
        case "gracefulDisconnect":
          break;
        case "playlistModified":
          Oxb(a, b, "QUEUE_MODIFIED");
          break;
        case "nowPlaying":
          Qxb(a, b);
          break;
        case "onStateChange":
          Pxb(a, b);
          break;
        case "onAdStateChange":
          Rxb(a, b);
          break;
        case "onVolumeChanged":
          Sxb(a, b);
          break;
        case "onSubtitlesTrackChanged":
          Nxb(a, b);
          break;
        case "nowAutoplaying":
          Txb(a, b);
          break;
        case "autoplayDismissed":
          a.publish("autoplayDismissed");
          break;
        case "autoplayUpNext":
          Uxb(a, b);
          break;
        case "onAutoplayModeChanged":
          Vxb(a, b);
          break;
        case "onHasPreviousNextChanged":
          Wxb(a, b);
          break;
        case "requestAssistedSignIn":
          a.publish("assistedSignInRequested", b.params.authCode);
          break;
        case "onLoopModeChanged":
          a.publish("loopModeChange", b.params.loopMode);
          break;
        default:
          l9("Unrecognized action: " + b.action);
      }
    },
    Lxb = function (a) {
      g.Hr(a.Z);
      a.Z = g.Fr(function () {
        a.JA(1);
      }, 864e5);
    },
    o9 = function (a, b, c) {
      c
        ? l9("Sending: action=" + b + ", params=" + g.Mi(c))
        : l9("Sending: action=" + b);
      a.B.sendMessage(b, c);
    },
    Xxb = function (a) {
      A8.call(this, "ScreenServiceProxy");
      this.Ch = a;
      this.j = [];
      this.j.push(this.Ch.$_s("screenChange", (0, g.Va)(this.f6, this)));
      this.j.push(this.Ch.$_s("onlineScreenChange", (0, g.Va)(this.rca, this)));
    },
    byb = function (a, b) {
      hub();
      if (!J7 || !J7.get("yt-remote-disable-remote-module-for-dev")) {
        b = g.kr("MDX_CONFIG") || b;
        Ztb();
        cub();
        p9 ||
          ((p9 = new s8(b ? b.loungeApiHost : void 0)),
          iub() && (p9.j = "/api/loungedev"));
        q9 ||
          ((q9 = g.Oa("yt.mdx.remote.deferredProxies_") || []),
          g.Na("yt.mdx.remote.deferredProxies_", q9));
        Yxb();
        var c = r9();
        if (!c) {
          var d = new F8(p9, b ? b.disableAutomaticScreenCache || !1 : !1);
          g.Na("yt.mdx.remote.screenService_", d);
          c = r9();
          var e = {};
          b &&
            (e = {
              appId: b.appId,
              disableDial: b.disableDial,
              theme: b.theme,
              loadCastApiSetupScript: b.loadCastApiSetupScript,
              disableCastApi: b.disableCastApi,
              enableDialLoungeToken: b.enableDialLoungeToken,
              enableCastLoungeToken: b.enableCastLoungeToken,
              forceMirroring: b.forceMirroring,
            });
          g.Na(
            "yt.mdx.remote.enableConnectWithInitialState_",
            b ? b.enableConnectWithInitialState || !1 : !1
          );
          pxb(
            a,
            d,
            function (f) {
              f
                ? s9() && Y8(s9(), "YouTube TV")
                : d.subscribe("onlineScreenChange", function () {
                    K7("yt-remote-receiver-availability-change");
                  });
            },
            e
          );
        }
        b &&
          !g.Oa("yt.mdx.remote.initialized_") &&
          (g.Na("yt.mdx.remote.initialized_", !0),
          t9("Initializing: " + g.Mi(b)),
          u9.push(
            g.Dv("yt-remote-cast2-api-ready", function () {
              K7("yt-remote-api-ready");
            })
          ),
          u9.push(
            g.Dv("yt-remote-cast2-availability-change", function () {
              K7("yt-remote-receiver-availability-change");
            })
          ),
          u9.push(
            g.Dv("yt-remote-cast2-receiver-selected", function () {
              v9(null);
              K7("yt-remote-auto-connect", "cast-selector-receiver");
            })
          ),
          u9.push(
            g.Dv("yt-remote-cast2-receiver-resumed", function () {
              K7("yt-remote-receiver-resumed", "cast-selector-receiver");
            })
          ),
          u9.push(g.Dv("yt-remote-cast2-session-change", Zxb)),
          u9.push(
            g.Dv("yt-remote-connection-change", function (f) {
              f ? Y8(s9(), "YouTube TV") : w9() || (Y8(null, null), txb());
            })
          ),
          u9.push(
            g.Dv("yt-remote-cast2-session-failed", function () {
              K7("yt-remote-connection-failed");
            })
          ),
          (a = $xb()),
          b.isAuto && (a.id += "#dial"),
          (e = b.capabilities || []),
          g.Kr("desktop_enable_autoplay") && e.push("atp"),
          e.length > 0 && (a.capabilities = e),
          (a.name = b.device),
          (a.app = b.app),
          (b = b.theme) && (a.theme = b),
          t9(" -- with channel params: " + g.Mi(a)),
          a
            ? (g.Xs("yt-remote-session-app", a.app),
              g.Xs("yt-remote-session-name", a.name))
            : (g.Zs("yt-remote-session-app"), g.Zs("yt-remote-session-name")),
          g.Na("yt.mdx.remote.channelParams_", a),
          c.start(),
          s9() || ayb());
      }
    },
    cyb = function () {
      var a = r9().Ch.$_gos();
      var b = x9();
      b && y9() && (Ytb(a, b) || a.push(b));
      return Xtb(a);
    },
    eyb = function () {
      var a = dyb();
      !a &&
        W8() &&
        sxb() &&
        (a = { key: "cast-selector-receiver", name: sxb() });
      return a;
    },
    dyb = function () {
      var a = cyb(),
        b = x9();
      b || (b = w9());
      return g.Wb(a, function (c) {
        return b && D7(b, c.key) ? !0 : !1;
      });
    },
    x9 = function () {
      var a = s9();
      if (!a) return null;
      var b = r9().Xl();
      return F7(b, a);
    },
    Zxb = function (a) {
      t9("remote.onCastSessionChange_: " + E7(a));
      if (a) {
        var b = x9();
        if (b && b.id == a.id) {
          if (
            (Y8(b.id, "YouTube TV"), a.idType == "shortLived" && (a = a.token))
          )
            z9 && (z9.token = a), (b = y9()) && b.Ys(a);
        } else b && A9(), B9(a, 1);
      } else y9() && A9();
    },
    A9 = function () {
      X8() ? V8().stopSession() : U8("stopSession called before API ready.");
      var a = y9();
      a && (a.disconnect(1), fyb(null));
    },
    gyb = function () {
      var a = y9();
      return !!a && a.getProxyState() != 3;
    },
    t9 = function (a) {
      v8("remote", a);
    },
    r9 = function () {
      if (!hyb) {
        var a = g.Oa("yt.mdx.remote.screenService_");
        hyb = a ? new Xxb(a) : null;
      }
      return hyb;
    },
    s9 = function () {
      return g.Oa("yt.mdx.remote.currentScreenId_");
    },
    iyb = function (a) {
      g.Na("yt.mdx.remote.currentScreenId_", a);
    },
    jyb = function () {
      return g.Oa("yt.mdx.remote.connectData_");
    },
    v9 = function (a) {
      g.Na("yt.mdx.remote.connectData_", a);
    },
    y9 = function () {
      return g.Oa("yt.mdx.remote.connection_");
    },
    fyb = function (a) {
      var b = y9();
      v9(null);
      a || iyb("");
      g.Na("yt.mdx.remote.connection_", a);
      q9 &&
        (g.nc(q9, function (c) {
          c(a);
        }),
        (q9.length = 0));
      b && !a
        ? K7("yt-remote-connection-change", !1)
        : !b && a && K7("yt-remote-connection-change", !0);
    },
    w9 = function () {
      var a = g.$s();
      if (!a) return null;
      var b = r9();
      if (!b) return null;
      b = b.Xl();
      return F7(b, a);
    },
    B9 = function (a, b) {
      s9();
      x9() && x9();
      if (C9) z9 = a;
      else {
        iyb(a.id);
        var c = g.Oa("yt.mdx.remote.enableConnectWithInitialState_") || !1;
        a = new n9(p9, a, $xb(), c);
        a.connect(b, jyb());
        a.subscribe("beforeDisconnect", function (d) {
          K7("yt-remote-before-disconnect", d);
        });
        a.subscribe("beforeDispose", function () {
          y9() && (y9(), fyb(null));
        });
        a.subscribe("browserChannelAuthError", function () {
          var d = x9();
          d &&
            d.idType == "shortLived" &&
            (X8()
              ? V8().handleBrowserChannelAuthError()
              : U8("refreshLoungeToken called before API ready."));
        });
        fyb(a);
      }
    },
    ayb = function () {
      var a = w9();
      a
        ? (t9("Resume connection to: " + E7(a)), B9(a, 0))
        : (I7(),
          txb(),
          t9("Skipping connecting because no session screen found."));
    },
    Yxb = function () {
      var a = $xb();
      if (g.Mg(a)) {
        a = H7();
        var b = g.Ys("yt-remote-session-name") || "",
          c = g.Ys("yt-remote-session-app") || "";
        a = { device: "REMOTE_CONTROL", id: a, name: b, app: c, mdxVersion: 3 };
        a.authuser = String(g.kr("SESSION_INDEX", "0"));
        (b = g.kr("DELEGATED_SESSION_ID")) && (a.pageId = String(b));
        g.Na("yt.mdx.remote.channelParams_", a);
      }
    },
    $xb = function () {
      return g.Oa("yt.mdx.remote.channelParams_") || {};
    },
    myb = function (a, b, c) {
      g.O.call(this);
      var d = this;
      this.module = a;
      this.K = b;
      this.Lc = c;
      this.events = new g.dG(this);
      this.D = !1;
      this.G = new g.$G(64);
      this.j = new g.op(this.s3, 500, this);
      this.B = new g.op(this.t3, 1e3, this);
      this.U = new N7(this.lga, 0, this);
      this.C = {};
      this.W = new g.op(this.m4, 1e3, this);
      this.L = new O7(this.seekTo, 1e3, this);
      this.Z = this.events.T(this.K, "onVolumeChange", function (e) {
        kyb(d, e);
      });
      g.P(this, this.events);
      this.events.T(b, "onCaptionsTrackListChanged", this.cca);
      this.events.T(b, "captionschanged", this.xba);
      this.events.T(b, "captionssettingschanged", this.B3);
      this.events.T(b, "videoplayerreset", this.wM);
      this.events.T(b, "mdxautoplaycancel", function () {
        d.Lc.LY();
      });
      b.N("enable_mdx_video_play_directly") &&
        this.events.T(b, "videodatachange", function () {
          lyb(d.module) || D9(d) || E9(d, 0);
        });
      a = this.Lc;
      a.Ja();
      a.subscribe("proxyStateChange", this.v1, this);
      a.subscribe("remotePlayerChange", this.iH, this);
      a.subscribe("remoteQueueChange", this.wM, this);
      a.subscribe("previousNextChange", this.q1, this);
      a.subscribe("nowAutoplaying", this.l1, this);
      a.subscribe("autoplayDismissed", this.P0, this);
      g.P(this, this.j);
      g.P(this, this.B);
      g.P(this, this.U);
      g.P(this, this.W);
      g.P(this, this.L);
      this.B3();
      this.wM();
      this.iH();
    },
    kyb = function (a, b) {
      if (D9(a)) {
        a.Lc.unsubscribe("remotePlayerChange", a.iH, a);
        var c = Math.round(b.volume);
        b = !!b.muted;
        var d = f9(a.Lc);
        if (c !== d.volume || b !== d.muted) a.Lc.setVolume(c, b), a.W.start();
        a.Lc.subscribe("remotePlayerChange", a.iH, a);
      }
    },
    nyb = function (a) {
      a.Wc(0);
      a.j.stop();
      a.Ic(new g.$G(64));
    },
    oyb = function (a, b) {
      if (D9(a) && !a.D) {
        var c = null;
        b &&
          ((c = { style: a.K.getSubtitlesUserSettings() }),
          Object.assign(c, b));
        a.Lc.yW(a.K.getVideoData(1).videoId, c);
        a.C = f9(a.Lc).trackData;
      }
    },
    E9 = function (a, b) {
      var c = a.K.getPlaylist();
      if (c == null ? 0 : c.listId) {
        var d = c.index;
        var e = c.listId.toString();
      }
      c = a.K.getVideoData(1);
      a.Lc.playVideo(c.videoId, b, d, e, c.playerParams, c.Fa, stb(c));
      a.Ic(new g.$G(1));
    },
    pyb = function (a, b) {
      if (b) {
        var c = a.K.getOption("captions", "tracklist", { o_: 1 });
        c && c.length
          ? (a.K.setOption("captions", "track", b), (a.D = !1))
          : (a.K.loadModule("captions"), (a.D = !0));
      } else a.K.setOption("captions", "track", {});
    },
    D9 = function (a) {
      return f9(a.Lc).videoId === a.K.getVideoData(1).videoId;
    },
    F9 = function () {
      g.S.call(this, {
        J: "div",
        S: "ytp-mdx-popup-dialog",
        Y: { role: "dialog" },
        X: [
          {
            J: "div",
            S: "ytp-mdx-popup-dialog-inner-content",
            X: [
              { J: "div", S: "ytp-mdx-popup-title", ya: "You're signed out" },
              {
                J: "div",
                S: "ytp-mdx-popup-description",
                ya: "Videos you watch may be added to the TV's watch history and influence TV recommendations. To avoid this, cancel and sign in to YouTube on your computer.",
              },
              {
                J: "div",
                S: "ytp-mdx-privacy-popup-buttons",
                X: [
                  {
                    J: "button",
                    Ka: ["ytp-button", "ytp-mdx-privacy-popup-cancel"],
                    ya: "Cancel",
                  },
                  {
                    J: "button",
                    Ka: ["ytp-button", "ytp-mdx-privacy-popup-confirm"],
                    ya: "Confirm",
                  },
                ],
              },
            ],
          },
        ],
      });
      this.j = new g.Ay(this, 250);
      this.cancelButton = this.Da("ytp-mdx-privacy-popup-cancel");
      this.confirmButton = this.Da("ytp-mdx-privacy-popup-confirm");
      g.P(this, this.j);
      this.T(this.cancelButton, "click", this.B);
      this.T(this.confirmButton, "click", this.C);
    },
    G9 = function (a) {
      g.S.call(this, {
        J: "div",
        S: "ytp-remote",
        X: [
          {
            J: "div",
            S: "ytp-remote-display-status",
            X: [
              { J: "div", S: "ytp-remote-display-status-icon", X: [g.Jsa()] },
              {
                J: "div",
                S: "ytp-remote-display-status-text",
                ya: "{{statustext}}",
              },
            ],
          },
        ],
      });
      this.api = a;
      this.j = new g.Ay(this, 250);
      g.P(this, this.j);
      this.T(a, "presentingplayerstatechange", this.onStateChange);
      this.zd(a.getPlayerStateObject());
    },
    H9 = function (a, b) {
      g.NX.call(this, "Play on", 1, a, b);
      this.K = a;
      this.Iv = {};
      this.T(a, "onMdxReceiversChange", this.D);
      this.T(a, "presentingplayerstatechange", this.D);
      this.D();
    },
    qyb = function (a) {
      g.qY.call(this, a);
      this.Gq = { key: Wtb(), name: "This computer" };
      this.Om = null;
      this.subscriptions = [];
      this.IT = this.Lc = null;
      this.Iv = [this.Gq];
      this.Zt = this.Gq;
      this.Oe = new g.$G(64);
      this.T_ = 0;
      this.Ei = -1;
      this.BH = !1;
      this.zH = this.sC = null;
      if (!g.UP(this.player.V()) && !g.jz(this.player.V())) {
        a = this.player;
        var b = g.hS(a);
        b && (b = b.dn()) && ((b = new H9(a, b)), g.P(this, b));
        b = new G9(a);
        g.P(this, b);
        g.wS(a, b.element, 4);
        this.sC = new F9();
        g.P(this, this.sC);
        g.wS(a, this.sC.element, 4);
        this.BH = !!w9();
      }
    },
    I9 = function (a) {
      a.zH &&
        (a.player.removeEventListener("presentingplayerstatechange", a.zH),
        (a.zH = null));
    },
    ryb = function (a, b, c) {
      a.Oe = c;
      a.player.publish("presentingplayerstatechange", new g.My(c, b));
    },
    J9 = function (a, b) {
      if (b.key !== a.Zt.key)
        if (b.key === a.Gq.key) A9();
        else if (
          (lyb(a) && syb(a),
          (a.Zt = b),
          !a.player
            .V()
            .N("disable_mdx_connection_in_mdx_module_for_music_web") ||
            !g.jz(a.player.V()))
        ) {
          var c = a.player.getPlaylistId();
          var d = a.player.getVideoData(1);
          var e = d.videoId;
          if (
            (!c && !e) ||
            ((a.player.getAppState() === 2 || a.player.getAppState() === 1) &&
              a.player
                .V()
                .N("should_clear_video_data_on_player_cued_unstarted"))
          )
            d = null;
          else {
            var f = a.player.getPlaylist();
            if (f) {
              var h = [];
              for (var l = 0; l < f.getLength(); l++) h[l] = g.nY(f, l).videoId;
            } else h = [e];
            f = a.player.getCurrentTime(1);
            a = {
              videoIds: h,
              listId: c,
              videoId: e,
              playerParams: d.playerParams,
              clickTrackingParams: d.Fa,
              index: Math.max(a.player.getPlaylistIndex(), 0),
              currentTime: f === 0 ? void 0 : f,
            };
            (d = stb(d)) && (a.locationInfo = d);
            d = a;
          }
          t9("Connecting to: " + g.Mi(b));
          b.key == "cast-selector-receiver"
            ? (v9(d || null),
              (b = d || null),
              X8()
                ? V8().setLaunchParams(b)
                : U8("setLaunchParams called before ready."))
            : !d && gyb() && s9() == b.key
            ? K7("yt-remote-connection-change", !0)
            : (A9(),
              v9(d || null),
              (d = r9().Xl()),
              (b = F7(d, b.key)) && B9(b, 1));
        }
    },
    lyb = function (a) {
      var b = a.player.V();
      return !b.N("mdx_enable_privacy_disclosure_ui") ||
        a.isLoggedIn() ||
        a.BH ||
        !a.sC
        ? !1
        : g.hQ(b) || g.jQ(b);
    },
    syb = function (a) {
      a.player.getPlayerStateObject().isPlaying()
        ? a.player.pauseVideo()
        : ((a.zH = function (b) {
            !a.BH && g.Oy(b, 8) && (a.player.pauseVideo(), I9(a));
          }),
          a.player.addEventListener("presentingplayerstatechange", a.zH));
      a.sC && a.sC.qd();
      y9() || (C9 = !0);
    };
  g.k = A7.prototype;
  g.k.fn = function () {
    B7(this);
    for (var a = [], b = 0; b < this.j.length; b++) a.push(this.B[this.j[b]]);
    return a;
  };
  g.k.Lo = function () {
    B7(this);
    return this.j.concat();
  };
  g.k.has = function (a) {
    return z7(this.B, a);
  };
  g.k.isEmpty = function () {
    return this.size == 0;
  };
  g.k.clear = function () {
    this.B = {};
    this.jw = this.size = this.j.length = 0;
  };
  g.k.remove = function (a) {
    return this.delete(a);
  };
  g.k.delete = function (a) {
    return z7(this.B, a)
      ? (delete this.B[a],
        --this.size,
        this.jw++,
        this.j.length > 2 * this.size && B7(this),
        !0)
      : !1;
  };
  g.k.get = function (a, b) {
    return z7(this.B, a) ? this.B[a] : b;
  };
  g.k.set = function (a, b) {
    z7(this.B, a) || ((this.size += 1), this.j.push(a), this.jw++);
    this.B[a] = b;
  };
  g.k.forEach = function (a, b) {
    for (var c = this.Lo(), d = 0; d < c.length; d++) {
      var e = c[d],
        f = this.get(e);
      a.call(b, f, e, this);
    }
  };
  g.k.clone = function () {
    return new A7(this);
  };
  g.k.keys = function () {
    return g.Kp(this.Mm(!0)).j();
  };
  g.k.values = function () {
    return g.Kp(this.Mm(!1)).j();
  };
  g.k.entries = function () {
    var a = this;
    return Ltb(this.keys(), function (b) {
      return [b, a.get(b)];
    });
  };
  g.k.Mm = function (a) {
    B7(this);
    var b = 0,
      c = this.jw,
      d = this,
      e = new g.pn();
    e.next = function () {
      if (c != d.jw)
        throw Error("The map has changed since the iterator was created");
      if (b >= d.j.length) return g.S1;
      var f = d.j[b++];
      return g.qn(a ? f : d.B[f]);
    };
    return e;
  };
  var Qtb = {
      zha: "atp",
      cma: "ska",
      xla: "que",
      Fka: "mus",
      ama: "sus",
      ija: "dsp",
      Nla: "seq",
      wka: "mic",
      via: "dpa",
      Gha: "cds",
      Dka: "mlm",
      tia: "dsdtr",
      Mka: "ntb",
      Pma: "vsp",
      Hia: "scn",
      Ala: "rpe",
      qia: "dcn",
      ria: "dcp",
      ela: "pas",
      sia: "drq",
      Rka: "opf",
      Gia: "els",
      Fia: "isg",
      Sla: "svq",
      Eka: "mvp",
      Gga: "ads",
    },
    Rtb = {
      Nma: "u",
      Qha: "cl",
      aka: "k",
      yja: "i",
      gia: "cr",
      Gka: "m",
      Via: "g",
      J7: "up",
    },
    bub = "",
    J7 = null;
  jub.prototype.flush = function (a, b) {
    a = a === void 0 ? [] : a;
    b = b === void 0 ? !1 : b;
    if (g.Kr("enable_client_streamz_web")) {
      a = g.x(a);
      for (var c = a.next(); !c.done; c = a.next())
        (c = g.Tda(c.value)),
          (c = { serializedIncrementBatch: g.tc(c.j()) }),
          g.Bt("streamzIncremented", c, { sendIsolatedPayload: b });
    }
  };
  var L7,
    rub = lub("loadCastFramework") || lub("loadCastApplicationFramework"),
    uub = [
      "pkedcjkdefgpdelpbcmbmeomcjbeemfm",
      "enhhojjnijigcajfphajepfemndkmdlo",
    ];
  g.Za(N7, g.O);
  g.k = N7.prototype;
  g.k.J5 = function (a) {
    this.D = arguments;
    this.j = !1;
    this.ud ? (this.C = g.Ya() + this.qj) : (this.ud = g.Ii(this.G, this.qj));
  };
  g.k.stop = function () {
    this.ud && (g.Ma.clearTimeout(this.ud), (this.ud = null));
    this.C = null;
    this.j = !1;
    this.D = [];
  };
  g.k.pause = function () {
    ++this.B;
  };
  g.k.resume = function () {
    this.B &&
      (--this.B,
      !this.B && this.j && ((this.j = !1), this.L.apply(null, this.D)));
  };
  g.k.xa = function () {
    this.stop();
    N7.Zf.xa.call(this);
  };
  g.k.K5 = function () {
    this.ud && (g.Ma.clearTimeout(this.ud), (this.ud = null));
    this.C
      ? ((this.ud = g.Ii(this.G, this.C - g.Ya())), (this.C = null))
      : this.B
      ? (this.j = !0)
      : ((this.j = !1), this.L.apply(null, this.D));
  };
  g.w(O7, g.O);
  g.k = O7.prototype;
  g.k.lO = function (a) {
    this.C = arguments;
    this.ud || this.B ? (this.j = !0) : wub(this);
  };
  g.k.stop = function () {
    this.ud &&
      (g.Ma.clearTimeout(this.ud),
      (this.ud = null),
      (this.j = !1),
      (this.C = null));
  };
  g.k.pause = function () {
    this.B++;
  };
  g.k.resume = function () {
    this.B--;
    this.B || !this.j || this.ud || ((this.j = !1), wub(this));
  };
  g.k.xa = function () {
    g.O.prototype.xa.call(this);
    this.stop();
  };
  P7.prototype.stringify = function (a) {
    return g.Ma.JSON.stringify(a, void 0);
  };
  P7.prototype.parse = function (a) {
    return g.Ma.JSON.parse(a, void 0);
  };
  g.Za(xub, g.Uh);
  g.Za(yub, g.Uh);
  var zub = null;
  g.Za(Bub, g.Uh);
  g.Za(Cub, g.Uh);
  g.Za(Dub, g.Uh);
  T7.prototype.debug = function () {};
  T7.prototype.info = function () {};
  T7.prototype.warning = function () {};
  var Lub = {},
    Kub = {};
  g.k = U7.prototype;
  g.k.setTimeout = function (a) {
    this.ib = a;
  };
  g.k.M5 = function (a) {
    a = a.target;
    var b = this.Ua;
    b && g.hj(a) == 3 ? b.lO() : this.cW(a);
  };
  g.k.cW = function (a) {
    try {
      if (a == this.j)
        a: {
          var b = g.hj(this.j),
            c = this.j.B,
            d = this.j.getStatus();
          if (
            !(b < 3) &&
            (b != 3 || (this.j && (this.B.B || g.jj(this.j) || g.kj(this.j))))
          ) {
            this.Ma || b != 4 || c == 7 || (c == 8 || d <= 0 ? Q7(3) : Q7(2));
            Oub(this);
            var e = this.j.getStatus();
            this.Vb = e;
            var f = Jub(this);
            if ((this.L = e == 200)) {
              if (this.Bb && !this.Va) {
                b: {
                  if (this.j) {
                    var h = g.lj(this.j, "X-HTTP-Initial-Response");
                    if (h && !g.yb(h)) {
                      var l = h;
                      break b;
                    }
                  }
                  l = null;
                }
                if ((a = l)) (this.Va = !0), Xub(this, a);
                else {
                  this.L = !1;
                  this.G = 3;
                  R7(12);
                  W7(this);
                  X7(this);
                  break a;
                }
              }
              if (this.Fa) {
                a = !0;
                for (var m; !this.Ma && this.U < f.length; )
                  if (((m = Mub(this, f)), m == Kub)) {
                    b == 4 && ((this.G = 4), R7(14), (a = !1));
                    break;
                  } else if (m == Lub) {
                    this.G = 4;
                    R7(15);
                    a = !1;
                    break;
                  } else Xub(this, m);
                Iub(this) &&
                  this.U != 0 &&
                  ((this.B.j = this.B.j.slice(this.U)), (this.U = 0));
                b != 4 ||
                  f.length != 0 ||
                  this.B.B ||
                  ((this.G = 1), R7(16), (a = !1));
                this.L = this.L && a;
                a
                  ? f.length > 0 &&
                    !this.Mb &&
                    ((this.Mb = !0), this.C.NS(this))
                  : (W7(this), X7(this));
              } else Xub(this, f);
              b == 4 && W7(this);
              this.L &&
                !this.Ma &&
                (b == 4 ? Pub(this.C, this) : ((this.L = !1), V7(this)));
            } else
              g.mga(this.j),
                e == 400 && f.indexOf("Unknown SID") > 0
                  ? ((this.G = 3), R7(12))
                  : ((this.G = 0), R7(13)),
                W7(this),
                X7(this);
          }
        }
    } catch (n) {
    } finally {
    }
  };
  g.k.cancel = function () {
    this.Ma = !0;
    W7(this);
  };
  g.k.L5 = function () {
    this.qa = null;
    var a = Date.now();
    a - this.rb >= 0
      ? (this.Pa != 2 && (Q7(3), R7(17)), W7(this), (this.G = 2), X7(this))
      : Nub(this, this.rb - a);
  };
  g.k.getLastError = function () {
    return this.G;
  };
  g.k.cR = function () {
    return this.j;
  };
  Zub.prototype.cancel = function () {
    this.C = avb(this);
    if (this.B) this.B.cancel(), (this.B = null);
    else if (this.j && this.j.size !== 0) {
      for (var a = g.x(this.j.values()), b = a.next(); !b.done; b = a.next())
        b.value.cancel();
      this.j.clear();
    }
  };
  g.k = fvb.prototype;
  g.k.dW = 8;
  g.k.gi = 1;
  g.k.connect = function (a, b, c, d) {
    R7(0);
    this.Zb = a;
    this.Ma = b || {};
    c && d !== void 0 && ((this.Ma.OSID = c), (this.Ma.OAID = d));
    this.Va = this.vc;
    this.La = Uub(this, null, this.Zb);
    a8(this);
  };
  g.k.disconnect = function () {
    hvb(this);
    if (this.gi == 3) {
      var a = this.Za++,
        b = this.La.clone();
      g.Ek(b, "SID", this.D);
      g.Ek(b, "RID", a);
      g.Ek(b, "TYPE", "terminate");
      d8(this, b);
      a = new U7(this, this.D, a);
      a.Pa = 2;
      a.W = v7(b.clone());
      b = !1;
      if (g.Ma.navigator && g.Ma.navigator.sendBeacon)
        try {
          b = g.Ma.navigator.sendBeacon(a.W.toString(), "");
        } catch (c) {}
      !b && g.Ma.Image && ((new Image().src = a.W), (b = !0));
      b || ((a.j = Hub(a.C, null)), a.j.send(a.W));
      a.Ba = Date.now();
      V7(a);
    }
    nvb(this);
  };
  g.k.eh = function () {
    return this.gi == 0;
  };
  g.k.getState = function () {
    return this.gi;
  };
  g.k.fW = function (a) {
    if (this.L)
      if (((this.L = null), this.gi == 1)) {
        if (!a) {
          this.Za = Math.floor(Math.random() * 1e5);
          a = this.Za++;
          var b = new U7(this, "", a),
            c = this.Z;
          this.Vb && (c ? ((c = g.Pg(c)), g.Rg(c, this.Vb)) : (c = this.Vb));
          this.U !== null || this.rb || ((b.La = c), (c = null));
          var d;
          if (this.ub)
            a: {
              for (var e = (d = 0); e < this.C.length; e++) {
                b: {
                  var f = this.C[e];
                  if (
                    "__data__" in f.map &&
                    ((f = f.map.__data__), typeof f === "string")
                  ) {
                    f = f.length;
                    break b;
                  }
                  f = void 0;
                }
                if (f === void 0) break;
                d += f;
                if (d > 4096) {
                  d = e;
                  break a;
                }
                if (d === 4096 || e === this.C.length - 1) {
                  d = e + 1;
                  break a;
                }
              }
              d = 1e3;
            }
          else d = 1e3;
          d = kvb(this, b, d);
          e = this.La.clone();
          g.Ek(e, "RID", a);
          g.Ek(e, "CVER", 22);
          this.Fa && g.Ek(e, "X-HTTP-Session-Id", this.Fa);
          d8(this, e);
          c &&
            (this.rb
              ? (d = "headers=" + g.hg(g.pha(c)) + "&" + d)
              : this.U && g.Ik(e, this.U, c));
          Tub(this.B, b);
          this.ag && g.Ek(e, "TYPE", "init");
          this.ub
            ? (g.Ek(e, "$req", d),
              g.Ek(e, "SID", "null"),
              (b.Bb = !0),
              Gub(b, e, null))
            : Gub(b, e, d);
          this.gi = 2;
        }
      } else
        this.gi == 3 &&
          (a ? lvb(this, a) : this.C.length == 0 || $ub(this.B) || lvb(this));
  };
  g.k.eW = function () {
    this.W = null;
    mvb(this);
    if (this.wc && !(this.ib || this.j == null || this.Pc <= 0)) {
      var a = 2 * this.Pc;
      this.Ea = S7((0, g.Va)(this.wba, this), a);
    }
  };
  g.k.wba = function () {
    this.Ea &&
      ((this.Ea = null),
      (this.Va = !1),
      (this.ib = !0),
      R7(10),
      Z7(this),
      mvb(this));
  };
  g.k.NS = function (a) {
    this.j == a && this.wc && !this.ib && (gvb(this), (this.ib = !0), R7(11));
  };
  g.k.N5 = function () {
    this.qa != null && ((this.qa = null), Z7(this), Rub(this), R7(19));
  };
  g.k.Pfa = function (a) {
    a ? R7(2) : R7(1);
  };
  g.k.isActive = function () {
    return !!this.G && this.G.isActive(this);
  };
  g.k = pvb.prototype;
  g.k.jW = function () {};
  g.k.iW = function () {};
  g.k.hW = function () {};
  g.k.gW = function () {};
  g.k.isActive = function () {
    return !0;
  };
  g.k.O5 = function () {};
  g.Za(f8, g.ki);
  f8.prototype.open = function () {
    this.j.G = this.C;
    this.L && (this.j.Pa = !0);
    this.j.connect(this.G, this.B || void 0);
  };
  f8.prototype.close = function () {
    this.j.disconnect();
  };
  f8.prototype.send = function (a) {
    var b = this.j;
    if (typeof a === "string") {
      var c = {};
      c.__data__ = a;
      a = c;
    } else this.D && ((c = {}), (c.__data__ = g.Mi(a)), (a = c));
    b.C.push(new Yub(b.Gf++, a));
    b.gi == 3 && a8(b);
  };
  f8.prototype.xa = function () {
    this.j.G = null;
    delete this.C;
    this.j.disconnect();
    delete this.j;
    f8.Zf.xa.call(this);
  };
  g.Za(rvb, xub);
  g.Za(svb, yub);
  g.Za(e8, pvb);
  e8.prototype.jW = function () {
    this.j.dispatchEvent("m");
  };
  e8.prototype.iW = function (a) {
    this.j.dispatchEvent(new rvb(a));
  };
  e8.prototype.hW = function (a) {
    this.j.dispatchEvent(new svb(a));
  };
  e8.prototype.gW = function () {
    this.j.dispatchEvent("n");
  };
  var h8 = new g.ki();
  g.w(vvb, g.Uh);
  g.k = j8.prototype;
  g.k.uw = null;
  g.k.Jt = !1;
  g.k.Wz = null;
  g.k.nO = null;
  g.k.GD = null;
  g.k.eJ = null;
  g.k.DD = null;
  g.k.dJ = null;
  g.k.xw = null;
  g.k.Ej = null;
  g.k.gJ = 0;
  g.k.Q3 = null;
  g.k.fJ = null;
  g.k.ww = null;
  g.k.FD = -1;
  g.k.S2 = !0;
  g.k.ED = !1;
  g.k.mO = 0;
  g.k.cJ = null;
  var Bvb = {},
    Avb = {};
  g.k = j8.prototype;
  g.k.setTimeout = function (a) {
    this.B = a;
  };
  g.k.Q5 = function (a) {
    a = a.target;
    var b = this.cJ;
    b && g.hj(a) == 3 ? b.lO() : this.kW(a);
  };
  g.k.kW = function (a) {
    try {
      if (a == this.Ej)
        a: {
          var b = g.hj(this.Ej),
            c = this.Ej.B,
            d = this.Ej.getStatus();
          if (g.gh && !g.qc("420+")) {
            if (b < 4) break a;
          } else if (b < 3 || (b == 3 && !g.jj(this.Ej))) break a;
          this.ED ||
            b != 4 ||
            c == 7 ||
            (c == 8 || d <= 0 ? this.j.Hs(3) : this.j.Hs(2));
          Evb(this);
          var e = this.Ej.getStatus();
          this.FD = e;
          var f = g.jj(this.Ej);
          if ((this.Jt = e == 200)) {
            b == 4 && k8(this);
            if (this.Fa) {
              for (a = !0; !this.ED && this.gJ < f.length; ) {
                var h = Cvb(this, f);
                if (h == Avb) {
                  b == 4 && ((this.ww = 4), i8(15), (a = !1));
                  break;
                } else if (h == Bvb) {
                  this.ww = 4;
                  i8(16);
                  a = !1;
                  break;
                } else Gvb(this, h);
              }
              b == 4 && f.length == 0 && ((this.ww = 1), i8(17), (a = !1));
              this.Jt = this.Jt && a;
              a || (k8(this), Fvb(this));
            } else Gvb(this, f);
            this.Jt &&
              !this.ED &&
              (b == 4 ? this.j.qO(this) : ((this.Jt = !1), zvb(this)));
          } else
            e == 400 && f.indexOf("Unknown SID") > 0
              ? ((this.ww = 3), i8(13))
              : ((this.ww = 0), i8(14)),
              k8(this),
              Fvb(this);
        }
    } catch (l) {
    } finally {
    }
  };
  g.k.cancel = function () {
    this.ED = !0;
    k8(this);
  };
  g.k.P5 = function () {
    this.Wz = null;
    var a = Date.now();
    a - this.nO >= 0
      ? (this.eJ != 2 && this.j.Hs(3),
        k8(this),
        (this.ww = 2),
        i8(18),
        Fvb(this))
      : Dvb(this, this.nO - a);
  };
  g.k.getLastError = function () {
    return this.ww;
  };
  g.k = Jvb.prototype;
  g.k.pO = null;
  g.k.Jl = null;
  g.k.XM = !1;
  g.k.rO = null;
  g.k.Em = null;
  g.k.Fr = -1;
  g.k.hJ = null;
  g.k.NE = null;
  g.k.connect = function (a) {
    this.rO = a;
    a = m8(this.j, null, this.rO);
    i8(3);
    Date.now();
    var b = this.j.Z;
    b != null
      ? ((this.hJ = b[0]),
        (this.NE = b[1])
          ? ((this.Em = 1), Kvb(this))
          : ((this.Em = 2), Lvb(this)))
      : (w7(a, "MODE", "init"),
        (this.Jl = new j8(this)),
        (this.Jl.uw = this.pO),
        yvb(this.Jl, a, !1, null, !0),
        (this.Em = 0));
  };
  g.k.j8 = function (a) {
    if (a) (this.Em = 2), Lvb(this);
    else {
      i8(4);
      var b = this.j;
      b.Mp = b.Xt.Fr;
      q8(b, 9);
    }
    a && this.Hs(2);
  };
  g.k.oO = function (a) {
    return this.j.oO(a);
  };
  g.k.abort = function () {
    this.Jl && (this.Jl.cancel(), (this.Jl = null));
    this.Fr = -1;
  };
  g.k.eh = function () {
    return !1;
  };
  g.k.lW = function (a, b) {
    this.Fr = a.FD;
    if (this.Em == 0)
      if (b) {
        try {
          var c = this.B.parse(b);
        } catch (d) {
          a = this.j;
          a.Mp = this.Fr;
          q8(a, 2);
          return;
        }
        this.hJ = c[0];
        this.NE = c[1];
      } else (a = this.j), (a.Mp = this.Fr), q8(a, 2);
    else
      this.Em == 2 &&
        (this.XM
          ? (i8(7), Date.now())
          : b == "11111"
          ? (i8(6),
            (this.XM = !0),
            Date.now(),
            (this.Fr = 200),
            this.Jl.cancel(),
            i8(12),
            n8(this.j, this, !0))
          : (i8(8), Date.now(), (this.XM = !1)));
  };
  g.k.qO = function () {
    this.Fr = this.Jl.FD;
    if (this.Jl.Jt)
      this.Em == 0
        ? this.NE
          ? ((this.Em = 1), Kvb(this))
          : ((this.Em = 2), Lvb(this))
        : this.Em == 2 &&
          (this.XM
            ? (i8(12), n8(this.j, this, !0))
            : (i8(11), n8(this.j, this, !1)));
    else {
      this.Em == 0 ? i8(9) : this.Em == 2 && i8(10);
      var a = this.j;
      this.Jl.getLastError();
      a.Mp = this.Fr;
      q8(a, 2);
    }
  };
  g.k.HD = function () {
    return this.j.HD();
  };
  g.k.isActive = function () {
    return this.j.isActive();
  };
  g.k.Hs = function (a) {
    this.j.Hs(a);
  };
  g.k = Mvb.prototype;
  g.k.Lp = null;
  g.k.ID = null;
  g.k.Pk = null;
  g.k.kh = null;
  g.k.tO = null;
  g.k.iJ = null;
  g.k.mW = null;
  g.k.sO = null;
  g.k.JD = 0;
  g.k.S5 = 0;
  g.k.cj = null;
  g.k.Kt = null;
  g.k.Gr = null;
  g.k.zw = null;
  g.k.Xt = null;
  g.k.TN = null;
  g.k.Zz = -1;
  g.k.nW = -1;
  g.k.Mp = -1;
  g.k.Yz = 0;
  g.k.Xz = 0;
  g.k.yw = 8;
  g.Za(Ovb, g.Uh);
  g.Za(Pvb, g.Uh);
  g.k = Mvb.prototype;
  g.k.connect = function (a, b, c, d, e) {
    i8(0);
    this.tO = b;
    this.ID = c || {};
    d && e !== void 0 && ((this.ID.OSID = d), (this.ID.OAID = e));
    this.W ? (g8((0, g.Va)(this.zY, this, a), 100), Rvb(this)) : this.zY(a);
  };
  g.k.disconnect = function () {
    Svb(this);
    if (this.j == 3) {
      var a = this.JD++,
        b = this.iJ.clone();
      g.Ek(b, "SID", this.D);
      g.Ek(b, "RID", a);
      g.Ek(b, "TYPE", "terminate");
      p8(this, b);
      a = new j8(this, this.D, a);
      a.eJ = 2;
      a.DD = v7(b.clone());
      new Image().src = a.DD.toString();
      a.GD = Date.now();
      zvb(a);
    }
    bwb(this);
  };
  g.k.zY = function (a) {
    this.Xt = new Jvb(this);
    this.Xt.pO = this.Lp;
    this.Xt.B = this.G;
    this.Xt.connect(a);
  };
  g.k.eh = function () {
    return this.j == 0;
  };
  g.k.getState = function () {
    return this.j;
  };
  g.k.pW = function (a) {
    this.Kt = null;
    Xvb(this, a);
  };
  g.k.oW = function () {
    this.Gr = null;
    this.kh = new j8(this, this.D, "rpc", this.U);
    this.kh.uw = this.Lp;
    this.kh.mO = 0;
    var a = this.mW.clone();
    g.Ek(a, "RID", "rpc");
    g.Ek(a, "SID", this.D);
    g.Ek(a, "CI", this.TN ? "0" : "1");
    g.Ek(a, "AID", this.Zz);
    p8(this, a);
    g.Ek(a, "TYPE", "xmlhttp");
    yvb(this.kh, a, !0, this.sO, !1);
  };
  g.k.lW = function (a, b) {
    if (this.j != 0 && (this.kh == a || this.Pk == a))
      if (((this.Mp = a.FD), this.Pk == a && this.j == 3))
        if (this.yw > 7) {
          try {
            var c = this.G.parse(b);
          } catch (d) {
            c = null;
          }
          if (Array.isArray(c) && c.length == 3)
            if (((a = c), a[0] == 0))
              a: {
                if (!this.Gr) {
                  if (this.kh)
                    if (this.kh.GD + 3e3 < this.Pk.GD)
                      o8(this), this.kh.cancel(), (this.kh = null);
                    else break a;
                  $vb(this);
                  i8(19);
                }
              }
            else
              (this.nW = a[1]),
                0 < this.nW - this.Zz &&
                  a[2] < 37500 &&
                  this.TN &&
                  this.Xz == 0 &&
                  !this.zw &&
                  (this.zw = g8((0, g.Va)(this.T5, this), 6e3));
          else q8(this, 11);
        } else b != null && q8(this, 11);
      else if ((this.kh == a && o8(this), !g.yb(b)))
        for (a = this.G.parse(b), b = 0; b < a.length; b++)
          (c = a[b]),
            (this.Zz = c[0]),
            (c = c[1]),
            this.j == 2
              ? c[0] == "c"
                ? ((this.D = c[1]),
                  (this.sO = c[2]),
                  (c = c[3]),
                  c != null ? (this.yw = c) : (this.yw = 6),
                  (this.j = 3),
                  this.cj && this.cj.sW(),
                  (this.mW = m8(this, this.HD() ? this.sO : null, this.tO)),
                  Yvb(this))
                : c[0] == "stop" && q8(this, 7)
              : this.j == 3 &&
                (c[0] == "stop"
                  ? q8(this, 7)
                  : c[0] != "noop" && this.cj && this.cj.rW(c),
                (this.Xz = 0));
  };
  g.k.T5 = function () {
    this.zw != null &&
      ((this.zw = null), this.kh.cancel(), (this.kh = null), $vb(this), i8(20));
  };
  g.k.qO = function (a) {
    if (this.kh == a) {
      o8(this);
      this.kh = null;
      var b = 2;
    } else if (this.Pk == a) (this.Pk = null), (b = 1);
    else return;
    this.Mp = a.FD;
    if (this.j != 0)
      if (a.Jt)
        if (b == 1) {
          b = a.xw ? a.xw.length : 0;
          a = Date.now() - a.GD;
          var c = h8;
          c.dispatchEvent(new Ovb(c, b, a, this.Yz));
          Qvb(this);
          this.C.length = 0;
        } else Yvb(this);
      else {
        c = a.getLastError();
        var d;
        if (!(d = c == 3 || c == 7 || (c == 0 && this.Mp > 0))) {
          if ((d = b == 1))
            this.Pk || this.Kt || this.j == 1 || this.Yz >= 2
              ? (d = !1)
              : ((this.Kt = g8(
                  (0, g.Va)(this.pW, this, a),
                  Zvb(this, this.Yz)
                )),
                this.Yz++,
                (d = !0));
          d = !(d || (b == 2 && $vb(this)));
        }
        if (d)
          switch (c) {
            case 1:
              q8(this, 5);
              break;
            case 4:
              q8(this, 10);
              break;
            case 3:
              q8(this, 6);
              break;
            case 7:
              q8(this, 12);
              break;
            default:
              q8(this, 2);
          }
      }
  };
  g.k.R5 = function (a) {
    if (!g.Yb(arguments, this.j))
      throw Error("Unexpected channel state: " + this.j);
  };
  g.k.Ofa = function (a) {
    a ? i8(2) : (i8(1), awb(this, 8));
  };
  g.k.oO = function (a) {
    if (a) throw Error("Can't create secondary domain capable XhrIo object.");
    a = new g.ej();
    a.U = !1;
    return a;
  };
  g.k.isActive = function () {
    return !!this.cj && this.cj.isActive(this);
  };
  g.k.Hs = function (a) {
    var b = h8;
    b.dispatchEvent(new Pvb(b, a));
  };
  g.k.HD = function () {
    return !1;
  };
  g.k = cwb.prototype;
  g.k.sW = function () {};
  g.k.rW = function () {};
  g.k.qW = function () {};
  g.k.uO = function () {};
  g.k.tW = function () {
    return {};
  };
  g.k.isActive = function () {
    return !0;
  };
  g.k = dwb.prototype;
  g.k.enqueue = function (a) {
    this.B.push(a);
  };
  g.k.isEmpty = function () {
    return this.j.length === 0 && this.B.length === 0;
  };
  g.k.clear = function () {
    this.j = [];
    this.B = [];
  };
  g.k.contains = function (a) {
    return g.Yb(this.j, a) || g.Yb(this.B, a);
  };
  g.k.remove = function (a) {
    var b = this.j;
    var c = (0, g.Wab)(b, a);
    c >= 0 ? (g.Zb(b, c), (b = !0)) : (b = !1);
    return b || g.$b(this.B, a);
  };
  g.k.fn = function () {
    for (var a = [], b = this.j.length - 1; b >= 0; --b) a.push(this.j[b]);
    b = this.B.length;
    for (var c = 0; c < b; ++c) a.push(this.B[c]);
    return a;
  };
  g.w(ewb, g.Uh);
  g.w(fwb, g.Uh);
  g.Za(r8, g.O);
  g.k = r8.prototype;
  g.k.Ada = function () {
    this.qj = Math.min(3e5, this.qj * 2);
    this.C();
    this.B && this.start();
  };
  g.k.start = function () {
    var a = this.qj + 15e3 * Math.random();
    g.pp(this.j, a);
    this.B = Date.now() + a;
  };
  g.k.stop = function () {
    this.j.stop();
    this.B = 0;
  };
  g.k.isActive = function () {
    return this.j.isActive();
  };
  g.k.reset = function () {
    this.j.stop();
    this.qj = 5e3;
  };
  g.Za(hwb, cwb);
  g.k = hwb.prototype;
  g.k.subscribe = function (a, b, c) {
    return this.C.subscribe(a, b, c);
  };
  g.k.unsubscribe = function (a, b, c) {
    return this.C.unsubscribe(a, b, c);
  };
  g.k.Qh = function (a) {
    return this.C.Qh(a);
  };
  g.k.publish = function (a, b) {
    return this.C.publish.apply(this.C, arguments);
  };
  g.k.dispose = function () {
    this.qa ||
      ((this.qa = !0),
      g.ib(this.C),
      this.disconnect(),
      g.ib(this.B),
      (this.B = null),
      (this.ra = function () {
        return "";
      }));
  };
  g.k.Ja = function () {
    return this.qa;
  };
  g.k.connect = function (a, b, c) {
    if (!this.j || this.j.getState() != 2) {
      this.Z = "";
      this.B.stop();
      this.L = a || null;
      this.G = b || 0;
      a = this.Ba + "/test";
      b = this.Ba + "/bind";
      var d = new Mvb(
          c ? c.firstTestResults : null,
          c ? c.secondTestResults : null,
          this.Pa
        ),
        e = this.j;
      e && (e.cj = null);
      d.cj = this;
      this.j = d;
      iwb(this);
      if (this.j) {
        d = g.kr("ID_TOKEN");
        var f = this.j.Lp || {};
        d
          ? (f["x-youtube-identity-token"] = d)
          : delete f["x-youtube-identity-token"];
        this.j.Lp = f;
      }
      e
        ? ((e.getState() != 3 && Uvb(e) == 0) || e.getState(),
          this.j.connect(a, b, this.U, e.D, e.Zz))
        : c
        ? this.j.connect(a, b, this.U, c.sessionId, c.arrayId)
        : this.j.connect(a, b, this.U);
    }
  };
  g.k.disconnect = function (a) {
    this.W = a || 0;
    this.B.stop();
    iwb(this);
    this.j && (this.j.getState() == 3 && Xvb(this.j), this.j.disconnect());
    this.W = 0;
  };
  g.k.sendMessage = function (a, b) {
    a = { _sc: a };
    b && g.Rg(a, b);
    this.B.isActive() || (this.j ? this.j.getState() : 0) == 2
      ? this.D.push(a)
      : this.vB() && (iwb(this), Tvb(this.j, a));
  };
  g.k.sW = function () {
    this.B.reset();
    this.L = null;
    this.G = 0;
    if (this.D.length) {
      var a = this.D;
      this.D = [];
      for (var b = a.length, c = 0; c < b; ++c) Tvb(this.j, a[c]);
    }
    this.publish("handlerOpened");
    Ctb(this.La, "BROWSER_CHANNEL");
  };
  g.k.qW = function (a) {
    var b = a == 2 && this.j.Mp == 401;
    a == 4 || b || this.B.start();
    this.publish("handlerError", a, b);
    Itb(this.Fa, "BROWSER_CHANNEL");
  };
  g.k.uO = function (a, b) {
    if (!this.B.isActive()) this.publish("handlerClosed");
    else if (b)
      for (var c = b.length, d = 0; d < c; ++d) {
        var e = b[d].map;
        e && this.D.push(e);
      }
    Etb(this.Ea, "BROWSER_CHANNEL");
    a &&
      this.Ua.j.wO(
        "/client_streamz/youtube/living_room/mdx/browser_channel/pending_maps",
        a.length
      );
    b &&
      this.Za.j.wO(
        "/client_streamz/youtube/living_room/mdx/browser_channel/undelivered_maps",
        b.length
      );
  };
  g.k.tW = function () {
    var a = { v: 2 };
    this.Z && (a.gsessionid = this.Z);
    this.G != 0 && (a.ui = "" + this.G);
    this.W != 0 && (a.ui = "" + this.W);
    this.L && g.Rg(a, this.L);
    return a;
  };
  g.k.rW = function (a) {
    a[0] == "S"
      ? (this.Z = a[1])
      : a[0] == "gracefulReconnect"
      ? (this.B.start(), this.j.disconnect())
      : this.publish("handlerMessage", new gwb(a[0], a[1]));
    Gtb(this.Ma, "BROWSER_CHANNEL");
  };
  g.k.vB = function () {
    return !!this.j && this.j.getState() == 3;
  };
  g.k.Ys = function (a) {
    (this.U.loungeIdToken = a) || this.B.stop();
    if (this.Va && this.j) {
      var b = this.j.Lp || {};
      a
        ? (b["X-YouTube-LoungeId-Token"] = a)
        : delete b["X-YouTube-LoungeId-Token"];
      this.j.Lp = b;
    }
  };
  g.k.getDeviceId = function () {
    return this.U.id;
  };
  g.k.Du = function () {
    return this.B.isActive() ? this.B.B - Date.now() : NaN;
  };
  g.k.iz = function () {
    var a = this.B;
    g.qp(a.j);
    a.start();
  };
  g.k.Uea = function () {
    this.B.isActive();
    Uvb(this.j) == 0 && this.connect(this.L, this.G);
  };
  s8.prototype.sendRequest = function (a, b, c, d, e, f, h) {
    a = {
      format: f ? "RAW" : "JSON",
      method: a,
      context: this,
      timeout: 5e3,
      withCredentials: !!h,
      onSuccess: g.Xa(this.D, d, !f),
      onError: g.Xa(this.C, e),
      onTimeout: g.Xa(this.G, e),
    };
    c &&
      ((a.postParams = c),
      (a.headers = { "Content-Type": "application/x-www-form-urlencoded" }));
    return g.Pr(b, a);
  };
  s8.prototype.D = function (a, b, c, d) {
    b ? a(d) : a({ text: c.responseText });
  };
  s8.prototype.C = function (a, b) {
    a(Error("Request error: " + b.status));
  };
  s8.prototype.G = function (a) {
    a(Error("request timed out"));
  };
  g.w(jwb, g.ki);
  g.k = jwb.prototype;
  g.k.connect = function (a, b, c) {
    this.Nd.connect(a, b, c);
  };
  g.k.disconnect = function (a) {
    this.Nd.disconnect(a);
  };
  g.k.iz = function () {
    this.Nd.iz();
  };
  g.k.getDeviceId = function () {
    return this.Nd.getDeviceId();
  };
  g.k.Du = function () {
    return this.Nd.Du();
  };
  g.k.vB = function () {
    return this.Nd.vB();
  };
  g.k.U5 = function () {
    this.dispatchEvent("channelOpened");
    var a = this.Nd,
      b = this.j;
    g.Xs("yt-remote-session-browser-channel", {
      firstTestResults: [""],
      secondTestResults: !a.j.TN,
      sessionId: a.j.D,
      arrayId: a.j.Zz,
    });
    g.Xs("yt-remote-session-screen-id", b);
    a = G7();
    b = H7();
    g.Yb(a, b) || a.push(b);
    aub(a);
    cub();
  };
  g.k.onClosed = function () {
    this.dispatchEvent("channelClosed");
  };
  g.k.onMessage = function (a) {
    this.dispatchEvent(new ewb(a));
  };
  g.k.onError = function (a) {
    this.dispatchEvent(new fwb(a ? 1 : 0));
  };
  g.k.sendMessage = function (a, b) {
    this.Nd.sendMessage(a, b);
  };
  g.k.Ys = function (a) {
    this.Nd.Ys(a);
  };
  g.k.dispose = function () {
    this.Nd.dispose();
  };
  g.k = kwb.prototype;
  g.k.connect = function (a, b) {
    a = a === void 0 ? {} : a;
    b = b === void 0 ? 0 : b;
    this.L !== 2 &&
      (this.C.stop(),
      (this.W = a),
      (this.U = b),
      mwb(this),
      (a = g.kr("ID_TOKEN"))
        ? (this.D["x-youtube-identity-token"] = a)
        : delete this.D["x-youtube-identity-token"],
      this.j &&
        ((this.B.device = this.j.device),
        (this.B.name = this.j.name),
        (this.B.app = this.j.app),
        (this.B.id = this.j.id),
        this.j.Paa && (this.B.mdxVersion = "" + this.j.Paa),
        this.j.theme && (this.B.theme = this.j.theme),
        this.j.capabilities && (this.B.capabilities = this.j.capabilities),
        this.j.B8 && (this.B.cst = this.j.B8),
        this.j.authuser && (this.B.authuser = this.j.authuser),
        this.j.pageId && (this.B.pageId = this.j.pageId)),
      this.U !== 0 ? (this.B.ui = "" + this.U) : delete this.B.ui,
      Object.assign(this.B, this.W),
      (this.channel = new f8(this.pathPrefix, {
        R$: "gsessionid",
        Taa: this.D,
        Uaa: this.B,
      })),
      this.channel.open(),
      (this.L = 2),
      lwb(this));
  };
  g.k.disconnect = function (a) {
    this.Z = a === void 0 ? 0 : a;
    this.C.stop();
    mwb(this);
    this.channel &&
      (this.Z !== 0 ? (this.B.ui = "" + this.Z) : delete this.B.ui,
      this.channel.close());
    this.Z = 0;
  };
  g.k.Du = function () {
    return this.C.isActive() ? this.C.B - Date.now() : NaN;
  };
  g.k.iz = function () {
    var a = this.C;
    g.qp(a.j);
    a.start();
  };
  g.k.sendMessage = function (a, b) {
    this.channel &&
      (mwb(this), (a = Object.assign({}, { _sc: a }, b)), this.channel.send(a));
  };
  g.k.Ys = function (a) {
    a || this.C.stop();
    a
      ? (this.D["X-YouTube-LoungeId-Token"] = a)
      : delete this.D["X-YouTube-LoungeId-Token"];
  };
  g.k.getDeviceId = function () {
    return this.j ? this.j.id : "";
  };
  g.k.publish = function (a) {
    return this.G.publish.apply(
      this.G,
      [a].concat(g.z(g.Ca.apply(1, arguments)))
    );
  };
  g.k.subscribe = function (a, b, c) {
    return this.G.subscribe(a, b, c);
  };
  g.k.unsubscribe = function (a, b, c) {
    return this.G.unsubscribe(a, b, c);
  };
  g.k.Qh = function (a) {
    return this.G.Qh(a);
  };
  g.k.dispose = function () {
    this.qa ||
      ((this.qa = !0),
      g.ib(this.G),
      this.disconnect(),
      g.ib(this.C),
      (this.Ba = function () {
        return "";
      }));
  };
  g.k.Ja = function () {
    return this.qa;
  };
  g.w(nwb, g.ki);
  g.k = nwb.prototype;
  g.k.connect = function (a, b) {
    this.j.connect(a, b);
  };
  g.k.disconnect = function (a) {
    this.j.disconnect(a);
  };
  g.k.iz = function () {
    this.j.iz();
  };
  g.k.getDeviceId = function () {
    return this.j.getDeviceId();
  };
  g.k.Du = function () {
    return this.j.Du();
  };
  g.k.vB = function () {
    return this.j.L === 3;
  };
  g.k.V5 = function () {
    this.dispatchEvent("channelOpened");
  };
  g.k.onClosed = function () {
    this.dispatchEvent("channelClosed");
  };
  g.k.onMessage = function (a) {
    this.dispatchEvent(new ewb(a));
  };
  g.k.onError = function () {
    this.dispatchEvent(new fwb(this.j.Ig === 401 ? 1 : 0));
  };
  g.k.sendMessage = function (a, b) {
    this.j.sendMessage(a, b);
  };
  g.k.Ys = function (a) {
    this.j.Ys(a);
  };
  g.k.dispose = function () {
    this.j.dispose();
  };
  var vwb = Date.now(),
    u8 = null,
    y8 = Array(50),
    x8 = -1,
    z8 = !1;
  g.Za(A8, g.Dx);
  A8.prototype.Xl = function () {
    return this.screens;
  };
  A8.prototype.contains = function (a) {
    return !!Ytb(this.screens, a);
  };
  A8.prototype.get = function (a) {
    return a ? F7(this.screens, a) : null;
  };
  A8.prototype.info = function (a) {
    v8(this.L, a);
  };
  g.w(zwb, g.Dx);
  g.k = zwb.prototype;
  g.k.start = function () {
    !this.j && isNaN(this.ud) && this.b2();
  };
  g.k.stop = function () {
    this.j && (this.j.abort(), (this.j = null));
    isNaN(this.ud) || (g.Hr(this.ud), (this.ud = NaN));
  };
  g.k.xa = function () {
    this.stop();
    g.Dx.prototype.xa.call(this);
  };
  g.k.b2 = function () {
    this.ud = NaN;
    this.j = g.Pr(t8(this.C, "/pairing/get_screen"), {
      method: "POST",
      postParams: { pairing_code: this.U },
      timeout: 5e3,
      onSuccess: (0, g.Va)(this.X5, this),
      onError: (0, g.Va)(this.W5, this),
      onTimeout: (0, g.Va)(this.Y5, this),
    });
  };
  g.k.X5 = function (a, b) {
    this.j = null;
    a = b.screen || {};
    a.dialId = this.D;
    a.name = this.L;
    b = -1;
    this.G &&
      a.shortLivedLoungeToken &&
      a.shortLivedLoungeToken.value &&
      a.shortLivedLoungeToken.refreshIntervalMs &&
      ((a.screenIdType = "shortLived"),
      (a.loungeToken = a.shortLivedLoungeToken.value),
      (b = a.shortLivedLoungeToken.refreshIntervalMs));
    this.publish("pairingComplete", new C7(a), b);
  };
  g.k.W5 = function (a) {
    this.j = null;
    a.status && a.status == 404
      ? this.B >= tyb.length
        ? this.publish("pairingFailed", Error("DIAL polling timed out"))
        : ((a = tyb[this.B]),
          (this.ud = g.Fr((0, g.Va)(this.b2, this), a)),
          this.B++)
      : this.publish("pairingFailed", Error("Server error " + a.status));
  };
  g.k.Y5 = function () {
    this.j = null;
    this.publish("pairingFailed", Error("Server not responding"));
  };
  var tyb = [2e3, 2e3, 1e3, 1e3, 1e3, 2e3, 2e3, 5e3, 5e3, 1e4];
  g.Za(C8, A8);
  g.k = C8.prototype;
  g.k.start = function () {
    B8(this) && this.publish("screenChange");
    !g.Ys("yt-remote-lounge-token-expiration") && Awb(this);
    g.Hr(this.j);
    this.j = g.Fr((0, g.Va)(this.start, this), 1e4);
  };
  g.k.add = function (a, b) {
    B8(this);
    wwb(this, a);
    D8(this, !1);
    this.publish("screenChange");
    b(a);
    a.token || Awb(this);
  };
  g.k.remove = function (a, b) {
    var c = B8(this);
    ywb(this, a) && (D8(this, !1), (c = !0));
    b(a);
    c && this.publish("screenChange");
  };
  g.k.SN = function (a, b, c, d) {
    var e = B8(this),
      f = this.get(a.id);
    f
      ? (f.name != b && ((f.name = b), D8(this, !1), (e = !0)), c(a))
      : d(Error("no such local screen."));
    e && this.publish("screenChange");
  };
  g.k.xa = function () {
    g.Hr(this.j);
    C8.Zf.xa.call(this);
  };
  g.k.s$ = function (a) {
    B8(this);
    var b = this.screens.length;
    a = (a && a.screens) || [];
    for (var c = a.length, d = 0; d < c; ++d) {
      var e = a[d],
        f = this.get(e.screenId);
      f && ((f.token = e.loungeToken), --b);
    }
    D8(this, !b);
    b && v8(this.L, "Missed " + b + " lounge tokens.");
  };
  g.k.r$ = function (a) {
    v8(this.L, "Requesting lounge tokens failed: " + a);
  };
  g.w(Cwb, g.Dx);
  g.k = Cwb.prototype;
  g.k.start = function () {
    var a = parseInt(g.Ys("yt-remote-fast-check-period") || "0", 10);
    (this.D = g.Ya() - 144e5 < a ? 0 : a)
      ? E8(this)
      : ((this.D = g.Ya() + 3e5),
        g.Xs("yt-remote-fast-check-period", this.D),
        this.cU());
  };
  g.k.isEmpty = function () {
    return g.Mg(this.j);
  };
  g.k.update = function () {
    Bwb("Updating availability on schedule.");
    var a = this.L(),
      b = g.Dg(
        this.j,
        function (c, d) {
          return c && !!F7(a, d);
        },
        this
      );
    Fwb(this, b);
  };
  g.k.xa = function () {
    g.Hr(this.C);
    this.C = NaN;
    this.B && (this.B.abort(), (this.B = null));
    g.Dx.prototype.xa.call(this);
  };
  g.k.cU = function () {
    g.Hr(this.C);
    this.C = NaN;
    this.B && this.B.abort();
    var a = Gwb(this);
    if (utb(a)) {
      var b = t8(this.G, "/pairing/get_screen_availability");
      this.B = this.G.sendRequest(
        "POST",
        b,
        { lounge_token: g.Ig(a).join(",") },
        (0, g.Va)(this.ida, this, a),
        (0, g.Va)(this.hda, this)
      );
    } else Fwb(this, {}), E8(this);
  };
  g.k.ida = function (a, b) {
    this.B = null;
    var c = g.Ig(Gwb(this));
    if (g.lc(c, g.Ig(a))) {
      b = b.screens || [];
      c = {};
      for (var d = b.length, e = 0; e < d; ++e)
        c[a[b[e].loungeToken]] = b[e].status == "online";
      Fwb(this, c);
      E8(this);
    } else this.xg("Changing Screen set during request."), this.cU();
  };
  g.k.hda = function (a) {
    this.xg("Screen availability failed: " + a);
    this.B = null;
    E8(this);
  };
  g.k.xg = function (a) {
    v8("OnlineScreenService", a);
  };
  g.Za(F8, A8);
  g.k = F8.prototype;
  g.k.start = function () {
    this.B.start();
    this.j.start();
    this.screens.length &&
      (this.publish("screenChange"),
      this.j.isEmpty() || this.publish("onlineScreenChange"));
  };
  g.k.add = function (a, b, c) {
    this.B.add(a, b, c);
  };
  g.k.remove = function (a, b, c) {
    this.B.remove(a, b, c);
    this.j.update();
  };
  g.k.SN = function (a, b, c, d) {
    this.B.contains(a)
      ? this.B.SN(a, b, c, d)
      : ((a = "Updating name of unknown screen: " + a.name),
        v8(this.L, a),
        d(Error(a)));
  };
  g.k.Xl = function (a) {
    return a
      ? this.screens
      : g.bc(
          this.screens,
          g.un(
            this.C,
            function (b) {
              return !this.contains(b);
            },
            this
          )
        );
  };
  g.k.uW = function () {
    return g.un(
      this.Xl(!0),
      function (a) {
        return !!this.j.j[a.id];
      },
      this
    );
  };
  g.k.vW = function (a, b, c, d, e, f) {
    var h = this;
    this.info("getDialScreenByPairingCode " + a + " / " + b);
    var l = new zwb(this.D, a, b, c, d);
    l.subscribe("pairingComplete", function (m, n) {
      g.ib(l);
      e(G8(h, m), n);
    });
    l.subscribe("pairingFailed", function (m) {
      g.ib(l);
      f(m);
    });
    l.start();
    return (0, g.Va)(l.stop, l);
  };
  g.k.Z5 = function (a, b, c, d) {
    g.Pr(t8(this.D, "/pairing/get_screen"), {
      method: "POST",
      postParams: { pairing_code: a },
      timeout: 5e3,
      onSuccess: (0, g.Va)(function (e, f) {
        e = new C7(f.screen || {});
        if (!e.name || Kwb(this, e.name)) {
          a: {
            f = e.name;
            for (var h = 2, l = b(f, h); Kwb(this, l); ) {
              h++;
              if (h > 20) break a;
              l = b(f, h);
            }
            f = l;
          }
          e.name = f;
        }
        c(G8(this, e));
      }, this),
      onError: (0, g.Va)(function (e) {
        d(Error("pairing request failed: " + e.status));
      }, this),
      onTimeout: (0, g.Va)(function () {
        d(Error("pairing request timed out."));
      }, this),
    });
  };
  g.k.xa = function () {
    g.ib(this.B);
    g.ib(this.j);
    F8.Zf.xa.call(this);
  };
  g.k.C$ = function () {
    Mwb(this);
    this.publish("screenChange");
    this.j.update();
  };
  F8.prototype.dispose = F8.prototype.dispose;
  g.Za(H8, g.Dx);
  g.k = H8.prototype;
  g.k.bk = function (a) {
    this.Ja() ||
      (a && (J8(this, "" + a), this.publish("sessionFailed")),
      (this.j = null),
      this.publish("sessionScreen", null));
  };
  g.k.info = function (a) {
    v8(this.Fa, a);
  };
  g.k.wW = function () {
    return null;
  };
  g.k.uU = function (a) {
    var b = this.B;
    a
      ? ((b.displayStatus = new chrome.cast.ReceiverDisplayStatus(a, [])),
        (b.displayStatus.showStop = !0))
      : (b.displayStatus = null);
    chrome.cast.setReceiverDisplayStatus(
      b,
      (0, g.Va)(function () {
        this.info("Updated receiver status for " + b.friendlyName + ": " + a);
      }, this),
      (0, g.Va)(function () {
        J8(this, "Failed to update receiver status for: " + b.friendlyName);
      }, this)
    );
  };
  g.k.xa = function () {
    this.uU("");
    H8.Zf.xa.call(this);
  };
  g.w(K8, H8);
  g.k = K8.prototype;
  g.k.sU = function (a) {
    if (this.C) {
      if (this.C == a) return;
      J8(this, "Overriding cast session with new session object");
      Ywb(this);
      this.Ba = !1;
      this.Z = "unknown";
      this.C.removeUpdateListener(this.ra);
      this.C.removeMessageListener(
        "urn:x-cast:com.google.youtube.mdx",
        this.Ea
      );
    }
    this.C = a;
    this.C.addUpdateListener(this.ra);
    this.C.addMessageListener("urn:x-cast:com.google.youtube.mdx", this.Ea);
    Twb(this, "getMdxSessionStatus");
  };
  g.k.HB = function (a) {
    this.info("launchWithParams no-op for Cast: " + g.Mi(a));
  };
  g.k.stop = function () {
    this.C
      ? this.C.stop(
          (0, g.Va)(function () {
            this.bk();
          }, this),
          (0, g.Va)(function () {
            this.bk(Error("Failed to stop receiver app."));
          }, this)
        )
      : this.bk(Error("Stopping cast device without session."));
  };
  g.k.uU = function () {};
  g.k.xa = function () {
    this.info("disposeInternal");
    Ywb(this);
    this.C &&
      (this.C.removeUpdateListener(this.ra),
      this.C.removeMessageListener(
        "urn:x-cast:com.google.youtube.mdx",
        this.Ea
      ));
    this.C = null;
    H8.prototype.xa.call(this);
  };
  g.k.Oda = function (a, b) {
    if (!this.Ja())
      if (b)
        if (((b = x7(b)), g.Sa(b)))
          switch (
            ((a = "" + b.type),
            (b = b.data || {}),
            this.info("onYoutubeMessage_: " + a + " " + g.Mi(b)),
            a)
          ) {
            case "mdxSessionStatus":
              Qwb(this, b);
              break;
            case "loungeToken":
              Uwb(this, b);
              break;
            default:
              J8(this, "Unknown youtube message: " + a);
          }
        else J8(this, "Unable to parse message.");
      else J8(this, "No data in message.");
  };
  g.k.FZ = function (a, b, c, d) {
    g.Hr(this.W);
    this.W = 0;
    Jwb(
      this.D,
      this.B.label,
      a,
      this.B.friendlyName,
      (0, g.Va)(function (e) {
        e
          ? b(e)
          : d >= 0
          ? (J8(
              this,
              "Screen " + a + " appears to be offline. " + d + " retries left."
            ),
            (this.W = g.Fr((0, g.Va)(this.FZ, this, a, b, c, d - 1), 300)))
          : c(Error("Unable to fetch screen."));
      }, this),
      c
    );
  };
  g.k.wW = function () {
    return this.C;
  };
  g.k.a6 = function (a) {
    this.Ja() || a || (J8(this, "Cast session died."), this.bk());
  };
  g.w(L8, H8);
  g.k = L8.prototype;
  g.k.sU = function (a) {
    this.C = a;
    this.C.addUpdateListener(this.Ma);
  };
  g.k.HB = function (a) {
    this.La = a;
    this.qa();
  };
  g.k.stop = function () {
    fxb(this);
    this.C
      ? this.C.stop(
          (0, g.Va)(this.bk, this, null),
          (0, g.Va)(this.bk, this, "Failed to stop DIAL device.")
        )
      : this.bk();
  };
  g.k.xa = function () {
    fxb(this);
    this.C && this.C.removeUpdateListener(this.Ma);
    this.C = null;
    H8.prototype.xa.call(this);
  };
  g.k.b6 = function (a) {
    this.Ja() ||
      a ||
      (J8(this, "DIAL session died."),
      this.G(),
      (this.G = function () {}),
      this.bk());
  };
  g.w(O8, H8);
  O8.prototype.stop = function () {
    this.bk();
  };
  O8.prototype.sU = function () {};
  O8.prototype.HB = function () {
    g.Hr(this.C);
    this.C = NaN;
    var a = F7(this.D.Xl(), this.B.label);
    a ? I8(this, a) : this.bk(Error("No such screen"));
  };
  O8.prototype.xa = function () {
    g.Hr(this.C);
    this.C = NaN;
    H8.prototype.xa.call(this);
  };
  g.w(P8, g.Dx);
  g.k = P8.prototype;
  g.k.init = function (a, b) {
    chrome.cast.timeout.requestSession = 3e4;
    var c = new chrome.cast.SessionRequest(this.W, [
      chrome.cast.Capability.AUDIO_OUT,
    ]);
    g.Kr("desktop_enable_cast_connect") && (c.androidReceiverCompatible = !0);
    this.Z || (c.dialRequest = new chrome.cast.DialRequest("YouTube"));
    var d = chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED;
    a =
      a || this.L
        ? chrome.cast.DefaultActionPolicy.CAST_THIS_TAB
        : chrome.cast.DefaultActionPolicy.CREATE_SESSION;
    var e = (0, g.Va)(this.Nca, this);
    c = new chrome.cast.ApiConfig(c, (0, g.Va)(this.z1, this), e, d, a);
    c.customDialLaunchCallback = (0, g.Va)(this.Jba, this);
    chrome.cast.initialize(
      c,
      (0, g.Va)(function () {
        this.Ja() ||
          (chrome.cast.addReceiverActionListener(this.G),
          swb(),
          this.B.subscribe("onlineScreenChange", (0, g.Va)(this.xW, this)),
          (this.C = ixb(this)),
          chrome.cast.setCustomReceivers(
            this.C,
            function () {},
            (0, g.Va)(function (f) {
              this.xg("Failed to set initial custom receivers: " + g.Mi(f));
            }, this)
          ),
          this.publish("yt-remote-cast2-availability-change", R8(this)),
          b(!0));
      }, this),
      (0, g.Va)(function (f) {
        this.xg("Failed to initialize API: " + g.Mi(f));
        b(!1);
      }, this)
    );
  };
  g.k.gfa = function (a, b) {
    Q8("Setting connected screen ID: " + a + " -> " + b);
    if (this.j) {
      var c = this.j.j;
      if (!a || (c && c.id != a))
        Q8("Unsetting old screen status: " + this.j.B.friendlyName),
          S8(this, null);
    }
    if (a && b) {
      if (!this.j) {
        a = F7(this.B.Xl(), a);
        if (!a) {
          Q8("setConnectedScreenStatus: Unknown screen.");
          return;
        }
        if (a.idType == "shortLived") {
          Q8(
            "setConnectedScreenStatus: Screen with id type to be short lived."
          );
          return;
        }
        c = gxb(this, a);
        c ||
          (Q8("setConnectedScreenStatus: Connected receiver not custom..."),
          (c = new chrome.cast.Receiver(a.uuid ? a.uuid : a.id, a.name)),
          (c.receiverType = chrome.cast.ReceiverType.CUSTOM),
          this.C.push(c),
          chrome.cast.setCustomReceivers(
            this.C,
            function () {},
            (0, g.Va)(function (d) {
              this.xg("Failed to set initial custom receivers: " + g.Mi(d));
            }, this)
          ));
        Q8("setConnectedScreenStatus: new active receiver: " + c.friendlyName);
        S8(this, new O8(this.B, c), !0);
      }
      this.j.uU(b);
    } else Q8("setConnectedScreenStatus: no screen.");
  };
  g.k.kfa = function (a) {
    this.Ja()
      ? this.xg("Setting connection data on disposed cast v2")
      : this.j
      ? this.j.HB(a)
      : this.xg("Setting connection data without a session");
  };
  g.k.d6 = function () {
    this.Ja()
      ? this.xg("Stopping session on disposed cast v2")
      : this.j
      ? (this.j.stop(), S8(this, null))
      : Q8("Stopping non-existing session");
  };
  g.k.requestSession = function () {
    chrome.cast.requestSession(
      (0, g.Va)(this.z1, this),
      (0, g.Va)(this.lda, this)
    );
  };
  g.k.xa = function () {
    this.B.unsubscribe("onlineScreenChange", (0, g.Va)(this.xW, this));
    window.chrome &&
      chrome.cast &&
      chrome.cast.removeReceiverActionListener(this.G);
    var a = pwb,
      b = g.Oa("yt.mdx.remote.debug.handlers_");
    g.$b(b || [], a);
    g.ib(this.j);
    g.Dx.prototype.xa.call(this);
  };
  g.k.xg = function (a) {
    v8("Controller", a);
  };
  g.k.B1 = function (a, b) {
    this.j == a &&
      (b || S8(this, null), this.publish("yt-remote-cast2-session-change", b));
  };
  g.k.Kca = function (a, b) {
    if (!this.Ja())
      if (a)
        switch (
          ((a.friendlyName = chrome.cast.unescape(a.friendlyName)),
          Q8(
            "onReceiverAction_ " + a.label + " / " + a.friendlyName + "-- " + b
          ),
          b)
        ) {
          case chrome.cast.ReceiverAction.CAST:
            if (this.j)
              if (this.j.B.label != a.label)
                Q8(
                  "onReceiverAction_: Stopping active receiver: " +
                    this.j.B.friendlyName
                ),
                  this.j.stop();
              else {
                Q8("onReceiverAction_: Casting to active receiver.");
                this.j.j &&
                  this.publish("yt-remote-cast2-session-change", this.j.j);
                break;
              }
            switch (a.receiverType) {
              case chrome.cast.ReceiverType.CUSTOM:
                S8(this, new O8(this.B, a));
                break;
              case chrome.cast.ReceiverType.DIAL:
                S8(this, new L8(this.B, a, this.D, this.config_));
                break;
              case chrome.cast.ReceiverType.CAST:
                S8(this, new K8(this.B, a, this.config_));
                break;
              default:
                this.xg("Unknown receiver type: " + a.receiverType);
            }
            break;
          case chrome.cast.ReceiverAction.STOP:
            this.j && this.j.B.label == a.label
              ? this.j.stop()
              : this.xg("Stopping receiver w/o session: " + a.friendlyName);
        }
      else this.xg("onReceiverAction_ called without receiver.");
  };
  g.k.Jba = function (a) {
    if (this.Ja()) return Promise.reject(Error("disposed"));
    var b = a.receiver;
    b.receiverType != chrome.cast.ReceiverType.DIAL &&
      (this.xg("Not DIAL receiver: " + b.friendlyName),
      (b.receiverType = chrome.cast.ReceiverType.DIAL));
    var c = this.j ? this.j.B : null;
    if (!c || c.label != b.label)
      return (
        this.xg(
          "Receiving DIAL launch request for non-clicked DIAL receiver: " +
            b.friendlyName
        ),
        Promise.reject(Error("illegal DIAL launch"))
      );
    if (
      c &&
      c.label == b.label &&
      c.receiverType != chrome.cast.ReceiverType.DIAL
    ) {
      if (this.j.j)
        return (
          Q8("Reselecting dial screen."),
          this.publish("yt-remote-cast2-session-change", this.j.j),
          Promise.resolve(new chrome.cast.DialLaunchResponse(!1))
        );
      this.xg(
        'Changing CAST intent from "' +
          c.receiverType +
          '" to "dial" for ' +
          b.friendlyName
      );
      S8(this, new L8(this.B, b, this.D, this.config_));
    }
    b = this.j;
    b.W = a;
    b.W.appState == chrome.cast.DialAppState.RUNNING
      ? ((a = b.W.extraData || {}),
        (c = a.screenId || null),
        M8(b) && a.loungeToken
          ? a.loungeTokenRefreshIntervalMs
            ? (a = cxb(
                b,
                {
                  name: b.B.friendlyName,
                  screenId: a.screenId,
                  loungeToken: a.loungeToken,
                  dialId: b.W.receiver.label,
                  screenIdType: "shortLived",
                },
                a.loungeTokenRefreshIntervalMs
              ))
            : (g.nr(
                Error(
                  "No loungeTokenRefreshIntervalMs presents in additionalData: " +
                    JSON.stringify(a) +
                    "."
                )
              ),
              (a = dxb(b, c)))
          : (a = dxb(b, c)))
      : (a = axb(b));
    return a;
  };
  g.k.z1 = function (a) {
    var b = this;
    if (!this.Ja() && !this.L) {
      Q8("New cast session ID: " + a.sessionId);
      var c = a.receiver;
      if (c.receiverType != chrome.cast.ReceiverType.CUSTOM) {
        if (!this.j)
          if (c.receiverType == chrome.cast.ReceiverType.CAST)
            Q8("Got resumed cast session before resumed mdx connection."),
              (c.friendlyName = chrome.cast.unescape(c.friendlyName)),
              S8(this, new K8(this.B, c, this.config_), !0);
          else {
            this.xg(
              "Got non-cast session without previous mdx receiver event, or mdx resume."
            );
            return;
          }
        var d = this.j.B,
          e = F7(this.B.Xl(), d.label);
        e &&
          D7(e, c.label) &&
          d.receiverType != chrome.cast.ReceiverType.CAST &&
          c.receiverType == chrome.cast.ReceiverType.CAST &&
          (Q8(
            "onSessionEstablished_: manual to cast session change " +
              c.friendlyName
          ),
          g.ib(this.j),
          (this.j = new K8(this.B, c, this.config_)),
          this.j.subscribe("sessionScreen", (0, g.Va)(this.B1, this, this.j)),
          this.j.subscribe("sessionFailed", function () {
            return hxb(b, b.j);
          }),
          this.j.HB(null));
        this.j.sU(a);
      }
    }
  };
  g.k.c6 = function () {
    return this.j ? this.j.wW() : null;
  };
  g.k.lda = function (a) {
    this.Ja() ||
      (this.xg("Failed to estabilish a session: " + g.Mi(a)),
      a.code != chrome.cast.ErrorCode.CANCEL && S8(this, null),
      this.publish("yt-remote-cast2-session-failed"));
  };
  g.k.Nca = function (a) {
    Q8("Receiver availability updated: " + a);
    if (!this.Ja()) {
      var b = R8(this);
      this.U = a == chrome.cast.ReceiverAvailability.AVAILABLE;
      R8(this) != b &&
        this.publish("yt-remote-cast2-availability-change", R8(this));
    }
  };
  g.k.xW = function () {
    this.Ja() ||
      ((this.C = ixb(this)),
      Q8("Updating custom receivers: " + g.Mi(this.C)),
      chrome.cast.setCustomReceivers(
        this.C,
        function () {},
        (0, g.Va)(function () {
          this.xg("Failed to set custom receivers.");
        }, this)
      ),
      this.publish("yt-remote-cast2-availability-change", R8(this)));
  };
  P8.prototype.setLaunchParams = P8.prototype.kfa;
  P8.prototype.setConnectedScreenStatus = P8.prototype.gfa;
  P8.prototype.stopSession = P8.prototype.d6;
  P8.prototype.getCastSession = P8.prototype.c6;
  P8.prototype.requestSession = P8.prototype.requestSession;
  P8.prototype.init = P8.prototype.init;
  P8.prototype.dispose = P8.prototype.dispose;
  var rxb = [];
  g.k = Z8.prototype;
  g.k.reset = function (a) {
    this.listId = "";
    this.index = -1;
    this.videoId = "";
    xxb(this);
    this.volume = -1;
    this.muted = !1;
    a &&
      ((this.index = a.index),
      (this.listId = a.listId),
      (this.videoId = a.videoId),
      (this.playerState = a.playerState),
      (this.volume = a.volume),
      (this.muted = a.muted),
      (this.audioTrackId = a.audioTrackId),
      (this.trackData = a.trackData),
      (this.mq = a.hasPrevious),
      (this.Zl = a.hasNext),
      (this.U = a.playerTime),
      (this.L = a.playerTimeAt),
      (this.D = a.seekableStart),
      (this.j = a.seekableEnd),
      (this.G = a.duration),
      (this.W = a.loadedTime),
      (this.C = a.liveIngestionTime),
      (this.B = !isNaN(this.C)));
  };
  g.k.isPlaying = function () {
    return this.playerState == 1;
  };
  g.k.isBuffering = function () {
    return this.playerState == 3;
  };
  g.k.Tk = function () {
    return this.playerState == 1081;
  };
  g.k.Xq = function (a) {
    this.G = isNaN(a) ? 0 : a;
  };
  g.k.getDuration = function () {
    return this.B ? this.G + $8(this) : this.G;
  };
  g.k.clone = function () {
    return new Z8(yxb(this));
  };
  g.w(e9, g.Dx);
  g.k = e9.prototype;
  g.k.getState = function () {
    return this.C;
  };
  g.k.Du = function () {
    return this.D.getReconnectTimeout();
  };
  g.k.iz = function () {
    this.D.reconnect();
  };
  g.k.play = function () {
    g9(this)
      ? (this.j ? this.j.play(null, g.vi, k9(this, "play")) : j9(this, "play"),
        Bxb(this, 1, b9(f9(this))),
        this.publish("remotePlayerChange"))
      : h9(this, this.play);
  };
  g.k.pause = function () {
    g9(this)
      ? (this.j
          ? this.j.pause(null, g.vi, k9(this, "pause"))
          : j9(this, "pause"),
        Bxb(this, 2, b9(f9(this))),
        this.publish("remotePlayerChange"))
      : h9(this, this.pause);
  };
  g.k.seekTo = function (a) {
    if (g9(this)) {
      if (this.j) {
        var b = f9(this),
          c = new chrome.cast.media.SeekRequest();
        c.currentTime = a;
        b.isPlaying() || b.isBuffering()
          ? (c.resumeState = chrome.cast.media.ResumeState.PLAYBACK_START)
          : (c.resumeState = chrome.cast.media.ResumeState.PLAYBACK_PAUSE);
        this.j.seek(c, g.vi, k9(this, "seekTo", { newTime: a }));
      } else j9(this, "seekTo", { newTime: a });
      Bxb(this, 3, a);
      this.publish("remotePlayerChange");
    } else h9(this, g.Xa(this.seekTo, a));
  };
  g.k.stop = function () {
    if (g9(this)) {
      this.j
        ? this.j.stop(null, g.vi, k9(this, "stopVideo"))
        : j9(this, "stopVideo");
      var a = f9(this);
      a.index = -1;
      a.videoId = "";
      xxb(a);
      i9(this, a);
      this.publish("remotePlayerChange");
    } else h9(this, this.stop);
  };
  g.k.setVolume = function (a, b) {
    if (g9(this)) {
      var c = f9(this);
      if (this.B) {
        if (c.volume != a) {
          var d = Math.round(a) / 100;
          this.B.setReceiverVolumeLevel(
            d,
            (0, g.Va)(function () {
              w8("set receiver volume: " + d);
            }, this),
            (0, g.Va)(function () {
              this.xg("failed to set receiver volume.");
            }, this)
          );
        }
        c.muted != b &&
          this.B.setReceiverMuted(
            b,
            (0, g.Va)(function () {
              w8("set receiver muted: " + b);
            }, this),
            (0, g.Va)(function () {
              this.xg("failed to set receiver muted.");
            }, this)
          );
      } else {
        var e = { volume: a, muted: b };
        c.volume != -1 && (e.delta = a - c.volume);
        j9(this, "setVolume", e);
      }
      c.muted = b;
      c.volume = a;
      i9(this, c);
    } else h9(this, g.Xa(this.setVolume, a, b));
  };
  g.k.yW = function (a, b) {
    if (g9(this)) {
      var c = f9(this);
      a = { videoId: a };
      b &&
        ((c.trackData = {
          trackName: b.name,
          languageCode: b.languageCode,
          sourceLanguageCode: b.translationLanguage
            ? b.translationLanguage.languageCode
            : "",
          languageName: b.languageName,
          kind: b.kind,
        }),
        (a.style = g.Mi(b.style)),
        g.Rg(a, c.trackData));
      j9(this, "setSubtitlesTrack", a);
      i9(this, c);
    } else h9(this, g.Xa(this.yW, a, b));
  };
  g.k.setAudioTrack = function (a, b) {
    g9(this)
      ? ((b = b.getLanguageInfo().getId()),
        j9(this, "setAudioTrack", { videoId: a, audioTrackId: b }),
        (a = f9(this)),
        (a.audioTrackId = b),
        i9(this, a))
      : h9(this, g.Xa(this.setAudioTrack, a, b));
  };
  g.k.playVideo = function (a, b, c, d, e, f, h) {
    d = d === void 0 ? null : d;
    e = e === void 0 ? null : e;
    f = f === void 0 ? null : f;
    h = h === void 0 ? null : h;
    var l = f9(this),
      m = { videoId: a };
    c !== void 0 && (m.currentIndex = c);
    c9(l, a, c || 0);
    b !== void 0 && (a9(l, b), (m.currentTime = b));
    d && (m.listId = d);
    e && (m.playerParams = e);
    f && (m.clickTrackingParams = f);
    h && (m.locationInfo = g.Mi(h));
    j9(this, "setPlaylist", m);
    d || i9(this, l);
  };
  g.k.QM = function (a, b) {
    if (g9(this)) {
      if (a && b) {
        var c = f9(this);
        c9(c, a, b);
        i9(this, c);
      }
      j9(this, "previous");
    } else h9(this, g.Xa(this.QM, a, b));
  };
  g.k.nextVideo = function (a, b) {
    if (g9(this)) {
      if (a && b) {
        var c = f9(this);
        c9(c, a, b);
        i9(this, c);
      }
      j9(this, "next");
    } else h9(this, g.Xa(this.nextVideo, a, b));
  };
  g.k.BP = function () {
    if (g9(this)) {
      j9(this, "clearPlaylist");
      var a = f9(this);
      a.reset();
      i9(this, a);
      this.publish("remotePlayerChange");
    } else h9(this, this.BP);
  };
  g.k.LY = function () {
    g9(this) ? j9(this, "dismissAutoplay") : h9(this, this.LY);
  };
  g.k.dispose = function () {
    if (this.C != 3) {
      var a = this.C;
      this.C = 3;
      this.publish("proxyStateChange", a, this.C);
    }
    g.Dx.prototype.dispose.call(this);
  };
  g.k.xa = function () {
    Axb(this);
    this.D = null;
    this.G.clear();
    d9(this, null);
    g.Dx.prototype.xa.call(this);
  };
  g.k.yU = function (a) {
    if ((a != this.C || a == 2) && this.C != 3 && a != 0) {
      var b = this.C;
      this.C = a;
      this.publish("proxyStateChange", b, a);
      if (a == 1)
        for (; !this.G.isEmpty(); )
          (b = a = this.G),
            b.j.length === 0 && ((b.j = b.B), b.j.reverse(), (b.B = [])),
            a.j.pop().apply(this);
      else a == 3 && this.dispose();
    }
  };
  g.k.Ica = function (a, b) {
    this.publish(a, b);
  };
  g.k.Aba = function (a) {
    if (!a) this.aH(null), d9(this, null);
    else if (this.B.receiver.volume) {
      a = this.B.receiver.volume;
      var b = f9(this),
        c = Math.round(100 * a.level || 0);
      if (b.volume != c || b.muted != a.muted)
        w8("Cast volume update: " + a.level + (a.muted ? " muted" : "")),
          (b.volume = c),
          (b.muted = !!a.muted),
          i9(this, b);
    }
  };
  g.k.aH = function (a) {
    w8("Cast media: " + !!a);
    this.j && this.j.removeUpdateListener(this.W);
    if ((this.j = a))
      this.j.addUpdateListener(this.W),
        Cxb(this),
        this.publish("remotePlayerChange");
  };
  g.k.zba = function (a) {
    a ? (Cxb(this), this.publish("remotePlayerChange")) : this.aH(null);
  };
  g.k.dV = function () {
    j9(this, "sendDebugCommand", { debugCommand: "stats4nerds " });
  };
  g.k.Cba = function () {
    var a = uxb();
    a && d9(this, a);
  };
  g.k.xg = function (a) {
    v8("CP", a);
  };
  g.w(n9, g.Dx);
  g.k = n9.prototype;
  g.k.connect = function (a, b) {
    if (b) {
      var c = b.listId,
        d = b.videoId,
        e = b.videoIds,
        f = b.playerParams,
        h = b.clickTrackingParams,
        l = b.index,
        m = { videoId: d },
        n = b.currentTime,
        p = b.locationInfo;
      b = b.loopMode;
      n !== void 0 && (m.currentTime = n <= 5 ? 0 : n);
      f && (m.playerParams = f);
      p && (m.locationInfo = p);
      h && (m.clickTrackingParams = h);
      c && (m.listId = c);
      e && e.length > 0 && (m.videoIds = e.join(","));
      l !== void 0 && (m.currentIndex = l);
      this.Ma && (m.loopMode = b || "LOOP_MODE_OFF");
      c && (this.j.listId = c);
      this.j.videoId = d;
      this.j.index = l || 0;
      this.j.state = 3;
      a9(this.j, n);
      this.G = "UNSUPPORTED";
      c = this.Ma ? "setInitialState" : "setPlaylist";
      l9("Connecting with " + c + " and params: " + g.Mi(m));
      this.B.connect({ method: c, params: g.Mi(m) }, a, dub());
    } else l9("Connecting without params"), this.B.connect({}, a, dub());
    Gxb(this);
  };
  g.k.Ys = function (a) {
    this.B.Ys(a);
  };
  g.k.dispose = function () {
    this.Ja() ||
      (g.Na("yt.mdx.remote.remoteClient_", null),
      this.publish("beforeDispose"),
      m9(this, 3));
    g.Dx.prototype.dispose.call(this);
  };
  g.k.xa = function () {
    Hxb(this);
    Jxb(this);
    Ixb(this);
    g.Hr(this.W);
    this.W = NaN;
    g.Hr(this.Z);
    this.Z = NaN;
    this.D = null;
    g.Ns(this.qa);
    this.qa.length = 0;
    this.B.dispose();
    g.Dx.prototype.xa.call(this);
    this.G = this.U = this.C = this.j = this.B = null;
  };
  g.k.E_ = function (a) {
    if (!this.C || this.C.length === 0) return !1;
    for (var b = g.x(this.C), c = b.next(); !c.done; c = b.next())
      if (!c.value.capabilities.has(a)) return !1;
    return !0;
  };
  g.k.Z9 = function () {
    var a = 3;
    this.Ja() ||
      ((a = 0),
      isNaN(this.VF()) ? this.B.vB() && isNaN(this.L) && (a = 1) : (a = 2));
    return a;
  };
  g.k.JA = function (a) {
    l9("Disconnecting with " + a);
    g.Na("yt.mdx.remote.remoteClient_", null);
    Hxb(this);
    this.publish("beforeDisconnect", a);
    a == 1 && I7();
    this.B.disconnect(a);
    this.dispose();
  };
  g.k.T9 = function () {
    var a = this.j;
    this.D && ((a = this.j.clone()), c9(a, this.D, a.index));
    return yxb(a);
  };
  g.k.nfa = function (a) {
    var b = this,
      c = new Z8(a);
    c.videoId &&
      c.videoId != this.j.videoId &&
      ((this.D = c.videoId),
      g.Hr(this.W),
      (this.W = g.Fr(function () {
        if (b.D) {
          var e = b.D;
          b.D = null;
          b.j.videoId != e && o9(b, "getNowPlaying");
        }
      }, 5e3)));
    var d = [];
    (this.j.listId == c.listId &&
      this.j.videoId == c.videoId &&
      this.j.index == c.index) ||
      d.push("remoteQueueChange");
    (this.j.playerState == c.playerState &&
      this.j.volume == c.volume &&
      this.j.muted == c.muted &&
      b9(this.j) == b9(c) &&
      g.Mi(this.j.trackData) == g.Mi(c.trackData)) ||
      d.push("remotePlayerChange");
    this.j.reset(a);
    g.nc(
      d,
      function (e) {
        this.publish(e);
      },
      this
    );
  };
  g.k.AZ = function () {
    var a = this.B.getDeviceId(),
      b = g.Wb(this.C, function (c) {
        return c.type == "REMOTE_CONTROL" && c.id != a;
      });
    return b ? b.id : "";
  };
  g.k.VF = function () {
    return this.B.Du();
  };
  g.k.D9 = function () {
    return this.G || "UNSUPPORTED";
  };
  g.k.E9 = function () {
    return this.U || "";
  };
  g.k.e6 = function () {
    !isNaN(this.VF()) && this.B.iz();
  };
  g.k.dfa = function (a, b) {
    o9(this, a, b);
    Lxb(this);
  };
  g.k.zW = function () {
    var a = g.$r("SAPISID", "") || g.$r("__Secure-1PAPISID") || "",
      b = g.$r("__Secure-3PAPISID", "") || "";
    if (!a && !b) return "";
    a = g.tc(g.vb(a), 2);
    b = g.tc(g.vb(b), 2);
    return g.tc(g.vb("," + a + "," + b), 2);
  };
  n9.prototype.subscribe = n9.prototype.subscribe;
  n9.prototype.unsubscribeByKey = n9.prototype.Qh;
  n9.prototype.getProxyState = n9.prototype.Z9;
  n9.prototype.disconnect = n9.prototype.JA;
  n9.prototype.getPlayerContextData = n9.prototype.T9;
  n9.prototype.setPlayerContextData = n9.prototype.nfa;
  n9.prototype.getOtherConnectedRemoteId = n9.prototype.AZ;
  n9.prototype.getReconnectTimeout = n9.prototype.VF;
  n9.prototype.getAutoplayMode = n9.prototype.D9;
  n9.prototype.getAutoplayVideoId = n9.prototype.E9;
  n9.prototype.reconnect = n9.prototype.e6;
  n9.prototype.sendMessage = n9.prototype.dfa;
  n9.prototype.getXsrfToken = n9.prototype.zW;
  n9.prototype.isCapabilitySupportedOnConnectedDevices = n9.prototype.E_;
  g.w(Xxb, A8);
  g.k = Xxb.prototype;
  g.k.Xl = function (a) {
    return this.Ch.$_gs(a);
  };
  g.k.contains = function (a) {
    return !!this.Ch.$_c(a);
  };
  g.k.get = function (a) {
    return this.Ch.$_g(a);
  };
  g.k.start = function () {
    this.Ch.$_st();
  };
  g.k.add = function (a, b, c) {
    this.Ch.$_a(a, b, c);
  };
  g.k.remove = function (a, b, c) {
    this.Ch.$_r(a, b, c);
  };
  g.k.SN = function (a, b, c, d) {
    this.Ch.$_un(a, b, c, d);
  };
  g.k.xa = function () {
    for (var a = this.j.length, b = 0; b < a; ++b) this.Ch.$_ubk(this.j[b]);
    this.j.length = 0;
    this.Ch = null;
    A8.prototype.xa.call(this);
  };
  g.k.f6 = function () {
    this.publish("screenChange");
  };
  g.k.rca = function () {
    this.publish("onlineScreenChange");
  };
  F8.prototype.$_st = F8.prototype.start;
  F8.prototype.$_gspc = F8.prototype.Z5;
  F8.prototype.$_gsppc = F8.prototype.vW;
  F8.prototype.$_c = F8.prototype.contains;
  F8.prototype.$_g = F8.prototype.get;
  F8.prototype.$_a = F8.prototype.add;
  F8.prototype.$_un = F8.prototype.SN;
  F8.prototype.$_r = F8.prototype.remove;
  F8.prototype.$_gs = F8.prototype.Xl;
  F8.prototype.$_gos = F8.prototype.uW;
  F8.prototype.$_s = F8.prototype.subscribe;
  F8.prototype.$_ubk = F8.prototype.Qh;
  var z9 = null,
    C9 = !1,
    p9 = null,
    q9 = null,
    hyb = null,
    u9 = [];
  g.w(myb, g.O);
  g.k = myb.prototype;
  g.k.xa = function () {
    g.O.prototype.xa.call(this);
    this.j.stop();
    this.B.stop();
    this.U.stop();
    var a = this.Lc;
    a.unsubscribe("proxyStateChange", this.v1, this);
    a.unsubscribe("remotePlayerChange", this.iH, this);
    a.unsubscribe("remoteQueueChange", this.wM, this);
    a.unsubscribe("previousNextChange", this.q1, this);
    a.unsubscribe("nowAutoplaying", this.l1, this);
    a.unsubscribe("autoplayDismissed", this.P0, this);
    this.Lc = this.module = null;
  };
  g.k.Sk = function (a) {
    var b = g.Ca.apply(1, arguments);
    if (this.Lc.C != 2)
      if (D9(this)) {
        if (!f9(this.Lc).Tk() || a !== "control_seek")
          switch (a) {
            case "control_toggle_play_pause":
              f9(this.Lc).isPlaying() ? this.Lc.pause() : this.Lc.play();
              break;
            case "control_play":
              this.Lc.play();
              break;
            case "control_pause":
              this.Lc.pause();
              break;
            case "control_seek":
              this.L.lO(b[0], b[1]);
              break;
            case "control_subtitles_set_track":
              oyb(this, b[0]);
              break;
            case "control_set_audio_track":
              this.setAudioTrack(b[0]);
          }
      } else
        switch (a) {
          case "control_toggle_play_pause":
          case "control_play":
          case "control_pause":
            b = this.K.getCurrentTime();
            E9(this, b === 0 ? void 0 : b);
            break;
          case "control_seek":
            E9(this, b[0]);
            break;
          case "control_subtitles_set_track":
            oyb(this, b[0]);
            break;
          case "control_set_audio_track":
            this.setAudioTrack(b[0]);
        }
  };
  g.k.xba = function (a) {
    this.U.J5(a);
  };
  g.k.lga = function (a) {
    this.Sk("control_subtitles_set_track", g.Mg(a) ? null : a);
  };
  g.k.B3 = function () {
    var a = this.K.getOption("captions", "track");
    g.Mg(a) || oyb(this, a);
  };
  g.k.Wc = function (a) {
    this.module.Wc(a, this.K.getVideoData().lengthSeconds);
  };
  g.k.cca = function () {
    g.Mg(this.C) || pyb(this, this.C);
    this.D = !1;
  };
  g.k.v1 = function (a, b) {
    this.B.stop();
    b === 2 && this.t3();
  };
  g.k.iH = function () {
    if (D9(this)) {
      this.j.stop();
      var a = f9(this.Lc);
      switch (a.playerState) {
        case 1080:
        case 1081:
        case 1084:
        case 1085:
          this.module.Ei = 1;
          break;
        case 1082:
        case 1083:
          this.module.Ei = 0;
          break;
        default:
          this.module.Ei = -1;
      }
      switch (a.playerState) {
        case 1081:
        case 1:
          this.Ic(new g.$G(8));
          this.s3();
          break;
        case 1085:
        case 3:
          this.Ic(new g.$G(9));
          break;
        case 1083:
        case 0:
          this.Ic(new g.$G(2));
          this.L.stop();
          this.Wc(this.K.getVideoData().lengthSeconds);
          break;
        case 1084:
          this.Ic(new g.$G(4));
          break;
        case 2:
          this.Ic(new g.$G(4));
          this.Wc(b9(a));
          break;
        case -1:
          this.Ic(new g.$G(64));
          break;
        case -1e3:
          this.Ic(
            new g.$G(128, {
              errorCode: "mdx.remoteerror",
              errorMessage: "This video is not available for remote playback.",
              LA: 2,
            })
          );
      }
      a = f9(this.Lc).trackData;
      var b = this.C;
      (a || b
        ? a &&
          b &&
          a.trackName == b.trackName &&
          a.languageCode == b.languageCode &&
          a.languageName == b.languageName &&
          a.kind == b.kind
        : 1) || ((this.C = a), pyb(this, a));
      a = f9(this.Lc);
      a.volume === -1 ||
        (Math.round(this.K.getVolume()) === a.volume &&
          this.K.isMuted() === a.muted) ||
        this.W.isActive() ||
        this.m4();
    } else nyb(this);
  };
  g.k.q1 = function () {
    this.K.publish("mdxpreviousnextchange");
  };
  g.k.wM = function () {
    D9(this) || nyb(this);
  };
  g.k.l1 = function (a) {
    isNaN(a) || this.K.publish("mdxnowautoplaying", a);
  };
  g.k.P0 = function () {
    this.K.publish("mdxautoplaycanceled");
  };
  g.k.setAudioTrack = function (a) {
    D9(this) && this.Lc.setAudioTrack(this.K.getVideoData(1).videoId, a);
  };
  g.k.seekTo = function (a, b) {
    f9(this.Lc).playerState === -1 ? E9(this, a) : b && this.Lc.seekTo(a);
  };
  g.k.m4 = function () {
    var a = this;
    if (D9(this)) {
      var b = f9(this.Lc);
      this.events.Oc(this.Z);
      b.muted ? this.K.mute() : this.K.unMute();
      this.K.setVolume(b.volume);
      this.Z = this.events.T(this.K, "onVolumeChange", function (c) {
        kyb(a, c);
      });
    }
  };
  g.k.s3 = function () {
    this.j.stop();
    if (!this.Lc.Ja()) {
      var a = f9(this.Lc);
      a.isPlaying() && this.Ic(new g.$G(8));
      this.Wc(b9(a));
      this.j.start();
    }
  };
  g.k.t3 = function () {
    this.B.stop();
    this.j.stop();
    var a = this.Lc.Du();
    this.Lc.C == 2 && !isNaN(a) && this.B.start();
  };
  g.k.Ic = function (a) {
    this.B.stop();
    var b = this.G;
    if (!g.MH(b, a)) {
      var c = g.T(a, 2);
      c !== g.T(this.G, 2) && this.K.OC(c);
      this.G = a;
      ryb(this.module, b, a);
    }
  };
  g.w(F9, g.S);
  F9.prototype.qd = function () {
    this.j.show();
  };
  F9.prototype.Pb = function () {
    this.j.hide();
  };
  F9.prototype.B = function () {
    K7("mdx-privacy-popup-cancel");
    this.Pb();
  };
  F9.prototype.C = function () {
    K7("mdx-privacy-popup-confirm");
    this.Pb();
  };
  g.w(G9, g.S);
  G9.prototype.onStateChange = function (a) {
    this.zd(a.state);
  };
  G9.prototype.zd = function (a) {
    if (this.api.getPresentingPlayerType() === 3) {
      var b = {
        RECEIVER_NAME: this.api.getOption("remote", "currentReceiver").name,
      };
      a = g.T(a, 128)
        ? g.NE("Error on $RECEIVER_NAME", b)
        : a.isPlaying() || a.isPaused()
        ? g.NE("Playing on $RECEIVER_NAME", b)
        : g.NE("Connected to $RECEIVER_NAME", b);
      this.updateValue("statustext", a);
      this.j.show();
    } else this.j.hide();
  };
  g.w(H9, g.NX);
  H9.prototype.D = function () {
    var a = this.K.getOption("remote", "receivers");
    a && a.length > 1 && !this.K.getOption("remote", "quickCast")
      ? ((this.Iv = g.oc(a, this.j, this)),
        this.Ml(g.Kl(a, this.j)),
        (a = this.K.getOption("remote", "currentReceiver")),
        (a = this.j(a)),
        this.options[a] && this.Oi(a),
        this.enable(!0))
      : this.enable(!1);
  };
  H9.prototype.j = function (a) {
    return a.key;
  };
  H9.prototype.Ll = function (a) {
    return a === "cast-selector-receiver" ? "Cast..." : this.Iv[a].name;
  };
  H9.prototype.lh = function (a) {
    g.NX.prototype.lh.call(this, a);
    this.K.setOption("remote", "currentReceiver", this.Iv[a]);
    this.Gb.Pb();
  };
  g.w(qyb, g.qY);
  g.k = qyb.prototype;
  g.k.create = function () {
    var a = this.player.V(),
      b = g.TP(a);
    a = {
      device: "Desktop",
      app: "youtube-desktop",
      loadCastApiSetupScript: a.N("mdx_load_cast_api_bootstrap_script"),
      enableDialLoungeToken: a.N("enable_dial_short_lived_lounge_token"),
      enableCastLoungeToken: a.N("enable_cast_short_lived_lounge_token"),
    };
    byb(b, a);
    this.subscriptions.push(
      g.Dv("yt-remote-before-disconnect", this.vba, this)
    );
    this.subscriptions.push(
      g.Dv("yt-remote-connection-change", this.Pca, this)
    );
    this.subscriptions.push(
      g.Dv("yt-remote-receiver-availability-change", this.t1, this)
    );
    this.subscriptions.push(g.Dv("yt-remote-auto-connect", this.Mca, this));
    this.subscriptions.push(g.Dv("yt-remote-receiver-resumed", this.Lca, this));
    this.subscriptions.push(g.Dv("mdx-privacy-popup-confirm", this.pea, this));
    this.subscriptions.push(g.Dv("mdx-privacy-popup-cancel", this.oea, this));
    this.t1();
  };
  g.k.load = function () {
    this.player.cancelPlayback();
    g.qY.prototype.load.call(this);
    this.Om = new myb(this, this.player, this.Lc);
    var a = (a = jyb()) ? a.currentTime : 0;
    var b = gyb() ? new e9(y9(), void 0) : null;
    a == 0 && b && (a = b9(f9(b)));
    a !== 0 && this.Wc(a);
    ryb(this, this.Oe, this.Oe);
    this.player.Wq(6);
  };
  g.k.unload = function () {
    this.player.publish("mdxautoplaycanceled");
    this.Zt = this.Gq;
    g.jb(this.Om, this.Lc);
    this.Lc = this.Om = null;
    g.qY.prototype.unload.call(this);
    this.player.Wq(5);
    I9(this);
  };
  g.k.xa = function () {
    g.Ev(this.subscriptions);
    g.qY.prototype.xa.call(this);
  };
  g.k.dH = function (a) {
    var b = g.Ca.apply(1, arguments);
    this.loaded && this.Om.Sk.apply(this.Om, [a].concat(g.z(b)));
  };
  g.k.getAdState = function () {
    return this.Ei;
  };
  g.k.mq = function () {
    return this.Lc ? f9(this.Lc).mq : !1;
  };
  g.k.Zl = function () {
    return this.Lc ? f9(this.Lc).Zl : !1;
  };
  g.k.Wc = function (a, b) {
    this.T_ = a || 0;
    this.player.publish("progresssync", a, b);
    this.player.Ed("onVideoProgress", a || 0);
  };
  g.k.getCurrentTime = function () {
    return this.T_;
  };
  g.k.getProgressState = function () {
    var a = f9(this.Lc),
      b = this.player.getVideoData();
    return {
      airingStart: 0,
      airingEnd: 0,
      allowSeeking: !a.Tk() && this.player.Eh(),
      clipEnd: b.clipEnd,
      clipStart: b.clipStart,
      current: this.getCurrentTime(),
      displayedStart: -1,
      duration: a.getDuration(),
      ingestionTime: a.B ? a.C + $8(a) : a.C,
      isAtLiveHead: (a.B ? a.j + $8(a) : a.j) - this.getCurrentTime() <= 1,
      loaded: a.W,
      seekableEnd: a.B ? a.j + $8(a) : a.j,
      seekableStart: a.D > 0 ? a.D + $8(a) : a.D,
      offset: 0,
      viewerLivestreamJoinMediaTime: 0,
    };
  };
  g.k.nextVideo = function () {
    this.Lc && this.Lc.nextVideo();
  };
  g.k.QM = function () {
    this.Lc && this.Lc.QM();
  };
  g.k.vba = function (a) {
    a === 1 && (this.IT = this.Lc ? f9(this.Lc) : null);
  };
  g.k.Pca = function () {
    var a = gyb() ? new e9(y9(), void 0) : null;
    if (a) {
      var b = this.Zt;
      this.loaded && this.unload();
      this.Lc = a;
      this.IT = null;
      b.key !== this.Gq.key && ((this.Zt = b), this.load());
    } else
      g.ib(this.Lc),
        (this.Lc = null),
        this.loaded &&
          (this.unload(),
          (a = this.IT) &&
            a.videoId === this.player.getVideoData().videoId &&
            this.player.cueVideoById(a.videoId, b9(a)));
    this.player.publish(
      "videodatachange",
      "newdata",
      this.player.getVideoData(),
      3
    );
  };
  g.k.t1 = function () {
    var a = [this.Gq],
      b = a.concat,
      c = cyb();
    W8() &&
      g.Ys("yt-remote-cast-available") &&
      c.push({ key: "cast-selector-receiver", name: "Cast..." });
    this.Iv = b.call(a, c);
    a = eyb() || this.Gq;
    J9(this, a);
    this.player.Ed("onMdxReceiversChange");
  };
  g.k.Mca = function () {
    var a = eyb();
    J9(this, a);
  };
  g.k.Lca = function () {
    this.Zt = eyb();
  };
  g.k.pea = function () {
    this.BH = !0;
    I9(this);
    C9 = !1;
    z9 && B9(z9, 1);
    z9 = null;
  };
  g.k.oea = function () {
    this.BH = !1;
    I9(this);
    J9(this, this.Gq);
    this.Zt = this.Gq;
    C9 = !1;
    z9 = null;
    this.player.playVideo();
  };
  g.k.ri = function (a, b) {
    switch (a) {
      case "casting":
        return this.loaded;
      case "receivers":
        return this.Iv;
      case "currentReceiver":
        return (
          b && (b.key === "cast-selector-receiver" ? vxb() : J9(this, b)),
          this.loaded ? this.Zt : this.Gq
        );
      case "quickCast":
        return this.Iv.length === 2 &&
          this.Iv[1].key === "cast-selector-receiver"
          ? (b && vxb(), !0)
          : !1;
    }
  };
  g.k.dV = function () {
    this.Lc.dV();
  };
  g.k.Nn = function () {
    return !1;
  };
  g.k.getOptions = function () {
    return ["casting", "receivers", "currentReceiver", "quickCast"];
  };
  g.k.isLoggedIn = function () {
    var a, b;
    return ((a = g.kr("PLAYER_CONFIG")) == null
      ? void 0
      : (b = a.args) == null
      ? void 0
      : b.authuser) !== void 0
      ? !0
      : !(!g.kr("SESSION_INDEX") && !g.kr("LOGGED_IN"));
  };
  g.pY("remote", qyb);
})(_yt_player);
