function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}

!function(root, factory) {
    "function" == typeof define && define.amd ? define([], function() {
        return factory();
    }) : "object" == typeof exports ? module.exports = factory() : root.whatInput = factory();
}(this, function() {
    "use strict";
    function bufferInput(event) {
        clearTimeout(timer), setInput(event), buffer = !0, timer = setTimeout(function() {
            buffer = !1;
        }, 1e3);
    }
    function immediateInput(event) {
        buffer || setInput(event);
    }
    function setInput(event) {
        var eventKey = key(event), eventTarget = target(event), value = inputMap[event.type];
        "pointer" === value && (value = pointerType(event)), currentInput !== value && (!formTyping && currentInput && "keyboard" === value && "tab" !== keyMap[eventKey] && formInputs.indexOf(eventTarget.nodeName.toLowerCase()) >= 0 || (currentInput = value, 
        body.setAttribute("data-whatinput", currentInput), -1 === inputTypes.indexOf(currentInput) && inputTypes.push(currentInput))), 
        "keyboard" === value && logKeys(eventKey);
    }
    function key(event) {
        return event.keyCode ? event.keyCode : event.which;
    }
    function target(event) {
        return event.target || event.srcElement;
    }
    function pointerType(event) {
        return "number" == typeof event.pointerType ? pointerMap[event.pointerType] : event.pointerType;
    }
    function logKeys(eventKey) {
        -1 === activeKeys.indexOf(keyMap[eventKey]) && keyMap[eventKey] && activeKeys.push(keyMap[eventKey]);
    }
    function unLogKeys(event) {
        var eventKey = key(event), arrayPos = activeKeys.indexOf(keyMap[eventKey]);
        -1 !== arrayPos && activeKeys.splice(arrayPos, 1);
    }
    function bindEvents() {
        var mouseEvent = "mousedown";
        window.PointerEvent ? mouseEvent = "pointerdown" : window.MSPointerEvent && (mouseEvent = "MSPointerDown"), 
        body.addEventListener(mouseEvent, immediateInput), body.addEventListener("mouseenter", immediateInput), 
        "ontouchstart" in window && body.addEventListener("touchstart", bufferInput), body.addEventListener("keydown", immediateInput), 
        document.addEventListener("keyup", unLogKeys);
    }
    var timer, activeKeys = [], body = document.body, buffer = !1, currentInput = null, formInputs = [ "input", "select", "textarea" ], formTyping = body.hasAttribute("data-whatinput-formtyping"), inputMap = {
        keydown: "keyboard",
        mousedown: "mouse",
        mouseenter: "mouse",
        touchstart: "touch",
        pointerdown: "pointer",
        MSPointerDown: "pointer"
    }, inputTypes = [], keyMap = {
        9: "tab",
        13: "enter",
        16: "shift",
        27: "esc",
        32: "space",
        37: "left",
        38: "up",
        39: "right",
        40: "down"
    }, pointerMap = {
        2: "touch",
        3: "touch",
        4: "mouse"
    };
    return "addEventListener" in window && Array.prototype.indexOf && bindEvents(), 
    {
        ask: function() {
            return currentInput;
        },
        keys: function() {
            return activeKeys;
        },
        types: function() {
            return inputTypes;
        },
        set: setInput
    };
}), function(global, factory) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = global.document ? factory(global, !0) : function(w) {
        if (!w.document) throw new Error("jQuery requires a window with a document");
        return factory(w);
    } : factory(global);
}("undefined" != typeof window ? window : this, function(window, noGlobal) {
    function isArrayLike(obj) {
        var length = !!obj && "length" in obj && obj.length, type = jQuery.type(obj);
        return "function" === type || jQuery.isWindow(obj) ? !1 : "array" === type || 0 === length || "number" == typeof length && length > 0 && length - 1 in obj;
    }
    function winnow(elements, qualifier, not) {
        if (jQuery.isFunction(qualifier)) return jQuery.grep(elements, function(elem, i) {
            return !!qualifier.call(elem, i, elem) !== not;
        });
        if (qualifier.nodeType) return jQuery.grep(elements, function(elem) {
            return elem === qualifier !== not;
        });
        if ("string" == typeof qualifier) {
            if (risSimple.test(qualifier)) return jQuery.filter(qualifier, elements, not);
            qualifier = jQuery.filter(qualifier, elements);
        }
        return jQuery.grep(elements, function(elem) {
            return indexOf.call(qualifier, elem) > -1 !== not;
        });
    }
    function sibling(cur, dir) {
        for (;(cur = cur[dir]) && 1 !== cur.nodeType; ) ;
        return cur;
    }
    function createOptions(options) {
        var object = {};
        return jQuery.each(options.match(rnotwhite) || [], function(_, flag) {
            object[flag] = !0;
        }), object;
    }
    function completed() {
        document.removeEventListener("DOMContentLoaded", completed), window.removeEventListener("load", completed), 
        jQuery.ready();
    }
    function Data() {
        this.expando = jQuery.expando + Data.uid++;
    }
    function dataAttr(elem, key, data) {
        var name;
        if (void 0 === data && 1 === elem.nodeType) if (name = "data-" + key.replace(rmultiDash, "-$&").toLowerCase(), 
        data = elem.getAttribute(name), "string" == typeof data) {
            try {
                data = "true" === data ? !0 : "false" === data ? !1 : "null" === data ? null : +data + "" === data ? +data : rbrace.test(data) ? jQuery.parseJSON(data) : data;
            } catch (e) {}
            dataUser.set(elem, key, data);
        } else data = void 0;
        return data;
    }
    function adjustCSS(elem, prop, valueParts, tween) {
        var adjusted, scale = 1, maxIterations = 20, currentValue = tween ? function() {
            return tween.cur();
        } : function() {
            return jQuery.css(elem, prop, "");
        }, initial = currentValue(), unit = valueParts && valueParts[3] || (jQuery.cssNumber[prop] ? "" : "px"), initialInUnit = (jQuery.cssNumber[prop] || "px" !== unit && +initial) && rcssNum.exec(jQuery.css(elem, prop));
        if (initialInUnit && initialInUnit[3] !== unit) {
            unit = unit || initialInUnit[3], valueParts = valueParts || [], initialInUnit = +initial || 1;
            do scale = scale || ".5", initialInUnit /= scale, jQuery.style(elem, prop, initialInUnit + unit); while (scale !== (scale = currentValue() / initial) && 1 !== scale && --maxIterations);
        }
        return valueParts && (initialInUnit = +initialInUnit || +initial || 0, adjusted = valueParts[1] ? initialInUnit + (valueParts[1] + 1) * valueParts[2] : +valueParts[2], 
        tween && (tween.unit = unit, tween.start = initialInUnit, tween.end = adjusted)), 
        adjusted;
    }
    function getAll(context, tag) {
        var ret = "undefined" != typeof context.getElementsByTagName ? context.getElementsByTagName(tag || "*") : "undefined" != typeof context.querySelectorAll ? context.querySelectorAll(tag || "*") : [];
        return void 0 === tag || tag && jQuery.nodeName(context, tag) ? jQuery.merge([ context ], ret) : ret;
    }
    function setGlobalEval(elems, refElements) {
        for (var i = 0, l = elems.length; l > i; i++) dataPriv.set(elems[i], "globalEval", !refElements || dataPriv.get(refElements[i], "globalEval"));
    }
    function buildFragment(elems, context, scripts, selection, ignored) {
        for (var elem, tmp, tag, wrap, contains, j, fragment = context.createDocumentFragment(), nodes = [], i = 0, l = elems.length; l > i; i++) if (elem = elems[i], 
        elem || 0 === elem) if ("object" === jQuery.type(elem)) jQuery.merge(nodes, elem.nodeType ? [ elem ] : elem); else if (rhtml.test(elem)) {
            for (tmp = tmp || fragment.appendChild(context.createElement("div")), tag = (rtagName.exec(elem) || [ "", "" ])[1].toLowerCase(), 
            wrap = wrapMap[tag] || wrapMap._default, tmp.innerHTML = wrap[1] + jQuery.htmlPrefilter(elem) + wrap[2], 
            j = wrap[0]; j--; ) tmp = tmp.lastChild;
            jQuery.merge(nodes, tmp.childNodes), tmp = fragment.firstChild, tmp.textContent = "";
        } else nodes.push(context.createTextNode(elem));
        for (fragment.textContent = "", i = 0; elem = nodes[i++]; ) if (selection && jQuery.inArray(elem, selection) > -1) ignored && ignored.push(elem); else if (contains = jQuery.contains(elem.ownerDocument, elem), 
        tmp = getAll(fragment.appendChild(elem), "script"), contains && setGlobalEval(tmp), 
        scripts) for (j = 0; elem = tmp[j++]; ) rscriptType.test(elem.type || "") && scripts.push(elem);
        return fragment;
    }
    function returnTrue() {
        return !0;
    }
    function returnFalse() {
        return !1;
    }
    function safeActiveElement() {
        try {
            return document.activeElement;
        } catch (err) {}
    }
    function on(elem, types, selector, data, fn, one) {
        var origFn, type;
        if ("object" == typeof types) {
            "string" != typeof selector && (data = data || selector, selector = void 0);
            for (type in types) on(elem, type, selector, data, types[type], one);
            return elem;
        }
        if (null == data && null == fn ? (fn = selector, data = selector = void 0) : null == fn && ("string" == typeof selector ? (fn = data, 
        data = void 0) : (fn = data, data = selector, selector = void 0)), fn === !1) fn = returnFalse; else if (!fn) return elem;
        return 1 === one && (origFn = fn, fn = function(event) {
            return jQuery().off(event), origFn.apply(this, arguments);
        }, fn.guid = origFn.guid || (origFn.guid = jQuery.guid++)), elem.each(function() {
            jQuery.event.add(this, types, fn, data, selector);
        });
    }
    function manipulationTarget(elem, content) {
        return jQuery.nodeName(elem, "table") && jQuery.nodeName(11 !== content.nodeType ? content : content.firstChild, "tr") ? elem.getElementsByTagName("tbody")[0] || elem.appendChild(elem.ownerDocument.createElement("tbody")) : elem;
    }
    function disableScript(elem) {
        return elem.type = (null !== elem.getAttribute("type")) + "/" + elem.type, elem;
    }
    function restoreScript(elem) {
        var match = rscriptTypeMasked.exec(elem.type);
        return match ? elem.type = match[1] : elem.removeAttribute("type"), elem;
    }
    function cloneCopyEvent(src, dest) {
        var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;
        if (1 === dest.nodeType) {
            if (dataPriv.hasData(src) && (pdataOld = dataPriv.access(src), pdataCur = dataPriv.set(dest, pdataOld), 
            events = pdataOld.events)) {
                delete pdataCur.handle, pdataCur.events = {};
                for (type in events) for (i = 0, l = events[type].length; l > i; i++) jQuery.event.add(dest, type, events[type][i]);
            }
            dataUser.hasData(src) && (udataOld = dataUser.access(src), udataCur = jQuery.extend({}, udataOld), 
            dataUser.set(dest, udataCur));
        }
    }
    function fixInput(src, dest) {
        var nodeName = dest.nodeName.toLowerCase();
        "input" === nodeName && rcheckableType.test(src.type) ? dest.checked = src.checked : ("input" === nodeName || "textarea" === nodeName) && (dest.defaultValue = src.defaultValue);
    }
    function domManip(collection, args, callback, ignored) {
        args = concat.apply([], args);
        var fragment, first, scripts, hasScripts, node, doc, i = 0, l = collection.length, iNoClone = l - 1, value = args[0], isFunction = jQuery.isFunction(value);
        if (isFunction || l > 1 && "string" == typeof value && !support.checkClone && rchecked.test(value)) return collection.each(function(index) {
            var self = collection.eq(index);
            isFunction && (args[0] = value.call(this, index, self.html())), domManip(self, args, callback, ignored);
        });
        if (l && (fragment = buildFragment(args, collection[0].ownerDocument, !1, collection, ignored), 
        first = fragment.firstChild, 1 === fragment.childNodes.length && (fragment = first), 
        first || ignored)) {
            for (scripts = jQuery.map(getAll(fragment, "script"), disableScript), hasScripts = scripts.length; l > i; i++) node = fragment, 
            i !== iNoClone && (node = jQuery.clone(node, !0, !0), hasScripts && jQuery.merge(scripts, getAll(node, "script"))), 
            callback.call(collection[i], node, i);
            if (hasScripts) for (doc = scripts[scripts.length - 1].ownerDocument, jQuery.map(scripts, restoreScript), 
            i = 0; hasScripts > i; i++) node = scripts[i], rscriptType.test(node.type || "") && !dataPriv.access(node, "globalEval") && jQuery.contains(doc, node) && (node.src ? jQuery._evalUrl && jQuery._evalUrl(node.src) : jQuery.globalEval(node.textContent.replace(rcleanScript, "")));
        }
        return collection;
    }
    function remove(elem, selector, keepData) {
        for (var node, nodes = selector ? jQuery.filter(selector, elem) : elem, i = 0; null != (node = nodes[i]); i++) keepData || 1 !== node.nodeType || jQuery.cleanData(getAll(node)), 
        node.parentNode && (keepData && jQuery.contains(node.ownerDocument, node) && setGlobalEval(getAll(node, "script")), 
        node.parentNode.removeChild(node));
        return elem;
    }
    function actualDisplay(name, doc) {
        var elem = jQuery(doc.createElement(name)).appendTo(doc.body), display = jQuery.css(elem[0], "display");
        return elem.detach(), display;
    }
    function defaultDisplay(nodeName) {
        var doc = document, display = elemdisplay[nodeName];
        return display || (display = actualDisplay(nodeName, doc), "none" !== display && display || (iframe = (iframe || jQuery("<iframe frameborder='0' width='0' height='0'/>")).appendTo(doc.documentElement), 
        doc = iframe[0].contentDocument, doc.write(), doc.close(), display = actualDisplay(nodeName, doc), 
        iframe.detach()), elemdisplay[nodeName] = display), display;
    }
    function curCSS(elem, name, computed) {
        var width, minWidth, maxWidth, ret, style = elem.style;
        return computed = computed || getStyles(elem), ret = computed ? computed.getPropertyValue(name) || computed[name] : void 0, 
        "" !== ret && void 0 !== ret || jQuery.contains(elem.ownerDocument, elem) || (ret = jQuery.style(elem, name)), 
        computed && !support.pixelMarginRight() && rnumnonpx.test(ret) && rmargin.test(name) && (width = style.width, 
        minWidth = style.minWidth, maxWidth = style.maxWidth, style.minWidth = style.maxWidth = style.width = ret, 
        ret = computed.width, style.width = width, style.minWidth = minWidth, style.maxWidth = maxWidth), 
        void 0 !== ret ? ret + "" : ret;
    }
    function addGetHookIf(conditionFn, hookFn) {
        return {
            get: function() {
                return conditionFn() ? void delete this.get : (this.get = hookFn).apply(this, arguments);
            }
        };
    }
    function vendorPropName(name) {
        if (name in emptyStyle) return name;
        for (var capName = name[0].toUpperCase() + name.slice(1), i = cssPrefixes.length; i--; ) if (name = cssPrefixes[i] + capName, 
        name in emptyStyle) return name;
    }
    function setPositiveNumber(elem, value, subtract) {
        var matches = rcssNum.exec(value);
        return matches ? Math.max(0, matches[2] - (subtract || 0)) + (matches[3] || "px") : value;
    }
    function augmentWidthOrHeight(elem, name, extra, isBorderBox, styles) {
        for (var i = extra === (isBorderBox ? "border" : "content") ? 4 : "width" === name ? 1 : 0, val = 0; 4 > i; i += 2) "margin" === extra && (val += jQuery.css(elem, extra + cssExpand[i], !0, styles)), 
        isBorderBox ? ("content" === extra && (val -= jQuery.css(elem, "padding" + cssExpand[i], !0, styles)), 
        "margin" !== extra && (val -= jQuery.css(elem, "border" + cssExpand[i] + "Width", !0, styles))) : (val += jQuery.css(elem, "padding" + cssExpand[i], !0, styles), 
        "padding" !== extra && (val += jQuery.css(elem, "border" + cssExpand[i] + "Width", !0, styles)));
        return val;
    }
    function getWidthOrHeight(elem, name, extra) {
        var valueIsBorderBox = !0, val = "width" === name ? elem.offsetWidth : elem.offsetHeight, styles = getStyles(elem), isBorderBox = "border-box" === jQuery.css(elem, "boxSizing", !1, styles);
        if (document.msFullscreenElement && window.top !== window && elem.getClientRects().length && (val = Math.round(100 * elem.getBoundingClientRect()[name])), 
        0 >= val || null == val) {
            if (val = curCSS(elem, name, styles), (0 > val || null == val) && (val = elem.style[name]), 
            rnumnonpx.test(val)) return val;
            valueIsBorderBox = isBorderBox && (support.boxSizingReliable() || val === elem.style[name]), 
            val = parseFloat(val) || 0;
        }
        return val + augmentWidthOrHeight(elem, name, extra || (isBorderBox ? "border" : "content"), valueIsBorderBox, styles) + "px";
    }
    function showHide(elements, show) {
        for (var display, elem, hidden, values = [], index = 0, length = elements.length; length > index; index++) elem = elements[index], 
        elem.style && (values[index] = dataPriv.get(elem, "olddisplay"), display = elem.style.display, 
        show ? (values[index] || "none" !== display || (elem.style.display = ""), "" === elem.style.display && isHidden(elem) && (values[index] = dataPriv.access(elem, "olddisplay", defaultDisplay(elem.nodeName)))) : (hidden = isHidden(elem), 
        "none" === display && hidden || dataPriv.set(elem, "olddisplay", hidden ? display : jQuery.css(elem, "display"))));
        for (index = 0; length > index; index++) elem = elements[index], elem.style && (show && "none" !== elem.style.display && "" !== elem.style.display || (elem.style.display = show ? values[index] || "" : "none"));
        return elements;
    }
    function Tween(elem, options, prop, end, easing) {
        return new Tween.prototype.init(elem, options, prop, end, easing);
    }
    function createFxNow() {
        return window.setTimeout(function() {
            fxNow = void 0;
        }), fxNow = jQuery.now();
    }
    function genFx(type, includeWidth) {
        var which, i = 0, attrs = {
            height: type
        };
        for (includeWidth = includeWidth ? 1 : 0; 4 > i; i += 2 - includeWidth) which = cssExpand[i], 
        attrs["margin" + which] = attrs["padding" + which] = type;
        return includeWidth && (attrs.opacity = attrs.width = type), attrs;
    }
    function createTween(value, prop, animation) {
        for (var tween, collection = (Animation.tweeners[prop] || []).concat(Animation.tweeners["*"]), index = 0, length = collection.length; length > index; index++) if (tween = collection[index].call(animation, prop, value)) return tween;
    }
    function defaultPrefilter(elem, props, opts) {
        var prop, value, toggle, tween, hooks, oldfire, display, checkDisplay, anim = this, orig = {}, style = elem.style, hidden = elem.nodeType && isHidden(elem), dataShow = dataPriv.get(elem, "fxshow");
        opts.queue || (hooks = jQuery._queueHooks(elem, "fx"), null == hooks.unqueued && (hooks.unqueued = 0, 
        oldfire = hooks.empty.fire, hooks.empty.fire = function() {
            hooks.unqueued || oldfire();
        }), hooks.unqueued++, anim.always(function() {
            anim.always(function() {
                hooks.unqueued--, jQuery.queue(elem, "fx").length || hooks.empty.fire();
            });
        })), 1 === elem.nodeType && ("height" in props || "width" in props) && (opts.overflow = [ style.overflow, style.overflowX, style.overflowY ], 
        display = jQuery.css(elem, "display"), checkDisplay = "none" === display ? dataPriv.get(elem, "olddisplay") || defaultDisplay(elem.nodeName) : display, 
        "inline" === checkDisplay && "none" === jQuery.css(elem, "float") && (style.display = "inline-block")), 
        opts.overflow && (style.overflow = "hidden", anim.always(function() {
            style.overflow = opts.overflow[0], style.overflowX = opts.overflow[1], style.overflowY = opts.overflow[2];
        }));
        for (prop in props) if (value = props[prop], rfxtypes.exec(value)) {
            if (delete props[prop], toggle = toggle || "toggle" === value, value === (hidden ? "hide" : "show")) {
                if ("show" !== value || !dataShow || void 0 === dataShow[prop]) continue;
                hidden = !0;
            }
            orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem, prop);
        } else display = void 0;
        if (jQuery.isEmptyObject(orig)) "inline" === ("none" === display ? defaultDisplay(elem.nodeName) : display) && (style.display = display); else {
            dataShow ? "hidden" in dataShow && (hidden = dataShow.hidden) : dataShow = dataPriv.access(elem, "fxshow", {}), 
            toggle && (dataShow.hidden = !hidden), hidden ? jQuery(elem).show() : anim.done(function() {
                jQuery(elem).hide();
            }), anim.done(function() {
                var prop;
                dataPriv.remove(elem, "fxshow");
                for (prop in orig) jQuery.style(elem, prop, orig[prop]);
            });
            for (prop in orig) tween = createTween(hidden ? dataShow[prop] : 0, prop, anim), 
            prop in dataShow || (dataShow[prop] = tween.start, hidden && (tween.end = tween.start, 
            tween.start = "width" === prop || "height" === prop ? 1 : 0));
        }
    }
    function propFilter(props, specialEasing) {
        var index, name, easing, value, hooks;
        for (index in props) if (name = jQuery.camelCase(index), easing = specialEasing[name], 
        value = props[index], jQuery.isArray(value) && (easing = value[1], value = props[index] = value[0]), 
        index !== name && (props[name] = value, delete props[index]), hooks = jQuery.cssHooks[name], 
        hooks && "expand" in hooks) {
            value = hooks.expand(value), delete props[name];
            for (index in value) index in props || (props[index] = value[index], specialEasing[index] = easing);
        } else specialEasing[name] = easing;
    }
    function Animation(elem, properties, options) {
        var result, stopped, index = 0, length = Animation.prefilters.length, deferred = jQuery.Deferred().always(function() {
            delete tick.elem;
        }), tick = function() {
            if (stopped) return !1;
            for (var currentTime = fxNow || createFxNow(), remaining = Math.max(0, animation.startTime + animation.duration - currentTime), temp = remaining / animation.duration || 0, percent = 1 - temp, index = 0, length = animation.tweens.length; length > index; index++) animation.tweens[index].run(percent);
            return deferred.notifyWith(elem, [ animation, percent, remaining ]), 1 > percent && length ? remaining : (deferred.resolveWith(elem, [ animation ]), 
            !1);
        }, animation = deferred.promise({
            elem: elem,
            props: jQuery.extend({}, properties),
            opts: jQuery.extend(!0, {
                specialEasing: {},
                easing: jQuery.easing._default
            }, options),
            originalProperties: properties,
            originalOptions: options,
            startTime: fxNow || createFxNow(),
            duration: options.duration,
            tweens: [],
            createTween: function(prop, end) {
                var tween = jQuery.Tween(elem, animation.opts, prop, end, animation.opts.specialEasing[prop] || animation.opts.easing);
                return animation.tweens.push(tween), tween;
            },
            stop: function(gotoEnd) {
                var index = 0, length = gotoEnd ? animation.tweens.length : 0;
                if (stopped) return this;
                for (stopped = !0; length > index; index++) animation.tweens[index].run(1);
                return gotoEnd ? (deferred.notifyWith(elem, [ animation, 1, 0 ]), deferred.resolveWith(elem, [ animation, gotoEnd ])) : deferred.rejectWith(elem, [ animation, gotoEnd ]), 
                this;
            }
        }), props = animation.props;
        for (propFilter(props, animation.opts.specialEasing); length > index; index++) if (result = Animation.prefilters[index].call(animation, elem, props, animation.opts)) return jQuery.isFunction(result.stop) && (jQuery._queueHooks(animation.elem, animation.opts.queue).stop = jQuery.proxy(result.stop, result)), 
        result;
        return jQuery.map(props, createTween, animation), jQuery.isFunction(animation.opts.start) && animation.opts.start.call(elem, animation), 
        jQuery.fx.timer(jQuery.extend(tick, {
            elem: elem,
            anim: animation,
            queue: animation.opts.queue
        })), animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);
    }
    function getClass(elem) {
        return elem.getAttribute && elem.getAttribute("class") || "";
    }
    function addToPrefiltersOrTransports(structure) {
        return function(dataTypeExpression, func) {
            "string" != typeof dataTypeExpression && (func = dataTypeExpression, dataTypeExpression = "*");
            var dataType, i = 0, dataTypes = dataTypeExpression.toLowerCase().match(rnotwhite) || [];
            if (jQuery.isFunction(func)) for (;dataType = dataTypes[i++]; ) "+" === dataType[0] ? (dataType = dataType.slice(1) || "*", 
            (structure[dataType] = structure[dataType] || []).unshift(func)) : (structure[dataType] = structure[dataType] || []).push(func);
        };
    }
    function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {
        function inspect(dataType) {
            var selected;
            return inspected[dataType] = !0, jQuery.each(structure[dataType] || [], function(_, prefilterOrFactory) {
                var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
                return "string" != typeof dataTypeOrTransport || seekingTransport || inspected[dataTypeOrTransport] ? seekingTransport ? !(selected = dataTypeOrTransport) : void 0 : (options.dataTypes.unshift(dataTypeOrTransport), 
                inspect(dataTypeOrTransport), !1);
            }), selected;
        }
        var inspected = {}, seekingTransport = structure === transports;
        return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
    }
    function ajaxExtend(target, src) {
        var key, deep, flatOptions = jQuery.ajaxSettings.flatOptions || {};
        for (key in src) void 0 !== src[key] && ((flatOptions[key] ? target : deep || (deep = {}))[key] = src[key]);
        return deep && jQuery.extend(!0, target, deep), target;
    }
    function ajaxHandleResponses(s, jqXHR, responses) {
        for (var ct, type, finalDataType, firstDataType, contents = s.contents, dataTypes = s.dataTypes; "*" === dataTypes[0]; ) dataTypes.shift(), 
        void 0 === ct && (ct = s.mimeType || jqXHR.getResponseHeader("Content-Type"));
        if (ct) for (type in contents) if (contents[type] && contents[type].test(ct)) {
            dataTypes.unshift(type);
            break;
        }
        if (dataTypes[0] in responses) finalDataType = dataTypes[0]; else {
            for (type in responses) {
                if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
                    finalDataType = type;
                    break;
                }
                firstDataType || (firstDataType = type);
            }
            finalDataType = finalDataType || firstDataType;
        }
        return finalDataType ? (finalDataType !== dataTypes[0] && dataTypes.unshift(finalDataType), 
        responses[finalDataType]) : void 0;
    }
    function ajaxConvert(s, response, jqXHR, isSuccess) {
        var conv2, current, conv, tmp, prev, converters = {}, dataTypes = s.dataTypes.slice();
        if (dataTypes[1]) for (conv in s.converters) converters[conv.toLowerCase()] = s.converters[conv];
        for (current = dataTypes.shift(); current; ) if (s.responseFields[current] && (jqXHR[s.responseFields[current]] = response), 
        !prev && isSuccess && s.dataFilter && (response = s.dataFilter(response, s.dataType)), 
        prev = current, current = dataTypes.shift()) if ("*" === current) current = prev; else if ("*" !== prev && prev !== current) {
            if (conv = converters[prev + " " + current] || converters["* " + current], !conv) for (conv2 in converters) if (tmp = conv2.split(" "), 
            tmp[1] === current && (conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]])) {
                conv === !0 ? conv = converters[conv2] : converters[conv2] !== !0 && (current = tmp[0], 
                dataTypes.unshift(tmp[1]));
                break;
            }
            if (conv !== !0) if (conv && s["throws"]) response = conv(response); else try {
                response = conv(response);
            } catch (e) {
                return {
                    state: "parsererror",
                    error: conv ? e : "No conversion from " + prev + " to " + current
                };
            }
        }
        return {
            state: "success",
            data: response
        };
    }
    function buildParams(prefix, obj, traditional, add) {
        var name;
        if (jQuery.isArray(obj)) jQuery.each(obj, function(i, v) {
            traditional || rbracket.test(prefix) ? add(prefix, v) : buildParams(prefix + "[" + ("object" == typeof v && null != v ? i : "") + "]", v, traditional, add);
        }); else if (traditional || "object" !== jQuery.type(obj)) add(prefix, obj); else for (name in obj) buildParams(prefix + "[" + name + "]", obj[name], traditional, add);
    }
    function getWindow(elem) {
        return jQuery.isWindow(elem) ? elem : 9 === elem.nodeType && elem.defaultView;
    }
    var arr = [], document = window.document, slice = arr.slice, concat = arr.concat, push = arr.push, indexOf = arr.indexOf, class2type = {}, toString = class2type.toString, hasOwn = class2type.hasOwnProperty, support = {}, version = "2.2.2", jQuery = function(selector, context) {
        return new jQuery.fn.init(selector, context);
    }, rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, rmsPrefix = /^-ms-/, rdashAlpha = /-([\da-z])/gi, fcamelCase = function(all, letter) {
        return letter.toUpperCase();
    };
    jQuery.fn = jQuery.prototype = {
        jquery: version,
        constructor: jQuery,
        selector: "",
        length: 0,
        toArray: function() {
            return slice.call(this);
        },
        get: function(num) {
            return null != num ? 0 > num ? this[num + this.length] : this[num] : slice.call(this);
        },
        pushStack: function(elems) {
            var ret = jQuery.merge(this.constructor(), elems);
            return ret.prevObject = this, ret.context = this.context, ret;
        },
        each: function(callback) {
            return jQuery.each(this, callback);
        },
        map: function(callback) {
            return this.pushStack(jQuery.map(this, function(elem, i) {
                return callback.call(elem, i, elem);
            }));
        },
        slice: function() {
            return this.pushStack(slice.apply(this, arguments));
        },
        first: function() {
            return this.eq(0);
        },
        last: function() {
            return this.eq(-1);
        },
        eq: function(i) {
            var len = this.length, j = +i + (0 > i ? len : 0);
            return this.pushStack(j >= 0 && len > j ? [ this[j] ] : []);
        },
        end: function() {
            return this.prevObject || this.constructor();
        },
        push: push,
        sort: arr.sort,
        splice: arr.splice
    }, jQuery.extend = jQuery.fn.extend = function() {
        var options, name, src, copy, copyIsArray, clone, target = arguments[0] || {}, i = 1, length = arguments.length, deep = !1;
        for ("boolean" == typeof target && (deep = target, target = arguments[i] || {}, 
        i++), "object" == typeof target || jQuery.isFunction(target) || (target = {}), i === length && (target = this, 
        i--); length > i; i++) if (null != (options = arguments[i])) for (name in options) src = target[name], 
        copy = options[name], target !== copy && (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy))) ? (copyIsArray ? (copyIsArray = !1, 
        clone = src && jQuery.isArray(src) ? src : []) : clone = src && jQuery.isPlainObject(src) ? src : {}, 
        target[name] = jQuery.extend(deep, clone, copy)) : void 0 !== copy && (target[name] = copy));
        return target;
    }, jQuery.extend({
        expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(msg) {
            throw new Error(msg);
        },
        noop: function() {},
        isFunction: function(obj) {
            return "function" === jQuery.type(obj);
        },
        isArray: Array.isArray,
        isWindow: function(obj) {
            return null != obj && obj === obj.window;
        },
        isNumeric: function(obj) {
            var realStringObj = obj && obj.toString();
            return !jQuery.isArray(obj) && realStringObj - parseFloat(realStringObj) + 1 >= 0;
        },
        isPlainObject: function(obj) {
            var key;
            if ("object" !== jQuery.type(obj) || obj.nodeType || jQuery.isWindow(obj)) return !1;
            if (obj.constructor && !hasOwn.call(obj, "constructor") && !hasOwn.call(obj.constructor.prototype || {}, "isPrototypeOf")) return !1;
            for (key in obj) ;
            return void 0 === key || hasOwn.call(obj, key);
        },
        isEmptyObject: function(obj) {
            var name;
            for (name in obj) return !1;
            return !0;
        },
        type: function(obj) {
            return null == obj ? obj + "" : "object" == typeof obj || "function" == typeof obj ? class2type[toString.call(obj)] || "object" : typeof obj;
        },
        globalEval: function(code) {
            var script, indirect = eval;
            code = jQuery.trim(code), code && (1 === code.indexOf("use strict") ? (script = document.createElement("script"), 
            script.text = code, document.head.appendChild(script).parentNode.removeChild(script)) : indirect(code));
        },
        camelCase: function(string) {
            return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
        },
        nodeName: function(elem, name) {
            return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
        },
        each: function(obj, callback) {
            var length, i = 0;
            if (isArrayLike(obj)) for (length = obj.length; length > i && callback.call(obj[i], i, obj[i]) !== !1; i++) ; else for (i in obj) if (callback.call(obj[i], i, obj[i]) === !1) break;
            return obj;
        },
        trim: function(text) {
            return null == text ? "" : (text + "").replace(rtrim, "");
        },
        makeArray: function(arr, results) {
            var ret = results || [];
            return null != arr && (isArrayLike(Object(arr)) ? jQuery.merge(ret, "string" == typeof arr ? [ arr ] : arr) : push.call(ret, arr)), 
            ret;
        },
        inArray: function(elem, arr, i) {
            return null == arr ? -1 : indexOf.call(arr, elem, i);
        },
        merge: function(first, second) {
            for (var len = +second.length, j = 0, i = first.length; len > j; j++) first[i++] = second[j];
            return first.length = i, first;
        },
        grep: function(elems, callback, invert) {
            for (var callbackInverse, matches = [], i = 0, length = elems.length, callbackExpect = !invert; length > i; i++) callbackInverse = !callback(elems[i], i), 
            callbackInverse !== callbackExpect && matches.push(elems[i]);
            return matches;
        },
        map: function(elems, callback, arg) {
            var length, value, i = 0, ret = [];
            if (isArrayLike(elems)) for (length = elems.length; length > i; i++) value = callback(elems[i], i, arg), 
            null != value && ret.push(value); else for (i in elems) value = callback(elems[i], i, arg), 
            null != value && ret.push(value);
            return concat.apply([], ret);
        },
        guid: 1,
        proxy: function(fn, context) {
            var tmp, args, proxy;
            return "string" == typeof context && (tmp = fn[context], context = fn, fn = tmp), 
            jQuery.isFunction(fn) ? (args = slice.call(arguments, 2), proxy = function() {
                return fn.apply(context || this, args.concat(slice.call(arguments)));
            }, proxy.guid = fn.guid = fn.guid || jQuery.guid++, proxy) : void 0;
        },
        now: Date.now,
        support: support
    }), "function" == typeof Symbol && (jQuery.fn[Symbol.iterator] = arr[Symbol.iterator]), 
    jQuery.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(i, name) {
        class2type["[object " + name + "]"] = name.toLowerCase();
    });
    var Sizzle = function(window) {
        function Sizzle(selector, context, results, seed) {
            var m, i, elem, nid, nidselect, match, groups, newSelector, newContext = context && context.ownerDocument, nodeType = context ? context.nodeType : 9;
            if (results = results || [], "string" != typeof selector || !selector || 1 !== nodeType && 9 !== nodeType && 11 !== nodeType) return results;
            if (!seed && ((context ? context.ownerDocument || context : preferredDoc) !== document && setDocument(context), 
            context = context || document, documentIsHTML)) {
                if (11 !== nodeType && (match = rquickExpr.exec(selector))) if (m = match[1]) {
                    if (9 === nodeType) {
                        if (!(elem = context.getElementById(m))) return results;
                        if (elem.id === m) return results.push(elem), results;
                    } else if (newContext && (elem = newContext.getElementById(m)) && contains(context, elem) && elem.id === m) return results.push(elem), 
                    results;
                } else {
                    if (match[2]) return push.apply(results, context.getElementsByTagName(selector)), 
                    results;
                    if ((m = match[3]) && support.getElementsByClassName && context.getElementsByClassName) return push.apply(results, context.getElementsByClassName(m)), 
                    results;
                }
                if (support.qsa && !compilerCache[selector + " "] && (!rbuggyQSA || !rbuggyQSA.test(selector))) {
                    if (1 !== nodeType) newContext = context, newSelector = selector; else if ("object" !== context.nodeName.toLowerCase()) {
                        for ((nid = context.getAttribute("id")) ? nid = nid.replace(rescape, "\\$&") : context.setAttribute("id", nid = expando), 
                        groups = tokenize(selector), i = groups.length, nidselect = ridentifier.test(nid) ? "#" + nid : "[id='" + nid + "']"; i--; ) groups[i] = nidselect + " " + toSelector(groups[i]);
                        newSelector = groups.join(","), newContext = rsibling.test(selector) && testContext(context.parentNode) || context;
                    }
                    if (newSelector) try {
                        return push.apply(results, newContext.querySelectorAll(newSelector)), results;
                    } catch (qsaError) {} finally {
                        nid === expando && context.removeAttribute("id");
                    }
                }
            }
            return select(selector.replace(rtrim, "$1"), context, results, seed);
        }
        function createCache() {
            function cache(key, value) {
                return keys.push(key + " ") > Expr.cacheLength && delete cache[keys.shift()], cache[key + " "] = value;
            }
            var keys = [];
            return cache;
        }
        function markFunction(fn) {
            return fn[expando] = !0, fn;
        }
        function assert(fn) {
            var div = document.createElement("div");
            try {
                return !!fn(div);
            } catch (e) {
                return !1;
            } finally {
                div.parentNode && div.parentNode.removeChild(div), div = null;
            }
        }
        function addHandle(attrs, handler) {
            for (var arr = attrs.split("|"), i = arr.length; i--; ) Expr.attrHandle[arr[i]] = handler;
        }
        function siblingCheck(a, b) {
            var cur = b && a, diff = cur && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || MAX_NEGATIVE) - (~a.sourceIndex || MAX_NEGATIVE);
            if (diff) return diff;
            if (cur) for (;cur = cur.nextSibling; ) if (cur === b) return -1;
            return a ? 1 : -1;
        }
        function createInputPseudo(type) {
            return function(elem) {
                var name = elem.nodeName.toLowerCase();
                return "input" === name && elem.type === type;
            };
        }
        function createButtonPseudo(type) {
            return function(elem) {
                var name = elem.nodeName.toLowerCase();
                return ("input" === name || "button" === name) && elem.type === type;
            };
        }
        function createPositionalPseudo(fn) {
            return markFunction(function(argument) {
                return argument = +argument, markFunction(function(seed, matches) {
                    for (var j, matchIndexes = fn([], seed.length, argument), i = matchIndexes.length; i--; ) seed[j = matchIndexes[i]] && (seed[j] = !(matches[j] = seed[j]));
                });
            });
        }
        function testContext(context) {
            return context && "undefined" != typeof context.getElementsByTagName && context;
        }
        function setFilters() {}
        function toSelector(tokens) {
            for (var i = 0, len = tokens.length, selector = ""; len > i; i++) selector += tokens[i].value;
            return selector;
        }
        function addCombinator(matcher, combinator, base) {
            var dir = combinator.dir, checkNonElements = base && "parentNode" === dir, doneName = done++;
            return combinator.first ? function(elem, context, xml) {
                for (;elem = elem[dir]; ) if (1 === elem.nodeType || checkNonElements) return matcher(elem, context, xml);
            } : function(elem, context, xml) {
                var oldCache, uniqueCache, outerCache, newCache = [ dirruns, doneName ];
                if (xml) {
                    for (;elem = elem[dir]; ) if ((1 === elem.nodeType || checkNonElements) && matcher(elem, context, xml)) return !0;
                } else for (;elem = elem[dir]; ) if (1 === elem.nodeType || checkNonElements) {
                    if (outerCache = elem[expando] || (elem[expando] = {}), uniqueCache = outerCache[elem.uniqueID] || (outerCache[elem.uniqueID] = {}), 
                    (oldCache = uniqueCache[dir]) && oldCache[0] === dirruns && oldCache[1] === doneName) return newCache[2] = oldCache[2];
                    if (uniqueCache[dir] = newCache, newCache[2] = matcher(elem, context, xml)) return !0;
                }
            };
        }
        function elementMatcher(matchers) {
            return matchers.length > 1 ? function(elem, context, xml) {
                for (var i = matchers.length; i--; ) if (!matchers[i](elem, context, xml)) return !1;
                return !0;
            } : matchers[0];
        }
        function multipleContexts(selector, contexts, results) {
            for (var i = 0, len = contexts.length; len > i; i++) Sizzle(selector, contexts[i], results);
            return results;
        }
        function condense(unmatched, map, filter, context, xml) {
            for (var elem, newUnmatched = [], i = 0, len = unmatched.length, mapped = null != map; len > i; i++) (elem = unmatched[i]) && (!filter || filter(elem, context, xml)) && (newUnmatched.push(elem), 
            mapped && map.push(i));
            return newUnmatched;
        }
        function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
            return postFilter && !postFilter[expando] && (postFilter = setMatcher(postFilter)), 
            postFinder && !postFinder[expando] && (postFinder = setMatcher(postFinder, postSelector)), 
            markFunction(function(seed, results, context, xml) {
                var temp, i, elem, preMap = [], postMap = [], preexisting = results.length, elems = seed || multipleContexts(selector || "*", context.nodeType ? [ context ] : context, []), matcherIn = !preFilter || !seed && selector ? elems : condense(elems, preMap, preFilter, context, xml), matcherOut = matcher ? postFinder || (seed ? preFilter : preexisting || postFilter) ? [] : results : matcherIn;
                if (matcher && matcher(matcherIn, matcherOut, context, xml), postFilter) for (temp = condense(matcherOut, postMap), 
                postFilter(temp, [], context, xml), i = temp.length; i--; ) (elem = temp[i]) && (matcherOut[postMap[i]] = !(matcherIn[postMap[i]] = elem));
                if (seed) {
                    if (postFinder || preFilter) {
                        if (postFinder) {
                            for (temp = [], i = matcherOut.length; i--; ) (elem = matcherOut[i]) && temp.push(matcherIn[i] = elem);
                            postFinder(null, matcherOut = [], temp, xml);
                        }
                        for (i = matcherOut.length; i--; ) (elem = matcherOut[i]) && (temp = postFinder ? indexOf(seed, elem) : preMap[i]) > -1 && (seed[temp] = !(results[temp] = elem));
                    }
                } else matcherOut = condense(matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut), 
                postFinder ? postFinder(null, results, matcherOut, xml) : push.apply(results, matcherOut);
            });
        }
        function matcherFromTokens(tokens) {
            for (var checkContext, matcher, j, len = tokens.length, leadingRelative = Expr.relative[tokens[0].type], implicitRelative = leadingRelative || Expr.relative[" "], i = leadingRelative ? 1 : 0, matchContext = addCombinator(function(elem) {
                return elem === checkContext;
            }, implicitRelative, !0), matchAnyContext = addCombinator(function(elem) {
                return indexOf(checkContext, elem) > -1;
            }, implicitRelative, !0), matchers = [ function(elem, context, xml) {
                var ret = !leadingRelative && (xml || context !== outermostContext) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml));
                return checkContext = null, ret;
            } ]; len > i; i++) if (matcher = Expr.relative[tokens[i].type]) matchers = [ addCombinator(elementMatcher(matchers), matcher) ]; else {
                if (matcher = Expr.filter[tokens[i].type].apply(null, tokens[i].matches), matcher[expando]) {
                    for (j = ++i; len > j && !Expr.relative[tokens[j].type]; j++) ;
                    return setMatcher(i > 1 && elementMatcher(matchers), i > 1 && toSelector(tokens.slice(0, i - 1).concat({
                        value: " " === tokens[i - 2].type ? "*" : ""
                    })).replace(rtrim, "$1"), matcher, j > i && matcherFromTokens(tokens.slice(i, j)), len > j && matcherFromTokens(tokens = tokens.slice(j)), len > j && toSelector(tokens));
                }
                matchers.push(matcher);
            }
            return elementMatcher(matchers);
        }
        function matcherFromGroupMatchers(elementMatchers, setMatchers) {
            var bySet = setMatchers.length > 0, byElement = elementMatchers.length > 0, superMatcher = function(seed, context, xml, results, outermost) {
                var elem, j, matcher, matchedCount = 0, i = "0", unmatched = seed && [], setMatched = [], contextBackup = outermostContext, elems = seed || byElement && Expr.find.TAG("*", outermost), dirrunsUnique = dirruns += null == contextBackup ? 1 : Math.random() || .1, len = elems.length;
                for (outermost && (outermostContext = context === document || context || outermost); i !== len && null != (elem = elems[i]); i++) {
                    if (byElement && elem) {
                        for (j = 0, context || elem.ownerDocument === document || (setDocument(elem), xml = !documentIsHTML); matcher = elementMatchers[j++]; ) if (matcher(elem, context || document, xml)) {
                            results.push(elem);
                            break;
                        }
                        outermost && (dirruns = dirrunsUnique);
                    }
                    bySet && ((elem = !matcher && elem) && matchedCount--, seed && unmatched.push(elem));
                }
                if (matchedCount += i, bySet && i !== matchedCount) {
                    for (j = 0; matcher = setMatchers[j++]; ) matcher(unmatched, setMatched, context, xml);
                    if (seed) {
                        if (matchedCount > 0) for (;i--; ) unmatched[i] || setMatched[i] || (setMatched[i] = pop.call(results));
                        setMatched = condense(setMatched);
                    }
                    push.apply(results, setMatched), outermost && !seed && setMatched.length > 0 && matchedCount + setMatchers.length > 1 && Sizzle.uniqueSort(results);
                }
                return outermost && (dirruns = dirrunsUnique, outermostContext = contextBackup), 
                unmatched;
            };
            return bySet ? markFunction(superMatcher) : superMatcher;
        }
        var i, support, Expr, getText, isXML, tokenize, compile, select, outermostContext, sortInput, hasDuplicate, setDocument, document, docElem, documentIsHTML, rbuggyQSA, rbuggyMatches, matches, contains, expando = "sizzle" + 1 * new Date(), preferredDoc = window.document, dirruns = 0, done = 0, classCache = createCache(), tokenCache = createCache(), compilerCache = createCache(), sortOrder = function(a, b) {
            return a === b && (hasDuplicate = !0), 0;
        }, MAX_NEGATIVE = 1 << 31, hasOwn = {}.hasOwnProperty, arr = [], pop = arr.pop, push_native = arr.push, push = arr.push, slice = arr.slice, indexOf = function(list, elem) {
            for (var i = 0, len = list.length; len > i; i++) if (list[i] === elem) return i;
            return -1;
        }, booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", whitespace = "[\\x20\\t\\r\\n\\f]", identifier = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace + "*([*^$|!~]?=)" + whitespace + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace + "*\\]", pseudos = ":(" + identifier + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|.*)\\)|)", rwhitespace = new RegExp(whitespace + "+", "g"), rtrim = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g"), rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"), rcombinators = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"), rattributeQuotes = new RegExp("=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g"), rpseudo = new RegExp(pseudos), ridentifier = new RegExp("^" + identifier + "$"), matchExpr = {
            ID: new RegExp("^#(" + identifier + ")"),
            CLASS: new RegExp("^\\.(" + identifier + ")"),
            TAG: new RegExp("^(" + identifier + "|[*])"),
            ATTR: new RegExp("^" + attributes),
            PSEUDO: new RegExp("^" + pseudos),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + booleans + ")$", "i"),
            needsContext: new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
        }, rinputs = /^(?:input|select|textarea|button)$/i, rheader = /^h\d$/i, rnative = /^[^{]+\{\s*\[native \w/, rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, rsibling = /[+~]/, rescape = /'|\\/g, runescape = new RegExp("\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig"), funescape = function(_, escaped, escapedWhitespace) {
            var high = "0x" + escaped - 65536;
            return high !== high || escapedWhitespace ? escaped : 0 > high ? String.fromCharCode(high + 65536) : String.fromCharCode(high >> 10 | 55296, 1023 & high | 56320);
        }, unloadHandler = function() {
            setDocument();
        };
        try {
            push.apply(arr = slice.call(preferredDoc.childNodes), preferredDoc.childNodes), 
            arr[preferredDoc.childNodes.length].nodeType;
        } catch (e) {
            push = {
                apply: arr.length ? function(target, els) {
                    push_native.apply(target, slice.call(els));
                } : function(target, els) {
                    for (var j = target.length, i = 0; target[j++] = els[i++]; ) ;
                    target.length = j - 1;
                }
            };
        }
        support = Sizzle.support = {}, isXML = Sizzle.isXML = function(elem) {
            var documentElement = elem && (elem.ownerDocument || elem).documentElement;
            return documentElement ? "HTML" !== documentElement.nodeName : !1;
        }, setDocument = Sizzle.setDocument = function(node) {
            var hasCompare, parent, doc = node ? node.ownerDocument || node : preferredDoc;
            return doc !== document && 9 === doc.nodeType && doc.documentElement ? (document = doc, 
            docElem = document.documentElement, documentIsHTML = !isXML(document), (parent = document.defaultView) && parent.top !== parent && (parent.addEventListener ? parent.addEventListener("unload", unloadHandler, !1) : parent.attachEvent && parent.attachEvent("onunload", unloadHandler)), 
            support.attributes = assert(function(div) {
                return div.className = "i", !div.getAttribute("className");
            }), support.getElementsByTagName = assert(function(div) {
                return div.appendChild(document.createComment("")), !div.getElementsByTagName("*").length;
            }), support.getElementsByClassName = rnative.test(document.getElementsByClassName), 
            support.getById = assert(function(div) {
                return docElem.appendChild(div).id = expando, !document.getElementsByName || !document.getElementsByName(expando).length;
            }), support.getById ? (Expr.find.ID = function(id, context) {
                if ("undefined" != typeof context.getElementById && documentIsHTML) {
                    var m = context.getElementById(id);
                    return m ? [ m ] : [];
                }
            }, Expr.filter.ID = function(id) {
                var attrId = id.replace(runescape, funescape);
                return function(elem) {
                    return elem.getAttribute("id") === attrId;
                };
            }) : (delete Expr.find.ID, Expr.filter.ID = function(id) {
                var attrId = id.replace(runescape, funescape);
                return function(elem) {
                    var node = "undefined" != typeof elem.getAttributeNode && elem.getAttributeNode("id");
                    return node && node.value === attrId;
                };
            }), Expr.find.TAG = support.getElementsByTagName ? function(tag, context) {
                return "undefined" != typeof context.getElementsByTagName ? context.getElementsByTagName(tag) : support.qsa ? context.querySelectorAll(tag) : void 0;
            } : function(tag, context) {
                var elem, tmp = [], i = 0, results = context.getElementsByTagName(tag);
                if ("*" === tag) {
                    for (;elem = results[i++]; ) 1 === elem.nodeType && tmp.push(elem);
                    return tmp;
                }
                return results;
            }, Expr.find.CLASS = support.getElementsByClassName && function(className, context) {
                return "undefined" != typeof context.getElementsByClassName && documentIsHTML ? context.getElementsByClassName(className) : void 0;
            }, rbuggyMatches = [], rbuggyQSA = [], (support.qsa = rnative.test(document.querySelectorAll)) && (assert(function(div) {
                docElem.appendChild(div).innerHTML = "<a id='" + expando + "'></a><select id='" + expando + "-\r\\' msallowcapture=''><option selected=''></option></select>", 
                div.querySelectorAll("[msallowcapture^='']").length && rbuggyQSA.push("[*^$]=" + whitespace + "*(?:''|\"\")"), 
                div.querySelectorAll("[selected]").length || rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")"), 
                div.querySelectorAll("[id~=" + expando + "-]").length || rbuggyQSA.push("~="), div.querySelectorAll(":checked").length || rbuggyQSA.push(":checked"), 
                div.querySelectorAll("a#" + expando + "+*").length || rbuggyQSA.push(".#.+[+~]");
            }), assert(function(div) {
                var input = document.createElement("input");
                input.setAttribute("type", "hidden"), div.appendChild(input).setAttribute("name", "D"), 
                div.querySelectorAll("[name=d]").length && rbuggyQSA.push("name" + whitespace + "*[*^$|!~]?="), 
                div.querySelectorAll(":enabled").length || rbuggyQSA.push(":enabled", ":disabled"), 
                div.querySelectorAll("*,:x"), rbuggyQSA.push(",.*:");
            })), (support.matchesSelector = rnative.test(matches = docElem.matches || docElem.webkitMatchesSelector || docElem.mozMatchesSelector || docElem.oMatchesSelector || docElem.msMatchesSelector)) && assert(function(div) {
                support.disconnectedMatch = matches.call(div, "div"), matches.call(div, "[s!='']:x"), 
                rbuggyMatches.push("!=", pseudos);
            }), rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|")), rbuggyMatches = rbuggyMatches.length && new RegExp(rbuggyMatches.join("|")), 
            hasCompare = rnative.test(docElem.compareDocumentPosition), contains = hasCompare || rnative.test(docElem.contains) ? function(a, b) {
                var adown = 9 === a.nodeType ? a.documentElement : a, bup = b && b.parentNode;
                return a === bup || !(!bup || 1 !== bup.nodeType || !(adown.contains ? adown.contains(bup) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(bup)));
            } : function(a, b) {
                if (b) for (;b = b.parentNode; ) if (b === a) return !0;
                return !1;
            }, sortOrder = hasCompare ? function(a, b) {
                if (a === b) return hasDuplicate = !0, 0;
                var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return compare ? compare : (compare = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 
                1 & compare || !support.sortDetached && b.compareDocumentPosition(a) === compare ? a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ? -1 : b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ? 1 : sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0 : 4 & compare ? -1 : 1);
            } : function(a, b) {
                if (a === b) return hasDuplicate = !0, 0;
                var cur, i = 0, aup = a.parentNode, bup = b.parentNode, ap = [ a ], bp = [ b ];
                if (!aup || !bup) return a === document ? -1 : b === document ? 1 : aup ? -1 : bup ? 1 : sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0;
                if (aup === bup) return siblingCheck(a, b);
                for (cur = a; cur = cur.parentNode; ) ap.unshift(cur);
                for (cur = b; cur = cur.parentNode; ) bp.unshift(cur);
                for (;ap[i] === bp[i]; ) i++;
                return i ? siblingCheck(ap[i], bp[i]) : ap[i] === preferredDoc ? -1 : bp[i] === preferredDoc ? 1 : 0;
            }, document) : document;
        }, Sizzle.matches = function(expr, elements) {
            return Sizzle(expr, null, null, elements);
        }, Sizzle.matchesSelector = function(elem, expr) {
            if ((elem.ownerDocument || elem) !== document && setDocument(elem), expr = expr.replace(rattributeQuotes, "='$1']"), 
            support.matchesSelector && documentIsHTML && !compilerCache[expr + " "] && (!rbuggyMatches || !rbuggyMatches.test(expr)) && (!rbuggyQSA || !rbuggyQSA.test(expr))) try {
                var ret = matches.call(elem, expr);
                if (ret || support.disconnectedMatch || elem.document && 11 !== elem.document.nodeType) return ret;
            } catch (e) {}
            return Sizzle(expr, document, null, [ elem ]).length > 0;
        }, Sizzle.contains = function(context, elem) {
            return (context.ownerDocument || context) !== document && setDocument(context), 
            contains(context, elem);
        }, Sizzle.attr = function(elem, name) {
            (elem.ownerDocument || elem) !== document && setDocument(elem);
            var fn = Expr.attrHandle[name.toLowerCase()], val = fn && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ? fn(elem, name, !documentIsHTML) : void 0;
            return void 0 !== val ? val : support.attributes || !documentIsHTML ? elem.getAttribute(name) : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
        }, Sizzle.error = function(msg) {
            throw new Error("Syntax error, unrecognized expression: " + msg);
        }, Sizzle.uniqueSort = function(results) {
            var elem, duplicates = [], j = 0, i = 0;
            if (hasDuplicate = !support.detectDuplicates, sortInput = !support.sortStable && results.slice(0), 
            results.sort(sortOrder), hasDuplicate) {
                for (;elem = results[i++]; ) elem === results[i] && (j = duplicates.push(i));
                for (;j--; ) results.splice(duplicates[j], 1);
            }
            return sortInput = null, results;
        }, getText = Sizzle.getText = function(elem) {
            var node, ret = "", i = 0, nodeType = elem.nodeType;
            if (nodeType) {
                if (1 === nodeType || 9 === nodeType || 11 === nodeType) {
                    if ("string" == typeof elem.textContent) return elem.textContent;
                    for (elem = elem.firstChild; elem; elem = elem.nextSibling) ret += getText(elem);
                } else if (3 === nodeType || 4 === nodeType) return elem.nodeValue;
            } else for (;node = elem[i++]; ) ret += getText(node);
            return ret;
        }, Expr = Sizzle.selectors = {
            cacheLength: 50,
            createPseudo: markFunction,
            match: matchExpr,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(match) {
                    return match[1] = match[1].replace(runescape, funescape), match[3] = (match[3] || match[4] || match[5] || "").replace(runescape, funescape), 
                    "~=" === match[2] && (match[3] = " " + match[3] + " "), match.slice(0, 4);
                },
                CHILD: function(match) {
                    return match[1] = match[1].toLowerCase(), "nth" === match[1].slice(0, 3) ? (match[3] || Sizzle.error(match[0]), 
                    match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * ("even" === match[3] || "odd" === match[3])), 
                    match[5] = +(match[7] + match[8] || "odd" === match[3])) : match[3] && Sizzle.error(match[0]), 
                    match;
                },
                PSEUDO: function(match) {
                    var excess, unquoted = !match[6] && match[2];
                    return matchExpr.CHILD.test(match[0]) ? null : (match[3] ? match[2] = match[4] || match[5] || "" : unquoted && rpseudo.test(unquoted) && (excess = tokenize(unquoted, !0)) && (excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length) && (match[0] = match[0].slice(0, excess), 
                    match[2] = unquoted.slice(0, excess)), match.slice(0, 3));
                }
            },
            filter: {
                TAG: function(nodeNameSelector) {
                    var nodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase();
                    return "*" === nodeNameSelector ? function() {
                        return !0;
                    } : function(elem) {
                        return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
                    };
                },
                CLASS: function(className) {
                    var pattern = classCache[className + " "];
                    return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) && classCache(className, function(elem) {
                        return pattern.test("string" == typeof elem.className && elem.className || "undefined" != typeof elem.getAttribute && elem.getAttribute("class") || "");
                    });
                },
                ATTR: function(name, operator, check) {
                    return function(elem) {
                        var result = Sizzle.attr(elem, name);
                        return null == result ? "!=" === operator : operator ? (result += "", "=" === operator ? result === check : "!=" === operator ? result !== check : "^=" === operator ? check && 0 === result.indexOf(check) : "*=" === operator ? check && result.indexOf(check) > -1 : "$=" === operator ? check && result.slice(-check.length) === check : "~=" === operator ? (" " + result.replace(rwhitespace, " ") + " ").indexOf(check) > -1 : "|=" === operator ? result === check || result.slice(0, check.length + 1) === check + "-" : !1) : !0;
                    };
                },
                CHILD: function(type, what, argument, first, last) {
                    var simple = "nth" !== type.slice(0, 3), forward = "last" !== type.slice(-4), ofType = "of-type" === what;
                    return 1 === first && 0 === last ? function(elem) {
                        return !!elem.parentNode;
                    } : function(elem, context, xml) {
                        var cache, uniqueCache, outerCache, node, nodeIndex, start, dir = simple !== forward ? "nextSibling" : "previousSibling", parent = elem.parentNode, name = ofType && elem.nodeName.toLowerCase(), useCache = !xml && !ofType, diff = !1;
                        if (parent) {
                            if (simple) {
                                for (;dir; ) {
                                    for (node = elem; node = node[dir]; ) if (ofType ? node.nodeName.toLowerCase() === name : 1 === node.nodeType) return !1;
                                    start = dir = "only" === type && !start && "nextSibling";
                                }
                                return !0;
                            }
                            if (start = [ forward ? parent.firstChild : parent.lastChild ], forward && useCache) {
                                for (node = parent, outerCache = node[expando] || (node[expando] = {}), uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {}), 
                                cache = uniqueCache[type] || [], nodeIndex = cache[0] === dirruns && cache[1], diff = nodeIndex && cache[2], 
                                node = nodeIndex && parent.childNodes[nodeIndex]; node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop(); ) if (1 === node.nodeType && ++diff && node === elem) {
                                    uniqueCache[type] = [ dirruns, nodeIndex, diff ];
                                    break;
                                }
                            } else if (useCache && (node = elem, outerCache = node[expando] || (node[expando] = {}), 
                            uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {}), cache = uniqueCache[type] || [], 
                            nodeIndex = cache[0] === dirruns && cache[1], diff = nodeIndex), diff === !1) for (;(node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop()) && ((ofType ? node.nodeName.toLowerCase() !== name : 1 !== node.nodeType) || !++diff || (useCache && (outerCache = node[expando] || (node[expando] = {}), 
                            uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {}), uniqueCache[type] = [ dirruns, diff ]), 
                            node !== elem)); ) ;
                            return diff -= last, diff === first || diff % first === 0 && diff / first >= 0;
                        }
                    };
                },
                PSEUDO: function(pseudo, argument) {
                    var args, fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || Sizzle.error("unsupported pseudo: " + pseudo);
                    return fn[expando] ? fn(argument) : fn.length > 1 ? (args = [ pseudo, pseudo, "", argument ], 
                    Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function(seed, matches) {
                        for (var idx, matched = fn(seed, argument), i = matched.length; i--; ) idx = indexOf(seed, matched[i]), 
                        seed[idx] = !(matches[idx] = matched[i]);
                    }) : function(elem) {
                        return fn(elem, 0, args);
                    }) : fn;
                }
            },
            pseudos: {
                not: markFunction(function(selector) {
                    var input = [], results = [], matcher = compile(selector.replace(rtrim, "$1"));
                    return matcher[expando] ? markFunction(function(seed, matches, context, xml) {
                        for (var elem, unmatched = matcher(seed, null, xml, []), i = seed.length; i--; ) (elem = unmatched[i]) && (seed[i] = !(matches[i] = elem));
                    }) : function(elem, context, xml) {
                        return input[0] = elem, matcher(input, null, xml, results), input[0] = null, !results.pop();
                    };
                }),
                has: markFunction(function(selector) {
                    return function(elem) {
                        return Sizzle(selector, elem).length > 0;
                    };
                }),
                contains: markFunction(function(text) {
                    return text = text.replace(runescape, funescape), function(elem) {
                        return (elem.textContent || elem.innerText || getText(elem)).indexOf(text) > -1;
                    };
                }),
                lang: markFunction(function(lang) {
                    return ridentifier.test(lang || "") || Sizzle.error("unsupported lang: " + lang), 
                    lang = lang.replace(runescape, funescape).toLowerCase(), function(elem) {
                        var elemLang;
                        do if (elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang")) return elemLang = elemLang.toLowerCase(), 
                        elemLang === lang || 0 === elemLang.indexOf(lang + "-"); while ((elem = elem.parentNode) && 1 === elem.nodeType);
                        return !1;
                    };
                }),
                target: function(elem) {
                    var hash = window.location && window.location.hash;
                    return hash && hash.slice(1) === elem.id;
                },
                root: function(elem) {
                    return elem === docElem;
                },
                focus: function(elem) {
                    return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
                },
                enabled: function(elem) {
                    return elem.disabled === !1;
                },
                disabled: function(elem) {
                    return elem.disabled === !0;
                },
                checked: function(elem) {
                    var nodeName = elem.nodeName.toLowerCase();
                    return "input" === nodeName && !!elem.checked || "option" === nodeName && !!elem.selected;
                },
                selected: function(elem) {
                    return elem.parentNode && elem.parentNode.selectedIndex, elem.selected === !0;
                },
                empty: function(elem) {
                    for (elem = elem.firstChild; elem; elem = elem.nextSibling) if (elem.nodeType < 6) return !1;
                    return !0;
                },
                parent: function(elem) {
                    return !Expr.pseudos.empty(elem);
                },
                header: function(elem) {
                    return rheader.test(elem.nodeName);
                },
                input: function(elem) {
                    return rinputs.test(elem.nodeName);
                },
                button: function(elem) {
                    var name = elem.nodeName.toLowerCase();
                    return "input" === name && "button" === elem.type || "button" === name;
                },
                text: function(elem) {
                    var attr;
                    return "input" === elem.nodeName.toLowerCase() && "text" === elem.type && (null == (attr = elem.getAttribute("type")) || "text" === attr.toLowerCase());
                },
                first: createPositionalPseudo(function() {
                    return [ 0 ];
                }),
                last: createPositionalPseudo(function(matchIndexes, length) {
                    return [ length - 1 ];
                }),
                eq: createPositionalPseudo(function(matchIndexes, length, argument) {
                    return [ 0 > argument ? argument + length : argument ];
                }),
                even: createPositionalPseudo(function(matchIndexes, length) {
                    for (var i = 0; length > i; i += 2) matchIndexes.push(i);
                    return matchIndexes;
                }),
                odd: createPositionalPseudo(function(matchIndexes, length) {
                    for (var i = 1; length > i; i += 2) matchIndexes.push(i);
                    return matchIndexes;
                }),
                lt: createPositionalPseudo(function(matchIndexes, length, argument) {
                    for (var i = 0 > argument ? argument + length : argument; --i >= 0; ) matchIndexes.push(i);
                    return matchIndexes;
                }),
                gt: createPositionalPseudo(function(matchIndexes, length, argument) {
                    for (var i = 0 > argument ? argument + length : argument; ++i < length; ) matchIndexes.push(i);
                    return matchIndexes;
                })
            }
        }, Expr.pseudos.nth = Expr.pseudos.eq;
        for (i in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) Expr.pseudos[i] = createInputPseudo(i);
        for (i in {
            submit: !0,
            reset: !0
        }) Expr.pseudos[i] = createButtonPseudo(i);
        return setFilters.prototype = Expr.filters = Expr.pseudos, Expr.setFilters = new setFilters(), 
        tokenize = Sizzle.tokenize = function(selector, parseOnly) {
            var matched, match, tokens, type, soFar, groups, preFilters, cached = tokenCache[selector + " "];
            if (cached) return parseOnly ? 0 : cached.slice(0);
            for (soFar = selector, groups = [], preFilters = Expr.preFilter; soFar; ) {
                (!matched || (match = rcomma.exec(soFar))) && (match && (soFar = soFar.slice(match[0].length) || soFar), 
                groups.push(tokens = [])), matched = !1, (match = rcombinators.exec(soFar)) && (matched = match.shift(), 
                tokens.push({
                    value: matched,
                    type: match[0].replace(rtrim, " ")
                }), soFar = soFar.slice(matched.length));
                for (type in Expr.filter) !(match = matchExpr[type].exec(soFar)) || preFilters[type] && !(match = preFilters[type](match)) || (matched = match.shift(), 
                tokens.push({
                    value: matched,
                    type: type,
                    matches: match
                }), soFar = soFar.slice(matched.length));
                if (!matched) break;
            }
            return parseOnly ? soFar.length : soFar ? Sizzle.error(selector) : tokenCache(selector, groups).slice(0);
        }, compile = Sizzle.compile = function(selector, match) {
            var i, setMatchers = [], elementMatchers = [], cached = compilerCache[selector + " "];
            if (!cached) {
                for (match || (match = tokenize(selector)), i = match.length; i--; ) cached = matcherFromTokens(match[i]), 
                cached[expando] ? setMatchers.push(cached) : elementMatchers.push(cached);
                cached = compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers)), 
                cached.selector = selector;
            }
            return cached;
        }, select = Sizzle.select = function(selector, context, results, seed) {
            var i, tokens, token, type, find, compiled = "function" == typeof selector && selector, match = !seed && tokenize(selector = compiled.selector || selector);
            if (results = results || [], 1 === match.length) {
                if (tokens = match[0] = match[0].slice(0), tokens.length > 2 && "ID" === (token = tokens[0]).type && support.getById && 9 === context.nodeType && documentIsHTML && Expr.relative[tokens[1].type]) {
                    if (context = (Expr.find.ID(token.matches[0].replace(runescape, funescape), context) || [])[0], 
                    !context) return results;
                    compiled && (context = context.parentNode), selector = selector.slice(tokens.shift().value.length);
                }
                for (i = matchExpr.needsContext.test(selector) ? 0 : tokens.length; i-- && (token = tokens[i], 
                !Expr.relative[type = token.type]); ) if ((find = Expr.find[type]) && (seed = find(token.matches[0].replace(runescape, funescape), rsibling.test(tokens[0].type) && testContext(context.parentNode) || context))) {
                    if (tokens.splice(i, 1), selector = seed.length && toSelector(tokens), !selector) return push.apply(results, seed), 
                    results;
                    break;
                }
            }
            return (compiled || compile(selector, match))(seed, context, !documentIsHTML, results, !context || rsibling.test(selector) && testContext(context.parentNode) || context), 
            results;
        }, support.sortStable = expando.split("").sort(sortOrder).join("") === expando, 
        support.detectDuplicates = !!hasDuplicate, setDocument(), support.sortDetached = assert(function(div1) {
            return 1 & div1.compareDocumentPosition(document.createElement("div"));
        }), assert(function(div) {
            return div.innerHTML = "<a href='#'></a>", "#" === div.firstChild.getAttribute("href");
        }) || addHandle("type|href|height|width", function(elem, name, isXML) {
            return isXML ? void 0 : elem.getAttribute(name, "type" === name.toLowerCase() ? 1 : 2);
        }), support.attributes && assert(function(div) {
            return div.innerHTML = "<input/>", div.firstChild.setAttribute("value", ""), "" === div.firstChild.getAttribute("value");
        }) || addHandle("value", function(elem, name, isXML) {
            return isXML || "input" !== elem.nodeName.toLowerCase() ? void 0 : elem.defaultValue;
        }), assert(function(div) {
            return null == div.getAttribute("disabled");
        }) || addHandle(booleans, function(elem, name, isXML) {
            var val;
            return isXML ? void 0 : elem[name] === !0 ? name.toLowerCase() : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
        }), Sizzle;
    }(window);
    jQuery.find = Sizzle, jQuery.expr = Sizzle.selectors, jQuery.expr[":"] = jQuery.expr.pseudos, 
    jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort, jQuery.text = Sizzle.getText, 
    jQuery.isXMLDoc = Sizzle.isXML, jQuery.contains = Sizzle.contains;
    var dir = function(elem, dir, until) {
        for (var matched = [], truncate = void 0 !== until; (elem = elem[dir]) && 9 !== elem.nodeType; ) if (1 === elem.nodeType) {
            if (truncate && jQuery(elem).is(until)) break;
            matched.push(elem);
        }
        return matched;
    }, siblings = function(n, elem) {
        for (var matched = []; n; n = n.nextSibling) 1 === n.nodeType && n !== elem && matched.push(n);
        return matched;
    }, rneedsContext = jQuery.expr.match.needsContext, rsingleTag = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/, risSimple = /^.[^:#\[\.,]*$/;
    jQuery.filter = function(expr, elems, not) {
        var elem = elems[0];
        return not && (expr = ":not(" + expr + ")"), 1 === elems.length && 1 === elem.nodeType ? jQuery.find.matchesSelector(elem, expr) ? [ elem ] : [] : jQuery.find.matches(expr, jQuery.grep(elems, function(elem) {
            return 1 === elem.nodeType;
        }));
    }, jQuery.fn.extend({
        find: function(selector) {
            var i, len = this.length, ret = [], self = this;
            if ("string" != typeof selector) return this.pushStack(jQuery(selector).filter(function() {
                for (i = 0; len > i; i++) if (jQuery.contains(self[i], this)) return !0;
            }));
            for (i = 0; len > i; i++) jQuery.find(selector, self[i], ret);
            return ret = this.pushStack(len > 1 ? jQuery.unique(ret) : ret), ret.selector = this.selector ? this.selector + " " + selector : selector, 
            ret;
        },
        filter: function(selector) {
            return this.pushStack(winnow(this, selector || [], !1));
        },
        not: function(selector) {
            return this.pushStack(winnow(this, selector || [], !0));
        },
        is: function(selector) {
            return !!winnow(this, "string" == typeof selector && rneedsContext.test(selector) ? jQuery(selector) : selector || [], !1).length;
        }
    });
    var rootjQuery, rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, init = jQuery.fn.init = function(selector, context, root) {
        var match, elem;
        if (!selector) return this;
        if (root = root || rootjQuery, "string" == typeof selector) {
            if (match = "<" === selector[0] && ">" === selector[selector.length - 1] && selector.length >= 3 ? [ null, selector, null ] : rquickExpr.exec(selector), 
            !match || !match[1] && context) return !context || context.jquery ? (context || root).find(selector) : this.constructor(context).find(selector);
            if (match[1]) {
                if (context = context instanceof jQuery ? context[0] : context, jQuery.merge(this, jQuery.parseHTML(match[1], context && context.nodeType ? context.ownerDocument || context : document, !0)), 
                rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) for (match in context) jQuery.isFunction(this[match]) ? this[match](context[match]) : this.attr(match, context[match]);
                return this;
            }
            return elem = document.getElementById(match[2]), elem && elem.parentNode && (this.length = 1, 
            this[0] = elem), this.context = document, this.selector = selector, this;
        }
        return selector.nodeType ? (this.context = this[0] = selector, this.length = 1, 
        this) : jQuery.isFunction(selector) ? void 0 !== root.ready ? root.ready(selector) : selector(jQuery) : (void 0 !== selector.selector && (this.selector = selector.selector, 
        this.context = selector.context), jQuery.makeArray(selector, this));
    };
    init.prototype = jQuery.fn, rootjQuery = jQuery(document);
    var rparentsprev = /^(?:parents|prev(?:Until|All))/, guaranteedUnique = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    jQuery.fn.extend({
        has: function(target) {
            var targets = jQuery(target, this), l = targets.length;
            return this.filter(function() {
                for (var i = 0; l > i; i++) if (jQuery.contains(this, targets[i])) return !0;
            });
        },
        closest: function(selectors, context) {
            for (var cur, i = 0, l = this.length, matched = [], pos = rneedsContext.test(selectors) || "string" != typeof selectors ? jQuery(selectors, context || this.context) : 0; l > i; i++) for (cur = this[i]; cur && cur !== context; cur = cur.parentNode) if (cur.nodeType < 11 && (pos ? pos.index(cur) > -1 : 1 === cur.nodeType && jQuery.find.matchesSelector(cur, selectors))) {
                matched.push(cur);
                break;
            }
            return this.pushStack(matched.length > 1 ? jQuery.uniqueSort(matched) : matched);
        },
        index: function(elem) {
            return elem ? "string" == typeof elem ? indexOf.call(jQuery(elem), this[0]) : indexOf.call(this, elem.jquery ? elem[0] : elem) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        },
        add: function(selector, context) {
            return this.pushStack(jQuery.uniqueSort(jQuery.merge(this.get(), jQuery(selector, context))));
        },
        addBack: function(selector) {
            return this.add(null == selector ? this.prevObject : this.prevObject.filter(selector));
        }
    }), jQuery.each({
        parent: function(elem) {
            var parent = elem.parentNode;
            return parent && 11 !== parent.nodeType ? parent : null;
        },
        parents: function(elem) {
            return dir(elem, "parentNode");
        },
        parentsUntil: function(elem, i, until) {
            return dir(elem, "parentNode", until);
        },
        next: function(elem) {
            return sibling(elem, "nextSibling");
        },
        prev: function(elem) {
            return sibling(elem, "previousSibling");
        },
        nextAll: function(elem) {
            return dir(elem, "nextSibling");
        },
        prevAll: function(elem) {
            return dir(elem, "previousSibling");
        },
        nextUntil: function(elem, i, until) {
            return dir(elem, "nextSibling", until);
        },
        prevUntil: function(elem, i, until) {
            return dir(elem, "previousSibling", until);
        },
        siblings: function(elem) {
            return siblings((elem.parentNode || {}).firstChild, elem);
        },
        children: function(elem) {
            return siblings(elem.firstChild);
        },
        contents: function(elem) {
            return elem.contentDocument || jQuery.merge([], elem.childNodes);
        }
    }, function(name, fn) {
        jQuery.fn[name] = function(until, selector) {
            var matched = jQuery.map(this, fn, until);
            return "Until" !== name.slice(-5) && (selector = until), selector && "string" == typeof selector && (matched = jQuery.filter(selector, matched)), 
            this.length > 1 && (guaranteedUnique[name] || jQuery.uniqueSort(matched), rparentsprev.test(name) && matched.reverse()), 
            this.pushStack(matched);
        };
    });
    var rnotwhite = /\S+/g;
    jQuery.Callbacks = function(options) {
        options = "string" == typeof options ? createOptions(options) : jQuery.extend({}, options);
        var firing, memory, fired, locked, list = [], queue = [], firingIndex = -1, fire = function() {
            for (locked = options.once, fired = firing = !0; queue.length; firingIndex = -1) for (memory = queue.shift(); ++firingIndex < list.length; ) list[firingIndex].apply(memory[0], memory[1]) === !1 && options.stopOnFalse && (firingIndex = list.length, 
            memory = !1);
            options.memory || (memory = !1), firing = !1, locked && (list = memory ? [] : "");
        }, self = {
            add: function() {
                return list && (memory && !firing && (firingIndex = list.length - 1, queue.push(memory)), 
                function add(args) {
                    jQuery.each(args, function(_, arg) {
                        jQuery.isFunction(arg) ? options.unique && self.has(arg) || list.push(arg) : arg && arg.length && "string" !== jQuery.type(arg) && add(arg);
                    });
                }(arguments), memory && !firing && fire()), this;
            },
            remove: function() {
                return jQuery.each(arguments, function(_, arg) {
                    for (var index; (index = jQuery.inArray(arg, list, index)) > -1; ) list.splice(index, 1), 
                    firingIndex >= index && firingIndex--;
                }), this;
            },
            has: function(fn) {
                return fn ? jQuery.inArray(fn, list) > -1 : list.length > 0;
            },
            empty: function() {
                return list && (list = []), this;
            },
            disable: function() {
                return locked = queue = [], list = memory = "", this;
            },
            disabled: function() {
                return !list;
            },
            lock: function() {
                return locked = queue = [], memory || (list = memory = ""), this;
            },
            locked: function() {
                return !!locked;
            },
            fireWith: function(context, args) {
                return locked || (args = args || [], args = [ context, args.slice ? args.slice() : args ], 
                queue.push(args), firing || fire()), this;
            },
            fire: function() {
                return self.fireWith(this, arguments), this;
            },
            fired: function() {
                return !!fired;
            }
        };
        return self;
    }, jQuery.extend({
        Deferred: function(func) {
            var tuples = [ [ "resolve", "done", jQuery.Callbacks("once memory"), "resolved" ], [ "reject", "fail", jQuery.Callbacks("once memory"), "rejected" ], [ "notify", "progress", jQuery.Callbacks("memory") ] ], state = "pending", promise = {
                state: function() {
                    return state;
                },
                always: function() {
                    return deferred.done(arguments).fail(arguments), this;
                },
                then: function() {
                    var fns = arguments;
                    return jQuery.Deferred(function(newDefer) {
                        jQuery.each(tuples, function(i, tuple) {
                            var fn = jQuery.isFunction(fns[i]) && fns[i];
                            deferred[tuple[1]](function() {
                                var returned = fn && fn.apply(this, arguments);
                                returned && jQuery.isFunction(returned.promise) ? returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject) : newDefer[tuple[0] + "With"](this === promise ? newDefer.promise() : this, fn ? [ returned ] : arguments);
                            });
                        }), fns = null;
                    }).promise();
                },
                promise: function(obj) {
                    return null != obj ? jQuery.extend(obj, promise) : promise;
                }
            }, deferred = {};
            return promise.pipe = promise.then, jQuery.each(tuples, function(i, tuple) {
                var list = tuple[2], stateString = tuple[3];
                promise[tuple[1]] = list.add, stateString && list.add(function() {
                    state = stateString;
                }, tuples[1 ^ i][2].disable, tuples[2][2].lock), deferred[tuple[0]] = function() {
                    return deferred[tuple[0] + "With"](this === deferred ? promise : this, arguments), 
                    this;
                }, deferred[tuple[0] + "With"] = list.fireWith;
            }), promise.promise(deferred), func && func.call(deferred, deferred), deferred;
        },
        when: function(subordinate) {
            var progressValues, progressContexts, resolveContexts, i = 0, resolveValues = slice.call(arguments), length = resolveValues.length, remaining = 1 !== length || subordinate && jQuery.isFunction(subordinate.promise) ? length : 0, deferred = 1 === remaining ? subordinate : jQuery.Deferred(), updateFunc = function(i, contexts, values) {
                return function(value) {
                    contexts[i] = this, values[i] = arguments.length > 1 ? slice.call(arguments) : value, 
                    values === progressValues ? deferred.notifyWith(contexts, values) : --remaining || deferred.resolveWith(contexts, values);
                };
            };
            if (length > 1) for (progressValues = new Array(length), progressContexts = new Array(length), 
            resolveContexts = new Array(length); length > i; i++) resolveValues[i] && jQuery.isFunction(resolveValues[i].promise) ? resolveValues[i].promise().progress(updateFunc(i, progressContexts, progressValues)).done(updateFunc(i, resolveContexts, resolveValues)).fail(deferred.reject) : --remaining;
            return remaining || deferred.resolveWith(resolveContexts, resolveValues), deferred.promise();
        }
    });
    var readyList;
    jQuery.fn.ready = function(fn) {
        return jQuery.ready.promise().done(fn), this;
    }, jQuery.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(hold) {
            hold ? jQuery.readyWait++ : jQuery.ready(!0);
        },
        ready: function(wait) {
            (wait === !0 ? --jQuery.readyWait : jQuery.isReady) || (jQuery.isReady = !0, wait !== !0 && --jQuery.readyWait > 0 || (readyList.resolveWith(document, [ jQuery ]), 
            jQuery.fn.triggerHandler && (jQuery(document).triggerHandler("ready"), jQuery(document).off("ready"))));
        }
    }), jQuery.ready.promise = function(obj) {
        return readyList || (readyList = jQuery.Deferred(), "complete" === document.readyState || "loading" !== document.readyState && !document.documentElement.doScroll ? window.setTimeout(jQuery.ready) : (document.addEventListener("DOMContentLoaded", completed), 
        window.addEventListener("load", completed))), readyList.promise(obj);
    }, jQuery.ready.promise();
    var access = function(elems, fn, key, value, chainable, emptyGet, raw) {
        var i = 0, len = elems.length, bulk = null == key;
        if ("object" === jQuery.type(key)) {
            chainable = !0;
            for (i in key) access(elems, fn, i, key[i], !0, emptyGet, raw);
        } else if (void 0 !== value && (chainable = !0, jQuery.isFunction(value) || (raw = !0), 
        bulk && (raw ? (fn.call(elems, value), fn = null) : (bulk = fn, fn = function(elem, key, value) {
            return bulk.call(jQuery(elem), value);
        })), fn)) for (;len > i; i++) fn(elems[i], key, raw ? value : value.call(elems[i], i, fn(elems[i], key)));
        return chainable ? elems : bulk ? fn.call(elems) : len ? fn(elems[0], key) : emptyGet;
    }, acceptData = function(owner) {
        return 1 === owner.nodeType || 9 === owner.nodeType || !+owner.nodeType;
    };
    Data.uid = 1, Data.prototype = {
        register: function(owner, initial) {
            var value = initial || {};
            return owner.nodeType ? owner[this.expando] = value : Object.defineProperty(owner, this.expando, {
                value: value,
                writable: !0,
                configurable: !0
            }), owner[this.expando];
        },
        cache: function(owner) {
            if (!acceptData(owner)) return {};
            var value = owner[this.expando];
            return value || (value = {}, acceptData(owner) && (owner.nodeType ? owner[this.expando] = value : Object.defineProperty(owner, this.expando, {
                value: value,
                configurable: !0
            }))), value;
        },
        set: function(owner, data, value) {
            var prop, cache = this.cache(owner);
            if ("string" == typeof data) cache[data] = value; else for (prop in data) cache[prop] = data[prop];
            return cache;
        },
        get: function(owner, key) {
            return void 0 === key ? this.cache(owner) : owner[this.expando] && owner[this.expando][key];
        },
        access: function(owner, key, value) {
            var stored;
            return void 0 === key || key && "string" == typeof key && void 0 === value ? (stored = this.get(owner, key), 
            void 0 !== stored ? stored : this.get(owner, jQuery.camelCase(key))) : (this.set(owner, key, value), 
            void 0 !== value ? value : key);
        },
        remove: function(owner, key) {
            var i, name, camel, cache = owner[this.expando];
            if (void 0 !== cache) {
                if (void 0 === key) this.register(owner); else {
                    jQuery.isArray(key) ? name = key.concat(key.map(jQuery.camelCase)) : (camel = jQuery.camelCase(key), 
                    key in cache ? name = [ key, camel ] : (name = camel, name = name in cache ? [ name ] : name.match(rnotwhite) || [])), 
                    i = name.length;
                    for (;i--; ) delete cache[name[i]];
                }
                (void 0 === key || jQuery.isEmptyObject(cache)) && (owner.nodeType ? owner[this.expando] = void 0 : delete owner[this.expando]);
            }
        },
        hasData: function(owner) {
            var cache = owner[this.expando];
            return void 0 !== cache && !jQuery.isEmptyObject(cache);
        }
    };
    var dataPriv = new Data(), dataUser = new Data(), rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, rmultiDash = /[A-Z]/g;
    jQuery.extend({
        hasData: function(elem) {
            return dataUser.hasData(elem) || dataPriv.hasData(elem);
        },
        data: function(elem, name, data) {
            return dataUser.access(elem, name, data);
        },
        removeData: function(elem, name) {
            dataUser.remove(elem, name);
        },
        _data: function(elem, name, data) {
            return dataPriv.access(elem, name, data);
        },
        _removeData: function(elem, name) {
            dataPriv.remove(elem, name);
        }
    }), jQuery.fn.extend({
        data: function(key, value) {
            var i, name, data, elem = this[0], attrs = elem && elem.attributes;
            if (void 0 === key) {
                if (this.length && (data = dataUser.get(elem), 1 === elem.nodeType && !dataPriv.get(elem, "hasDataAttrs"))) {
                    for (i = attrs.length; i--; ) attrs[i] && (name = attrs[i].name, 0 === name.indexOf("data-") && (name = jQuery.camelCase(name.slice(5)), 
                    dataAttr(elem, name, data[name])));
                    dataPriv.set(elem, "hasDataAttrs", !0);
                }
                return data;
            }
            return "object" == typeof key ? this.each(function() {
                dataUser.set(this, key);
            }) : access(this, function(value) {
                var data, camelKey;
                if (elem && void 0 === value) {
                    if (data = dataUser.get(elem, key) || dataUser.get(elem, key.replace(rmultiDash, "-$&").toLowerCase()), 
                    void 0 !== data) return data;
                    if (camelKey = jQuery.camelCase(key), data = dataUser.get(elem, camelKey), void 0 !== data) return data;
                    if (data = dataAttr(elem, camelKey, void 0), void 0 !== data) return data;
                } else camelKey = jQuery.camelCase(key), this.each(function() {
                    var data = dataUser.get(this, camelKey);
                    dataUser.set(this, camelKey, value), key.indexOf("-") > -1 && void 0 !== data && dataUser.set(this, key, value);
                });
            }, null, value, arguments.length > 1, null, !0);
        },
        removeData: function(key) {
            return this.each(function() {
                dataUser.remove(this, key);
            });
        }
    }), jQuery.extend({
        queue: function(elem, type, data) {
            var queue;
            return elem ? (type = (type || "fx") + "queue", queue = dataPriv.get(elem, type), 
            data && (!queue || jQuery.isArray(data) ? queue = dataPriv.access(elem, type, jQuery.makeArray(data)) : queue.push(data)), 
            queue || []) : void 0;
        },
        dequeue: function(elem, type) {
            type = type || "fx";
            var queue = jQuery.queue(elem, type), startLength = queue.length, fn = queue.shift(), hooks = jQuery._queueHooks(elem, type), next = function() {
                jQuery.dequeue(elem, type);
            };
            "inprogress" === fn && (fn = queue.shift(), startLength--), fn && ("fx" === type && queue.unshift("inprogress"), 
            delete hooks.stop, fn.call(elem, next, hooks)), !startLength && hooks && hooks.empty.fire();
        },
        _queueHooks: function(elem, type) {
            var key = type + "queueHooks";
            return dataPriv.get(elem, key) || dataPriv.access(elem, key, {
                empty: jQuery.Callbacks("once memory").add(function() {
                    dataPriv.remove(elem, [ type + "queue", key ]);
                })
            });
        }
    }), jQuery.fn.extend({
        queue: function(type, data) {
            var setter = 2;
            return "string" != typeof type && (data = type, type = "fx", setter--), arguments.length < setter ? jQuery.queue(this[0], type) : void 0 === data ? this : this.each(function() {
                var queue = jQuery.queue(this, type, data);
                jQuery._queueHooks(this, type), "fx" === type && "inprogress" !== queue[0] && jQuery.dequeue(this, type);
            });
        },
        dequeue: function(type) {
            return this.each(function() {
                jQuery.dequeue(this, type);
            });
        },
        clearQueue: function(type) {
            return this.queue(type || "fx", []);
        },
        promise: function(type, obj) {
            var tmp, count = 1, defer = jQuery.Deferred(), elements = this, i = this.length, resolve = function() {
                --count || defer.resolveWith(elements, [ elements ]);
            };
            for ("string" != typeof type && (obj = type, type = void 0), type = type || "fx"; i--; ) tmp = dataPriv.get(elements[i], type + "queueHooks"), 
            tmp && tmp.empty && (count++, tmp.empty.add(resolve));
            return resolve(), defer.promise(obj);
        }
    });
    var pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, rcssNum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i"), cssExpand = [ "Top", "Right", "Bottom", "Left" ], isHidden = function(elem, el) {
        return elem = el || elem, "none" === jQuery.css(elem, "display") || !jQuery.contains(elem.ownerDocument, elem);
    }, rcheckableType = /^(?:checkbox|radio)$/i, rtagName = /<([\w:-]+)/, rscriptType = /^$|\/(?:java|ecma)script/i, wrapMap = {
        option: [ 1, "<select multiple='multiple'>", "</select>" ],
        thead: [ 1, "<table>", "</table>" ],
        col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
        tr: [ 2, "<table><tbody>", "</tbody></table>" ],
        td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
        _default: [ 0, "", "" ]
    };
    wrapMap.optgroup = wrapMap.option, wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead, 
    wrapMap.th = wrapMap.td;
    var rhtml = /<|&#?\w+;/;
    !function() {
        var fragment = document.createDocumentFragment(), div = fragment.appendChild(document.createElement("div")), input = document.createElement("input");
        input.setAttribute("type", "radio"), input.setAttribute("checked", "checked"), input.setAttribute("name", "t"), 
        div.appendChild(input), support.checkClone = div.cloneNode(!0).cloneNode(!0).lastChild.checked, 
        div.innerHTML = "<textarea>x</textarea>", support.noCloneChecked = !!div.cloneNode(!0).lastChild.defaultValue;
    }();
    var rkeyEvent = /^key/, rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, rtypenamespace = /^([^.]*)(?:\.(.+)|)/;
    jQuery.event = {
        global: {},
        add: function(elem, types, handler, data, selector) {
            var handleObjIn, eventHandle, tmp, events, t, handleObj, special, handlers, type, namespaces, origType, elemData = dataPriv.get(elem);
            if (elemData) for (handler.handler && (handleObjIn = handler, handler = handleObjIn.handler, 
            selector = handleObjIn.selector), handler.guid || (handler.guid = jQuery.guid++), 
            (events = elemData.events) || (events = elemData.events = {}), (eventHandle = elemData.handle) || (eventHandle = elemData.handle = function(e) {
                return "undefined" != typeof jQuery && jQuery.event.triggered !== e.type ? jQuery.event.dispatch.apply(elem, arguments) : void 0;
            }), types = (types || "").match(rnotwhite) || [ "" ], t = types.length; t--; ) tmp = rtypenamespace.exec(types[t]) || [], 
            type = origType = tmp[1], namespaces = (tmp[2] || "").split(".").sort(), type && (special = jQuery.event.special[type] || {}, 
            type = (selector ? special.delegateType : special.bindType) || type, special = jQuery.event.special[type] || {}, 
            handleObj = jQuery.extend({
                type: type,
                origType: origType,
                data: data,
                handler: handler,
                guid: handler.guid,
                selector: selector,
                needsContext: selector && jQuery.expr.match.needsContext.test(selector),
                namespace: namespaces.join(".")
            }, handleObjIn), (handlers = events[type]) || (handlers = events[type] = [], handlers.delegateCount = 0, 
            special.setup && special.setup.call(elem, data, namespaces, eventHandle) !== !1 || elem.addEventListener && elem.addEventListener(type, eventHandle)), 
            special.add && (special.add.call(elem, handleObj), handleObj.handler.guid || (handleObj.handler.guid = handler.guid)), 
            selector ? handlers.splice(handlers.delegateCount++, 0, handleObj) : handlers.push(handleObj), 
            jQuery.event.global[type] = !0);
        },
        remove: function(elem, types, handler, selector, mappedTypes) {
            var j, origCount, tmp, events, t, handleObj, special, handlers, type, namespaces, origType, elemData = dataPriv.hasData(elem) && dataPriv.get(elem);
            if (elemData && (events = elemData.events)) {
                for (types = (types || "").match(rnotwhite) || [ "" ], t = types.length; t--; ) if (tmp = rtypenamespace.exec(types[t]) || [], 
                type = origType = tmp[1], namespaces = (tmp[2] || "").split(".").sort(), type) {
                    for (special = jQuery.event.special[type] || {}, type = (selector ? special.delegateType : special.bindType) || type, 
                    handlers = events[type] || [], tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)"), 
                    origCount = j = handlers.length; j--; ) handleObj = handlers[j], !mappedTypes && origType !== handleObj.origType || handler && handler.guid !== handleObj.guid || tmp && !tmp.test(handleObj.namespace) || selector && selector !== handleObj.selector && ("**" !== selector || !handleObj.selector) || (handlers.splice(j, 1), 
                    handleObj.selector && handlers.delegateCount--, special.remove && special.remove.call(elem, handleObj));
                    origCount && !handlers.length && (special.teardown && special.teardown.call(elem, namespaces, elemData.handle) !== !1 || jQuery.removeEvent(elem, type, elemData.handle), 
                    delete events[type]);
                } else for (type in events) jQuery.event.remove(elem, type + types[t], handler, selector, !0);
                jQuery.isEmptyObject(events) && dataPriv.remove(elem, "handle events");
            }
        },
        dispatch: function(event) {
            event = jQuery.event.fix(event);
            var i, j, ret, matched, handleObj, handlerQueue = [], args = slice.call(arguments), handlers = (dataPriv.get(this, "events") || {})[event.type] || [], special = jQuery.event.special[event.type] || {};
            if (args[0] = event, event.delegateTarget = this, !special.preDispatch || special.preDispatch.call(this, event) !== !1) {
                for (handlerQueue = jQuery.event.handlers.call(this, event, handlers), i = 0; (matched = handlerQueue[i++]) && !event.isPropagationStopped(); ) for (event.currentTarget = matched.elem, 
                j = 0; (handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped(); ) (!event.rnamespace || event.rnamespace.test(handleObj.namespace)) && (event.handleObj = handleObj, 
                event.data = handleObj.data, ret = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args), 
                void 0 !== ret && (event.result = ret) === !1 && (event.preventDefault(), event.stopPropagation()));
                return special.postDispatch && special.postDispatch.call(this, event), event.result;
            }
        },
        handlers: function(event, handlers) {
            var i, matches, sel, handleObj, handlerQueue = [], delegateCount = handlers.delegateCount, cur = event.target;
            if (delegateCount && cur.nodeType && ("click" !== event.type || isNaN(event.button) || event.button < 1)) for (;cur !== this; cur = cur.parentNode || this) if (1 === cur.nodeType && (cur.disabled !== !0 || "click" !== event.type)) {
                for (matches = [], i = 0; delegateCount > i; i++) handleObj = handlers[i], sel = handleObj.selector + " ", 
                void 0 === matches[sel] && (matches[sel] = handleObj.needsContext ? jQuery(sel, this).index(cur) > -1 : jQuery.find(sel, this, null, [ cur ]).length), 
                matches[sel] && matches.push(handleObj);
                matches.length && handlerQueue.push({
                    elem: cur,
                    handlers: matches
                });
            }
            return delegateCount < handlers.length && handlerQueue.push({
                elem: this,
                handlers: handlers.slice(delegateCount)
            }), handlerQueue;
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(event, original) {
                return null == event.which && (event.which = null != original.charCode ? original.charCode : original.keyCode), 
                event;
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(event, original) {
                var eventDoc, doc, body, button = original.button;
                return null == event.pageX && null != original.clientX && (eventDoc = event.target.ownerDocument || document, 
                doc = eventDoc.documentElement, body = eventDoc.body, event.pageX = original.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0), 
                event.pageY = original.clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc && doc.clientTop || body && body.clientTop || 0)), 
                event.which || void 0 === button || (event.which = 1 & button ? 1 : 2 & button ? 3 : 4 & button ? 2 : 0), 
                event;
            }
        },
        fix: function(event) {
            if (event[jQuery.expando]) return event;
            var i, prop, copy, type = event.type, originalEvent = event, fixHook = this.fixHooks[type];
            for (fixHook || (this.fixHooks[type] = fixHook = rmouseEvent.test(type) ? this.mouseHooks : rkeyEvent.test(type) ? this.keyHooks : {}), 
            copy = fixHook.props ? this.props.concat(fixHook.props) : this.props, event = new jQuery.Event(originalEvent), 
            i = copy.length; i--; ) prop = copy[i], event[prop] = originalEvent[prop];
            return event.target || (event.target = document), 3 === event.target.nodeType && (event.target = event.target.parentNode), 
            fixHook.filter ? fixHook.filter(event, originalEvent) : event;
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== safeActiveElement() && this.focus ? (this.focus(), !1) : void 0;
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === safeActiveElement() && this.blur ? (this.blur(), !1) : void 0;
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && jQuery.nodeName(this, "input") ? (this.click(), 
                    !1) : void 0;
                },
                _default: function(event) {
                    return jQuery.nodeName(event.target, "a");
                }
            },
            beforeunload: {
                postDispatch: function(event) {
                    void 0 !== event.result && event.originalEvent && (event.originalEvent.returnValue = event.result);
                }
            }
        }
    }, jQuery.removeEvent = function(elem, type, handle) {
        elem.removeEventListener && elem.removeEventListener(type, handle);
    }, jQuery.Event = function(src, props) {
        return this instanceof jQuery.Event ? (src && src.type ? (this.originalEvent = src, 
        this.type = src.type, this.isDefaultPrevented = src.defaultPrevented || void 0 === src.defaultPrevented && src.returnValue === !1 ? returnTrue : returnFalse) : this.type = src, 
        props && jQuery.extend(this, props), this.timeStamp = src && src.timeStamp || jQuery.now(), 
        void (this[jQuery.expando] = !0)) : new jQuery.Event(src, props);
    }, jQuery.Event.prototype = {
        constructor: jQuery.Event,
        isDefaultPrevented: returnFalse,
        isPropagationStopped: returnFalse,
        isImmediatePropagationStopped: returnFalse,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = returnTrue, e && e.preventDefault();
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = returnTrue, e && e.stopPropagation();
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = returnTrue, e && e.stopImmediatePropagation(), 
            this.stopPropagation();
        }
    }, jQuery.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(orig, fix) {
        jQuery.event.special[orig] = {
            delegateType: fix,
            bindType: fix,
            handle: function(event) {
                var ret, target = this, related = event.relatedTarget, handleObj = event.handleObj;
                return (!related || related !== target && !jQuery.contains(target, related)) && (event.type = handleObj.origType, 
                ret = handleObj.handler.apply(this, arguments), event.type = fix), ret;
            }
        };
    }), jQuery.fn.extend({
        on: function(types, selector, data, fn) {
            return on(this, types, selector, data, fn);
        },
        one: function(types, selector, data, fn) {
            return on(this, types, selector, data, fn, 1);
        },
        off: function(types, selector, fn) {
            var handleObj, type;
            if (types && types.preventDefault && types.handleObj) return handleObj = types.handleObj, 
            jQuery(types.delegateTarget).off(handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType, handleObj.selector, handleObj.handler), 
            this;
            if ("object" == typeof types) {
                for (type in types) this.off(type, selector, types[type]);
                return this;
            }
            return (selector === !1 || "function" == typeof selector) && (fn = selector, selector = void 0), 
            fn === !1 && (fn = returnFalse), this.each(function() {
                jQuery.event.remove(this, types, fn, selector);
            });
        }
    });
    var rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi, rnoInnerhtml = /<script|<style|<link/i, rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i, rscriptTypeMasked = /^true\/(.*)/, rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    jQuery.extend({
        htmlPrefilter: function(html) {
            return html.replace(rxhtmlTag, "<$1></$2>");
        },
        clone: function(elem, dataAndEvents, deepDataAndEvents) {
            var i, l, srcElements, destElements, clone = elem.cloneNode(!0), inPage = jQuery.contains(elem.ownerDocument, elem);
            if (!(support.noCloneChecked || 1 !== elem.nodeType && 11 !== elem.nodeType || jQuery.isXMLDoc(elem))) for (destElements = getAll(clone), 
            srcElements = getAll(elem), i = 0, l = srcElements.length; l > i; i++) fixInput(srcElements[i], destElements[i]);
            if (dataAndEvents) if (deepDataAndEvents) for (srcElements = srcElements || getAll(elem), 
            destElements = destElements || getAll(clone), i = 0, l = srcElements.length; l > i; i++) cloneCopyEvent(srcElements[i], destElements[i]); else cloneCopyEvent(elem, clone);
            return destElements = getAll(clone, "script"), destElements.length > 0 && setGlobalEval(destElements, !inPage && getAll(elem, "script")), 
            clone;
        },
        cleanData: function(elems) {
            for (var data, elem, type, special = jQuery.event.special, i = 0; void 0 !== (elem = elems[i]); i++) if (acceptData(elem)) {
                if (data = elem[dataPriv.expando]) {
                    if (data.events) for (type in data.events) special[type] ? jQuery.event.remove(elem, type) : jQuery.removeEvent(elem, type, data.handle);
                    elem[dataPriv.expando] = void 0;
                }
                elem[dataUser.expando] && (elem[dataUser.expando] = void 0);
            }
        }
    }), jQuery.fn.extend({
        domManip: domManip,
        detach: function(selector) {
            return remove(this, selector, !0);
        },
        remove: function(selector) {
            return remove(this, selector);
        },
        text: function(value) {
            return access(this, function(value) {
                return void 0 === value ? jQuery.text(this) : this.empty().each(function() {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = value);
                });
            }, null, value, arguments.length);
        },
        append: function() {
            return domManip(this, arguments, function(elem) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var target = manipulationTarget(this, elem);
                    target.appendChild(elem);
                }
            });
        },
        prepend: function() {
            return domManip(this, arguments, function(elem) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var target = manipulationTarget(this, elem);
                    target.insertBefore(elem, target.firstChild);
                }
            });
        },
        before: function() {
            return domManip(this, arguments, function(elem) {
                this.parentNode && this.parentNode.insertBefore(elem, this);
            });
        },
        after: function() {
            return domManip(this, arguments, function(elem) {
                this.parentNode && this.parentNode.insertBefore(elem, this.nextSibling);
            });
        },
        empty: function() {
            for (var elem, i = 0; null != (elem = this[i]); i++) 1 === elem.nodeType && (jQuery.cleanData(getAll(elem, !1)), 
            elem.textContent = "");
            return this;
        },
        clone: function(dataAndEvents, deepDataAndEvents) {
            return dataAndEvents = null == dataAndEvents ? !1 : dataAndEvents, deepDataAndEvents = null == deepDataAndEvents ? dataAndEvents : deepDataAndEvents, 
            this.map(function() {
                return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
            });
        },
        html: function(value) {
            return access(this, function(value) {
                var elem = this[0] || {}, i = 0, l = this.length;
                if (void 0 === value && 1 === elem.nodeType) return elem.innerHTML;
                if ("string" == typeof value && !rnoInnerhtml.test(value) && !wrapMap[(rtagName.exec(value) || [ "", "" ])[1].toLowerCase()]) {
                    value = jQuery.htmlPrefilter(value);
                    try {
                        for (;l > i; i++) elem = this[i] || {}, 1 === elem.nodeType && (jQuery.cleanData(getAll(elem, !1)), 
                        elem.innerHTML = value);
                        elem = 0;
                    } catch (e) {}
                }
                elem && this.empty().append(value);
            }, null, value, arguments.length);
        },
        replaceWith: function() {
            var ignored = [];
            return domManip(this, arguments, function(elem) {
                var parent = this.parentNode;
                jQuery.inArray(this, ignored) < 0 && (jQuery.cleanData(getAll(this)), parent && parent.replaceChild(elem, this));
            }, ignored);
        }
    }), jQuery.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(name, original) {
        jQuery.fn[name] = function(selector) {
            for (var elems, ret = [], insert = jQuery(selector), last = insert.length - 1, i = 0; last >= i; i++) elems = i === last ? this : this.clone(!0), 
            jQuery(insert[i])[original](elems), push.apply(ret, elems.get());
            return this.pushStack(ret);
        };
    });
    var iframe, elemdisplay = {
        HTML: "block",
        BODY: "block"
    }, rmargin = /^margin/, rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i"), getStyles = function(elem) {
        var view = elem.ownerDocument.defaultView;
        return view && view.opener || (view = window), view.getComputedStyle(elem);
    }, swap = function(elem, options, callback, args) {
        var ret, name, old = {};
        for (name in options) old[name] = elem.style[name], elem.style[name] = options[name];
        ret = callback.apply(elem, args || []);
        for (name in options) elem.style[name] = old[name];
        return ret;
    }, documentElement = document.documentElement;
    !function() {
        function computeStyleTests() {
            div.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", 
            div.innerHTML = "", documentElement.appendChild(container);
            var divStyle = window.getComputedStyle(div);
            pixelPositionVal = "1%" !== divStyle.top, reliableMarginLeftVal = "2px" === divStyle.marginLeft, 
            boxSizingReliableVal = "4px" === divStyle.width, div.style.marginRight = "50%", 
            pixelMarginRightVal = "4px" === divStyle.marginRight, documentElement.removeChild(container);
        }
        var pixelPositionVal, boxSizingReliableVal, pixelMarginRightVal, reliableMarginLeftVal, container = document.createElement("div"), div = document.createElement("div");
        div.style && (div.style.backgroundClip = "content-box", div.cloneNode(!0).style.backgroundClip = "", 
        support.clearCloneStyle = "content-box" === div.style.backgroundClip, container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", 
        container.appendChild(div), jQuery.extend(support, {
            pixelPosition: function() {
                return computeStyleTests(), pixelPositionVal;
            },
            boxSizingReliable: function() {
                return null == boxSizingReliableVal && computeStyleTests(), boxSizingReliableVal;
            },
            pixelMarginRight: function() {
                return null == boxSizingReliableVal && computeStyleTests(), pixelMarginRightVal;
            },
            reliableMarginLeft: function() {
                return null == boxSizingReliableVal && computeStyleTests(), reliableMarginLeftVal;
            },
            reliableMarginRight: function() {
                var ret, marginDiv = div.appendChild(document.createElement("div"));
                return marginDiv.style.cssText = div.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", 
                marginDiv.style.marginRight = marginDiv.style.width = "0", div.style.width = "1px", 
                documentElement.appendChild(container), ret = !parseFloat(window.getComputedStyle(marginDiv).marginRight), 
                documentElement.removeChild(container), div.removeChild(marginDiv), ret;
            }
        }));
    }();
    var rdisplayswap = /^(none|table(?!-c[ea]).+)/, cssShow = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, cssNormalTransform = {
        letterSpacing: "0",
        fontWeight: "400"
    }, cssPrefixes = [ "Webkit", "O", "Moz", "ms" ], emptyStyle = document.createElement("div").style;
    jQuery.extend({
        cssHooks: {
            opacity: {
                get: function(elem, computed) {
                    if (computed) {
                        var ret = curCSS(elem, "opacity");
                        return "" === ret ? "1" : ret;
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(elem, name, value, extra) {
            if (elem && 3 !== elem.nodeType && 8 !== elem.nodeType && elem.style) {
                var ret, type, hooks, origName = jQuery.camelCase(name), style = elem.style;
                return name = jQuery.cssProps[origName] || (jQuery.cssProps[origName] = vendorPropName(origName) || origName), 
                hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName], void 0 === value ? hooks && "get" in hooks && void 0 !== (ret = hooks.get(elem, !1, extra)) ? ret : style[name] : (type = typeof value, 
                "string" === type && (ret = rcssNum.exec(value)) && ret[1] && (value = adjustCSS(elem, name, ret), 
                type = "number"), null != value && value === value && ("number" === type && (value += ret && ret[3] || (jQuery.cssNumber[origName] ? "" : "px")), 
                support.clearCloneStyle || "" !== value || 0 !== name.indexOf("background") || (style[name] = "inherit"), 
                hooks && "set" in hooks && void 0 === (value = hooks.set(elem, value, extra)) || (style[name] = value)), 
                void 0);
            }
        },
        css: function(elem, name, extra, styles) {
            var val, num, hooks, origName = jQuery.camelCase(name);
            return name = jQuery.cssProps[origName] || (jQuery.cssProps[origName] = vendorPropName(origName) || origName), 
            hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName], hooks && "get" in hooks && (val = hooks.get(elem, !0, extra)), 
            void 0 === val && (val = curCSS(elem, name, styles)), "normal" === val && name in cssNormalTransform && (val = cssNormalTransform[name]), 
            "" === extra || extra ? (num = parseFloat(val), extra === !0 || isFinite(num) ? num || 0 : val) : val;
        }
    }), jQuery.each([ "height", "width" ], function(i, name) {
        jQuery.cssHooks[name] = {
            get: function(elem, computed, extra) {
                return computed ? rdisplayswap.test(jQuery.css(elem, "display")) && 0 === elem.offsetWidth ? swap(elem, cssShow, function() {
                    return getWidthOrHeight(elem, name, extra);
                }) : getWidthOrHeight(elem, name, extra) : void 0;
            },
            set: function(elem, value, extra) {
                var matches, styles = extra && getStyles(elem), subtract = extra && augmentWidthOrHeight(elem, name, extra, "border-box" === jQuery.css(elem, "boxSizing", !1, styles), styles);
                return subtract && (matches = rcssNum.exec(value)) && "px" !== (matches[3] || "px") && (elem.style[name] = value, 
                value = jQuery.css(elem, name)), setPositiveNumber(elem, value, subtract);
            }
        };
    }), jQuery.cssHooks.marginLeft = addGetHookIf(support.reliableMarginLeft, function(elem, computed) {
        return computed ? (parseFloat(curCSS(elem, "marginLeft")) || elem.getBoundingClientRect().left - swap(elem, {
            marginLeft: 0
        }, function() {
            return elem.getBoundingClientRect().left;
        })) + "px" : void 0;
    }), jQuery.cssHooks.marginRight = addGetHookIf(support.reliableMarginRight, function(elem, computed) {
        return computed ? swap(elem, {
            display: "inline-block"
        }, curCSS, [ elem, "marginRight" ]) : void 0;
    }), jQuery.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(prefix, suffix) {
        jQuery.cssHooks[prefix + suffix] = {
            expand: function(value) {
                for (var i = 0, expanded = {}, parts = "string" == typeof value ? value.split(" ") : [ value ]; 4 > i; i++) expanded[prefix + cssExpand[i] + suffix] = parts[i] || parts[i - 2] || parts[0];
                return expanded;
            }
        }, rmargin.test(prefix) || (jQuery.cssHooks[prefix + suffix].set = setPositiveNumber);
    }), jQuery.fn.extend({
        css: function(name, value) {
            return access(this, function(elem, name, value) {
                var styles, len, map = {}, i = 0;
                if (jQuery.isArray(name)) {
                    for (styles = getStyles(elem), len = name.length; len > i; i++) map[name[i]] = jQuery.css(elem, name[i], !1, styles);
                    return map;
                }
                return void 0 !== value ? jQuery.style(elem, name, value) : jQuery.css(elem, name);
            }, name, value, arguments.length > 1);
        },
        show: function() {
            return showHide(this, !0);
        },
        hide: function() {
            return showHide(this);
        },
        toggle: function(state) {
            return "boolean" == typeof state ? state ? this.show() : this.hide() : this.each(function() {
                isHidden(this) ? jQuery(this).show() : jQuery(this).hide();
            });
        }
    }), jQuery.Tween = Tween, Tween.prototype = {
        constructor: Tween,
        init: function(elem, options, prop, end, easing, unit) {
            this.elem = elem, this.prop = prop, this.easing = easing || jQuery.easing._default, 
            this.options = options, this.start = this.now = this.cur(), this.end = end, this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px");
        },
        cur: function() {
            var hooks = Tween.propHooks[this.prop];
            return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this);
        },
        run: function(percent) {
            var eased, hooks = Tween.propHooks[this.prop];
            return this.options.duration ? this.pos = eased = jQuery.easing[this.easing](percent, this.options.duration * percent, 0, 1, this.options.duration) : this.pos = eased = percent, 
            this.now = (this.end - this.start) * eased + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), 
            hooks && hooks.set ? hooks.set(this) : Tween.propHooks._default.set(this), this;
        }
    }, Tween.prototype.init.prototype = Tween.prototype, Tween.propHooks = {
        _default: {
            get: function(tween) {
                var result;
                return 1 !== tween.elem.nodeType || null != tween.elem[tween.prop] && null == tween.elem.style[tween.prop] ? tween.elem[tween.prop] : (result = jQuery.css(tween.elem, tween.prop, ""), 
                result && "auto" !== result ? result : 0);
            },
            set: function(tween) {
                jQuery.fx.step[tween.prop] ? jQuery.fx.step[tween.prop](tween) : 1 !== tween.elem.nodeType || null == tween.elem.style[jQuery.cssProps[tween.prop]] && !jQuery.cssHooks[tween.prop] ? tween.elem[tween.prop] = tween.now : jQuery.style(tween.elem, tween.prop, tween.now + tween.unit);
            }
        }
    }, Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
        set: function(tween) {
            tween.elem.nodeType && tween.elem.parentNode && (tween.elem[tween.prop] = tween.now);
        }
    }, jQuery.easing = {
        linear: function(p) {
            return p;
        },
        swing: function(p) {
            return .5 - Math.cos(p * Math.PI) / 2;
        },
        _default: "swing"
    }, jQuery.fx = Tween.prototype.init, jQuery.fx.step = {};
    var fxNow, timerId, rfxtypes = /^(?:toggle|show|hide)$/, rrun = /queueHooks$/;
    jQuery.Animation = jQuery.extend(Animation, {
        tweeners: {
            "*": [ function(prop, value) {
                var tween = this.createTween(prop, value);
                return adjustCSS(tween.elem, prop, rcssNum.exec(value), tween), tween;
            } ]
        },
        tweener: function(props, callback) {
            jQuery.isFunction(props) ? (callback = props, props = [ "*" ]) : props = props.match(rnotwhite);
            for (var prop, index = 0, length = props.length; length > index; index++) prop = props[index], 
            Animation.tweeners[prop] = Animation.tweeners[prop] || [], Animation.tweeners[prop].unshift(callback);
        },
        prefilters: [ defaultPrefilter ],
        prefilter: function(callback, prepend) {
            prepend ? Animation.prefilters.unshift(callback) : Animation.prefilters.push(callback);
        }
    }), jQuery.speed = function(speed, easing, fn) {
        var opt = speed && "object" == typeof speed ? jQuery.extend({}, speed) : {
            complete: fn || !fn && easing || jQuery.isFunction(speed) && speed,
            duration: speed,
            easing: fn && easing || easing && !jQuery.isFunction(easing) && easing
        };
        return opt.duration = jQuery.fx.off ? 0 : "number" == typeof opt.duration ? opt.duration : opt.duration in jQuery.fx.speeds ? jQuery.fx.speeds[opt.duration] : jQuery.fx.speeds._default, 
        (null == opt.queue || opt.queue === !0) && (opt.queue = "fx"), opt.old = opt.complete, 
        opt.complete = function() {
            jQuery.isFunction(opt.old) && opt.old.call(this), opt.queue && jQuery.dequeue(this, opt.queue);
        }, opt;
    }, jQuery.fn.extend({
        fadeTo: function(speed, to, easing, callback) {
            return this.filter(isHidden).css("opacity", 0).show().end().animate({
                opacity: to
            }, speed, easing, callback);
        },
        animate: function(prop, speed, easing, callback) {
            var empty = jQuery.isEmptyObject(prop), optall = jQuery.speed(speed, easing, callback), doAnimation = function() {
                var anim = Animation(this, jQuery.extend({}, prop), optall);
                (empty || dataPriv.get(this, "finish")) && anim.stop(!0);
            };
            return doAnimation.finish = doAnimation, empty || optall.queue === !1 ? this.each(doAnimation) : this.queue(optall.queue, doAnimation);
        },
        stop: function(type, clearQueue, gotoEnd) {
            var stopQueue = function(hooks) {
                var stop = hooks.stop;
                delete hooks.stop, stop(gotoEnd);
            };
            return "string" != typeof type && (gotoEnd = clearQueue, clearQueue = type, type = void 0), 
            clearQueue && type !== !1 && this.queue(type || "fx", []), this.each(function() {
                var dequeue = !0, index = null != type && type + "queueHooks", timers = jQuery.timers, data = dataPriv.get(this);
                if (index) data[index] && data[index].stop && stopQueue(data[index]); else for (index in data) data[index] && data[index].stop && rrun.test(index) && stopQueue(data[index]);
                for (index = timers.length; index--; ) timers[index].elem !== this || null != type && timers[index].queue !== type || (timers[index].anim.stop(gotoEnd), 
                dequeue = !1, timers.splice(index, 1));
                (dequeue || !gotoEnd) && jQuery.dequeue(this, type);
            });
        },
        finish: function(type) {
            return type !== !1 && (type = type || "fx"), this.each(function() {
                var index, data = dataPriv.get(this), queue = data[type + "queue"], hooks = data[type + "queueHooks"], timers = jQuery.timers, length = queue ? queue.length : 0;
                for (data.finish = !0, jQuery.queue(this, type, []), hooks && hooks.stop && hooks.stop.call(this, !0), 
                index = timers.length; index--; ) timers[index].elem === this && timers[index].queue === type && (timers[index].anim.stop(!0), 
                timers.splice(index, 1));
                for (index = 0; length > index; index++) queue[index] && queue[index].finish && queue[index].finish.call(this);
                delete data.finish;
            });
        }
    }), jQuery.each([ "toggle", "show", "hide" ], function(i, name) {
        var cssFn = jQuery.fn[name];
        jQuery.fn[name] = function(speed, easing, callback) {
            return null == speed || "boolean" == typeof speed ? cssFn.apply(this, arguments) : this.animate(genFx(name, !0), speed, easing, callback);
        };
    }), jQuery.each({
        slideDown: genFx("show"),
        slideUp: genFx("hide"),
        slideToggle: genFx("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(name, props) {
        jQuery.fn[name] = function(speed, easing, callback) {
            return this.animate(props, speed, easing, callback);
        };
    }), jQuery.timers = [], jQuery.fx.tick = function() {
        var timer, i = 0, timers = jQuery.timers;
        for (fxNow = jQuery.now(); i < timers.length; i++) timer = timers[i], timer() || timers[i] !== timer || timers.splice(i--, 1);
        timers.length || jQuery.fx.stop(), fxNow = void 0;
    }, jQuery.fx.timer = function(timer) {
        jQuery.timers.push(timer), timer() ? jQuery.fx.start() : jQuery.timers.pop();
    }, jQuery.fx.interval = 13, jQuery.fx.start = function() {
        timerId || (timerId = window.setInterval(jQuery.fx.tick, jQuery.fx.interval));
    }, jQuery.fx.stop = function() {
        window.clearInterval(timerId), timerId = null;
    }, jQuery.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, jQuery.fn.delay = function(time, type) {
        return time = jQuery.fx ? jQuery.fx.speeds[time] || time : time, type = type || "fx", 
        this.queue(type, function(next, hooks) {
            var timeout = window.setTimeout(next, time);
            hooks.stop = function() {
                window.clearTimeout(timeout);
            };
        });
    }, function() {
        var input = document.createElement("input"), select = document.createElement("select"), opt = select.appendChild(document.createElement("option"));
        input.type = "checkbox", support.checkOn = "" !== input.value, support.optSelected = opt.selected, 
        select.disabled = !0, support.optDisabled = !opt.disabled, input = document.createElement("input"), 
        input.value = "t", input.type = "radio", support.radioValue = "t" === input.value;
    }();
    var boolHook, attrHandle = jQuery.expr.attrHandle;
    jQuery.fn.extend({
        attr: function(name, value) {
            return access(this, jQuery.attr, name, value, arguments.length > 1);
        },
        removeAttr: function(name) {
            return this.each(function() {
                jQuery.removeAttr(this, name);
            });
        }
    }), jQuery.extend({
        attr: function(elem, name, value) {
            var ret, hooks, nType = elem.nodeType;
            if (3 !== nType && 8 !== nType && 2 !== nType) return "undefined" == typeof elem.getAttribute ? jQuery.prop(elem, name, value) : (1 === nType && jQuery.isXMLDoc(elem) || (name = name.toLowerCase(), 
            hooks = jQuery.attrHooks[name] || (jQuery.expr.match.bool.test(name) ? boolHook : void 0)), 
            void 0 !== value ? null === value ? void jQuery.removeAttr(elem, name) : hooks && "set" in hooks && void 0 !== (ret = hooks.set(elem, value, name)) ? ret : (elem.setAttribute(name, value + ""), 
            value) : hooks && "get" in hooks && null !== (ret = hooks.get(elem, name)) ? ret : (ret = jQuery.find.attr(elem, name), 
            null == ret ? void 0 : ret));
        },
        attrHooks: {
            type: {
                set: function(elem, value) {
                    if (!support.radioValue && "radio" === value && jQuery.nodeName(elem, "input")) {
                        var val = elem.value;
                        return elem.setAttribute("type", value), val && (elem.value = val), value;
                    }
                }
            }
        },
        removeAttr: function(elem, value) {
            var name, propName, i = 0, attrNames = value && value.match(rnotwhite);
            if (attrNames && 1 === elem.nodeType) for (;name = attrNames[i++]; ) propName = jQuery.propFix[name] || name, 
            jQuery.expr.match.bool.test(name) && (elem[propName] = !1), elem.removeAttribute(name);
        }
    }), boolHook = {
        set: function(elem, value, name) {
            return value === !1 ? jQuery.removeAttr(elem, name) : elem.setAttribute(name, name), 
            name;
        }
    }, jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function(i, name) {
        var getter = attrHandle[name] || jQuery.find.attr;
        attrHandle[name] = function(elem, name, isXML) {
            var ret, handle;
            return isXML || (handle = attrHandle[name], attrHandle[name] = ret, ret = null != getter(elem, name, isXML) ? name.toLowerCase() : null, 
            attrHandle[name] = handle), ret;
        };
    });
    var rfocusable = /^(?:input|select|textarea|button)$/i, rclickable = /^(?:a|area)$/i;
    jQuery.fn.extend({
        prop: function(name, value) {
            return access(this, jQuery.prop, name, value, arguments.length > 1);
        },
        removeProp: function(name) {
            return this.each(function() {
                delete this[jQuery.propFix[name] || name];
            });
        }
    }), jQuery.extend({
        prop: function(elem, name, value) {
            var ret, hooks, nType = elem.nodeType;
            if (3 !== nType && 8 !== nType && 2 !== nType) return 1 === nType && jQuery.isXMLDoc(elem) || (name = jQuery.propFix[name] || name, 
            hooks = jQuery.propHooks[name]), void 0 !== value ? hooks && "set" in hooks && void 0 !== (ret = hooks.set(elem, value, name)) ? ret : elem[name] = value : hooks && "get" in hooks && null !== (ret = hooks.get(elem, name)) ? ret : elem[name];
        },
        propHooks: {
            tabIndex: {
                get: function(elem) {
                    var tabindex = jQuery.find.attr(elem, "tabindex");
                    return tabindex ? parseInt(tabindex, 10) : rfocusable.test(elem.nodeName) || rclickable.test(elem.nodeName) && elem.href ? 0 : -1;
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }), support.optSelected || (jQuery.propHooks.selected = {
        get: function(elem) {
            var parent = elem.parentNode;
            return parent && parent.parentNode && parent.parentNode.selectedIndex, null;
        },
        set: function(elem) {
            var parent = elem.parentNode;
            parent && (parent.selectedIndex, parent.parentNode && parent.parentNode.selectedIndex);
        }
    }), jQuery.each([ "tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable" ], function() {
        jQuery.propFix[this.toLowerCase()] = this;
    });
    var rclass = /[\t\r\n\f]/g;
    jQuery.fn.extend({
        addClass: function(value) {
            var classes, elem, cur, curValue, clazz, j, finalValue, i = 0;
            if (jQuery.isFunction(value)) return this.each(function(j) {
                jQuery(this).addClass(value.call(this, j, getClass(this)));
            });
            if ("string" == typeof value && value) for (classes = value.match(rnotwhite) || []; elem = this[i++]; ) if (curValue = getClass(elem), 
            cur = 1 === elem.nodeType && (" " + curValue + " ").replace(rclass, " ")) {
                for (j = 0; clazz = classes[j++]; ) cur.indexOf(" " + clazz + " ") < 0 && (cur += clazz + " ");
                finalValue = jQuery.trim(cur), curValue !== finalValue && elem.setAttribute("class", finalValue);
            }
            return this;
        },
        removeClass: function(value) {
            var classes, elem, cur, curValue, clazz, j, finalValue, i = 0;
            if (jQuery.isFunction(value)) return this.each(function(j) {
                jQuery(this).removeClass(value.call(this, j, getClass(this)));
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof value && value) for (classes = value.match(rnotwhite) || []; elem = this[i++]; ) if (curValue = getClass(elem), 
            cur = 1 === elem.nodeType && (" " + curValue + " ").replace(rclass, " ")) {
                for (j = 0; clazz = classes[j++]; ) for (;cur.indexOf(" " + clazz + " ") > -1; ) cur = cur.replace(" " + clazz + " ", " ");
                finalValue = jQuery.trim(cur), curValue !== finalValue && elem.setAttribute("class", finalValue);
            }
            return this;
        },
        toggleClass: function(value, stateVal) {
            var type = typeof value;
            return "boolean" == typeof stateVal && "string" === type ? stateVal ? this.addClass(value) : this.removeClass(value) : jQuery.isFunction(value) ? this.each(function(i) {
                jQuery(this).toggleClass(value.call(this, i, getClass(this), stateVal), stateVal);
            }) : this.each(function() {
                var className, i, self, classNames;
                if ("string" === type) for (i = 0, self = jQuery(this), classNames = value.match(rnotwhite) || []; className = classNames[i++]; ) self.hasClass(className) ? self.removeClass(className) : self.addClass(className); else (void 0 === value || "boolean" === type) && (className = getClass(this), 
                className && dataPriv.set(this, "__className__", className), this.setAttribute && this.setAttribute("class", className || value === !1 ? "" : dataPriv.get(this, "__className__") || ""));
            });
        },
        hasClass: function(selector) {
            var className, elem, i = 0;
            for (className = " " + selector + " "; elem = this[i++]; ) if (1 === elem.nodeType && (" " + getClass(elem) + " ").replace(rclass, " ").indexOf(className) > -1) return !0;
            return !1;
        }
    });
    var rreturn = /\r/g, rspaces = /[\x20\t\r\n\f]+/g;
    jQuery.fn.extend({
        val: function(value) {
            var hooks, ret, isFunction, elem = this[0];
            {
                if (arguments.length) return isFunction = jQuery.isFunction(value), this.each(function(i) {
                    var val;
                    1 === this.nodeType && (val = isFunction ? value.call(this, i, jQuery(this).val()) : value, 
                    null == val ? val = "" : "number" == typeof val ? val += "" : jQuery.isArray(val) && (val = jQuery.map(val, function(value) {
                        return null == value ? "" : value + "";
                    })), hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()], 
                    hooks && "set" in hooks && void 0 !== hooks.set(this, val, "value") || (this.value = val));
                });
                if (elem) return hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()], 
                hooks && "get" in hooks && void 0 !== (ret = hooks.get(elem, "value")) ? ret : (ret = elem.value, 
                "string" == typeof ret ? ret.replace(rreturn, "") : null == ret ? "" : ret);
            }
        }
    }), jQuery.extend({
        valHooks: {
            option: {
                get: function(elem) {
                    var val = jQuery.find.attr(elem, "value");
                    return null != val ? val : jQuery.trim(jQuery.text(elem)).replace(rspaces, " ");
                }
            },
            select: {
                get: function(elem) {
                    for (var value, option, options = elem.options, index = elem.selectedIndex, one = "select-one" === elem.type || 0 > index, values = one ? null : [], max = one ? index + 1 : options.length, i = 0 > index ? max : one ? index : 0; max > i; i++) if (option = options[i], 
                    (option.selected || i === index) && (support.optDisabled ? !option.disabled : null === option.getAttribute("disabled")) && (!option.parentNode.disabled || !jQuery.nodeName(option.parentNode, "optgroup"))) {
                        if (value = jQuery(option).val(), one) return value;
                        values.push(value);
                    }
                    return values;
                },
                set: function(elem, value) {
                    for (var optionSet, option, options = elem.options, values = jQuery.makeArray(value), i = options.length; i--; ) option = options[i], 
                    (option.selected = jQuery.inArray(jQuery.valHooks.option.get(option), values) > -1) && (optionSet = !0);
                    return optionSet || (elem.selectedIndex = -1), values;
                }
            }
        }
    }), jQuery.each([ "radio", "checkbox" ], function() {
        jQuery.valHooks[this] = {
            set: function(elem, value) {
                return jQuery.isArray(value) ? elem.checked = jQuery.inArray(jQuery(elem).val(), value) > -1 : void 0;
            }
        }, support.checkOn || (jQuery.valHooks[this].get = function(elem) {
            return null === elem.getAttribute("value") ? "on" : elem.value;
        });
    });
    var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;
    jQuery.extend(jQuery.event, {
        trigger: function(event, data, elem, onlyHandlers) {
            var i, cur, tmp, bubbleType, ontype, handle, special, eventPath = [ elem || document ], type = hasOwn.call(event, "type") ? event.type : event, namespaces = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];
            if (cur = tmp = elem = elem || document, 3 !== elem.nodeType && 8 !== elem.nodeType && !rfocusMorph.test(type + jQuery.event.triggered) && (type.indexOf(".") > -1 && (namespaces = type.split("."), 
            type = namespaces.shift(), namespaces.sort()), ontype = type.indexOf(":") < 0 && "on" + type, 
            event = event[jQuery.expando] ? event : new jQuery.Event(type, "object" == typeof event && event), 
            event.isTrigger = onlyHandlers ? 2 : 3, event.namespace = namespaces.join("."), 
            event.rnamespace = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, 
            event.result = void 0, event.target || (event.target = elem), data = null == data ? [ event ] : jQuery.makeArray(data, [ event ]), 
            special = jQuery.event.special[type] || {}, onlyHandlers || !special.trigger || special.trigger.apply(elem, data) !== !1)) {
                if (!onlyHandlers && !special.noBubble && !jQuery.isWindow(elem)) {
                    for (bubbleType = special.delegateType || type, rfocusMorph.test(bubbleType + type) || (cur = cur.parentNode); cur; cur = cur.parentNode) eventPath.push(cur), 
                    tmp = cur;
                    tmp === (elem.ownerDocument || document) && eventPath.push(tmp.defaultView || tmp.parentWindow || window);
                }
                for (i = 0; (cur = eventPath[i++]) && !event.isPropagationStopped(); ) event.type = i > 1 ? bubbleType : special.bindType || type, 
                handle = (dataPriv.get(cur, "events") || {})[event.type] && dataPriv.get(cur, "handle"), 
                handle && handle.apply(cur, data), handle = ontype && cur[ontype], handle && handle.apply && acceptData(cur) && (event.result = handle.apply(cur, data), 
                event.result === !1 && event.preventDefault());
                return event.type = type, onlyHandlers || event.isDefaultPrevented() || special._default && special._default.apply(eventPath.pop(), data) !== !1 || !acceptData(elem) || ontype && jQuery.isFunction(elem[type]) && !jQuery.isWindow(elem) && (tmp = elem[ontype], 
                tmp && (elem[ontype] = null), jQuery.event.triggered = type, elem[type](), jQuery.event.triggered = void 0, 
                tmp && (elem[ontype] = tmp)), event.result;
            }
        },
        simulate: function(type, elem, event) {
            var e = jQuery.extend(new jQuery.Event(), event, {
                type: type,
                isSimulated: !0
            });
            jQuery.event.trigger(e, null, elem), e.isDefaultPrevented() && event.preventDefault();
        }
    }), jQuery.fn.extend({
        trigger: function(type, data) {
            return this.each(function() {
                jQuery.event.trigger(type, data, this);
            });
        },
        triggerHandler: function(type, data) {
            var elem = this[0];
            return elem ? jQuery.event.trigger(type, data, elem, !0) : void 0;
        }
    }), jQuery.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(i, name) {
        jQuery.fn[name] = function(data, fn) {
            return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name);
        };
    }), jQuery.fn.extend({
        hover: function(fnOver, fnOut) {
            return this.mouseenter(fnOver).mouseleave(fnOut || fnOver);
        }
    }), support.focusin = "onfocusin" in window, support.focusin || jQuery.each({
        focus: "focusin",
        blur: "focusout"
    }, function(orig, fix) {
        var handler = function(event) {
            jQuery.event.simulate(fix, event.target, jQuery.event.fix(event));
        };
        jQuery.event.special[fix] = {
            setup: function() {
                var doc = this.ownerDocument || this, attaches = dataPriv.access(doc, fix);
                attaches || doc.addEventListener(orig, handler, !0), dataPriv.access(doc, fix, (attaches || 0) + 1);
            },
            teardown: function() {
                var doc = this.ownerDocument || this, attaches = dataPriv.access(doc, fix) - 1;
                attaches ? dataPriv.access(doc, fix, attaches) : (doc.removeEventListener(orig, handler, !0), 
                dataPriv.remove(doc, fix));
            }
        };
    });
    var location = window.location, nonce = jQuery.now(), rquery = /\?/;
    jQuery.parseJSON = function(data) {
        return JSON.parse(data + "");
    }, jQuery.parseXML = function(data) {
        var xml;
        if (!data || "string" != typeof data) return null;
        try {
            xml = new window.DOMParser().parseFromString(data, "text/xml");
        } catch (e) {
            xml = void 0;
        }
        return (!xml || xml.getElementsByTagName("parsererror").length) && jQuery.error("Invalid XML: " + data), 
        xml;
    };
    var rhash = /#.*$/, rts = /([?&])_=[^&]*/, rheaders = /^(.*?):[ \t]*([^\r\n]*)$/gm, rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, rnoContent = /^(?:GET|HEAD)$/, rprotocol = /^\/\//, prefilters = {}, transports = {}, allTypes = "*/".concat("*"), originAnchor = document.createElement("a");
    originAnchor.href = location.href, jQuery.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: location.href,
            type: "GET",
            isLocal: rlocalProtocol.test(location.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": allTypes,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": jQuery.parseJSON,
                "text xml": jQuery.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(target, settings) {
            return settings ? ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings) : ajaxExtend(jQuery.ajaxSettings, target);
        },
        ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
        ajaxTransport: addToPrefiltersOrTransports(transports),
        ajax: function(url, options) {
            function done(status, nativeStatusText, responses, headers) {
                var isSuccess, success, error, response, modified, statusText = nativeStatusText;
                2 !== state && (state = 2, timeoutTimer && window.clearTimeout(timeoutTimer), transport = void 0, 
                responseHeadersString = headers || "", jqXHR.readyState = status > 0 ? 4 : 0, isSuccess = status >= 200 && 300 > status || 304 === status, 
                responses && (response = ajaxHandleResponses(s, jqXHR, responses)), response = ajaxConvert(s, response, jqXHR, isSuccess), 
                isSuccess ? (s.ifModified && (modified = jqXHR.getResponseHeader("Last-Modified"), 
                modified && (jQuery.lastModified[cacheURL] = modified), modified = jqXHR.getResponseHeader("etag"), 
                modified && (jQuery.etag[cacheURL] = modified)), 204 === status || "HEAD" === s.type ? statusText = "nocontent" : 304 === status ? statusText = "notmodified" : (statusText = response.state, 
                success = response.data, error = response.error, isSuccess = !error)) : (error = statusText, 
                (status || !statusText) && (statusText = "error", 0 > status && (status = 0))), 
                jqXHR.status = status, jqXHR.statusText = (nativeStatusText || statusText) + "", 
                isSuccess ? deferred.resolveWith(callbackContext, [ success, statusText, jqXHR ]) : deferred.rejectWith(callbackContext, [ jqXHR, statusText, error ]), 
                jqXHR.statusCode(statusCode), statusCode = void 0, fireGlobals && globalEventContext.trigger(isSuccess ? "ajaxSuccess" : "ajaxError", [ jqXHR, s, isSuccess ? success : error ]), 
                completeDeferred.fireWith(callbackContext, [ jqXHR, statusText ]), fireGlobals && (globalEventContext.trigger("ajaxComplete", [ jqXHR, s ]), 
                --jQuery.active || jQuery.event.trigger("ajaxStop")));
            }
            "object" == typeof url && (options = url, url = void 0), options = options || {};
            var transport, cacheURL, responseHeadersString, responseHeaders, timeoutTimer, urlAnchor, fireGlobals, i, s = jQuery.ajaxSetup({}, options), callbackContext = s.context || s, globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery(callbackContext) : jQuery.event, deferred = jQuery.Deferred(), completeDeferred = jQuery.Callbacks("once memory"), statusCode = s.statusCode || {}, requestHeaders = {}, requestHeadersNames = {}, state = 0, strAbort = "canceled", jqXHR = {
                readyState: 0,
                getResponseHeader: function(key) {
                    var match;
                    if (2 === state) {
                        if (!responseHeaders) for (responseHeaders = {}; match = rheaders.exec(responseHeadersString); ) responseHeaders[match[1].toLowerCase()] = match[2];
                        match = responseHeaders[key.toLowerCase()];
                    }
                    return null == match ? null : match;
                },
                getAllResponseHeaders: function() {
                    return 2 === state ? responseHeadersString : null;
                },
                setRequestHeader: function(name, value) {
                    var lname = name.toLowerCase();
                    return state || (name = requestHeadersNames[lname] = requestHeadersNames[lname] || name, 
                    requestHeaders[name] = value), this;
                },
                overrideMimeType: function(type) {
                    return state || (s.mimeType = type), this;
                },
                statusCode: function(map) {
                    var code;
                    if (map) if (2 > state) for (code in map) statusCode[code] = [ statusCode[code], map[code] ]; else jqXHR.always(map[jqXHR.status]);
                    return this;
                },
                abort: function(statusText) {
                    var finalText = statusText || strAbort;
                    return transport && transport.abort(finalText), done(0, finalText), this;
                }
            };
            if (deferred.promise(jqXHR).complete = completeDeferred.add, jqXHR.success = jqXHR.done, 
            jqXHR.error = jqXHR.fail, s.url = ((url || s.url || location.href) + "").replace(rhash, "").replace(rprotocol, location.protocol + "//"), 
            s.type = options.method || options.type || s.method || s.type, s.dataTypes = jQuery.trim(s.dataType || "*").toLowerCase().match(rnotwhite) || [ "" ], 
            null == s.crossDomain) {
                urlAnchor = document.createElement("a");
                try {
                    urlAnchor.href = s.url, urlAnchor.href = urlAnchor.href, s.crossDomain = originAnchor.protocol + "//" + originAnchor.host != urlAnchor.protocol + "//" + urlAnchor.host;
                } catch (e) {
                    s.crossDomain = !0;
                }
            }
            if (s.data && s.processData && "string" != typeof s.data && (s.data = jQuery.param(s.data, s.traditional)), 
            inspectPrefiltersOrTransports(prefilters, s, options, jqXHR), 2 === state) return jqXHR;
            fireGlobals = jQuery.event && s.global, fireGlobals && 0 === jQuery.active++ && jQuery.event.trigger("ajaxStart"), 
            s.type = s.type.toUpperCase(), s.hasContent = !rnoContent.test(s.type), cacheURL = s.url, 
            s.hasContent || (s.data && (cacheURL = s.url += (rquery.test(cacheURL) ? "&" : "?") + s.data, 
            delete s.data), s.cache === !1 && (s.url = rts.test(cacheURL) ? cacheURL.replace(rts, "$1_=" + nonce++) : cacheURL + (rquery.test(cacheURL) ? "&" : "?") + "_=" + nonce++)), 
            s.ifModified && (jQuery.lastModified[cacheURL] && jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL]), 
            jQuery.etag[cacheURL] && jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL])), 
            (s.data && s.hasContent && s.contentType !== !1 || options.contentType) && jqXHR.setRequestHeader("Content-Type", s.contentType), 
            jqXHR.setRequestHeader("Accept", s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + ("*" !== s.dataTypes[0] ? ", " + allTypes + "; q=0.01" : "") : s.accepts["*"]);
            for (i in s.headers) jqXHR.setRequestHeader(i, s.headers[i]);
            if (s.beforeSend && (s.beforeSend.call(callbackContext, jqXHR, s) === !1 || 2 === state)) return jqXHR.abort();
            strAbort = "abort";
            for (i in {
                success: 1,
                error: 1,
                complete: 1
            }) jqXHR[i](s[i]);
            if (transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR)) {
                if (jqXHR.readyState = 1, fireGlobals && globalEventContext.trigger("ajaxSend", [ jqXHR, s ]), 
                2 === state) return jqXHR;
                s.async && s.timeout > 0 && (timeoutTimer = window.setTimeout(function() {
                    jqXHR.abort("timeout");
                }, s.timeout));
                try {
                    state = 1, transport.send(requestHeaders, done);
                } catch (e) {
                    if (!(2 > state)) throw e;
                    done(-1, e);
                }
            } else done(-1, "No Transport");
            return jqXHR;
        },
        getJSON: function(url, data, callback) {
            return jQuery.get(url, data, callback, "json");
        },
        getScript: function(url, callback) {
            return jQuery.get(url, void 0, callback, "script");
        }
    }), jQuery.each([ "get", "post" ], function(i, method) {
        jQuery[method] = function(url, data, callback, type) {
            return jQuery.isFunction(data) && (type = type || callback, callback = data, data = void 0), 
            jQuery.ajax(jQuery.extend({
                url: url,
                type: method,
                dataType: type,
                data: data,
                success: callback
            }, jQuery.isPlainObject(url) && url));
        };
    }), jQuery._evalUrl = function(url) {
        return jQuery.ajax({
            url: url,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        });
    }, jQuery.fn.extend({
        wrapAll: function(html) {
            var wrap;
            return jQuery.isFunction(html) ? this.each(function(i) {
                jQuery(this).wrapAll(html.call(this, i));
            }) : (this[0] && (wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && wrap.insertBefore(this[0]), 
            wrap.map(function() {
                for (var elem = this; elem.firstElementChild; ) elem = elem.firstElementChild;
                return elem;
            }).append(this)), this);
        },
        wrapInner: function(html) {
            return jQuery.isFunction(html) ? this.each(function(i) {
                jQuery(this).wrapInner(html.call(this, i));
            }) : this.each(function() {
                var self = jQuery(this), contents = self.contents();
                contents.length ? contents.wrapAll(html) : self.append(html);
            });
        },
        wrap: function(html) {
            var isFunction = jQuery.isFunction(html);
            return this.each(function(i) {
                jQuery(this).wrapAll(isFunction ? html.call(this, i) : html);
            });
        },
        unwrap: function() {
            return this.parent().each(function() {
                jQuery.nodeName(this, "body") || jQuery(this).replaceWith(this.childNodes);
            }).end();
        }
    }), jQuery.expr.filters.hidden = function(elem) {
        return !jQuery.expr.filters.visible(elem);
    }, jQuery.expr.filters.visible = function(elem) {
        return elem.offsetWidth > 0 || elem.offsetHeight > 0 || elem.getClientRects().length > 0;
    };
    var r20 = /%20/g, rbracket = /\[\]$/, rCRLF = /\r?\n/g, rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i, rsubmittable = /^(?:input|select|textarea|keygen)/i;
    jQuery.param = function(a, traditional) {
        var prefix, s = [], add = function(key, value) {
            value = jQuery.isFunction(value) ? value() : null == value ? "" : value, s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value);
        };
        if (void 0 === traditional && (traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional), 
        jQuery.isArray(a) || a.jquery && !jQuery.isPlainObject(a)) jQuery.each(a, function() {
            add(this.name, this.value);
        }); else for (prefix in a) buildParams(prefix, a[prefix], traditional, add);
        return s.join("&").replace(r20, "+");
    }, jQuery.fn.extend({
        serialize: function() {
            return jQuery.param(this.serializeArray());
        },
        serializeArray: function() {
            return this.map(function() {
                var elements = jQuery.prop(this, "elements");
                return elements ? jQuery.makeArray(elements) : this;
            }).filter(function() {
                var type = this.type;
                return this.name && !jQuery(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type));
            }).map(function(i, elem) {
                var val = jQuery(this).val();
                return null == val ? null : jQuery.isArray(val) ? jQuery.map(val, function(val) {
                    return {
                        name: elem.name,
                        value: val.replace(rCRLF, "\r\n")
                    };
                }) : {
                    name: elem.name,
                    value: val.replace(rCRLF, "\r\n")
                };
            }).get();
        }
    }), jQuery.ajaxSettings.xhr = function() {
        try {
            return new window.XMLHttpRequest();
        } catch (e) {}
    };
    var xhrSuccessStatus = {
        0: 200,
        1223: 204
    }, xhrSupported = jQuery.ajaxSettings.xhr();
    support.cors = !!xhrSupported && "withCredentials" in xhrSupported, support.ajax = xhrSupported = !!xhrSupported, 
    jQuery.ajaxTransport(function(options) {
        var callback, errorCallback;
        return support.cors || xhrSupported && !options.crossDomain ? {
            send: function(headers, complete) {
                var i, xhr = options.xhr();
                if (xhr.open(options.type, options.url, options.async, options.username, options.password), 
                options.xhrFields) for (i in options.xhrFields) xhr[i] = options.xhrFields[i];
                options.mimeType && xhr.overrideMimeType && xhr.overrideMimeType(options.mimeType), 
                options.crossDomain || headers["X-Requested-With"] || (headers["X-Requested-With"] = "XMLHttpRequest");
                for (i in headers) xhr.setRequestHeader(i, headers[i]);
                callback = function(type) {
                    return function() {
                        callback && (callback = errorCallback = xhr.onload = xhr.onerror = xhr.onabort = xhr.onreadystatechange = null, 
                        "abort" === type ? xhr.abort() : "error" === type ? "number" != typeof xhr.status ? complete(0, "error") : complete(xhr.status, xhr.statusText) : complete(xhrSuccessStatus[xhr.status] || xhr.status, xhr.statusText, "text" !== (xhr.responseType || "text") || "string" != typeof xhr.responseText ? {
                            binary: xhr.response
                        } : {
                            text: xhr.responseText
                        }, xhr.getAllResponseHeaders()));
                    };
                }, xhr.onload = callback(), errorCallback = xhr.onerror = callback("error"), void 0 !== xhr.onabort ? xhr.onabort = errorCallback : xhr.onreadystatechange = function() {
                    4 === xhr.readyState && window.setTimeout(function() {
                        callback && errorCallback();
                    });
                }, callback = callback("abort");
                try {
                    xhr.send(options.hasContent && options.data || null);
                } catch (e) {
                    if (callback) throw e;
                }
            },
            abort: function() {
                callback && callback();
            }
        } : void 0;
    }), jQuery.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(text) {
                return jQuery.globalEval(text), text;
            }
        }
    }), jQuery.ajaxPrefilter("script", function(s) {
        void 0 === s.cache && (s.cache = !1), s.crossDomain && (s.type = "GET");
    }), jQuery.ajaxTransport("script", function(s) {
        if (s.crossDomain) {
            var script, callback;
            return {
                send: function(_, complete) {
                    script = jQuery("<script>").prop({
                        charset: s.scriptCharset,
                        src: s.url
                    }).on("load error", callback = function(evt) {
                        script.remove(), callback = null, evt && complete("error" === evt.type ? 404 : 200, evt.type);
                    }), document.head.appendChild(script[0]);
                },
                abort: function() {
                    callback && callback();
                }
            };
        }
    });
    var oldCallbacks = [], rjsonp = /(=)\?(?=&|$)|\?\?/;
    jQuery.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var callback = oldCallbacks.pop() || jQuery.expando + "_" + nonce++;
            return this[callback] = !0, callback;
        }
    }), jQuery.ajaxPrefilter("json jsonp", function(s, originalSettings, jqXHR) {
        var callbackName, overwritten, responseContainer, jsonProp = s.jsonp !== !1 && (rjsonp.test(s.url) ? "url" : "string" == typeof s.data && 0 === (s.contentType || "").indexOf("application/x-www-form-urlencoded") && rjsonp.test(s.data) && "data");
        return jsonProp || "jsonp" === s.dataTypes[0] ? (callbackName = s.jsonpCallback = jQuery.isFunction(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback, 
        jsonProp ? s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName) : s.jsonp !== !1 && (s.url += (rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName), 
        s.converters["script json"] = function() {
            return responseContainer || jQuery.error(callbackName + " was not called"), responseContainer[0];
        }, s.dataTypes[0] = "json", overwritten = window[callbackName], window[callbackName] = function() {
            responseContainer = arguments;
        }, jqXHR.always(function() {
            void 0 === overwritten ? jQuery(window).removeProp(callbackName) : window[callbackName] = overwritten, 
            s[callbackName] && (s.jsonpCallback = originalSettings.jsonpCallback, oldCallbacks.push(callbackName)), 
            responseContainer && jQuery.isFunction(overwritten) && overwritten(responseContainer[0]), 
            responseContainer = overwritten = void 0;
        }), "script") : void 0;
    }), jQuery.parseHTML = function(data, context, keepScripts) {
        if (!data || "string" != typeof data) return null;
        "boolean" == typeof context && (keepScripts = context, context = !1), context = context || document;
        var parsed = rsingleTag.exec(data), scripts = !keepScripts && [];
        return parsed ? [ context.createElement(parsed[1]) ] : (parsed = buildFragment([ data ], context, scripts), 
        scripts && scripts.length && jQuery(scripts).remove(), jQuery.merge([], parsed.childNodes));
    };
    var _load = jQuery.fn.load;
    jQuery.fn.load = function(url, params, callback) {
        if ("string" != typeof url && _load) return _load.apply(this, arguments);
        var selector, type, response, self = this, off = url.indexOf(" ");
        return off > -1 && (selector = jQuery.trim(url.slice(off)), url = url.slice(0, off)), 
        jQuery.isFunction(params) ? (callback = params, params = void 0) : params && "object" == typeof params && (type = "POST"), 
        self.length > 0 && jQuery.ajax({
            url: url,
            type: type || "GET",
            dataType: "html",
            data: params
        }).done(function(responseText) {
            response = arguments, self.html(selector ? jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector) : responseText);
        }).always(callback && function(jqXHR, status) {
            self.each(function() {
                callback.apply(self, response || [ jqXHR.responseText, status, jqXHR ]);
            });
        }), this;
    }, jQuery.each([ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function(i, type) {
        jQuery.fn[type] = function(fn) {
            return this.on(type, fn);
        };
    }), jQuery.expr.filters.animated = function(elem) {
        return jQuery.grep(jQuery.timers, function(fn) {
            return elem === fn.elem;
        }).length;
    }, jQuery.offset = {
        setOffset: function(elem, options, i) {
            var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition, position = jQuery.css(elem, "position"), curElem = jQuery(elem), props = {};
            "static" === position && (elem.style.position = "relative"), curOffset = curElem.offset(), 
            curCSSTop = jQuery.css(elem, "top"), curCSSLeft = jQuery.css(elem, "left"), calculatePosition = ("absolute" === position || "fixed" === position) && (curCSSTop + curCSSLeft).indexOf("auto") > -1, 
            calculatePosition ? (curPosition = curElem.position(), curTop = curPosition.top, 
            curLeft = curPosition.left) : (curTop = parseFloat(curCSSTop) || 0, curLeft = parseFloat(curCSSLeft) || 0), 
            jQuery.isFunction(options) && (options = options.call(elem, i, jQuery.extend({}, curOffset))), 
            null != options.top && (props.top = options.top - curOffset.top + curTop), null != options.left && (props.left = options.left - curOffset.left + curLeft), 
            "using" in options ? options.using.call(elem, props) : curElem.css(props);
        }
    }, jQuery.fn.extend({
        offset: function(options) {
            if (arguments.length) return void 0 === options ? this : this.each(function(i) {
                jQuery.offset.setOffset(this, options, i);
            });
            var docElem, win, elem = this[0], box = {
                top: 0,
                left: 0
            }, doc = elem && elem.ownerDocument;
            if (doc) return docElem = doc.documentElement, jQuery.contains(docElem, elem) ? (box = elem.getBoundingClientRect(), 
            win = getWindow(doc), {
                top: box.top + win.pageYOffset - docElem.clientTop,
                left: box.left + win.pageXOffset - docElem.clientLeft
            }) : box;
        },
        position: function() {
            if (this[0]) {
                var offsetParent, offset, elem = this[0], parentOffset = {
                    top: 0,
                    left: 0
                };
                return "fixed" === jQuery.css(elem, "position") ? offset = elem.getBoundingClientRect() : (offsetParent = this.offsetParent(), 
                offset = this.offset(), jQuery.nodeName(offsetParent[0], "html") || (parentOffset = offsetParent.offset()), 
                parentOffset.top += jQuery.css(offsetParent[0], "borderTopWidth", !0), parentOffset.left += jQuery.css(offsetParent[0], "borderLeftWidth", !0)), 
                {
                    top: offset.top - parentOffset.top - jQuery.css(elem, "marginTop", !0),
                    left: offset.left - parentOffset.left - jQuery.css(elem, "marginLeft", !0)
                };
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var offsetParent = this.offsetParent; offsetParent && "static" === jQuery.css(offsetParent, "position"); ) offsetParent = offsetParent.offsetParent;
                return offsetParent || documentElement;
            });
        }
    }), jQuery.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(method, prop) {
        var top = "pageYOffset" === prop;
        jQuery.fn[method] = function(val) {
            return access(this, function(elem, method, val) {
                var win = getWindow(elem);
                return void 0 === val ? win ? win[prop] : elem[method] : void (win ? win.scrollTo(top ? win.pageXOffset : val, top ? val : win.pageYOffset) : elem[method] = val);
            }, method, val, arguments.length);
        };
    }), jQuery.each([ "top", "left" ], function(i, prop) {
        jQuery.cssHooks[prop] = addGetHookIf(support.pixelPosition, function(elem, computed) {
            return computed ? (computed = curCSS(elem, prop), rnumnonpx.test(computed) ? jQuery(elem).position()[prop] + "px" : computed) : void 0;
        });
    }), jQuery.each({
        Height: "height",
        Width: "width"
    }, function(name, type) {
        jQuery.each({
            padding: "inner" + name,
            content: type,
            "": "outer" + name
        }, function(defaultExtra, funcName) {
            jQuery.fn[funcName] = function(margin, value) {
                var chainable = arguments.length && (defaultExtra || "boolean" != typeof margin), extra = defaultExtra || (margin === !0 || value === !0 ? "margin" : "border");
                return access(this, function(elem, type, value) {
                    var doc;
                    return jQuery.isWindow(elem) ? elem.document.documentElement["client" + name] : 9 === elem.nodeType ? (doc = elem.documentElement, 
                    Math.max(elem.body["scroll" + name], doc["scroll" + name], elem.body["offset" + name], doc["offset" + name], doc["client" + name])) : void 0 === value ? jQuery.css(elem, type, extra) : jQuery.style(elem, type, value, extra);
                }, type, chainable ? margin : void 0, chainable, null);
            };
        });
    }), jQuery.fn.extend({
        bind: function(types, data, fn) {
            return this.on(types, null, data, fn);
        },
        unbind: function(types, fn) {
            return this.off(types, null, fn);
        },
        delegate: function(selector, types, data, fn) {
            return this.on(types, selector, data, fn);
        },
        undelegate: function(selector, types, fn) {
            return 1 === arguments.length ? this.off(selector, "**") : this.off(types, selector || "**", fn);
        },
        size: function() {
            return this.length;
        }
    }), jQuery.fn.andSelf = jQuery.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return jQuery;
    });
    var _jQuery = window.jQuery, _$ = window.$;
    return jQuery.noConflict = function(deep) {
        return window.$ === jQuery && (window.$ = _$), deep && window.jQuery === jQuery && (window.jQuery = _jQuery), 
        jQuery;
    }, noGlobal || (window.jQuery = window.$ = jQuery), jQuery;
}), !function($) {
    "use strict";
    function functionName(fn) {
        if (void 0 === Function.prototype.name) {
            var funcNameRegex = /function\s([^(]{1,})\(/, results = funcNameRegex.exec(fn.toString());
            return results && results.length > 1 ? results[1].trim() : "";
        }
        return void 0 === fn.prototype ? fn.constructor.name : fn.prototype.constructor.name;
    }
    function parseValue(str) {
        return /true/.test(str) ? !0 : /false/.test(str) ? !1 : isNaN(1 * str) ? str : parseFloat(str);
    }
    function hyphenate(str) {
        return str.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
    }
    var FOUNDATION_VERSION = "6.2.0", Foundation = {
        version: FOUNDATION_VERSION,
        _plugins: {},
        _uuids: [],
        rtl: function() {
            return "rtl" === $("html").attr("dir");
        },
        plugin: function(plugin, name) {
            var className = name || functionName(plugin), attrName = hyphenate(className);
            this._plugins[attrName] = this[className] = plugin;
        },
        registerPlugin: function(plugin, name) {
            var pluginName = name ? hyphenate(name) : functionName(plugin.constructor).toLowerCase();
            plugin.uuid = this.GetYoDigits(6, pluginName), plugin.$element.attr("data-" + pluginName) || plugin.$element.attr("data-" + pluginName, plugin.uuid), 
            plugin.$element.data("zfPlugin") || plugin.$element.data("zfPlugin", plugin), plugin.$element.trigger("init.zf." + pluginName), 
            this._uuids.push(plugin.uuid);
        },
        unregisterPlugin: function(plugin) {
            var pluginName = hyphenate(functionName(plugin.$element.data("zfPlugin").constructor));
            this._uuids.splice(this._uuids.indexOf(plugin.uuid), 1), plugin.$element.removeAttr("data-" + pluginName).removeData("zfPlugin").trigger("destroyed.zf." + pluginName);
            for (var prop in plugin) plugin[prop] = null;
        },
        reInit: function(plugins) {
            var isJQ = plugins instanceof $;
            try {
                if (isJQ) plugins.each(function() {
                    $(this).data("zfPlugin")._init();
                }); else {
                    var type = typeof plugins, _this = this, fns = {
                        object: function(plgs) {
                            plgs.forEach(function(p) {
                                p = hyphenate(p), $("[data-" + p + "]").foundation("_init");
                            });
                        },
                        string: function() {
                            plugins = hyphenate(plugins), $("[data-" + plugins + "]").foundation("_init");
                        },
                        undefined: function() {
                            this.object(Object.keys(_this._plugins));
                        }
                    };
                    fns[type](plugins);
                }
            } catch (err) {
                console.error(err);
            } finally {
                return plugins;
            }
        },
        GetYoDigits: function(length, namespace) {
            return length = length || 6, Math.round(Math.pow(36, length + 1) - Math.random() * Math.pow(36, length)).toString(36).slice(1) + (namespace ? "-" + namespace : "");
        },
        reflow: function(elem, plugins) {
            "undefined" == typeof plugins ? plugins = Object.keys(this._plugins) : "string" == typeof plugins && (plugins = [ plugins ]);
            var _this = this;
            $.each(plugins, function(i, name) {
                var plugin = _this._plugins[name], $elem = $(elem).find("[data-" + name + "]").addBack("[data-" + name + "]");
                $elem.each(function() {
                    var $el = $(this), opts = {};
                    if ($el.data("zfPlugin")) return void console.warn("Tried to initialize " + name + " on an element that already has a Foundation plugin.");
                    if ($el.attr("data-options")) {
                        $el.attr("data-options").split(";").forEach(function(e, i) {
                            var opt = e.split(":").map(function(el) {
                                return el.trim();
                            });
                            opt[0] && (opts[opt[0]] = parseValue(opt[1]));
                        });
                    }
                    try {
                        $el.data("zfPlugin", new plugin($(this), opts));
                    } catch (er) {
                        console.error(er);
                    } finally {
                        return;
                    }
                });
            });
        },
        getFnName: functionName,
        transitionend: function($elem) {
            var end, transitions = {
                transition: "transitionend",
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "otransitionend"
            }, elem = document.createElement("div");
            for (var t in transitions) "undefined" != typeof elem.style[t] && (end = transitions[t]);
            return end ? end : (end = setTimeout(function() {
                $elem.triggerHandler("transitionend", [ $elem ]);
            }, 1), "transitionend");
        }
    };
    Foundation.util = {
        throttle: function(func, delay) {
            var timer = null;
            return function() {
                var context = this, args = arguments;
                null === timer && (timer = setTimeout(function() {
                    func.apply(context, args), timer = null;
                }, delay));
            };
        }
    };
    var foundation = function(method) {
        var type = typeof method, $meta = $("meta.foundation-mq"), $noJS = $(".no-js");
        if ($meta.length || $('<meta class="foundation-mq">').appendTo(document.head), $noJS.length && $noJS.removeClass("no-js"), 
        "undefined" === type) Foundation.MediaQuery._init(), Foundation.reflow(this); else {
            if ("string" !== type) throw new TypeError("We're sorry, " + type + " is not a valid parameter. You must use a string representing the method you wish to invoke.");
            var args = Array.prototype.slice.call(arguments, 1), plugClass = this.data("zfPlugin");
            if (void 0 === plugClass || void 0 === plugClass[method]) throw new ReferenceError("We're sorry, '" + method + "' is not an available method for " + (plugClass ? functionName(plugClass) : "this element") + ".");
            1 === this.length ? plugClass[method].apply(plugClass, args) : this.each(function(i, el) {
                plugClass[method].apply($(el).data("zfPlugin"), args);
            });
        }
        return this;
    };
    window.Foundation = Foundation, $.fn.foundation = foundation, function() {
        Date.now && window.Date.now || (window.Date.now = Date.now = function() {
            return new Date().getTime();
        });
        for (var vendors = [ "webkit", "moz" ], i = 0; i < vendors.length && !window.requestAnimationFrame; ++i) {
            var vp = vendors[i];
            window.requestAnimationFrame = window[vp + "RequestAnimationFrame"], window.cancelAnimationFrame = window[vp + "CancelAnimationFrame"] || window[vp + "CancelRequestAnimationFrame"];
        }
        if (/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent) || !window.requestAnimationFrame || !window.cancelAnimationFrame) {
            var lastTime = 0;
            window.requestAnimationFrame = function(callback) {
                var now = Date.now(), nextTime = Math.max(lastTime + 16, now);
                return setTimeout(function() {
                    callback(lastTime = nextTime);
                }, nextTime - now);
            }, window.cancelAnimationFrame = clearTimeout;
        }
        window.performance && window.performance.now || (window.performance = {
            start: Date.now(),
            now: function() {
                return Date.now() - this.start;
            }
        });
    }(), Function.prototype.bind || (Function.prototype.bind = function(oThis) {
        if ("function" != typeof this) throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
        var aArgs = Array.prototype.slice.call(arguments, 1), fToBind = this, fNOP = function() {}, fBound = function() {
            return fToBind.apply(this instanceof fNOP ? this : oThis, aArgs.concat(Array.prototype.slice.call(arguments)));
        };
        return this.prototype && (fNOP.prototype = this.prototype), fBound.prototype = new fNOP(), 
        fBound;
    });
}(jQuery), !function($) {
    function ImNotTouchingYou(element, parent, lrOnly, tbOnly) {
        var top, bottom, left, right, eleDims = GetDimensions(element);
        if (parent) {
            var parDims = GetDimensions(parent);
            bottom = eleDims.offset.top + eleDims.height <= parDims.height + parDims.offset.top, 
            top = eleDims.offset.top >= parDims.offset.top, left = eleDims.offset.left >= parDims.offset.left, 
            right = eleDims.offset.left + eleDims.width <= parDims.width;
        } else bottom = eleDims.offset.top + eleDims.height <= eleDims.windowDims.height + eleDims.windowDims.offset.top, 
        top = eleDims.offset.top >= eleDims.windowDims.offset.top, left = eleDims.offset.left >= eleDims.windowDims.offset.left, 
        right = eleDims.offset.left + eleDims.width <= eleDims.windowDims.width;
        var allDirs = [ bottom, top, left, right ];
        return lrOnly ? left === right == !0 : tbOnly ? top === bottom == !0 : -1 === allDirs.indexOf(!1);
    }
    function GetDimensions(elem, test) {
        if (elem = elem.length ? elem[0] : elem, elem === window || elem === document) throw new Error("I'm sorry, Dave. I'm afraid I can't do that.");
        var rect = elem.getBoundingClientRect(), parRect = elem.parentNode.getBoundingClientRect(), winRect = document.body.getBoundingClientRect(), winY = window.pageYOffset, winX = window.pageXOffset;
        return {
            width: rect.width,
            height: rect.height,
            offset: {
                top: rect.top + winY,
                left: rect.left + winX
            },
            parentDims: {
                width: parRect.width,
                height: parRect.height,
                offset: {
                    top: parRect.top + winY,
                    left: parRect.left + winX
                }
            },
            windowDims: {
                width: winRect.width,
                height: winRect.height,
                offset: {
                    top: winY,
                    left: winX
                }
            }
        };
    }
    function GetOffsets(element, anchor, position, vOffset, hOffset, isOverflow) {
        var $eleDims = GetDimensions(element), $anchorDims = anchor ? GetDimensions(anchor) : null;
        switch (position) {
          case "top":
            return {
                left: Foundation.rtl() ? $anchorDims.offset.left - $eleDims.width + $anchorDims.width : $anchorDims.offset.left,
                top: $anchorDims.offset.top - ($eleDims.height + vOffset)
            };

          case "left":
            return {
                left: $anchorDims.offset.left - ($eleDims.width + hOffset),
                top: $anchorDims.offset.top
            };

          case "right":
            return {
                left: $anchorDims.offset.left + $anchorDims.width + hOffset,
                top: $anchorDims.offset.top
            };

          case "center top":
            return {
                left: $anchorDims.offset.left + $anchorDims.width / 2 - $eleDims.width / 2,
                top: $anchorDims.offset.top - ($eleDims.height + vOffset)
            };

          case "center bottom":
            return {
                left: isOverflow ? hOffset : $anchorDims.offset.left + $anchorDims.width / 2 - $eleDims.width / 2,
                top: $anchorDims.offset.top + $anchorDims.height + vOffset
            };

          case "center left":
            return {
                left: $anchorDims.offset.left - ($eleDims.width + hOffset),
                top: $anchorDims.offset.top + $anchorDims.height / 2 - $eleDims.height / 2
            };

          case "center right":
            return {
                left: $anchorDims.offset.left + $anchorDims.width + hOffset + 1,
                top: $anchorDims.offset.top + $anchorDims.height / 2 - $eleDims.height / 2
            };

          case "center":
            return {
                left: $eleDims.windowDims.offset.left + $eleDims.windowDims.width / 2 - $eleDims.width / 2,
                top: $eleDims.windowDims.offset.top + $eleDims.windowDims.height / 2 - $eleDims.height / 2
            };

          case "reveal":
            return {
                left: ($eleDims.windowDims.width - $eleDims.width) / 2,
                top: $eleDims.windowDims.offset.top + vOffset
            };

          case "reveal full":
            return {
                left: $eleDims.windowDims.offset.left,
                top: $eleDims.windowDims.offset.top
            };

          default:
            return {
                left: Foundation.rtl() ? $anchorDims.offset.left - $eleDims.width + $anchorDims.width : $anchorDims.offset.left,
                top: $anchorDims.offset.top + $anchorDims.height + vOffset
            };
        }
    }
    Foundation.Box = {
        ImNotTouchingYou: ImNotTouchingYou,
        GetDimensions: GetDimensions,
        GetOffsets: GetOffsets
    };
}(jQuery), !function($) {
    function getKeyCodes(kcs) {
        var k = {};
        for (var kc in kcs) k[kcs[kc]] = kcs[kc];
        return k;
    }
    var keyCodes = {
        9: "TAB",
        13: "ENTER",
        27: "ESCAPE",
        32: "SPACE",
        37: "ARROW_LEFT",
        38: "ARROW_UP",
        39: "ARROW_RIGHT",
        40: "ARROW_DOWN"
    }, commands = {}, Keyboard = {
        keys: getKeyCodes(keyCodes),
        parseKey: function(event) {
            var key = keyCodes[event.which || event.keyCode] || String.fromCharCode(event.which).toUpperCase();
            return event.shiftKey && (key = "SHIFT_" + key), event.ctrlKey && (key = "CTRL_" + key), 
            event.altKey && (key = "ALT_" + key), key;
        },
        handleKey: function(event, component, functions) {
            var cmds, command, fn, commandList = commands[component], keyCode = this.parseKey(event);
            return commandList ? (cmds = "undefined" == typeof commandList.ltr ? commandList : Foundation.rtl() ? $.extend({}, commandList.ltr, commandList.rtl) : $.extend({}, commandList.rtl, commandList.ltr), 
            command = cmds[keyCode], fn = functions[command], void (fn && "function" == typeof fn ? (fn.apply(), 
            (functions.handled || "function" == typeof functions.handled) && functions.handled.apply()) : (functions.unhandled || "function" == typeof functions.unhandled) && functions.unhandled.apply())) : console.warn("Component not defined!");
        },
        findFocusable: function($element) {
            return $element.find("a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]").filter(function() {
                return !$(this).is(":visible") || $(this).attr("tabindex") < 0 ? !1 : !0;
            });
        },
        register: function(componentName, cmds) {
            commands[componentName] = cmds;
        }
    };
    Foundation.Keyboard = Keyboard;
}(jQuery), !function($) {
    function parseStyleToObject(str) {
        var styleObject = {};
        return "string" != typeof str ? styleObject : (str = str.trim().slice(1, -1)) ? styleObject = str.split("&").reduce(function(ret, param) {
            var parts = param.replace(/\+/g, " ").split("="), key = parts[0], val = parts[1];
            return key = decodeURIComponent(key), val = void 0 === val ? null : decodeURIComponent(val), 
            ret.hasOwnProperty(key) ? Array.isArray(ret[key]) ? ret[key].push(val) : ret[key] = [ ret[key], val ] : ret[key] = val, 
            ret;
        }, {}) : styleObject;
    }
    var MediaQuery = {
        queries: [],
        current: "",
        _init: function() {
            var namedQueries, self = this, extractedStyles = $(".foundation-mq").css("font-family");
            namedQueries = parseStyleToObject(extractedStyles);
            for (var key in namedQueries) self.queries.push({
                name: key,
                value: "only screen and (min-width: " + namedQueries[key] + ")"
            });
            this.current = this._getCurrentSize(), this._watcher();
        },
        atLeast: function(size) {
            var query = this.get(size);
            return query ? window.matchMedia(query).matches : !1;
        },
        get: function(size) {
            for (var i in this.queries) {
                var query = this.queries[i];
                if (size === query.name) return query.value;
            }
            return null;
        },
        _getCurrentSize: function() {
            var matched;
            for (var i in this.queries) {
                var query = this.queries[i];
                window.matchMedia(query.value).matches && (matched = query);
            }
            return "object" == typeof matched ? matched.name : matched;
        },
        _watcher: function() {
            var _this = this;
            $(window).on("resize.zf.mediaquery", function() {
                var newSize = _this._getCurrentSize();
                newSize !== _this.current && ($(window).trigger("changed.zf.mediaquery", [ newSize, _this.current ]), 
                _this.current = newSize);
            });
        }
    };
    Foundation.MediaQuery = MediaQuery, window.matchMedia || (window.matchMedia = function() {
        "use strict";
        var styleMedia = window.styleMedia || window.media;
        if (!styleMedia) {
            var style = document.createElement("style"), script = document.getElementsByTagName("script")[0], info = null;
            style.type = "text/css", style.id = "matchmediajs-test", script.parentNode.insertBefore(style, script), 
            info = "getComputedStyle" in window && window.getComputedStyle(style, null) || style.currentStyle, 
            styleMedia = {
                matchMedium: function(media) {
                    var text = "@media " + media + "{ #matchmediajs-test { width: 1px; } }";
                    return style.styleSheet ? style.styleSheet.cssText = text : style.textContent = text, 
                    "1px" === info.width;
                }
            };
        }
        return function(media) {
            return {
                matches: styleMedia.matchMedium(media || "all"),
                media: media || "all"
            };
        };
    }()), Foundation.MediaQuery = MediaQuery;
}(jQuery), !function($) {
    function Move(duration, elem, fn) {
        function move(ts) {
            start || (start = window.performance.now()), prog = ts - start, fn.apply(elem), 
            duration > prog ? anim = window.requestAnimationFrame(move, elem) : (window.cancelAnimationFrame(anim), 
            elem.trigger("finished.zf.animate", [ elem ]).triggerHandler("finished.zf.animate", [ elem ]));
        }
        var anim, prog, start = null;
        anim = window.requestAnimationFrame(move);
    }
    function animate(isIn, element, animation, cb) {
        function finish() {
            isIn || element.hide(), reset(), cb && cb.apply(element);
        }
        function reset() {
            element[0].style.transitionDuration = 0, element.removeClass(initClass + " " + activeClass + " " + animation);
        }
        if (element = $(element).eq(0), element.length) {
            var initClass = isIn ? initClasses[0] : initClasses[1], activeClass = isIn ? activeClasses[0] : activeClasses[1];
            reset(), element.addClass(animation).css("transition", "none"), requestAnimationFrame(function() {
                element.addClass(initClass), isIn && element.show();
            }), requestAnimationFrame(function() {
                element[0].offsetWidth, element.css("transition", "").addClass(activeClass);
            }), element.one(Foundation.transitionend(element), finish);
        }
    }
    var initClasses = [ "mui-enter", "mui-leave" ], activeClasses = [ "mui-enter-active", "mui-leave-active" ], Motion = {
        animateIn: function(element, animation, cb) {
            animate(!0, element, animation, cb);
        },
        animateOut: function(element, animation, cb) {
            animate(!1, element, animation, cb);
        }
    };
    Foundation.Move = Move, Foundation.Motion = Motion;
}(jQuery), !function($) {
    var Nest = {
        Feather: function(menu) {
            var type = arguments.length <= 1 || void 0 === arguments[1] ? "zf" : arguments[1];
            menu.attr("role", "menubar");
            var items = menu.find("li").attr({
                role: "menuitem"
            }), subMenuClass = "is-" + type + "-submenu", subItemClass = subMenuClass + "-item", hasSubClass = "is-" + type + "-submenu-parent";
            menu.find("a:first").attr("tabindex", 0), items.each(function() {
                var $item = $(this), $sub = $item.children("ul");
                $sub.length && ($item.addClass(hasSubClass).attr({
                    "aria-haspopup": !0,
                    "aria-expanded": !1,
                    "aria-label": $item.children("a:first").text()
                }), $sub.addClass("submenu " + subMenuClass).attr({
                    "data-submenu": "",
                    "aria-hidden": !0,
                    role: "menu"
                })), $item.parent("[data-submenu]").length && $item.addClass("is-submenu-item " + subItemClass);
            });
        },
        Burn: function(menu, type) {
            var subMenuClass = (menu.find("li").removeAttr("tabindex"), "is-" + type + "-submenu"), subItemClass = subMenuClass + "-item", hasSubClass = "is-" + type + "-submenu-parent";
            menu.find("*").removeClass(subMenuClass + " " + subItemClass + " " + hasSubClass + " is-submenu-item submenu is-active").removeAttr("data-submenu").css("display", "");
        }
    };
    Foundation.Nest = Nest;
}(jQuery), !function($) {
    function Timer(elem, options, cb) {
        var start, timer, _this = this, duration = options.duration, nameSpace = Object.keys(elem.data())[0] || "timer", remain = -1;
        this.isPaused = !1, this.restart = function() {
            remain = -1, clearTimeout(timer), this.start();
        }, this.start = function() {
            this.isPaused = !1, clearTimeout(timer), remain = 0 >= remain ? duration : remain, 
            elem.data("paused", !1), start = Date.now(), timer = setTimeout(function() {
                options.infinite && _this.restart(), cb();
            }, remain), elem.trigger("timerstart.zf." + nameSpace);
        }, this.pause = function() {
            this.isPaused = !0, clearTimeout(timer), elem.data("paused", !0);
            var end = Date.now();
            remain -= end - start, elem.trigger("timerpaused.zf." + nameSpace);
        };
    }
    function onImagesLoaded(images, callback) {
        function singleImageLoaded() {
            unloaded--, 0 === unloaded && callback();
        }
        var unloaded = images.length;
        0 === unloaded && callback(), images.each(function() {
            this.complete ? singleImageLoaded() : "undefined" != typeof this.naturalWidth && this.naturalWidth > 0 ? singleImageLoaded() : $(this).one("load", function() {
                singleImageLoaded();
            });
        });
    }
    Foundation.Timer = Timer, Foundation.onImagesLoaded = onImagesLoaded;
}(jQuery), function($) {
    function onTouchEnd() {
        this.removeEventListener("touchmove", onTouchMove), this.removeEventListener("touchend", onTouchEnd), 
        isMoving = !1;
    }
    function onTouchMove(e) {
        if ($.spotSwipe.preventDefault && e.preventDefault(), isMoving) {
            var dir, x = e.touches[0].pageX, dx = (e.touches[0].pageY, startPosX - x);
            elapsedTime = new Date().getTime() - startTime, Math.abs(dx) >= $.spotSwipe.moveThreshold && elapsedTime <= $.spotSwipe.timeThreshold && (dir = dx > 0 ? "left" : "right"), 
            dir && (e.preventDefault(), onTouchEnd.call(this), $(this).trigger("swipe", dir).trigger("swipe" + dir));
        }
    }
    function onTouchStart(e) {
        1 == e.touches.length && (startPosX = e.touches[0].pageX, startPosY = e.touches[0].pageY, 
        isMoving = !0, startTime = new Date().getTime(), this.addEventListener("touchmove", onTouchMove, !1), 
        this.addEventListener("touchend", onTouchEnd, !1));
    }
    function init() {
        this.addEventListener && this.addEventListener("touchstart", onTouchStart, !1);
    }
    $.spotSwipe = {
        version: "1.0.0",
        enabled: "ontouchstart" in document.documentElement,
        preventDefault: !1,
        moveThreshold: 75,
        timeThreshold: 200
    };
    var startPosX, startPosY, startTime, elapsedTime, isMoving = !1;
    $.event.special.swipe = {
        setup: init
    }, $.each([ "left", "up", "down", "right" ], function() {
        $.event.special["swipe" + this] = {
            setup: function() {
                $(this).on("swipe", $.noop);
            }
        };
    });
}(jQuery), !function($) {
    $.fn.addTouch = function() {
        this.each(function(i, el) {
            $(el).bind("touchstart touchmove touchend touchcancel", function() {
                handleTouch(event);
            });
        });
        var handleTouch = function(event) {
            var simulatedEvent, touches = event.changedTouches, first = touches[0], eventTypes = {
                touchstart: "mousedown",
                touchmove: "mousemove",
                touchend: "mouseup"
            }, type = eventTypes[event.type];
            "MouseEvent" in window && "function" == typeof window.MouseEvent ? simulatedEvent = window.MouseEvent(type, {
                bubbles: !0,
                cancelable: !0,
                screenX: first.screenX,
                screenY: first.screenY,
                clientX: first.clientX,
                clientY: first.clientY
            }) : (simulatedEvent = document.createEvent("MouseEvent"), simulatedEvent.initMouseEvent(type, !0, !0, window, 1, first.screenX, first.screenY, first.clientX, first.clientY, !1, !1, !1, !1, 0, null)), 
            first.target.dispatchEvent(simulatedEvent);
        };
    };
}(jQuery), !function($) {
    function checkListeners() {
        eventsListener(), resizeListener(), scrollListener(), closemeListener();
    }
    function closemeListener(pluginName) {
        var yetiBoxes = $("[data-yeti-box]"), plugNames = [ "dropdown", "tooltip", "reveal" ];
        if (pluginName && ("string" == typeof pluginName ? plugNames.push(pluginName) : "object" == typeof pluginName && "string" == typeof pluginName[0] ? plugNames.concat(pluginName) : console.error("Plugin names must be strings")), 
        yetiBoxes.length) {
            var listeners = plugNames.map(function(name) {
                return "closeme.zf." + name;
            }).join(" ");
            $(window).off(listeners).on(listeners, function(e, pluginId) {
                var plugin = e.namespace.split(".")[0], plugins = $("[data-" + plugin + "]").not('[data-yeti-box="' + pluginId + '"]');
                plugins.each(function() {
                    var _this = $(this);
                    _this.triggerHandler("close.zf.trigger", [ _this ]);
                });
            });
        }
    }
    function resizeListener(debounce) {
        var timer = void 0, $nodes = $("[data-resize]");
        $nodes.length && $(window).off("resize.zf.trigger").on("resize.zf.trigger", function(e) {
            timer && clearTimeout(timer), timer = setTimeout(function() {
                MutationObserver || $nodes.each(function() {
                    $(this).triggerHandler("resizeme.zf.trigger");
                }), $nodes.attr("data-events", "resize");
            }, debounce || 10);
        });
    }
    function scrollListener(debounce) {
        var timer = void 0, $nodes = $("[data-scroll]");
        $nodes.length && $(window).off("scroll.zf.trigger").on("scroll.zf.trigger", function(e) {
            timer && clearTimeout(timer), timer = setTimeout(function() {
                MutationObserver || $nodes.each(function() {
                    $(this).triggerHandler("scrollme.zf.trigger");
                }), $nodes.attr("data-events", "scroll");
            }, debounce || 10);
        });
    }
    function eventsListener() {
        if (!MutationObserver) return !1;
        var nodes = document.querySelectorAll("[data-resize], [data-scroll], [data-mutate]"), listeningElementsMutation = function(mutationRecordsList) {
            var $target = $(mutationRecordsList[0].target);
            switch ($target.attr("data-events")) {
              case "resize":
                $target.triggerHandler("resizeme.zf.trigger", [ $target ]);
                break;

              case "scroll":
                $target.triggerHandler("scrollme.zf.trigger", [ $target, window.pageYOffset ]);
                break;

              default:
                return !1;
            }
        };
        if (nodes.length) for (var i = 0; i <= nodes.length - 1; i++) {
            var elementObserver = new MutationObserver(listeningElementsMutation);
            elementObserver.observe(nodes[i], {
                attributes: !0,
                childList: !1,
                characterData: !1,
                subtree: !1,
                attributeFilter: [ "data-events" ]
            });
        }
    }
    var MutationObserver = function() {
        for (var prefixes = [ "WebKit", "Moz", "O", "Ms", "" ], i = 0; i < prefixes.length; i++) if (prefixes[i] + "MutationObserver" in window) return window[prefixes[i] + "MutationObserver"];
        return !1;
    }(), triggers = function(el, type) {
        el.data(type).split(" ").forEach(function(id) {
            $("#" + id)["close" === type ? "trigger" : "triggerHandler"](type + ".zf.trigger", [ el ]);
        });
    };
    $(document).on("click.zf.trigger", "[data-open]", function() {
        triggers($(this), "open");
    }), $(document).on("click.zf.trigger", "[data-close]", function() {
        var id = $(this).data("close");
        id ? triggers($(this), "close") : $(this).trigger("close.zf.trigger");
    }), $(document).on("click.zf.trigger", "[data-toggle]", function() {
        triggers($(this), "toggle");
    }), $(document).on("close.zf.trigger", "[data-closable]", function(e) {
        e.stopPropagation();
        var animation = $(this).data("closable");
        "" !== animation ? Foundation.Motion.animateOut($(this), animation, function() {
            $(this).trigger("closed.zf");
        }) : $(this).fadeOut().trigger("closed.zf");
    }), $(document).on("focus.zf.trigger blur.zf.trigger", "[data-toggle-focus]", function() {
        var id = $(this).data("toggle-focus");
        $("#" + id).triggerHandler("toggle.zf.trigger", [ $(this) ]);
    }), $(window).load(function() {
        checkListeners();
    }), Foundation.IHearYou = checkListeners;
}(jQuery);

var _createClass = function() {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
            "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    return function(Constructor, protoProps, staticProps) {
        return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
        Constructor;
    };
}();

