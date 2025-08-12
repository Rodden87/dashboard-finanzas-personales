import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { formatearDinero } from "../utils/formato";

export default function SummaryChart({ transactions = [] }) {
  const ingresoTotal = transactions
    .filter((t) => t.type === "ingreso")
    .reduce((sum, t) => sum + t.amount, 0);

  const gastoTotal = transactions
    .filter((t) => t.type === "gasto")
    .reduce((sum, t) => sum + t.amount, 0);

  const data = [
    { name: "Ingresos", total: ingresoTotal, type: "ingreso" },
    { name: "Gastos", total: gastoTotal, type: "gasto" },
  ];

  return (
    <div className="border border-violet-600 hover:border-fuchsia-400 text-white p-4 rounded-lg shadow mb-6">
      <h2 className="text-xl text-center text-violet-500 font-semibold mb-2">
        RESUMEN VISUAL
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={data}
          margin={{ top: 16, right: 24, left: 8, bottom: 8 }}
        >
          <XAxis dataKey="name" stroke="#9ca3af" />
          <YAxis
            stroke="#9ca3af"
            width={100}
            tickFormatter={(value) => value.toLocaleString("es-ES")}
          />
          <Tooltip
            cursor={{ fill: "#2e043b" }}
            formatter={(value) => formatearDinero(value)}
            contentStyle={{
              backgroundColor: "#2b0544",
              border: "1px solid #7c3aed",
              borderRadius: 8,
              color: "#fff",
            }}
            itemStyle={{ color: "#fff" }}
          />
          <Bar
            dataKey="total"
            radius={[6, 6, 0, 0]}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={entry.type === "ingreso" ? "#16a34a" : "#dc2626"}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
