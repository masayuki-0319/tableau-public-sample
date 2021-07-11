import { useEffect, useRef } from 'react';

export const useTableau = () => {
  const tableau = window.tableau;
  const vizRef = useRef<HTMLDivElement>(null);

  const url = 'http://public.tableau.com/views/RegionalSampleWorkbook/Storms';
  const options: VizOptions = {
    hideTabs: true,
    devise: 'desktop',
    onFirstInteractive: () => {
      console.log('Run this code when the viz has finished loading.');
    },
  };

  const initViz = () => {
    new tableau.Viz(vizRef.current!, url, options);
  };

  useEffect(() => {
    initViz();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  return { vizRef };
};