!function($) {
    var Abide = function() {
        function Abide(element) {
            var options = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
            _classCallCheck(this, Abide), this.$element = element, this.options = $.extend({}, Abide.defaults, this.$element.data(), options), 
            this._init(), Foundation.registerPlugin(this, "Abide");
        }
        return _createClass(Abide, [ {
            key: "_init",
            value: function() {
                this.$inputs = this.$element.find("input, textarea, select").not("[data-abide-ignore]"), 
                this._events();
            }
        }, {
            key: "_events",
            value: function() {
                var _this2 = this;
                this.$element.off(".abide").on("reset.zf.abide", function() {
                    _this2.resetForm();
                }).on("submit.zf.abide", function() {
                    return _this2.validateForm();
                }), "fieldChange" === this.options.validateOn && this.$inputs.off("change.zf.abide").on("change.zf.abide", function(e) {
                    _this2.validateInput($(e.target));
                }), this.options.liveValidate && this.$inputs.off("input.zf.abide").on("input.zf.abide", function(e) {
                    _this2.validateInput($(e.target));
                });
            }
        }, {
            key: "_reflow",
            value: function() {
                this._init();
            }
        }, {
            key: "requiredCheck",
            value: function($el) {
                if (!$el.attr("required")) return !0;
                var isGood = !0;
                switch ($el[0].type) {
                  case "checkbox":
                  case "radio":
                    isGood = $el[0].checked;
                    break;

                  case "select":
                  case "select-one":
                  case "select-multiple":
                    var opt = $el.find("option:selected");
                    opt.length && opt.val() || (isGood = !1);
                    break;

                  default:
                    $el.val() && $el.val().length || (isGood = !1);
                }
                return isGood;
            }
        }, {
            key: "findFormError",
            value: function($el) {
                var $error = $el.siblings(this.options.formErrorSelector);
                return $error.length || ($error = $el.parent().find(this.options.formErrorSelector)), 
                $error;
            }
        }, {
            key: "findLabel",
            value: function($el) {
                var id = $el[0].id, $label = this.$element.find('label[for="' + id + '"]');
                return $label.length ? $label : $el.closest("label");
            }
        }, {
            key: "addErrorClasses",
            value: function($el) {
                var $label = this.findLabel($el), $formError = this.findFormError($el);
                $label.length && $label.addClass(this.options.labelErrorClass), $formError.length && $formError.addClass(this.options.formErrorClass), 
                $el.addClass(this.options.inputErrorClass).attr("data-invalid", "");
            }
        }, {
            key: "removeErrorClasses",
            value: function($el) {
                var $label = this.findLabel($el), $formError = this.findFormError($el);
                $label.length && $label.removeClass(this.options.labelErrorClass), $formError.length && $formError.removeClass(this.options.formErrorClass), 
                $el.removeClass(this.options.inputErrorClass).removeAttr("data-invalid");
            }
        }, {
            key: "validateInput",
            value: function($el) {
                var clearRequire = this.requiredCheck($el), validated = !1, customValidator = !0, validator = $el.attr("data-validator"), equalTo = !0;
                switch ($el[0].type) {
                  case "radio":
                    validated = this.validateRadio($el.attr("name"));
                    break;

                  case "checkbox":
                    validated = clearRequire;
                    break;

                  case "select":
                  case "select-one":
                  case "select-multiple":
                    validated = clearRequire;
                    break;

                  default:
                    validated = this.validateText($el);
                }
                validator && (customValidator = this.matchValidation($el, validator, $el.attr("required"))), 
                $el.attr("data-equalto") && (equalTo = this.options.validators.equalTo($el));
                var goodToGo = -1 === [ clearRequire, validated, customValidator, equalTo ].indexOf(!1), message = (goodToGo ? "valid" : "invalid") + ".zf.abide";
                return this[goodToGo ? "removeErrorClasses" : "addErrorClasses"]($el), $el.trigger(message, [ $el ]), 
                goodToGo;
            }
        }, {
            key: "validateForm",
            value: function() {
                var acc = [], _this = this;
                this.$inputs.each(function() {
                    acc.push(_this.validateInput($(this)));
                });
                var noError = -1 === acc.indexOf(!1);
                return this.$element.find("[data-abide-error]").css("display", noError ? "none" : "block"), 
                this.$element.trigger((noError ? "formvalid" : "forminvalid") + ".zf.abide", [ this.$element ]), 
                noError;
            }
        }, {
            key: "validateText",
            value: function($el, pattern) {
                pattern = pattern || $el.attr("pattern") || $el.attr("type");
                var inputText = $el.val();
                return inputText.length ? this.options.patterns.hasOwnProperty(pattern) ? this.options.patterns[pattern].test(inputText) : pattern && pattern !== $el.attr("type") ? new RegExp(pattern).test(inputText) : !0 : !0;
            }
        }, {
            key: "validateRadio",
            value: function(groupName) {
                var $group = this.$element.find(':radio[name="' + groupName + '"]'), counter = [], _this = this;
                return $group.each(function() {
                    var rdio = $(this), clear = _this.requiredCheck(rdio);
                    counter.push(clear), clear && _this.removeErrorClasses(rdio);
                }), -1 === counter.indexOf(!1);
            }
        }, {
            key: "matchValidation",
            value: function($el, validators, required) {
                var _this3 = this;
                required = required ? !0 : !1;
                var clear = validators.split(" ").map(function(v) {
                    return _this3.options.validators[v]($el, required, $el.parent());
                });
                return -1 === clear.indexOf(!1);
            }
        }, {
            key: "resetForm",
            value: function() {
                var $form = this.$element, opts = this.options;
                $("." + opts.labelErrorClass, $form).not("small").removeClass(opts.labelErrorClass), 
                $("." + opts.inputErrorClass, $form).not("small").removeClass(opts.inputErrorClass), 
                $(opts.formErrorSelector + "." + opts.formErrorClass).removeClass(opts.formErrorClass), 
                $form.find("[data-abide-error]").css("display", "none"), $(":input", $form).not(":button, :submit, :reset, :hidden, [data-abide-ignore]").val("").removeAttr("data-invalid"), 
                $form.trigger("formreset.zf.abide", [ $form ]);
            }
        }, {
            key: "destroy",
            value: function() {
                var _this = this;
                this.$element.off(".abide").find("[data-abide-error]").css("display", "none"), this.$inputs.off(".abide").each(function() {
                    _this.removeErrorClasses($(this));
                }), Foundation.unregisterPlugin(this);
            }
        } ]), Abide;
    }();
    Abide.defaults = {
        validateOn: "fieldChange",
        labelErrorClass: "is-invalid-label",
        inputErrorClass: "is-invalid-input",
        formErrorSelector: ".form-error",
        formErrorClass: "is-visible",
        liveValidate: !1,
        patterns: {
            alpha: /^[a-zA-Z]+$/,
            alpha_numeric: /^[a-zA-Z0-9]+$/,
            integer: /^[-+]?\d+$/,
            number: /^[-+]?\d*(?:[\.\,]\d+)?$/,
            card: /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/,
            cvv: /^([0-9]){3,4}$/,
            email: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/,
            url: /^(https?|ftp|file|ssh):\/\/(((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/,
            domain: /^([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,8}$/,
            datetime: /^([0-2][0-9]{3})\-([0-1][0-9])\-([0-3][0-9])T([0-5][0-9])\:([0-5][0-9])\:([0-5][0-9])(Z|([\-\+]([0-1][0-9])\:00))$/,
            date: /(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))$/,
            time: /^(0[0-9]|1[0-9]|2[0-3])(:[0-5][0-9]){2}$/,
            dateISO: /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/,
            month_day_year: /^(0[1-9]|1[012])[- \/.](0[1-9]|[12][0-9]|3[01])[- \/.]\d{4}$/,
            day_month_year: /^(0[1-9]|[12][0-9]|3[01])[- \/.](0[1-9]|1[012])[- \/.]\d{4}$/,
            color: /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/
        },
        validators: {
            equalTo: function(el, required, parent) {
                return $("#" + el.attr("data-equalto")).val() === el.val();
            }
        }
    }, Foundation.plugin(Abide, "Abide");
}(jQuery);

var _createClass = function() {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
            "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    return function(Constructor, protoProps, staticProps) {
        return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
        Constructor;
    };
}();

!function($) {
    var Accordion = function() {
        function Accordion(element, options) {
            _classCallCheck(this, Accordion), this.$element = element, this.options = $.extend({}, Accordion.defaults, this.$element.data(), options), 
            this._init(), Foundation.registerPlugin(this, "Accordion"), Foundation.Keyboard.register("Accordion", {
                ENTER: "toggle",
                SPACE: "toggle",
                ARROW_DOWN: "next",
                ARROW_UP: "previous"
            });
        }
        return _createClass(Accordion, [ {
            key: "_init",
            value: function() {
                this.$element.attr("role", "tablist"), this.$tabs = this.$element.children("li"), 
                0 === this.$tabs.length && (this.$tabs = this.$element.children("[data-accordion-item]")), 
                this.$tabs.each(function(idx, el) {
                    var $el = $(el), $content = $el.find("[data-tab-content]"), id = $content[0].id || Foundation.GetYoDigits(6, "accordion"), linkId = el.id || id + "-label";
                    $el.find("a:first").attr({
                        "aria-controls": id,
                        role: "tab",
                        id: linkId,
                        "aria-expanded": !1,
                        "aria-selected": !1
                    }), $content.attr({
                        role: "tabpanel",
                        "aria-labelledby": linkId,
                        "aria-hidden": !0,
                        id: id
                    });
                });
                var $initActive = this.$element.find(".is-active").children("[data-tab-content]");
                $initActive.length && this.down($initActive, !0), this._events();
            }
        }, {
            key: "_events",
            value: function() {
                var _this = this;
                this.$tabs.each(function() {
                    var $elem = $(this), $tabContent = $elem.children("[data-tab-content]");
                    $tabContent.length && $elem.children("a").off("click.zf.accordion keydown.zf.accordion").on("click.zf.accordion", function(e) {
                        e.preventDefault(), $elem.hasClass("is-active") ? (_this.options.allowAllClosed || $elem.siblings().hasClass("is-active")) && _this.up($tabContent) : _this.down($tabContent);
                    }).on("keydown.zf.accordion", function(e) {
                        Foundation.Keyboard.handleKey(e, "Accordion", {
                            toggle: function() {
                                _this.toggle($tabContent);
                            },
                            next: function() {
                                $elem.next().find("a").focus().trigger("click.zf.accordion");
                            },
                            previous: function() {
                                $elem.prev().find("a").focus().trigger("click.zf.accordion");
                            },
                            handled: function() {
                                e.preventDefault(), e.stopPropagation();
                            }
                        });
                    });
                });
            }
        }, {
            key: "toggle",
            value: function($target) {
                if ($target.parent().hasClass("is-active")) {
                    if (!this.options.allowAllClosed && !$target.parent().siblings().hasClass("is-active")) return;
                    this.up($target);
                } else this.down($target);
            }
        }, {
            key: "down",
            value: function($target, firstTime) {
                var _this = this;
                if (!this.options.multiExpand && !firstTime) {
                    var $currentActive = this.$element.find(".is-active").children("[data-tab-content]");
                    $currentActive.length && this.up($currentActive);
                }
                $target.attr("aria-hidden", !1).parent("[data-tab-content]").addBack().parent().addClass("is-active"), 
                $target.slideDown(_this.options.slideSpeed, function() {
                    _this.$element.trigger("down.zf.accordion", [ $target ]);
                }), $("#" + $target.attr("aria-labelledby")).attr({
                    "aria-expanded": !0,
                    "aria-selected": !0
                });
            }
        }, {
            key: "up",
            value: function($target) {
                var $aunts = $target.parent().siblings(), _this = this, canClose = this.options.multiExpand ? $aunts.hasClass("is-active") : $target.parent().hasClass("is-active");
                (this.options.allowAllClosed || canClose) && ($target.slideUp(_this.options.slideSpeed, function() {
                    _this.$element.trigger("up.zf.accordion", [ $target ]);
                }), $target.attr("aria-hidden", !0).parent().removeClass("is-active"), $("#" + $target.attr("aria-labelledby")).attr({
                    "aria-expanded": !1,
                    "aria-selected": !1
                }));
            }
        }, {
            key: "destroy",
            value: function() {
                this.$element.find("[data-tab-content]").slideUp(0).css("display", ""), this.$element.find("a").off(".zf.accordion"), 
                Foundation.unregisterPlugin(this);
            }
        } ]), Accordion;
    }();
    Accordion.defaults = {
        slideSpeed: 250,
        multiExpand: !1,
        allowAllClosed: !1
    }, Foundation.plugin(Accordion, "Accordion");
}(jQuery);

var _createClass = function() {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
            "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    return function(Constructor, protoProps, staticProps) {
        return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
        Constructor;
    };
}();

!function($) {
    var AccordionMenu = function() {
        function AccordionMenu(element, options) {
            _classCallCheck(this, AccordionMenu), this.$element = element, this.options = $.extend({}, AccordionMenu.defaults, this.$element.data(), options), 
            Foundation.Nest.Feather(this.$element, "accordion"), this._init(), Foundation.registerPlugin(this, "AccordionMenu"), 
            Foundation.Keyboard.register("AccordionMenu", {
                ENTER: "toggle",
                SPACE: "toggle",
                ARROW_RIGHT: "open",
                ARROW_UP: "up",
                ARROW_DOWN: "down",
                ARROW_LEFT: "close",
                ESCAPE: "closeAll",
                TAB: "down",
                SHIFT_TAB: "up"
            });
        }
        return _createClass(AccordionMenu, [ {
            key: "_init",
            value: function() {
                this.$element.find("[data-submenu]").not(".is-active").slideUp(0), this.$element.attr({
                    role: "tablist",
                    "aria-multiselectable": this.options.multiOpen
                }), this.$menuLinks = this.$element.find(".is-accordion-submenu-parent"), this.$menuLinks.each(function() {
                    var linkId = this.id || Foundation.GetYoDigits(6, "acc-menu-link"), $elem = $(this), $sub = $elem.children("[data-submenu]"), subId = $sub[0].id || Foundation.GetYoDigits(6, "acc-menu"), isActive = $sub.hasClass("is-active");
                    $elem.attr({
                        "aria-controls": subId,
                        "aria-expanded": isActive,
                        role: "tab",
                        id: linkId
                    }), $sub.attr({
                        "aria-labelledby": linkId,
                        "aria-hidden": !isActive,
                        role: "tabpanel",
                        id: subId
                    });
                });
                var initPanes = this.$element.find(".is-active");
                if (initPanes.length) {
                    var _this = this;
                    initPanes.each(function() {
                        _this.down($(this));
                    });
                }
                this._events();
            }
        }, {
            key: "_events",
            value: function() {
                var _this = this;
                this.$element.find("li").each(function() {
                    var $submenu = $(this).children("[data-submenu]");
                    $submenu.length && $(this).children("a").off("click.zf.accordionMenu").on("click.zf.accordionMenu", function(e) {
                        e.preventDefault(), _this.toggle($submenu);
                    });
                }).on("keydown.zf.accordionmenu", function(e) {
                    var $prevElement, $nextElement, $element = $(this), $elements = $element.parent("ul").children("li"), $target = $element.children("[data-submenu]");
                    $elements.each(function(i) {
                        return $(this).is($element) ? ($prevElement = $elements.eq(Math.max(0, i - 1)), 
                        $nextElement = $elements.eq(Math.min(i + 1, $elements.length - 1)), $(this).children("[data-submenu]:visible").length && ($nextElement = $element.find("li:first-child")), 
                        $(this).is(":first-child") ? $prevElement = $element.parents("li").first() : $prevElement.children("[data-submenu]:visible").length && ($prevElement = $prevElement.find("li:last-child")), 
                        void ($(this).is(":last-child") && ($nextElement = $element.parents("li").first().next("li")))) : void 0;
                    }), Foundation.Keyboard.handleKey(e, "AccordionMenu", {
                        open: function() {
                            $target.is(":hidden") && (_this.down($target), $target.find("li").first().focus());
                        },
                        close: function() {
                            $target.length && !$target.is(":hidden") ? _this.up($target) : $element.parent("[data-submenu]").length && (_this.up($element.parent("[data-submenu]")), 
                            $element.parents("li").first().focus());
                        },
                        up: function() {
                            $prevElement.focus();
                        },
                        down: function() {
                            $nextElement.focus();
                        },
                        toggle: function() {
                            $element.children("[data-submenu]").length && _this.toggle($element.children("[data-submenu]"));
                        },
                        closeAll: function() {
                            _this.hideAll();
                        },
                        handled: function() {
                            e.preventDefault(), e.stopImmediatePropagation();
                        }
                    });
                });
            }
        }, {
            key: "hideAll",
            value: function() {
                this.$element.find("[data-submenu]").slideUp(this.options.slideSpeed);
            }
        }, {
            key: "toggle",
            value: function($target) {
                $target.is(":animated") || ($target.is(":hidden") ? this.down($target) : this.up($target));
            }
        }, {
            key: "down",
            value: function($target) {
                var _this = this;
                this.options.multiOpen || this.up(this.$element.find(".is-active").not($target.parentsUntil(this.$element).add($target))), 
                $target.addClass("is-active").attr({
                    "aria-hidden": !1
                }).parent(".is-accordion-submenu-parent").attr({
                    "aria-expanded": !0
                }), Foundation.Move(this.options.slideSpeed, $target, function() {
                    $target.slideDown(_this.options.slideSpeed, function() {
                        _this.$element.trigger("down.zf.accordionMenu", [ $target ]);
                    });
                });
            }
        }, {
            key: "up",
            value: function($target) {
                var _this = this;
                Foundation.Move(this.options.slideSpeed, $target, function() {
                    $target.slideUp(_this.options.slideSpeed, function() {
                        _this.$element.trigger("up.zf.accordionMenu", [ $target ]);
                    });
                });
                var $menus = $target.find("[data-submenu]").slideUp(0).addBack().attr("aria-hidden", !0);
                $menus.parent(".is-accordion-submenu-parent").attr("aria-expanded", !1);
            }
        }, {
            key: "destroy",
            value: function() {
                this.$element.find("[data-submenu]").slideDown(0).css("display", ""), this.$element.find("a").off("click.zf.accordionMenu"), 
                Foundation.Nest.Burn(this.$element, "accordion"), Foundation.unregisterPlugin(this);
            }
        } ]), AccordionMenu;
    }();
    AccordionMenu.defaults = {
        slideSpeed: 250,
        multiOpen: !0
    }, Foundation.plugin(AccordionMenu, "AccordionMenu");
}(jQuery);

var _createClass = function() {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
            "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    return function(Constructor, protoProps, staticProps) {
        return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
        Constructor;
    };
}();

