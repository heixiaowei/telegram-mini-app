import{Y as u,a5 as b,ag as p,Z as f,a0 as v}from"./index-BkyvsL1j.js";import{n as d,c as g,o as m}from"./if-defined-DIFH1M3c.js";const x=u`
  button {
    padding: var(--wui-spacing-4xs) var(--wui-spacing-xxs);
    border-radius: var(--wui-border-radius-3xs);
    background-color: transparent;
    color: var(--wui-color-accent-100);
  }

  button:disabled {
    background-color: transparent;
    color: var(--wui-color-gray-glass-015);
  }

  button:hover {
    background-color: var(--wui-color-gray-glass-005);
  }
`;var l=function(n,o,r,a){var i=arguments.length,t=i<3?o:a===null?a=Object.getOwnPropertyDescriptor(o,r):a,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(n,o,r,a);else for(var c=n.length-1;c>=0;c--)(s=n[c])&&(t=(i<3?s(t):i>3?s(o,r,t):s(o,r))||t);return i>3&&t&&Object.defineProperty(o,r,t),t};let e=class extends f{constructor(){super(...arguments),this.tabIdx=void 0,this.disabled=!1,this.color="inherit"}render(){return v`
      <button ?disabled=${this.disabled} tabindex=${m(this.tabIdx)}>
        <slot name="iconLeft"></slot>
        <wui-text variant="small-600" color=${this.color}>
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `}};e.styles=[b,p,x];l([d()],e.prototype,"tabIdx",void 0);l([d({type:Boolean})],e.prototype,"disabled",void 0);l([d()],e.prototype,"color",void 0);e=l([g("wui-link")],e);
