/*
Bones Scripts File
Author: Eddie Machado

This file should contain any js scripts you want to add to the site.
Instead of calling it in the header or throwing it inside wp_head()
this file will be called automatically in the footer so as not to
slow the page load.

*/// IE8 ployfill for GetComputed Style (for Responsive Script below)
window.getComputedStyle||(window.getComputedStyle=function(e,t){this.el=e;this.getPropertyValue=function(t){var n=/(\-([a-z]){1})/g;t==="float"&&(t="styleFloat");n.test(t)&&(t=t.replace(n,function(){return arguments[2].toUpperCase()}));return e.currentStyle[t]?e.currentStyle[t]:null};return this});jQuery(document).ready(function(e){var t=e(window).width();t<481;t>481;t>=768&&e(".comment img[data-gravatar]").each(function(){e(this).attr("src",e(this).attr("data-gravatar"))});t>1030});(function(e){function c(){n.setAttribute("content",s);o=!0}function h(){n.setAttribute("content",i);o=!1}function p(t){l=t.accelerationIncludingGravity;u=Math.abs(l.x);a=Math.abs(l.y);f=Math.abs(l.z);!e.orientation&&(u>7||(f>6&&a<8||f<8&&a>6)&&u>5)?o&&h():o||c()}if(!(/iPhone|iPad|iPod/.test(navigator.platform)&&navigator.userAgent.indexOf("AppleWebKit")>-1))return;var t=e.document;if(!t.querySelector)return;var n=t.querySelector("meta[name=viewport]"),r=n&&n.getAttribute("content"),i=r+",maximum-scale=1",s=r+",maximum-scale=10",o=!0,u,a,f,l;if(!n)return;e.addEventListener("orientationchange",c,!1);e.addEventListener("devicemotion",p,!1)})(this);$(document).ready(function(){function e(e){return e.replace(/^\//,"").replace(/(index|default).[a-zA-Z]{3,4}$/,"").replace(/\/$/,"")}function r(e){for(var t=0,n=arguments.length;t<n;t++){var r=arguments[t],i=$(r);if(i.scrollTop()>0)return r;i.scrollTop(1);var s=i.scrollTop()>0;i.scrollTop(0);if(s)return r}return[]}var t=e(location.pathname),n=r("html","body");$("a[href*=#]").each(function(){var r=e(this.pathname)||t;if(t===r&&(location.hostname===this.hostname||!this.hostname)&&this.hash.replace(/#/,"")){var i=$(this.hash),s=this.hash;if(s){var o=i.offset().top;$(this).click(function(e){e.preventDefault();$(n).animate({scrollTop:o},400,function(){location.hash=s})})}}})});