!function($) {
    var Drilldown = function() {
        function Drilldown(element, options) {
            _classCallCheck(this, Drilldown), this.$element = element, this.options = $.extend({}, Drilldown.defaults, this.$element.data(), options), 
            Foundation.Nest.Feather(this.$element, "drilldown"), this._init(), Foundation.registerPlugin(this, "Drilldown"), 
            Foundation.Keyboard.register("Drilldown", {
                ENTER: "open",
                SPACE: "open",
                ARROW_RIGHT: "next",
                ARROW_UP: "up",
                ARROW_DOWN: "down",
                ARROW_LEFT: "previous",
                ESCAPE: "close",
                TAB: "down",
                SHIFT_TAB: "up"
            });
        }
        return _createClass(Drilldown, [ {
            key: "_init",
            value: function() {
                this.$submenuAnchors = this.$element.find("li.is-drilldown-submenu-parent"), this.$submenus = this.$submenuAnchors.children("[data-submenu]"), 
                this.$menuItems = this.$element.find("li").not(".js-drilldown-back").attr("role", "menuitem"), 
                this._prepareMenu(), this._keyboardEvents();
            }
        }, {
            key: "_prepareMenu",
            value: function() {
                var _this = this;
                this.$submenuAnchors.each(function() {
                    var $sub = $(this), $link = $sub.find("a:first");
                    _this.options.parentLink && $link.clone().prependTo($sub.children("[data-submenu]")).wrap('<li class="is-submenu-parent-item is-submenu-item is-drilldown-submenu-item" role="menu-item"></li>'), 
                    $link.data("savedHref", $link.attr("href")).removeAttr("href"), $sub.children("[data-submenu]").attr({
                        "aria-hidden": !0,
                        tabindex: 0,
                        role: "menu"
                    }), _this._events($sub);
                }), this.$submenus.each(function() {
                    var $menu = $(this), $back = $menu.find(".js-drilldown-back");
                    $back.length || $menu.prepend(_this.options.backButton), _this._back($menu);
                }), this.$element.parent().hasClass("is-drilldown") || (this.$wrapper = $(this.options.wrapper).addClass("is-drilldown").css(this._getMaxDims()), 
                this.$element.wrap(this.$wrapper));
            }
        }, {
            key: "_events",
            value: function($elem) {
                var _this = this;
                $elem.off("click.zf.drilldown").on("click.zf.drilldown", function(e) {
                    if ($(e.target).parentsUntil("ul", "li").hasClass("is-drilldown-submenu-parent") && (e.stopImmediatePropagation(), 
                    e.preventDefault()), _this._show($elem), _this.options.closeOnClick) {
                        var $body = $("body").not(_this.$wrapper);
                        $body.off(".zf.drilldown").on("click.zf.drilldown", function(e) {
                            e.preventDefault(), _this._hideAll(), $body.off(".zf.drilldown");
                        });
                    }
                });
            }
        }, {
            key: "_keyboardEvents",
            value: function() {
                var _this = this;
                this.$menuItems.add(this.$element.find(".js-drilldown-back")).on("keydown.zf.drilldown", function(e) {
                    var $prevElement, $nextElement, $element = $(this), $elements = $element.parent("ul").children("li");
                    $elements.each(function(i) {
                        return $(this).is($element) ? ($prevElement = $elements.eq(Math.max(0, i - 1)), 
                        void ($nextElement = $elements.eq(Math.min(i + 1, $elements.length - 1)))) : void 0;
                    }), Foundation.Keyboard.handleKey(e, "Drilldown", {
                        next: function() {
                            $element.is(_this.$submenuAnchors) && (_this._show($element), $element.on(Foundation.transitionend($element), function() {
                                $element.find("ul li").filter(_this.$menuItems).first().focus();
                            }));
                        },
                        previous: function() {
                            _this._hide($element.parent("ul")), $element.parent("ul").on(Foundation.transitionend($element), function() {
                                setTimeout(function() {
                                    $element.parent("ul").parent("li").focus();
                                }, 1);
                            });
                        },
                        up: function() {
                            $prevElement.focus();
                        },
                        down: function() {
                            $nextElement.focus();
                        },
                        close: function() {
                            _this._back();
                        },
                        open: function() {
                            $element.is(_this.$menuItems) ? $element.is(_this.$submenuAnchors) && (_this._show($element), 
                            setTimeout(function() {
                                $element.find("ul li").filter(_this.$menuItems).first().focus();
                            }, 1)) : (_this._hide($element.parent("ul")), setTimeout(function() {
                                $element.parent("ul").parent("li").focus();
                            }, 1));
                        },
                        handled: function() {
                            e.preventDefault(), e.stopImmediatePropagation();
                        }
                    });
                });
            }
        }, {
            key: "_hideAll",
            value: function() {
                var $elem = this.$element.find(".is-drilldown-submenu.is-active").addClass("is-closing");
                $elem.one(Foundation.transitionend($elem), function(e) {
                    $elem.removeClass("is-active is-closing");
                }), this.$element.trigger("closed.zf.drilldown");
            }
        }, {
            key: "_back",
            value: function($elem) {
                var _this = this;
                $elem.off("click.zf.drilldown"), $elem.children(".js-drilldown-back").on("click.zf.drilldown", function(e) {
                    e.stopImmediatePropagation(), _this._hide($elem);
                });
            }
        }, {
            key: "_menuLinkEvents",
            value: function() {
                var _this = this;
                this.$menuItems.not(".is-drilldown-submenu-parent").off("click.zf.drilldown").on("click.zf.drilldown", function(e) {
                    setTimeout(function() {
                        _this._hideAll();
                    }, 0);
                });
            }
        }, {
            key: "_show",
            value: function($elem) {
                $elem.children("[data-submenu]").addClass("is-active"), this.$element.trigger("open.zf.drilldown", [ $elem ]);
            }
        }, {
            key: "_hide",
            value: function($elem) {
                $elem.addClass("is-closing").one(Foundation.transitionend($elem), function() {
                    $elem.removeClass("is-active is-closing"), $elem.blur();
                }), $elem.trigger("hide.zf.drilldown", [ $elem ]);
            }
        }, {
            key: "_getMaxDims",
            value: function() {
                var max = 0, result = {};
                return this.$submenus.add(this.$element).each(function() {
                    var numOfElems = $(this).children("li").length;
                    max = numOfElems > max ? numOfElems : max;
                }), result["min-height"] = max * this.$menuItems[0].getBoundingClientRect().height + "px", 
                result["max-width"] = this.$element[0].getBoundingClientRect().width + "px", result;
            }
        }, {
            key: "destroy",
            value: function() {
                this._hideAll(), Foundation.Nest.Burn(this.$element, "drilldown"), this.$element.unwrap().find(".js-drilldown-back, .is-submenu-parent-item").remove().end().find(".is-active, .is-closing, .is-drilldown-submenu").removeClass("is-active is-closing is-drilldown-submenu").end().find("[data-submenu]").removeAttr("aria-hidden tabindex role").off(".zf.drilldown").end().off("zf.drilldown"), 
                this.$element.find("a").each(function() {
                    var $link = $(this);
                    $link.data("savedHref") && $link.attr("href", $link.data("savedHref")).removeData("savedHref");
                }), Foundation.unregisterPlugin(this);
            }
        } ]), Drilldown;
    }();
    Drilldown.defaults = {
        backButton: '<li class="js-drilldown-back"><a>Back</a></li>',
        wrapper: "<div></div>",
        parentLink: !1,
        closeOnClick: !1
    }, Foundation.plugin(Drilldown, "Drilldown");
}(jQuery);

