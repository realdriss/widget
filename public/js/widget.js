(()=>{function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(t,o){for(var r=0;r<o.length;r++){var i=o[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,(n=i.key,a=void 0,a=function(t,o){if("object"!==e(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var i=r.call(t,o||"default");if("object"!==e(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===o?String:Number)(t)}(n,"string"),"symbol"===e(a)?a:String(a)),i)}var n,a}var o=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var o,r,i;return o=e,(r=[{key:"init",value:function(){var e=[{name:"wrap-widgets",pull:"clone",put:!1}];$.each($(".sidebar-item"),(function(){e.push({name:"wrap-widgets",pull:!0,put:!0})}));var t=function(e){if(e.length>0){var t=[];$.each(e.find("li"),(function(e,o){t.push($(o).find("form").serialize())})),$.ajax({type:"POST",cache:!1,url:BWidget.routes.save_widgets_sidebar,data:{items:t,sidebar_id:e.data("id")},beforeSend:function(){RealDriss.showNotice("info",RealDrissVariables.languages.notices_msg.processing_request)},success:function(t){t.error?RealDriss.showError(t.message):(e.find("ul").html(t.data),RealDriss.callScroll($(".list-page-select-widget")),RealDriss.showSuccess(t.message)),e.find(".widget_save i").remove()},error:function(t){RealDriss.handleError(t),e.find(".widget_save i").remove()}})}};e.forEach((function(e,o){Sortable.create(document.getElementById("wrap-widget-"+(o+1)),{sort:0!==o,group:e,delay:0,disabled:!1,store:null,animation:150,handle:".widget-handle",ghostClass:"sortable-ghost",chosenClass:"sortable-chosen",dataIdAttr:"data-id",forceFallback:!1,fallbackClass:"sortable-fallback",fallbackOnBody:!1,scroll:!0,scrollSensitivity:30,scrollSpeed:10,onEnd:function(e){e.from!==e.to&&t($(e.from).closest(".sidebar-item")),t($(e.item).closest(".sidebar-item"))}})}));var o=$("#wrap-widgets");o.on("click",".widget-control-delete",(function(e){e.preventDefault();var t=$(e.currentTarget),o=t.closest("li");t.addClass("button-loading"),$.ajax({type:"DELETE",cache:!1,url:BWidget.routes.delete,data:{widget_id:o.data("id"),position:o.data("position"),sidebar_id:t.closest(".sidebar-item").data("id")},beforeSend:function(){RealDriss.showNotice("info",RealDrissVariables.languages.notices_msg.processing_request)},success:function(e){e.error?RealDriss.showError(e.message):(RealDriss.showSuccess(e.message),o.fadeOut().remove()),o.find(".widget-control-delete").removeClass("button-loading")},error:function(e){RealDriss.handleError(e),o.find(".widget-control-delete").removeClass("button-loading")}})})),o.on("click","#added-widget .widget-handle",(function(e){var t=$(e.currentTarget);t.closest("li").find(".widget-content").slideToggle(300),t.find(".fa").toggleClass("fa-caret-up"),t.find(".fa").toggleClass("fa-caret-down")})),o.on("click",".widget_save",(function(e){e.preventDefault();var o=$(e.currentTarget);o.addClass("button-loading"),t(o.closest(".sidebar-item"))})),RealDriss.callScroll($(".list-page-select-widget"))}}])&&t(o.prototype,r),i&&t(o,i),Object.defineProperty(o,"prototype",{writable:!1}),e}();$(document).ready((function(){(new o).init()}))})();