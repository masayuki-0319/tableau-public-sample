import { useTableau } from '../hooks/useTableau';

export const TableauPublic = () => {
  const { vizRef } = useTableau();

  return (
    <div>
      <h1>Taleau Public Sample</h1>
      <div ref={vizRef}></div>
    </div>
  );
};
