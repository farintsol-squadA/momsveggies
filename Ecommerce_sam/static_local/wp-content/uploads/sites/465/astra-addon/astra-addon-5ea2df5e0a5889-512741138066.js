!function(t){t.fn.isInViewport=function(){var e=t(this).offset().top,a=e+t(this).outerHeight(),s=t(window).scrollTop(),n=s+t(window).height();return s<a&&e<n};astraAddon.main_menu_flyout_alignment,astraAddon.above_menu_flyout_alignment,astraAddon.below_menu_flyout_alignment;AstraMenu={init:function(){this._bind(),document.querySelector("body").addEventListener("astraMenuHashLinkClicked",function(e){AstraMenu._close_fullscreen(e),AstraMenu._close_offcanvas(e)})},_bind:function(){(astraAddon.off_canvas_enable||"")&&(t(document).on("click","."+astraAddon.off_canvas_trigger_class,{class:"ast-off-canvas-overlay"},AstraMenu._enable_offcanvas_overlay),t(document).on("click touchstart",".astra-off-canvas-sidebar-wrapper, .astra-off-canvas-sidebar-wrapper .ast-shop-filter-close",{class:"ast-off-canvas-overlay"},AstraMenu._close_offcanvas)),t(document).on("click",".ast-flyout-above-menu-enable .ast-above-header .menu-toggle",AstraMenu._open_above_offcanvas),t(document).on("click touchstart",".ast-flyout-above-menu-overlay .ast-above-header-navigation-wrap, .ast-flyout-above-menu-overlay .ast-above-header .ast-nav-close",AstraMenu._close_above_offcanvas),t(document).on("click",".ast-flyout-below-menu-enable .ast-below-header .menu-toggle",AstraMenu._open_below_offcanvas),t(document).on("click touchstart",".ast-flyout-below-menu-overlay .ast-below-header-navigation-wrap, .ast-flyout-below-menu-overlay .ast-below-header .ast-nav-close",AstraMenu._close_below_offcanvas),t(document).on("click",".ast-fullscreen-below-menu-enable .ast-below-header .menu-toggle",AstraMenu._open_below_fullscreen),t(document).on("click",".ast-fullscreen-below-menu-overlay .ast-below-header .close",AstraMenu._close_below_fullscreen),t(document).on("click",".ast-fullscreen-above-menu-enable .ast-above-header .menu-toggle",AstraMenu._open_above_fullscreen),t(document).on("click",".ast-fullscreen-above-menu-overlay .ast-above-header .close",AstraMenu._close_above_fullscreen),t(document).on("click",".ast-flyout-menu-enable .main-header-bar .menu-toggle",{class:"ast-flyout-menu-overlay"},AstraMenu._enable_primary_menu_overlay),t(document).on("click touchstart",".ast-flyout-menu-overlay .main-header-bar-navigation, .ast-flyout-menu-overlay .main-header-bar .ast-nav-close",{class:"ast-flyout-menu-overlay"},AstraMenu._close_offcanvas),t(document).on("click",".ast-flyout-menu-overlay .main-header-bar-navigation",{class:"toggled"},AstraMenu._toggle_menu),t(document).on("click",".ast-fullscreen-menu-enable .main-header-bar .menu-toggle",AstraMenu._open_fullscreen),t(document).on("click",".ast-fullscreen-menu-overlay .main-header-bar .close",AstraMenu._close_fullscreen),t(document).on("click",".ast-fullscreen-menu-overlay .main-header-bar .close",{class:"toggled"},AstraMenu._toggle_menu),t(document).on("ready",AstraMenu._wp_admin_bar_visible),t(window).on("scroll",AstraMenu._wp_admin_bar_visible)},_open_above_fullscreen:function(e){e.preventDefault();var a=t("html").innerWidth();t("html").css("overflow","hidden");var s=t("html").innerWidth();t("html").css("margin-right",s-a),t("html").addClass("ast-fullscreen-above-menu-overlay"),t(".ast-above-header-navigation-wrap .close").length||(t(".ast-above-header-navigation-wrap").prepend('<span class="close"></span>'),t(".ast-above-header-navigation-wrap .close").css("right",s-a))},_open_below_fullscreen:function(e){e.preventDefault();var a=t("html").innerWidth();t("html").css("overflow","hidden");var s=t("html").innerWidth();t("html").css("margin-right",s-a),t("html").addClass("ast-fullscreen-below-menu-overlay"),t(".ast-below-header-navigation-wrap .close").length||(t(".ast-below-header-navigation-wrap").prepend('<span class="close"></span>'),t(".ast-below-header-navigation-wrap .close").css("right",s-a))},_open_fullscreen:function(e){e.preventDefault();var a=t("html").innerWidth();t("html").css("overflow","hidden");var s=t("html").innerWidth();t("html").css("margin-right",s-a),t("html").addClass("ast-fullscreen-menu-overlay"),t("html").addClass("ast-fullscreen-active"),t(".main-header-bar nav .close").length||(t(".main-header-bar nav").prepend('<span class="close"></span>'),t(".main-header-bar nav .close").css("right",s-a)),t(".ast-primary-menu-disabled .ast-header-custom-item .close").length||t(".ast-primary-menu-disabled .ast-header-custom-item .ast-merge-header-navigation-wrap").prepend('<span class="close"></span>')},_enable_offcanvas_overlay:function(e){e.preventDefault();var a=t("html").innerWidth();t("html").css("overflow","hidden");var s=t("html").innerWidth();t("html").css("margin-right",s-a),t("html").addClass(e.data.class)},_enable_primary_menu_overlay:function(e){e.preventDefault(),t(".main-header-bar-navigation .close").length||t(".main-navigation").before('<span class="ast-nav-close close"></span>'),t(".ast-merge-header-navigation-wrap .close").length||t(".ast-merge-header-navigation-wrap").append('<span class="ast-nav-close close"></span>'),t("div.ast-masthead-custom-menu-items .close").length||t("div.ast-masthead-custom-menu-items").append('<span class="ast-nav-close close"></span>'),astraAddon.sticky_active&&t("html").css("overflow","hidden"),t("html").addClass(e.data.class),t("html").addClass("ast-offcanvas-active")},_open_above_offcanvas:function(e){e.preventDefault(),t(".ast-above-header-section .close").length||t(".ast-above-header-navigation").prepend('<span class="ast-nav-close close"></span>'),astraAddon.sticky_active&&t("html").css("overflow","hidden"),t("html").addClass("ast-flyout-above-menu-overlay")},_close_above_offcanvas:function(e){e.target===this&&(t("html").removeClass("ast-flyout-above-menu-overlay"),t(".ast-above-header .menu-toggle").removeClass("toggled"),t(".ast-above-header").removeClass("toggle-on"),astraAddon.sticky_active&&t("html").css("overflow",""))},_open_below_offcanvas:function(e){e.preventDefault(),t(".ast-below-header-actual-nav .close").length||t(".ast-below-header-actual-nav").prepend('<span class="ast-nav-close close"></span>'),astraAddon.sticky_active&&t("html").css("overflow","hidden"),t("html").addClass("ast-flyout-below-menu-overlay")},_close_below_offcanvas:function(e){e.target===this&&(t("html").removeClass("ast-flyout-below-menu-overlay"),t(".ast-below-header .menu-toggle").removeClass("toggled"),t(".ast-below-header").removeClass("toggle-on"),astraAddon.sticky_active&&t("html").css("overflow",""))},_close_offcanvas:function(e){e.target!==this&&"astraMenuHashLinkClicked"!==e.type||(e.data=e.data||{},e.data.class=e.data.class||"ast-flyout-menu-overlay ast-offcanvas-active",t("html").css({overflow:"","margin-left":"","margin-right":""}),t("html").removeClass(e.data.class),setTimeout(function(){t("html").removeClass("ast-offcanvas-active")},300))},_close_above_fullscreen:function(e){t("html").css({overflow:"","margin-right":""}),t("html").removeClass("ast-fullscreen-above-menu-overlay"),t(".ast-above-header-navigation").removeClass("toggle-on").hide(),t(".ast-above-header .menu-toggle").hasClass("toggled")&&t(".ast-above-header .menu-toggle").removeClass("toggled")},_close_below_fullscreen:function(e){t("html").css({overflow:"","margin-right":""}),t("html").removeClass("ast-fullscreen-below-menu-overlay"),t(".ast-below-header .menu-toggle").hasClass("toggled")&&t(".ast-below-header .menu-toggle").removeClass("toggled")},_close_fullscreen:function(e){t("html").css({overflow:"","margin-right":""}),t("html").removeClass("ast-fullscreen-menu-overlay"),setTimeout(function(){t("html").removeClass("ast-fullscreen-active")},500),t(".main-header-bar-navigation").removeClass("toggle-on").hide()},_toggle_menu:function(e){t(".main-header-bar .menu-toggle").hasClass(e.data.class)&&t(".main-header-bar .menu-toggle").removeClass(e.data.class),t("html").hasClass("ast-fullscreen-active")&&setTimeout(function(){t("html").removeClass("ast-fullscreen-active")},500)},_toggle_above_menu:function(e){t(".ast-above-header .menu-toggle").hasClass(e.data.class)&&t(".ast-above-header .menu-toggle").removeClass(e.data.class)},_wp_admin_bar_visible:function(e){var a=t("#wpadminbar");a.length&&(a.isInViewport()?t("body").hasClass("ast-admin-bar-visible")||t("body").addClass("ast-admin-bar-visible"):t("body").hasClass("ast-admin-bar-visible")&&t("body").removeClass("ast-admin-bar-visible"))}},t(function(){AstraMenu.init()})}(jQuery);!function(){var e,t;function o(e){var t=document.body.className;t=t.replace(e,""),document.body.className=t}function r(e){e.style.display="block",setTimeout(function(){e.style.opacity=1},1)}function s(e){e.style.opacity="",setTimeout(function(){e.style.display=""},200)}function l(e){if(document.body.classList.contains("ast-header-break-point")){var t=document.querySelector(".main-navigation"),a=document.querySelector(".main-header-bar");if(null!==a&&null!==t){var n=t.offsetHeight,o=a.offsetHeight;if(n&&!document.body.classList.contains("ast-no-toggle-menu-enable"))var s=parseFloat(n)-parseFloat(o);else s=parseFloat(o);e.style.maxHeight=Math.abs(s)+"px"}}}e="iPhone"==navigator.userAgent.match(/iPhone/i)?"iphone":"",t="iPod"==navigator.userAgent.match(/iPod/i)?"ipod":"",document.body.className+=" "+e,document.body.className+=" "+t;for(var a=document.querySelectorAll("a.astra-search-icon:not(.slide-search)"),n=0;a.length>n;n++)a[n].onclick=function(e){if(e.preventDefault(),e=e||window.event,this.classList.contains("header-cover"))for(var t=document.querySelectorAll(".ast-search-box.header-cover"),a=0;a<t.length;a++)for(var n=t[a].parentNode.querySelectorAll("a.astra-search-icon"),o=0;o<n.length;o++)n[o]==this&&(r(t[a]),t[a].querySelector("input.search-field").focus(),l(t[a]));else if(this.classList.contains("full-screen")){var s=document.getElementById("ast-seach-full-screen-form");s.classList.contains("full-screen")&&(r(s),c="full-screen",document.body.className+=" "+c,s.querySelector("input.search-field").focus())}var c};for(var c=document.getElementsByClassName("close"),i=(n=0,c.length);n<i;++n)c[n].onclick=function(e){e=e||window.event;for(var t=this;;){if(t.parentNode.classList.contains("ast-search-box")){s(t.parentNode),o("full-screen");break}if(t.parentNode.classList.contains("site-header"))break;t=t.parentNode}};document.onkeydown=function(e){if(27==e.keyCode){var t=document.getElementById("ast-seach-full-screen-form");null!=t&&(s(t),o("full-screen"));for(var a=document.querySelectorAll(".ast-search-box.header-cover"),n=0;n<a.length;n++)s(a[n])}},window.addEventListener("resize",function(){if("BODY"===document.activeElement.tagName&&"INPUT"!=document.activeElement.tagName){var e=document.querySelectorAll(".ast-search-box.header-cover");if(!document.body.classList.contains("ast-header-break-point"))for(var t=0;t<e.length;t++)e[t].style.maxHeight="",e[t].style.opacity="",e[t].style.display=""}})}();