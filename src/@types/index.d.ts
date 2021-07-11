import { Tableau } from './Tableau';

declare global {
  interface Window {
    tableau: Tableau;
  }
}