var _createClass = function() {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
            "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    return function(Constructor, protoProps, staticProps) {
        return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
        Constructor;
    };
}();

!function($) {
    var Dropdown = function() {
        function Dropdown(element, options) {
            _classCallCheck(this, Dropdown), this.$element = element, this.options = $.extend({}, Dropdown.defaults, this.$element.data(), options), 
            this._init(), Foundation.registerPlugin(this, "Dropdown"), Foundation.Keyboard.register("Dropdown", {
                ENTER: "open",
                SPACE: "open",
                ESCAPE: "close",
                TAB: "tab_forward",
                SHIFT_TAB: "tab_backward"
            });
        }
        return _createClass(Dropdown, [ {
            key: "_init",
            value: function() {
                var $id = this.$element.attr("id");
                this.$anchor = $('[data-toggle="' + $id + '"]') || $('[data-open="' + $id + '"]'), 
                this.$anchor.attr({
                    "aria-controls": $id,
                    "data-is-focus": !1,
                    "data-yeti-box": $id,
                    "aria-haspopup": !0,
                    "aria-expanded": !1
                }), this.options.positionClass = this.getPositionClass(), this.counter = 4, this.usedPositions = [], 
                this.$element.attr({
                    "aria-hidden": "true",
                    "data-yeti-box": $id,
                    "data-resize": $id,
                    "aria-labelledby": this.$anchor[0].id || Foundation.GetYoDigits(6, "dd-anchor")
                }), this._events();
            }
        }, {
            key: "getPositionClass",
            value: function() {
                var position = this.$element[0].className.match(/\b(top|left|right)\b/g);
                return position = position ? position[0] : "";
            }
        }, {
            key: "_reposition",
            value: function(position) {
                this.usedPositions.push(position ? position : "bottom"), !position && this.usedPositions.indexOf("top") < 0 ? this.$element.addClass("top") : "top" === position && this.usedPositions.indexOf("bottom") < 0 ? this.$element.removeClass(position) : "left" === position && this.usedPositions.indexOf("right") < 0 ? this.$element.removeClass(position).addClass("right") : "right" === position && this.usedPositions.indexOf("left") < 0 ? this.$element.removeClass(position).addClass("left") : !position && this.usedPositions.indexOf("top") > -1 && this.usedPositions.indexOf("left") < 0 ? this.$element.addClass("left") : "top" === position && this.usedPositions.indexOf("bottom") > -1 && this.usedPositions.indexOf("left") < 0 ? this.$element.removeClass(position).addClass("left") : "left" === position && this.usedPositions.indexOf("right") > -1 && this.usedPositions.indexOf("bottom") < 0 ? this.$element.removeClass(position) : "right" === position && this.usedPositions.indexOf("left") > -1 && this.usedPositions.indexOf("bottom") < 0 ? this.$element.removeClass(position) : this.$element.removeClass(position), 
                this.classChanged = !0, this.counter--;
            }
        }, {
            key: "_setPosition",
            value: function() {
                if ("false" === this.$anchor.attr("aria-expanded")) return !1;
                var position = this.getPositionClass(), $eleDims = Foundation.Box.GetDimensions(this.$element), direction = (Foundation.Box.GetDimensions(this.$anchor), 
                "left" === position ? "left" : "right" === position ? "left" : "top"), param = "top" === direction ? "height" : "width";
                "height" === param ? this.options.vOffset : this.options.hOffset;
                if ($eleDims.width >= $eleDims.windowDims.width || !this.counter && !Foundation.Box.ImNotTouchingYou(this.$element)) return this.$element.offset(Foundation.Box.GetOffsets(this.$element, this.$anchor, "center bottom", this.options.vOffset, this.options.hOffset, !0)).css({
                    width: $eleDims.windowDims.width - 2 * this.options.hOffset,
                    height: "auto"
                }), this.classChanged = !0, !1;
                for (this.$element.offset(Foundation.Box.GetOffsets(this.$element, this.$anchor, position, this.options.vOffset, this.options.hOffset)); !Foundation.Box.ImNotTouchingYou(this.$element) && this.counter; ) this._reposition(position), 
                this._setPosition();
            }
        }, {
            key: "_events",
            value: function() {
                var _this = this;
                this.$element.on({
                    "open.zf.trigger": this.open.bind(this),
                    "close.zf.trigger": this.close.bind(this),
                    "toggle.zf.trigger": this.toggle.bind(this),
                    "resizeme.zf.trigger": this._setPosition.bind(this)
                }), this.options.hover && (this.$anchor.off("mouseenter.zf.dropdown mouseleave.zf.dropdown").on("mouseenter.zf.dropdown", function() {
                    clearTimeout(_this.timeout), _this.timeout = setTimeout(function() {
                        _this.open(), _this.$anchor.data("hover", !0);
                    }, _this.options.hoverDelay);
                }).on("mouseleave.zf.dropdown", function() {
                    clearTimeout(_this.timeout), _this.timeout = setTimeout(function() {
                        _this.close(), _this.$anchor.data("hover", !1);
                    }, _this.options.hoverDelay);
                }), this.options.hoverPane && this.$element.off("mouseenter.zf.dropdown mouseleave.zf.dropdown").on("mouseenter.zf.dropdown", function() {
                    clearTimeout(_this.timeout);
                }).on("mouseleave.zf.dropdown", function() {
                    clearTimeout(_this.timeout), _this.timeout = setTimeout(function() {
                        _this.close(), _this.$anchor.data("hover", !1);
                    }, _this.options.hoverDelay);
                })), this.$anchor.add(this.$element).on("keydown.zf.dropdown", function(e) {
                    var $target = $(this), visibleFocusableElements = Foundation.Keyboard.findFocusable(_this.$element);
                    Foundation.Keyboard.handleKey(e, "Dropdown", {
                        tab_forward: function() {
                            _this.$element.find(":focus").is(visibleFocusableElements.eq(-1)) && (_this.options.trapFocus ? (visibleFocusableElements.eq(0).focus(), 
                            e.preventDefault()) : _this.close());
                        },
                        tab_backward: function() {
                            (_this.$element.find(":focus").is(visibleFocusableElements.eq(0)) || _this.$element.is(":focus")) && (_this.options.trapFocus ? (visibleFocusableElements.eq(-1).focus(), 
                            e.preventDefault()) : _this.close());
                        },
                        open: function() {
                            $target.is(_this.$anchor) && (_this.open(), _this.$element.attr("tabindex", -1).focus(), 
                            e.preventDefault());
                        },
                        close: function() {
                            _this.close(), _this.$anchor.focus();
                        }
                    });
                });
            }
        }, {
            key: "_addBodyHandler",
            value: function() {
                var $body = $(document.body).not(this.$element), _this = this;
                $body.off("click.zf.dropdown").on("click.zf.dropdown", function(e) {
                    _this.$anchor.is(e.target) || _this.$anchor.find(e.target).length || _this.$element.find(e.target).length || (_this.close(), 
                    $body.off("click.zf.dropdown"));
                });
            }
        }, {
            key: "open",
            value: function() {
                if (this.$element.trigger("closeme.zf.dropdown", this.$element.attr("id")), this.$anchor.addClass("hover").attr({
                    "aria-expanded": !0
                }), this._setPosition(), this.$element.addClass("is-open").attr({
                    "aria-hidden": !1
                }), this.options.autoFocus) {
                    var $focusable = Foundation.Keyboard.findFocusable(this.$element);
                    $focusable.length && $focusable.eq(0).focus();
                }
                this.options.closeOnClick && this._addBodyHandler(), this.$element.trigger("show.zf.dropdown", [ this.$element ]);
            }
        }, {
            key: "close",
            value: function() {
                if (!this.$element.hasClass("is-open")) return !1;
                if (this.$element.removeClass("is-open").attr({
                    "aria-hidden": !0
                }), this.$anchor.removeClass("hover").attr("aria-expanded", !1), this.classChanged) {
                    var curPositionClass = this.getPositionClass();
                    curPositionClass && this.$element.removeClass(curPositionClass), this.$element.addClass(this.options.positionClass).css({
                        height: "",
                        width: ""
                    }), this.classChanged = !1, this.counter = 4, this.usedPositions.length = 0;
                }
                this.$element.trigger("hide.zf.dropdown", [ this.$element ]);
            }
        }, {
            key: "toggle",
            value: function() {
                if (this.$element.hasClass("is-open")) {
                    if (this.$anchor.data("hover")) return;
                    this.close();
                } else this.open();
            }
        }, {
            key: "destroy",
            value: function() {
                this.$element.off(".zf.trigger").hide(), this.$anchor.off(".zf.dropdown"), Foundation.unregisterPlugin(this);
            }
        } ]), Dropdown;
    }();
    Dropdown.defaults = {
        hoverDelay: 250,
        hover: !1,
        hoverPane: !1,
        vOffset: 1,
        hOffset: 1,
        positionClass: "",
        trapFocus: !1,
        autoFocus: !1,
        closeOnClick: !1
    }, Foundation.plugin(Dropdown, "Dropdown");
}(jQuery);

