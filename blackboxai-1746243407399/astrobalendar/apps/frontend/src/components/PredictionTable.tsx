import React from 'react';

interface Prediction {
  id: string;
  name: string;
  birth_date: string;
  created_at?: string;
}

interface PredictionTableProps {
  data: Prediction[];
}

const PredictionTable: React.FC<PredictionTableProps> = ({ data }) => {
  return (
    <table className="min-w-full bg-white border">
      <thead>
        <tr>
          <th className="py-2 px-4 border-b">ID</th>
          <th className="py-2 px-4 border-b">Name</th>
          <th className="py-2 px-4 border-b">Birth Date</th>
          <th className="py-2 px-4 border-b">Created At</th>
        </tr>
      </thead>
      <tbody>
        {data.map((pred) => (
          <tr key={pred.id} className="hover:bg-gray-100">
            <td className="py-2 px-4 border-b">{pred.id}</td>
            <td className="py-2 px-4 border-b">{pred.name}</td>
            <td className="py-2 px-4 border-b">{pred.birth_date}</td>
            <td className="py-2 px-4 border-b">{pred.created_at || '-'}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PredictionTable;
