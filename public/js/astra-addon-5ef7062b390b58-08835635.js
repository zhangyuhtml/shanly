!function(t){t.fn.isInViewport=function(){var e=t(this).offset().top,a=e+t(this).outerHeight(),s=t(window).scrollTop(),n=s+t(window).height();return s<a&&e<n};astraAddon.main_menu_flyout_alignment,astraAddon.above_menu_flyout_alignment,astraAddon.below_menu_flyout_alignment;AstraMenu={init:function(){this._bind(),document.querySelector("body").addEventListener("astraMenuHashLinkClicked",function(e){AstraMenu._close_fullscreen(e),AstraMenu._close_offcanvas(e)})},_bind:function(){(astraAddon.off_canvas_enable||"")&&(t(document).on("click","."+astraAddon.off_canvas_trigger_class,{class:"ast-off-canvas-overlay"},AstraMenu._enable_offcanvas_overlay),t(document).on("click touchstart",".astra-off-canvas-sidebar-wrapper, .astra-off-canvas-sidebar-wrapper .ast-shop-filter-close",{class:"ast-off-canvas-overlay"},AstraMenu._close_offcanvas)),t(document).on("click",".ast-flyout-above-menu-enable .ast-above-header .menu-toggle",AstraMenu._open_above_offcanvas),t(document).on("click touchstart",".ast-flyout-above-menu-overlay .ast-above-header-navigation-wrap, .ast-flyout-above-menu-overlay .ast-above-header .ast-nav-close",AstraMenu._close_above_offcanvas),t(document).on("click",".ast-flyout-below-menu-enable .ast-below-header .menu-toggle",AstraMenu._open_below_offcanvas),t(document).on("click touchstart",".ast-flyout-below-menu-overlay .ast-below-header-navigation-wrap, .ast-flyout-below-menu-overlay .ast-below-header .ast-nav-close",AstraMenu._close_below_offcanvas),t(document).on("click",".ast-fullscreen-below-menu-enable .ast-below-header .menu-toggle",AstraMenu._open_below_fullscreen),t(document).on("click",".ast-fullscreen-below-menu-overlay .ast-below-header .close",AstraMenu._close_below_fullscreen),t(document).on("click",".ast-fullscreen-above-menu-enable .ast-above-header .menu-toggle",AstraMenu._open_above_fullscreen),t(document).on("click",".ast-fullscreen-above-menu-overlay .ast-above-header .close",AstraMenu._close_above_fullscreen),t(document).on("click",".ast-flyout-menu-enable .main-header-bar .menu-toggle",{class:"ast-flyout-menu-overlay"},AstraMenu._enable_primary_menu_overlay),t(document).on("click touchstart",".ast-flyout-menu-overlay .main-header-bar-navigation, .ast-flyout-menu-overlay .main-header-bar .ast-nav-close",{class:"ast-flyout-menu-overlay"},AstraMenu._close_offcanvas),t(document).on("click",".ast-flyout-menu-overlay .main-header-bar-navigation",{class:"toggled"},AstraMenu._toggle_menu),t(document).on("click",".ast-fullscreen-menu-enable .main-header-bar .menu-toggle",AstraMenu._open_fullscreen),t(document).on("click",".ast-fullscreen-menu-overlay .main-header-bar .close",AstraMenu._close_fullscreen),t(document).on("click",".ast-fullscreen-menu-overlay .main-header-bar .close",{class:"toggled"},AstraMenu._toggle_menu),t(document).on("ready",AstraMenu._wp_admin_bar_visible),t(window).on("scroll",AstraMenu._wp_admin_bar_visible)},_open_above_fullscreen:function(e){e.preventDefault();var a=t("html").innerWidth();t("html").css("overflow","hidden");var s=t("html").innerWidth();t("html").css("margin-right",s-a),t("html").addClass("ast-fullscreen-above-menu-overlay"),t(".ast-above-header-navigation-wrap .close").length||(t(".ast-above-header-navigation-wrap").prepend('<span class="close"></span>'),t(".ast-above-header-navigation-wrap .close").css("right",s-a))},_open_below_fullscreen:function(e){e.preventDefault();var a=t("html").innerWidth();t("html").css("overflow","hidden");var s=t("html").innerWidth();t("html").css("margin-right",s-a),t("html").addClass("ast-fullscreen-below-menu-overlay"),t(".ast-below-header-navigation-wrap .close").length||(t(".ast-below-header-navigation-wrap").prepend('<span class="close"></span>'),t(".ast-below-header-navigation-wrap .close").css("right",s-a))},_open_fullscreen:function(e){e.preventDefault();var a=t("html").innerWidth();t("html").css("overflow","hidden");var s=t("html").innerWidth();t("html").css("margin-right",s-a),t("html").addClass("ast-fullscreen-menu-overlay"),t("html").addClass("ast-fullscreen-active"),t(".main-header-bar nav .close").length||(t(".main-header-bar nav").prepend('<span class="close"></span>'),t(".main-header-bar nav .close").css("right",s-a)),t(".ast-primary-menu-disabled .ast-header-custom-item .close").length||t(".ast-primary-menu-disabled .ast-header-custom-item .ast-merge-header-navigation-wrap").prepend('<span class="close"></span>')},_enable_offcanvas_overlay:function(e){e.preventDefault();var a=t("html").innerWidth();t("html").css("overflow","hidden");var s=t("html").innerWidth();t("html").css("margin-right",s-a),t("html").addClass(e.data.class)},_enable_primary_menu_overlay:function(e){e.preventDefault(),t(".main-header-bar-navigation .close").length||t(".main-navigation").before('<span class="ast-nav-close close"></span>'),t(".ast-merge-header-navigation-wrap .close").length||t(".ast-merge-header-navigation-wrap").append('<span class="ast-nav-close close"></span>'),t("div.ast-masthead-custom-menu-items .close").length||t("div.ast-masthead-custom-menu-items").append('<span class="ast-nav-close close"></span>'),astraAddon.sticky_active&&t("html").css("overflow","hidden"),t("html").addClass(e.data.class),t("html").addClass("ast-offcanvas-active")},_open_above_offcanvas:function(e){e.preventDefault(),t(".ast-above-header-section .close").length||t(".ast-above-header-navigation").prepend('<span class="ast-nav-close close"></span>'),astraAddon.sticky_active&&t("html").css("overflow","hidden"),t("html").addClass("ast-flyout-above-menu-overlay")},_close_above_offcanvas:function(e){e.target===this&&(t("html").removeClass("ast-flyout-above-menu-overlay"),t(".ast-above-header .menu-toggle").removeClass("toggled"),t(".ast-above-header").removeClass("toggle-on"),astraAddon.sticky_active&&t("html").css("overflow",""))},_open_below_offcanvas:function(e){e.preventDefault(),t(".ast-below-header-actual-nav .close").length||t(".ast-below-header-actual-nav").prepend('<span class="ast-nav-close close"></span>'),astraAddon.sticky_active&&t("html").css("overflow","hidden"),t("html").addClass("ast-flyout-below-menu-overlay")},_close_below_offcanvas:function(e){e.target===this&&(t("html").removeClass("ast-flyout-below-menu-overlay"),t(".ast-below-header .menu-toggle").removeClass("toggled"),t(".ast-below-header").removeClass("toggle-on"),astraAddon.sticky_active&&t("html").css("overflow",""))},_close_offcanvas:function(e){e.target!==this&&"astraMenuHashLinkClicked"!==e.type||(e.data=e.data||{},e.data.class=e.data.class||"ast-flyout-menu-overlay ast-offcanvas-active",t("html").css({overflow:"","margin-left":"","margin-right":""}),t("html").removeClass(e.data.class),setTimeout(function(){t("html").removeClass("ast-offcanvas-active")},300))},_close_above_fullscreen:function(e){t("html").css({overflow:"","margin-right":""}),t("html").removeClass("ast-fullscreen-above-menu-overlay"),t(".ast-above-header-navigation").removeClass("toggle-on").hide(),t(".ast-above-header .menu-toggle").hasClass("toggled")&&t(".ast-above-header .menu-toggle").removeClass("toggled")},_close_below_fullscreen:function(e){t("html").css({overflow:"","margin-right":""}),t("html").removeClass("ast-fullscreen-below-menu-overlay"),t(".ast-below-header .menu-toggle").hasClass("toggled")&&t(".ast-below-header .menu-toggle").removeClass("toggled")},_close_fullscreen:function(e){t("html").css({overflow:"","margin-right":""}),t("html").removeClass("ast-fullscreen-menu-overlay"),setTimeout(function(){t("html").removeClass("ast-fullscreen-active")},500),t(".main-header-bar-navigation").removeClass("toggle-on").hide()},_toggle_menu:function(e){t(".main-header-bar .menu-toggle").hasClass(e.data.class)&&t(".main-header-bar .menu-toggle").removeClass(e.data.class),t("html").hasClass("ast-fullscreen-active")&&setTimeout(function(){t("html").removeClass("ast-fullscreen-active")},500)},_toggle_above_menu:function(e){t(".ast-above-header .menu-toggle").hasClass(e.data.class)&&t(".ast-above-header .menu-toggle").removeClass(e.data.class)},_wp_admin_bar_visible:function(e){var a=t("#wpadminbar");a.length&&(a.isInViewport()?t("body").hasClass("ast-admin-bar-visible")||t("body").addClass("ast-admin-bar-visible"):t("body").hasClass("ast-admin-bar-visible")&&t("body").removeClass("ast-admin-bar-visible"))}},t(function(){AstraMenu.init()})}(jQuery);!function(o,i){var a="astExtSticky",d=i.document,r=(jQuery(i).outerWidth(),jQuery(i).width()),s={dependent:[],max_width:"",site_layout:"",break_point:920,admin_bar_height_lg:32,admin_bar_height_sm:46,admin_bar_height_xs:0,stick_upto_scroll:0,gutter:0,wrap:"<div></div>",body_padding_support:!0,html_padding_support:!0,shrink:{padding_top:"",padding_bottom:""},sticky_on_device:"desktop",header_style:"none",hide_on_scroll:"no"},n=0;function t(e,t){this.element=e,this.options=o.extend({},s,t),this._defaults=s,this._name=a,"1"==this.options.hide_on_scroll&&(this.navbarHeight=o(e).outerHeight()),this.lastScrollTop=0,this.delta=5,this.should_stick=!0,this.hideScrollInterval="",this.init()}t.prototype.stick_me=function(e,t){var a=jQuery(e.element);jQuery(i).outerWidth();if(stick_upto_scroll=parseInt(e.options.stick_upto_scroll),max_width=parseInt(a.parent().attr("data-stick-maxwidth")),gutter=parseInt(a.parent().attr("data-stick-gutter")),"desktop"==e.options.sticky_on_device&&jQuery("body").hasClass("ast-header-break-point"))e.stickRelease(e);else if("mobile"!=e.options.sticky_on_device||jQuery("body").hasClass("ast-header-break-point"))if(jQuery(i).scrollTop()>stick_upto_scroll){var s=a;"1"===e.options.hide_on_scroll?e.hasScrolled(e,"stick"):"none"==e.options.header_style?(a.parent().css("min-height",a.outerHeight()),a.addClass("ast-sticky-active").stop().css({"max-width":max_width,top:gutter,"padding-top":e.options.shrink.padding_top,"padding-bottom":e.options.shrink.padding_bottom}),a.addClass("ast-sticky-shrunk").stop(),o(d).trigger("addStickyClass"),s.addClass("ast-header-sticked")):"slide"==e.options.header_style?(s.css({top:gutter}),s.addClass("ast-header-slide"),s.css("visibility","visible"),s.addClass("ast-sticky-active").stop().css({transform:"translateY(0)"}),o("html").addClass("ast-header-stick-slide-active"),o(d).trigger("addStickyClass"),s.addClass("ast-header-sticked")):"fade"==e.options.header_style&&(s.css({top:gutter}),s.addClass("ast-header-fade"),s.css("visibility","visible"),s.addClass("ast-sticky-active").stop().css({opacity:"1"}),o("html").addClass("ast-header-stick-fade-active"),o(d).trigger("addStickyClass"),s.addClass("ast-header-sticked"))}else e.stickRelease(e);else e.stickRelease(e)},t.prototype.update_attrs=function(){var e=this,t=jQuery(e.element),a=parseInt(e.options.gutter),s=e.options.max_width;if("none"!=e.options.header_style||jQuery("body").hasClass("ast-sticky-toggled-off")){if(o("#masthead").length){var i=o("#masthead");d=i.offset().top+i.outerHeight()+100||0}}else var d=t.offset().top||0;"ast-box-layout"!=e.options.site_layout&&(s=jQuery("body").width()),e.options.dependent&&jQuery.each(e.options.dependent,function(e,t){jQuery(t).length&&"on"==jQuery(t).parent().attr("data-stick-support")&&(dependent_height=jQuery(t).outerHeight(),a+=parseInt(dependent_height),d-=parseInt(dependent_height))}),e.options.admin_bar_height_lg&&jQuery("#wpadminbar").length&&782<r&&(a+=parseInt(e.options.admin_bar_height_lg),d-=parseInt(e.options.admin_bar_height_lg)),e.options.admin_bar_height_sm&&jQuery("#wpadminbar").length&&600<=r&&r<=782&&(a+=parseInt(e.options.admin_bar_height_sm),d-=parseInt(e.options.admin_bar_height_sm)),e.options.admin_bar_height_xs&&jQuery("#wpadminbar").length&&(a+=parseInt(e.options.admin_bar_height_xs),d-=parseInt(e.options.admin_bar_height_xs)),e.options.body_padding_support&&(a+=parseInt(jQuery("body").css("padding-top"),10),d-=parseInt(jQuery("body").css("padding-top"),10)),e.options.html_padding_support&&(a+=parseInt(jQuery("html").css("padding-top"),10),d-=parseInt(jQuery("html").css("padding-top"),10)),Q&&d--,e.options.stick_upto_scroll=d,"none"==e.options.header_style?t.parent().css("min-height",t.outerHeight()).attr("data-stick-gutter",parseInt(a)).attr("data-stick-maxwidth",parseInt(s)):(t.parent().attr("data-stick-gutter",parseInt(a)).attr("data-stick-maxwidth",parseInt(s)),"ast-padded-layout"===e.options.site_layout&&t.css("max-width",parseInt(s)))},t.prototype.hasScrolled=function(e,t){var a=o(i).scrollTop();if(!(Math.abs(n-a)<=5)){var s=jQuery(e.element);n<a&&0<a?jQuery(e.element).removeClass("ast-nav-down").addClass("ast-nav-up"):a+o(i).height()<o(d).height()&&jQuery(e.element).removeClass("ast-nav-up").addClass("ast-nav-down"),n=a,o(e.element).hasClass("ast-nav-up")||"stick"!=t?(s.css({transform:"translateY(-100%)"}).stop(),setTimeout(function(){s.removeClass("ast-sticky-active")},300),s.css({visibility:"hidden",top:""}),o(d).trigger("removeStickyClass"),o("html").removeClass("ast-header-stick-scroll-active"),s.removeClass("ast-header-sticked")):(s.css({top:gutter}),s.addClass("ast-header-sticked"),s.addClass("ast-header-slide"),s.css("visibility","visible"),s.addClass("ast-sticky-active").stop().css({transform:"translateY(0)"}),o(d).trigger("addStickyClass"),o("html").addClass("ast-header-stick-scroll-active"))}},t.prototype.stickRelease=function(e){var t=jQuery(e.element),a=t;"1"===e.options.hide_on_scroll?e.hasScrolled(e,"release"):"none"==e.options.header_style?(t.removeClass("ast-sticky-active").stop().css({"max-width":"",top:"",padding:""}),t.parent().css("min-height",""),o(d).trigger("removeStickyClass"),a.removeClass("ast-header-sticked"),t.removeClass("ast-sticky-shrunk").stop()):"slide"==e.options.header_style?(a.removeClass("ast-sticky-active").stop().css({transform:"translateY(-100%)"}),a.css({visibility:"hidden",top:""}),o("html").removeClass("ast-header-stick-slide-active"),o(d).trigger("removeStickyClass"),a.removeClass("ast-header-sticked")):"fade"==e.options.header_style&&(a.removeClass("ast-sticky-active").stop().css({opacity:"0"}),a.css({visibility:"hidden"}),a.removeClass("ast-header-sticked"),o(d).trigger("removeStickyClass"),o("html").removeClass("ast-header-stick-fade-active"))},t.prototype.init=function(){if(jQuery(this.element)){var t=this,e=jQuery(t.element);parseInt(t.options.gutter),e.position().top;"none"==t.options.header_style?e.wrap(t.options.wrap).parent().css("min-height",e.outerHeight()).attr("data-stick-support","on").attr("data-stick-maxwidth",parseInt(t.options.max_width)):e.wrap(t.options.wrap).attr("data-stick-support","on").attr("data-stick-maxwidth",parseInt(t.options.max_width)),t.update_attrs(),jQuery(i).on("resize",function(){t.stickRelease(t),t.update_attrs(),t.stick_me(t)}),jQuery(i).on("scroll",function(){t.stick_me(t,"scroll"),jQuery("body").hasClass("ast-sticky-toggled-off")&&(t.update_attrs(),t.stick_me(t,"scroll"))}),jQuery(d).ready(function(e){t.stick_me(t)})}},o.fn[a]=function(e){return this.each(function(){o.data(this,"plugin_"+a)||o.data(this,"plugin_"+a,new t(this,e))})};var h=jQuery("body"),l=h.width(),e=astraAddon.stick_header_meta||"default",c=astraAddon.header_main_stick||"",p=astraAddon.header_main_shrink||"",y=astraAddon.header_above_stick||"",_=astraAddon.header_below_stick||"",m=astraAddon.header_main_stick_meta||"",u=astraAddon.header_above_stick_meta||"",g=astraAddon.header_below_stick_meta||"",k=astraAddon.site_layout||"",v=(astraAddon.site_layout_padded_width,astraAddon.site_layout_box_width||1200),b=(astraAddon.site_content_width,astraAddon.sticky_header_on_devices||"desktop"),f=astraAddon.sticky_header_style||"none",w=astraAddon.sticky_hide_on_scroll||"",x=astraAddon.header_logo_width||"",j=astraAddon.responsive_header_logo_width||"",Q=astraAddon.stick_origin_position||"",C=astraAddon.tablet_break_point||768,I=astraAddon.mobile_break_point||544;if("disabled"!=e){if("enabled"===e&&(c=m,y=u,_=g),0<o("header .site-logo-img img").length){var S=o("header .site-logo-img img"),A=S.attr("height");if(void 0===A&&(A=S.height()),0==A&&(A=""),-1===A.toString().indexOf("%")&&(A+="px"),""!=j.desktop||""!=j.tablet||""!=j.mobile)var E="<style type='text/css' id='ast-site-identity-img' class='ast-site-identity-img' > #masthead .site-logo-img .astra-logo-svg { width: "+j.desktop+"px; } @media (max-width: "+C+"px) { #masthead .site-logo-img .astra-logo-svg { width: "+j.tablet+"px; } } @media (max-width: "+I+"px) { #masthead .site-logo-img .astra-logo-svg{ width: "+j.mobile+"px; } }  #masthead .site-logo-img img { max-height: "+A+"; width: auto; } </style>";else if(""!=x)E="<style type='text/css' id='ast-site-identity-img' class='ast-site-identity-img' > #masthead .site-logo-img .astra-logo-svg { width: "+x+"px; } #masthead .site-logo-img img { max-height: "+A+"; width: auto; } </style>";o("head").append(E)}if(c||y||_){switch(o(d).on("addStickyClass",function(){var e="";"1"!=c&&"on"!=c||(e+=" ast-primary-sticky-header-active"),"1"!=y&&"on"!=y||(e+=" ast-above-sticky-header-active"),"1"!=_&&"on"!=_||(e+=" ast-below-sticky-header-active"),o("body").addClass(e)}),o(d).on("removeStickyClass",function(){var e="";"1"!=c&&"on"!=c||(e+=" ast-primary-sticky-header-active"),"1"!=y&&"on"!=y||(e+=" ast-above-sticky-header-active"),"1"!=_&&"on"!=_||(e+=" ast-below-sticky-header-active"),o("body").removeClass(e)}),k){case"ast-box-layout":l=parseInt(v)}jQuery(d).ready(function(e){if("1"==w)"1"==p&&jQuery("#ast-fixed-header").addClass("ast-sticky-shrunk").stop(),"1"!=y&&"on"!=y&&jQuery("#ast-fixed-header .ast-above-header").hide(),"1"!=c&&"on"!=c&&jQuery("#ast-fixed-header .main-header-bar").hide(),"1"!=_&&"on"!=_&&jQuery("#ast-fixed-header .ast-below-header").hide(),jQuery("#ast-fixed-header").astExtSticky({max_width:l,site_layout:k,sticky_on_device:b,header_style:"slide",hide_on_scroll:w});else if("none"==f)if("1"!=y&&"on"!=y||jQuery("#masthead .ast-above-header").astExtSticky({max_width:l,site_layout:k,sticky_on_device:b,header_style:f,hide_on_scroll:w}),"1"!=c&&"on"!=c||"1"!=_&&"on"!=_){if("1"==c||"on"==c){var t="";p&&(t={padding_top:"",padding_bottom:""}),jQuery("#masthead .main-header-bar").astExtSticky({dependent:["#masthead .ast-above-header"],max_width:l,site_layout:k,shrink:t,sticky_on_device:b,header_style:f,hide_on_scroll:w}),jQuery("#masthead .ast-custom-header").astExtSticky({max_width:l,site_layout:k,shrink:t,sticky_on_device:b,header_style:f,hide_on_scroll:w})}"1"!=_&&"on"!=_||jQuery("#masthead .ast-below-header").astExtSticky({dependent:["#masthead .main-header-bar","#masthead .ast-above-header"],max_width:l,site_layout:k,sticky_on_device:b,header_style:f,hide_on_scroll:w})}else jQuery("#masthead .main-header-bar-wrap").wrap('<div class="ast-stick-primary-below-wrapper"></div>'),jQuery("#masthead .ast-below-header-wrap").prependTo(".ast-stick-primary-below-wrapper"),jQuery("#masthead .main-header-bar-wrap").prependTo(".ast-stick-primary-below-wrapper"),jQuery("#masthead .ast-stick-primary-below-wrapper").astExtSticky({dependent:["#masthead .ast-above-header"],max_width:l,site_layout:k,shrink:t,sticky_on_device:b,header_style:f,hide_on_scroll:w});else if(jQuery("#ast-fixed-header").addClass("ast-sticky-shrunk").stop(),"1"!=y&&"on"!=y&&jQuery("#ast-fixed-header .ast-above-header").hide(),"1"!=c&&"on"!=c&&jQuery("#ast-fixed-header .main-header-bar").hide(),"1"!=_&&"on"!=_&&jQuery("#ast-fixed-header .ast-below-header").hide(),"1"==y||"on"==y||"1"==c||"on"==c||"1"==_||"on"==_){t="";p&&(t={padding_top:"",padding_bottom:""}),jQuery("#ast-fixed-header").astExtSticky({max_width:l,site_layout:k,shrink:t,sticky_on_device:b,header_style:f,hide_on_scroll:w})}"mobile"!=b&&"both"!=b||(jQuery("#masthead .main-header-menu-toggle").click(function(e){if(jQuery("#masthead .main-header-menu-toggle").hasClass("toggled")){if(h.addClass("ast-sticky-toggled-off"),"none"==s.header_style&&(jQuery("#masthead .main-header-bar").hasClass("ast-sticky-active")||jQuery("#masthead .ast-stick-primary-below-wrapper").hasClass("ast-sticky-active"))){var t=jQuery(i).height(),a=0;jQuery("#masthead .ast-above-header")&&jQuery("#masthead .ast-above-header").length&&(a=jQuery("#masthead .ast-above-header").height()),"1"==w&&jQuery("html").css({overflow:"hidden"}),"1"!=p||"1"!=c&&"on"!=c||"1"!=_&&"on"!=_?jQuery("#masthead .main-header-bar.ast-sticky-active").css({"max-height":t-a+"px","overflow-y":"auto"}):jQuery("#masthead .ast-stick-primary-below-wrapper").css({"max-height":t-a+"px","overflow-y":"auto"})}}else h.addClass("ast-sticky-toggled-off"),jQuery("html").css({overflow:""}),"1"!=p||"1"!=c&&"on"!=c||"1"!=_&&"on"!=_?jQuery("#masthead .main-header-bar.ast-sticky-active").css({"max-height":"","overflow-y":""}):jQuery("#masthead .ast-stick-primary-below-wrapper").css({"max-height":"","overflow-y":""})}),jQuery("#ast-fixed-header .main-header-menu-toggle").click(function(e){if(jQuery("#ast-fixed-header .main-header-menu-toggle").hasClass("toggled")){var t=jQuery(i).height();"1"==w&&jQuery("html").css({overflow:"auto"}),jQuery("#ast-fixed-header").css({"max-height":t+"px","overflow-y":"auto"})}else jQuery("html").css({overflow:""}),jQuery("#ast-fixed-header").css({"max-height":"","overflow-y":""})}))})}}}(jQuery,window);!function(){var e,t;function o(e){var t=document.body.className;t=t.replace(e,""),document.body.className=t}function r(e){e.style.display="block",setTimeout(function(){e.style.opacity=1},1)}function s(e){e.style.opacity="",setTimeout(function(){e.style.display=""},200)}function l(e){if(document.body.classList.contains("ast-header-break-point")){var t=document.querySelector(".main-navigation"),a=document.querySelector(".main-header-bar");if(null!==a&&null!==t){var n=t.offsetHeight,o=a.offsetHeight;if(n&&!document.body.classList.contains("ast-no-toggle-menu-enable"))var s=parseFloat(n)-parseFloat(o);else s=parseFloat(o);e.style.maxHeight=Math.abs(s)+"px"}}}e="iPhone"==navigator.userAgent.match(/iPhone/i)?"iphone":"",t="iPod"==navigator.userAgent.match(/iPod/i)?"ipod":"",document.body.className+=" "+e,document.body.className+=" "+t;for(var a=document.querySelectorAll("a.astra-search-icon:not(.slide-search)"),n=0;a.length>n;n++)a[n].onclick=function(e){if(e.preventDefault(),e=e||window.event,this.classList.contains("header-cover"))for(var t=document.querySelectorAll(".ast-search-box.header-cover"),a=0;a<t.length;a++)for(var n=t[a].parentNode.querySelectorAll("a.astra-search-icon"),o=0;o<n.length;o++)n[o]==this&&(r(t[a]),t[a].querySelector("input.search-field").focus(),l(t[a]));else if(this.classList.contains("full-screen")){var s=document.getElementById("ast-seach-full-screen-form");s.classList.contains("full-screen")&&(r(s),c="full-screen",document.body.className+=" "+c,s.querySelector("input.search-field").focus())}var c};for(var c=document.getElementsByClassName("close"),i=(n=0,c.length);n<i;++n)c[n].onclick=function(e){e=e||window.event;for(var t=this;;){if(t.parentNode.classList.contains("ast-search-box")){s(t.parentNode),o("full-screen");break}if(t.parentNode.classList.contains("site-header"))break;t=t.parentNode}};document.onkeydown=function(e){if(27==e.keyCode){var t=document.getElementById("ast-seach-full-screen-form");null!=t&&(s(t),o("full-screen"));for(var a=document.querySelectorAll(".ast-search-box.header-cover"),n=0;n<a.length;n++)s(a[n])}},window.addEventListener("resize",function(){if("BODY"===document.activeElement.tagName&&"INPUT"!=document.activeElement.tagName){var e=document.querySelectorAll(".ast-search-box.header-cover");if(!document.body.classList.contains("ast-header-break-point"))for(var t=0;t<e.length;t++)e[t].style.maxHeight="",e[t].style.opacity="",e[t].style.display=""}})}();