var _createClass = function() {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
            "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    return function(Constructor, protoProps, staticProps) {
        return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
        Constructor;
    };
}();

!function($) {
    var DropdownMenu = function() {
        function DropdownMenu(element, options) {
            _classCallCheck(this, DropdownMenu), this.$element = element, this.options = $.extend({}, DropdownMenu.defaults, this.$element.data(), options), 
            Foundation.Nest.Feather(this.$element, "dropdown"), this._init(), Foundation.registerPlugin(this, "DropdownMenu"), 
            Foundation.Keyboard.register("DropdownMenu", {
                ENTER: "open",
                SPACE: "open",
                ARROW_RIGHT: "next",
                ARROW_UP: "up",
                ARROW_DOWN: "down",
                ARROW_LEFT: "previous",
                ESCAPE: "close"
            });
        }
        return _createClass(DropdownMenu, [ {
            key: "_init",
            value: function() {
                var subs = this.$element.find("li.is-dropdown-submenu-parent");
                this.$element.children(".is-dropdown-submenu-parent").children(".is-dropdown-submenu").addClass("first-sub"), 
                this.$menuItems = this.$element.find('[role="menuitem"]'), this.$tabs = this.$element.children('[role="menuitem"]'), 
                this.$tabs.find("ul.is-dropdown-submenu").addClass(this.options.verticalClass), 
                this.$element.hasClass(this.options.rightClass) || "right" === this.options.alignment || Foundation.rtl() ? (this.options.alignment = "right", 
                subs.addClass("opens-left")) : subs.addClass("opens-right"), this.changed = !1, 
                this._events();
            }
        }, {
            key: "_events",
            value: function() {
                var _this = this, hasTouch = "ontouchstart" in window || "undefined" != typeof window.ontouchstart, parClass = "is-dropdown-submenu-parent";
                (this.options.clickOpen || hasTouch) && this.$menuItems.on("click.zf.dropdownmenu touchstart.zf.dropdownmenu", function(e) {
                    var $elem = $(e.target).parentsUntil("ul", "." + parClass), hasSub = $elem.hasClass(parClass), hasClicked = "true" === $elem.attr("data-is-click");
                    $elem.children(".is-dropdown-submenu");
                    if (hasSub) if (hasClicked) {
                        if (!_this.options.closeOnClick || !_this.options.clickOpen && !hasTouch || _this.options.forceFollow && hasTouch) return;
                        e.stopImmediatePropagation(), e.preventDefault(), _this._hide($elem);
                    } else e.preventDefault(), e.stopImmediatePropagation(), _this._show($elem.children(".is-dropdown-submenu")), 
                    $elem.add($elem.parentsUntil(_this.$element, "." + parClass)).attr("data-is-click", !0);
                }), this.options.disableHover || this.$menuItems.on("mouseenter.zf.dropdownmenu", function(e) {
                    e.stopImmediatePropagation();
                    var $elem = $(this), hasSub = $elem.hasClass(parClass);
                    hasSub && (clearTimeout(_this.delay), _this.delay = setTimeout(function() {
                        _this._show($elem.children(".is-dropdown-submenu"));
                    }, _this.options.hoverDelay));
                }).on("mouseleave.zf.dropdownmenu", function(e) {
                    var $elem = $(this), hasSub = $elem.hasClass(parClass);
                    if (hasSub && _this.options.autoclose) {
                        if ("true" === $elem.attr("data-is-click") && _this.options.clickOpen) return !1;
                        clearTimeout(_this.delay), _this.delay = setTimeout(function() {
                            _this._hide($elem);
                        }, _this.options.closingTime);
                    }
                }), this.$menuItems.on("keydown.zf.dropdownmenu", function(e) {
                    var $prevElement, $nextElement, $element = $(e.target).parentsUntil("ul", '[role="menuitem"]'), isTab = _this.$tabs.index($element) > -1, $elements = isTab ? _this.$tabs : $element.siblings("li").add($element);
                    $elements.each(function(i) {
                        return $(this).is($element) ? ($prevElement = $elements.eq(i - 1), void ($nextElement = $elements.eq(i + 1))) : void 0;
                    });
                    var nextSibling = function() {
                        $element.is(":last-child") || $nextElement.children("a:first").focus();
                    }, prevSibling = function() {
                        $prevElement.children("a:first").focus();
                    }, openSub = function() {
                        var $sub = $element.children("ul.is-dropdown-submenu");
                        $sub.length && (_this._show($sub), $element.find("li > a:first").focus());
                    }, closeSub = function() {
                        var close = $element.parent("ul").parent("li");
                        close.children("a:first").focus(), _this._hide(close);
                    }, functions = {
                        open: openSub,
                        close: function() {
                            _this._hide(_this.$element), _this.$menuItems.find("a:first").focus();
                        },
                        handled: function() {
                            e.preventDefault(), e.stopImmediatePropagation();
                        }
                    };
                    isTab ? _this.vertical ? "left" === _this.options.alignment ? $.extend(functions, {
                        down: nextSibling,
                        up: prevSibling,
                        next: openSub,
                        previous: closeSub
                    }) : $.extend(functions, {
                        down: nextSibling,
                        up: prevSibling,
                        next: closeSub,
                        previous: openSub
                    }) : $.extend(functions, {
                        next: nextSibling,
                        previous: prevSibling,
                        down: openSub,
                        up: closeSub
                    }) : "left" === _this.options.alignment ? $.extend(functions, {
                        next: openSub,
                        previous: closeSub,
                        down: nextSibling,
                        up: prevSibling
                    }) : $.extend(functions, {
                        next: closeSub,
                        previous: openSub,
                        down: nextSibling,
                        up: prevSibling
                    }), Foundation.Keyboard.handleKey(e, "DropdownMenu", functions);
                });
            }
        }, {
            key: "_addBodyHandler",
            value: function() {
                var $body = $(document.body), _this = this;
                $body.off("mouseup.zf.dropdownmenu touchend.zf.dropdownmenu").on("mouseup.zf.dropdownmenu touchend.zf.dropdownmenu", function(e) {
                    var $link = _this.$element.find(e.target);
                    $link.length || (_this._hide(), $body.off("mouseup.zf.dropdownmenu touchend.zf.dropdownmenu"));
                });
            }
        }, {
            key: "_show",
            value: function($sub) {
                var idx = this.$tabs.index(this.$tabs.filter(function(i, el) {
                    return $(el).find($sub).length > 0;
                })), $sibs = $sub.parent("li.is-dropdown-submenu-parent").siblings("li.is-dropdown-submenu-parent");
                this._hide($sibs, idx), $sub.css("visibility", "hidden").addClass("js-dropdown-active").attr({
                    "aria-hidden": !1
                }).parent("li.is-dropdown-submenu-parent").addClass("is-active").attr({
                    "aria-expanded": !0
                });
                var clear = Foundation.Box.ImNotTouchingYou($sub, null, !0);
                if (!clear) {
                    var oldClass = "left" === this.options.alignment ? "-right" : "-left", $parentLi = $sub.parent(".is-dropdown-submenu-parent");
                    $parentLi.removeClass("opens" + oldClass).addClass("opens-" + this.options.alignment), 
                    clear = Foundation.Box.ImNotTouchingYou($sub, null, !0), clear || $parentLi.removeClass("opens-" + this.options.alignment).addClass("opens-inner"), 
                    this.changed = !0;
                }
                $sub.css("visibility", ""), this.options.closeOnClick && this._addBodyHandler(), 
                this.$element.trigger("show.zf.dropdownmenu", [ $sub ]);
            }
        }, {
            key: "_hide",
            value: function($elem, idx) {
                var $toClose;
                $toClose = $elem && $elem.length ? $elem : void 0 !== idx ? this.$tabs.not(function(i, el) {
                    return i === idx;
                }) : this.$element;
                var somethingToClose = $toClose.hasClass("is-active") || $toClose.find(".is-active").length > 0;
                if (somethingToClose) {
                    if ($toClose.find("li.is-active").add($toClose).attr({
                        "aria-expanded": !1,
                        "data-is-click": !1
                    }).removeClass("is-active"), $toClose.find("ul.js-dropdown-active").attr({
                        "aria-hidden": !0
                    }).removeClass("js-dropdown-active"), this.changed || $toClose.find("opens-inner").length) {
                        var oldClass = "left" === this.options.alignment ? "right" : "left";
                        $toClose.find("li.is-dropdown-submenu-parent").add($toClose).removeClass("opens-inner opens-" + this.options.alignment).addClass("opens-" + oldClass), 
                        this.changed = !1;
                    }
                    this.$element.trigger("hide.zf.dropdownmenu", [ $toClose ]);
                }
            }
        }, {
            key: "destroy",
            value: function() {
                this.$menuItems.off(".zf.dropdownmenu").removeAttr("data-is-click").removeClass("is-right-arrow is-left-arrow is-down-arrow opens-right opens-left opens-inner"), 
                $(document.body).off(".zf.dropdownmenu"), Foundation.Nest.Burn(this.$element, "dropdown"), 
                Foundation.unregisterPlugin(this);
            }
        } ]), DropdownMenu;
    }();
    DropdownMenu.defaults = {
        disableHover: !1,
        autoclose: !0,
        hoverDelay: 50,
        clickOpen: !1,
        closingTime: 500,
        alignment: "left",
        closeOnClick: !0,
        verticalClass: "vertical",
        rightClass: "align-right",
        forceFollow: !0
    }, Foundation.plugin(DropdownMenu, "DropdownMenu");
}(jQuery);

