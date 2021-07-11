export interface Tableau {
  Viz: Viz;
}

interface Viz {
  new (renderElement: HTMLDivElement, url: string, options?: VizOptions): any;
}

export type VizOptions = {
  hideTabs?: boolean;
  devise?: 'desktop';
  onFirstInteractive?: Function;
  [key: string]: any;
};
