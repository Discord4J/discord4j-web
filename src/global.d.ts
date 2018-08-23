/* tslint:disable */
declare module "@fortawesome/*"

declare module "vue-prism-component" {
  export const functional: boolean

  export const props: {
    code: {
      type: any,
    }
    language: {
      default: string
      type: any,
    },
  }

  export function render(h: any, ctx: any): any

  export namespace render {
    const prototype: {}
  }
}

declare module "vue-scrollto" {
  export const bindings: any[]

  export function bind(el: any, binding: any): void

  export function install(Vue: any, options: any): void

  export function scrollTo(target: any, _duration: any, ...args: any[]): any

  export function unbind(el: any): void

  export function update(el: any, binding: any): void

  export namespace bind {
    const prototype: {}
  }

  export namespace install {
    const prototype: {}
  }

  export namespace scrollTo {
    const prototype: {}
  }

  export namespace unbind {
    const prototype: {}
  }

  export namespace update {
    const prototype: {}
  }
}