var _createClass = function() {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
            "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    return function(Constructor, protoProps, staticProps) {
        return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
        Constructor;
    };
}();

!function($) {
    var Equalizer = function() {
        function Equalizer(element, options) {
            _classCallCheck(this, Equalizer), this.$element = element, this.options = $.extend({}, Equalizer.defaults, this.$element.data(), options), 
            this._init(), Foundation.registerPlugin(this, "Equalizer");
        }
        return _createClass(Equalizer, [ {
            key: "_init",
            value: function() {
                var eqId = this.$element.attr("data-equalizer") || "", $watched = this.$element.find('[data-equalizer-watch="' + eqId + '"]');
                this.$watched = $watched.length ? $watched : this.$element.find("[data-equalizer-watch]"), 
                this.$element.attr("data-resize", eqId || Foundation.GetYoDigits(6, "eq")), this.hasNested = this.$element.find("[data-equalizer]").length > 0, 
                this.isNested = this.$element.parentsUntil(document.body, "[data-equalizer]").length > 0, 
                this.isOn = !1;
                var tooSmall, imgs = this.$element.find("img");
                this.options.equalizeOn ? (tooSmall = this._checkMQ(), $(window).on("changed.zf.mediaquery", this._checkMQ.bind(this))) : this._events(), 
                (void 0 !== tooSmall && tooSmall === !1 || void 0 === tooSmall) && (imgs.length ? Foundation.onImagesLoaded(imgs, this._reflow.bind(this)) : this._reflow());
            }
        }, {
            key: "_pauseEvents",
            value: function() {
                this.isOn = !1, this.$element.off(".zf.equalizer resizeme.zf.trigger");
            }
        }, {
            key: "_events",
            value: function() {
                var _this = this;
                this._pauseEvents(), this.hasNested ? this.$element.on("postequalized.zf.equalizer", function(e) {
                    e.target !== _this.$element[0] && _this._reflow();
                }) : this.$element.on("resizeme.zf.trigger", this._reflow.bind(this)), this.isOn = !0;
            }
        }, {
            key: "_checkMQ",
            value: function() {
                var tooSmall = !Foundation.MediaQuery.atLeast(this.options.equalizeOn);
                return tooSmall ? this.isOn && (this._pauseEvents(), this.$watched.css("height", "auto")) : this.isOn || this._events(), 
                tooSmall;
            }
        }, {
            key: "_killswitch",
            value: function() {}
        }, {
            key: "_reflow",
            value: function() {
                return !this.options.equalizeOnStack && this._isStacked() ? (this.$watched.css("height", "auto"), 
                !1) : void (this.options.equalizeByRow ? this.getHeightsByRow(this.applyHeightByRow.bind(this)) : this.getHeights(this.applyHeight.bind(this)));
            }
        }, {
            key: "_isStacked",
            value: function() {
                return this.$watched[0].offsetTop !== this.$watched[1].offsetTop;
            }
        }, {
            key: "getHeights",
            value: function(cb) {
                for (var heights = [], i = 0, len = this.$watched.length; len > i; i++) this.$watched[i].style.height = "auto", 
                heights.push(this.$watched[i].offsetHeight);
                cb(heights);
            }
        }, {
            key: "getHeightsByRow",
            value: function(cb) {
                var lastElTopOffset = this.$watched.first().offset().top, groups = [], group = 0;
                groups[group] = [];
                for (var i = 0, len = this.$watched.length; len > i; i++) {
                    this.$watched[i].style.height = "auto";
                    var elOffsetTop = $(this.$watched[i]).offset().top;
                    elOffsetTop != lastElTopOffset && (group++, groups[group] = [], lastElTopOffset = elOffsetTop), 
                    groups[group].push([ this.$watched[i], this.$watched[i].offsetHeight ]);
                }
                for (var j = 0, ln = groups.length; ln > j; j++) {
                    var heights = $(groups[j]).map(function() {
                        return this[1];
                    }).get(), max = Math.max.apply(null, heights);
                    groups[j].push(max);
                }
                cb(groups);
            }
        }, {
            key: "applyHeight",
            value: function(heights) {
                var max = Math.max.apply(null, heights);
                this.$element.trigger("preequalized.zf.equalizer"), this.$watched.css("height", max), 
                this.$element.trigger("postequalized.zf.equalizer");
            }
        }, {
            key: "applyHeightByRow",
            value: function(groups) {
                this.$element.trigger("preequalized.zf.equalizer");
                for (var i = 0, len = groups.length; len > i; i++) {
                    var groupsILength = groups[i].length, max = groups[i][groupsILength - 1];
                    if (2 >= groupsILength) $(groups[i][0][0]).css({
                        height: "auto"
                    }); else {
                        this.$element.trigger("preequalizedrow.zf.equalizer");
                        for (var j = 0, lenJ = groupsILength - 1; lenJ > j; j++) $(groups[i][j][0]).css({
                            height: max
                        });
                        this.$element.trigger("postequalizedrow.zf.equalizer");
                    }
                }
                this.$element.trigger("postequalized.zf.equalizer");
            }
        }, {
            key: "destroy",
            value: function() {
                this._pauseEvents(), this.$watched.css("height", "auto"), Foundation.unregisterPlugin(this);
            }
        } ]), Equalizer;
    }();
    Equalizer.defaults = {
        equalizeOnStack: !0,
        equalizeByRow: !1,
        equalizeOn: ""
    }, Foundation.plugin(Equalizer, "Equalizer");
}(jQuery);

