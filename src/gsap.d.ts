declare module 'gsap/SplitText' {
  export class SplitText {
    constructor(target: string | string[] | Element | NodeList | Element[], vars?: any);
    revert(): void;
    elements: HTMLElement[];
    lines: HTMLElement[];
    words: HTMLElement[];
    chars: HTMLElement[];
  }
}

declare module 'gsap/ScrollSmoother' {
  export class ScrollSmoother {
    static create(vars: any): any;
    static refresh(force?: boolean): void;
    scrollTop(val?: number): number;
    paused(val?: boolean): boolean;
    scrollTo(target: any, smooth?: boolean, position?: string): void;
  }
}
