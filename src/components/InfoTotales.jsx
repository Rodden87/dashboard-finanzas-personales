import { formatearDinero } from "../utils/formato";

export default function SummaryInfo({ transactions }) {
  const ingresoTotal = transactions
    .filter((t) => t.type === "ingreso")
    .reduce((sum, t) => sum + t.amount, 0);

  const gastoTotal = transactions
    .filter((t) => t.type === "gasto")
    .reduce((sum, t) => sum + t.amount, 0);

  const balance = ingresoTotal - gastoTotal;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <div className="bg-green-200 p-4 rounded-lg shadow text-green-700 font-semibold text-center">
        Ingresos: {formatearDinero(ingresoTotal)}
      </div>
      <div className="bg-red-200 p-4 rounded-lg shadow text-red-700 font-semibold text-center">
        Gastos: {formatearDinero(gastoTotal)}
      </div>
      <div
        className={`p-4 rounded-lg shadow text-center font-semibold ${
          balance >= 0 ? "bg-blue-200 text-blue-700" : "bg-yellow-100 text-yellow-700"
        }`}
      >
        Total disponible: {formatearDinero(balance)}
      </div>
    </div>
  );
}