var _createClass = function() {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
            "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    return function(Constructor, protoProps, staticProps) {
        return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
        Constructor;
    };
}();

!function($) {
    var Interchange = function() {
        function Interchange(element, options) {
            _classCallCheck(this, Interchange), this.$element = element, this.options = $.extend({}, Interchange.defaults, options), 
            this.rules = [], this.currentPath = "", this._init(), this._events(), Foundation.registerPlugin(this, "Interchange");
        }
        return _createClass(Interchange, [ {
            key: "_init",
            value: function() {
                this._addBreakpoints(), this._generateRules(), this._reflow();
            }
        }, {
            key: "_events",
            value: function() {
                $(window).on("resize.zf.interchange", Foundation.util.throttle(this._reflow.bind(this), 50));
            }
        }, {
            key: "_reflow",
            value: function() {
                var match;
                for (var i in this.rules) {
                    var rule = this.rules[i];
                    window.matchMedia(rule.query).matches && (match = rule);
                }
                match && this.replace(match.path);
            }
        }, {
            key: "_addBreakpoints",
            value: function() {
                for (var i in Foundation.MediaQuery.queries) {
                    var query = Foundation.MediaQuery.queries[i];
                    Interchange.SPECIAL_QUERIES[query.name] = query.value;
                }
            }
        }, {
            key: "_generateRules",
            value: function(element) {
                var rules, rulesList = [];
                rules = this.options.rules ? this.options.rules : this.$element.data("interchange").match(/\[.*?\]/g);
                for (var i in rules) {
                    var rule = rules[i].slice(1, -1).split(", "), path = rule.slice(0, -1).join(""), query = rule[rule.length - 1];
                    Interchange.SPECIAL_QUERIES[query] && (query = Interchange.SPECIAL_QUERIES[query]), 
                    rulesList.push({
                        path: path,
                        query: query
                    });
                }
                this.rules = rulesList;
            }
        }, {
            key: "replace",
            value: function(path) {
                if (this.currentPath !== path) {
                    var _this = this, trigger = "replaced.zf.interchange";
                    "IMG" === this.$element[0].nodeName ? this.$element.attr("src", path).load(function() {
                        _this.currentPath = path;
                    }).trigger(trigger) : path.match(/\.(gif|jpg|jpeg|tiff|png)([?#].*)?/i) ? this.$element.css({
                        "background-image": "url(" + path + ")"
                    }).trigger(trigger) : $.get(path, function(response) {
                        _this.$element.html(response).trigger(trigger), $(response).foundation(), _this.currentPath = path;
                    });
                }
            }
        }, {
            key: "destroy",
            value: function() {}
        } ]), Interchange;
    }();
    Interchange.defaults = {
        rules: null
    }, Interchange.SPECIAL_QUERIES = {
        landscape: "screen and (orientation: landscape)",
        portrait: "screen and (orientation: portrait)",
        retina: "only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (min--moz-device-pixel-ratio: 2), only screen and (-o-min-device-pixel-ratio: 2/1), only screen and (min-device-pixel-ratio: 2), only screen and (min-resolution: 192dpi), only screen and (min-resolution: 2dppx)"
    }, Foundation.plugin(Interchange, "Interchange");
}(jQuery);

var _createClass = function() {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
            "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    return function(Constructor, protoProps, staticProps) {
        return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
        Constructor;
    };
}();

!function($) {
    var Magellan = function() {
        function Magellan(element, options) {
            _classCallCheck(this, Magellan), this.$element = element, this.options = $.extend({}, Magellan.defaults, this.$element.data(), options), 
            this._init(), Foundation.registerPlugin(this, "Magellan");
        }
        return _createClass(Magellan, [ {
            key: "_init",
            value: function() {
                var id = this.$element[0].id || Foundation.GetYoDigits(6, "magellan");
                this.$targets = $("[data-magellan-target]"), this.$links = this.$element.find("a"), 
                this.$element.attr({
                    "data-resize": id,
                    "data-scroll": id,
                    id: id
                }), this.$active = $(), this.scrollPos = parseInt(window.pageYOffset, 10), this._events();
            }
        }, {
            key: "calcPoints",
            value: function() {
                var _this = this, body = document.body, html = document.documentElement;
                this.points = [], this.winHeight = Math.round(Math.max(window.innerHeight, html.clientHeight)), 
                this.docHeight = Math.round(Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight)), 
                this.$targets.each(function() {
                    var $tar = $(this), pt = Math.round($tar.offset().top - _this.options.threshold);
                    $tar.targetPoint = pt, _this.points.push(pt);
                });
            }
        }, {
            key: "_events",
            value: function() {
                var _this = this;
                $("html, body"), {
                    duration: _this.options.animationDuration,
                    easing: _this.options.animationEasing
                };
                $(window).one("load", function() {
                    _this.options.deepLinking && location.hash && _this.scrollToLoc(location.hash), 
                    _this.calcPoints(), _this._updateActive();
                }), this.$element.on({
                    "resizeme.zf.trigger": this.reflow.bind(this),
                    "scrollme.zf.trigger": this._updateActive.bind(this)
                }).on("click.zf.magellan", 'a[href^="#"]', function(e) {
                    e.preventDefault();
                    var arrival = this.getAttribute("href");
                    _this.scrollToLoc(arrival);
                });
            }
        }, {
            key: "scrollToLoc",
            value: function(loc) {
                var scrollPos = Math.round($(loc).offset().top - this.options.threshold / 2 - this.options.barOffset);
                $("html, body").stop(!0).animate({
                    scrollTop: scrollPos
                }, this.options.animationDuration, this.options.animationEasing);
            }
        }, {
            key: "reflow",
            value: function() {
                this.calcPoints(), this._updateActive();
            }
        }, {
            key: "_updateActive",
            value: function() {
                var curIdx, winPos = parseInt(window.pageYOffset, 10);
                if (winPos + this.winHeight === this.docHeight) curIdx = this.points.length - 1; else if (winPos < this.points[0]) curIdx = 0; else {
                    var isDown = this.scrollPos < winPos, _this = this, curVisible = this.points.filter(function(p, i) {
                        return isDown ? winPos >= p : p - _this.options.threshold <= winPos;
                    });
                    curIdx = curVisible.length ? curVisible.length - 1 : 0;
                }
                if (this.$active.removeClass(this.options.activeClass), this.$active = this.$links.eq(curIdx).addClass(this.options.activeClass), 
                this.options.deepLinking) {
                    var hash = this.$active[0].getAttribute("href");
                    window.history.pushState ? window.history.pushState(null, null, hash) : window.location.hash = hash;
                }
                this.scrollPos = winPos, this.$element.trigger("update.zf.magellan", [ this.$active ]);
            }
        }, {
            key: "destroy",
            value: function() {
                if (this.$element.off(".zf.trigger .zf.magellan").find("." + this.options.activeClass).removeClass(this.options.activeClass), 
                this.options.deepLinking) {
                    var hash = this.$active[0].getAttribute("href");
                    window.location.hash.replace(hash, "");
                }
                Foundation.unregisterPlugin(this);
            }
        } ]), Magellan;
    }();
    Magellan.defaults = {
        animationDuration: 500,
        animationEasing: "linear",
        threshold: 50,
        activeClass: "active",
        deepLinking: !1,
        barOffset: 0
    }, Foundation.plugin(Magellan, "Magellan");
}(jQuery);

var _createClass = function() {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
            "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    return function(Constructor, protoProps, staticProps) {
        return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
        Constructor;
    };
}();

!function($) {
    var OffCanvas = function() {
        function OffCanvas(element, options) {
            _classCallCheck(this, OffCanvas), this.$element = element, this.options = $.extend({}, OffCanvas.defaults, this.$element.data(), options), 
            this.$lastTrigger = $(), this._init(), this._events(), Foundation.registerPlugin(this, "OffCanvas");
        }
        return _createClass(OffCanvas, [ {
            key: "_init",
            value: function() {
                var id = this.$element.attr("id");
                if (this.$element.attr("aria-hidden", "true"), $(document).find('[data-open="' + id + '"], [data-close="' + id + '"], [data-toggle="' + id + '"]').attr("aria-expanded", "false").attr("aria-controls", id), 
                this.options.closeOnClick) if ($(".js-off-canvas-exit").length) this.$exiter = $(".js-off-canvas-exit"); else {
                    var exiter = document.createElement("div");
                    exiter.setAttribute("class", "js-off-canvas-exit"), $("[data-off-canvas-content]").append(exiter), 
                    this.$exiter = $(exiter);
                }
                this.options.isRevealed = this.options.isRevealed || new RegExp(this.options.revealClass, "g").test(this.$element[0].className), 
                this.options.isRevealed && (this.options.revealOn = this.options.revealOn || this.$element[0].className.match(/(reveal-for-medium|reveal-for-large)/g)[0].split("-")[2], 
                this._setMQChecker()), this.options.transitionTime || (this.options.transitionTime = 1e3 * parseFloat(window.getComputedStyle($("[data-off-canvas-wrapper]")[0]).transitionDuration));
            }
        }, {
            key: "_events",
            value: function() {
                this.$element.off(".zf.trigger .zf.offcanvas").on({
                    "open.zf.trigger": this.open.bind(this),
                    "close.zf.trigger": this.close.bind(this),
                    "toggle.zf.trigger": this.toggle.bind(this),
                    "keydown.zf.offcanvas": this._handleKeyboard.bind(this)
                }), this.options.closeOnClick && this.$exiter.length && this.$exiter.on({
                    "click.zf.offcanvas": this.close.bind(this)
                });
            }
        }, {
            key: "_setMQChecker",
            value: function() {
                var _this = this;
                $(window).on("changed.zf.mediaquery", function() {
                    Foundation.MediaQuery.atLeast(_this.options.revealOn) ? _this.reveal(!0) : _this.reveal(!1);
                }).one("load.zf.offcanvas", function() {
                    Foundation.MediaQuery.atLeast(_this.options.revealOn) && _this.reveal(!0);
                });
            }
        }, {
            key: "reveal",
            value: function(isRevealed) {
                var $closer = this.$element.find("[data-close]");
                isRevealed ? (this.close(), this.isRevealed = !0, this.$element.off("open.zf.trigger toggle.zf.trigger"), 
                $closer.length && $closer.hide()) : (this.isRevealed = !1, this.$element.on({
                    "open.zf.trigger": this.open.bind(this),
                    "toggle.zf.trigger": this.toggle.bind(this)
                }), $closer.length && $closer.show());
            }
        }, {
            key: "open",
            value: function(event, trigger) {
                if (!this.$element.hasClass("is-open") && !this.isRevealed) {
                    var _this = this;
                    $(document.body);
                    this.options.forceTop && $("body").scrollTop(0), Foundation.Move(this.options.transitionTime, this.$element, function() {
                        $("[data-off-canvas-wrapper]").addClass("is-off-canvas-open is-open-" + _this.options.position), 
                        _this.$element.addClass("is-open");
                    }), this.$element.attr("aria-hidden", "false").trigger("opened.zf.offcanvas"), this.options.closeOnClick && this.$exiter.addClass("is-visible"), 
                    trigger && (this.$lastTrigger = trigger.attr("aria-expanded", "true")), this.options.autoFocus && this.$element.one(Foundation.transitionend(this.$element), function() {
                        _this.$element.find("a, button").eq(0).focus();
                    }), this.options.trapFocus && ($("[data-off-canvas-content]").attr("tabindex", "-1"), 
                    this._trapFocus());
                }
            }
        }, {
            key: "_trapFocus",
            value: function() {
                var focusable = Foundation.Keyboard.findFocusable(this.$element), first = focusable.eq(0), last = focusable.eq(-1);
                focusable.off(".zf.offcanvas").on("keydown.zf.offcanvas", function(e) {
                    (9 === e.which || 9 === e.keycode) && (e.target !== last[0] || e.shiftKey || (e.preventDefault(), 
                    first.focus()), e.target === first[0] && e.shiftKey && (e.preventDefault(), last.focus()));
                });
            }
        }, {
            key: "close",
            value: function(cb) {
                if (this.$element.hasClass("is-open") && !this.isRevealed) {
                    var _this = this;
                    $("[data-off-canvas-wrapper]").removeClass("is-off-canvas-open is-open-" + _this.options.position), 
                    _this.$element.removeClass("is-open"), this.$element.attr("aria-hidden", "true").trigger("closed.zf.offcanvas"), 
                    this.options.closeOnClick && this.$exiter.removeClass("is-visible"), this.$lastTrigger.attr("aria-expanded", "false"), 
                    this.options.trapFocus && $("[data-off-canvas-content]").removeAttr("tabindex");
                }
            }
        }, {
            key: "toggle",
            value: function(event, trigger) {
                this.$element.hasClass("is-open") ? this.close(event, trigger) : this.open(event, trigger);
            }
        }, {
            key: "_handleKeyboard",
            value: function(event) {
                27 === event.which && (event.stopPropagation(), event.preventDefault(), this.close(), 
                this.$lastTrigger.focus());
            }
        }, {
            key: "destroy",
            value: function() {
                this.close(), this.$element.off(".zf.trigger .zf.offcanvas"), this.$exiter.off(".zf.offcanvas"), 
                Foundation.unregisterPlugin(this);
            }
        } ]), OffCanvas;
    }();
    OffCanvas.defaults = {
        closeOnClick: !0,
        transitionTime: 0,
        position: "left",
        forceTop: !0,
        isRevealed: !1,
        revealOn: null,
        autoFocus: !0,
        revealClass: "reveal-for-",
        trapFocus: !1
    }, Foundation.plugin(OffCanvas, "OffCanvas");
}(jQuery);

var _createClass = function() {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
            "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    return function(Constructor, protoProps, staticProps) {
        return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
        Constructor;
    };
}();

!function($) {
    var Orbit = function() {
        function Orbit(element, options) {
            _classCallCheck(this, Orbit), this.$element = element, this.options = $.extend({}, Orbit.defaults, this.$element.data(), options), 
            this._init(), Foundation.registerPlugin(this, "Orbit"), Foundation.Keyboard.register("Orbit", {
                ltr: {
                    ARROW_RIGHT: "next",
                    ARROW_LEFT: "previous"
                },
                rtl: {
                    ARROW_LEFT: "next",
                    ARROW_RIGHT: "previous"
                }
            });
        }
        return _createClass(Orbit, [ {
            key: "_init",
            value: function() {
                this.$wrapper = this.$element.find("." + this.options.containerClass), this.$slides = this.$element.find("." + this.options.slideClass);
                var $images = this.$element.find("img"), initActive = this.$slides.filter(".is-active");
                initActive.length || this.$slides.eq(0).addClass("is-active"), this.options.useMUI || this.$slides.addClass("no-motionui"), 
                $images.length ? Foundation.onImagesLoaded($images, this._prepareForOrbit.bind(this)) : this._prepareForOrbit(), 
                this.options.bullets && this._loadBullets(), this._events(), this.options.autoPlay && this.$slides.length > 1 && this.geoSync(), 
                this.options.accessible && this.$wrapper.attr("tabindex", 0);
            }
        }, {
            key: "_loadBullets",
            value: function() {
                this.$bullets = this.$element.find("." + this.options.boxOfBullets).find("button");
            }
        }, {
            key: "geoSync",
            value: function() {
                var _this = this;
                this.timer = new Foundation.Timer(this.$element, {
                    duration: this.options.timerDelay,
                    infinite: !1
                }, function() {
                    _this.changeSlide(!0);
                }), this.timer.start();
            }
        }, {
            key: "_prepareForOrbit",
            value: function() {
                var _this = this;
                this._setWrapperHeight(function(max) {
                    _this._setSlideHeight(max);
                });
            }
        }, {
            key: "_setWrapperHeight",
            value: function(cb) {
                var temp, max = 0, counter = 0;
                this.$slides.each(function() {
                    temp = this.getBoundingClientRect().height, $(this).attr("data-slide", counter), 
                    counter && $(this).css({
                        position: "relative",
                        display: "none"
                    }), max = temp > max ? temp : max, counter++;
                }), counter === this.$slides.length && (this.$wrapper.css({
                    height: max
                }), cb(max));
            }
        }, {
            key: "_setSlideHeight",
            value: function(height) {
                this.$slides.each(function() {
                    $(this).css("max-height", height);
                });
            }
        }, {
            key: "_events",
            value: function() {
                var _this = this;
                if (this.$slides.length > 1) {
                    if (this.options.swipe && this.$slides.off("swipeleft.zf.orbit swiperight.zf.orbit").on("swipeleft.zf.orbit", function(e) {
                        e.preventDefault(), _this.changeSlide(!0);
                    }).on("swiperight.zf.orbit", function(e) {
                        e.preventDefault(), _this.changeSlide(!1);
                    }), this.options.autoPlay && (this.$slides.on("click.zf.orbit", function() {
                        _this.$element.data("clickedOn", _this.$element.data("clickedOn") ? !1 : !0), _this.timer[_this.$element.data("clickedOn") ? "pause" : "start"]();
                    }), this.options.pauseOnHover && this.$element.on("mouseenter.zf.orbit", function() {
                        _this.timer.pause();
                    }).on("mouseleave.zf.orbit", function() {
                        _this.$element.data("clickedOn") || _this.timer.start();
                    })), this.options.navButtons) {
                        var $controls = this.$element.find("." + this.options.nextClass + ", ." + this.options.prevClass);
                        $controls.attr("tabindex", 0).on("click.zf.orbit touchend.zf.orbit", function() {
                            _this.changeSlide($(this).hasClass(_this.options.nextClass));
                        });
                    }
                    this.options.bullets && this.$bullets.on("click.zf.orbit touchend.zf.orbit", function() {
                        if (/is-active/g.test(this.className)) return !1;
                        var idx = $(this).data("slide"), ltr = idx > _this.$slides.filter(".is-active").data("slide"), $slide = _this.$slides.eq(idx);
                        _this.changeSlide(ltr, $slide, idx);
                    }), this.$wrapper.add(this.$bullets).on("keydown.zf.orbit", function(e) {
                        Foundation.Keyboard.handleKey(e, "Orbit", {
                            next: function() {
                                _this.changeSlide(!0);
                            },
                            previous: function() {
                                _this.changeSlide(!1);
                            },
                            handled: function() {
                                $(e.target).is(_this.$bullets) && _this.$bullets.filter(".is-active").focus();
                            }
                        });
                    });
                }
            }
        }, {
            key: "changeSlide",
            value: function(isLTR, chosenSlide, idx) {
                var $curSlide = this.$slides.filter(".is-active").eq(0);
                if (/mui/g.test($curSlide[0].className)) return !1;
                var $newSlide, $firstSlide = this.$slides.first(), $lastSlide = this.$slides.last(), dirIn = isLTR ? "Right" : "Left", dirOut = isLTR ? "Left" : "Right", _this = this;
                $newSlide = chosenSlide ? chosenSlide : isLTR ? this.options.infiniteWrap ? $curSlide.next("." + this.options.slideClass).length ? $curSlide.next("." + this.options.slideClass) : $firstSlide : $curSlide.next("." + this.options.slideClass) : this.options.infiniteWrap ? $curSlide.prev("." + this.options.slideClass).length ? $curSlide.prev("." + this.options.slideClass) : $lastSlide : $curSlide.prev("." + this.options.slideClass), 
                $newSlide.length && (this.options.bullets && (idx = idx || this.$slides.index($newSlide), 
                this._updateBullets(idx)), this.options.useMUI ? (Foundation.Motion.animateIn($newSlide.addClass("is-active").css({
                    position: "absolute",
                    top: 0
                }), this.options["animInFrom" + dirIn], function() {
                    $newSlide.css({
                        position: "relative",
                        display: "block"
                    }).attr("aria-live", "polite");
                }), Foundation.Motion.animateOut($curSlide.removeClass("is-active"), this.options["animOutTo" + dirOut], function() {
                    $curSlide.removeAttr("aria-live"), _this.options.autoPlay && !_this.timer.isPaused && _this.timer.restart();
                })) : ($curSlide.removeClass("is-active is-in").removeAttr("aria-live").hide(), 
                $newSlide.addClass("is-active is-in").attr("aria-live", "polite").show(), this.options.autoPlay && !this.timer.isPaused && this.timer.restart()), 
                this.$element.trigger("slidechange.zf.orbit", [ $newSlide ]));
            }
        }, {
            key: "_updateBullets",
            value: function(idx) {
                var $oldBullet = this.$element.find("." + this.options.boxOfBullets).find(".is-active").removeClass("is-active").blur(), span = $oldBullet.find("span:last").detach();
                this.$bullets.eq(idx).addClass("is-active").append(span);
            }
        }, {
            key: "destroy",
            value: function() {
                this.$element.off(".zf.orbit").find("*").off(".zf.orbit").end().hide(), Foundation.unregisterPlugin(this);
            }
        } ]), Orbit;
    }();
    Orbit.defaults = {
        bullets: !0,
        navButtons: !0,
        animInFromRight: "slide-in-right",
        animOutToRight: "slide-out-right",
        animInFromLeft: "slide-in-left",
        animOutToLeft: "slide-out-left",
        autoPlay: !0,
        timerDelay: 5e3,
        infiniteWrap: !0,
        swipe: !0,
        pauseOnHover: !0,
        accessible: !0,
        containerClass: "orbit-container",
        slideClass: "orbit-slide",
        boxOfBullets: "orbit-bullets",
        nextClass: "orbit-next",
        prevClass: "orbit-previous",
        useMUI: !0
    }, Foundation.plugin(Orbit, "Orbit");
}(jQuery);

var _createClass = function() {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
            "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    return function(Constructor, protoProps, staticProps) {
        return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
        Constructor;
    };
}();

!function($) {
    var ResponsiveMenu = function() {
        function ResponsiveMenu(element, options) {
            _classCallCheck(this, ResponsiveMenu), this.$element = $(element), this.rules = this.$element.data("responsive-menu"), 
            this.currentMq = null, this.currentPlugin = null, this._init(), this._events(), 
            Foundation.registerPlugin(this, "ResponsiveMenu");
        }
        return _createClass(ResponsiveMenu, [ {
            key: "_init",
            value: function() {
                for (var rulesTree = {}, rules = this.rules.split(" "), i = 0; i < rules.length; i++) {
                    var rule = rules[i].split("-"), ruleSize = rule.length > 1 ? rule[0] : "small", rulePlugin = rule.length > 1 ? rule[1] : rule[0];
                    null !== MenuPlugins[rulePlugin] && (rulesTree[ruleSize] = MenuPlugins[rulePlugin]);
                }
                this.rules = rulesTree, $.isEmptyObject(rulesTree) || this._checkMediaQueries();
            }
        }, {
            key: "_events",
            value: function() {
                var _this = this;
                $(window).on("changed.zf.mediaquery", function() {
                    _this._checkMediaQueries();
                });
            }
        }, {
            key: "_checkMediaQueries",
            value: function() {
                var matchedMq, _this = this;
                $.each(this.rules, function(key) {
                    Foundation.MediaQuery.atLeast(key) && (matchedMq = key);
                }), matchedMq && (this.currentPlugin instanceof this.rules[matchedMq].plugin || ($.each(MenuPlugins, function(key, value) {
                    _this.$element.removeClass(value.cssClass);
                }), this.$element.addClass(this.rules[matchedMq].cssClass), this.currentPlugin && this.currentPlugin.destroy(), 
                this.currentPlugin = new this.rules[matchedMq].plugin(this.$element, {})));
            }
        }, {
            key: "destroy",
            value: function() {
                this.currentPlugin.destroy(), $(window).off(".zf.ResponsiveMenu"), Foundation.unregisterPlugin(this);
            }
        } ]), ResponsiveMenu;
    }();
    ResponsiveMenu.defaults = {};
    var MenuPlugins = {
        dropdown: {
            cssClass: "dropdown",
            plugin: Foundation._plugins["dropdown-menu"] || null
        },
        drilldown: {
            cssClass: "drilldown",
            plugin: Foundation._plugins.drilldown || null
        },
        accordion: {
            cssClass: "accordion-menu",
            plugin: Foundation._plugins["accordion-menu"] || null
        }
    };
    Foundation.plugin(ResponsiveMenu, "ResponsiveMenu");
}(jQuery);

var _createClass = function() {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
            "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    return function(Constructor, protoProps, staticProps) {
        return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
        Constructor;
    };
}();

!function($) {
    var ResponsiveToggle = function() {
        function ResponsiveToggle(element, options) {
            _classCallCheck(this, ResponsiveToggle), this.$element = $(element), this.options = $.extend({}, ResponsiveToggle.defaults, this.$element.data(), options), 
            this._init(), this._events(), Foundation.registerPlugin(this, "ResponsiveToggle");
        }
        return _createClass(ResponsiveToggle, [ {
            key: "_init",
            value: function() {
                var targetID = this.$element.data("responsive-toggle");
                targetID || console.error("Your tab bar needs an ID of a Menu as the value of data-tab-bar."), 
                this.$targetMenu = $("#" + targetID), this.$toggler = this.$element.find("[data-toggle]"), 
                this._update();
            }
        }, {
            key: "_events",
            value: function() {
                $(window).on("changed.zf.mediaquery", this._update.bind(this)), this.$toggler.on("click.zf.responsiveToggle", this.toggleMenu.bind(this));
            }
        }, {
            key: "_update",
            value: function() {
                Foundation.MediaQuery.atLeast(this.options.hideFor) ? (this.$element.hide(), this.$targetMenu.show()) : (this.$element.show(), 
                this.$targetMenu.hide());
            }
        }, {
            key: "toggleMenu",
            value: function() {
                Foundation.MediaQuery.atLeast(this.options.hideFor) || (this.$targetMenu.toggle(0), 
                this.$element.trigger("toggled.zf.responsiveToggle"));
            }
        }, {
            key: "destroy",
            value: function() {}
        } ]), ResponsiveToggle;
    }();
    ResponsiveToggle.defaults = {
        hideFor: "medium"
    }, Foundation.plugin(ResponsiveToggle, "ResponsiveToggle");
}(jQuery);

var _createClass = function() {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
            "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    return function(Constructor, protoProps, staticProps) {
        return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
        Constructor;
    };
}();

!function($) {
    function iPhoneSniff() {
        return /iP(ad|hone|od).*OS/.test(window.navigator.userAgent);
    }
    var Reveal = function() {
        function Reveal(element, options) {
            _classCallCheck(this, Reveal), this.$element = element, this.options = $.extend({}, Reveal.defaults, this.$element.data(), options), 
            this._init(), Foundation.registerPlugin(this, "Reveal"), Foundation.Keyboard.register("Reveal", {
                ENTER: "open",
                SPACE: "open",
                ESCAPE: "close",
                TAB: "tab_forward",
                SHIFT_TAB: "tab_backward"
            });
        }
        return _createClass(Reveal, [ {
            key: "_init",
            value: function() {
                if (this.id = this.$element.attr("id"), this.isActive = !1, this.cached = {
                    mq: Foundation.MediaQuery.current
                }, this.isiOS = iPhoneSniff(), this.isiOS && this.$element.addClass("is-ios"), this.$anchor = $($('[data-open="' + this.id + '"]').length ? '[data-open="' + this.id + '"]' : '[data-toggle="' + this.id + '"]'), 
                this.$anchor.length) {
                    var anchorId = this.$anchor[0].id || Foundation.GetYoDigits(6, "reveal");
                    this.$anchor.attr({
                        "aria-controls": this.id,
                        id: anchorId,
                        "aria-haspopup": !0,
                        tabindex: 0
                    }), this.$element.attr({
                        "aria-labelledby": anchorId
                    });
                }
                (this.options.fullScreen || this.$element.hasClass("full")) && (this.options.fullScreen = !0, 
                this.options.overlay = !1), this.options.overlay && !this.$overlay && (this.$overlay = this._makeOverlay(this.id)), 
                this.$element.attr({
                    role: "dialog",
                    "aria-hidden": !0,
                    "data-yeti-box": this.id,
                    "data-resize": this.id
                }), this.$overlay ? this.$element.detach().appendTo(this.$overlay) : (this.$element.detach().appendTo($("body")), 
                this.$element.addClass("without-overlay")), this._events(), this.options.deepLink && window.location.hash === "#" + this.id && $(window).one("load.zf.reveal", this.open.bind(this));
            }
        }, {
            key: "_makeOverlay",
            value: function(id) {
                var $overlay = $("<div></div>").addClass("reveal-overlay").attr({
                    tabindex: -1,
                    "aria-hidden": !0
                }).appendTo("body");
                return $overlay;
            }
        }, {
            key: "_updatePosition",
            value: function() {
                var top, width = this.$element.outerWidth(), outerWidth = $(window).width(), height = this.$element.outerHeight(), outerHeight = $(window).height(), left = parseInt((outerWidth - width) / 2, 10);
                top = height > outerHeight ? parseInt(Math.min(100, outerHeight / 10), 10) : parseInt((outerHeight - height) / 4, 10), 
                this.$element.css({
                    top: top + "px"
                }), this.$overlay || this.$element.css({
                    left: left + "px"
                });
            }
        }, {
            key: "_events",
            value: function() {
                var _this = this;
                this.$element.on({
                    "open.zf.trigger": this.open.bind(this),
                    "close.zf.trigger": this.close.bind(this),
                    "toggle.zf.trigger": this.toggle.bind(this),
                    "resizeme.zf.trigger": function() {
                        _this._updatePosition();
                    }
                }), this.$anchor.length && this.$anchor.on("keydown.zf.reveal", function(e) {
                    (13 === e.which || 32 === e.which) && (e.stopPropagation(), e.preventDefault(), 
                    _this.open());
                }), this.options.closeOnClick && this.options.overlay && this.$overlay.off(".zf.reveal").on("click.zf.reveal", function(e) {
                    e.target === _this.$element[0] || $.contains(_this.$element[0], e.target) || _this.close();
                }), this.options.deepLink && $(window).on("popstate.zf.reveal:" + this.id, this._handleState.bind(this));
            }
        }, {
            key: "_handleState",
            value: function(e) {
                window.location.hash !== "#" + this.id || this.isActive ? this.close() : this.open();
            }
        }, {
            key: "open",
            value: function() {
                var _this2 = this;
                if (this.options.deepLink) {
                    var hash = "#" + this.id;
                    window.history.pushState ? window.history.pushState(null, null, hash) : window.location.hash = hash;
                }
                if (this.isActive = !0, this.$element.css({
                    visibility: "hidden"
                }).show().scrollTop(0), this.options.overlay && this.$overlay.css({
                    visibility: "hidden"
                }).show(), this._updatePosition(), this.$element.hide().css({
                    visibility: ""
                }), this.$overlay && this.$overlay.css({
                    visibility: ""
                }).hide(), this.options.multipleOpened || this.$element.trigger("closeme.zf.reveal", this.id), 
                this.options.animationIn ? (this.options.overlay && Foundation.Motion.animateIn(this.$overlay, "fade-in"), 
                Foundation.Motion.animateIn(this.$element, this.options.animationIn, function() {
                    this.focusableElements = Foundation.Keyboard.findFocusable(this.$element);
                })) : (this.options.overlay && this.$overlay.show(0), this.$element.show(this.options.showDelay)), 
                this.$element.attr({
                    "aria-hidden": !1,
                    tabindex: -1
                }).focus(), this.$element.trigger("open.zf.reveal"), this.isiOS) {
                    var scrollPos = window.pageYOffset;
                    $("html, body").addClass("is-reveal-open").scrollTop(scrollPos);
                } else $("body").addClass("is-reveal-open");
                $("body").addClass("is-reveal-open").attr("aria-hidden", this.options.overlay || this.options.fullScreen ? !0 : !1), 
                setTimeout(function() {
                    _this2._extraHandlers();
                }, 0);
            }
        }, {
            key: "_extraHandlers",
            value: function() {
                var _this = this;
                this.focusableElements = Foundation.Keyboard.findFocusable(this.$element), this.options.overlay || !this.options.closeOnClick || this.options.fullScreen || $("body").on("click.zf.reveal", function(e) {
                    e.target === _this.$element[0] || $.contains(_this.$element[0], e.target) || _this.close();
                }), this.options.closeOnEsc && $(window).on("keydown.zf.reveal", function(e) {
                    Foundation.Keyboard.handleKey(e, "Reveal", {
                        close: function() {
                            _this.options.closeOnEsc && (_this.close(), _this.$anchor.focus());
                        }
                    }), 0 === _this.focusableElements.length && e.preventDefault();
                }), this.$element.on("keydown.zf.reveal", function(e) {
                    var $target = $(this);
                    Foundation.Keyboard.handleKey(e, "Reveal", {
                        tab_forward: function() {
                            _this.$element.find(":focus").is(_this.focusableElements.eq(-1)) && (_this.focusableElements.eq(0).focus(), 
                            e.preventDefault());
                        },
                        tab_backward: function() {
                            (_this.$element.find(":focus").is(_this.focusableElements.eq(0)) || _this.$element.is(":focus")) && (_this.focusableElements.eq(-1).focus(), 
                            e.preventDefault());
                        },
                        open: function() {
                            _this.$element.find(":focus").is(_this.$element.find("[data-close]")) ? setTimeout(function() {
                                _this.$anchor.focus();
                            }, 1) : $target.is(_this.focusableElements) && _this.open();
                        },
                        close: function() {
                            _this.options.closeOnEsc && (_this.close(), _this.$anchor.focus());
                        }
                    });
                });
            }
        }, {
            key: "close",
            value: function() {
                function finishUp() {
                    _this.isiOS ? $("html, body").removeClass("is-reveal-open") : $("body").removeClass("is-reveal-open"), 
                    $("body").attr({
                        "aria-hidden": !1,
                        tabindex: ""
                    }), _this.$element.attr("aria-hidden", !0), _this.$element.trigger("closed.zf.reveal");
                }
                if (!this.isActive || !this.$element.is(":visible")) return !1;
                var _this = this;
                this.options.animationOut ? (this.options.overlay ? Foundation.Motion.animateOut(this.$overlay, "fade-out", finishUp) : finishUp(), 
                Foundation.Motion.animateOut(this.$element, this.options.animationOut)) : (this.options.overlay ? this.$overlay.hide(0, finishUp) : finishUp(), 
                this.$element.hide(this.options.hideDelay)), this.options.closeOnEsc && $(window).off("keydown.zf.reveal"), 
                !this.options.overlay && this.options.closeOnClick && $("body").off("click.zf.reveal"), 
                this.$element.off("keydown.zf.reveal"), this.options.resetOnClose && this.$element.html(this.$element.html()), 
                this.isActive = !1, _this.options.deepLink && (window.history.replaceState ? window.history.replaceState("", document.title, window.location.pathname) : window.location.hash = "");
            }
        }, {
            key: "toggle",
            value: function() {
                this.isActive ? this.close() : this.open();
            }
        }, {
            key: "destroy",
            value: function() {
                this.options.overlay && this.$overlay.hide().off().remove(), this.$element.hide().off(), 
                this.$anchor.off(".zf"), $(window).off(".zf.reveal:" + this.id), Foundation.unregisterPlugin(this);
            }
        } ]), Reveal;
    }();
    Reveal.defaults = {
        animationIn: "",
        animationOut: "",
        showDelay: 0,
        hideDelay: 0,
        closeOnClick: !0,
        closeOnEsc: !0,
        multipleOpened: !1,
        vOffset: 100,
        hOffset: 0,
        fullScreen: !1,
        btmOffsetPct: 10,
        overlay: !0,
        resetOnClose: !1,
        deepLink: !1
    }, Foundation.plugin(Reveal, "Reveal");
}(jQuery);

