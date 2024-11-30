var _yt_player = {};
(function (g) {
  var window = this;
  ("use strict");
  var Xlb = function (a, b) {
      a.gb("onAutonavCoundownStarted", b);
    },
    C5 = function (a, b, c) {
      g.Ap(a.element, "ytp-suggestion-set", !!b.videoId);
      var d = b.playlistId;
      c = b.Ah(c ? c : "mqdefault.jpg");
      var e = null,
        f = null;
      b instanceof g.JQ &&
        (b.lengthText
          ? ((e = b.lengthText || null), (f = b.qy || null))
          : b.lengthSeconds &&
            ((e = g.Xy(b.lengthSeconds)), (f = g.Xy(b.lengthSeconds, !0))));
      var h = !!d;
      d = h && g.HQ(d).type === "RD";
      var l = b instanceof g.JQ ? b.isLivePlayback : null,
        m = b instanceof g.JQ ? b.isUpcoming : null,
        n = b.author,
        p = b.shortViewCount,
        q = b.publishedTimeText,
        r = [],
        t = [];
      n && r.push(n);
      p && (r.push(p), t.push(p));
      q && t.push(q);
      c = {
        title: b.title,
        author: n,
        author_and_views: r.join(" \u2022 "),
        aria_label: b.ariaLabel || g.NE("Watch $TITLE", { TITLE: b.title }),
        duration: e,
        timestamp: f,
        url: b.Yl(),
        is_live: l,
        is_upcoming: m,
        is_list: h,
        is_mix: d,
        background: c ? "background-image: url(" + c + ")" : "",
        views_and_publish_time: t.join(" \u2022 "),
        autoplayAlternativeHeader: b.Rt,
      };
      b instanceof g.IQ && (c.playlist_length = b.playlistLength);
      a.update(c);
    },
    D5 = function (a) {
      var b = a.V(),
        c = b.D;
      g.S.call(this, {
        J: "a",
        S: "ytp-autonav-suggestion-card",
        Y: {
          href: "{{url}}",
          target: c ? b.Z : "",
          "aria-label": "{{aria_label}}",
          "data-is-live": "{{is_live}}",
          "data-is-list": "{{is_list}}",
          "data-is-mix": "{{is_mix}}",
          "data-is-upcoming": "{{is_upcoming}}",
        },
        X: [
          {
            J: "div",
            Ka: [
              "ytp-autonav-endscreen-upnext-thumbnail",
              "ytp-autonav-thumbnail-small",
            ],
            Y: { style: "{{background}}" },
            X: [
              {
                J: "div",
                Y: { "aria-label": "{{timestamp}}" },
                Ka: ["ytp-autonav-timestamp"],
                ya: "{{duration}}",
              },
              { J: "div", Ka: ["ytp-autonav-live-stamp"], ya: "Live" },
              { J: "div", Ka: ["ytp-autonav-upcoming-stamp"], ya: "Upcoming" },
              {
                J: "div",
                S: "ytp-autonav-list-overlay",
                X: [
                  { J: "div", S: "ytp-autonav-mix-text", ya: "Mix" },
                  { J: "div", S: "ytp-autonav-mix-icon" },
                ],
              },
            ],
          },
          {
            J: "div",
            Ka: [
              "ytp-autonav-endscreen-upnext-title",
              "ytp-autonav-title-card",
            ],
            ya: "{{title}}",
          },
          {
            J: "div",
            Ka: [
              "ytp-autonav-endscreen-upnext-author",
              "ytp-autonav-author-card",
            ],
            ya: "{{author}}",
          },
          {
            J: "div",
            Ka: [
              "ytp-autonav-endscreen-upnext-author",
              "ytp-autonav-view-and-date-card",
            ],
            ya: "{{views_and_publish_time}}",
          },
        ],
      });
      this.K = a;
      this.suggestion = null;
      this.j = c;
      this.listen("click", this.onClick);
      this.listen("keypress", this.onKeyPress);
    },
    E5 = function (a, b) {
      b = b === void 0 ? !1 : b;
      g.S.call(this, {
        J: "div",
        S: "ytp-autonav-endscreen-countdown-overlay",
      });
      var c = this;
      this.L = b;
      this.cancelCommand = this.G = void 0;
      this.C = 0;
      this.container = new g.S({
        J: "div",
        S: "ytp-autonav-endscreen-countdown-container",
      });
      g.P(this, this.container);
      this.container.Ga(this.element);
      b = a.V();
      var d = b.D;
      this.K = a;
      this.suggestion = null;
      this.onVideoDataChange("newdata", this.K.getVideoData());
      this.T(a, "videodatachange", this.onVideoDataChange);
      this.j = new g.S({
        J: "div",
        S: "ytp-autonav-endscreen-upnext-container",
        Y: {
          "aria-label": "{{aria_label}}",
          "data-is-live": "{{is_live}}",
          "data-is-list": "{{is_list}}",
          "data-is-mix": "{{is_mix}}",
          "data-is-upcoming": "{{is_upcoming}}",
        },
        X: [
          { J: "div", S: "ytp-autonav-endscreen-upnext-header" },
          {
            J: "div",
            S: "ytp-autonav-endscreen-upnext-alternative-header",
            ya: "{{autoplayAlternativeHeader}}",
          },
          {
            J: "a",
            S: "ytp-autonav-endscreen-link-container",
            Y: { href: "{{url}}", target: d ? b.Z : "" },
            X: [
              {
                J: "div",
                S: "ytp-autonav-endscreen-upnext-thumbnail",
                Y: { style: "{{background}}" },
                X: [
                  {
                    J: "div",
                    Y: { "aria-label": "{{timestamp}}" },
                    Ka: ["ytp-autonav-timestamp"],
                    ya: "{{duration}}",
                  },
                  { J: "div", Ka: ["ytp-autonav-live-stamp"], ya: "Live" },
                  {
                    J: "div",
                    Ka: ["ytp-autonav-upcoming-stamp"],
                    ya: "Upcoming",
                  },
                ],
              },
              {
                J: "div",
                S: "ytp-autonav-endscreen-video-info",
                X: [
                  { J: "div", S: "ytp-autonav-endscreen-premium-badge" },
                  {
                    J: "div",
                    S: "ytp-autonav-endscreen-upnext-title",
                    ya: "{{title}}",
                  },
                  {
                    J: "div",
                    S: "ytp-autonav-endscreen-upnext-author",
                    ya: "{{author}}",
                  },
                  {
                    J: "div",
                    S: "ytp-autonav-view-and-date",
                    ya: "{{views_and_publish_time}}",
                  },
                  {
                    J: "div",
                    S: "ytp-autonav-author-and-view",
                    ya: "{{author_and_views}}",
                  },
                ],
              },
            ],
          },
        ],
      });
      g.P(this, this.j);
      this.j.Ga(this.container.element);
      d ||
        this.T(
          this.j.Da("ytp-autonav-endscreen-link-container"),
          "click",
          this.WV
        );
      this.K.createClientVe(this.container.element, this, 115127);
      this.K.createClientVe(
        this.j.Da("ytp-autonav-endscreen-link-container"),
        this,
        115128
      );
      this.overlay = new g.S({ J: "div", S: "ytp-autonav-overlay" });
      g.P(this, this.overlay);
      this.overlay.Ga(this.container.element);
      this.B = new g.S({
        J: "div",
        S: "ytp-autonav-endscreen-button-container",
      });
      g.P(this, this.B);
      this.B.Ga(this.container.element);
      this.cancelButton = new g.S({
        J: "button",
        Ka: [
          "ytp-autonav-endscreen-upnext-button",
          "ytp-autonav-endscreen-upnext-cancel-button",
          b.N("web_modern_buttons")
            ? "ytp-autonav-endscreen-upnext-button-rounded"
            : "",
        ],
        Y: { "aria-label": "Cancel autoplay" },
        ya: "Cancel",
      });
      g.P(this, this.cancelButton);
      this.cancelButton.Ga(this.B.element);
      this.cancelButton.listen("click", this.v5, this);
      this.K.createClientVe(this.cancelButton.element, this, 115129);
      this.playButton = new g.S({
        J: "a",
        Ka: [
          "ytp-autonav-endscreen-upnext-button",
          "ytp-autonav-endscreen-upnext-play-button",
          b.N("web_modern_buttons")
            ? "ytp-autonav-endscreen-upnext-button-rounded"
            : "",
        ],
        Y: { href: "{{url}}", role: "button", "aria-label": "Play next video" },
        ya: "Play Now",
      });
      g.P(this, this.playButton);
      this.playButton.Ga(this.B.element);
      this.playButton.listen("click", this.WV, this);
      this.K.N("web_player_autonav_next_button_renderer")
        ? (this.K.createServerVe(this.playButton.element, this.playButton, !0),
          (b = this.K.getVideoData()) && Ylb(this, b))
        : this.K.createClientVe(this.playButton.element, this, 115130);
      this.D = new g.op(function () {
        Zlb(c);
      }, 500);
      g.P(this, this.D);
      this.VV();
      this.T(a, "autonavvisibility", this.VV);
      this.K.N("web_autonav_color_transition") &&
        (this.T(a, "autonavchange", this.u5),
        this.T(a, "onAutonavCoundownStarted", this.uba));
    },
    F5 = function (a) {
      var b = a.K.hn(!0, a.K.isFullscreen());
      g.Ap(a.container.element, "ytp-autonav-endscreen-small-mode", a.fh(b));
      g.Ap(
        a.container.element,
        "ytp-autonav-endscreen-is-premium",
        !!a.suggestion && !!a.suggestion.zN
      );
      g.Ap(
        a.K.getRootNode(),
        "ytp-autonav-endscreen-cancelled-state",
        !a.K.Of()
      );
      g.Ap(a.K.getRootNode(), "countdown-running", a.im());
      g.Ap(a.container.element, "ytp-player-content", a.K.Of());
      g.zm(a.overlay.element, { width: b.width + "px" });
      if (!a.im()) {
        a.K.Of() ? $lb(a, Math.round(amb(a) / 1e3)) : $lb(a);
        b = !!a.suggestion && !!a.suggestion.Rt;
        var c = a.K.Of() || !b;
        g.Ap(
          a.container.element,
          "ytp-autonav-endscreen-upnext-alternative-header-only",
          !c && b
        );
        g.Ap(
          a.container.element,
          "ytp-autonav-endscreen-upnext-no-alternative-header",
          c && !b
        );
        g.Kx(a.B, a.K.Of());
        g.Ap(a.element, "ytp-enable-w2w-color-transitions", bmb(a));
      }
    },
    Zlb = function (a) {
      var b = amb(a),
        c = Math,
        d = c.min;
      var e = a.C ? Date.now() - a.C : 0;
      c = d.call(c, e, b);
      $lb(a, Math.ceil((b - c) / 1e3));
      b - c <= 500 && a.im() ? a.select(!0) : a.im() && a.D.start();
    },
    amb = function (a) {
      if (a.K.isFullscreen()) {
        var b;
        a = (b = a.K.getVideoData()) == null ? void 0 : b.kE;
        return a === -1 || a === void 0 ? 8e3 : a;
      }
      return a.K.uu() >= 0
        ? a.K.uu()
        : g.JD(a.K.V().experiments, "autoplay_time") || 1e4;
    },
    Ylb = function (a, b) {
      a.K.N("web_player_autonav_next_button_renderer");
      b = b.j5;
      a.G = b == null ? void 0 : b.navigationEndpoint;
      b = b == null ? void 0 : b.trackingParams;
      a.playButton && b && a.K.setTrackingParams(a.playButton.element, b);
    },
    bmb = function (a) {
      var b;
      return !(
        (b = a.K.getVideoData()) == null || !b.watchToWatchTransitionRenderer
      );
    },
    $lb = function (a, b) {
      b = b === void 0 ? -1 : b;
      a = a.j.Da("ytp-autonav-endscreen-upnext-header");
      g.nh(a);
      if (b >= 0) {
        b = String(b);
        var c = "Up next in $SECONDS".match(RegExp("\\$SECONDS", "gi"))[0],
          d = "Up next in $SECONDS".indexOf(c);
        if (d >= 0) {
          a.appendChild(g.lh("Up next in $SECONDS".slice(0, d)));
          var e = g.kh("span");
          g.up(e, "ytp-autonav-endscreen-upnext-header-countdown-number");
          g.rh(e, b);
          a.appendChild(e);
          a.appendChild(g.lh("Up next in $SECONDS".slice(d + c.length)));
          return;
        }
      }
      g.rh(a, "Up next");
    },
    G5 = function (a, b) {
      g.S.call(this, {
        J: "div",
        Ka: ["html5-endscreen", "ytp-player-content", b || "base-endscreen"],
      });
      this.created = !1;
      this.player = a;
    },
    H5 = function (a) {
      g.S.call(this, {
        J: "div",
        Ka: ["ytp-upnext", "ytp-player-content"],
        Y: { "aria-label": "{{aria_label}}" },
        X: [
          {
            J: "div",
            S: "ytp-cued-thumbnail-overlay-image",
            Y: { style: "{{background}}" },
          },
          {
            J: "span",
            S: "ytp-upnext-top",
            X: [
              { J: "span", S: "ytp-upnext-header", ya: "Up Next" },
              { J: "span", S: "ytp-upnext-title", ya: "{{title}}" },
              { J: "span", S: "ytp-upnext-author", ya: "{{author}}" },
            ],
          },
          {
            J: "a",
            S: "ytp-upnext-autoplay-icon",
            Y: {
              role: "button",
              href: "{{url}}",
              "aria-label": "Play next video",
            },
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
                    S: "ytp-svg-autoplay-circle",
                    Y: {
                      cx: "36",
                      cy: "36",
                      fill: "#fff",
                      "fill-opacity": "0.3",
                      r: "31.5",
                    },
                  },
                  {
                    J: "circle",
                    S: "ytp-svg-autoplay-ring",
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
                    J: "path",
                    S: "ytp-svg-fill",
                    Y: {
                      d: "M 24,48 41,36 24,24 V 48 z M 44,24 v 24 h 4 V 24 h -4 z",
                    },
                  },
                ],
              },
            ],
          },
          {
            J: "span",
            S: "ytp-upnext-bottom",
            X: [
              { J: "span", S: "ytp-upnext-cancel" },
              { J: "span", S: "ytp-upnext-paused", ya: "Autoplay is paused" },
            ],
          },
        ],
      });
      this.api = a;
      this.cancelButton = null;
      this.G = this.Da("ytp-svg-autoplay-ring");
      this.C = this.notification = this.j = this.suggestion = null;
      this.D = new g.op(this.PJ, 5e3, this);
      this.B = 0;
      var b = this.Da("ytp-upnext-cancel");
      this.cancelButton = new g.S({
        J: "button",
        Ka: ["ytp-upnext-cancel-button", "ytp-button"],
        Y: { tabindex: "0", "aria-label": "Cancel autoplay" },
        ya: "Cancel",
      });
      g.P(this, this.cancelButton);
      this.cancelButton.listen("click", this.w5, this);
      this.cancelButton.Ga(b);
      this.cancelButton &&
        this.api.createClientVe(this.cancelButton.element, this, 115129);
      g.P(this, this.D);
      this.api.createClientVe(this.element, this, 18788);
      b = this.Da("ytp-upnext-autoplay-icon");
      this.T(b, "click", this.x5);
      this.api.createClientVe(b, this, 115130);
      this.XV();
      this.T(a, "autonavvisibility", this.XV);
      this.T(a, "mdxnowautoplaying", this.gca);
      this.T(a, "mdxautoplaycanceled", this.hca);
      g.Ap(this.element, "ytp-upnext-mobile", this.api.V().B);
    },
    cmb = function (a, b) {
      if (b) return b;
      if (a.api.isFullscreen()) {
        var c;
        a = (c = a.api.getVideoData()) == null ? void 0 : c.kE;
        return a === -1 || a === void 0 ? 8e3 : a;
      }
      return a.api.uu() >= 0
        ? a.api.uu()
        : g.JD(a.api.V().experiments, "autoplay_time") || 1e4;
    },
    dmb = function (a, b) {
      b = cmb(a, b);
      var c = Math,
        d = c.min;
      var e = (0, g.Tt)() - a.B;
      c = d.call(c, e, b);
      b = b === 0 ? 1 : Math.min(c / b, 1);
      a.G.setAttribute("stroke-dashoffset", "" + -211 * (b + 1));
      b >= 1 && a.im() && a.api.getPresentingPlayerType() !== 3
        ? a.select(!0)
        : a.im() && a.j.start();
    },
    I5 = function (a) {
      G5.call(this, a, "autonav-endscreen");
      this.overlay = this.videoData = null;
      this.table = new g.S({
        J: "div",
        S: "ytp-suggestion-panel",
        X: [
          {
            J: "div",
            Ka: [
              "ytp-autonav-endscreen-upnext-header",
              "ytp-autonav-endscreen-more-videos",
            ],
            ya: "More videos",
          },
        ],
      });
      this.W = new g.S({ J: "div", S: "ytp-suggestions-container" });
      this.videos = [];
      this.C = null;
      this.G = this.L = !1;
      this.B = new E5(this.player);
      g.P(this, this.B);
      this.B.Ga(this.element);
      a.getVideoData().ag
        ? (this.j = this.B)
        : ((this.j = new H5(a)),
          g.wS(this.player, this.j.element, 4),
          g.P(this, this.j));
      this.overlay = new g.S({
        J: "div",
        S: "ytp-autonav-overlay-cancelled-state",
      });
      g.P(this, this.overlay);
      this.overlay.Ga(this.element);
      this.D = new g.dG(this);
      g.P(this, this.D);
      g.P(this, this.table);
      this.table.Ga(this.element);
      this.table.show();
      g.P(this, this.W);
      this.W.Ga(this.table.element);
      this.hide();
    },
    J5 = function (a) {
      var b = a.Of();
      b !== a.G &&
        ((a.G = b),
        a.player.publish("autonavvisibility"),
        a.G
          ? (a.B !== a.j && a.B.hide(), a.table.hide())
          : (a.B !== a.j && a.B.show(), a.table.show()));
    },
    K5 = function (a, b) {
      g.S.call(this, {
        J: "button",
        Ka: ["ytp-watch-on-youtube-button", "ytp-button"],
        ya: "{{content}}",
      });
      this.K = a;
      this.buttonType = this.buttonType = b;
      this.e3();
      this.buttonType === 2 &&
        g.wp(this.element, "ytp-continue-watching-button");
      this.listen("click", this.onClick);
      this.listen("videodatachange", this.e3);
      g.Kx(this, !0);
    },
    L5 = function (a, b) {
      G5.call(this, a, "embeds-lite-endscreen");
      this.K = a;
      this.We = b;
      this.K.createClientVe(this.element, this, 156943);
      this.watchButton = new K5(a, 2);
      g.P(this, this.watchButton);
      this.watchButton.Ga(this.element);
      this.hide();
    },
    emb = function (a) {
      G5.call(this, a, "subscribecard-endscreen");
      this.j = new g.S({
        J: "div",
        S: "ytp-subscribe-card",
        X: [
          { J: "img", S: "ytp-author-image", Y: { src: "{{profilePicture}}" } },
          {
            J: "div",
            S: "ytp-subscribe-card-right",
            X: [
              { J: "div", S: "ytp-author-name", ya: "{{author}}" },
              { J: "div", S: "html5-subscribe-button-container" },
            ],
          },
        ],
      });
      g.P(this, this.j);
      this.j.Ga(this.element);
      var b = a.getVideoData();
      this.subscribeButton = new g.VY(
        "Subscribe",
        null,
        "Unsubscribe",
        null,
        !0,
        !1,
        b.Dm,
        b.subscribed,
        "trailer-endscreen",
        null,
        a,
        !1
      );
      g.P(this, this.subscribeButton);
      this.subscribeButton.Ga(this.j.Da("html5-subscribe-button-container"));
      this.T(a, "videodatachange", this.Ta);
      this.Ta();
      this.hide();
    },
    M5 = function (a) {
      var b = a.V(),
        c = g.$F || g.LP ? { style: "will-change: opacity" } : void 0,
        d = b.D,
        e = ["ytp-videowall-still"];
      b.B && e.push("ytp-videowall-show-text");
      g.S.call(this, {
        J: "a",
        Ka: e,
        Y: {
          href: "{{url}}",
          target: d ? b.Z : "",
          "aria-label": "{{aria_label}}",
          "data-is-live": "{{is_live}}",
          "data-is-list": "{{is_list}}",
          "data-is-mix": "{{is_mix}}",
        },
        X: [
          {
            J: "div",
            S: "ytp-videowall-still-image",
            Y: { style: "{{background}}" },
          },
          {
            J: "span",
            S: "ytp-videowall-still-info",
            Y: { "aria-hidden": "true" },
            X: [
              {
                J: "span",
                S: "ytp-videowall-still-info-bg",
                X: [
                  {
                    J: "span",
                    S: "ytp-videowall-still-info-content",
                    Y: c,
                    X: [
                      {
                        J: "span",
                        S: "ytp-videowall-still-info-title",
                        ya: "{{title}}",
                      },
                      {
                        J: "span",
                        S: "ytp-videowall-still-info-author",
                        ya: "{{author_and_views}}",
                      },
                      {
                        J: "span",
                        S: "ytp-videowall-still-info-live",
                        ya: "Live",
                      },
                      {
                        J: "span",
                        S: "ytp-videowall-still-info-duration",
                        ya: "{{duration}}",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            J: "span",
            Ka: [
              "ytp-videowall-still-listlabel-regular",
              "ytp-videowall-still-listlabel",
            ],
            Y: { "aria-hidden": "true" },
            X: [
              { J: "span", S: "ytp-videowall-still-listlabel-icon" },
              "Playlist",
              {
                J: "span",
                S: "ytp-videowall-still-listlabel-length",
                X: [" (", { J: "span", ya: "{{playlist_length}}" }, ")"],
              },
            ],
          },
          {
            J: "span",
            Ka: [
              "ytp-videowall-still-listlabel-mix",
              "ytp-videowall-still-listlabel",
            ],
            Y: { "aria-hidden": "true" },
            X: [
              { J: "span", S: "ytp-videowall-still-listlabel-mix-icon" },
              "Mix",
              {
                J: "span",
                S: "ytp-videowall-still-listlabel-length",
                ya: " (50+)",
              },
            ],
          },
        ],
      });
      this.suggestion = null;
      this.B = d;
      this.api = a;
      this.j = new g.dG(this);
      g.P(this, this.j);
      this.listen("click", this.onClick);
      this.listen("keypress", this.onKeyPress);
      this.j.T(a, "videodatachange", this.onVideoDataChange);
      a.createServerVe(this.element, this);
      this.onVideoDataChange();
    },
    N5 = function (a) {
      G5.call(this, a, "videowall-endscreen");
      var b = this;
      this.K = a;
      this.C = 0;
      this.stills = [];
      this.D = this.videoData = null;
      this.G = this.W = !1;
      this.Z = null;
      this.B = new g.dG(this);
      g.P(this, this.B);
      this.L = new g.op(function () {
        g.wp(b.element, "ytp-show-tiles");
      }, 0);
      g.P(this, this.L);
      var c = new g.S({
        J: "button",
        Ka: ["ytp-button", "ytp-endscreen-previous"],
        Y: { "aria-label": "Previous" },
        X: [g.Rx()],
      });
      g.P(this, c);
      c.Ga(this.element);
      c.listen("click", this.B5, this);
      this.table = new g.Hx({ J: "div", S: "ytp-endscreen-content" });
      g.P(this, this.table);
      this.table.Ga(this.element);
      c = new g.S({
        J: "button",
        Ka: ["ytp-button", "ytp-endscreen-next"],
        Y: { "aria-label": "Next" },
        X: [g.Sx()],
      });
      g.P(this, c);
      c.Ga(this.element);
      c.listen("click", this.A5, this);
      a.getVideoData().ag ? (this.j = new E5(a, !0)) : (this.j = new H5(a));
      g.P(this, this.j);
      g.wS(this.player, this.j.element, 4);
      a.createClientVe(this.element, this, 158789);
      this.hide();
    },
    O5 = function (a) {
      return g.xS(a.player) && a.KE() && !a.D;
    },
    P5 = function (a) {
      var b = a.Of();
      b !== a.W && ((a.W = b), a.player.publish("autonavvisibility"));
    },
    Q5 = function (a) {
      G5.call(this, a, "watch-again-on-youtube-endscreen");
      this.watchButton = new K5(a, 1);
      g.P(this, this.watchButton);
      this.watchButton.Ga(this.element);
      g.Iab(a) &&
        ((this.j = new g.E1(a)),
        g.P(this, this.j),
        (this.B = new g.S({
          J: "div",
          Ka: ["ytp-watch-again-on-youtube-endscreen-more-videos-container"],
          Y: { tabIndex: "-1" },
          X: [this.j],
        })),
        g.P(this, this.B),
        this.j.Ga(this.B.element),
        this.B.Ga(this.element));
      a.createClientVe(this.element, this, 156914);
      this.hide();
    },
    imb = function (a) {
      g.qY.call(this, a);
      var b = this;
      this.endScreen = null;
      this.B = this.j = this.C = this.D = !1;
      this.listeners = new g.dG(this);
      g.P(this, this.listeners);
      var c = a.V(),
        d = a.getVideoData();
      d = d && d.limitedPlaybackDurationInSeconds !== 0;
      g.As(g.WP(c)) && d && !g.tS(a)
        ? ((this.B = !0), (this.endScreen = new L5(a, g.hS(a))))
        : a.md()
        ? (this.endScreen = new Q5(a))
        : fmb(a)
        ? ((this.D = !0),
          gmb(this),
          this.j ? (this.endScreen = new I5(a)) : (this.endScreen = new N5(a)))
        : c.ph
        ? (this.endScreen = new emb(a))
        : (this.endScreen = new G5(a));
      g.P(this, this.endScreen);
      g.wS(a, this.endScreen.element, 4);
      hmb(this);
      this.listeners.T(a, "videodatachange", this.onVideoDataChange, this);
      this.listeners.T(a, g.CE("endscreen"), function (e) {
        b.onCueRangeEnter(e);
      });
      this.listeners.T(a, g.DE("endscreen"), function (e) {
        b.onCueRangeExit(e);
      });
    },
    gmb = function (a) {
      var b = a.player.getVideoData();
      if (!b || (a.j === b.Nl && a.C === b.ag)) return !1;
      a.j = b.Nl;
      a.C = b.ag;
      return !0;
    },
    fmb = function (a) {
      a = a.V();
      return a.Bd && !a.ph;
    },
    hmb = function (a) {
      a.player.gf("endscreen");
      var b = a.player.getVideoData();
      b = new g.AE(Math.max((b.lengthSeconds - 10) * 1e3, 0), 0x8000000000000, {
        id: "preload",
        namespace: "endscreen",
      });
      var c = new g.AE(0x8000000000000, 0x8000000000000, {
        id: "load",
        priority: 8,
        namespace: "endscreen",
      });
      a.player.Se([b, c]);
    };
  g.pS.prototype.uu = g.ca(14, function () {
    return this.app.uu();
  });
  g.b0.prototype.uu = g.ca(13, function () {
    return this.getVideoData().EN;
  });
  g.lS.prototype.Zs = g.ca(12, function (a) {
    this.Si().Zs(a);
  });
  g.kZ.prototype.Zs = g.ca(11, function (a) {
    this.j !== a && ((this.j = a), this.Ta());
  });
  g.s_.prototype.Zs = g.ca(10, function (a) {
    this.overflowButton && this.overflowButton.Zs(a);
  });
  g.lS.prototype.gt = g.ca(9, function (a) {
    this.Si().gt(a);
  });
  g.pZ.prototype.gt = g.ca(8, function (a) {
    this.j !== a && ((this.j = a), this.Ta());
  });
  g.s_.prototype.gt = g.ca(7, function (a) {
    this.shareButton && this.shareButton.gt(a);
  });
  g.lS.prototype.NC = g.ca(6, function (a) {
    this.Si().NC(a);
  });
  g.OY.prototype.NC = g.ca(5, function (a) {
    this.xT !== a && ((this.xT = a), this.vr());
  });
  g.lS.prototype.MC = g.ca(4, function (a) {
    this.Si().MC(a);
  });
  g.s_.prototype.MC = g.ca(3, function (a) {
    this.wT !== a && ((this.wT = a), this.rr());
  });
  g.w(D5, g.S);
  D5.prototype.select = function () {
    this.K.Jp(
      this.suggestion.videoId,
      this.suggestion.sessionData,
      this.suggestion.playlistId,
      void 0,
      void 0,
      this.suggestion.uF || void 0
    ) && this.K.logClick(this.element);
  };
  D5.prototype.onClick = function (a) {
    g.jT(a, this.K, this.j, this.suggestion.sessionData || void 0) &&
      this.select();
  };
  D5.prototype.onKeyPress = function (a) {
    switch (a.keyCode) {
      case 13:
      case 32:
        a.defaultPrevented || (this.select(), a.preventDefault());
    }
  };
  g.w(E5, g.S);
  g.k = E5.prototype;
  g.k.aJ = function (a) {
    this.suggestion !== a &&
      ((this.suggestion = a),
      C5(this.j, a),
      this.playButton.updateValue("url", this.suggestion.Yl()),
      F5(this));
  };
  g.k.im = function () {
    return this.C > 0;
  };
  g.k.VC = function () {
    this.im() ||
      ((this.C = Date.now()),
      Zlb(this),
      Xlb(this.K, amb(this)),
      g.Ap(this.K.getRootNode(), "countdown-running", this.im()));
  };
  g.k.Vy = function () {
    this.Zq();
    Zlb(this);
    var a = this.j.Da("ytp-autonav-endscreen-upnext-header");
    a && g.rh(a, "Up next");
  };
  g.k.Zq = function () {
    this.im() && (this.D.stop(), (this.C = 0));
  };
  g.k.select = function (a) {
    this.K.nextVideo(!1, a === void 0 ? !1 : a);
    this.Zq();
  };
  g.k.WV = function (a) {
    g.jT(a, this.K) &&
      (a.currentTarget === this.playButton.element
        ? this.K.logClick(this.playButton.element)
        : a.currentTarget ===
            this.j.Da("ytp-autonav-endscreen-link-container") &&
          ((a = this.j.Da("ytp-autonav-endscreen-link-container")),
          this.K.logVisibility(a, !0),
          this.K.logClick(a)),
      this.K.N("web_player_autonav_next_button_renderer") && this.G
        ? (this.K.gb("innertubeCommand", this.G), this.Zq())
        : this.select());
  };
  g.k.v5 = function () {
    this.K.logClick(this.cancelButton.element);
    g.rS(this.K, !0);
    this.cancelCommand && this.K.gb("innertubeCommand", this.cancelCommand);
  };
  g.k.onVideoDataChange = function (a, b) {
    this.K.N("web_player_autonav_next_button_renderer") && Ylb(this, b);
    var c;
    this.cancelCommand = (c = b.g5) == null ? void 0 : c.command;
  };
  g.k.uba = function (a) {
    if (bmb(this)) {
      var b = this.K.getVideoData().watchToWatchTransitionRenderer,
        c = b == null ? void 0 : b.fromColorPaletteDark;
      b = b == null ? void 0 : b.toColorPaletteDark;
      if (c && b) {
        var d = this.element;
        d.style.setProperty("--w2w-start-background-color", g.lz(c.surgeColor));
        d.style.setProperty(
          "--w2w-start-primary-text-color",
          g.lz(c.primaryTitleColor)
        );
        d.style.setProperty(
          "--w2w-start-secondary-text-color",
          g.lz(c.secondaryTitleColor)
        );
        d.style.setProperty("--w2w-end-background-color", g.lz(b.surgeColor));
        d.style.setProperty(
          "--w2w-end-primary-text-color",
          g.lz(b.primaryTitleColor)
        );
        d.style.setProperty(
          "--w2w-end-secondary-text-color",
          g.lz(b.secondaryTitleColor)
        );
        d.style.setProperty("--w2w-animation-duration", a + "ms");
      }
      g.Ap(this.element, "ytp-w2w-animate", !0);
    }
  };
  g.k.u5 = function (a) {
    this.K.N("web_autonav_color_transition") &&
      a !== 2 &&
      g.Ap(this.element, "ytp-w2w-animate", !1);
  };
  g.k.VV = function () {
    var a = this.K.Of();
    this.L && this.Fb !== a && g.Kx(this, a);
    F5(this);
    this.K.logVisibility(this.container.element, a);
    this.K.logVisibility(this.cancelButton.element, a);
    this.K.logVisibility(this.j.Da("ytp-autonav-endscreen-link-container"), a);
    this.K.logVisibility(this.playButton.element, a);
  };
  g.k.fh = function (a) {
    return a.width < 400 || a.height < 459;
  };
  g.w(G5, g.S);
  g.k = G5.prototype;
  g.k.create = function () {
    this.created = !0;
  };
  g.k.destroy = function () {
    this.created = !1;
  };
  g.k.KE = function () {
    return !1;
  };
  g.k.Of = function () {
    return !1;
  };
  g.k.M_ = function () {
    return !1;
  };
  g.w(H5, g.S);
  g.k = H5.prototype;
  g.k.PJ = function () {
    this.notification &&
      (this.D.stop(),
      this.Oc(this.C),
      (this.C = null),
      this.notification.close(),
      (this.notification = null));
  };
  g.k.aJ = function (a) {
    this.suggestion = a;
    C5(this, a, "hqdefault.jpg");
  };
  g.k.XV = function () {
    g.Kx(this, this.api.Of());
    this.api.logVisibility(this.element, this.api.Of());
    this.api.logVisibility(this.Da("ytp-upnext-autoplay-icon"), this.api.Of());
    this.cancelButton &&
      this.api.logVisibility(this.cancelButton.element, this.api.Of());
  };
  g.k.pca = function () {
    window.focus();
    this.PJ();
  };
  g.k.VC = function (a) {
    var b = this;
    this.im() ||
      (g.Fv("a11y-announce", "Up Next " + this.suggestion.title),
      (this.B = (0, g.Tt)()),
      (this.j = new g.op(function () {
        dmb(b, a);
      }, 25)),
      dmb(this, a),
      Xlb(this.api, cmb(this, a)));
    g.yp(this.element, "ytp-upnext-autoplay-paused");
  };
  g.k.hide = function () {
    g.S.prototype.hide.call(this);
  };
  g.k.im = function () {
    return !!this.j;
  };
  g.k.Vy = function () {
    this.Zq();
    this.B = (0, g.Tt)();
    dmb(this);
    g.wp(this.element, "ytp-upnext-autoplay-paused");
  };
  g.k.Zq = function () {
    this.im() && (this.j.dispose(), (this.j = null));
  };
  g.k.select = function (a) {
    a = a === void 0 ? !1 : a;
    if (
      this.api.V().N("autonav_notifications") &&
      a &&
      window.Notification &&
      typeof document.hasFocus === "function"
    ) {
      var b = Notification.permission;
      b === "default"
        ? Notification.requestPermission()
        : b !== "granted" ||
          document.hasFocus() ||
          (this.PJ(),
          (this.notification = new Notification("Up Next", {
            body: this.suggestion.title,
            icon: this.suggestion.Ah(),
          })),
          (this.C = this.T(this.notification, "click", this.pca)),
          this.D.start());
    }
    this.Zq();
    this.api.nextVideo(!1, a);
  };
  g.k.x5 = function (a) {
    !g.qh(this.cancelButton.element, a.target) &&
      g.jT(a, this.api) &&
      (this.api.Of() && this.api.logClick(this.Da("ytp-upnext-autoplay-icon")),
      this.select());
  };
  g.k.w5 = function () {
    this.api.Of() &&
      this.cancelButton &&
      this.api.logClick(this.cancelButton.element);
    g.rS(this.api, !0);
  };
  g.k.gca = function (a) {
    this.api.getPresentingPlayerType();
    this.show();
    this.VC(a);
  };
  g.k.hca = function () {
    this.api.getPresentingPlayerType();
    this.Zq();
    this.hide();
  };
  g.k.xa = function () {
    this.Zq();
    this.PJ();
    g.S.prototype.xa.call(this);
  };
  g.w(I5, G5);
  g.k = I5.prototype;
  g.k.create = function () {
    G5.prototype.create.call(this);
    this.D.T(this.player, "appresize", this.CD);
    this.D.T(this.player, "onVideoAreaChange", this.CD);
    this.D.T(this.player, "videodatachange", this.onVideoDataChange);
    this.D.T(this.player, "autonavchange", this.YV);
    this.D.T(this.player, "onAutonavCancelled", this.y5);
    this.onVideoDataChange();
  };
  g.k.show = function () {
    G5.prototype.show.call(this);
    (this.L || (this.C && this.C !== this.videoData.clientPlaybackNonce)) &&
      g.rS(this.player, !1);
    g.xS(this.player) && this.KE() && !this.C
      ? (J5(this),
        this.videoData.autonavState === 2
          ? this.player.getVisibilityState() === 3
            ? this.j.select(!0)
            : this.j.VC()
          : this.videoData.autonavState === 3 && this.j.Vy())
      : (g.rS(this.player, !0), J5(this));
    this.CD();
  };
  g.k.hide = function () {
    G5.prototype.hide.call(this);
    this.j.Vy();
    J5(this);
  };
  g.k.CD = function () {
    var a = this.player.hn(!0, this.player.isFullscreen());
    J5(this);
    F5(this.B);
    g.Ap(this.element, "ytp-autonav-cancelled-small-mode", this.fh(a));
    g.Ap(this.element, "ytp-autonav-cancelled-tiny-mode", this.pL(a));
    g.Ap(
      this.element,
      "ytp-autonav-cancelled-mini-mode",
      a.width <= 400 || a.height <= 360
    );
    this.overlay && g.zm(this.overlay.element, { width: a.width + "px" });
    if (!this.G)
      for (a = 0; a < this.videos.length; a++)
        g.Ap(
          this.videos[a].element,
          "ytp-suggestion-card-with-margin",
          a % 2 === 1
        );
  };
  g.k.onVideoDataChange = function () {
    var a = this.player.getVideoData();
    if (this.videoData !== a && a) {
      this.videoData = a;
      if (
        ((a = this.videoData.suggestions) && a.length) ||
        this.player.N("web_player_autonav_empty_suggestions_fix")
      ) {
        var b = g.rR(this.videoData);
        b && (this.j.aJ(b), this.j !== this.B && this.B.aJ(b));
      }
      if (a && a.length)
        for (b = 0; b < jmb.length; ++b) {
          var c = jmb[b];
          if (a && a[c]) {
            this.videos[b] = new D5(this.player);
            var d = this.videos[b];
            c = a[c];
            d.suggestion !== c && ((d.suggestion = c), C5(d, c));
            g.P(this, this.videos[b]);
            this.videos[b].Ga(this.W.element);
          }
        }
      this.CD();
    }
  };
  g.k.YV = function (a) {
    a === 1
      ? ((this.L = !1),
        (this.C = this.videoData.clientPlaybackNonce),
        this.j.Zq(),
        this.Fb && this.CD())
      : ((this.L = !0),
        this.Of() && (a === 2 ? this.j.VC() : a === 3 && this.j.Vy()));
  };
  g.k.y5 = function (a) {
    a ? this.YV(1) : ((this.C = null), (this.L = !1));
  };
  g.k.KE = function () {
    return this.videoData.autonavState !== 1;
  };
  g.k.fh = function (a) {
    return (
      (a.width < 910 || a.height < 459) &&
      !this.pL(a) &&
      !(a.width <= 400 || a.height <= 360)
    );
  };
  g.k.pL = function (a) {
    return a.width < 800 && !(a.width <= 400 || a.height <= 360);
  };
  g.k.Of = function () {
    return this.Fb && g.xS(this.player) && this.KE() && !this.C;
  };
  var jmb = [1, 3, 2, 4];
  g.w(K5, g.S);
  g.k = K5.prototype;
  g.k.e3 = function () {
    switch (this.buttonType) {
      case 1:
        var a = "Watch again on YouTube";
        var b = 156915;
        break;
      case 2:
        a = "Continue watching on YouTube";
        b = 156942;
        break;
      default:
        (a = "Continue watching on YouTube"), (b = 156942);
    }
    this.update({ content: a });
    this.K.hasVe(this.element) && this.K.destroyVe(this.element);
    this.K.createClientVe(this.element, this, b);
  };
  g.k.onClick = function (a) {
    this.K.N("web_player_log_click_before_generating_ve_conversion_params") &&
      this.K.logClick(this.element);
    g.kT(this.getVideoUrl(), this.K, a);
    this.K.N("web_player_log_click_before_generating_ve_conversion_params") ||
      this.K.logClick(this.element);
  };
  g.k.getVideoUrl = function () {
    var a = !0;
    switch (this.buttonType) {
      case 1:
        a = !0;
        break;
      case 2:
        a = !1;
    }
    a = this.K.getVideoUrl(a, !1, !1, !0);
    var b = this.K.V();
    if (g.NP(b)) {
      var c = {};
      g.NP(b) && g.dS(this.K, "addEmbedsConversionTrackingParams", [c]);
      a = g.aj(a, c);
    }
    return a;
  };
  g.k.logVisibility = function () {
    this.K.logVisibility(this.element, this.Fb && this.U);
  };
  g.k.show = function () {
    g.S.prototype.show.call(this);
    this.logVisibility();
  };
  g.k.hide = function () {
    g.S.prototype.hide.call(this);
    this.logVisibility();
  };
  g.k.Ac = function (a) {
    g.S.prototype.Ac.call(this, a);
    this.logVisibility();
  };
  g.w(L5, G5);
  L5.prototype.show = function () {
    this.player.getPlayerState() !== 3 &&
      (G5.prototype.show.call(this),
      this.We.MC(!0),
      this.We.gt(!0),
      this.K.V().Ff || this.We.Zs(!0),
      this.K.logVisibility(this.element, !0),
      this.watchButton.Ac(!0));
  };
  L5.prototype.hide = function () {
    G5.prototype.hide.call(this);
    this.We.MC(!1);
    this.We.gt(!1);
    this.We.Zs(!1);
    this.K.logVisibility(this.element, !1);
    this.watchButton.Ac(!1);
  };
  g.w(emb, G5);
  emb.prototype.Ta = function () {
    var a = this.player.getVideoData();
    this.j.update({ profilePicture: a.profilePicture, author: a.author });
    this.subscribeButton.channelId = a.Dm;
    var b = this.subscribeButton;
    a.subscribed ? b.j() : b.B();
  };
  g.w(M5, g.S);
  M5.prototype.select = function () {
    this.api.Jp(
      this.suggestion.videoId,
      this.suggestion.sessionData,
      this.suggestion.playlistId,
      void 0,
      void 0,
      this.suggestion.uF || void 0
    ) && this.api.logClick(this.element);
  };
  M5.prototype.onClick = function (a) {
    if (
      g.NP(this.api.V()) &&
      this.api.N("web_player_log_click_before_generating_ve_conversion_params")
    ) {
      this.api.logClick(this.element);
      var b = this.suggestion.Yl(),
        c = {};
      g.ENa(this.api, c);
      b = g.aj(b, c);
      g.kT(b, this.api, a);
    } else
      g.jT(a, this.api, this.B, this.suggestion.sessionData || void 0) &&
        this.select();
  };
  M5.prototype.onKeyPress = function (a) {
    switch (a.keyCode) {
      case 13:
      case 32:
        a.defaultPrevented || (this.select(), a.preventDefault());
    }
  };
  M5.prototype.onVideoDataChange = function () {
    var a = this.api.getVideoData(),
      b = this.api.V();
    this.B = a.Qf ? !1 : b.D;
  };
  g.w(N5, G5);
  g.k = N5.prototype;
  g.k.create = function () {
    G5.prototype.create.call(this);
    var a = this.player.getVideoData();
    a && (this.videoData = a);
    this.Er();
    this.B.T(this.player, "appresize", this.Er);
    this.B.T(this.player, "onVideoAreaChange", this.Er);
    this.B.T(this.player, "videodatachange", this.onVideoDataChange);
    this.B.T(this.player, "autonavchange", this.jO);
    this.B.T(this.player, "onAutonavCancelled", this.z5);
    a = this.videoData.autonavState;
    a !== this.Z && this.jO(a);
    this.B.T(this.element, "transitionend", this.Fda);
  };
  g.k.destroy = function () {
    g.Ts(this.B);
    g.jb(this.stills);
    this.stills = [];
    G5.prototype.destroy.call(this);
    g.yp(this.element, "ytp-show-tiles");
    this.L.stop();
    this.Z = this.videoData.autonavState;
  };
  g.k.KE = function () {
    return this.videoData.autonavState !== 1;
  };
  g.k.show = function () {
    var a = this.Fb;
    G5.prototype.show.call(this);
    g.yp(this.element, "ytp-show-tiles");
    this.player.V().B ? g.qp(this.L) : this.L.start();
    (this.G || (this.D && this.D !== this.videoData.clientPlaybackNonce)) &&
      g.rS(this.player, !1);
    O5(this)
      ? (P5(this),
        this.videoData.autonavState === 2
          ? this.player.getVisibilityState() === 3
            ? this.j.select(!0)
            : this.j.VC()
          : this.videoData.autonavState === 3 && this.j.Vy())
      : (g.rS(this.player, !0), P5(this));
    a !== this.Fb && this.player.logVisibility(this.element, !0);
  };
  g.k.hide = function () {
    var a = this.Fb;
    G5.prototype.hide.call(this);
    this.j.Vy();
    P5(this);
    a !== this.Fb && this.player.logVisibility(this.element, !1);
  };
  g.k.Fda = function (a) {
    a.target === this.element && this.Er();
  };
  g.k.Er = function () {
    var a, b, c, d;
    var e = (
      (a = this.videoData) == null
        ? 0
        : (b = a.suggestions) == null
        ? 0
        : b.length
    )
      ? (c = this.videoData) == null
        ? void 0
        : c.suggestions
      : [(d = this.videoData) == null ? void 0 : g.rR(d)];
    if (e.length) {
      g.wp(this.element, "ytp-endscreen-paginate");
      var f = this.K.hn(!0, this.K.isFullscreen());
      if ((a = g.hS(this.K))) (a = a.Wh() ? 48 : 32), (f.width -= a * 2);
      var h = f.width / f.height;
      d = 96 / 54;
      b = a = 2;
      var l = Math.max(f.width / 96, 2),
        m = Math.max(f.height / 54, 2);
      c = e.length;
      var n = c * 4;
      for (n -= 4; n > 0 && (a < l || b < m); ) {
        var p = a / 2,
          q = b / 2,
          r = a <= l - 2 && n >= q * 4,
          t = b <= m - 2 && n >= p * 4;
        if ((((p + 1) / q) * d) / h > h / ((p / (q + 1)) * d) && t)
          (n -= p * 4), (b += 2);
        else if (r) (n -= q * 4), (a += 2);
        else if (t) (n -= p * 4), (b += 2);
        else break;
      }
      d = !1;
      n >= 12 && c * 4 - n <= 6 && (b >= 4 || a >= 4) && (d = !0);
      n = a * 96;
      l = b * 54;
      h = n / l < h ? f.height / l : f.width / n;
      h = Math.min(h, 2);
      n = Math.floor(Math.min(f.width, n * h));
      l = Math.floor(Math.min(f.height, l * h));
      f = this.table.element;
      f.ariaLive = "polite";
      g.Jm(f, n, l);
      g.zm(f, { marginLeft: n / -2 + "px", marginTop: l / -2 + "px" });
      this.j.aJ(g.rR(this.videoData));
      this.j instanceof E5 && F5(this.j);
      g.Ap(this.element, "ytp-endscreen-takeover", O5(this));
      P5(this);
      n += 4;
      l += 4;
      h = 0;
      f.ariaBusy = "true";
      for (m = 0; m < a; m++)
        for (p = 0; p < b; p++)
          if (
            ((q = h),
            (t = 0),
            d && m >= a - 2 && p >= b - 2
              ? (t = 1)
              : p % 2 === 0 &&
                m % 2 === 0 &&
                (p < 2 && m < 2 ? p === 0 && m === 0 && (t = 2) : (t = 2)),
            (q = g.wg(q + this.C, c)),
            t !== 0)
          ) {
            r = this.stills[h];
            r ||
              ((r = new M5(this.player)),
              (this.stills[h] = r),
              f.appendChild(r.element));
            var u = Math.floor((l * p) / b),
              y = Math.floor((n * m) / a),
              A = Math.floor((l * (p + t)) / b) - u - 4,
              C = Math.floor((n * (m + t)) / a) - y - 4;
            g.Fm(r.element, y, u);
            g.Jm(r.element, C, A);
            g.zm(r.element, "transitionDelay", (p + m) / 20 + "s");
            g.Ap(r.element, "ytp-videowall-still-mini", t === 1);
            g.Ap(r.element, "ytp-videowall-still-large", t > 2);
            t = Math.max(C, A);
            g.Ap(r.element, "ytp-videowall-still-round-large", t >= 256);
            g.Ap(
              r.element,
              "ytp-videowall-still-round-medium",
              t > 96 && t < 256
            );
            g.Ap(r.element, "ytp-videowall-still-round-small", t <= 96);
            q = e[q];
            r.suggestion !== q &&
              ((r.suggestion = q),
              (t = r.api.V()),
              (u = g.vp(r.element, "ytp-videowall-still-large")
                ? "hqdefault.jpg"
                : "mqdefault.jpg"),
              C5(r, q, u),
              g.NP(t) &&
                !r.api.N(
                  "web_player_log_click_before_generating_ve_conversion_params"
                ) &&
                ((t = q.Yl()),
                (u = {}),
                g.dS(r.api, "addEmbedsConversionTrackingParams", [u]),
                (t = g.aj(t, u)),
                r.updateValue("url", t)),
              (q = (q = q.sessionData) && q.itct) &&
                r.api.setTrackingParams(r.element, q));
            h++;
          }
      f.ariaBusy = "false";
      g.Ap(this.element, "ytp-endscreen-paginate", h < c);
      for (e = this.stills.length - 1; e >= h; e--)
        (a = this.stills[e]), g.ph(a.element), g.ib(a);
      this.stills.length = h;
    }
  };
  g.k.onVideoDataChange = function () {
    var a = this.player.getVideoData(1);
    this.videoData !== a &&
      (a != null && g.rR(a)
        ? ((this.C = 0), (this.videoData = a), this.Er())
        : this.player.oa("missg", {
            vid: (a == null ? void 0 : a.videoId) || "",
            cpn: (a == null ? void 0 : a.clientPlaybackNonce) || "",
          }));
  };
  g.k.A5 = function () {
    this.C += this.stills.length;
    this.Er();
  };
  g.k.B5 = function () {
    this.C -= this.stills.length;
    this.Er();
  };
  g.k.M_ = function () {
    return this.j.im();
  };
  g.k.jO = function (a) {
    a === 1
      ? ((this.G = !1),
        (this.D = this.videoData.clientPlaybackNonce),
        this.j.Zq(),
        this.Fb && this.Er())
      : ((this.G = !0),
        this.Fb &&
          O5(this) &&
          (a === 2 ? this.j.VC() : a === 3 && this.j.Vy()));
  };
  g.k.z5 = function (a) {
    if (a) {
      for (a = 0; a < this.stills.length; a++)
        this.K.logVisibility(this.stills[a].element, !0);
      this.jO(1);
    } else (this.D = null), (this.G = !1);
    this.Er();
  };
  g.k.Of = function () {
    return this.Fb && O5(this);
  };
  g.w(Q5, G5);
  Q5.prototype.show = function () {
    if (this.player.getPlayerState() !== 3) {
      G5.prototype.show.call(this);
      var a = this.B;
      if (a) {
        var b = this.j.suggestionData.length > 0;
        g.Ap(this.element, "ytp-shorts-branded-ui", b);
        b ? a.show() : a.hide();
      }
      var c;
      (c = g.hS(this.player)) == null || c.NC(!0);
      this.player.logVisibility(this.element, !0);
      this.watchButton.Ac(!0);
    }
  };
  Q5.prototype.hide = function () {
    G5.prototype.hide.call(this);
    var a;
    (a = g.hS(this.player)) == null || a.NC(!1);
    this.player.logVisibility(this.element, !1);
    this.watchButton.Ac(!1);
  };
  g.w(imb, g.qY);
  g.k = imb.prototype;
  g.k.Rv = function () {
    var a = this.player.getVideoData(),
      b = a.mutedAutoplay;
    if ((this.player.md() || this.B) && !b) return !0;
    var c;
    var d = !!(
      (a == null ? 0 : g.rR(a)) ||
      (a == null ? 0 : (c = a.suggestions) == null ? 0 : c.length)
    );
    d = !fmb(this.player) || d;
    a = a.pk;
    c = this.player.HF();
    return d && !a && !c && !b;
  };
  g.k.Of = function () {
    return this.endScreen.Of();
  };
  g.k.X$ = function () {
    return this.Of() ? this.endScreen.M_() : !1;
  };
  g.k.xa = function () {
    this.player.gf("endscreen");
    g.qY.prototype.xa.call(this);
  };
  g.k.load = function () {
    var a = this.player.getVideoData();
    var b = a.transitionEndpointAtEndOfStream;
    if (b && b.videoId) {
      var c = this.player.Db().Qe.get("heartbeat"),
        d = g.rR(a);
      !d || b.videoId !== d.videoId || a.FX
        ? (this.player.Jp(b.videoId, void 0, void 0, !0, !0, b),
          c &&
            c.DL(
              "HEARTBEAT_ACTION_TRIGGER_AT_STREAM_END",
              "HEARTBEAT_ACTION_TRANSITION_REASON_HAS_NEW_STREAM_TRANSITION_ENDPOINT"
            ),
          (a = !0))
        : (a = !1);
    } else a = !1;
    a || (g.qY.prototype.load.call(this), this.endScreen.show());
  };
  g.k.unload = function () {
    g.qY.prototype.unload.call(this);
    this.endScreen.hide();
    this.endScreen.destroy();
  };
  g.k.onCueRangeEnter = function (a) {
    this.Rv() &&
      (this.endScreen.created || this.endScreen.create(),
      a.getId() === "load" && this.load());
  };
  g.k.onCueRangeExit = function (a) {
    a.getId() === "load" && this.loaded && this.unload();
  };
  g.k.onVideoDataChange = function () {
    hmb(this);
    this.D &&
      gmb(this) &&
      (this.endScreen &&
        (this.endScreen.hide(),
        this.endScreen.created && this.endScreen.destroy(),
        this.endScreen.dispose()),
      this.j
        ? (this.endScreen = new I5(this.player))
        : (this.endScreen = new N5(this.player)),
      g.P(this, this.endScreen),
      g.wS(this.player, this.endScreen.element, 4));
  };
  g.pY("endscreen", imb);
})(_yt_player);
