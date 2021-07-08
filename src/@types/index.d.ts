module Tableau {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const Viz = (renderElement: HTMLDivElement, url: string, options?: VizOptions) => any;
}

type VizOptions = {
  hideTabs?: boolean;
  devise?: 'desktop';
  onFirstInteractive?: Function;
};

interface Window {
  tableau: Tableau;
}