var _createClass = function() {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
            "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    return function(Constructor, protoProps, staticProps) {
        return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
        Constructor;
    };
}();

!function($) {
    function percent(frac, num) {
        return frac / num;
    }
    function absPosition($handle, dir, clickPos, param) {
        return Math.abs($handle.position()[dir] + $handle[param]() / 2 - clickPos);
    }
    var Slider = function() {
        function Slider(element, options) {
            _classCallCheck(this, Slider), this.$element = element, this.options = $.extend({}, Slider.defaults, this.$element.data(), options), 
            this._init(), Foundation.registerPlugin(this, "Slider"), Foundation.Keyboard.register("Slider", {
                ltr: {
                    ARROW_RIGHT: "increase",
                    ARROW_UP: "increase",
                    ARROW_DOWN: "decrease",
                    ARROW_LEFT: "decrease",
                    SHIFT_ARROW_RIGHT: "increase_fast",
                    SHIFT_ARROW_UP: "increase_fast",
                    SHIFT_ARROW_DOWN: "decrease_fast",
                    SHIFT_ARROW_LEFT: "decrease_fast"
                },
                rtl: {
                    ARROW_LEFT: "increase",
                    ARROW_RIGHT: "decrease",
                    SHIFT_ARROW_LEFT: "increase_fast",
                    SHIFT_ARROW_RIGHT: "decrease_fast"
                }
            });
        }
        return _createClass(Slider, [ {
            key: "_init",
            value: function() {
                this.inputs = this.$element.find("input"), this.handles = this.$element.find("[data-slider-handle]"), 
                this.$handle = this.handles.eq(0), this.$input = this.inputs.length ? this.inputs.eq(0) : $("#" + this.$handle.attr("aria-controls")), 
                this.$fill = this.$element.find("[data-slider-fill]").css(this.options.vertical ? "height" : "width", 0);
                var isDbl = !1, _this = this;
                (this.options.disabled || this.$element.hasClass(this.options.disabledClass)) && (this.options.disabled = !0, 
                this.$element.addClass(this.options.disabledClass)), this.inputs.length || (this.inputs = $().add(this.$input), 
                this.options.binding = !0), this._setInitAttr(0), this._events(this.$handle), this.handles[1] && (this.options.doubleSided = !0, 
                this.$handle2 = this.handles.eq(1), this.$input2 = this.inputs.length > 1 ? this.inputs.eq(1) : $("#" + this.$handle2.attr("aria-controls")), 
                this.inputs[1] || (this.inputs = this.inputs.add(this.$input2)), isDbl = !0, this._setHandlePos(this.$handle, this.options.initialStart, !0, function() {
                    _this._setHandlePos(_this.$handle2, _this.options.initialEnd, !0);
                }), this._setInitAttr(1), this._events(this.$handle2)), isDbl || this._setHandlePos(this.$handle, this.options.initialStart, !0);
            }
        }, {
            key: "_setHandlePos",
            value: function($hndl, location, noInvert, cb) {
                location = parseFloat(location), location < this.options.start ? location = this.options.start : location > this.options.end && (location = this.options.end);
                var isDbl = this.options.doubleSided;
                if (isDbl) if (0 === this.handles.index($hndl)) {
                    var h2Val = parseFloat(this.$handle2.attr("aria-valuenow"));
                    location = location >= h2Val ? h2Val - this.options.step : location;
                } else {
                    var h1Val = parseFloat(this.$handle.attr("aria-valuenow"));
                    location = h1Val >= location ? h1Val + this.options.step : location;
                }
                this.options.vertical && !noInvert && (location = this.options.end - location);
                var _this = this, vert = this.options.vertical, hOrW = vert ? "height" : "width", lOrT = vert ? "top" : "left", handleDim = $hndl[0].getBoundingClientRect()[hOrW], elemDim = this.$element[0].getBoundingClientRect()[hOrW], pctOfBar = percent(location, this.options.end).toFixed(2), pxToMove = (elemDim - handleDim) * pctOfBar, movement = (100 * percent(pxToMove, elemDim)).toFixed(this.options.decimal);
                location = parseFloat(location.toFixed(this.options.decimal));
                var css = {};
                if (this._setValues($hndl, location), isDbl) {
                    var dim, isLeftHndl = 0 === this.handles.index($hndl), handlePct = ~~(100 * percent(handleDim, elemDim));
                    if (isLeftHndl) css[lOrT] = movement + "%", dim = parseFloat(this.$handle2[0].style[lOrT]) - movement + handlePct, 
                    cb && "function" == typeof cb && cb(); else {
                        var handlePos = parseFloat(this.$handle[0].style[lOrT]);
                        dim = movement - (isNaN(handlePos) ? this.options.initialStart / ((this.options.end - this.options.start) / 100) : handlePos) + handlePct;
                    }
                    css["min-" + hOrW] = dim + "%";
                }
                this.$element.one("finished.zf.animate", function() {
                    _this.$element.trigger("moved.zf.slider", [ $hndl ]);
                });
                var moveTime = this.$element.data("dragging") ? 1e3 / 60 : this.options.moveTime;
                Foundation.Move(moveTime, $hndl, function() {
                    $hndl.css(lOrT, movement + "%"), _this.options.doubleSided ? _this.$fill.css(css) : _this.$fill.css(hOrW, 100 * pctOfBar + "%");
                });
            }
        }, {
            key: "_setInitAttr",
            value: function(idx) {
                var id = this.inputs.eq(idx).attr("id") || Foundation.GetYoDigits(6, "slider");
                this.inputs.eq(idx).attr({
                    id: id,
                    max: this.options.end,
                    min: this.options.start,
                    step: this.options.step
                }), this.handles.eq(idx).attr({
                    role: "slider",
                    "aria-controls": id,
                    "aria-valuemax": this.options.end,
                    "aria-valuemin": this.options.start,
                    "aria-valuenow": 0 === idx ? this.options.initialStart : this.options.initialEnd,
                    "aria-orientation": this.options.vertical ? "vertical" : "horizontal",
                    tabindex: 0
                });
            }
        }, {
            key: "_setValues",
            value: function($handle, val) {
                var idx = this.options.doubleSided ? this.handles.index($handle) : 0;
                this.inputs.eq(idx).val(val), $handle.attr("aria-valuenow", val);
            }
        }, {
            key: "_handleEvent",
            value: function(e, $handle, val) {
                var value, hasVal;
                if (val) value = this._adjustValue(null, val), hasVal = !0; else {
                    e.preventDefault();
                    var _this = this, vertical = this.options.vertical, param = vertical ? "height" : "width", direction = vertical ? "top" : "left", pageXY = vertical ? e.pageY : e.pageX, halfOfHandle = this.$handle[0].getBoundingClientRect()[param] / 2, barDim = this.$element[0].getBoundingClientRect()[param], barOffset = this.$element.offset()[direction] - pageXY, barXY = barOffset > 0 ? -halfOfHandle : -barDim > barOffset - halfOfHandle ? barDim : Math.abs(barOffset), offsetPct = percent(barXY, barDim);
                    if (value = (this.options.end - this.options.start) * offsetPct, Foundation.rtl() && !this.options.vertical && (value = this.options.end - value), 
                    value = _this._adjustValue(null, value), hasVal = !1, !$handle) {
                        var firstHndlPos = absPosition(this.$handle, direction, barXY, param), secndHndlPos = absPosition(this.$handle2, direction, barXY, param);
                        $handle = secndHndlPos >= firstHndlPos ? this.$handle : this.$handle2;
                    }
                }
                this._setHandlePos($handle, value, hasVal);
            }
        }, {
            key: "_adjustValue",
            value: function($handle, value) {
                var val, left, prev_val, next_val, step = this.options.step, div = parseFloat(step / 2);
                return val = $handle ? parseFloat($handle.attr("aria-valuenow")) : value, left = val % step, 
                prev_val = val - left, next_val = prev_val + step, 0 === left ? val : val = val >= prev_val + div ? next_val : prev_val;
            }
        }, {
            key: "_events",
            value: function($handle) {
                if (this.options.disabled) return !1;
                var curHandle, _this = this;
                if (this.inputs.off("change.zf.slider").on("change.zf.slider", function(e) {
                    var idx = _this.inputs.index($(this));
                    _this._handleEvent(e, _this.handles.eq(idx), $(this).val());
                }), this.options.clickSelect && this.$element.off("click.zf.slider").on("click.zf.slider", function(e) {
                    return _this.$element.data("dragging") ? !1 : void ($(e.target).is("[data-slider-handle]") || (_this.options.doubleSided ? _this._handleEvent(e) : _this._handleEvent(e, _this.$handle)));
                }), this.options.draggable) {
                    this.handles.addTouch();
                    var $body = $("body");
                    $handle.off("mousedown.zf.slider").on("mousedown.zf.slider", function(e) {
                        $handle.addClass("is-dragging"), _this.$fill.addClass("is-dragging"), _this.$element.data("dragging", !0), 
                        curHandle = $(e.currentTarget), $body.on("mousemove.zf.slider", function(e) {
                            e.preventDefault(), _this._handleEvent(e, curHandle);
                        }).on("mouseup.zf.slider", function(e) {
                            _this._handleEvent(e, curHandle), $handle.removeClass("is-dragging"), _this.$fill.removeClass("is-dragging"), 
                            _this.$element.data("dragging", !1), $body.off("mousemove.zf.slider mouseup.zf.slider");
                        });
                    });
                }
                $handle.off("keydown.zf.slider").on("keydown.zf.slider", function(e) {
                    var newValue, _$handle = $(this), idx = _this.options.doubleSided ? _this.handles.index(_$handle) : 0, oldValue = parseFloat(_this.inputs.eq(idx).val());
                    Foundation.Keyboard.handleKey(e, "Slider", {
                        decrease: function() {
                            newValue = oldValue - _this.options.step;
                        },
                        increase: function() {
                            newValue = oldValue + _this.options.step;
                        },
                        decrease_fast: function() {
                            newValue = oldValue - 10 * _this.options.step;
                        },
                        increase_fast: function() {
                            newValue = oldValue + 10 * _this.options.step;
                        },
                        handled: function() {
                            e.preventDefault(), _this._setHandlePos(_$handle, newValue, !0);
                        }
                    });
                });
            }
        }, {
            key: "destroy",
            value: function() {
                this.handles.off(".zf.slider"), this.inputs.off(".zf.slider"), this.$element.off(".zf.slider"), 
                Foundation.unregisterPlugin(this);
            }
        } ]), Slider;
    }();
    Slider.defaults = {
        start: 0,
        end: 100,
        step: 1,
        initialStart: 0,
        initialEnd: 100,
        binding: !1,
        clickSelect: !0,
        vertical: !1,
        draggable: !0,
        disabled: !1,
        doubleSided: !1,
        decimal: 2,
        moveTime: 200,
        disabledClass: "disabled",
        invertVertical: !1
    }, Foundation.plugin(Slider, "Slider");
}(jQuery);

var _createClass = function() {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
            "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    return function(Constructor, protoProps, staticProps) {
        return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
        Constructor;
    };
}();

!function($) {
    function emCalc(em) {
        return parseInt(window.getComputedStyle(document.body, null).fontSize, 10) * em;
    }
    var Sticky = function() {
        function Sticky(element, options) {
            _classCallCheck(this, Sticky), this.$element = element, this.options = $.extend({}, Sticky.defaults, this.$element.data(), options), 
            this._init(), Foundation.registerPlugin(this, "Sticky");
        }
        return _createClass(Sticky, [ {
            key: "_init",
            value: function() {
                var $parent = this.$element.parent("[data-sticky-container]"), id = this.$element[0].id || Foundation.GetYoDigits(6, "sticky"), _this = this;
                $parent.length || (this.wasWrapped = !0), this.$container = $parent.length ? $parent : $(this.options.container).wrapInner(this.$element), 
                this.$container.addClass(this.options.containerClass), this.$element.addClass(this.options.stickyClass).attr({
                    "data-resize": id
                }), this.scrollCount = this.options.checkEvery, this.isStuck = !1, $(window).one("load.zf.sticky", function() {
                    "" !== _this.options.anchor ? _this.$anchor = $("#" + _this.options.anchor) : _this._parsePoints(), 
                    _this._setSizes(function() {
                        _this._calc(!1);
                    }), _this._events(id.split("-").reverse().join("-"));
                });
            }
        }, {
            key: "_parsePoints",
            value: function() {
                var top = this.options.topAnchor, btm = this.options.btmAnchor, pts = [ top, btm ], breaks = {};
                if (top && btm) for (var i = 0, len = pts.length; len > i && pts[i]; i++) {
                    var pt;
                    if ("number" == typeof pts[i]) pt = pts[i]; else {
                        var place = pts[i].split(":"), anchor = $("#" + place[0]);
                        pt = anchor.offset().top, place[1] && "bottom" === place[1].toLowerCase() && (pt += anchor[0].getBoundingClientRect().height);
                    }
                    breaks[i] = pt;
                } else breaks = {
                    0: 1,
                    1: document.documentElement.scrollHeight
                };
                this.points = breaks;
            }
        }, {
            key: "_events",
            value: function(id) {
                var _this = this, scrollListener = this.scrollListener = "scroll.zf." + id;
                this.isOn || (this.canStick && (this.isOn = !0, $(window).off(scrollListener).on(scrollListener, function(e) {
                    0 === _this.scrollCount ? (_this.scrollCount = _this.options.checkEvery, _this._setSizes(function() {
                        _this._calc(!1, window.pageYOffset);
                    })) : (_this.scrollCount--, _this._calc(!1, window.pageYOffset));
                })), this.$element.off("resizeme.zf.trigger").on("resizeme.zf.trigger", function(e, el) {
                    _this._setSizes(function() {
                        _this._calc(!1), _this.canStick ? _this.isOn || _this._events(id) : _this.isOn && _this._pauseListeners(scrollListener);
                    });
                }));
            }
        }, {
            key: "_pauseListeners",
            value: function(scrollListener) {
                this.isOn = !1, $(window).off(scrollListener), this.$element.trigger("pause.zf.sticky");
            }
        }, {
            key: "_calc",
            value: function(checkSizes, scroll) {
                return checkSizes && this._setSizes(), this.canStick ? (scroll || (scroll = window.pageYOffset), 
                void (scroll >= this.topPoint ? scroll <= this.bottomPoint ? this.isStuck || this._setSticky() : this.isStuck && this._removeSticky(!1) : this.isStuck && this._removeSticky(!0))) : (this.isStuck && this._removeSticky(!0), 
                !1);
            }
        }, {
            key: "_setSticky",
            value: function() {
                var stickTo = this.options.stickTo, mrgn = "top" === stickTo ? "marginTop" : "marginBottom", notStuckTo = "top" === stickTo ? "bottom" : "top", css = {};
                css[mrgn] = this.options[mrgn] + "em", css[stickTo] = 0, css[notStuckTo] = "auto", 
                css.left = this.$container.offset().left + parseInt(window.getComputedStyle(this.$container[0])["padding-left"], 10), 
                this.isStuck = !0, this.$element.removeClass("is-anchored is-at-" + notStuckTo).addClass("is-stuck is-at-" + stickTo).css(css).trigger("sticky.zf.stuckto:" + stickTo);
            }
        }, {
            key: "_removeSticky",
            value: function(isTop) {
                var stickTo = this.options.stickTo, stickToTop = "top" === stickTo, css = {}, anchorPt = (this.points ? this.points[1] - this.points[0] : this.anchorHeight) - this.elemHeight, mrgn = stickToTop ? "marginTop" : "marginBottom", notStuckTo = stickToTop ? "bottom" : "top", topOrBottom = isTop ? "top" : "bottom";
                css[mrgn] = 0, isTop && !stickToTop || stickToTop && !isTop ? (css[stickTo] = anchorPt, 
                css[notStuckTo] = 0) : (css[stickTo] = 0, css[notStuckTo] = anchorPt), css.left = "", 
                this.isStuck = !1, this.$element.removeClass("is-stuck is-at-" + stickTo).addClass("is-anchored is-at-" + topOrBottom).css(css).trigger("sticky.zf.unstuckfrom:" + topOrBottom);
            }
        }, {
            key: "_setSizes",
            value: function(cb) {
                this.canStick = Foundation.MediaQuery.atLeast(this.options.stickyOn), this.canStick || cb();
                var newElemWidth = this.$container[0].getBoundingClientRect().width, comp = window.getComputedStyle(this.$container[0]), pdng = parseInt(comp["padding-right"], 10);
                this.$anchor && this.$anchor.length ? this.anchorHeight = this.$anchor[0].getBoundingClientRect().height : this._parsePoints(), 
                this.$element.css({
                    "max-width": newElemWidth - pdng + "px"
                });
                var newContainerHeight = this.$element[0].getBoundingClientRect().height || this.containerHeight;
                this.containerHeight = newContainerHeight, this.$container.css({
                    height: newContainerHeight
                }), this.elemHeight = newContainerHeight, this.isStuck && this.$element.css({
                    left: this.$container.offset().left + parseInt(comp["padding-left"], 10)
                }), this._setBreakPoints(newContainerHeight, function() {
                    cb && cb();
                });
            }
        }, {
            key: "_setBreakPoints",
            value: function(elemHeight, cb) {
                if (!this.canStick) {
                    if (!cb) return !1;
                    cb();
                }
                var mTop = emCalc(this.options.marginTop), mBtm = emCalc(this.options.marginBottom), topPoint = this.points ? this.points[0] : this.$anchor.offset().top, bottomPoint = this.points ? this.points[1] : topPoint + this.anchorHeight, winHeight = window.innerHeight;
                "top" === this.options.stickTo ? (topPoint -= mTop, bottomPoint -= elemHeight + mTop) : "bottom" === this.options.stickTo && (topPoint -= winHeight - (elemHeight + mBtm), 
                bottomPoint -= winHeight - mBtm), this.topPoint = topPoint, this.bottomPoint = bottomPoint, 
                cb && cb();
            }
        }, {
            key: "destroy",
            value: function() {
                this._removeSticky(!0), this.$element.removeClass(this.options.stickyClass + " is-anchored is-at-top").css({
                    height: "",
                    top: "",
                    bottom: "",
                    "max-width": ""
                }).off("resizeme.zf.trigger"), this.$anchor.off("change.zf.sticky"), $(window).off(this.scrollListener), 
                this.wasWrapped ? this.$element.unwrap() : this.$container.removeClass(this.options.containerClass).css({
                    height: ""
                }), Foundation.unregisterPlugin(this);
            }
        } ]), Sticky;
    }();
    Sticky.defaults = {
        container: "<div data-sticky-container></div>",
        stickTo: "top",
        anchor: "",
        topAnchor: "",
        btmAnchor: "",
        marginTop: 1,
        marginBottom: 1,
        stickyOn: "medium",
        stickyClass: "sticky",
        containerClass: "sticky-container",
        checkEvery: -1
    }, Foundation.plugin(Sticky, "Sticky");
}(jQuery);

var _createClass = function() {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
            "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    return function(Constructor, protoProps, staticProps) {
        return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
        Constructor;
    };
}();

!function($) {
    var Tabs = function() {
        function Tabs(element, options) {
            _classCallCheck(this, Tabs), this.$element = element, this.options = $.extend({}, Tabs.defaults, this.$element.data(), options), 
            this._init(), Foundation.registerPlugin(this, "Tabs"), Foundation.Keyboard.register("Tabs", {
                ENTER: "open",
                SPACE: "open",
                ARROW_RIGHT: "next",
                ARROW_UP: "previous",
                ARROW_DOWN: "next",
                ARROW_LEFT: "previous"
            });
        }
        return _createClass(Tabs, [ {
            key: "_init",
            value: function() {
                var _this = this;
                if (this.$tabTitles = this.$element.find("." + this.options.linkClass), this.$tabContent = $('[data-tabs-content="' + this.$element[0].id + '"]'), 
                this.$tabTitles.each(function() {
                    var $elem = $(this), $link = $elem.find("a"), isActive = $elem.hasClass("is-active"), hash = $link[0].hash.slice(1), linkId = $link[0].id ? $link[0].id : hash + "-label", $tabContent = $("#" + hash);
                    $elem.attr({
                        role: "presentation"
                    }), $link.attr({
                        role: "tab",
                        "aria-controls": hash,
                        "aria-selected": isActive,
                        id: linkId
                    }), $tabContent.attr({
                        role: "tabpanel",
                        "aria-hidden": !isActive,
                        "aria-labelledby": linkId
                    }), isActive && _this.options.autoFocus && $link.focus();
                }), this.options.matchHeight) {
                    var $images = this.$tabContent.find("img");
                    $images.length ? Foundation.onImagesLoaded($images, this._setHeight.bind(this)) : this._setHeight();
                }
                this._events();
            }
        }, {
            key: "_events",
            value: function() {
                this._addKeyHandler(), this._addClickHandler(), this.options.matchHeight && $(window).on("changed.zf.mediaquery", this._setHeight.bind(this));
            }
        }, {
            key: "_addClickHandler",
            value: function() {
                var _this = this;
                this.$element.off("click.zf.tabs").on("click.zf.tabs", "." + this.options.linkClass, function(e) {
                    e.preventDefault(), e.stopPropagation(), $(this).hasClass("is-active") || _this._handleTabChange($(this));
                });
            }
        }, {
            key: "_addKeyHandler",
            value: function() {
                var _this = this;
                _this.$element.find("li:first-of-type"), _this.$element.find("li:last-of-type");
                this.$tabTitles.off("keydown.zf.tabs").on("keydown.zf.tabs", function(e) {
                    if (9 !== e.which) {
                        e.stopPropagation(), e.preventDefault();
                        var $prevElement, $nextElement, $element = $(this), $elements = $element.parent("ul").children("li");
                        $elements.each(function(i) {
                            return $(this).is($element) ? void (_this.options.wrapOnKeys ? ($prevElement = 0 === i ? $elements.last() : $elements.eq(i - 1), 
                            $nextElement = i === $elements.length - 1 ? $elements.first() : $elements.eq(i + 1)) : ($prevElement = $elements.eq(Math.max(0, i - 1)), 
                            $nextElement = $elements.eq(Math.min(i + 1, $elements.length - 1)))) : void 0;
                        }), Foundation.Keyboard.handleKey(e, "Tabs", {
                            open: function() {
                                $element.find('[role="tab"]').focus(), _this._handleTabChange($element);
                            },
                            previous: function() {
                                $prevElement.find('[role="tab"]').focus(), _this._handleTabChange($prevElement);
                            },
                            next: function() {
                                $nextElement.find('[role="tab"]').focus(), _this._handleTabChange($nextElement);
                            }
                        });
                    }
                });
            }
        }, {
            key: "_handleTabChange",
            value: function($target) {
                var $tabLink = $target.find('[role="tab"]'), hash = $tabLink[0].hash, $targetContent = this.$tabContent.find(hash), $oldTab = this.$element.find("." + this.options.linkClass + ".is-active").removeClass("is-active").find('[role="tab"]').attr({
                    "aria-selected": "false"
                });
                $("#" + $oldTab.attr("aria-controls")).removeClass("is-active").attr({
                    "aria-hidden": "true"
                }), $target.addClass("is-active"), $tabLink.attr({
                    "aria-selected": "true"
                }), $targetContent.addClass("is-active").attr({
                    "aria-hidden": "false"
                }), this.$element.trigger("change.zf.tabs", [ $target ]);
            }
        }, {
            key: "selectTab",
            value: function(elem) {
                var idStr;
                idStr = "object" == typeof elem ? elem[0].id : elem, idStr.indexOf("#") < 0 && (idStr = "#" + idStr);
                var $target = this.$tabTitles.find('[href="' + idStr + '"]').parent("." + this.options.linkClass);
                this._handleTabChange($target);
            }
        }, {
            key: "_setHeight",
            value: function() {
                var max = 0;
                this.$tabContent.find("." + this.options.panelClass).css("height", "").each(function() {
                    var panel = $(this), isActive = panel.hasClass("is-active");
                    isActive || panel.css({
                        visibility: "hidden",
                        display: "block"
                    });
                    var temp = this.getBoundingClientRect().height;
                    isActive || panel.css({
                        visibility: "",
                        display: ""
                    }), max = temp > max ? temp : max;
                }).css("height", max + "px");
            }
        }, {
            key: "destroy",
            value: function() {
                this.$element.find("." + this.options.linkClass).off(".zf.tabs").hide().end().find("." + this.options.panelClass).hide(), 
                this.options.matchHeight && $(window).off("changed.zf.mediaquery"), Foundation.unregisterPlugin(this);
            }
        } ]), Tabs;
    }();
    Tabs.defaults = {
        autoFocus: !1,
        wrapOnKeys: !0,
        matchHeight: !1,
        linkClass: "tabs-title",
        panelClass: "tabs-panel"
    }, Foundation.plugin(Tabs, "Tabs");
}(jQuery);

var _createClass = function() {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
            "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    return function(Constructor, protoProps, staticProps) {
        return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
        Constructor;
    };
}();

!function($) {
    var Toggler = function() {
        function Toggler(element, options) {
            _classCallCheck(this, Toggler), this.$element = element, this.options = $.extend({}, Toggler.defaults, element.data(), options), 
            this.className = "", this._init(), this._events(), Foundation.registerPlugin(this, "Toggler");
        }
        return _createClass(Toggler, [ {
            key: "_init",
            value: function() {
                var input;
                this.options.animate ? (input = this.options.animate.split(" "), this.animationIn = input[0], 
                this.animationOut = input[1] || null) : (input = this.$element.data("toggler"), 
                this.className = "." === input[0] ? input.slice(1) : input);
                var id = this.$element[0].id;
                $('[data-open="' + id + '"], [data-close="' + id + '"], [data-toggle="' + id + '"]').attr("aria-controls", id), 
                this.$element.attr("aria-expanded", this.$element.is(":hidden") ? !1 : !0);
            }
        }, {
            key: "_events",
            value: function() {
                this.$element.off("toggle.zf.trigger").on("toggle.zf.trigger", this.toggle.bind(this));
            }
        }, {
            key: "toggle",
            value: function() {
                this[this.options.animate ? "_toggleAnimate" : "_toggleClass"]();
            }
        }, {
            key: "_toggleClass",
            value: function() {
                this.$element.toggleClass(this.className);
                var isOn = this.$element.hasClass(this.className);
                isOn ? this.$element.trigger("on.zf.toggler") : this.$element.trigger("off.zf.toggler"), 
                this._updateARIA(isOn);
            }
        }, {
            key: "_toggleAnimate",
            value: function() {
                var _this = this;
                this.$element.is(":hidden") ? Foundation.Motion.animateIn(this.$element, this.animationIn, function() {
                    this.trigger("on.zf.toggler"), _this._updateARIA(!0);
                }) : Foundation.Motion.animateOut(this.$element, this.animationOut, function() {
                    this.trigger("off.zf.toggler"), _this._updateARIA(!1);
                });
            }
        }, {
            key: "_updateARIA",
            value: function(isOn) {
                this.$element.attr("aria-expanded", isOn ? !0 : !1);
            }
        }, {
            key: "destroy",
            value: function() {
                this.$element.off(".zf.toggler"), Foundation.unregisterPlugin(this);
            }
        } ]), Toggler;
    }();
    Toggler.defaults = {
        animate: !1
    }, Foundation.plugin(Toggler, "Toggler");
}(jQuery);

var _createClass = function() {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
            "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    return function(Constructor, protoProps, staticProps) {
        return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
        Constructor;
    };
}();

!function($) {
    var Tooltip = function() {
        function Tooltip(element, options) {
            _classCallCheck(this, Tooltip), this.$element = element, this.options = $.extend({}, Tooltip.defaults, this.$element.data(), options), 
            this.isActive = !1, this.isClick = !1, this._init(), Foundation.registerPlugin(this, "Tooltip");
        }
        return _createClass(Tooltip, [ {
            key: "_init",
            value: function() {
                var elemId = this.$element.attr("aria-describedby") || Foundation.GetYoDigits(6, "tooltip");
                this.options.positionClass = this._getPositionClass(this.$element), this.options.tipText = this.options.tipText || this.$element.attr("title"), 
                this.template = this.options.template ? $(this.options.template) : this._buildTemplate(elemId), 
                this.template.appendTo(document.body).text(this.options.tipText).hide(), this.$element.attr({
                    title: "",
                    "aria-describedby": elemId,
                    "data-yeti-box": elemId,
                    "data-toggle": elemId,
                    "data-resize": elemId
                }).addClass(this.triggerClass), this.usedPositions = [], this.counter = 4, this.classChanged = !1, 
                this._events();
            }
        }, {
            key: "_getPositionClass",
            value: function(element) {
                if (!element) return "";
                var position = element[0].className.match(/\b(top|left|right)\b/g);
                return position = position ? position[0] : "";
            }
        }, {
            key: "_buildTemplate",
            value: function(id) {
                var templateClasses = (this.options.tooltipClass + " " + this.options.positionClass + " " + this.options.templateClasses).trim(), $template = $("<div></div>").addClass(templateClasses).attr({
                    role: "tooltip",
                    "aria-hidden": !0,
                    "data-is-active": !1,
                    "data-is-focus": !1,
                    id: id
                });
                return $template;
            }
        }, {
            key: "_reposition",
            value: function(position) {
                this.usedPositions.push(position ? position : "bottom"), !position && this.usedPositions.indexOf("top") < 0 ? this.template.addClass("top") : "top" === position && this.usedPositions.indexOf("bottom") < 0 ? this.template.removeClass(position) : "left" === position && this.usedPositions.indexOf("right") < 0 ? this.template.removeClass(position).addClass("right") : "right" === position && this.usedPositions.indexOf("left") < 0 ? this.template.removeClass(position).addClass("left") : !position && this.usedPositions.indexOf("top") > -1 && this.usedPositions.indexOf("left") < 0 ? this.template.addClass("left") : "top" === position && this.usedPositions.indexOf("bottom") > -1 && this.usedPositions.indexOf("left") < 0 ? this.template.removeClass(position).addClass("left") : "left" === position && this.usedPositions.indexOf("right") > -1 && this.usedPositions.indexOf("bottom") < 0 ? this.template.removeClass(position) : "right" === position && this.usedPositions.indexOf("left") > -1 && this.usedPositions.indexOf("bottom") < 0 ? this.template.removeClass(position) : this.template.removeClass(position), 
                this.classChanged = !0, this.counter--;
            }
        }, {
            key: "_setPosition",
            value: function() {
                var position = this._getPositionClass(this.template), $tipDims = Foundation.Box.GetDimensions(this.template), $anchorDims = Foundation.Box.GetDimensions(this.$element), direction = "left" === position ? "left" : "right" === position ? "left" : "top", param = "top" === direction ? "height" : "width";
                "height" === param ? this.options.vOffset : this.options.hOffset;
                if ($tipDims.width >= $tipDims.windowDims.width || !this.counter && !Foundation.Box.ImNotTouchingYou(this.template)) return this.template.offset(Foundation.Box.GetOffsets(this.template, this.$element, "center bottom", this.options.vOffset, this.options.hOffset, !0)).css({
                    width: $anchorDims.windowDims.width - 2 * this.options.hOffset,
                    height: "auto"
                }), !1;
                for (this.template.offset(Foundation.Box.GetOffsets(this.template, this.$element, "center " + (position || "bottom"), this.options.vOffset, this.options.hOffset)); !Foundation.Box.ImNotTouchingYou(this.template) && this.counter; ) this._reposition(position), 
                this._setPosition();
            }
        }, {
            key: "show",
            value: function() {
                if ("all" !== this.options.showOn && !Foundation.MediaQuery.atLeast(this.options.showOn)) return !1;
                var _this = this;
                this.template.css("visibility", "hidden").show(), this._setPosition(), this.$element.trigger("closeme.zf.tooltip", this.template.attr("id")), 
                this.template.attr({
                    "data-is-active": !0,
                    "aria-hidden": !1
                }), _this.isActive = !0, this.template.stop().hide().css("visibility", "").fadeIn(this.options.fadeInDuration, function() {}), 
                this.$element.trigger("show.zf.tooltip");
            }
        }, {
            key: "hide",
            value: function() {
                var _this = this;
                this.template.stop().attr({
                    "aria-hidden": !0,
                    "data-is-active": !1
                }).fadeOut(this.options.fadeOutDuration, function() {
                    _this.isActive = !1, _this.isClick = !1, _this.classChanged && (_this.template.removeClass(_this._getPositionClass(_this.template)).addClass(_this.options.positionClass), 
                    _this.usedPositions = [], _this.counter = 4, _this.classChanged = !1);
                }), this.$element.trigger("hide.zf.tooltip");
            }
        }, {
            key: "_events",
            value: function() {
                var _this = this, isFocus = (this.template, !1);
                this.options.disableHover || this.$element.on("mouseenter.zf.tooltip", function(e) {
                    _this.isActive || (_this.timeout = setTimeout(function() {
                        _this.show();
                    }, _this.options.hoverDelay));
                }).on("mouseleave.zf.tooltip", function(e) {
                    clearTimeout(_this.timeout), (!isFocus || !_this.isClick && _this.options.clickOpen) && _this.hide();
                }), this.options.clickOpen && this.$element.on("mousedown.zf.tooltip", function(e) {
                    e.stopImmediatePropagation(), _this.isClick ? _this.hide() : (_this.isClick = !0, 
                    !_this.options.disableHover && _this.$element.attr("tabindex") || _this.isActive || _this.show());
                }), this.options.disableForTouch || this.$element.on("tap.zf.tooltip touchend.zf.tooltip", function(e) {
                    _this.isActive ? _this.hide() : _this.show();
                }), this.$element.on({
                    "close.zf.trigger": this.hide.bind(this)
                }), this.$element.on("focus.zf.tooltip", function(e) {
                    return isFocus = !0, _this.isClick ? !1 : void _this.show();
                }).on("focusout.zf.tooltip", function(e) {
                    isFocus = !1, _this.isClick = !1, _this.hide();
                }).on("resizeme.zf.trigger", function() {
                    _this.isActive && _this._setPosition();
                });
            }
        }, {
            key: "toggle",
            value: function() {
                this.isActive ? this.hide() : this.show();
            }
        }, {
            key: "destroy",
            value: function() {
                this.$element.attr("title", this.template.text()).off(".zf.trigger .zf.tootip").removeAttr("aria-describedby").removeAttr("data-yeti-box").removeAttr("data-toggle").removeAttr("data-resize"), 
                this.template.remove(), Foundation.unregisterPlugin(this);
            }
        } ]), Tooltip;
    }();
    Tooltip.defaults = {
        disableForTouch: !1,
        hoverDelay: 200,
        fadeInDuration: 150,
        fadeOutDuration: 150,
        disableHover: !1,
        templateClasses: "",
        tooltipClass: "tooltip",
        triggerClass: "has-tip",
        showOn: "small",
        template: "",
        tipText: "",
        touchCloseText: "Tap to close.",
        clickOpen: !0,
        positionClass: "",
        vOffset: 10,
        hOffset: 12
    }, Foundation.plugin(Tooltip, "Tooltip");
}(jQuery);

var addRippleEffect = function(e) {
    var target = e.target;
    if (-1 === target.className.indexOf("ink")) return !1;
    var rect = target.getBoundingClientRect(), ripple = target.querySelector(".ripple");
    ripple || (ripple = document.createElement("span"), -1 !== target.className.indexOf("ink-color") ? ripple.className = "ripple-color" : ripple.className = "ripple", 
    ripple.style.height = ripple.style.width = Math.max(rect.width, rect.height) + "px", 
    target.appendChild(ripple)), ripple.classList.remove("show");
    var top = e.pageY - rect.top - ripple.offsetHeight / 2 - document.body.scrollTop, left = e.pageX - rect.left - ripple.offsetWidth / 2 - document.body.scrollLeft;
    return ripple.style.top = top + "px", ripple.style.left = left + "px", ripple.classList.add("show"), 
    !1;
};

document.addEventListener("click", addRippleEffect, !1), $.fn._toggleInput = function() {
    $(this).click(function() {
        $(this).toggleClass("checked");
    });
}, $("label.radio, label.checkbox")._toggleInput(), $(document).foundation();