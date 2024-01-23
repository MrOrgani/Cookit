export const wordpressCSS = `<style id="wpr-usedcss">
.cp-popup-container,.cp-popup-container * {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box
}

.cp-popup-container:after,.cp-popup:after,.cpro-form:after {
    clear: both
}

.cp-popup-container:after,.cp-popup-container:before,.cp-popup:after,.cp-popup:before,.cpro-form:after,.cpro-form:before {
    display: table;
    content: ""
}

html.cp-disable-scroll {
    overflow: hidden
}

button.cp-button-field,input.cp-form-field,select.cp-form-field,textarea.cp-form-field {
    margin: 0
}

.cp-field-html-data ::-webkit-input-placeholder {
    font-family: inherit;
    font-weight: inherit;
    color: inherit
}

.cp-field-html-data ::-moz-placeholder {
    font-family: inherit;
    font-weight: inherit;
    color: inherit
}

.cp-field-html-data :-ms-input-placeholder {
    font-family: inherit;
    font-weight: inherit;
    color: inherit
}

.cp-field-html-data :-moz-placeholder {
    font-family: inherit;
    font-weight: inherit;
    color: inherit
}

.cp-field-element::-moz-placeholder,.cp-field-element::-webkit-input-placeholder,.cp-field-html-data input[type]:-ms-input-placeholder,.cp-field-html-data input[type]::-moz-placeholder,.cp-field-html-data input[type]::-webkit-input-placeholder,.cp-field-html-data textarea:-ms-input-placeholder,.cp-field-html-data textarea::-moz-placeholder,.cp-field-html-data textarea::-webkit-input-placeholder {
    color: inherit;
    font-family: inherit
}

.cp-field-html-data select option {
    background-color: inherit
}

.cp-field-html-data[data-action=close] {
    pointer-events: all
}

.cp-popup-container .cp-field-html-data.cpro-overlay-field {
    position: fixed!important;
    z-index: 999999!important
}

.cp-popup-container.cp-module-full_screen .cp-field-html-data.cpro-overlay-field {
    z-index: 99999999!important
}

.cp-field-html-data[data-type=cp_button] .cp-button,.cp-field-html-data[data-type=cp_button] .cp-button:hover {
    background: 0 0;
    line-height: 1;
    text-shadow: none
}

.cp-field-html-data[data-type=cp_button] .cp-button,.cp-field-html-data[data-type=cp_button] .cp-button:focus {
    outline: 0;
    box-shadow: none;
    position: inherit
}

.cp-field-html-data[data-type=cp_gradient_button] .cp-button {
    line-height: 1;
    position: inherit
}

.cp-target.cp-button-tooltip.cp-tooltip-bottom:after,.cp-target.cp-button-tooltip.cp-tooltip-top:after {
    content: '';
    position: absolute;
    left: 50%;
    margin-left: -5px;
    border-width: 6px;
    border-style: solid
}

.cp-target.cp-button-tooltip.cp-tooltip-top:after {
    border-color: #d6e9c6 transparent transparent;
    bottom: 101%;
    bottom: calc(100% + 1px)
}

.cp-target.cp-button-tooltip.cp-tooltip-bottom:after {
    bottom: -20%;
    border-color: transparent transparent #f9f9f9
}

.cp-target.cp-button-tooltip:before {
    content: attr(data-content);
    position: absolute;
    text-align: center;
    pointer-events: none;
    background: #fafafa;
    font-size: 13px;
    min-width: 238px;
    left: 50%;
    transform: translateX(-50%);
    color: #444
}

.cp-field-html-data .cp-shape-container.cp-tooltip-bottom:before {
    content: attr(data-content);
    position: absolute;
    top: 120%;
    background: #fafafa;
    font-size: 13px;
    min-width: 238px;
    left: 50%;
    transform: translateX(-50%);
    padding: 15px;
    margin-bottom: 12px;
    border-radius: 3px;
    color: #444;
    box-shadow: 0 3px 7px rgba(0,0,0,.15);
    pointer-events: none;
    text-align: center;
    line-height: 19px
}

.cp-field-html-data .cp-shape-container.cp-tooltip-top:before {
    content: attr(data-content);
    position: absolute;
    bottom: 100%;
    background: #fafafa;
    font-size: 13px;
    min-width: 238px;
    left: 50%;
    transform: translateX(-50%);
    padding: 15px;
    margin-bottom: 12px;
    border-radius: 3px;
    color: #444;
    box-shadow: 0 3px 7px rgba(0,0,0,.15);
    pointer-events: none;
    text-align: center;
    line-height: 19px
}

.cp-target.cp-button-tooltip.cp-tooltip-top:before {
    bottom: calc(100% + 12px);
    padding: 15px;
    margin: 0;
    border-radius: 3px
}

.cp-target.cp-button-tooltip.cp-tooltip-bottom:before {
    top: 120%;
    padding: 15px;
    margin-bottom: 12px;
    border-radius: 3px;
    box-shadow: 0 3px 7px rgba(0,0,0,.15)
}

.cp-state-success .cp-target.cp-button-tooltip.cp-tooltip-bottom:before,.cp-state-success .cp-target.cp-button-tooltip.cp-tooltip-top:before {
    color: #3c763d;
    background: #dff0d8;
    border: 1px solid #d6e9c6
}

.cp-error-tooltip .cp-target.cp-button-tooltip.cp-tooltip-bottom:before,.cp-error-tooltip .cp-target.cp-button-tooltip.cp-tooltip-top:before {
    color: #a94442;
    line-height: 1.4;
    min-width: 320px;
    background-color: #f2dede;
    border: 1px solid #ebccd1;
    text-transform: none
}

.cp-error-tooltip .cp-target.cp-button-tooltip.cp-tooltip-top:after {
    border-color: #f1dddd transparent transparent
}

.cp-field-html-data .cp_shape_submit_hidden {
    display: none
}

.cp-field-html-data.cp-shapes-wrap.cp-error-tooltip,.cp-field-html-data.cp-shapes-wrap.cp-state-success {
    z-index: 26!important
}

.cp-field-html-data .cp_shape_submit_label,.cp-field-html-data.cp-shapes-wrap[data-action=goto_url] svg,.cp-field-html-data.cp-shapes-wrap[data-action=submit_n_goto_url] svg {
    cursor: pointer
}

.cp-field-html-data .cp-shape-container.cp-tooltip-bottom:after,.cp-field-html-data .cp-shape-container.cp-tooltip-top:after {
    content: '';
    position: absolute;
    left: 50%;
    margin-left: -5px;
    border-width: 6px;
    border-style: solid
}

.cp-field-html-data .cp-shape-container.cp-tooltip-top:after {
    bottom: 101%;
    border-color: #3c763d transparent transparent
}

.cp-state-success.cp-field-html-data .cp-shape-container.cp-tooltip-top:after {
    border-color: #dff0d8 transparent transparent
}

.cp-field-html-data .cp-shape-container.cp-tooltip-bottom:after {
    bottom: -20%;
    border-color: transparent transparent #f9f9f9
}

.cp-btn-tooltip {
    position: absolute;
    bottom: 120%;
    bottom: calc(100% + 12px);
    font-size: 13px;
    min-width: 238px;
    left: 50%;
    transform: translateX(-50%)
}

.cp-shape-tooltip {
    position: absolute;
    bottom: 120%;
    bottom: calc(100% + 12px);
    font-size: 13px;
    min-width: 238px;
    left: 50%;
    transform: translateX(-50%)
}

.cp-error-tooltip.cp-field-html-data .cp-shape-container.cp-tooltip-top:after {
    border-color: #f2dede transparent transparent!important
}

.cp-tooltip-close:hover {
    color: red
}

.cp-field-html-data[data-action] .cp-error-tip-content {
    cursor: auto
}

.cp-error-tip-content {
    color: #a94442;
    line-height: 1.4;
    min-width: 320px;
    background-color: #f2dede;
    border: 1px solid #ebccd1;
    text-transform: none;
    padding: 15px;
    margin: 0;
    border-radius: 3px
}

.cp-tooltip-close {
    width: 10px;
    height: 10px;
    line-height: 10px;
    position: absolute;
    top: 5px;
    right: 5px
}

body.cpro-wel-mat-open {
    transition: all 0s ease 0s,padding-top .7s ease-in-out
}

.cp-state-success.cp-field-html-data .cp-shape-container.cp-tooltip-bottom:before,.cp-state-success.cp-field-html-data .cp-shape-container.cp-tooltip-top:before {
    color: #3c763d;
    background: #dff0d8;
    border: 1px solid #d6e9c6;
    text-transform: capitalize
}

.cp-error-tooltip.cp-field-html-data .cp-shape-container.cp-tooltip-bottom:before,.cp-error-tooltip.cp-field-html-data .cp-shape-container.cp-tooltip-top:before {
    color: #a94442;
    line-height: 1.4;
    min-width: 320px;
    background-color: #f2dede;
    border: 1px solid #ebccd1;
    text-transform: none
}

.cpro-overlay {
    position: fixed;
    z-index: 999999;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    overflow-y: auto
}

.cp-module-info_bar .cp-popup-wrapper {
    display: none
}

.cp-popup-container.cpro-open .cpro-overlay {
    opacity: 1;
    visibility: visible;
    overflow: auto;
    display: block;
    cursor: pointer
}

.cp-popup-container.cpro-open.cp-module-widget .cp-popup-wrapper {
    overflow: visible
}

.cp-popup-container.cpro-open .cp-popup-wrapper {
    opacity: 1;
    visibility: visible;
    display: block;
    width: 100%
}

.cp-popup-wrapper {
    z-index: 999999;
    pointer-events: none
}

.cp-popup-wrapper.cp-close {
    overflow: auto;
    -webkit-animation-name: fadeOut;
    animation-name: fadeOut;
    -webkit-animation-duration: .3s;
    animation-duration: .3s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both
}

@-webkit-keyframes fadeOut {
    0% {
        opacity: 1
    }

    100% {
        opacity: 0
    }
}

.cp-module-modal_popup .cp-popup {
    width: 100%;
    max-width: 100%;
    display: block;
    margin: 0 auto;
    position: fixed;
    -webkit-perspective: 1200px;
    -moz-perspective: 1200px;
    -ms-perspective: 1200px;
    perspective: 1200px;
    font-style: normal;
    font-weight: 400;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    z-index: 99
}

html.cpro-exceed-viewport .cp-module-modal_popup .cp-popup,html.cpro-ios-device .cp-module-full_screen .cp-popup,html.cpro-ios-device .cp-module-modal_popup .cp-popup {
    position: absolute
}

html.cpro-exceed-viewport,html.cpro-ios-device .cpro-overlay {
    overflow: hidden
}

.cp-popup-content {
    display: none;
    position: relative;
    z-index: 999;
    width: 100%;
    opacity: 0;
    pointer-events: auto;
    box-shadow: none
}

.cp-popup-content.cpro-active-step {
    opacity: 1;
    display: block;
    -webkit-animation: 1s ease-out cproFadeInNone;
    -moz-animation: 1s ease-out cproFadeInNone;
    -o-animation: 1s ease-out cproFadeInNone;
    animation: 1s ease-out cproFadeInNone
}

@-webkit-keyframes cproFadeInNone {
    0% {
        display: none;
        opacity: 0
    }

    1% {
        display: block;
        opacity: 0
    }

    100% {
        display: block;
        opacity: 1
    }
}

@-moz-keyframes cproFadeInNone {
    0% {
        display: none;
        opacity: 0
    }

    1% {
        display: block;
        opacity: 0
    }

    100% {
        display: block;
        opacity: 1
    }
}

@-o-keyframes cproFadeInNone {
    0% {
        display: none;
        opacity: 0
    }

    1% {
        display: block;
        opacity: 0
    }

    100% {
        display: block;
        opacity: 1
    }
}

@keyframes cproFadeInNone {
    0% {
        display: none;
        opacity: 0
    }

    1% {
        display: block;
        opacity: 0
    }

    100% {
        display: block;
        opacity: 1
    }
}

.cp-module-full_screen .cp-popup-content,.cp-module-modal_popup .cp-popup-content {
    top: 50%;
    left: 50%;
    position: absolute;
    cursor: auto
}

.cp-module-widget .cp-popup-content {
    margin: 0 auto
}

.cp-module-before_after .cp-popup-content,.cp-module-inline .cp-popup-content {
    left: 50%;
    -webkit-transform: translateX(-50%);
    -moz-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
    position: relative;
    overflow: visible
}

.cp-popup-container.cp-module-before_after .cp-popup-wrapper,.cp-popup-container.cp-module-inline .cp-popup-wrapper {
    opacity: 1;
    display: block;
    visibility: visible;
    overflow: visible
}

.cp-popup-container.cp-module-widget {
    margin: 15px 0
}

.cp-module-before_after .cpro-animate-container,.cp-module-inline .cpro-animate-container,.cp-module-widget .cpro-animate-container {
    overflow: visible
}

.cp-module-modal_popup .cpro-animate-container {
    height: 100%;
    left: 0;
    bottom: auto;
    pointer-events: none
}

.cp-popup-content .cp-target p {
    margin: auto
}

.cp-field-html-data label {
    color: inherit;
    background-color: inherit;
    background: inherit;
    font-weight: inherit;
    display: block
}

button.cp-field-element,input[type].cp-field-element,textarea.cp-field-element {
    text-transform: none;
    line-height: 1.5;
    letter-spacing: normal
}

button.cp-field-element {
    padding: 0
}

.cp-field-html-data button[disabled] {
    cursor: default;
    opacity: 1
}

.cp-popup-container .cp-heading,.cp-popup-container .cp-target p {
    line-height: inherit;
    padding: 0;
    font-size: inherit;
    font-weight: inherit
}

.cp-popup-container .cp-target strong {
    font-weight: 700
}

.cp-popup-container .cp-target p,.cp-popup-container .cp-target strong {
    color: inherit;
    line-height: inherit;
    font-family: inherit;
    text-align: inherit
}

.cp-field-html-data img.cp-img-lazy {
    max-width: none
}

.cp-field-html-data .cp-field-element {
    overflow: hidden
}

.cp-popup-container.cp-module-full_screen .cp-popup {
    z-index: 99999999;
    height: 100%
}

.cp-close-container {
    cursor: pointer
}

.cp-field-html-data {
    position: absolute
}

.cp-popup-content::before {
    content: '';
    display: block;
    height: 100%;
    position: absolute;
    width: 100%;
    border-radius: inherit
}

.cp_loader_container {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    border-radius: 50%;
    border: 2px solid rgba(0,0,0,.2);
    animation-name: cp-loader-spin;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    position: relative;
    vertical-align: top
}

.cp_loader_container .cp-button-loader-style {
    position: relative;
    font-size: inherit;
    width: 1.5em;
    height: 1.5em;
    line-height: 1.5em
}

.cp_success_loader_container {
    -webkit-animation: none;
    animation: none;
    transition: border .5s ease-out
}

.cp_success_loader_container .cp-button-loader-style.draw:after {
    opacity: 1;
    animation-duration: 1.2s;
    animation-timing-function: ease;
    animation-name: cp-checkmark;
    transform: scaleX(-1) rotate(135deg);
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden
}

.cp_error_loader_container {
    -webkit-animation: none;
    animation: none;
    transition: border .5s ease-out;
    border: 2px solid #fff;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    border-radius: 50%;
    -webkit-animation: 1s fadein;
    -moz-animation: 1s fadein;
    -ms-animation: fadein 1s;
    -o-animation: 1s fadein;
    animation: 1s fadein
}

.cp_success_loader_container .cp-button-loader-style:after {
    opacity: 0;
    font-size: inherit;
    height: .88em;
    width: .42em;
    border-right: 2px solid;
    border-top: 2px solid;
    content: '';
    position: absolute;
    top: .8em;
    left: .26em;
    transform-origin: left top;
    -webkit-box-sizing: inherit;
    -moz-box-sizing: inherit;
    box-sizing: inherit
}

@keyframes fadein {
    from {
        opacity: 0
    }

    to {
        opacity: 1
    }
}

@-moz-keyframes fadein {
    from {
        opacity: 0
    }

    to {
        opacity: 1
    }
}

@-webkit-keyframes fadein {
    from {
        opacity: 0
    }

    to {
        opacity: 1
    }
}

@-ms-keyframes fadein {
    from {
        opacity: 0
    }

    to {
        opacity: 1
    }
}

@-o-keyframes fadein {
    from {
        opacity: 0
    }

    to {
        opacity: 1
    }
}

@keyframes cp-loader-spin {
    0% {
        transform: rotate(0)
    }

    100% {
        transform: rotate(360deg)
    }
}

@keyframes cp-checkmark {
    0% {
        height: 0;
        width: 0;
        opacity: 1
    }

    20% {
        height: 0;
        width: .42em;
        opacity: 1
    }

    40% {
        height: .88em;
        width: .42em;
        opacity: 1
    }

    100% {
        height: .88em;
        width: .42em;
        opacity: 1
    }
}

.cpro-form input[type=color],.cpro-form input[type=date],.cpro-form input[type=datetime-local],.cpro-form input[type=email],.cpro-form input[type=number],.cpro-form input[type=password],.cpro-form input[type=search],.cpro-form input[type=tel],.cpro-form input[type=text],.cpro-form input[type=time],.cpro-form input[type=url],.cpro-form select,.cpro-form textarea {
    background-color: transparent;
    box-shadow: inherit
}

.cp-popup input[type=checkbox],.cp-popup input[type=radio] {
    border: 1px solid #b4b9be;
    background: #fff;
    color: #555;
    clear: none;
    cursor: pointer;
    display: inline-block;
    line-height: 0;
    height: 16px;
    margin: -4px 4px 0 0;
    outline: 0;
    padding: 0!important;
    text-align: center;
    vertical-align: middle;
    width: 16px;
    min-width: 16px;
    -webkit-appearance: none;
    -webkit-box-shadow: inset 0 1px 2px rgba(0,0,0,.1);
    box-shadow: inset 0 1px 2px rgba(0,0,0,.1);
    -webkit-transition: border-color .05s ease-in-out;
    transition: .05s border-color ease-in-out
}

.cp-popup input[type=checkbox]:focus,.cp-popup input[type=radio]:focus {
    outline: 0
}

.cp-popup input[type=radio] {
    border-radius: 50%;
    line-height: 10px;
    margin-right: 4px;
    -webkit-border-radius: 50%
}

.cp-popup input[type=checkbox]:checked:before,.cp-popup input[type=radio]:checked:before {
    display: inline-block;
    font-family: convertpro!important;
    vertical-align: middle;
    width: 16px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale
}

.cp-popup input[type=radio]:checked:before {
    background-color: #1e8cbe;
    border-radius: 50%;
    content: "";
    font-size: 24px;
    height: 6px;
    margin: 4px;
    line-height: 16px;
    text-indent: -9999px;
    width: 6px
}

.cp-popup input[type=checkbox]:checked:before {
    content: "";
    color: #1e8cbe;
    font-size: 12px;
    font-weight: 700;
    margin: 0;
    position: absolute;
    top: 50%;
    transform: translate(-50%,-50%)
}

.cp-popup input[type=checkbox],.cp-popup input[type=email],.cp-popup input[type=number],.cp-popup input[type=password],.cp-popup input[type=radio],.cp-popup input[type=text],.cp-popup select,.cp-popup textarea {
    background-color: #fff;
    color: #32373c;
    outline: 0;
    transition: 50ms border-color ease-in-out;
    -webkit-transition: border-color 50ms ease-in-out;
    max-width: 100%
}

.cpro-form input[type=checkbox],.cpro-form input[type=radio] {
    box-shadow: inherit;
    margin-right: 5px
}

.cp-popup input[type=checkbox] {
    position: relative
}

img.cp-target.cp-field-element.cp-image {
    display: block;
    transform: translateZ(0)
}

.cp-target.cp-field-element.cp-form-input-field.cp-form-field.cp-checkbox-field,.cp-target.cp-field-element.cp-form-input-field.cp-form-field.cp-radio-field {
    background: 0 0;
    border: none;
    border-radius: 0;
    box-shadow: none;
    line-height: 20px
}

select.cp-target.cp-field-element.cp-form-input-field.cp-form-field.cp-dropdown-field {
    -webkit-appearance: none
}

.cp-popup-content .cp-field-html-data .cp-field-shadow {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: none
}

.cp-shapes-wrap svg.cp-target {
    display: block;
    height: inherit;
    width: inherit;
    transform: none;
    position: static
}

.cp-module-full_screen .cp-popup,.cp-module-info_bar .cp-popup {
    top: 0;
    bottom: auto;
    position: fixed;
    width: 100%!important;
    z-index: 999999
}

.cp-module-full_screen .cp-popup-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0
}

.cp-module-info_bar .cp-popup.cp-top {
    z-index: 999
}

.cp-popup-content .cpro-form-container {
    position: relative;
    width: 100%;
    height: 100%;
    display: inline-block
}

html.cpro-ib-open {
    transition: all 1s ease-in-out;
    -webkit-transition: 1s ease-in-out;
    -moz-transition: 1s ease-in-out;
    -ms-transition: 1s ease-in-out
}

.cp-module-info_bar .cp-popup.cp_infobar_toggle.cp-top {
    display: none
}

.cp-field-html-data[data-action],.cp-field-html-data[data-action] * {
    cursor: pointer
}

.cp-field-html-data[data-action=none] {
    cursor: default
}

.cp-module-before_after .cp-popup-wrapper {
    opacity: 1;
    visibility: visible;
    position: relative;
    overflow: auto;
    display: block;
    z-index: 9;
    -webkit-transition: opacity .3s,visibility .3s;
    -moz-transition: opacity .3s,visibility .3s;
    -ms-transition: opacity .3s,visibility .3s;
    transition: opacity .3s,visibility .3s
}

.cp-target.cp_button {
    overflow: auto;
    text-transform: none;
    line-height: 1em;
    letter-spacing: normal
}

.cp-open-infobar-toggle-wrap {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: none;
    z-index: 999999
}

.cp-open-infobar-toggle {
    position: fixed;
    cursor: pointer;
    width: 350px;
    height: 45px;
    pointer-events: auto;
    text-align: center;
    background: #faebd7;
    line-height: 45px;
    z-index: 999999;
    visibility: inherit;
    display: none
}

.cp-popup-container.cpro-open .cp-open-infobar-toggle {
    display: block
}

.cp-open-toggle-wrap.bottom-right {
    top: auto;
    bottom: 0
}

.cp-open-toggle {
    position: fixed;
    cursor: pointer;
    width: 350px;
    height: 45px;
    pointer-events: auto;
    text-align: center;
    background: #faebd7;
    line-height: 45px;
    z-index: 999999;
    visibility: inherit;
    display: none
}

.cp-popup-container.cpro-open .cp-open-toggle {
    display: block
}

.cp_has_toggle_sticky .cp-popup {
    z-index: 999999
}

.cp_has_toggle_sticky .cp-popup-content {
    transition: transform .75s
}

.cp_has_toggle .cp-popup-content.bottom-left,.cp_has_toggle .cp-popup-content.bottom-right {
    -webkit-transform: translateY(100%);
    -moz-transform: translateY(100%);
    -ms-transform: translateY(100%);
    -o-transform: translateY(100%);
    transform: translateY(100%)
}

.cp_has_toggle .cp-popup-content.bottom-center {
    -webkit-transform: translateX(-50%) translateY(100%);
    -moz-transform: translateX(-50%) translateY(100%);
    -ms-transform: translateX(-50%) translateY(100%);
    -o-transform: translateX(-50%) translateY(100%);
    transform: translateX(-50%) translateY(100%)
}

.cp_has_toggle .cp-popup-content.top-left,.cp_has_toggle .cp-popup-content.top-right {
    -webkit-transform: translateY(-100%);
    -moz-transform: translateY(-100%);
    -ms-transform: translateY(-100%);
    -o-transform: translateY(-100%);
    transform: translateY(-100%)
}

.cp_has_toggle .cp-popup-content.center-left {
    -webkit-transform: translateX(-100%) translateY(-50%);
    -moz-transform: translateX(-100%) translateY(-50%);
    -ms-transform: translateX(-100%) translateY(-50%);
    -o-transform: translateX(-100%) translateY(-50%);
    transform: translateX(-100%) translateY(-50%)
}

.cp_has_toggle .cp-popup-content.top-center {
    -webkit-transform: translateX(-50%) translateY(-100%);
    -moz-transform: translateX(-50%) translateY(-100%);
    -ms-transform: translateX(-50%) translateY(-100%);
    -o-transform: translateX(-50%) translateY(-100%);
    transform: translateX(-50%) translateY(-100%)
}

.cp-toggle-type-sticky {
    position: relative
}

.cp-popup-content.center-left .cp-toggle-type-sticky {
    top: 50%;
    left: 100%;
    right: auto;
    bottom: auto;
    -webkit-transform: rotate(-90deg) translateY(50%);
    -moz-transform: rotate(-90deg) translateY(50%);
    -ms-transform: rotate(-90deg) translateY(50%);
    -o-transform: rotate(-90deg) translateY(50%);
    transform: rotate(-90deg) translateY(50%);
    transform-origin: center
}

.cp-popup-content.center-right .cp-toggle-type-sticky {
    top: 50%;
    left: auto;
    right: 100%;
    bottom: auto;
    -webkit-transform: rotate(90deg) translateY(-50%);
    -moz-transform: rotate(90deg) translateY(-50%);
    -ms-transform: rotate(90deg) translateY(-50%);
    -o-transform: rotate(90deg) translateY(-50%);
    transform: rotate(90deg) translateY(-50%);
    transform-origin: center
}

.cp-toggle-type-sticky .cp-open-toggle {
    position: absolute
}

.cp-toggle-type-sticky.bottom-center .cp-open-toggle,.cp-toggle-type-sticky.bottom-left .cp-open-toggle,.cp-toggle-type-sticky.bottom-right .cp-open-toggle {
    top: auto;
    bottom: 0
}

.cp-toggle-type-sticky.bottom-right .cp-open-toggle,.cp-toggle-type-sticky.top-right .cp-open-toggle {
    right: 0
}

.cpro-video-container iframe,.cpro-video-container video {
    width: inherit;
    height: inherit
}

a[class^=manual_trigger_] {
    cursor: pointer
}

input.cpro-hp-field[type=text] {
    display: none!important
}

@media only screen and (max-width: 768px) {
    body.cpro-wel-mat-open {
        position:fixed;
        width: 100%;
        overflow-y: auto;
        max-height: 100%
    }

    html.cpro-overflow-mat {
        overflow: scroll
    }
}

@media only screen and (max-width: 480px) {
    .cp-module-modal_popup .cp-popup {
        position:absolute
    }
}

.g-recaptcha {
    transform: scale(.77);
    -webkit-transform: scale(.77);
    transform-origin: 0 0;
    -webkit-transform-origin: 0 0
}

.recaptcha-msg-error {
    color: #c65848
}

.g-recaptcha.error {
    border: 2px solid #c64848;
    padding: .2em;
    width: 21em
}

@media screen and (max-height: 575px) {
    .g-recaptcha {
        transform:scale(.77);
        -webkit-transform: scale(.77);
        transform-origin: 0 0;
        -webkit-transform-origin: 0 0
    }
}

.cp-animated {
    -webkit-animation-duration: .85s;
    animation-duration: .85s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    opacity: 1
}

@-webkit-keyframes cp-fadeIn {
    from {
        opacity: 0
    }

    to {
        opacity: 1
    }
}

@keyframes cp-fadeIn {
    from {
        opacity: 0
    }

    to {
        opacity: 1
    }
}

.cp-fadeIn {
    -webkit-animation-name: cp-fadeIn;
    animation-name: cp-fadeIn
}

@-webkit-keyframes cp-slideInDown {
    from {
        opacity: 0;
        -webkit-transform: translate3d(0,-100%,0);
        transform: translate3d(0,-100%,0);
        visibility: visible
    }

    to {
        opacity: 1;
        -webkit-transform: translate3d(0,0,0);
        transform: translate3d(0,0,0);
        visibility: visible
    }
}

@keyframes cp-slideInDown {
    from {
        opacity: 0;
        -webkit-transform: translate3d(0,-100%,0);
        transform: translate3d(0,-100%,0);
        visibility: visible
    }

    to {
        opacity: 1;
        -webkit-transform: translate3d(0,0,0);
        transform: translate3d(0,0,0);
        visibility: visible
    }
}

.cp-slideInDown {
    -webkit-animation-name: cp-slideInDown;
    animation-name: cp-slideInDown
}

@-webkit-keyframes cp-slideInLeft {
    from {
        opacity: 0;
        -webkit-transform: translate3d(-100%,0,0);
        transform: translate3d(-100%,0,0);
        visibility: visible
    }

    to {
        opacity: 1;
        -webkit-transform: translate3d(0,0,0);
        transform: translate3d(0,0,0);
        visibility: visible
    }
}

@keyframes cp-slideInLeft {
    from {
        opacity: 0;
        -webkit-transform: translate3d(-100%,0,0);
        transform: translate3d(-100%,0,0);
        visibility: visible
    }

    to {
        opacity: 1;
        -webkit-transform: translate3d(0,0,0);
        transform: translate3d(0,0,0);
        visibility: visible
    }
}

.cp-slideInLeft {
    -webkit-animation-name: cp-slideInLeft;
    animation-name: cp-slideInLeft
}

@-webkit-keyframes cp-slideInRight {
    from {
        opacity: 0;
        -webkit-transform: translate3d(100%,0,0);
        transform: translate3d(100%,0,0);
        visibility: visible
    }

    to {
        opacity: 1;
        -webkit-transform: translate3d(0,0,0);
        transform: translate3d(0,0,0);
        visibility: visible
    }
}

@keyframes cp-slideInRight {
    from {
        opacity: 0;
        -webkit-transform: translate3d(100%,0,0);
        transform: translate3d(100%,0,0);
        visibility: visible
    }

    to {
        opacity: 1;
        -webkit-transform: translate3d(0,0,0);
        transform: translate3d(0,0,0);
        visibility: visible
    }
}

.cp-slideInRight {
    -webkit-animation-name: cp-slideInRight;
    animation-name: cp-slideInRight
}

@-webkit-keyframes cp-slideInUp {
    from {
        opacity: 0;
        -webkit-transform: translate3d(0,100%,0);
        transform: translate3d(0,100%,0);
        visibility: visible
    }

    to {
        opacity: 1;
        -webkit-transform: translate3d(0,0,0);
        transform: translate3d(0,0,0);
        visibility: visible
    }
}

@keyframes cp-slideInUp {
    from {
        opacity: 0;
        -webkit-transform: translate3d(0,100%,0);
        transform: translate3d(0,100%,0);
        visibility: visible
    }

    to {
        opacity: 1;
        -webkit-transform: translate3d(0,0,0);
        transform: translate3d(0,0,0);
        visibility: visible
    }
}

.cp-slideInUp {
    -webkit-animation-name: cp-slideInUp;
    animation-name: cp-slideInUp
}

@-webkit-keyframes cp-slideOutLeft {
    from {
        opacity: 1;
        -webkit-transform: translate3d(0,0,0);
        transform: translate3d(0,0,0)
    }

    to {
        opacity: 0;
        visibility: hidden;
        -webkit-transform: translate3d(-100%,0,0);
        transform: translate3d(-100%,0,0)
    }
}

@keyframes cp-slideOutLeft {
    from {
        opacity: 1;
        -webkit-transform: translate3d(0,0,0);
        transform: translate3d(0,0,0)
    }

    to {
        opacity: 0;
        visibility: hidden;
        -webkit-transform: translate3d(-100%,0,0);
        transform: translate3d(-100%,0,0)
    }
}

.cp-slideOutLeft {
    -webkit-animation-name: cp-slideOutLeft;
    animation-name: cp-slideOutLeft
}

@-webkit-keyframes cp-slideOutRight {
    from {
        opacity: 1;
        -webkit-transform: translate3d(0,0,0);
        transform: translate3d(0,0,0)
    }

    to {
        opacity: 0;
        visibility: hidden;
        -webkit-transform: translate3d(100%,0,0);
        transform: translate3d(100%,0,0)
    }
}

@keyframes cp-slideOutRight {
    from {
        opacity: 1;
        -webkit-transform: translate3d(0,0,0);
        transform: translate3d(0,0,0)
    }

    to {
        opacity: 0;
        visibility: hidden;
        -webkit-transform: translate3d(100%,0,0);
        transform: translate3d(100%,0,0)
    }
}

.cp-slideOutRight {
    -webkit-animation-name: cp-slideOutRight;
    animation-name: cp-slideOutRight
}

@-webkit-keyframes cp-slideOutDown {
    from {
        opacity: 1;
        -webkit-transform: translate3d(0,0,0);
        transform: translate3d(0,0,0)
    }

    to {
        opacity: 0;
        visibility: hidden;
        -webkit-transform: translate3d(0,100%,0);
        transform: translate3d(0,100%,0)
    }
}

@keyframes cp-slideOutDown {
    from {
        opacity: 1;
        -webkit-transform: translate3d(0,0,0);
        transform: translate3d(0,0,0)
    }

    to {
        opacity: 0;
        visibility: hidden;
        -webkit-transform: translate3d(0,100%,0);
        transform: translate3d(0,100%,0)
    }
}

.cp-slideOutDown {
    -webkit-animation-name: cp-slideOutDown;
    animation-name: cp-slideOutDown
}

@keyframes cp-slideOutUp {
    from {
        transform: translate3d(0,0,0)
    }

    to {
        visibility: hidden;
        transform: translate3d(0,-100%,0)
    }
}

.cp-slideOutUp {
    animation-name: cp-slideOutUp
}

@-webkit-keyframes cp-fadeInScale {
    from {
        -webkit-transform: scale(.7);
        opacity: 0
    }

    50% {
        -webkit-transform: scale(1);
        opacity: 1
    }
}

@keyframes cp-fadeInScale {
    from {
        transform: scale(.7);
        opacity: 0
    }

    50% {
        transform: scale(1);
        opacity: 1
    }
}

.cp-fadeInScale {
    -webkit-animation-name: cp-fadeInScale;
    animation-name: cp-fadeInScale
}

.cp-popup-container .cp-popup-wrapper,.cp-popup-container .cpro-overlay {
    opacity: 0;
    visibility: hidden;
    display: none
}

body:after {
    content: url(https://www.budgetbytes.com/wp-content/plugins/instagram-feed-pro/img/sbi-sprite.png);
    display: none
}

.no-js .sbi_carousel {
    display: block
}

.fadeOut {
    animation-name: fadeOut
}

@keyframes fadeOut {
    0% {
        opacity: 1
    }

    100% {
        opacity: 0
    }
}

.wp-block-button__link {
    box-sizing: border-box;
    cursor: pointer;
    display: inline-block;
    text-align: center;
    word-break: break-word
}

:where(.wp-block-button__link) {
    border-radius: 9999px;
    box-shadow: none;
    padding: calc(.667em + 2px) calc(1.333em + 2px);
    text-decoration: none
}

.wp-block-button[style*=text-decoration] .wp-block-button__link {
    text-decoration: inherit
}

.wp-block-button .wp-block-button__link.is-style-outline,.wp-block-button.is-style-outline>.wp-block-button__link {
    border: 2px solid;
    padding: .667em 1.333em
}

.wp-block-button .wp-block-button__link.is-style-outline:not(.has-text-color),.wp-block-button.is-style-outline>.wp-block-button__link:not(.has-text-color) {
    color: currentColor
}

.wp-block-button .wp-block-button__link.is-style-outline:not(.has-background),.wp-block-button.is-style-outline>.wp-block-button__link:not(.has-background) {
    background-color: transparent;
    background-image: none
}

.wp-block-button .wp-block-button__link:where(.has-border-color) {
    border-width: initial
}

.wp-block-button .wp-block-button__link:where([style*=border-top-color]) {
    border-top-width: medium
}

.wp-block-button .wp-block-button__link:where([style*=border-right-color]) {
    border-right-width: medium
}

.wp-block-button .wp-block-button__link:where([style*=border-bottom-color]) {
    border-bottom-width: medium
}

.wp-block-button .wp-block-button__link:where([style*=border-left-color]) {
    border-left-width: medium
}

.wp-block-button .wp-block-button__link:where([style*=border-style]) {
    border-width: initial
}

.wp-block-button .wp-block-button__link:where([style*=border-top-style]) {
    border-top-width: medium
}

.wp-block-button .wp-block-button__link:where([style*=border-right-style]) {
    border-right-width: medium
}

.wp-block-button .wp-block-button__link:where([style*=border-bottom-style]) {
    border-bottom-width: medium
}

.wp-block-button .wp-block-button__link:where([style*=border-left-style]) {
    border-left-width: medium
}

.wp-block-buttons>.wp-block-button {
    display: inline-block;
    margin: 0
}

.wp-block-buttons.is-content-justification-center {
    justify-content: center
}

.wp-block-buttons[style*=text-decoration] .wp-block-button,.wp-block-buttons[style*=text-decoration] .wp-block-button__link {
    text-decoration: inherit
}

:where(.wp-block-calendar table:not(.has-background) th) {
    background: #ddd
}

:where(.wp-block-columns) {
    margin-bottom: 1.75em
}

:where(.wp-block-columns.has-background) {
    padding: 1.25em 2.375em
}

:where(.wp-block-post-comments input[type=submit]) {
    border: none
}

:where(.wp-block-cover-image:not(.has-text-color)),:where(.wp-block-cover:not(.has-text-color)) {
    color: #fff
}

:where(.wp-block-cover-image.is-light:not(.has-text-color)),:where(.wp-block-cover.is-light:not(.has-text-color)) {
    color: #000
}

:where(.wp-block-file) {
    margin-bottom: 1.5em
}

:where(.wp-block-file__button) {
    border-radius: 2em;
    display: inline-block;
    padding: .5em 1em
}

:where(.wp-block-file__button):is(a):active,:where(.wp-block-file__button):is(a):focus,:where(.wp-block-file__button):is(a):hover,:where(.wp-block-file__button):is(a):visited {
    box-shadow: none;
    color: #fff;
    opacity: .85;
    text-decoration: none
}

h1.has-background,h2.has-background,h3.has-background,h4.has-background {
    padding: 1.25em 2.375em
}

.wp-block-image img {
    box-sizing: border-box;
    height: auto;
    max-width: 100%;
    vertical-align: bottom
}

.wp-block-image[style*=border-radius] img,.wp-block-image[style*=border-radius]>a {
    border-radius: inherit
}

.wp-block-image.alignfull img {
    height: auto;
    width: 100%
}

.wp-block-image :where(.has-border-color) {
    border-style: solid
}

.wp-block-image :where([style*=border-top-color]) {
    border-top-style: solid
}

.wp-block-image :where([style*=border-right-color]) {
    border-right-style: solid
}

.wp-block-image :where([style*=border-bottom-color]) {
    border-bottom-style: solid
}

.wp-block-image :where([style*=border-left-color]) {
    border-left-style: solid
}

.wp-block-image :where([style*=border-width]) {
    border-style: solid
}

.wp-block-image :where([style*=border-top-width]) {
    border-top-style: solid
}

.wp-block-image :where([style*=border-right-width]) {
    border-right-style: solid
}

.wp-block-image :where([style*=border-bottom-width]) {
    border-bottom-style: solid
}

.wp-block-image :where([style*=border-left-width]) {
    border-left-style: solid
}

.wp-block-image figure {
    margin: 0
}

:where(.wp-block-latest-comments:not([style*=line-height] .wp-block-latest-comments__comment)) {
    line-height: 1.1
}

:where(.wp-block-latest-comments:not([style*=line-height] .wp-block-latest-comments__comment-excerpt p)) {
    line-height: 1.8
}

ol,ul {
    box-sizing: border-box
}

ol.has-background,ul.has-background {
    padding: 1.25em 2.375em
}

:where(.wp-block-navigation.has-background .wp-block-navigation-item a:not(.wp-element-button)),:where(.wp-block-navigation.has-background .wp-block-navigation-submenu a:not(.wp-element-button)) {
    padding: .5em 1em
}

:where(.wp-block-navigation .wp-block-navigation__submenu-container .wp-block-navigation-item a:not(.wp-element-button)),:where(.wp-block-navigation .wp-block-navigation__submenu-container .wp-block-navigation-submenu a:not(.wp-element-button)),:where(.wp-block-navigation .wp-block-navigation__submenu-container .wp-block-navigation-submenu button.wp-block-navigation-item__content),:where(.wp-block-navigation .wp-block-navigation__submenu-container .wp-block-pages-list__item button.wp-block-navigation-item__content) {
    padding: .5em 1em
}

p.has-background {
    padding: 1.25em 2.375em
}

:where(p.has-text-color:not(.has-link-color)) a {
    color: inherit
}

:where(.wp-block-post-excerpt) {
    margin-bottom: var(--wp--style--block-gap);
    margin-top: var(--wp--style--block-gap)
}

:where(.wp-block-preformatted.has-background) {
    padding: 1.25em 2.375em
}

:where(.wp-block-pullquote) {
    margin: 0 0 1em
}

:where(.wp-block-search__button) {
    border: 1px solid #ccc;
    padding: 6px 10px
}

.wp-block-search__input {
    -webkit-appearance: initial;
    appearance: none;
    border: 1px solid #949494;
    flex-grow: 1;
    margin-left: 0;
    margin-right: 0;
    min-width: 3rem;
    padding: 8px;
    text-decoration: unset!important
}

:where(.wp-block-search__button-inside .wp-block-search__inside-wrapper) {
    border: 1px solid #949494;
    box-sizing: border-box;
    padding: 4px
}

:where(.wp-block-search__button-inside .wp-block-search__inside-wrapper) .wp-block-search__input {
    border: none;
    border-radius: 0;
    padding: 0 4px
}

:where(.wp-block-search__button-inside .wp-block-search__inside-wrapper) .wp-block-search__input:focus {
    outline: 0
}

:where(.wp-block-search__button-inside .wp-block-search__inside-wrapper) :where(.wp-block-search__button) {
    padding: 4px 8px
}

.wp-block-spacer {
    clear: both
}

:where(.wp-block-term-description) {
    margin-bottom: var(--wp--style--block-gap);
    margin-top: var(--wp--style--block-gap)
}

:where(pre.wp-block-verse) {
    font-family: inherit
}

.entry-content {
    counter-reset: footnotes
}

.wp-element-button {
    cursor: pointer
}

:root {
    --wp--preset--font-size--normal: 16px;
    --wp--preset--font-size--huge: 42px
}

.has-huge-font-size {
    font-size: var(--wp--preset--font-size--huge)
}

.has-text-align-center {
    text-align: center
}

.screen-reader-text {
    clip: rect(1px,1px,1px,1px);
    word-wrap: normal!important;
    border: 0;
    -webkit-clip-path: inset(50%);
    clip-path: inset(50%);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px
}

.screen-reader-text:focus {
    clip: auto!important;
    background-color: #ddd;
    -webkit-clip-path: none;
    clip-path: none;
    color: #444;
    display: block;
    font-size: 1em;
    height: auto;
    left: 5px;
    line-height: normal;
    padding: 15px 23px 14px;
    text-decoration: none;
    top: 5px;
    width: auto;
    z-index: 100000
}

html :where(.has-border-color) {
    border-style: solid
}

html :where([style*=border-top-color]) {
    border-top-style: solid
}

html :where([style*=border-right-color]) {
    border-right-style: solid
}

html :where([style*=border-bottom-color]) {
    border-bottom-style: solid
}

html :where([style*=border-left-color]) {
    border-left-style: solid
}

html :where([style*=border-width]) {
    border-style: solid
}

html :where([style*=border-top-width]) {
    border-top-style: solid
}

html :where([style*=border-right-width]) {
    border-right-style: solid
}

html :where([style*=border-bottom-width]) {
    border-bottom-style: solid
}

html :where([style*=border-left-width]) {
    border-left-style: solid
}

html :where(img[class*=wp-image-]) {
    height: auto;
    max-width: 100%
}

:where(figure) {
    margin: 0 0 1em
}

html :where(.is-position-sticky) {
    --wp-admin--admin-bar--position-offset: var(--wp-admin--admin-bar--height,0px)
}

@media screen and (max-width: 600px) {
    html :where(.is-position-sticky) {
        --wp-admin--admin-bar--position-offset:0px
    }
}

body {
    --wp--preset--color--black: #000000;
    --wp--preset--color--cyan-bluish-gray: #abb8c3;
    --wp--preset--color--white: #ffffff;
    --wp--preset--color--pale-pink: #f78da7;
    --wp--preset--color--vivid-red: #cf2e2e;
    --wp--preset--color--luminous-vivid-orange: #ff6900;
    --wp--preset--color--luminous-vivid-amber: #fcb900;
    --wp--preset--color--light-green-cyan: #7bdcb5;
    --wp--preset--color--vivid-green-cyan: #00d084;
    --wp--preset--color--pale-cyan-blue: #8ed1fc;
    --wp--preset--color--vivid-cyan-blue: #0693e3;
    --wp--preset--color--vivid-purple: #9b51e0;
    --wp--preset--color--foreground: #000000;
    --wp--preset--color--background: #ffffff;
    --wp--preset--color--background-2: #f5f5f5;
    --wp--preset--color--primary: #FBC41B;
    --wp--preset--color--secondary: #292929;
    --wp--preset--color--tertiary: #57A600;
    --wp--preset--gradient--vivid-cyan-blue-to-vivid-purple: linear-gradient(135deg,rgba(6, 147, 227, 1) 0%,rgb(155, 81, 224) 100%);
    --wp--preset--gradient--light-green-cyan-to-vivid-green-cyan: linear-gradient(135deg,rgb(122, 220, 180) 0%,rgb(0, 208, 130) 100%);
    --wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange: linear-gradient(135deg,rgba(252, 185, 0, 1) 0%,rgba(255, 105, 0, 1) 100%);
    --wp--preset--gradient--luminous-vivid-orange-to-vivid-red: linear-gradient(135deg,rgba(255, 105, 0, 1) 0%,rgb(207, 46, 46) 100%);
    --wp--preset--gradient--very-light-gray-to-cyan-bluish-gray: linear-gradient(135deg,rgb(238, 238, 238) 0%,rgb(169, 184, 195) 100%);
    --wp--preset--gradient--cool-to-warm-spectrum: linear-gradient(135deg,rgb(74, 234, 220) 0%,rgb(151, 120, 209) 20%,rgb(207, 42, 186) 40%,rgb(238, 44, 130) 60%,rgb(251, 105, 98) 80%,rgb(254, 248, 76) 100%);
    --wp--preset--gradient--blush-light-purple: linear-gradient(135deg,rgb(255, 206, 236) 0%,rgb(152, 150, 240) 100%);
    --wp--preset--gradient--blush-bordeaux: linear-gradient(135deg,rgb(254, 205, 165) 0%,rgb(254, 45, 45) 50%,rgb(107, 0, 62) 100%);
    --wp--preset--gradient--luminous-dusk: linear-gradient(135deg,rgb(255, 203, 112) 0%,rgb(199, 81, 192) 50%,rgb(65, 88, 208) 100%);
    --wp--preset--gradient--pale-ocean: linear-gradient(135deg,rgb(255, 245, 203) 0%,rgb(182, 227, 212) 50%,rgb(51, 167, 181) 100%);
    --wp--preset--gradient--electric-grass: linear-gradient(135deg,rgb(202, 248, 128) 0%,rgb(113, 206, 126) 100%);
    --wp--preset--gradient--midnight: linear-gradient(135deg,rgb(2, 3, 129) 0%,rgb(40, 116, 252) 100%);
    --wp--preset--font-size--small: 16px;
    --wp--preset--font-size--medium: 20px;
    --wp--preset--font-size--large: clamp(20px, 3vw, 24px);
    --wp--preset--font-size--x-large: clamp(22px, 3.4vw, 24px);
    --wp--preset--font-size--tiny: 11px;
    --wp--preset--font-size--normal: 18px;
    --wp--preset--font-size--big: clamp(22px, 4vw, 28px);
    --wp--preset--font-size--huge: clamp(25px, 4.5vw, 31px);
    --wp--preset--font-size--jumbo: clamp(28px, 5vw, 33px);
    --wp--preset--font-size--gigantic: clamp(31px, 5.25vw, 36px);
    --wp--preset--font-size--colossal: clamp(34px, 8.3vw, 46px);
    --wp--preset--font-family--system-font: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;
    --wp--preset--font-family--serif: Montserrat;
    --wp--preset--font-family--mono: ui-monospace,SFMono-Regular,ui-monospace,Monaco,'Andale Mono','Ubuntu Mono',monospace;
    --wp--preset--spacing--20: 0.44rem;
    --wp--preset--spacing--30: 0.67rem;
    --wp--preset--spacing--40: 1rem;
    --wp--preset--spacing--50: 1.5rem;
    --wp--preset--spacing--60: 2.25rem;
    --wp--preset--spacing--70: 3.38rem;
    --wp--preset--spacing--80: 5.06rem;
    --wp--preset--shadow--natural: 6px 6px 9px rgba(0, 0, 0, .2);
    --wp--preset--shadow--deep: 12px 12px 50px rgba(0, 0, 0, .4);
    --wp--preset--shadow--sharp: 6px 6px 0px rgba(0, 0, 0, .2);
    --wp--preset--shadow--outlined: 6px 6px 0px -3px rgba(255, 255, 255, 1),6px 6px rgba(0, 0, 0, 1);
    --wp--preset--shadow--crisp: 6px 6px 0px rgba(0, 0, 0, 1);
    --wp--custom--border-radius--normal: 8px;
    --wp--custom--border-radius--large: 32px;
    --wp--custom--box-shadow--small: 0 4px 8px -4px rgba(113, 113, 113, .16);
    --wp--custom--box-shadow--normal: 0 8px 16px -8px rgba(113, 113, 113, .16);
    --wp--custom--box-shadow--large: 0 12px 32px -8px rgba(113, 113, 113, .16);
    --wp--custom--color--link: #4242FF;
    --wp--custom--color--primary-darken: #DFA904;
    --wp--custom--layout--content: 736px;
    --wp--custom--layout--post-content: 668px;
    --wp--custom--layout--wide: 1168px;
    --wp--custom--layout--sidebar: 336px;
    --wp--custom--layout--page: var(--wp--custom--layout--content);
    --wp--custom--layout--padding: 16px;
    --wp--custom--layout--block-gap: 1.5rem;
    --wp--custom--layout--grid-column-gap: 32px;
    --wp--custom--layout--grid-row-gap: 32px;
    --wp--custom--line-height--tiny: 1.1;
    --wp--custom--line-height--small: 1.2;
    --wp--custom--line-height--medium: 1.4;
    --wp--custom--line-height--normal: 1.5
}

.wp-block-button .wp-block-button__link {
    --wp--preset--color--primary: #FBC41B;
    --wp--preset--color--secondary: #292929;
    --wp--preset--color--white: #FFFFFF
}

body {
    margin: 0;
    --wp--style--global--content-size: var(--wp--custom--layout--content);
    --wp--style--global--wide-size: var(--wp--custom--layout--wide)
}

:where(.wp-site-blocks)>* {
    margin-block-start:var(--wp--custom--layout--block-gap);margin-block-end: 0
}

:where(.wp-site-blocks)>:first-child:first-child {
    margin-block-start:0}

:where(.wp-site-blocks)>:last-child:last-child {
    margin-block-end:0}

body {
    --wp--style--block-gap: var(--wp--custom--layout--block-gap)
}

:where(body .is-layout-flow)>:first-child:first-child {
    margin-block-start:0}

:where(body .is-layout-flow)>:last-child:last-child {
    margin-block-end:0}

:where(body .is-layout-flow)>* {
    margin-block-start:var(--wp--custom--layout--block-gap);margin-block-end: 0
}

:where(body .is-layout-constrained)>:first-child:first-child {
    margin-block-start:0}

:where(body .is-layout-constrained)>:last-child:last-child {
    margin-block-end:0}

:where(body .is-layout-constrained)>* {
    margin-block-start:var(--wp--custom--layout--block-gap);margin-block-end: 0
}

:where(body .is-layout-flex) {
    gap: var(--wp--custom--layout--block-gap)
}

:where(body .is-layout-grid) {
    gap: var(--wp--custom--layout--block-gap)
}

body .is-layout-flex {
    display: flex
}

body .is-layout-flex {
    flex-wrap: wrap;
    align-items: center
}

body .is-layout-flex>* {
    margin: 0
}

body {
    background-color: var(--wp--preset--color--background);
    color: var(--wp--preset--color--foreground);
    font-family: var(--wp--preset--font-family--system-font);
    font-size: var(--wp--preset--font-size--normal);
    line-height: var(--wp--custom--line-height--normal);
    padding-top: 0;
    padding-right: 0;
    padding-bottom: 0;
    padding-left: 0
}

a:where(:not(.wp-element-button)) {
    color: var(--wp--custom--color--link);
    text-decoration: underline
}

.wp-block-button__link,.wp-element-button {
    background-color: #32373c;
    border-width: 0;
    color: #fff;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    padding: calc(.667em + 2px) calc(1.333em + 2px);
    text-decoration: none
}

.has-background-color {
    color: var(--wp--preset--color--background)!important
}

.has-secondary-color {
    color: var(--wp--preset--color--secondary)!important
}

.has-primary-background-color {
    background-color: var(--wp--preset--color--primary)!important
}

.has-secondary-background-color {
    background-color: var(--wp--preset--color--secondary)!important
}

.has-small-font-size {
    font-size: var(--wp--preset--font-size--small)!important
}

.has-huge-font-size {
    font-size: var(--wp--preset--font-size--huge)!important
}

.wp-block-button .wp-block-button__link.has-secondary-color {
    color: var(--wp--preset--color--secondary)!important
}

.wp-block-button .wp-block-button__link.has-primary-background-color {
    background-color: var(--wp--preset--color--primary)!important
}

.wp-block-button .wp-block-button__link.has-secondary-background-color {
    background-color: var(--wp--preset--color--secondary)!important
}

.wp-block-button .wp-block-button__link {
    background-color: var(--wp--preset--color--primary);
    border-color: var(--wp--preset--color--primary);
    color: var(--wp--preset--color--background)
}

.dpsp-networks-btns-wrapper {
    margin: 0!important;
    padding: 0!important;
    list-style: none!important
}

.dpsp-networks-btns-wrapper:after {
    display: block;
    clear: both;
    height: 0;
    content: ""
}

.dpsp-networks-btns-wrapper li {
    float: left;
    margin: 0;
    padding: 0;
    border: 0;
    list-style-type: none!important;
    -webkit-transition: .15s ease-in;
    -moz-transition: .15s ease-in;
    -o-transition: .15s ease-in;
    transition: all .15s ease-in
}

.dpsp-networks-btns-wrapper li:before {
    display: none!important
}

.dpsp-networks-btns-wrapper li:first-child {
    margin-left: 0!important
}

.dpsp-networks-btns-wrapper .dpsp-network-btn {
    display: flex;
    position: relative;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    width: 100%;
    min-width: 40px;
    height: 40px;
    max-height: 40px;
    padding: 0;
    border: 2px solid;
    border-radius: 0;
    box-shadow: none;
    font-family: Arial,sans-serif;
    font-size: 14px;
    font-weight: 700;
    line-height: 36px;
    text-align: center;
    vertical-align: middle;
    text-decoration: none!important;
    text-transform: unset!important;
    cursor: pointer;
    -webkit-transition: .15s ease-in;
    -moz-transition: .15s ease-in;
    -o-transition: .15s ease-in;
    transition: all .15s ease-in
}

.dpsp-networks-btns-wrapper .dpsp-network-btn .dpsp-network-label {
    padding-right: .5em;
    padding-left: .5em
}

.dpsp-networks-btns-wrapper .dpsp-network-btn.dpsp-has-count .dpsp-network-label {
    padding-right: .25em
}

.dpsp-networks-btns-wrapper .dpsp-network-btn:focus,.dpsp-networks-btns-wrapper .dpsp-network-btn:hover {
    border: 2px solid;
    outline: 0;
    box-shadow: 0 0 0 3px rgba(21,156,228,.4);
    box-shadow: 0 0 0 3px var(--networkHover)
}

.dpsp-networks-btns-wrapper .dpsp-network-btn:after {
    display: block;
    clear: both;
    height: 0;
    content: ""
}

.dpsp-networks-btns-wrapper .dpsp-network-btn .dpsp-network-count {
    padding-right: .5em;
    padding-left: .25em;
    font-size: 13px;
    font-weight: 400;
    white-space: nowrap
}

.dpsp-pinterest {
    --networkAccent: #b31e24;
    --networkColor: #c92228;
    --networkHover: rgba(179, 30, 36, .4)
}

.dpsp-networks-btns-wrapper .dpsp-network-btn.dpsp-pinterest {
    border-color: #c92228;
    color: #c92228;
    background: #c92228
}

.dpsp-networks-btns-wrapper .dpsp-network-btn.dpsp-pinterest:not(:hover):not(:active) {
    color: #c92228
}

.dpsp-networks-btns-wrapper .dpsp-network-btn.dpsp-pinterest .dpsp-network-icon {
    border-color: #c92228;
    color: #c92228;
    background: #c92228
}

.dpsp-networks-btns-wrapper .dpsp-network-btn.dpsp-pinterest .dpsp-network-icon.dpsp-network-icon-outlined .dpsp-network-icon-inner>svg {
    fill: none!important;
    stroke: var(--customNetworkColor,var(--networkColor,#c92228));
    stroke-width: 1
}

.dpsp-networks-btns-wrapper .dpsp-network-btn.dpsp-pinterest .dpsp-network-icon .dpsp-network-icon-inner>svg {
    fill: var(--customNetworkColor,var(--networkColor,#c92228))
}

.dpsp-networks-btns-wrapper .dpsp-network-btn.dpsp-pinterest .dpsp-network-icon .dpsp-network-icon-inner>svg>svg {
    fill: var(--customNetworkColor,var(--networkColor,#c92228));
    stroke: var(--customNetworkColor,var(--networkColor,#c92228));
    stroke-width: 1
}

.dpsp-networks-btns-wrapper .dpsp-network-btn.dpsp-pinterest:focus,.dpsp-networks-btns-wrapper .dpsp-network-btn.dpsp-pinterest:focus .dpsp-network-icon,.dpsp-networks-btns-wrapper .dpsp-network-btn.dpsp-pinterest:hover,.dpsp-networks-btns-wrapper .dpsp-network-btn.dpsp-pinterest:hover .dpsp-network-icon {
    border-color: #b31e24;
    color: #b31e24;
    background: #b31e24
}

.dpsp-networks-btns-wrapper .dpsp-network-btn.dpsp-pinterest:focus .dpsp-network-icon .dpsp-network-icon-inner>svg,.dpsp-networks-btns-wrapper .dpsp-network-btn.dpsp-pinterest:hover .dpsp-network-icon .dpsp-network-icon-inner>svg {
    fill: #b31e24
}

.dpsp-networks-btns-wrapper .dpsp-network-btn.dpsp-pinterest:focus .dpsp-network-icon .dpsp-network-icon-inner>svg>svg,.dpsp-networks-btns-wrapper .dpsp-network-btn.dpsp-pinterest:hover .dpsp-network-icon .dpsp-network-icon-inner>svg>svg {
    fill: var(--customNetworkHoverColor,var(--networkHover,#b31e24));
    stroke: var(--customNetworkHoverColor,var(--networkHover,#b31e24))
}

.dpsp-whatsapp {
    --networkAccent: #21c960;
    --networkColor: #25d366;
    --networkHover: rgba(33, 201, 96, .4)
}

.dpsp-networks-btns-wrapper .dpsp-network-btn.dpsp-whatsapp {
    border-color: #25d366;
    color: #25d366;
    background: #25d366
}

.dpsp-networks-btns-wrapper .dpsp-network-btn.dpsp-whatsapp:not(:hover):not(:active) {
    color: #25d366
}

.dpsp-networks-btns-wrapper .dpsp-network-btn.dpsp-whatsapp .dpsp-network-icon {
    border-color: #25d366;
    color: #25d366;
    background: #25d366
}

.dpsp-networks-btns-wrapper .dpsp-network-btn.dpsp-whatsapp .dpsp-network-icon.dpsp-network-icon-outlined .dpsp-network-icon-inner>svg {
    fill: none!important;
    stroke: var(--customNetworkColor,var(--networkColor,#25d366));
    stroke-width: 1
}

.dpsp-networks-btns-wrapper .dpsp-network-btn.dpsp-whatsapp .dpsp-network-icon .dpsp-network-icon-inner>svg {
    fill: var(--customNetworkColor,var(--networkColor,#25d366))
}

.dpsp-networks-btns-wrapper .dpsp-network-btn.dpsp-whatsapp .dpsp-network-icon .dpsp-network-icon-inner>svg>svg {
    fill: var(--customNetworkColor,var(--networkColor,#25d366));
    stroke: var(--customNetworkColor,var(--networkColor,#25d366));
    stroke-width: 1
}

.dpsp-networks-btns-wrapper .dpsp-network-btn.dpsp-whatsapp:focus,.dpsp-networks-btns-wrapper .dpsp-network-btn.dpsp-whatsapp:focus .dpsp-network-icon,.dpsp-networks-btns-wrapper .dpsp-network-btn.dpsp-whatsapp:hover,.dpsp-networks-btns-wrapper .dpsp-network-btn.dpsp-whatsapp:hover .dpsp-network-icon {
    border-color: #21c960;
    color: #21c960;
    background: #21c960
}

.dpsp-networks-btns-wrapper .dpsp-network-btn.dpsp-whatsapp:focus .dpsp-network-icon .dpsp-network-icon-inner>svg,.dpsp-networks-btns-wrapper .dpsp-network-btn.dpsp-whatsapp:hover .dpsp-network-icon .dpsp-network-icon-inner>svg {
    fill: #21c960
}

.dpsp-networks-btns-wrapper .dpsp-network-btn.dpsp-whatsapp:focus .dpsp-network-icon .dpsp-network-icon-inner>svg>svg,.dpsp-networks-btns-wrapper .dpsp-network-btn.dpsp-whatsapp:hover .dpsp-network-icon .dpsp-network-icon-inner>svg>svg {
    fill: var(--customNetworkHoverColor,var(--networkHover,#21c960));
    stroke: var(--customNetworkHoverColor,var(--networkHover,#21c960))
}

.dpsp-email {
    --networkAccent: #239e57;
    --networkColor: #27ae60;
    --networkHover: rgba(35, 158, 87, .4)
}

.dpsp-networks-btns-wrapper .dpsp-network-btn.dpsp-email {
    border-color: #27ae60;
    color: #27ae60;
    background: #27ae60
}

.dpsp-networks-btns-wrapper .dpsp-network-btn.dpsp-email:not(:hover):not(:active) {
    color: #27ae60
}

.dpsp-networks-btns-wrapper .dpsp-network-btn.dpsp-email .dpsp-network-icon {
    border-color: #27ae60;
    color: #27ae60;
    background: #27ae60
}

.dpsp-networks-btns-wrapper .dpsp-network-btn.dpsp-email .dpsp-network-icon.dpsp-network-icon-outlined .dpsp-network-icon-inner>svg {
    fill: none!important;
    stroke: var(--customNetworkColor,var(--networkColor,#27ae60));
    stroke-width: 1
}

.dpsp-networks-btns-wrapper .dpsp-network-btn.dpsp-email .dpsp-network-icon .dpsp-network-icon-inner>svg {
    fill: var(--customNetworkColor,var(--networkColor,#27ae60))
}

.dpsp-networks-btns-wrapper .dpsp-network-btn.dpsp-email .dpsp-network-icon .dpsp-network-icon-inner>svg>svg {
    fill: var(--customNetworkColor,var(--networkColor,#27ae60));
    stroke: var(--customNetworkColor,var(--networkColor,#27ae60));
    stroke-width: 1
}

.dpsp-networks-btns-wrapper .dpsp-network-btn.dpsp-email:focus,.dpsp-networks-btns-wrapper .dpsp-network-btn.dpsp-email:focus .dpsp-network-icon,.dpsp-networks-btns-wrapper .dpsp-network-btn.dpsp-email:hover,.dpsp-networks-btns-wrapper .dpsp-network-btn.dpsp-email:hover .dpsp-network-icon {
    border-color: #239e57;
    color: #239e57;
    background: #239e57
}

.dpsp-networks-btns-wrapper .dpsp-network-btn.dpsp-email:focus .dpsp-network-icon .dpsp-network-icon-inner>svg,.dpsp-networks-btns-wrapper .dpsp-network-btn.dpsp-email:hover .dpsp-network-icon .dpsp-network-icon-inner>svg {
    fill: #239e57
}

.dpsp-networks-btns-wrapper .dpsp-network-btn.dpsp-email:focus .dpsp-network-icon .dpsp-network-icon-inner>svg>svg,.dpsp-networks-btns-wrapper .dpsp-network-btn.dpsp-email:hover .dpsp-network-icon .dpsp-network-icon-inner>svg>svg {
    fill: var(--customNetworkHoverColor,var(--networkHover,#239e57));
    stroke: var(--customNetworkHoverColor,var(--networkHover,#239e57))
}

.dpsp-buffer {
    --networkAccent: #21282f;
    --networkColor: #29323b;
    --networkHover: rgba(33, 40, 47, .4)
}

.dpsp-networks-btns-wrapper .dpsp-network-btn.dpsp-buffer {
    border-color: #29323b;
    color: #29323b;
    background: #29323b
}

.dpsp-networks-btns-wrapper .dpsp-network-btn.dpsp-buffer:not(:hover):not(:active) {
    color: #29323b
}

.dpsp-networks-btns-wrapper .dpsp-network-btn.dpsp-buffer .dpsp-network-icon {
    border-color: #29323b;
    color: #29323b;
    background: #29323b
}

.dpsp-networks-btns-wrapper .dpsp-network-btn.dpsp-buffer .dpsp-network-icon.dpsp-network-icon-outlined .dpsp-network-icon-inner>svg {
    fill: none!important;
    stroke: var(--customNetworkColor,var(--networkColor,#29323b));
    stroke-width: 1
}

.dpsp-networks-btns-wrapper .dpsp-network-btn.dpsp-buffer .dpsp-network-icon .dpsp-network-icon-inner>svg {
    fill: var(--customNetworkColor,var(--networkColor,#29323b))
}

.dpsp-networks-btns-wrapper .dpsp-network-btn.dpsp-buffer .dpsp-network-icon .dpsp-network-icon-inner>svg>svg {
    fill: var(--customNetworkColor,var(--networkColor,#29323b));
    stroke: var(--customNetworkColor,var(--networkColor,#29323b));
    stroke-width: 1
}

.dpsp-networks-btns-wrapper .dpsp-network-btn.dpsp-buffer:focus,.dpsp-networks-btns-wrapper .dpsp-network-btn.dpsp-buffer:focus .dpsp-network-icon,.dpsp-networks-btns-wrapper .dpsp-network-btn.dpsp-buffer:hover,.dpsp-networks-btns-wrapper .dpsp-network-btn.dpsp-buffer:hover .dpsp-network-icon {
    border-color: #21282f;
    color: #21282f;
    background: #21282f
}

.dpsp-networks-btns-wrapper .dpsp-network-btn.dpsp-buffer:focus .dpsp-network-icon .dpsp-network-icon-inner>svg,.dpsp-networks-btns-wrapper .dpsp-network-btn.dpsp-buffer:hover .dpsp-network-icon .dpsp-network-icon-inner>svg {
    fill: #21282f
}

.dpsp-networks-btns-wrapper .dpsp-network-btn.dpsp-buffer:focus .dpsp-network-icon .dpsp-network-icon-inner>svg>svg,.dpsp-networks-btns-wrapper .dpsp-network-btn.dpsp-buffer:hover .dpsp-network-icon .dpsp-network-icon-inner>svg>svg {
    fill: var(--customNetworkHoverColor,var(--networkHover,#21282f));
    stroke: var(--customNetworkHoverColor,var(--networkHover,#21282f))
}

.dpsp-grow-check-icon {
    opacity: 0;
    transition: all .2s ease;
    transform-origin: center center
}

.dpsp-grow-saved .dpsp-grow-check-icon {
    opacity: 1
}

@media print {
    #dpsp-floating-sidebar,#dpsp-pop-up,#dpsp-pop-up-overlay,#dpsp-sticky-bar-wrapper {
        display: none!important
    }
}

.dpsp-pin-it-wrapper {
    display: inline-table;
    position: relative!important;
    line-height: 0
}

.blocks-gallery-item .dpsp-pin-it-wrapper {
    display: inline-block
}

.dpsp-pin-it-wrapper:hover .dpsp-pin-it-button {
    visibility: visible;
    color: #fff!important;
    background-color: #c92228!important
}

.dpsp-pin-it-button {
    display: inline-block;
    position: absolute;
    visibility: hidden;
    width: auto!important;
    height: 40px!important;
    border: 0!important;
    color: transparent!important;
    background: 0 0;
    background-image: none!important;
    box-shadow: none!important;
    font-family: Arial;
    font-size: 14px;
    font-weight: 700;
    line-height: 40px;
    vertical-align: middle;
    text-decoration: none!important;
    transition: all .25s ease-in-out
}

.dpsp-pin-it-button:hover {
    color: #fff;
    background: #b31e24;
    box-shadow: none!important
}

.dpsp-pin-it-button.dpsp-pin-it-button-has-label {
    padding-right: 20px
}

.dpsp-pin-it-button.dpsp-pin-it-button-has-label:after {
    display: inline-block;
    content: attr(title)
}

.dpsp-pin-it-button .dpsp-network-icon {
    display: inline-block;
    width: 40px;
    height: 40px;
    text-align: center;
    vertical-align: top
}

.dpsp-pin-it-button .dpsp-network-icon svg {
    display: inline-block;
    height: 20px;
    vertical-align: middle;
    fill: #fff
}

.dpsp-pin-it-button.dpsp-pin-it-button-top-left {
    top: 10px;
    left: 10px
}

.dpsp-pin-it-button.dpsp-pin-it-button-shape-rectangular {
    border-radius: 0
}

.dpsp-pin-it-wrapper .dpsp-pin-it-overlay {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    visibility: hidden;
    width: 100%;
    height: 100%;
    opacity: 0;
    background: #fff;
    transition: all .25s ease-in-out;
    pointer-events: none
}

.dpsp-pin-it-wrapper:hover .dpsp-pin-it-overlay {
    visibility: visible;
    opacity: .4
}

#dpsp-floating-sidebar {
    position: fixed;
    top: 50%;
    transform: translateY(-50%);
    z-index: 9998
}

#dpsp-floating-sidebar.stop-hidden,#dpsp-floating-sidebar.stop-hidden.opened {
    visibility: hidden
}

#dpsp-floating-sidebar .dpsp-networks-btns-wrapper li {
    position: relative;
    overflow: visible
}

#dpsp-floating-sidebar .dpsp-networks-btns-wrapper .dpsp-network-label {
    display: inline-block;
    position: absolute;
    top: 50%;
    visibility: hidden;
    box-sizing: border-box;
    width: auto;
    height: 30px;
    margin-top: -15px;
    padding: 6px 12px;
    border-radius: 3px;
    opacity: 0;
    color: #fff;
    background: #34495e;
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
    white-space: nowrap;
    transition: all .2s ease-in-out;
    z-index: 1
}

#dpsp-floating-sidebar .dpsp-networks-btns-wrapper .dpsp-network-label:before {
    display: block;
    position: absolute;
    top: 50%;
    margin-top: -5px;
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
    content: ""
}

#dpsp-sticky-bar-wrapper {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    max-width: 100vw;
    background: #fff;
    z-index: 1000
}

#dpsp-sticky-bar {
    display: none;
    position: relative;
    box-sizing: border-box;
    margin: 7px 0
}

#dpsp-sticky-bar .dpsp-networks-btns-wrapper {
    display: flex
}

#dpsp-sticky-bar .dpsp-networks-btns-wrapper li {
    float: none;
    margin-right: 3px;
    margin-bottom: 0;
    margin-left: 3px;
    flex: 1
}

#dpsp-sticky-bar .dpsp-networks-btns-wrapper li:last-of-type {
    margin-right: 0
}

#dpsp-sticky-bar .dpsp-network-btn {
    padding-right: 1em;
    padding-left: 1em;
    text-align: center
}

#dpsp-sticky-bar .dpsp-network-btn .dpsp-network-icon {
    display: inline-block;
    position: relative;
    overflow: visible;
    width: 20px
}

#dpsp-sticky-bar .dpsp-network-btn.dpsp-has-count .dpsp-network-icon {
    margin-right: 5px
}

#dpsp-sticky-bar-wrapper.dpsp-is-mobile #dpsp-sticky-bar {
    position: static;
    width: 100%!important;
    margin: 0;
    padding: 0
}

#dpsp-sticky-bar-wrapper.dpsp-is-mobile #dpsp-sticky-bar .dpsp-networks-btns-wrapper li {
    margin: 0
}

#dpsp-sticky-bar-wrapper.dpsp-is-mobile #dpsp-sticky-bar .dpsp-network-btn {
    height: 44px;
    max-height: 44px;
    padding-right: 0;
    padding-left: 0;
    border-radius: 0;
    line-height: 40px;
    text-align: center
}

#dpsp-sticky-bar-wrapper.dpsp-is-mobile #dpsp-sticky-bar .dpsp-network-btn .dpsp-network-icon {
    display: inline-block;
    position: relative;
    left: auto;
    float: none;
    font-size: 18px;
    line-height: 40px
}

#dpsp-sticky-bar-wrapper.dpsp-is-mobile #dpsp-sticky-bar .dpsp-network-btn.dpsp-has-count .dpsp-network-icon {
    display: block;
    position: absolute;
    width: 100%;
    height: 26px;
    line-height: 26px
}

#dpsp-sticky-bar-wrapper.dpsp-is-mobile #dpsp-sticky-bar .dpsp-network-btn .dpsp-network-count {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 20px;
    margin-left: 0;
    font-size: 11px;
    line-height: 20px;
    text-align: center
}

@media screen and (min-width: 782px) {
    body.admin-bar #dpsp-sticky-bar-wrapper {
        margin-top:32px
    }
}

.dpsp-click-to-tweet {
    display: block;
    position: relative;
    margin: 1.5em 0;
    font-size: 105%;
    text-decoration: none;
    transition: all .15s ease-in
}

.dpsp-click-to-tweet,.dpsp-click-to-tweet:hover {
    box-shadow: none!important
}

.dpsp-click-to-tweet:after {
    display: block;
    clear: both;
    content: ""
}

.dpsp-networks-btns-wrapper .dpsp-network-btn .dpsp-network-icon {
    display: block;
    position: relative;
    top: -2px;
    left: -2px;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    width: 40px;
    height: 40px;
    border: 2px solid;
    font-size: 14px;
    line-height: 36px;
    text-align: center;
    -webkit-transition: .15s ease-in;
    -moz-transition: .15s ease-in;
    -o-transition: .15s ease-in;
    transition: all .15s ease-in;
    align-self: start;
    flex: 0 0 auto
}

.dpsp-icon-total-share svg,.dpsp-network-icon .dpsp-network-icon-inner svg {
    position: relative;
    overflow: visible;
    width: auto;
    max-height: 14px;
    transition: fill .15s ease-in-out
}

.dpsp-icon-total-share,.dpsp-network-icon-inner {
    display: flex;
    align-items: center;
    justify-content: center
}

.dpsp-network-icon-inner {
    height: 36px;
    transition: all .2s ease
}

#dpsp-pop-up {
    position: fixed;
    width: 100%;
    max-width: 750px;
    padding: 40px;
    border-radius: 10px;
    opacity: 0;
    background: #fff;
    -webkit-transition: .25s ease-in-out;
    -moz-transition: .25s ease-in-out;
    -o-transition: .25s ease-in-out;
    transition: all .25s ease-in-out;
    transform: translate(-50%,-50%);
    z-index: 9999
}

#dpsp-pop-up.opened {
    top: 50%;
    left: 50%;
    opacity: 1;
    transform: scale(1) translate(-50%,-50%)
}

#dpsp-pop-up-overlay {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 0;
    height: 0;
    opacity: 0;
    background: #000;
    -webkit-transition: opacity .25s ease-in-out,margin .25s ease-in-out;
    -moz-transition: opacity .25s ease-in-out,margin .25s ease-in-out;
    -o-transition: opacity .25s ease-in-out,margin .25s ease-in-out;
    transition: opacity .25s ease-in-out,margin .25s ease-in-out;
    z-index: 9998
}

#dpsp-pop-up-overlay.opened {
    width: 100%;
    height: 100%;
    opacity: .65
}

#dpsp-pop-up h2 {
    margin-bottom: 1em
}

#dpsp-pop-up h2 p {
    font-size: inherit
}

#dpsp-pop-up h2 p:last-of-type {
    margin-top: 0;
    margin-bottom: 0
}

#dpsp-pop-up p {
    margin-top: 1em;
    margin-bottom: 1em
}

#dpsp-post-bottom {
    width: 0;
    height: 0;
    margin: 0;
    padding: 0
}

@media screen and (max-width: 800px) {
    #dpsp-pop-up {
        width:90%
    }
}

@media screen and (max-width: 720px) {
    #dpsp-pop-up .dpsp-networks-btns-wrapper li {
        width:100%;
        margin-right: 0;
        margin-left: 0
    }
}

.dpsp-top-shared-post {
    margin-bottom: 2em
}

@font-face {
    font-family: Montserrat;
    font-weight: 800;
    font-style: normal;
    font-stretch: normal;
    font-display: swap;
    src: url('https://www.budgetbytes.com/wp-content/themes/budgetbytes-2022/assets/fonts/montserrat-800.woff2') format('woff2')
}

@font-face {
    font-family: Montserrat;
    font-weight: 800;
    font-style: italic;
    font-stretch: normal;
    font-display: swap;
    src: url('https://www.budgetbytes.com/wp-content/themes/budgetbytes-2022/assets/fonts/montserrat-800italic.woff2') format('woff2')
}

html {
    line-height: 1.15;
    -webkit-text-size-adjust: 100%
}

body {
    margin: 0
}

hr {
    box-sizing: content-box;
    height: 0;
    overflow: visible
}

a {
    background-color: rgba(0,0,0,0)
}

b,strong {
    font-weight: bolder
}

code {
    font-family: monospace,monospace;
    font-size: 1em
}

small {
    font-size: 80%
}

img {
    border-style: none
}

button,input,optgroup,select,textarea {
    font-family: inherit;
    font-size: 100%;
    line-height: 1.15;
    margin: 0
}

button,input {
    overflow: visible
}

button,select {
    text-transform: none
}

[type=button],[type=reset],[type=submit],button {
    -webkit-appearance: button
}

[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner {
    border-style: none;
    padding: 0
}

[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring {
    outline: ButtonText dotted 1px
}

fieldset {
    padding: .35em .75em .625em
}

legend {
    box-sizing: border-box;
    color: inherit;
    display: table;
    max-width: 100%;
    padding: 0;
    white-space: normal
}

progress {
    vertical-align: baseline
}

textarea {
    overflow: auto
}

[type=checkbox],[type=radio] {
    box-sizing: border-box;
    padding: 0
}

[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button {
    height: auto
}

[type=search] {
    -webkit-appearance: textfield;
    outline-offset: -2px
}

[type=search]::-webkit-search-decoration {
    -webkit-appearance: none
}

::-webkit-file-upload-button {
    -webkit-appearance: button;
    font: inherit
}

details {
    display: block
}

summary {
    display: list-item
}

template {
    display: none
}

[hidden] {
    display: none
}

figure {
    margin: 0
}

html,input[type=search] {
    box-sizing: border-box
}

@media(max-width: 359px) {
    body {
        --wp--custom--layout--padding:10px
    }
}

*,:after,:before {
    box-sizing: inherit
}

.wrap {
    max-width: calc(var(--wp--custom--layout--wide) + 2*var(--wp--custom--layout--padding));
    margin: 0 auto;
    padding-left: var(--wp--custom--layout--padding);
    padding-right: var(--wp--custom--layout--padding)
}

.wrap:after {
    content: "";
    display: table;
    clear: both
}

.site-inner {
    padding: 40px 0
}

.screen-reader-text,.screen-reader-text span {
    position: absolute!important;
    clip: rect(0,0,0,0);
    height: 1px;
    width: 1px;
    border: 0;
    overflow: hidden
}

.screen-reader-text:focus {
    clip: auto!important;
    height: auto;
    width: auto;
    display: block;
    font-size: 1em;
    font-weight: 700;
    padding: 15px 23px 14px;
    color: #333;
    background: #fff;
    z-index: 100000;
    text-decoration: none;
    box-shadow: 0 0 2px 2px rgba(0,0,0,.6)
}

.sidebar-primary .widget+.widget {
    margin-top: 32px
}

@media(max-width: 991px) {
    .sidebar-primary {
        display:none
    }
}

@media(min-width: 992px) {
    .content-sidebar .content-area {
        display:grid;
        grid-template-columns: 1fr var(--wp--custom--layout--sidebar);
        grid-column-gap: var(--wp--custom--layout--grid-column-gap);
        max-width: var(--wp--custom--layout--wide);
        margin-left: auto;
        margin-right: auto
    }

    .content-sidebar .site-main {
        float: none;
        width: 100%;
        max-width: calc(var(--wp--custom--layout--content) + 48px);
        position: relative;
        border-right: 1px solid #000;
        padding-right: 48px
    }

    .content-sidebar .sidebar-primary {
        float: none;
        width: 100%
    }
}

h1,h2,h3,h4 {
    font-family: var(--wp--preset--font-family--serif);
    font-weight: 800;
    line-height: var(--wp--custom--line-height--small);
    text-transform: uppercase
}

h1.is-style-no-margin,h2.is-style-no-margin,h3.is-style-no-margin,h4.is-style-no-margin {
    margin-top: 8px;
    margin-bottom: 0
}

h1.is-style-shadow,h2.is-style-shadow,h3.is-style-shadow,h4.is-style-shadow {
    margin: 0;
    color: #fff;
    text-shadow: 4px 4px #000,2px -2px #000,-2px -2px #000,-2px 2px #000,2px 2px #000;
    letter-spacing: .1em
}

h1 {
    font-size: var(--wp--preset--font-size--colossal);
    line-height: var(--wp--custom--line-height--tiny)
}

h2 {
    font-size: var(--wp--preset--font-size--gigantic)
}

h3 {
    font-size: var(--wp--preset--font-size--jumbo)
}

h4 {
    font-size: var(--wp--preset--font-size--huge)
}

.is-style-smaller-margin {
    margin-top: 10px!important
}

img {
    display: block;
    max-width: 100%;
    height: auto
}

img.emoji {
    max-width: 16px;
    display: inline-block
}

.wp-block-button__link {
    font-family: var(--wp--preset--font-family--serif);
    font-weight: 900;
    letter-spacing: 2.5px;
    text-transform: uppercase;
    font-size: var(--wp--preset--font-size--small);
    border-radius: 0;
    padding: 16px 24px;
    transition: all .2s ease-in-out
}

@media(max-width: 400px) {
    .wp-block-button__link {
        padding:13px 20px
    }
}

.wp-block-button__link.has-secondary-background-color,.wp-block-button__link:not(.has-background) {
    background-color: var(--wp--preset--color--secondary);
    color: #fff
}

.wp-block-button__link.has-secondary-background-color:focus,.wp-block-button__link.has-secondary-background-color:hover,.wp-block-button__link:not(.has-background):focus,.wp-block-button__link:not(.has-background):hover {
    background-color: #000
}

.wp-block-button__link.has-primary-background-color:focus,.wp-block-button__link.has-primary-background-color:hover {
    background-color: var(--wp--custom--color--primary-darken)!important
}

.is-style-shadow .wp-block-button__link {
    background-color: var(--wp--preset--color--primary);
    color: var(--wp--preset--color--secondary);
    border: 2px solid var(--wp--preset--color--secondary);
    box-shadow: 3px 3px 0 var(--wp--preset--color--secondary);
    letter-spacing: 2px
}

.is-style-shadow .wp-block-button__link:focus,.is-style-shadow .wp-block-button__link:hover {
    background-color: var(--wp--custom--color--primary-darken);
    box-shadow: 2px 2px 0 var(--wp--preset--color--secondary);
    transform: translate(1px)
}

.is-style-outline .wp-block-button__link {
    border: 2px solid var(--wp--preset--color--secondary);
    background-color: #fff
}

.is-style-outline .wp-block-button__link:focus,.is-style-outline .wp-block-button__link:hover {
    background-color: #eee
}

div.wp-block-buttons {
    gap: var(--wp--custom--layout--grid-column-gap)
}

.sidebar-primary div.wp-block-buttons {
    margin-top: 8px
}

.alignfull>* {
    max-width: var(--wp--custom--layout--page);
    margin-left: auto;
    margin-right: auto
}

.has-secondary-background-color {
    color: var(--wp--preset--color--white)
}

.has-primary-background-color {
    color: var(--wp--preset--color--foreground)
}

form.search-form {
    position: relative
}

form.search-form button.search-submit {
    border: none;
    background-color: rgba(0,0,0,0);
    position: absolute;
    top: 0;
    right: 0;
    height: 56px;
    width: 56px;
    display: flex;
    align-items: center;
    justify-content: center
}

form.search-form button.search-submit svg {
    width: 30px;
    height: 30px
}

.wp-block-search__input {
    height: 65px;
    border: 2px solid #000!important;
    padding: 15px!important
}

.wp-block-spacer {
    margin-top: 0!important
}

:root {
    --gallery-block--gutter-size: 32px
}

.breadcrumb {
    max-width: var(--wp--custom--layout--content);
    margin: 0 auto 6px;
    font-size: 12px
}

.breadcrumb a {
    text-decoration: none;
    color: var(--wp--preset--color--foreground);
    background-color: #eee;
    padding: 4px;
    transition: background-color .2s ease-in-out;
    margin-bottom: 6px;
    display: inline-block
}

.breadcrumb a:active,.breadcrumb a:focus,.breadcrumb a:hover {
    background-color: #e0e0e0
}

.schema-faq-section {
    width: 100%;
    position: relative;
    padding: 24px 30px;
    border: 2px solid var(--wp--preset--color--secondary)
}

@media(max-width: 600px) {
    .schema-faq-section {
        padding:17px 19px
    }
}

.schema-faq-section:not(:first-of-type) {
    border-top: none
}

.site-inner .schema-faq-section:not(.active) .schema-faq-answer {
    display: none
}

.schema-faq-section.active .schema-faq-question {
    color: var(--wp--preset--color--primary)
}

.schema-faq-section.active .schema-faq-toggle::after {
    transform: rotate(0)
}

.schema-faq-question {
    display: block;
    font-size: var(--wp--preset--font-size--large);
    line-height: var(--wp--custom--typography--line-height--small);
    transition: all .2s ease-in-out;
    cursor: pointer;
    margin: 0;
    padding-right: 45px
}

.schema-faq-question:hover {
    color: var(--wp--preset--color--primary)
}

.schema-faq-answer {
    margin-top: 8px
}

.schema-faq-answer p {
    margin-top: 0;
    margin-bottom: 12px
}

.schema-faq-answer p:last-child {
    margin-bottom: 0
}

.schema-faq-toggle {
    position: absolute;
    right: 30px;
    top: 27px;
    width: 30px;
    height: 30px;
    border-radius: 30px;
    border: none;
    background-color: var(--wp--preset--color--secondary)
}

.schema-faq-toggle::after,.schema-faq-toggle::before {
    content: "";
    cursor: pointer;
    position: absolute;
    width: 17px;
    height: 5px;
    top: 12.5px;
    right: 6.5px;
    background-color: var(--wp--preset--color--primary);
    transition: all .2s ease-in-out
}

.schema-faq-toggle::after {
    transform: rotate(90deg)
}

.schema-faq-toggle:focus {
    outline-offset: 4px
}

body .gform_wrapper .gfield_required {
    color: inherit
}

body .gform_wrapper input,body .gform_wrapper input[type=date],body .gform_wrapper input[type=datetime-local],body .gform_wrapper input[type=email],body .gform_wrapper input[type=number],body .gform_wrapper input[type=password],body .gform_wrapper input[type=search],body .gform_wrapper input[type=tel],body .gform_wrapper input[type=text],body .gform_wrapper input[type=time],body .gform_wrapper input[type=url],body .gform_wrapper select,body .gform_wrapper textarea,body .gform_wrapper.gravity-theme input,body .gform_wrapper.gravity-theme input[type=date],body .gform_wrapper.gravity-theme input[type=datetime-local],body .gform_wrapper.gravity-theme input[type=email],body .gform_wrapper.gravity-theme input[type=number],body .gform_wrapper.gravity-theme input[type=password],body .gform_wrapper.gravity-theme input[type=search],body .gform_wrapper.gravity-theme input[type=tel],body .gform_wrapper.gravity-theme input[type=text],body .gform_wrapper.gravity-theme input[type=time],body .gform_wrapper.gravity-theme input[type=url],body .gform_wrapper.gravity-theme select,body .gform_wrapper.gravity-theme textarea {
    background: #fff;
    border: 1px solid var(--wp--preset--color--secondary);
    border-radius: 0;
    color: var(--wp--preset--color--foreground);
    font-size: 18px;
    line-height: 24px;
    padding: 14px 16px;
    width: 100%
}

body .gform_wrapper input[type=checkbox],body .gform_wrapper.gravity-theme input[type=checkbox] {
    width: auto
}

body .gform_wrapper input[type=search],body .gform_wrapper.gravity-theme input[type=search] {
    border-width: 2px;
    font-size: 20px;
    box-shadow: 4px 4px 0 var(--wp--preset--color--primary);
    padding-right: 56px!important
}

body .gform_wrapper select,body .gform_wrapper.gravity-theme select {
    line-height: 54px;
    height: 54px
}

body .gform_wrapper textarea,body .gform_wrapper.gravity-theme textarea {
    width: 100%;
    resize: vertical
}

body .gform_wrapper ::-moz-placeholder,body .gform_wrapper.gravity-theme ::-moz-placeholder {
    color: #bdbdbd;
    opacity: 1
}

body .gform_wrapper ::-ms-input-placeholder,body .gform_wrapper.gravity-theme ::-ms-input-placeholder {
    color: #bdbdbd
}

body .gform_wrapper ::-webkit-input-placeholder,body .gform_wrapper.gravity-theme ::-webkit-input-placeholder {
    color: #bdbdbd
}

body .gform_wrapper input:focus:-ms-input-placeholder,body .gform_wrapper input:focus::-moz-placeholder,body .gform_wrapper input:focus::-webkit-input-placeholder,body .gform_wrapper textarea:focus:-ms-input-placeholder,body .gform_wrapper textarea:focus::-moz-placeholder,body .gform_wrapper textarea:focus::-webkit-input-placeholder,body .gform_wrapper.gravity-theme input:focus:-ms-input-placeholder,body .gform_wrapper.gravity-theme input:focus::-moz-placeholder,body .gform_wrapper.gravity-theme input:focus::-webkit-input-placeholder,body .gform_wrapper.gravity-theme textarea:focus:-ms-input-placeholder,body .gform_wrapper.gravity-theme textarea:focus::-moz-placeholder,body .gform_wrapper.gravity-theme textarea:focus::-webkit-input-placeholder {
    color: transparent
}

body .gform_wrapper #field_submit input,body .gform_wrapper.gravity-theme #field_submit input {
    background-color: var(--wp--preset--color--primary);
    font-family: var(--wp--preset--font-family--serif);
    font-size: var(--wp--preset--font-size--normal);
    text-transform: uppercase;
    letter-spacing: 2px;
    transition: all .2s ease-in-out
}

body .gform_wrapper #field_submit input:focus,body .gform_wrapper #field_submit input:hover,body .gform_wrapper.gravity-theme #field_submit input:focus,body .gform_wrapper.gravity-theme #field_submit input:hover {
    background-color: var(--wp--custom--color--primary-darken)
}

body .sidebar-primary .gform_footer {
    padding: 0!important;
    margin-top: 10px!important;
    justify-content: center!important
}

.shared-counts-wrap.style-icon svg {
    fill: #bdbdbd;
    width: 24px;
    height: 24px
}

.shared-counts-wrap.style-icon .shared-counts-button {
    line-height: 0;
    padding: 10px
}

.shared-counts-wrap.style-icon .shared-counts-button:not(.included_total) .shared-counts-label {
    display: none
}

.site-header {
    background-color: #fff;
    position: relative;
    --cwp-logo-width: 320px
}

.site-header .wrap {
    display: grid;
    grid-template-columns: var(--cwp-logo-width) 1fr 44px;
    align-items: center
}

@media(max-width: 1130px) {
    .site-header {
        padding:12px 0;
        background-color: #000
    }

    .site-header .wrap {
        grid-template-columns: 48px 1fr 48px;
        justify-items: center;
        padding: 0
    }

    .site-header .wrap>a {
        display: flex;
        align-items: center
    }

    .site-header .nav-menu {
        grid-column: 1/-1;
        width: 100%;
        margin-top: 12px;
        margin-bottom: -12px;
        box-shadow: 0 2px 10px rgba(0,0,0,.25)
    }
}

.site-header .nav-menu {
    justify-self: flex-end
}

@media(max-width: 600px) {
    .schema-faq-toggle {
        top:17px;
        right: 19px
    }

    .site-header {
        padding: 6px 0
    }

    .site-header .nav-menu {
        margin-top: 6px;
        margin-bottom: -6px
    }
}

.site-header__logo {
    display: block;
    width: var(--cwp-logo-width);
    height: 48.89px;
    max-width: calc(100vw - 96px)
}

.site-header__logo--reverse {
    display: none;
    margin: 0 auto
}

@media(max-width: 1130px) {
    .site-header__logo {
        grid-column:2
    }

    .site-header__logo--primary {
        display: none
    }

    .site-header__logo--reverse {
        display: block
    }

    .menu-toggle svg,.search-toggle svg {
        fill: #fff
    }
}

.site-header__toggles {
    display: flex;
    flex-wrap: nowrap;
    justify-self: flex-end;
    grid-column: 1;
    grid-row: 1
}

@media(min-width: 1131px) {
    .site-header__toggles {
        display:none
    }
}

.menu-toggle,.search-toggle {
    background: rgba(0,0,0,0);
    border: none;
    box-shadow: none;
    line-height: 0;
    padding: 0;
    text-align: center;
    cursor: pointer;
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center
}

.menu-toggle svg,.search-toggle svg {
    width: 32px;
    height: 32px
}

.menu-toggle .close,.search-toggle .close {
    display: none
}

.menu-toggle.active .close,.search-toggle.active .close {
    display: inline
}

.menu-toggle.active .open,.search-toggle.active .open {
    display: none
}

.header-search {
    display: none;
    padding: 14px 18px 18px 14px;
    position: absolute;
    top: 100%;
    width: 100%;
    background-color: #fff
}

.header-search::after,.header-search::before {
    content: "";
    position: absolute;
    bottom: 10px;
    left: 0;
    width: 100%;
    height: 10px;
    z-index: 2;
    background-color: #fff
}

.header-search::after {
    bottom: 0;
    height: 10px;
    z-index: 1;
    box-shadow: 0 2px 10px rgba(0,0,0,.25)
}

.header-search__inner {
    max-width: 768px;
    margin: 0 auto;
    position: relative;
    z-index: 3
}

.header-search.active {
    display: block
}

@media(min-width: 783px) {
    .admin-bar .site-container {
        padding-top:32px
    }
}

@media(max-width: 782px) {
    #wpadminbar {
        display:none!important
    }
}

@supports(position: sticky) {
    body .site-header {
        position:sticky;
        top: 0;
        transition: transform .3s;
        z-index: 10
    }

    body.admin-bar .site-header {
        top: 32px
    }

    @media(max-width: 782px) {
        body.admin-bar .site-header {
            top:0
        }
    }

    body.nav-up .site-header {
        transform: translateY(-100%)
    }
}

.nav-menu>* {
    line-height: 0
}

.nav-menu ul {
    clear: both;
    line-height: 1;
    margin: 0;
    padding: 0;
    width: 100%
}

.nav-menu .menu-item {
    list-style: none;
    position: relative
}

.nav-menu .menu-item a {
    border: none;
    color: var(--wp--preset--color--foreground);
    font-family: var(--wp--preset--font-family--serif);
    font-size: var(--wp--preset--font-size--small);
    font-weight: 800;
    display: block;
    position: relative;
    padding: 30px 15px;
    text-decoration: none
}

.nav-menu .menu-item a span {
    position: relative
}

.nav-menu .menu-item a span::after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 0;
    height: 4px;
    width: 100%;
    background-color: var(--wp--preset--color--secondary);
    opacity: 0
}

.nav-menu .menu-item:hover:not(.menu-item-has-children) a span::after {
    opacity: 1;
    background-color: #eee
}

.nav-menu .menu-item.menu-item-has-children>a {
    padding-right: 32px
}

.nav-menu .menu-item.menu-item-has-children:hover>a {
    background-color: var(--wp--preset--color--primary);
    box-shadow: 3px 3px 0 #000
}

.nav-menu .menu-item.menu-item-has-children:hover>a::before {
    content: "";
    position: absolute;
    top: 0;
    right: -3px;
    width: 3px;
    height: 3px;
    background-color: #000
}

.nav-menu .menu-item.menu-item-has-children:hover>a span::after {
    opacity: 0
}

.nav-menu .menu-item.menu-item-has-children:hover .submenu-expand__icon::after,.nav-menu .menu-item.menu-item-has-children:hover .submenu-expand__icon::before {
    background-color: #000
}

.nav-menu .submenu-expand {
    background: rgba(0,0,0,0);
    border: none;
    border-radius: 0;
    box-shadow: none;
    padding: 0;
    outline: 0;
    cursor: pointer;
    position: absolute;
    line-height: 0;
    top: 50%;
    transform: translateY(-50%);
    right: 15px;
    width: 10px;
    height: 10px
}

.nav-menu .submenu-expand__icon {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%
}

.nav-menu .submenu-expand__icon::after,.nav-menu .submenu-expand__icon::before {
    content: "";
    width: 10px;
    height: 3px;
    position: absolute;
    top: 3.5px;
    left: 0;
    background-color: var(--wp--preset--color--primary)
}

.nav-menu .submenu-expand__icon::after {
    width: 3px;
    height: 10px;
    top: 0;
    left: 3.5px
}

@media(min-width: 1131px) {
    .nav-menu .menu-item {
        float:left
    }

    .nav-menu .menu-item:focus-within>.sub-menu,.nav-menu .menu-item:hover>.sub-menu {
        left: auto;
        right: 0;
        opacity: 1
    }

    .nav-menu .sub-menu {
        background: var(--wp--preset--color--primary);
        box-shadow: 3px 3px 0 #000;
        padding: 6px 0;
        left: -9999px;
        opacity: 0;
        position: absolute;
        width: 215px;
        z-index: 99
    }

    .nav-menu .sub-menu .menu-item {
        float: none
    }

    .nav-menu .sub-menu .menu-item a {
        padding: 12px 18px;
        font-family: var(--wp--preset--font-family--system-font);
        font-weight: 400
    }

    .nav-menu .sub-menu .menu-item a:hover {
        background-color: #dfa904
    }

    .nav-menu .sub-menu .menu-item a span::after {
        display: none
    }

    .nav-menu .sub-menu .sub-menu {
        margin: -48px 0 0 215px
    }
}

@media(max-width: 1130px) {
    .search-toggle {
        grid-column:3;
        grid-row: 1
    }

    .nav-menu {
        display: none;
        background-color: #fff;
        padding: 12px 16px
    }

    .nav-menu.active {
        display: block
    }

    .nav-menu li {
        border-bottom: 1px solid #e0e0e0
    }

    .nav-menu li:last-child {
        border-bottom: none
    }

    .nav-menu li a {
        padding: 18px 0!important
    }

    .nav-menu li a span::after {
        display: none!important
    }

    .nav-menu li:hover>a {
        background-color: rgba(0,0,0,0)!important;
        box-shadow: none!important
    }

    .nav-menu li:hover>a::before {
        display: none
    }

    .nav-menu .submenu-expand {
        top: 0;
        right: 0;
        transform: none;
        width: 52px;
        height: 52px
    }

    .nav-menu .submenu-expand__icon::before {
        top: calc(50% - 1.75px)!important;
        left: auto!important;
        right: 0!important;
        background-color: var(--wp--preset--color--primary)!important
    }

    .nav-menu .submenu-expand__icon::after {
        top: calc(50% - 5px)!important;
        left: auto!important;
        right: 3.5px!important;
        background-color: var(--wp--preset--color--primary)!important
    }

    .nav-menu .submenu-expand.expanded .submenu-expand__icon::after {
        display: none
    }

    .nav-menu .submenu-expand.expanded+.sub-menu {
        display: block
    }

    .nav-menu .sub-menu {
        display: none;
        margin-bottom: 12px
    }

    .nav-menu .sub-menu .menu-item {
        border-bottom: none
    }

    .nav-menu .sub-menu .menu-item a {
        font-family: var(--wp--preset--font-family--system-font);
        font-weight: 400
    }
}

.post-summary {
    margin-bottom: 12px
}

.post-summary__image {
    display: block;
    width: 100%;
    margin-bottom: 12px;
    overflow: hidden
}

.post-summary__image img {
    display: block;
    width: 100%;
    transition: all .2s ease-in-out
}

.post-summary__content {
    display: block;
    width: 100%
}

.post-summary__content p {
    margin: 16px 0 0;
    font-size: var(--wp--preset--font-size--small)
}

.post-summary__title {
    margin: 0 0 12px;
    font-size: var(--wp--preset--font-size--big)
}

.post-summary__title a {
    color: var(--wp--preset--color--secondary);
    text-decoration: none
}

.post-summary__title a:focus,.post-summary__title a:hover {
    opacity: .8
}

.post-summary.post-summary--secondary>a,.post-summary.post-summary--septenary>a {
    text-decoration: none
}

.post-summary.post-summary--secondary>a:focus .post-summary__title,.post-summary.post-summary--secondary>a:hover .post-summary__title,.post-summary.post-summary--septenary>a:focus .post-summary__title,.post-summary.post-summary--septenary>a:hover .post-summary__title {
    opacity: .9
}

.post-summary.post-summary--secondary .post-summary__title {
    color: var(--wp--preset--color--secondary);
    font-size: var(--wp--preset--font-size--medium);
    transition: all .2s ease-in-out
}

@media(max-width: 600px) {
    .post-summary__title {
        margin-bottom:6px
    }

    .post-summary.post-summary--secondary .post-summary__title {
        font-size: var(--wp--preset--font-size--normal)
    }

    .post-summary.post-summary--secondary {
        margin-bottom: 0
    }

    .post-summary.post-summary--septenary {
        margin-bottom: 0
    }

    .post-summary.post-summary--septenary:last-child .post-summary__image {
        margin-bottom: 0
    }
}

.post-summary.post-summary--septenary>a {
    display: flex;
    align-items: center
}

.post-summary.post-summary--septenary .post-summary__image {
    width: 80px;
    margin-right: 12px
}

.post-summary.post-summary--septenary .post-summary__content {
    flex: 1
}

.post-summary.post-summary--septenary .post-summary__content h3 {
    margin: 0;
    color: var(--wp--preset--color--secondary);
    font-size: var(--wp--preset--font-size--small)
}

.post-summary .wprm-recipe-rating {
    margin-top: 8px;
    color: var(--wp--preset--color--secondary)
}

.cost-per {
    display: block;
    width: 100%;
    font-size: 12px;
    letter-spacing: .4px;
    line-height: 14px;
    text-transform: uppercase;
    color: #616161;
    font-weight: 500;
    margin-bottom: 12px
}

.archive .site-inner {
    padding-top: 0
}

.archive-post-listing {
    max-width: var(--wp--custom--layout--page);
    margin-left: auto;
    margin-right: auto;
    display: grid;
    grid-template-columns: repeat(2,minmax(0,1fr));
    grid-column-gap: var(--wp--custom--layout--grid-column-gap);
    grid-row-gap: var(--wp--custom--layout--grid-row-gap)
}

@media(min-width: 992px) {
    .archive-post-listing {
        grid-template-columns:repeat(3,minmax(0,1fr))
    }
}

.archive-post-listing .block-area {
    grid-column: 1/-1;
    margin-bottom: 48px
}

input,input[type=date],input[type=datetime-local],input[type=email],input[type=number],input[type=password],input[type=search],input[type=tel],input[type=text],input[type=time],input[type=url],select,textarea {
    background: #fff;
    border: 1px solid var(--wp--preset--color--secondary);
    border-radius: 0;
    color: var(--wp--preset--color--foreground);
    font-size: 18px;
    line-height: 24px;
    padding: 14px 16px;
    width: 100%
}

input[type=checkbox] {
    width: auto
}

input[type=search] {
    border-width: 2px;
    font-size: 20px;
    box-shadow: 4px 4px 0 var(--wp--preset--color--primary);
    padding-right: 56px!important
}

select {
    line-height: 54px;
    height: 54px
}

textarea {
    width: 100%;
    resize: vertical
}

::-moz-placeholder {
    color: #bdbdbd;
    opacity: 1
}

::-ms-input-placeholder {
    color: #bdbdbd
}

::-webkit-input-placeholder {
    color: #bdbdbd
}

input:focus:-ms-input-placeholder,input:focus::-moz-placeholder,input:focus::-webkit-input-placeholder,textarea:focus:-ms-input-placeholder,textarea:focus::-moz-placeholder,textarea:focus::-webkit-input-placeholder {
    color: transparent
}

.entry-content ol,.entry-content ul {
    padding-left: 34px;
    list-style-type: none
}

.entry-content ol li,.entry-content ul li {
    padding-bottom: .5rem
}

.entry-content ol li:last-child,.entry-content ul li:last-child {
    padding-bottom: 0
}

.entry-content ol li ol,.entry-content ol li ul,.entry-content ul li ol,.entry-content ul li ul {
    padding-top: .5rem
}

.entry-content ul li {
    position: relative
}

.entry-content ul li::before {
    content: "";
    width: 4px;
    height: 4px;
    border-radius: 4px;
    background-color: var(--wp--preset--color--foreground);
    position: absolute;
    left: -24px;
    top: 12px
}

.entry-content ol {
    counter-reset: cwp-counter
}

.entry-content ol li {
    counter-increment: cwp-counter;
    position: relative
}

.entry-content ol li::before {
    content: counter(cwp-counter);
    width: 20px;
    height: 20px;
    border: 2px solid #000;
    background-color: var(--wp--preset--color--primary);
    font-family: var(--wp--preset--font-family--serif);
    font-size: 12px;
    font-weight: 900;
    position: absolute;
    top: 4px;
    left: -32px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 2px 2px 0 #000
}

.entry-content li a,.entry-content ol a,.entry-content p a {
    color: var(--wp--preset--color--foreground);
    text-decoration: none;
    background-color: rgba(251,196,27,.75);
    padding: 3px;
    transition: background-color .2s ease-in-out
}

.entry-content li a:active,.entry-content li a:focus,.entry-content li a:hover,.entry-content ol a:active,.entry-content ol a:focus,.entry-content ol a:hover,.entry-content p a:active,.entry-content p a:focus,.entry-content p a:hover {
    background-color: var(--wp--preset--color--primary)
}

.entry-content h2 a,.entry-content h3 a,.entry-content h4 a {
    color: var(--wp--preset--color--foreground)
}

.entry-content h2 a:hover,.entry-content h3 a:hover,.entry-content h4 a:hover {
    color: var(--wp--custom--color--link)
}

.site-inner {
    padding-left: var(--wp--custom--layout--padding);
    padding-right: var(--wp--custom--layout--padding)
}

.block-area>*,.entry-content>* {
    margin: 0 auto;
    max-width: var(--wp--custom--layout--page)
}

.block-area>.alignfull,.entry-content>.alignfull {
    margin-left: calc(-1*var(--wp--custom--layout--padding));
    margin-right: calc(-1*var(--wp--custom--layout--padding));
    max-width: 100vw
}

.block-area>*+*,.entry-content>*+* {
    margin-top: var(--wp--style--block-gap)
}

.block-area>h2,.block-area>h3,.block-area>h4,.entry-content>h2,.entry-content>h3,.entry-content>h4 {
    margin-top: 40px
}

#comments p>a {
    color: var(--wp--preset--color--foreground);
    text-decoration: none;
    background-color: rgba(251,196,27,.75);
    padding: 3px;
    transition: background-color .2s ease-in-out
}

#comments p>a:active,#comments p>a:focus,#comments p>a:hover {
    background-color: var(--wp--preset--color--primary)
}

.entry-comments,.entry-header {
    max-width: var(--wp--custom--layout--page);
    margin-left: auto;
    margin-right: auto
}

.single .entry-header {
    margin-bottom: 32px;
    padding-bottom: 32px;
    border-bottom: 1px solid #000
}

.entry-header h1 {
    margin-top: 0;
    margin-bottom: 12px
}

.entry-header__meta {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 20px
}

@media(max-width: 700px) {
    .entry-header__meta {
        flex-direction:column-reverse;
        align-items: flex-start;
        gap: 8px
    }
}

.entry-header__author {
    font-family: var(--wp--preset--font-size--serif);
    font-size: var(--wp--preset--font-size--small)
}

.entry-header__author a {
    font-weight: 900;
    color: var(--wp--preset--color--secondary);
    text-decoration: none
}

.entry-header__meta-left {
    display: flex;
    align-items: center
}

.entry-header__meta-left img {
    border-radius: 50%;
    margin-right: 12px;
    max-width: 60px
}

.entry-header__meta-right {
    text-align: center
}

.entry-header .wprm-rating-star svg {
    width: 24px;
    height: 24px
}

.entry-header .wprm-recipe-rating .wprm-recipe-rating-details {
    font-size: 14px;
    margin-top: 3px
}

.entry-header p.affiliate-disclaimer {
    margin: 24px 0 0;
    font-size: var(--wp--preset--font-size--small);
    color: #616161
}

.entry-date {
    margin: 4px 0 0;
    font-size: var(--wp--preset--font-size--tiny);
    color: #616161
}

.entry-date>span:nth-child(2) {
    margin-left: 20px
}

@media(max-width: 600px) {
    .archive-post-listing {
        grid-template-columns:repeat(1,minmax(0,1fr))
    }

    .entry-date>span:nth-child(2) {
        margin-left: 10px
    }
}

.entry-date>span time {
    font-family: var(--wp--preset--font-family--serif);
    font-weight: 900
}

.single-post-jump-buttons {
    display: flex;
    width: 100%;
    margin: 0
}

.single-post-jump-buttons>a {
    text-decoration: none
}

.single-post-jump-buttons a.shared-counts-button {
    color: var(--wp--preset--color--secondary);
    background-color: #fff;
    border: 2px solid var(--wp--preset--color--secondary);
    border-radius: 0;
    padding: 16px 24px
}

.single-post-jump-buttons a.shared-counts-button,.single-post-jump-buttons a.wprm-recipe-link-inline-button {
    font-family: var(--wp--preset--font-family--serif);
    font-weight: 900;
    border: 2px solid var(--wp--preset--color--secondary);
    font-size: 14px;
    line-height: 18px;
    letter-spacing: 2px;
    text-transform: uppercase;
    margin: 0 16px 0 0;
    text-align: center;
    transition: all .2s ease-in-out
}

.single-post-jump-buttons a.shared-counts-button:last-child,.single-post-jump-buttons a.wprm-recipe-link-inline-button:last-child {
    margin-right: 0
}

@media(max-width: 700px) {
    .entry-header .wprm-recipe-rating .wprm-recipe-rating-details {
        margin:0 0 0 5px
    }

    .entry-header .wprm-recipe-rating {
        display: flex;
        align-items: center
    }

    .single-post-jump-buttons a.shared-counts-button,.single-post-jump-buttons a.wprm-recipe-link-inline-button {
        padding: 12px 16px!important;
        margin-right: 8px
    }

    .single-post-jump-buttons a.shared-counts-button:last-child,.single-post-jump-buttons a.wprm-recipe-link-inline-button:last-child {
        margin-right: 0
    }
}

@media(max-width: 500px) {
    .single-post-jump-buttons a.shared-counts-button,.single-post-jump-buttons a.wprm-recipe-link-inline-button {
        padding:6px 12px!important;
        display: flex;
        align-items: center;
        justify-content: center
    }
}

.single-post-jump-buttons a.wprm-recipe-jump {
    box-shadow: 3px 3px 0 #000
}

.term-list a {
    color: var(--wp--preset--color--foreground);
    text-decoration: none;
    background-color: rgba(251,196,27,.75);
    padding: 3px;
    transition: background-color .2s ease-in-out;
    margin-bottom: 3px;
    display: inline-block
}

.single-post-bottom {
    display: block;
    width: 100%;
    border-top: 2px solid var(--wp--preset--color--secondary);
    padding: 48px 0 60px;
    margin-top: 48px
}

.single-share-wrap {
    display: flex;
    width: 100%;
    justify-content: center;
    flex-wrap: wrap
}

.single-share-wrap__header {
    width: 100%;
    font-weight: 900;
    font-size: 14px;
    line-height: 16px;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 8px
}

.single-share-wrap .shared-counts-wrap.style-icon {
    display: flex
}

.single-share-wrap .shared-counts-wrap.style-icon .shared-counts-button {
    width: 54px;
    height: 54px;
    border-radius: 54px;
    background-color: var(--wp--preset--color--primary);
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 15px 15px 0;
    box-shadow: 3px 3px 0 #000;
    transition: all .2s ease-in-out
}

.single-share-wrap .shared-counts-wrap.style-icon .shared-counts-button:last-child {
    margin-right: 0
}

.single-share-wrap .shared-counts-wrap.style-icon .shared-counts-button:focus,.single-share-wrap .shared-counts-wrap.style-icon .shared-counts-button:hover {
    background-color: var(--wp--custom--color--primary-darken)
}

.single-share-wrap .shared-counts-wrap.style-icon .shared-counts-button svg {
    fill: #000;
    width: 30px;
    height: 30px
}

.single-post-author {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    margin-top: 45px
}

.single-post-author__avatar {
    width: 96px;
    margin-right: 32px
}

.single-post-author__avatar img {
    border-radius: 96px
}

@media(max-width: 600px) {
    .single-post-bottom {
        padding-bottom:48px
    }

    .single-post-author {
        margin-top: 33px
    }

    .single-post-author__avatar {
        width: 100%;
        margin-right: 0;
        display: flex;
        justify-content: center;
        margin-bottom: 10px
    }

    .single-post-author__avatar img {
        width: 96px
    }
}

.single-post-author__info {
    flex: 1
}

@media(max-width: 600px) {
    .single-post-author__info {
        flex:none;
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        text-align: center
    }
}

.single-post-author__name {
    display: block;
    width: 100%;
    font-family: var(--wp--preset--font-family--serif);
    text-transform: uppercase;
    font-weight: 900;
    font-size: 26px;
    line-height: 30px;
    margin-bottom: 12px
}

.single-post-author__bio {
    display: block;
    width: 100%;
    font-size: var(--wp--preset--font-size--small)
}

.single-post-author .wp-block-button__link {
    margin-top: 16px;
    font-size: 14px;
    padding: 14px 20px
}

img.wprm-comment-rating {
    filter: invert(86%) sepia(41%) saturate(3750%) hue-rotate(351deg) brightness(107%) contrast(104%)
}

.entry-comments .comment-list {
    margin: 0 0 32px;
    padding: 0
}

.entry-comments .comment-list li {
    list-style-type: none;
    border: 2px solid var(--wp--preset--color--secondary);
    padding: 10px
}

.entry-comments .comment-list li article {
    padding: 14px 22px;
    position: relative
}

.entry-comments .comment-list li .wprm-rating-star svg {
    filter: drop-shadow(3px 3px 0 black)
}

.entry-comments .comment-list li .wprm-rating-star svg polygon {
    fill: #fff
}

.entry-comments .comment-list>li {
    overflow: hidden;
    margin-bottom: 15px
}

.entry-comments .comment-list .comment-meta {
    display: flex;
    align-items: center;
    flex-wrap: wrap
}

.entry-comments .comment-list .comment-author {
    display: inline-block;
    vertical-align: middle;
    margin: 0 24px 0 0
}

.entry-comments .comment-list .comment-author a {
    color: var(--wp--preset--color--foreground);
    text-decoration: none
}

.entry-comments .comment-list .comment-author .fn {
    font-family: var(--wp--preset--font-family--serif);
    font-size: var(--wp--preset--font-size--medium);
    text-transform: uppercase;
    font-weight: 900
}

.entry-comments .comment-list .comment-author .says {
    display: none
}

.entry-comments .comment-list .comment-metadata a {
    color: #616161;
    text-decoration: none;
    font-size: 12px;
    line-height: 24px
}

.entry-comments .comment-list .comment-metadata a:hover {
    color: var(--wp--preset--color--primary)
}

.entry-comments .comment-list .comment-content {
    display: flex;
    flex-wrap: wrap
}

.entry-comments .comment-list .comment-content p {
    display: block;
    width: 100%;
    font-size: 16px;
    margin-top: 12px;
    margin-bottom: 0
}

.entry-comments .comment-list .comment-content p:last-child {
    margin-bottom: 0
}

.entry-comments .comment-list .comment-content .wprm-comment-rating {
    order: -1;
    margin-top: 8px
}

.entry-comments .comment-list .comment-reply-link {
    font-family: var(--wp--preset--font-family--serif);
    font-weight: 900;
    letter-spacing: 2.5px;
    text-transform: uppercase;
    font-size: var(--wp--preset--font-size--small);
    border-radius: 0;
    padding: 12px 15px;
    text-decoration: none;
    background-color: var(--wp--preset--color--primary);
    color: var(--wp--preset--color--secondary);
    display: inline-block;
    margin-top: 16px
}

.entry-comments .comment-list .comment-reply-link:focus,.entry-comments .comment-list .comment-reply-link:hover {
    background-color: var(--wp--custom--color--primary-darken)
}

.entry-comments .comment-list ol.children {
    margin: 16px 0 0;
    padding: 0
}

.comment-respond {
    margin: 30px 0
}

@media(min-width: 768px) {
    .comment-respond {
        margin:60px 0 30px
    }
}

.comment-respond h3 {
    margin: 0
}

.comment-respond .comment-notes {
    margin-top: 8px
}

.comment-respond .comment-form {
    display: flex;
    flex-wrap: wrap
}

.comment-respond label {
    display: block;
    margin-right: 12px;
    font-family: var(--wp--preset--font-family--serif);
    font-weight: 900;
    text-transform: uppercase;
    font-size: var(--wp--preset--font-size--small);
    letter-spacing: 1px;
    color: #424242
}

.comment-respond .comment-form-comment,.comment-respond .comment-form-wprm-rating,.comment-respond .comment-notes {
    width: 100%;
    margin: 0 0 var(--wp--custom--layout--block-gap)
}

.comment-respond .comment-form-author,.comment-respond .comment-form-email {
    width: calc(50% - 16px);
    margin-right: 32px;
    margin-top: 0
}

.comment-respond .comment-form-email {
    margin-right: 0
}

.comment-respond .form-submit {
    margin-top: 24px
}

.comment-respond .form-submit .wp-block-button__link {
    background-color: var(--wp--preset--color--primary);
    border: 2px solid #000;
    color: #000;
    box-shadow: 3px 3px 0 #000;
    width: auto
}

.comment-respond .form-submit .wp-block-button__link:focus,.comment-respond .form-submit .wp-block-button__link:hover {
    background-color: var(--wp--custom--color--primary-darken)
}

.comments-title-wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 18px;
    margin-top: 30px
}

.comments-title {
    margin: 0 18px 0 0
}

.comments-leave-link {
    font-size: 14px;
    line-height: 18px;
    padding: 16px
}

.site-footer {
    padding-left: var(--wp--custom--layout--padding);
    padding-right: var(--wp--custom--layout--padding)
}

.site-footer .wrap {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    border-top: 1px solid #d8d8d8;
    margin-top: 50px;
    padding: 36px 0
}

.site-footer__main {
    flex: 1;
    display: flex;
    padding-right: 30px
}

@media(max-width: 768px) {
    .site-footer__main {
        width:100%;
        padding-right: 0;
        flex: none;
        margin-bottom: 24px
    }

    .site-footer__menu-column.site-footer__menu-column--1 {
        margin-left: 82px
    }
}

.site-footer__main-icon {
    width: 100px;
    margin-right: 27px
}

@media(max-width: 1000px) {
    .site-footer__main-icon {
        width:64px;
        margin-right: 18px
    }
}

@media(max-width: 600px) {
    .entry-comments .comment-list li article {
        padding:1px 6px
    }

    .site-footer__main {
        justify-content: center;
        flex-direction: column;
        align-items: center;
        text-align: center
    }

    .site-footer__main-icon {
        width: 72px;
        margin: 0 0 14px
    }
}

.site-footer__main-icon img {
    display: block;
    width: 100%
}

.site-footer__main-right {
    flex: 1
}

.site-footer__menu-column {
    width: 168px;
    margin-left: 32px
}

@media(max-width: 1150px) {
    .site-footer__menu-column {
        margin-left:16px
    }
}

@media(max-width: 1000px) {
    .site-footer__menu-column {
        width:140px
    }
}

.site-footer__menu-column ul {
    list-style-type: none;
    margin-left: 0;
    padding-left: 0;
    margin-top: 0;
    margin-bottom: 0
}

.site-footer__menu-column ul li {
    margin-bottom: 8px
}

.site-footer__menu-column ul li:last-child {
    margin-bottom: 0
}

.site-footer__menu-column ul li a {
    color: #000;
    text-decoration: none;
    font-size: 16px;
    line-height: 24px
}

.site-footer__menu-column ul li a:active,.site-footer__menu-column ul li a:focus,.site-footer__menu-column ul li a:hover {
    text-decoration: underline
}

.site-footer__menu-column ul li.social-item {
    position: relative;
    display: flex;
    align-items: center
}

@media(max-width: 600px) {
    .site-footer__menu-column {
        margin-left:0!important;
        width: 100%;
        text-align: center;
        margin-bottom: 24px
    }

    .site-footer__menu-column:last-child {
        margin-left: 0
    }

    .site-footer__menu-column ul li.social-item {
        justify-content: center
    }
}

.site-footer__menu-column ul li.social-item::before {
    content: "";
    position: relative;
    display: inline-block;
    width: 18px;
    height: 18px;
    background-size: cover;
    margin-right: 10px
}

.site-footer__menu-column ul li.social-item--facebook::before {
    background-image: url("https://www.budgetbytes.com/wp-content/themes/budgetbytes-2022/assets/icons/utility/facebook.svg")
}

.site-footer__menu-column ul li.social-item--pinterest::before {
    background-image: url("https://www.budgetbytes.com/wp-content/themes/budgetbytes-2022/assets/icons/utility/pinterest.svg")
}

.site-footer__menu-column ul li.social-item--instagram::before {
    background-image: url("https://www.budgetbytes.com/wp-content/themes/budgetbytes-2022/assets/icons/utility/instagram.svg")
}

.site-footer__menu-column ul li.social-item--twitter::before {
    background-image: url("https://www.budgetbytes.com/wp-content/themes/budgetbytes-2022/assets/icons/utility/twitter.svg")
}

.site-footer__menu-column ul li.social-item--youtube::before {
    background-image: url("https://www.budgetbytes.com/wp-content/themes/budgetbytes-2022/assets/icons/utility/youtube-play.svg")
}

.site-footer__menu-column ul li.social-item--tiktok::before {
    background-image: url("https://www.budgetbytes.com/wp-content/themes/budgetbytes-2022/assets/icons/utility/tiktok.svg")
}

.site-footer__heading {
    display: block;
    width: 100%;
    font-weight: 900;
    text-transform: uppercase;
    margin-bottom: 12px
}

.site-footer__description p {
    margin: 0 0 6px;
    font-size: var(--wp--preset--font-size--small)
}

.site-footer__description p:last-child {
    margin-bottom: 0
}

.site-footer__bottom {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    margin-top: 56px
}

@media(max-width: 600px) {
    .site-footer__bottom {
        flex-wrap:wrap;
        margin-top: 4px
    }
}

.site-footer__copyright {
    font-size: 12px;
    color: #616161;
    margin: 0 8px
}

@media(max-width: 600px) {
    .site-footer__copyright {
        width:100%;
        margin: 0 0 3px;
        text-align: center
    }
}

.site-footer__links {
    display: flex;
    align-items: center
}

.site-footer__links-item {
    font-size: 12px;
    color: #616161;
    margin: 0 8px
}

.site-footer__links-item:active,.site-footer__links-item:focus,.site-footer__links-item:hover {
    color: #000
}

.block-post-listing {
    margin-top: 50px;
    margin-bottom: 65px
}

.block-post-listing:last-child {
    margin-bottom: 0
}

.block-post-listing.layout-beta header {
    display: flex;
    position: relative;
    overflow: hidden;
    margin-bottom: var(--wp--custom--layout--block-gap)
}

.block-post-listing.layout-beta header h2 {
    position: relative;
    font-size: var(--wp--preset--font-size--big);
    margin: 0
}

.block-post-listing.layout-beta header h2::after {
    content: "";
    position: absolute;
    left: calc(100% + 22px);
    top: calc(50% - 1.5px);
    height: 3px;
    width: 100vw;
    background-color: var(--wp--preset--color--primary)
}

.block-post-listing.layout-beta .block-post-listing__inner {
    display: grid;
    grid-template-columns: repeat(2,minmax(0,1fr));
    column-gap: var(--wp--custom--layout--block-gap);
    row-gap: 16px
}

@media only screen and (max-width: 600px) {
    .block-post-listing {
        margin-top:32px;
        margin-bottom: 32px
    }

    .block-post-listing.layout-beta .block-post-listing__inner {
        column-gap: 16px
    }
}

.block-post-listing.layout-beta .cost-per,.block-post-listing.layout-beta .post-summary {
    margin-bottom: 0
}

.block-post-listing.layout-gamma {
    position: relative;
    margin: var(--wp--custom--layout--block-gap) auto
}

.block-post-listing.layout-gamma header {
    position: absolute;
    top: 12px;
    left: -36px;
    background-color: var(--wp--preset--color--primary)
}

@media only screen and (min-width: 768px) {
    .block-post-listing.layout-beta .block-post-listing__inner {
        grid-template-columns:repeat(4,minmax(0,1fr))
    }

    .block-post-listing.layout-gamma .block-post-listing__inner {
        display: grid;
        grid-template-columns: repeat(2,minmax(0,1fr));
        column-gap: var(--wp--custom--layout--block-gap)
    }
}

.block-area-sidebar .block-post-listing.layout-gamma,.sidebar-primary .block-post-listing.layout-gamma {
    border: 1px solid #000;
    padding: 15px;
    margin-top: 30px
}

.block-area-sidebar .block-post-listing.layout-gamma header,.sidebar-primary .block-post-listing.layout-gamma header {
    position: relative;
    top: auto;
    left: auto;
    background-color: transparent
}

.block-area-sidebar .block-post-listing.layout-gamma header h2,.sidebar-primary .block-post-listing.layout-gamma header h2 {
    font-size: var(--wp--preset--font-size--medium);
    margin: 0 0 12px
}

.block-area-sidebar .block-post-listing.layout-gamma .block-post-listing__inner,.sidebar-primary .block-post-listing.layout-gamma .block-post-listing__inner {
    display: block
}

.block-area-sidebar .block-post-listing.layout-gamma .block-post-listing__inner .post-summary__image,.sidebar-primary .block-post-listing.layout-gamma .block-post-listing__inner .post-summary__image {
    margin-bottom: 0
}

.block-area-sidebar .block-post-listing.layout-gamma .block-post-listing__inner .post-summary:last-child,.sidebar-primary .block-post-listing.layout-gamma .block-post-listing__inner .post-summary:last-child {
    margin-bottom: 0
}

.block-post-listing footer {
    margin-top: 32px
}

@media only screen and (max-width: 768px) {
    .block-post-listing footer {
        text-align:center;
        margin-top: 16px
    }
}

.block-post-listing__more {
    display: inline-block;
    font-family: var(--wp--preset--font-family--serif);
    font-weight: 900;
    letter-spacing: 2.5px;
    text-transform: uppercase;
    font-size: var(--wp--preset--font-size--small);
    border-radius: 0;
    padding: 16px 24px;
    border: 2px solid var(--wp--preset--color--secondary);
    color: var(--wp--preset--color--secondary);
    text-decoration: none;
    background-color: #fff
}

.block-post-listing__more:focus,.block-post-listing__more:hover {
    background-color: #eee
}

@media (max-width: 400px) {
    .block-post-listing__more {
        width:100%;
        padding: 13px 20px
    }
}

.ep-autosuggest-container {
    position: relative
}

.ep-autosuggest-container .ep-autosuggest {
    background: #fff;
    border: 1px solid #ccc;
    -webkit-box-shadow: 0 2px 4px rgba(0,0,0,.2);
    box-shadow: 0 2px 4px rgba(0,0,0,.2);
    display: none;
    position: absolute;
    width: 100%;
    z-index: 200
}

.ep-autosuggest-container .ep-autosuggest>ul {
    margin: 0!important
}

.ep-autosuggest-container .ep-autosuggest>ul {
    list-style: none
}

.ep-autosuggest-container .ep-autosuggest>ul>li {
    font-family: sans-serif
}

.ep-autosuggest-container .ep-autosuggest>ul>li>a.autosuggest-link {
    color: #000;
    cursor: pointer;
    display: block;
    padding: 2px 10px
}

.ep-autosuggest-container .ep-autosuggest>ul>li>a.autosuggest-link:active,.ep-autosuggest-container .ep-autosuggest>ul>li>a.autosuggest-link:hover {
    background-color: #eee;
    -webkit-text-decoration: none;
    text-decoration: none
}

.ep-autosuggest-container .selected {
    background-color: #eee;
    -webkit-text-decoration: none;
    text-decoration: none
}

:root {
    --ep-range-slider-background-color: #fff;
    --ep-range-slider-track-color: #eee
}

@media (min-width: 768px) {
    :root {
        --ep-range-slider-thumb-size:1.25em;
        --ep-range-slider-track-size: 0.5em
    }
}

.tippy-box[data-theme~=wprm] {
    background-color: #333;
    color: #fff
}

.tippy-box[data-theme~=wprm][data-placement^=top]>.tippy-arrow::before {
    border-top-color: #333
}

.tippy-box[data-theme~=wprm][data-placement^=bottom]>.tippy-arrow::before {
    border-bottom-color: #333
}

.tippy-box[data-theme~=wprm][data-placement^=left]>.tippy-arrow::before {
    border-left-color: #333
}

.tippy-box[data-theme~=wprm][data-placement^=right]>.tippy-arrow::before {
    border-right-color: #333
}

.tippy-box[data-theme~=wprm] a {
    color: #fff
}

.wprm-comment-rating svg {
    width: 24px!important;
    height: 24px!important
}

img.wprm-comment-rating {
    width: 120px!important;
    height: 24px!important
}

.wprm-comment-rating svg path {
    fill: #fcc51c
}

.wprm-comment-rating svg polygon {
    stroke: #fcc51c
}

.wprm-comment-ratings-container svg .wprm-star-full {
    fill: #fcc51c
}

.wprm-comment-ratings-container svg .wprm-star-empty {
    stroke: #fcc51c
}

@media only screen and (max-width: 359px) {
    .bb-recipe-card {
        padding-left:0!important;
        padding-right: 0!important;
        border: none!important;
        box-shadow: none!important
    }

    .wprm-recipe-instructions li .mv-ad-box {
        margin-left: -32px!important
    }

    .bb-recipe-card .wprm-call-to-action {
        margin-left: 0!important;
        margin-right: 0!important;
        max-width: 100%!important
    }
}

.site-footer .site-footer__bottom .site-footer__links .access-options,.site-footer .site-footer__bottom .site-footer__links .site-footer__links-item {
    text-decoration: underline
}

.site-footer .site-footer__bottom .site-footer__links .access-options:hover {
    cursor: pointer
}

.wprm-recipe-author a {
    color: #000
}

#cp_button-4-53340 .cp_loader_container {
    border-left-color: #fff
}

#cp_button-4-53340 .cp_loader_container.cp_success_loader_container {
    border-color: #fff
}

#cp_button-4-53340 i.cp-button-loader-style.draw.success-loader-style {
    color: #fff
}

#cp_button-4-53340 .cp-target.cp-field-element.cp-button-field.cp-button-loading:hover {
    background: #000
}

#cp_button-4-53340 .cp-target.cp-field-element.cp-button-field.cp-button-loading:hover {
    border-color: #757575
}

#cp_button-5-53340 .cp_loader_container {
    border-left-color: #666
}

#cp_button-5-53340 .cp_loader_container.cp_success_loader_container {
    border-color: #666
}

#cp_button-5-53340 i.cp-button-loader-style.draw.success-loader-style {
    color: #666
}

#cp_button-5-53340 .cp-target.cp-field-element.cp-button-field.cp-button-loading:hover {
    background: #fff
}

#cp_button-5-53340 .cp-target.cp-field-element.cp-button-field.cp-button-loading:hover {
    border-color: #757575
}

#wprm-recipe-rating-1 .wprm-rating-star.wprm-rating-star-full svg * {
    fill: #fbc41b
}

#wprm-recipe-rating-1 .wprm-rating-star.wprm-rating-star-33 svg * {
    fill: url(#wprm-recipe-rating-1-33)
}

#wprm-recipe-rating-1 .wprm-rating-star.wprm-rating-star-50 svg * {
    fill: url(#wprm-recipe-rating-1-50)
}

#wprm-recipe-rating-1 .wprm-rating-star.wprm-rating-star-66 svg * {
    fill: url(#wprm-recipe-rating-1-66)
}

linearGradient#wprm-recipe-rating-1-33 stop {
    stop-color: #fbc41b
}

linearGradient#wprm-recipe-rating-1-50 stop {
    stop-color: #fbc41b
}

linearGradient#wprm-recipe-rating-1-66 stop {
    stop-color: #fbc41b
}

#wprm-recipe-rating-2 .wprm-rating-star.wprm-rating-star-full svg * {
    fill: #fbc41b
}

#wprm-recipe-rating-2 .wprm-rating-star.wprm-rating-star-33 svg * {
    fill: url(#wprm-recipe-rating-2-33)
}

#wprm-recipe-rating-2 .wprm-rating-star.wprm-rating-star-50 svg * {
    fill: url(#wprm-recipe-rating-2-50)
}

#wprm-recipe-rating-2 .wprm-rating-star.wprm-rating-star-66 svg * {
    fill: url(#wprm-recipe-rating-2-66)
}

linearGradient#wprm-recipe-rating-2-33 stop {
    stop-color: #fbc41b
}

linearGradient#wprm-recipe-rating-2-50 stop {
    stop-color: #fbc41b
}

linearGradient#wprm-recipe-rating-2-66 stop {
    stop-color: #fbc41b
}

.cp_style_53340 .cp-popup-content {
    font-family: Montserrat;
    font-style: Normal;
    font-weight: Normal
}

.cp_style_53340 .cp-popup-content {
    border-style: none;
    border-color: #e1e1e1;
    border-width: 1px;
    border-radius: 3px 3px 3px 3px;
    mobile-breakpoint: 767
}

.cp_style_53340 .cpro-overlay {
    background: rgba(0,0,0,.8)
}

.cp_style_53340 .cp-popup-wrapper .cpro-overlay {
    height: 420px
}

.cp_style_53340 .cp-popup-content {
    width: 538px;
    height: 420px;
    background-color: #fff
}

.cp_style_53340 .cp-popup .cpro-form .cp-form-input-field {
    font-family: inherit;
    font-style: Inherit;
    font-weight: Inherit;
    text-transform: none;
    font-size: 20px;
    letter-spacing: 0;
    text-align: center;
    color: #999;
    background-color: #fff;
    border-style: solid;
    border-width: 2px;
    border-radius: 1px 1px 1px 1px;
    border-color: #000;
    active-border-color: #666;
    padding: 0 10px
}

.cp_style_53340 .cp-popup .cpro-form .cp-form-input-field input[type=checkbox],.cp_style_53340 .cp-popup .cpro-form .cp-form-input-field input[type=radio] {
    color: #999;
    background-color: #fff
}

.cp_style_53340 .cp-popup .cpro-form .cp-form-input-field:focus {
    border-color: #666
}

.cp_style_53340 .cp-popup .cpro-form .cp-form-input-field::-webkit-input-placeholder {
    color: #666
}

.cp_style_53340 .cp-popup .cpro-form .cp-form-input-field::-moz-placeholder {
    color: #666
}

.cp_style_53340 #cp_heading-4-53340 .cp-target {
    font-family: inherit;
    font-style: Bold;
    font-weight: Bold;
    font-size: 40px;
    line-height: 1.2;
    letter-spacing: 0;
    text-align: center;
    color: #2a2a2a;
    width: 528px;
    height: 46px
}

.cp_style_53340 #cp_heading-4-53340 .cp-rotate-wrap {
    transform: rotate(0)
}

.cp_style_53340 #cp_heading-4-53340 {
    left: 5px;
    top: 18.963073730469px;
    z-index: 2
}

@media (max-width: 767px) {
    .cp_style_53340 .cp-popup-content {
        border-style:none;
        border-color: #e1e1e1;
        border-width: 1px;
        border-radius: 3px 3px 3px 3px;
        mobile-breakpoint: 767
    }

    .cp_style_53340 .cpro-overlay {
        background: rgba(0,0,0,.8)
    }

    .cp_style_53340 .cp-popup-wrapper .cpro-overlay {
        height: 235px
    }

    .cp_style_53340 .cp-popup-content {
        width: 320px;
        height: 235px;
        background-color: #fff
    }

    .cp_style_53340 .cp-popup .cpro-form .cp-form-input-field {
        font-family: inherit;
        font-style: Inherit;
        font-weight: Inherit;
        text-transform: none;
        font-size: 11px;
        letter-spacing: 0;
        text-align: left;
        color: #999;
        background-color: #fff;
        border-style: solid;
        border-width: 2px;
        border-radius: 1px 1px 1px 1px;
        border-color: #000;
        active-border-color: #666;
        padding: 0 10px
    }

    .cp_style_53340 .cp-popup .cpro-form .cp-form-input-field input[type=checkbox],.cp_style_53340 .cp-popup .cpro-form .cp-form-input-field input[type=radio] {
        color: #999;
        background-color: #fff
    }

    .cp_style_53340 .cp-popup .cpro-form .cp-form-input-field:focus {
        border-color: #666
    }

    .cp_style_53340 .cp-popup .cpro-form .cp-form-input-field::-webkit-input-placeholder {
        color: #666
    }

    .cp_style_53340 .cp-popup .cpro-form .cp-form-input-field::-moz-placeholder {
        color: #666
    }

    .cp_style_53340 #cp_heading-4-53340 .cp-target {
        font-family: inherit;
        font-style: Bold;
        font-weight: Bold;
        font-size: 22px;
        line-height: 1.2;
        letter-spacing: 0;
        text-align: center;
        color: #2a2a2a;
        width: 315px;
        height: 26px
    }

    .cp_style_53340 #cp_heading-4-53340 .cp-rotate-wrap {
        transform: rotate(0)
    }

    .cp_style_53340 #cp_heading-4-53340 {
        left: 2px;
        top: 13px;
        z-index: 2
    }
}

.cp_style_53340 #cp_image-4-53340 .cp-target {
    width: 150px;
    height: 150px
}

.cp_style_53340 #cp_image-4-53340 .cp-target {
    border-style: none
}

.cp_style_53340 #cp_image-4-53340 .cp-target~.cp-field-shadow {
    border-style: none
}

.cp_style_53340 #cp_image-4-53340 .cp-target {
    border-color: #757575
}

.cp_style_53340 #cp_image-4-53340 .cp-target~.cp-field-shadow {
    border-color: #757575
}

.cp_style_53340 #cp_image-4-53340 .cp-target {
    border-width: 1px
}

.cp_style_53340 #cp_image-4-53340 .cp-target~.cp-field-shadow {
    border-width: 1px
}

.cp_style_53340 #cp_image-4-53340 .cp-target {
    border-radius: 6px 0 20px 6px
}

.cp_style_53340 #cp_image-4-53340 .cp-target~.cp-field-shadow {
    border-radius: 6px 0 20px 6px
}

.cp_style_53340 #cp_image-4-53340 .cp-rotate-wrap {
    transform: rotate(0)
}

.cp_style_53340 #cp_image-4-53340 {
    left: -.01416015625px;
    top: 86.519897460938px;
    z-index: 3
}

@media (max-width: 767px) {
    .cp_style_53340 #cp_image-4-53340 .cp-target {
        width:95px;
        height: 95px
    }

    .cp_style_53340 #cp_image-4-53340 .cp-target {
        border-style: none
    }

    .cp_style_53340 #cp_image-4-53340 .cp-target~.cp-field-shadow {
        border-style: none
    }

    .cp_style_53340 #cp_image-4-53340 .cp-target {
        border-color: #757575
    }

    .cp_style_53340 #cp_image-4-53340 .cp-target~.cp-field-shadow {
        border-color: #757575
    }

    .cp_style_53340 #cp_image-4-53340 .cp-target {
        border-width: 1px
    }

    .cp_style_53340 #cp_image-4-53340 .cp-target~.cp-field-shadow {
        border-width: 1px
    }

    .cp_style_53340 #cp_image-4-53340 .cp-target {
        border-radius: 6px 0 20px 6px
    }

    .cp_style_53340 #cp_image-4-53340 .cp-target~.cp-field-shadow {
        border-radius: 6px 0 20px 6px
    }

    .cp_style_53340 #cp_image-4-53340 .cp-rotate-wrap {
        transform: rotate(0)
    }

    .cp_style_53340 #cp_image-4-53340 {
        left: 9px;
        top: 50px;
        z-index: 3
    }
}

.cp_style_53340 #cp_paragraph-4-53340 .cp-target {
    font-family: inherit;
    font-style: Inherit;
    font-weight: Inherit;
    font-size: 18px;
    line-height: 1.6;
    letter-spacing: 0;
    text-align: center;
    color: #2a2a2a;
    width: 379px;
    height: 120px
}

.cp_style_53340 #cp_paragraph-4-53340 .cp-rotate-wrap {
    transform: rotate(0)
}

.cp_style_53340 #cp_paragraph-4-53340 {
    left: 148.97729492188px;
    top: 80.539764404297px;
    z-index: 4
}

@media (max-width: 767px) {
    .cp_style_53340 #cp_paragraph-4-53340 .cp-target {
        font-family:inherit;
        font-style: Inherit;
        font-weight: Inherit;
        font-size: 10px;
        line-height: 1.6;
        letter-spacing: 0;
        text-align: center;
        color: #2a2a2a;
        width: 211px;
        height: 67px
    }

    .cp_style_53340 #cp_paragraph-4-53340 .cp-rotate-wrap {
        transform: rotate(0)
    }

    .cp_style_53340 #cp_paragraph-4-53340 {
        left: 102px;
        top: 50px;
        z-index: 4
    }
}

.cp_style_53340 #cp_email-4-53340 .cp-target {
    width: 490px;
    height: 50px
}

.cp_style_53340 #cp_email-4-53340 {
    left: 22.911987304688px;
    top: 253.96304321289px;
    z-index: 7
}

@media (max-width: 767px) {
    .cp_style_53340 #cp_email-4-53340 .cp-target {
        width:289px;
        height: 27px
    }

    .cp_style_53340 #cp_email-4-53340 {
        left: 17px;
        top: 156px;
        z-index: 7
    }
}

.cp_style_53340 #cp_button-4-53340 .cp-target {
    font-family: inherit;
    font-style: Bold;
    font-weight: Bold;
    font-size: 23px;
    letter-spacing: 0;
    text-align: center;
    color: #fff;
    background: #000;
    width: 490px;
    height: 50px;
    padding: 0 15px
}

.cp_style_53340 #cp_button-4-53340 .cp-target:hover {
    color: #fff;
    background: #000
}

.cp_style_53340 #cp_button-4-53340 .cp-target {
    border-style: none
}

.cp_style_53340 #cp_button-4-53340 .cp-target~.cp-field-shadow {
    border-style: none
}

.cp_style_53340 #cp_button-4-53340 .cp-target {
    border-color: #757575
}

.cp_style_53340 #cp_button-4-53340 .cp-target~.cp-field-shadow {
    border-color: #757575
}

.cp_style_53340 #cp_button-4-53340 .cp-target {
    border-width: 1px
}

.cp_style_53340 #cp_button-4-53340 .cp-target~.cp-field-shadow {
    border-width: 1px
}

.cp_style_53340 #cp_button-4-53340 .cp-target {
    border-radius: 0 0 0 0
}

.cp_style_53340 #cp_button-4-53340 .cp-target~.cp-field-shadow {
    border-radius: 0 0 0 0
}

.cp_style_53340 #cp_button-4-53340 .cp-target {
    -webkit-box-shadow: 0 0 0 0 #000;
    -moz-box-shadow: 0 0 0 0 #000;
    box-shadow: 0 0 0 0 #000
}

.cp_style_53340 #cp_button-4-53340 .cp-target~.cp-field-shadow {
    -webkit-box-shadow: 0 0 0 0 #000;
    -moz-box-shadow: 0 0 0 0 #000;
    box-shadow: 0 0 0 0 #000
}

.cp_style_53340 #cp_button-4-53340 .cp-rotate-wrap {
    transform: rotate(0)
}

.cp_style_53340 #cp_button-4-53340 {
    left: 22.911987304688px;
    top: 308.96304321289px;
    z-index: 5
}

@media (max-width: 767px) {
    .cp_style_53340 #cp_button-4-53340 .cp-target {
        font-family:inherit;
        font-style: Bold;
        font-weight: Bold;
        font-size: 13px;
        letter-spacing: 0;
        text-align: center;
        color: #fff;
        background: #000;
        width: 289px;
        height: 28px;
        padding: 0 15px
    }

    .cp_style_53340 #cp_button-4-53340 .cp-target:hover {
        color: #fff;
        background: #000
    }

    .cp_style_53340 #cp_button-4-53340 .cp-target {
        border-style: none
    }

    .cp_style_53340 #cp_button-4-53340 .cp-target~.cp-field-shadow {
        border-style: none
    }

    .cp_style_53340 #cp_button-4-53340 .cp-target {
        border-color: #757575
    }

    .cp_style_53340 #cp_button-4-53340 .cp-target~.cp-field-shadow {
        border-color: #757575
    }

    .cp_style_53340 #cp_button-4-53340 .cp-target {
        border-width: 1px
    }

    .cp_style_53340 #cp_button-4-53340 .cp-target~.cp-field-shadow {
        border-width: 1px
    }

    .cp_style_53340 #cp_button-4-53340 .cp-target {
        border-radius: 0 0 0 0
    }

    .cp_style_53340 #cp_button-4-53340 .cp-target~.cp-field-shadow {
        border-radius: 0 0 0 0
    }

    .cp_style_53340 #cp_button-4-53340 .cp-target {
        -webkit-box-shadow: 0 0 0 0 #000;
        -moz-box-shadow: 0 0 0 0 #000;
        box-shadow: 0 0 0 0 #000
    }

    .cp_style_53340 #cp_button-4-53340 .cp-target~.cp-field-shadow {
        -webkit-box-shadow: 0 0 0 0 #000;
        -moz-box-shadow: 0 0 0 0 #000;
        box-shadow: 0 0 0 0 #000
    }

    .cp_style_53340 #cp_button-4-53340 .cp-rotate-wrap {
        transform: rotate(0)
    }

    .cp_style_53340 #cp_button-4-53340 {
        left: 17px;
        top: 187px;
        z-index: 5
    }
}

.cp_style_53340 #cp_button-5-53340 .cp-target {
    font-family: inherit;
    font-style: Bold;
    font-weight: Bold;
    font-size: 12px;
    letter-spacing: 0;
    text-align: center;
    color: #666;
    background: #fff;
    width: 134px;
    height: 25px;
    padding: 0 15px
}

.cp_style_53340 #cp_button-5-53340 .cp-target:hover {
    color: #999;
    background: #fff
}

.cp_style_53340 #cp_button-5-53340 .cp-target {
    border-style: none
}

.cp_style_53340 #cp_button-5-53340 .cp-target~.cp-field-shadow {
    border-style: none
}

.cp_style_53340 #cp_button-5-53340 .cp-target {
    border-color: #757575
}

.cp_style_53340 #cp_button-5-53340 .cp-target~.cp-field-shadow {
    border-color: #757575
}

.cp_style_53340 #cp_button-5-53340 .cp-target {
    border-width: 1px
}

.cp_style_53340 #cp_button-5-53340 .cp-target~.cp-field-shadow {
    border-width: 1px
}

.cp_style_53340 #cp_button-5-53340 .cp-target {
    border-radius: 0 0 0 0
}

.cp_style_53340 #cp_button-5-53340 .cp-target~.cp-field-shadow {
    border-radius: 0 0 0 0
}

.cp_style_53340 #cp_button-5-53340 .cp-target {
    -webkit-box-shadow: 0 0 0 0 #000;
    -moz-box-shadow: 0 0 0 0 #000;
    box-shadow: 0 0 0 0 #000
}

.cp_style_53340 #cp_button-5-53340 .cp-target~.cp-field-shadow {
    -webkit-box-shadow: 0 0 0 0 #000;
    -moz-box-shadow: 0 0 0 0 #000;
    box-shadow: 0 0 0 0 #000
}

.cp_style_53340 #cp_button-5-53340 .cp-rotate-wrap {
    transform: rotate(0)
}

.cp_style_53340 #cp_button-5-53340 {
    left: 200.90905761719px;
    top: 366.97439575195px;
    z-index: 9
}

@media (max-width: 767px) {
    .cp_style_53340 #cp_button-5-53340 .cp-target {
        font-family:inherit;
        font-style: Bold;
        font-weight: Bold;
        font-size: 13px;
        letter-spacing: 0;
        text-align: center;
        color: #666;
        background: #fff;
        width: 289px;
        height: 28px;
        padding: 0 15px
    }

    .cp_style_53340 #cp_button-5-53340 .cp-target:hover {
        color: #999;
        background: #fff
    }

    .cp_style_53340 #cp_button-5-53340 .cp-target {
        border-style: none
    }

    .cp_style_53340 #cp_button-5-53340 .cp-target~.cp-field-shadow {
        border-style: none
    }

    .cp_style_53340 #cp_button-5-53340 .cp-target {
        border-color: #757575
    }

    .cp_style_53340 #cp_button-5-53340 .cp-target~.cp-field-shadow {
        border-color: #757575
    }

    .cp_style_53340 #cp_button-5-53340 .cp-target {
        border-width: 1px
    }

    .cp_style_53340 #cp_button-5-53340 .cp-target~.cp-field-shadow {
        border-width: 1px
    }

    .cp_style_53340 #cp_button-5-53340 .cp-target {
        border-radius: 0 0 0 0
    }

    .cp_style_53340 #cp_button-5-53340 .cp-target~.cp-field-shadow {
        border-radius: 0 0 0 0
    }

    .cp_style_53340 #cp_button-5-53340 .cp-target {
        -webkit-box-shadow: 0 0 0 0 #000;
        -moz-box-shadow: 0 0 0 0 #000;
        box-shadow: 0 0 0 0 #000
    }

    .cp_style_53340 #cp_button-5-53340 .cp-target~.cp-field-shadow {
        -webkit-box-shadow: 0 0 0 0 #000;
        -moz-box-shadow: 0 0 0 0 #000;
        box-shadow: 0 0 0 0 #000
    }

    .cp_style_53340 #cp_button-5-53340 .cp-rotate-wrap {
        transform: rotate(0)
    }

    .cp_style_53340 #cp_button-5-53340 {
        left: 15px;
        top: 239.9609375px;
        z-index: 9
    }
}

body:not(:hover) fieldset.wprm-comment-ratings-container:focus-within span {
    outline: #4d90fe solid 1px
}

.comment-form-wprm-rating {
    margin-bottom: 20px;
    margin-top: 5px;
    text-align: left
}

.comment-form-wprm-rating .wprm-rating-stars {
    display: inline-block;
    vertical-align: middle
}

fieldset.wprm-comment-ratings-container {
    background: 0 0;
    border: 0;
    display: inline-block;
    margin: 0;
    padding: 0;
    position: relative
}

fieldset.wprm-comment-ratings-container legend {
    left: 0;
    opacity: 0;
    position: absolute
}

fieldset.wprm-comment-ratings-container br {
    display: none
}

fieldset.wprm-comment-ratings-container input[type=radio] {
    border: 0;
    cursor: pointer;
    float: left;
    height: 16px;
    margin: 0!important;
    min-height: 0;
    min-width: 0;
    opacity: 0;
    padding: 0!important;
    width: 16px
}

fieldset.wprm-comment-ratings-container input[type=radio]:first-child {
    margin-left: -16px
}

fieldset.wprm-comment-ratings-container span {
    font-size: 0;
    height: 16px;
    left: 0;
    opacity: 0;
    pointer-events: none;
    position: absolute;
    top: 0;
    width: 80px
}

fieldset.wprm-comment-ratings-container span svg {
    height: 100%!important;
    width: 100%!important
}

fieldset.wprm-comment-ratings-container input:checked+span,fieldset.wprm-comment-ratings-container input:hover+span {
    opacity: 1
}

fieldset.wprm-comment-ratings-container input:hover+span~span {
    display: none
}

.rtl .comment-form-wprm-rating {
    text-align: right
}

.rtl img.wprm-comment-rating {
    transform: scaleX(-1)
}

.rtl fieldset.wprm-comment-ratings-container span {
    left: inherit;
    right: 0
}

.rtl fieldset.wprm-comment-ratings-container span svg {
    transform: scaleX(-1)
}

img.wprm-comment-rating {
    display: block;
    margin: 5px 0
}

img.wprm-comment-rating+br {
    display: none
}

.wprm-rating-star svg {
    display: inline;
    height: 16px;
    margin: 0;
    vertical-align: middle;
    width: 16px
}

.wprm-recipe-container {
    outline: 0
}

.wprm-recipe {
    zoom:1;clear: both;
    overflow: hidden;
    text-align: left
}

.wprm-recipe * {
    box-sizing: border-box
}

.wprm-recipe ol,.wprm-recipe ul {
    -webkit-margin-before: 0;
    -webkit-margin-after: 0;
    -webkit-padding-start: 0;
    margin: 0;
    padding: 0
}

.wprm-recipe li {
    font-size: 1em;
    margin: 0 0 0 32px;
    padding: 0
}

.wprm-recipe p {
    font-size: 1em;
    margin: 0;
    padding: 0
}

.wprm-recipe li,.wprm-recipe li.wprm-recipe-instruction {
    list-style-position: outside
}

.wprm-recipe li:before {
    display: none
}

.wprm-recipe h1,.wprm-recipe h2,.wprm-recipe h3,.wprm-recipe h4 {
    clear: none;
    font-variant: normal;
    letter-spacing: normal;
    margin: 0;
    padding: 0;
    text-transform: none
}

.wprm-recipe a.wprm-recipe-link,.wprm-recipe a.wprm-recipe-link:hover {
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none
}

body:not(.wprm-print) .wprm-recipe p:first-letter {
    color: inherit;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    margin: inherit;
    padding: inherit
}

.rtl .wprm-recipe {
    text-align: right
}

.rtl .wprm-recipe li {
    margin: 0 32px 0 0
}

.wprm-screen-reader-text {
    clip: rect(1px,1px,1px,1px);
    word-wrap: normal!important;
    border: 0;
    clip-path: inset(50%);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute!important;
    width: 1px
}

.wprm-call-to-action.wprm-call-to-action-simple {
    display: flex;
    justify-content: center;
    margin-top: 10px;
    padding: 5px 10px
}

.wprm-call-to-action.wprm-call-to-action-simple .wprm-call-to-action-icon {
    font-size: 2.2em;
    margin: 5px .5em 5px 0
}

.wprm-call-to-action.wprm-call-to-action-simple .wprm-call-to-action-icon svg {
    margin-top: 0
}

.wprm-call-to-action.wprm-call-to-action-simple .wprm-call-to-action-text-container {
    margin: 5px 0
}

.wprm-call-to-action.wprm-call-to-action-simple .wprm-call-to-action-text-container .wprm-call-to-action-header {
    display: block;
    font-size: 1.3em;
    font-weight: 700
}

@media (max-width: 450px) {
    .wprm-call-to-action.wprm-call-to-action-simple {
        flex-wrap:wrap
    }

    .wprm-call-to-action.wprm-call-to-action-simple .wprm-call-to-action-text-container {
        text-align: center
    }
}

.wprm-recipe-block-container-inline {
    display: inline-block;
    margin-right: 1.2em
}

.rtl .wprm-recipe-block-container-inline {
    margin-left: 1.2em;
    margin-right: 0
}

.wprm-recipe-block-container-separated,.wprm-recipe-block-container-separated .wprm-recipe-details-label {
    display: block
}

.wprm-recipe-details-container-inline {
    display: inline
}

.wprm-recipe-details-unit {
    font-size: .8em
}

@media only screen and (max-width: 600px) {
    .wprm-recipe-details-unit {
        font-size:1em
    }
}

.wprm-block-text-normal {
    font-style: normal;
    font-weight: 400;
    text-transform: none
}

.wprm-block-text-bold {
    font-weight: 700!important
}

.wprm-block-text-uppercase {
    text-transform: uppercase!important
}

.wprm-align-left {
    text-align: left
}

.wprm-recipe-header .wprm-recipe-icon {
    margin-right: 5px
}

.wprm-recipe-header.wprm-header-has-actions {
    align-items: center;
    display: flex;
    flex-wrap: wrap
}

.wprm-recipe-header .wprm-unit-conversion-container {
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    opacity: 1;
    text-transform: none
}

.wprm-recipe-icon svg {
    display: inline;
    height: 1.3em;
    margin-top: -.15em;
    overflow: visible;
    vertical-align: middle;
    width: 1.3em
}

.wprm-recipe-image img {
    display: block;
    margin: 0 auto
}

.wprm-recipe-image .dpsp-pin-it-wrapper {
    margin: 0 auto
}

.wprm-recipe-instructions-container .wprm-recipe-instruction-text {
    font-size: 1em
}

.wprm-recipe-instructions-container .wprm-recipe-instruction-media {
    margin: 5px 0 15px;
    max-width: 100%
}

.wprm-recipe-link {
    cursor: pointer;
    text-decoration: none
}

.wprm-recipe-link.wprm-recipe-link-inline-button {
    display: inline-block;
    margin: 0 5px 5px 0
}

.wprm-recipe-link.wprm-recipe-link-wide-button {
    display: block;
    margin: 5px 0;
    text-align: center;
    width: auto
}

.wprm-recipe-link.wprm-recipe-link-inline-button,.wprm-recipe-link.wprm-recipe-link-wide-button {
    border-style: solid;
    border-width: 1px;
    padding: 5px
}

.rtl .wprm-recipe-link.wprm-recipe-link-inline-button {
    margin: 0 0 5px 5px
}

.wprm-nutrition-label-container-grouped {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start
}

.wprm-nutrition-label-container-grouped .wprm-nutrition-label-text-nutrition-container {
    padding-right: 10px;
    white-space: nowrap
}

.rtl .wprm-nutrition-label-container-grouped .wprm-nutrition-label-text-nutrition-container {
    padding-left: 10px;
    padding-right: 0
}

.wprm-recipe-rating {
    white-space: nowrap
}

.wprm-recipe-rating svg {
    height: 1.1em;
    margin-top: -.15em!important;
    margin: 0;
    vertical-align: middle;
    width: 1.1em
}

.wprm-recipe-rating.wprm-recipe-rating-inline .wprm-recipe-rating-details {
    display: inline-block;
    margin-left: 10px
}

.wprm-recipe-rating .wprm-recipe-rating-details {
    font-size: .8em
}

.wprm-spacer {
    background: 0 0!important;
    display: block!important;
    font-size: 0;
    height: 10px;
    line-height: 0;
    width: 100%
}

.wprm-spacer+.wprm-spacer {
    display: none!important
}

.wprm-recipe-instruction-text .wprm-spacer,.wprm-recipe-notes .wprm-spacer,.wprm-recipe-summary .wprm-spacer {
    display: block!important
}

.wprm-toggle-switch-container {
    align-items: center;
    display: flex;
    margin: 10px 0
}

.wprm-toggle-switch-container label {
    cursor: pointer;
    flex-shrink: 0;
    font-size: 1em;
    margin: 0
}

.wprm-toggle-switch-container .wprm-prevent-sleep-description {
    font-size: .8em;
    line-height: 1.1em;
    margin-left: 10px
}

.wprm-toggle-switch {
    display: inline-block;
    position: relative
}

.wprm-toggle-switch input {
    height: 0;
    margin: 0;
    min-width: 0;
    opacity: 0;
    padding: 0;
    width: 0
}

.wprm-toggle-switch .wprm-toggle-switch-slider {
    background-color: #ccc;
    cursor: pointer;
    height: 20px;
    left: 0;
    margin-top: -10px;
    position: absolute;
    right: 0;
    top: 50%;
    -webkit-transition: .4s;
    transition: .4s;
    width: 40px
}

.wprm-toggle-switch .wprm-toggle-switch-slider:before {
    background-color: #fff;
    bottom: 10%;
    content: "";
    height: 80%;
    left: 7%;
    position: absolute;
    right: 50%;
    -webkit-transition: .4s;
    transition: .4s
}

.wprm-toggle-switch input:checked+.wprm-toggle-switch-slider {
    background-color: #333!important
}

.wprm-toggle-switch input:focus+.wprm-toggle-switch-slider {
    box-shadow: 0 0 0 3px rgba(0,0,0,.12)
}

.wprm-toggle-switch input:checked+.wprm-toggle-switch-slider:before {
    left: 50%;
    right: 7%
}

.wprm-toggle-switch .wprm-toggle-switch-label {
    margin-left: 50px
}

.wprm-toggle-switch-rounded .wprm-toggle-switch-slider:before {
    border-radius: 50%
}

.tippy-box[data-animation=fade][data-state=hidden] {
    opacity: 0
}

[data-tippy-root] {
    max-width: calc(100vw - 10px)
}

.tippy-box {
    background-color: #333;
    border-radius: 4px;
    color: #fff;
    font-size: 14px;
    line-height: 1.4;
    outline: 0;
    position: relative;
    transition-property: transform,visibility,opacity;
    white-space: normal
}

.tippy-box[data-placement^=top]>.tippy-arrow {
    bottom: 0
}

.tippy-box[data-placement^=top]>.tippy-arrow:before {
    border-top-color: initial;
    border-width: 8px 8px 0;
    bottom: -7px;
    left: 0;
    transform-origin: center top
}

.tippy-box[data-placement^=bottom]>.tippy-arrow {
    top: 0
}

.tippy-box[data-placement^=bottom]>.tippy-arrow:before {
    border-bottom-color: initial;
    border-width: 0 8px 8px;
    left: 0;
    top: -7px;
    transform-origin: center bottom
}

.tippy-box[data-placement^=left]>.tippy-arrow {
    right: 0
}

.tippy-box[data-placement^=left]>.tippy-arrow:before {
    border-left-color: initial;
    border-width: 8px 0 8px 8px;
    right: -7px;
    transform-origin: center left
}

.tippy-box[data-placement^=right]>.tippy-arrow {
    left: 0
}

.tippy-box[data-placement^=right]>.tippy-arrow:before {
    border-right-color: initial;
    border-width: 8px 8px 8px 0;
    left: -7px;
    transform-origin: center right
}

.tippy-box[data-inertia][data-state=visible] {
    transition-timing-function: cubic-bezier(.54,1.5,.38,1.11)
}

.tippy-arrow {
    color: #333;
    height: 16px;
    width: 16px
}

.tippy-arrow:before {
    border-color: transparent;
    border-style: solid;
    content: "";
    position: absolute
}

.tippy-content {
    padding: 5px 9px;
    position: relative;
    z-index: 1
}

#wprm-timer-container {
    align-items: center;
    background-color: #000;
    bottom: 0;
    color: #fff;
    display: flex;
    font-family: monospace,sans-serif;
    font-size: 24px;
    height: 50px;
    left: 0;
    line-height: 50px;
    position: fixed;
    right: 0;
    z-index: 16777271
}

#wprm-timer-container .wprm-timer-icon {
    cursor: pointer;
    padding: 0 10px
}

#wprm-timer-container .wprm-timer-icon svg {
    display: table-cell;
    height: 24px;
    vertical-align: middle;
    width: 24px
}

#wprm-timer-container span {
    flex-shrink: 0
}

#wprm-timer-container span#wprm-timer-bar-container {
    flex: 1;
    padding: 0 10px 0 15px
}

#wprm-timer-container span#wprm-timer-bar-container #wprm-timer-bar {
    border: 3px solid #fff;
    display: block;
    height: 24px;
    width: 100%
}

#wprm-timer-container span#wprm-timer-bar-container #wprm-timer-bar #wprm-timer-bar-elapsed {
    background-color: #fff;
    border: 0;
    display: block;
    height: 100%;
    width: 0
}

#wprm-timer-container.wprm-timer-finished {
    animation: 1s linear infinite wprmtimerblink
}

@keyframes wprmtimerblink {
    50% {
        opacity: .5
    }
}

.wprm-recipe-advanced-servings-container {
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    margin: 5px 0
}

.wprm-recipe-advanced-servings-container .wprm-recipe-advanced-servings-input-unit {
    margin-left: 3px
}

.wprm-recipe-advanced-servings-container .wprm-recipe-advanced-servings-input-shape {
    margin-left: 5px
}

.wprm-recipe-equipment-container,.wprm-recipe-ingredients-container,.wprm-recipe-instructions-container {
    counter-reset: wprm-advanced-list-counter
}

.wprm-checkbox-container {
    margin-left: -16px
}

.rtl .wprm-checkbox-container {
    margin-left: 0;
    margin-right: -16px
}

.wprm-checkbox-container input[type=checkbox] {
    margin: 0!important;
    opacity: 0;
    width: 16px!important
}

.wprm-checkbox-container label:after,.wprm-checkbox-container label:before {
    content: "";
    display: inline-block;
    position: absolute
}

.rtl .wprm-checkbox-container label:after {
    right: 5px
}

.wprm-checkbox-container label:before {
    border: 1px solid;
    height: 18px;
    left: 0;
    top: 0;
    width: 18px
}

.wprm-checkbox-container label:after {
    border-bottom: 2px solid;
    border-left: 2px solid;
    height: 5px;
    left: 5px;
    top: 5px;
    transform: rotate(-45deg);
    width: 9px
}

.wprm-checkbox-container input[type=checkbox]+label:after {
    content: none
}

.wprm-checkbox-container input[type=checkbox]:checked+label:after {
    content: ""
}

.wprm-checkbox-container input[type=checkbox]:focus+label:before {
    outline: #3b99fc auto 5px
}

.wprm-recipe-equipment li,.wprm-recipe-ingredients li,.wprm-recipe-instructions li {
    position: relative
}

.wprm-recipe-equipment li .wprm-checkbox-container,.wprm-recipe-ingredients li .wprm-checkbox-container,.wprm-recipe-instructions li .wprm-checkbox-container {
    display: inline-block;
    left: -32px;
    line-height: .9em;
    position: absolute;
    top: .25em
}

.wprm-recipe-equipment li.wprm-checkbox-is-checked,.wprm-recipe-ingredients li.wprm-checkbox-is-checked,.wprm-recipe-instructions li.wprm-checkbox-is-checked {
    text-decoration: line-through
}

.rtl .wprm-recipe-equipment li .wprm-checkbox-container,.rtl .wprm-recipe-ingredients li .wprm-checkbox-container,.rtl .wprm-recipe-instructions li .wprm-checkbox-container {
    left: inherit;
    right: -32px
}

.wprm-list-checkbox-container:before {
    display: none!important
}

.wprm-list-checkbox-container.wprm-list-checkbox-checked {
    text-decoration: line-through
}

.wprm-list-checkbox-container .wprm-list-checkbox:hover {
    cursor: pointer
}

.no-js .wprm-private-notes-container,.no-js .wprm-recipe-private-notes-header {
    display: none
}

.wprm-private-notes-container:not(.wprm-private-notes-container-disabled) {
    cursor: pointer
}

.wprm-private-notes-container .wprm-private-notes-user {
    display: none
}

.wprm-private-notes-container.wprm-private-notes-has-notes .wprm-private-notes-user {
    display: block
}

.wprm-private-notes-container.wprm-private-notes-editing .wprm-private-notes-user {
    display: none
}

.wprm-private-notes-container .wprm-private-notes-user {
    white-space: pre-wrap
}

.wprm-print .wprm-private-notes-container {
    cursor: default
}

.wprm-print .wprm-private-notes-container .wprm-private-notes-user {
    display: block!important
}

input[type=number].wprm-recipe-servings {
    display: inline;
    margin: 0;
    padding: 5px;
    width: 60px
}

.wprm-recipe-servings-text-buttons-container {
    display: inline-flex
}

.wprm-recipe-servings-text-buttons-container input[type=text].wprm-recipe-servings {
    border-radius: 0!important;
    display: inline;
    margin: 0;
    outline: 0;
    padding: 0;
    text-align: center;
    vertical-align: top;
    width: 40px
}

.wprm-recipe-servings-text-buttons-container .wprm-recipe-servings-change,.wprm-recipe-servings-text-buttons-container input[type=text].wprm-recipe-servings {
    border: 1px solid #333;
    font-size: 16px;
    height: 30px;
    user-select: none
}

.wprm-recipe-servings-text-buttons-container .wprm-recipe-servings-change {
    background: #333;
    border-radius: 3px;
    color: #fff;
    cursor: pointer;
    display: inline-block;
    line-height: 26px;
    text-align: center;
    width: 20px
}

.wprm-recipe-servings-text-buttons-container .wprm-recipe-servings-change:active {
    font-weight: 700
}

.wprm-recipe-servings-text-buttons-container .wprm-recipe-servings-change.wprm-recipe-servings-decrement {
    border-bottom-right-radius: 0!important;
    border-right: none;
    border-top-right-radius: 0!important
}

.wprm-recipe-servings-text-buttons-container .wprm-recipe-servings-change.wprm-recipe-servings-increment {
    border-bottom-left-radius: 0!important;
    border-left: none;
    border-top-left-radius: 0!important
}

.wprm-recipe-servings-container .tippy-box {
    padding: 5px 10px
}

.wprm-add-to-collection-tooltip-container {
    padding: 3px
}

.wprm-add-to-collection-tooltip-container select.wprm-add-to-collection-tooltip {
    display: block;
    margin: 10px 0;
    padding: 3px;
    width: 100%
}

.block-callout__innerBlocks {
    padding: 12px 30px 24px
}

@media (max-width: 600px) {
    .block-callout__innerBlocks {
        padding:6px 20px 24px
    }
}

.block-callout__innerBlocks p {
    margin: 0 0 12px
}

@media (min-width: 769px) {
    .block-callout__innerBlocks p {
        font-size:20px;
        line-height: 30px
    }
}

.block-callout__innerBlocks>:last-child {
    margin-bottom: 0!important
}

.block-callout__header {
    padding: 28px 30px 0;
    margin: 0
}

.block-callout.minimal-callout {
    background-color: var(--wp--preset--color--background-2)
}

.block-callout__icon-arrow {
    position: absolute;
    right: -40px;
    bottom: 24px
}

.block-callout__icon-arrow svg {
    display: block
}

.block-callout.icon-callout {
    border: 2px solid var(--wp--preset--color--secondary);
    box-shadow: 4px 4px 0 var(--wp--preset--color--primary);
    position: relative
}

.block-callout.icon-callout .block-callout__header {
    border-bottom: 2px solid var(--wp--preset--color--secondary);
    padding: 18px 78px 18px 30px;
    margin-bottom: 12px;
    position: relative
}

@media (max-width: 600px) {
    .block-callout__header {
        padding-left:20px;
        padding-right: 20px;
        font-size: 25px!important;
        line-height: 30px!important
    }

    .block-callout.icon-callout .block-callout__header {
        padding: 25px 78px 25px 20px
    }
}

.block-callout.icon-callout .block-callout__header svg {
    position: absolute;
    right: 15px;
    top: 11.5px
}

@media (max-width: 768px) {
    .block-callout__icon-arrow {
        right:-14px;
        bottom: 20px;
        width: 46px;
        height: 24px
    }

    .block-callout__icon-arrow svg {
        width: 100%;
        height: auto
    }

    .block-callout.icon-callout .block-callout__innerBlocks {
        padding-right: 30px
    }
}

.block-callout.headline-callout {
    border: 2px solid var(--wp--preset--color--secondary)
}

.block-callout.headline-callout .block-callout__header {
    margin: 22px 0 6px;
    overflow-wrap: break-word;
    padding: 0;
    max-width: calc(100% - 40px)
}

.block-callout.headline-callout .block-callout__header span {
    background-color: var(--wp--preset--color--primary);
    box-shadow: 60px 0 0 var(--wp--preset--color--primary),-20px 0 0 var(--wp--preset--color--primary);
    line-height: 2;
    padding: 10px 0
}

@media (max-width: 768px) {
    .block-callout.headline-callout .block-callout__header {
        margin-left:12px
    }

    .block-callout.headline-callout .block-callout__header span {
        padding: 5px 0;
        line-height: 1.7;
        box-shadow: 20px 0 0 var(--wp--preset--color--primary),-20px 0 0 var(--wp--preset--color--primary)
    }
}

.block-area-sidebar .block-callout.headline-callout .block-callout__header,.sidebar-primary .block-callout.headline-callout .block-callout__header {
    max-width: 100%;
    margin: 15px 25px 6px;
    font-size: var(--wp--preset--font-size--medium);
    padding-right: 96px
}

.block-area-sidebar .block-callout.headline-callout .block-callout__header span,.sidebar-primary .block-callout.headline-callout .block-callout__header span {
    background-color: var(--wp--preset--color--primary);
    box-shadow: 10px 0 0 var(--wp--preset--color--primary),-10px 0 0 var(--wp--preset--color--primary);
    line-height: 2;
    padding: 6px 0
}

.block-area-sidebar .block-callout.headline-callout .block-callout__innerBlocks,.sidebar-primary .block-callout.headline-callout .block-callout__innerBlocks {
    padding: 0 15px 15px
}

.block-area-sidebar .block-callout.headline-callout .block-callout__innerBlocks p,.sidebar-primary .block-callout.headline-callout .block-callout__innerBlocks p {
    font-size: var(--wp--preset--font-size--small);
    line-height: 24px
}

.sidebar-primary .block-callout.headline-callout.logo-icon {
    position: relative;
    box-shadow: 4px 4px 0 var(--wp--preset--color--primary)
}

.sidebar-primary .block-callout.headline-callout.logo-icon::after {
    content: "";
    background-image: url("https://www.budgetbytes.com/wp-content/themes/budgetbytes-2022/assets/images/budget-bytes-icon.svg");
    width: 96px;
    height: 96px;
    background-size: 96px 96px;
    position: absolute;
    right: 12px;
    top: -15px
}

.gform_wrapper.gravity-theme fieldset,.gform_wrapper.gravity-theme legend {
    background: 0 0;
    padding: 0
}

.gform_wrapper.gravity-theme fieldset {
    border: none;
    display: block;
    margin: 0
}

.gform_wrapper.gravity-theme legend {
    margin-left: 0;
    margin-right: 0
}

.gform_wrapper.gravity-theme .gform_drop_instructions {
    display: block;
    margin-bottom: 8px
}

.gform_wrapper.gravity-theme .gfield_fileupload_filesize {
    padding: 0 6px
}

.gform_wrapper.gravity-theme .gfield_validation_message ul {
    margin: 16px 0;
    padding-left: 24px
}

.gform_wrapper.gravity-theme .gfield_validation_message ul:empty {
    display: none
}

.gform_wrapper.gravity-theme .ginput_preview {
    margin: 16px 0
}

.gform_wrapper.gravity-theme ::-ms-reveal {
    display: none
}

.gform_wrapper.gravity-theme .chosen-container {
    display: inline-block;
    font-size: 16px;
    position: relative;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    vertical-align: middle
}

.gform_wrapper.gravity-theme .chosen-container * {
    box-sizing: border-box
}

.gform_wrapper.gravity-theme .chosen-container a {
    cursor: pointer
}

.gform_wrapper.gravity-theme .chosen-rtl {
    text-align: right
}

@media only screen and (max-width: 641px) {
    .gform_wrapper.gravity-theme input:not([type=radio]):not([type=checkbox]):not([type=image]):not([type=file]) {
        line-height:2;
        min-height: 32px
    }

    .gform_wrapper.gravity-theme textarea {
        line-height: 1.5
    }

    .gform_wrapper.gravity-theme .chosen-container span:not(.ginput_price) {
        display: block;
        margin-bottom: 8px
    }

    .gform_wrapper.gravity-theme li.field_sublabel_below .ginput_complex {
        margin-top: 12px!important
    }

    .gform_wrapper.gravity-theme ul.gfield_checkbox li label,.gform_wrapper.gravity-theme ul.gfield_radio li label {
        cursor: pointer;
        width: 85%
    }
}

.gform_wrapper.gravity-theme .gform_hidden {
    display: none
}

.gform_wrapper.gravity-theme .hidden_label .gfield_label,.gform_wrapper.gravity-theme .screen-reader-text {
    clip: rect(1px,1px,1px,1px);
    word-wrap: normal!important;
    border: 0;
    -webkit-clip-path: inset(50%);
    clip-path: inset(50%);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px
}

.gform_wrapper.gravity-theme button.screen-reader-text:focus {
    clip: auto;
    border: 0;
    -webkit-clip-path: none;
    clip-path: none;
    height: auto;
    margin: 0;
    position: static!important;
    width: auto
}

.gform_wrapper.gravity-theme .gfield textarea {
    width: 100%
}

.gform_wrapper.gravity-theme .gfield textarea.small {
    height: 96px
}

.gform_wrapper.gravity-theme .gfield textarea.medium {
    height: 192px
}

.gform_wrapper.gravity-theme .gfield textarea.large {
    height: 288px
}

.gform_wrapper.gravity-theme .gfield input,.gform_wrapper.gravity-theme .gfield select {
    max-width: 100%
}

.gform_wrapper.gravity-theme .gfield input.small,.gform_wrapper.gravity-theme .gfield select.small {
    width: calc(25% - 12px)
}

.gform_wrapper.gravity-theme .gfield input.medium,.gform_wrapper.gravity-theme .gfield select.medium {
    width: calc(50% - 8px)
}

.gform_wrapper.gravity-theme .gfield input.large,.gform_wrapper.gravity-theme .gfield select.large {
    width: 100%
}

.gform_wrapper.gravity-theme * {
    box-sizing: border-box
}

.gform_wrapper.gravity-theme .gform_fields {
    grid-column-gap: 2%;
    -ms-grid-columns: (1fr 2%)[12];
    grid-row-gap: 16px;
    display: grid;
    grid-template-columns: repeat(12,1fr);
    grid-template-rows: repeat(auto-fill,auto);
    width: 100%
}

.gform_wrapper.gravity-theme .gfield {
    grid-column: 1/-1;
    min-width: 0
}

.gform_wrapper.gravity-theme .gfield.gfield--width-five-twelfths {
    -ms-grid-column-span: 5;
    grid-column: span 5
}

.gform_wrapper.gravity-theme .gfield.gfield--width-one-sixth {
    -ms-grid-column-span: 2;
    grid-column: span 2
}

.gform_wrapper.gravity-theme .field_sublabel_below .ginput_complex {
    align-items: flex-start
}

html[dir=rtl] .gform_wrapper.gravity-theme .gfield_label,html[dir=rtl] .gform_wrapper.gravity-theme code,html[dir=rtl] .gform_wrapper.gravity-theme input[type=email],html[dir=rtl] .gform_wrapper.gravity-theme input[type=tel],html[dir=rtl] .gform_wrapper.gravity-theme input[type=url] {
    direction: rtl
}

html[dir=rtl] .gform_wrapper.gravity-theme .gfield_required {
    margin-left: 0;
    margin-right: 4px
}

html[dir=rtl] .gform_wrapper.gravity-theme ::-webkit-input-placeholder {
    text-align: right
}

html[dir=rtl] .gform_wrapper.gravity-theme ::-moz-placeholder {
    text-align: right
}

html[dir=rtl] .gform_wrapper.gravity-theme :-ms-input-placeholder {
    text-align: right
}

html[dir=rtl] .gform_wrapper.gravity-theme :-moz-placeholder {
    text-align: right
}

html[dir=rtl] .gform_wrapper.gravity-theme .gform_wrapper.gravity-theme fieldset {
    display: block
}

html[dir=rtl] .gform_wrapper.gravity-theme .ginput_complex:not(.ginput_container_address) fieldset:not([style*="display:none"]):not(.ginput_full)~span:not(.ginput_full),html[dir=rtl] .gform_wrapper.gravity-theme .ginput_complex:not(.ginput_container_address) span:not([style*="display:none"]):not(.ginput_full)~span:not(.ginput_full) {
    padding-left: 0;
    padding-right: 16px
}

@media (min-width: 641px) {
    html[dir=rtl] .gform_wrapper.gravity-theme .ginput_complex:not(.ginput_container_address) span:not([style*="display:none"]):not(.ginput_full)~span:not(.ginput_full) {
        padding-left:0;
        padding-right: 16px
    }
}

.gform_wrapper.gravity-theme .gform_card_icon_container {
    display: flex;
    height: 32px;
    margin: 8px 0 6.4px
}

.gform_wrapper.gravity-theme .gform_card_icon_container div.gform_card_icon {
    background-image: url(https://www.budgetbytes.com/wp-content/plugins/gravityforms/images/gf-creditcards.svg);
    background-repeat: no-repeat;
    height: 32px;
    margin-right: 4.8px;
    text-indent: -9000px;
    width: 40px
}

.gform_wrapper.gravity-theme .gform_card_icon_container div.gform_card_icon.gform_card_icon_selected {
    position: relative
}

.gform_wrapper.gravity-theme .gform_card_icon_container div.gform_card_icon.gform_card_icon_selected:after {
    background: url(https://www.budgetbytes.com/wp-content/plugins/gravityforms/images/gf-creditcards-check.svg) 50% no-repeat;
    bottom: 4px;
    content: "";
    display: block;
    height: 10px;
    position: absolute;
    right: 0;
    width: 13px
}

.gform_wrapper.gravity-theme .gfield_list_group {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    margin-bottom: 8px
}

.gform_wrapper.gravity-theme .gfield_list_group:last-child {
    margin-bottom: 0
}

@media (max-width: 640px) {
    .gform_wrapper.gravity-theme .gform_fields {
        grid-column-gap:0
    }

    .gform_wrapper.gravity-theme .gfield:not(.gfield--width-full) {
        grid-column: 1/-1
    }

    html[dir=rtl] .gform_wrapper.gravity-theme .ginput_complex:not(.ginput_container_address) fieldset:not([style*="display:none"]):not(.ginput_full)~span:not(.ginput_full),html[dir=rtl] .gform_wrapper.gravity-theme .ginput_complex:not(.ginput_container_address) span:not([style*="display:none"]):not(.ginput_full)~span:not(.ginput_full) {
        padding-right: 0
    }

    .gform_wrapper.gravity-theme .gfield_list_group {
        border: 1px solid rgba(0,0,0,.2);
        display: block;
        margin-bottom: 16px;
        padding: 16px
    }

    .gform_wrapper.gravity-theme .gfield_list_group:last-child {
        margin-bottom: 0
    }
}

.gform_wrapper.gravity-theme .gfield_label {
    display: inline-block;
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 8px;
    padding: 0
}

.gform_wrapper.gravity-theme .ginput_complex label {
    font-size: 15px;
    padding-top: 5px
}

.gform_wrapper.gravity-theme .gform_validation_errors {
    background: #fff9f9;
    border: 1.5px solid #c02b0a;
    border-radius: 5px;
    box-shadow: 0 1px 4px rgba(0,0,0,.11),0 0 4px rgba(18,25,97,.041);
    margin-bottom: 8px;
    margin-top: 8px;
    padding: 16px 16px 16px 48px;
    position: relative;
    width: 100%
}

.gform_wrapper.gravity-theme .gform_validation_errors>h2 {
    color: #c02b0a;
    font-size: 13.2px;
    font-weight: 500;
    line-height: 17.6px;
    margin: 0 0 12px
}

.gform_wrapper.gravity-theme .gform_validation_errors>h2:before {
    display: none
}

.gform_wrapper.gravity-theme .gform_validation_errors>ol {
    padding-left: 20px
}

.gform_wrapper.gravity-theme .gform_validation_errors>ol a {
    color: #c02b0a;
    font-size: 13.2px
}

.gform_wrapper.gravity-theme .gform_validation_errors>ol li {
    color: #c02b0a;
    font-size: 13.2px;
    list-style-type: disc!important;
    margin: 0 0 8px
}

.gform_wrapper.gravity-theme .gform_validation_errors>ol li:last-of-type {
    margin-bottom: 0
}

.gform_wrapper.gravity-theme .gfield_required {
    color: #c02b0a;
    display: inline-block;
    font-size: 13.008px;
    padding-left: .125em
}

.gform_wrapper.gravity-theme .gfield_required .gfield_required_text {
    font-style: italic;
    font-weight: 400
}

.gform_wrapper.gravity-theme .gfield_validation_message,.gform_wrapper.gravity-theme .validation_message,.gform_wrapper.gravity-theme [aria-invalid=true]+label,.gform_wrapper.gravity-theme label+[aria-invalid=true] {
    color: #c02b0a
}

.gform_wrapper.gravity-theme .gfield_validation_message,.gform_wrapper.gravity-theme .validation_message {
    background: #fff9f9;
    border: 1px solid #c02b0a;
    font-size: 14.992px;
    margin-top: 8px;
    padding: 12.992px 24px
}

.gform_wrapper.gravity-theme button.button:disabled {
    opacity: .6
}

.gform_wrapper.gravity-theme #field_submit,.gform_wrapper.gravity-theme .gform_footer {
    display: flex
}

.gform_wrapper.gravity-theme #field_submit input,.gform_wrapper.gravity-theme .gform_footer input {
    align-self: flex-end
}

.gform_wrapper.gravity-theme .ginput_complex {
    display: flex;
    flex-flow: row wrap
}

.gform_wrapper.gravity-theme .ginput_complex fieldset,.gform_wrapper.gravity-theme .ginput_complex span {
    flex: 1
}

.gform_wrapper.gravity-theme .ginput_complex label,.gform_wrapper.gravity-theme .ginput_complex legend {
    display: block
}

.gform_wrapper.gravity-theme .ginput_complex input,.gform_wrapper.gravity-theme .ginput_complex select {
    width: 100%
}

@media (min-width: 641px) {
    .gform_wrapper.gravity-theme .ginput_complex:not(.ginput_container_address) fieldset:not([style*="display:none"]):not(.ginput_full),.gform_wrapper.gravity-theme .ginput_complex:not(.ginput_container_address) span:not([style*="display:none"]):not(.ginput_full) {
        padding-right:1%
    }

    .gform_wrapper.gravity-theme .ginput_complex:not(.ginput_container_address) fieldset:not([style*="display:none"]):not(.ginput_full)~span:not(.ginput_full),.gform_wrapper.gravity-theme .ginput_complex:not(.ginput_container_address) span:not([style*="display:none"]):not(.ginput_full)~span:not(.ginput_full) {
        padding-left: 1%;
        padding-right: 0
    }

    html[dir=rtl] .gform_wrapper.gravity-theme .ginput_complex:not(.ginput_container_address) fieldset:not([style*="display:none"]):not(.ginput_full),html[dir=rtl] .gform_wrapper.gravity-theme .ginput_complex:not(.ginput_container_address) span:not([style*="display:none"]):not(.ginput_full) {
        padding-left: 1%;
        padding-right: 0
    }

    html[dir=rtl] .gform_wrapper.gravity-theme .ginput_complex:not(.ginput_container_address) fieldset:not([style*="display:none"]):not(.ginput_full)~span:not(.ginput_full),html[dir=rtl] .gform_wrapper.gravity-theme .ginput_complex:not(.ginput_container_address) span:not([style*="display:none"]):not(.ginput_full)~span:not(.ginput_full) {
        padding-left: 0;
        padding-right: 1%
    }
}

@media (max-width: 640px) {
    .gform_wrapper.gravity-theme .ginput_complex span {
        flex:0 0 100%;
        margin-bottom: 8px;
        padding-left: 0
    }
}

.gform_wrapper.gravity-theme .description,.gform_wrapper.gravity-theme .gfield_description {
    clear: both;
    font-family: inherit;
    font-size: 15px;
    letter-spacing: normal;
    line-height: inherit;
    padding-top: 13px;
    width: 100%
}

html[dir=rtl] .gform_wrapper.gravity-theme .gform_card_icon {
    float: right
}

.gform_wrapper.gravity-theme .gform_footer,.gform_wrapper.gravity-theme .gform_page_footer {
    margin: 6px 0 0;
    padding: 16px 0
}

.gform_wrapper.gravity-theme .gform_footer button,.gform_wrapper.gravity-theme .gform_footer input,.gform_wrapper.gravity-theme .gform_page_footer button,.gform_wrapper.gravity-theme .gform_page_footer input {
    margin-bottom: 8px
}

.gform_wrapper.gravity-theme .gform_footer button.button:disabled,.gform_wrapper.gravity-theme .gform_footer input.button:disabled,.gform_wrapper.gravity-theme .gform_page_footer button.button:disabled,.gform_wrapper.gravity-theme .gform_page_footer input.button:disabled {
    opacity: .6
}

.gform_wrapper.gravity-theme .gform_footer button+input,.gform_wrapper.gravity-theme .gform_footer input+button,.gform_wrapper.gravity-theme .gform_footer input+input,.gform_wrapper.gravity-theme .gform_page_footer button+input,.gform_wrapper.gravity-theme .gform_page_footer input+button,.gform_wrapper.gravity-theme .gform_page_footer input+input {
    margin-left: 8px
}

html[dir=rtl] .gform_wrapper.gravity-theme button+input,html[dir=rtl] .gform_wrapper.gravity-theme input+button,html[dir=rtl] .gform_wrapper.gravity-theme input+input {
    margin-right: 8px
}

.gform_wrapper.gravity-theme .gfield_checkbox label,.gform_wrapper.gravity-theme .gfield_radio label {
    display: inline-block;
    font-size: 15px
}

.gform_wrapper.gravity-theme .gfield_checkbox button,.gform_wrapper.gravity-theme .gfield_checkbox input[type=text],.gform_wrapper.gravity-theme .gfield_radio button,.gform_wrapper.gravity-theme .gfield_radio input[type=text] {
    margin-top: 16px
}

.gform_wrapper.gravity-theme input[type=number] {
    display: inline-block
}

.gform_wrapper.gravity-theme input[type=color],.gform_wrapper.gravity-theme input[type=date],.gform_wrapper.gravity-theme input[type=datetime-local],.gform_wrapper.gravity-theme input[type=email],.gform_wrapper.gravity-theme input[type=number],.gform_wrapper.gravity-theme input[type=password],.gform_wrapper.gravity-theme input[type=search],.gform_wrapper.gravity-theme input[type=tel],.gform_wrapper.gravity-theme input[type=text],.gform_wrapper.gravity-theme input[type=time],.gform_wrapper.gravity-theme input[type=url],.gform_wrapper.gravity-theme select,.gform_wrapper.gravity-theme textarea {
    font-size: 15px;
    margin-bottom: 0;
    margin-top: 0;
    padding: 8px
}

.gform_wrapper.gravity-theme .ginput_total {
    color: #060
}

.gform_wrapper.gravity-theme .gfield_repeater_cell {
    margin-top: 8px
}

.gform_wrapper.gravity-theme .gfield_repeater_cell label {
    color: #9b9a9a;
    font-size: 12.8px;
    font-weight: 400;
    padding-top: 8px
}

.gform_wrapper.gravity-theme .gfield_repeater_items .gfield_repeater_cell:not(:first-child) {
    padding-top: 8px
}

.gform_wrapper.gravity-theme .gfield_repeater_wrapper input {
    border: 1px solid #c5c6c5;
    border-radius: 4px
}

.gform_wrapper.gravity-theme .gfield_repeater_cell>.gfield_repeater_wrapper {
    background-color: rgba(1,1,1,.02);
    border-bottom: 1px solid #eee;
    border-left: 8px solid #f1f1f1;
    border-radius: 8px;
    box-shadow: 0 1px 1px 0 rgba(0,0,0,.06),0 2px 1px -1px rgba(0,0,0,.06),0 1px 5px 0 rgba(0,0,0,.06);
    padding: 10px 20px
}

.gform_wrapper.gravity-theme .gfield_repeater_buttons {
    padding-top: 16px
}

.block-email-subscribe {
    padding: 50px var(--wp--custom--layout--padding);
    position: relative
}

.block-email-subscribe__inner {
    display: flex;
    align-items: center;
    width: 100%
}

.block-email-subscribe__innerBlocks {
    width: 668px
}

.block-email-subscribe__innerBlocks.no-social-links {
    width: 100%;
    padding: 0 30px;
    margin: -10px 0;
    -webkit-transform: translateY(-10px);
    transform: translateY(-10px)
}

@media (max-width: 900px) {
    .block-email-subscribe__inner {
        flex-wrap:wrap
    }

    .block-email-subscribe__innerBlocks {
        width: 100%
    }

    .block-email-subscribe__innerBlocks>* {
        text-align: center
    }
}

.block-email-subscribe .gform_wrapper.gravity-theme .gform_fields {
    display: flex;
    align-items: center;
    grid-column-gap: 0;
    grid-row-gap: 0
}

@media (max-width: 950px) {
    .block-email-subscribe .gform_wrapper.gravity-theme .gform_fields {
        justify-content:center
    }
}

.block-email-subscribe .gform_wrapper.gravity-theme .gform_fields>* {
    margin-right: 16px
}

.block-email-subscribe .gform_wrapper.gravity-theme .gform_fields>:last-child {
    margin-right: 0
}

@media (max-width: 700px) {
    .block-email-subscribe__innerBlocks {
        padding:0 16px
    }

    .block-email-subscribe .gform_wrapper.gravity-theme .gform_fields {
        flex-wrap: wrap
    }

    .block-email-subscribe .gform_wrapper.gravity-theme .gform_fields>* {
        width: 100%!important;
        margin-right: 0;
        margin-bottom: 8px
    }

    .block-email-subscribe .gform_wrapper.gravity-theme .gform_fields>:last-child {
        margin-bottom: 0
    }
}

.block-email-subscribe .gform_wrapper.gravity-theme .gform_footer {
    display: none
}

.wp-container-core-buttons-layout-2.wp-container-core-buttons-layout-2 {
    justify-content: center
}

.wprm-recipe.wprm-recipe-template-2022--nutrition-disclaimer {
    overflow: visible
}

.bb-recipe-card {
    border: 2px solid var(--wp--preset--color--secondary);
    box-shadow: 4px 4px 0 var(--wp--preset--color--primary);
    margin-top: 70px;
    padding: 20px;
    position: relative
}

.bb-recipe-card h3 {
    font-size: var(--wp--preset--font-size--big);
    text-transform: uppercase;
    margin-top: 40px;
    margin-bottom: var(--wp--custom--layout--block-gap)
}

.bb-recipe-card h4 {
    font-size: var(--wp--preset--font-size--normal);
    color: #424242;
    letter-spacing: 1.38px;
    margin-bottom: 10px
}

.bb-recipe-card ul:not(.wprm-recipe-instructions) {
    margin-bottom: 24px
}

.bb-recipe-card ul:not(.wprm-recipe-instructions) li {
    position: relative;
    list-style-type: none!important
}

.bb-recipe-card ul:not(.wprm-recipe-instructions) li::after {
    content: "";
    width: 4px;
    height: 4px;
    border-radius: 4px;
    background-color: var(--wp--preset--color--foreground);
    position: absolute;
    left: -24px;
    top: 12px
}

.bb-recipe-card ul.wprm-recipe-instructions {
    counter-reset: cwp-counter
}

.bb-recipe-card ul.wprm-recipe-instructions li {
    counter-increment: cwp-counter;
    position: relative;
    list-style-type: none!important
}

.bb-recipe-card ul.wprm-recipe-instructions li::after {
    content: counter(cwp-counter);
    width: 20px;
    height: 20px;
    border: 2px solid #000;
    background-color: var(--wp--preset--color--primary);
    font-family: var(--wp--preset--font-family--serif);
    font-size: 12px;
    font-weight: 900;
    position: absolute;
    top: 4px;
    left: -32px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 2px 2px 0 #000
}

.bb-recipe-card__note p {
    font-size: var(--wp--preset--font-size--small);
    font-style: italic;
    color: #616161;
    margin-top: 16px
}

.bb-recipe-card__note p>a {
    color: #616161!important
}

.bb-recipe-card__top {
    display: flex;
    width: 100%;
    margin-bottom: 0
}

.bb-recipe-card__top-left {
    flex: 1;
    position: relative;
    margin-bottom: 32px
}

.bb-recipe-card__top-right {
    width: 268px
}

.bb-recipe-card__top-right img {
    transform: translateY(-40px)
}

@media (max-width: 600px) {
    .bb-recipe-card {
        padding:14px
    }

    .bb-recipe-card__top {
        flex-wrap: wrap;
        margin-bottom: 24px;
        margin-top: -40px
    }

    .bb-recipe-card__top-left {
        flex: none;
        order: 2;
        width: 100%
    }

    .bb-recipe-card__top-right {
        width: 100%;
        display: flex;
        justify-content: center;
        order: 1
    }

    .bb-recipe-card__top-right img {
        width: 200px;
        transform: translateY(0)
    }
}

.bb-recipe-card__title {
    display: block;
    position: relative;
    z-index: 1;
    background-color: var(--wp--preset--color--primary);
    margin: 0 -40px 20px;
    padding: 10px 20px
}

.bb-recipe-card__title h2 {
    color: #fff;
    text-shadow: 4px 4px #000,2px -2px #000,-2px -2px #000,-2px 2px #000,2px 2px #000;
    letter-spacing: .1em;
    text-transform: uppercase
}

@media (max-width: 600px) {
    .bb-recipe-card__title {
        margin:0 0 20px -24px
    }
}

.bb-recipe-card .wprm-recipe-rating {
    margin-bottom: 18px
}

.bb-recipe-card__meta {
    display: flex;
    justify-content: space-between;
    margin-bottom: 32px
}

@media (max-width: 600px) {
    .bb-recipe-card__meta {
        flex-direction:column;
        margin-bottom: 12px
    }
}

.bb-recipe-card .wprm-recipe-servings-container {
    position: relative;
    padding-left: 44px
}

.bb-recipe-card .wprm-recipe-servings-icon {
    position: absolute;
    left: 0;
    top: 0
}

.bb-recipe-card .wprm-recipe-servings-icon img {
    width: 28px;
    height: 28px
}

.bb-recipe-card .wprm-recipe-details-label {
    font-family: var(--wp--preset--font-family--serif);
    font-weight: 900;
    text-transform: uppercase;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: 1.17px;
    margin-bottom: 5px
}

.bb-recipe-card .wprm-recipe-servings-unit {
    color: #757575;
    font-style: italic;
    font-size: 14px;
    line-height: 18px
}

.bb-recipe-card .wprm-recipe-times-container {
    display: flex;
    justify-content: flex-end;
    padding-left: 32px;
    position: relative
}

@media (max-width: 600px) {
    .bb-recipe-card .wprm-recipe-times-container {
        justify-content:flex-start;
        flex-wrap: wrap;
        margin-top: 24px
    }
}

.bb-recipe-card .wprm-recipe-times-container::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 28px;
    height: 28px;
    background-size: cover;
    background-image: url("https://www.budgetbytes.com/wp-content/themes/budgetbytes-2022/assets/icons/blocks/quick.svg")
}

.bb-recipe-card .wprm-recipe-times-container .wprm-recipe-block-container {
    display: flex;
    flex-direction: column;
    margin-left: 12px;
    margin-right: 24px
}

.bb-recipe-card .wprm-recipe-times-container .wprm-recipe-block-container * {
    font-size: 16px;
    line-height: 24px
}

@media (max-width: 600px) {
    .bb-recipe-card .wprm-recipe-times-container .wprm-recipe-block-container {
        width:100%;
        margin-bottom: 12px;
        flex-direction: row;
        align-items: center
    }

    .bb-recipe-card .wprm-recipe-times-container .wprm-recipe-block-container .wprm-recipe-details-label {
        margin: 0 8px 0 0
    }
}

.bb-recipe-card__buttons {
    display: flex;
    justify-content: flex-start;
    margin-bottom: 28px
}

.bb-recipe-card__buttons .wprm-recipe-grow-container,.bb-recipe-card__buttons>a {
    width: 220px!important;
    max-width: calc(50% - 9px)!important
}

.bb-recipe-card__buttons .wprm-recipe-grow-container {
    margin-right: 18px
}

.bb-recipe-card__buttons a {
    border-width: 2px!important;
    white-space: nowrap;
    font-weight: 900!important;
    font-family: var(--wp--preset--font-family--serif);
    letter-spacing: 2px;
    text-transform: uppercase;
    font-size: 14px;
    transition: all .2s ease-in-out
}

.bb-recipe-card__buttons a:focus,.bb-recipe-card__buttons a:hover {
    background-color: #eee!important
}

.bb-recipe-card .wprm-recipe-ingredient-notes {
    color: #616161
}

.bb-recipe-card .wprm-nutrition-label-text-nutrition-unit {
    padding-left: 4px
}

.bb-recipe-card .wprm-call-to-action {
    width: calc(100% + 40px);
    margin: 32px -20px 20px!important;
    flex-wrap: wrap;
    text-align: center
}

.bb-recipe-card .wprm-call-to-action .wprm-recipe-icon {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 12px
}

.bb-recipe-card .wprm-call-to-action .wprm-recipe-icon img {
    width: 48px;
    height: 48px
}

.bb-recipe-card .wprm-call-to-action .wprm-call-to-action-header {
    display: block;
    position: relative;
    font-size: 22px!important;
    font-weight: 900!important;
    line-height: var(--wp--custom--line-height--small);
    font-family: var(--wp--preset--font-family--serif);
    text-transform: uppercase;
    letter-spacing: 1.22px;
    text-align: center;
    margin-bottom: 12px;
    padding: 0 156px;
    overflow: hidden
}

.bb-recipe-card .wprm-call-to-action .wprm-call-to-action-header::after,.bb-recipe-card .wprm-call-to-action .wprm-call-to-action-header::before {
    content: "";
    background-image: url("https://www.budgetbytes.com/wp-content/themes/budgetbytes-2022/assets/images/zig-zag-left-white.svg");
    width: 120px;
    height: 12px;
    background-position: right center;
    background-size: cover;
    position: absolute;
    left: 15px;
    top: calc(50% - 6px)
}

@media (max-width: 600px) {
    .bb-recipe-card .wprm-call-to-action {
        width:calc(100% + 28px);
        margin: 24px -14px -14px!important
    }

    .bb-recipe-card .wprm-call-to-action .wprm-call-to-action-header {
        padding: 0 62px
    }

    .bb-recipe-card .wprm-call-to-action .wprm-call-to-action-header::after,.bb-recipe-card .wprm-call-to-action .wprm-call-to-action-header::before {
        left: -63px
    }
}

.bb-recipe-card .wprm-call-to-action .wprm-call-to-action-header::after {
    background-image: url("https://www.budgetbytes.com/wp-content/themes/budgetbytes-2022/assets/images/zig-zag-right-white.svg");
    left: auto;
    right: 15px
}

@media (max-width: 600px) {
    .bb-recipe-card .wprm-call-to-action .wprm-call-to-action-header::after {
        right:-63px
    }
}

.bb-recipe-card .wprm-call-to-action .wprm-call-to-action-text {
    font-size: var(--wp--preset--font-size--medium)
}
</style>`;
