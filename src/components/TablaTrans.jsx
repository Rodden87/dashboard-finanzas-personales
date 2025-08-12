import { formatearDinero } from "../utils/formato";

export default function TransactionTable({ transactions, onDelete }) {
  return (
    <div className="bg-transparent p-4 rounded-lg border border-violet-700 hover:border-fuchsia-400 shadow">
      <div className="hidden md:block overflow-x-auto">
        <table className="min-w-full text-center border-collapse">
          <thead>
            <tr className="bg-violet-900 rounded-lg border text-violet-300">
              <th className="p-2">Tipo</th>
              <th className="p-2">Monto</th>
              <th className="p-2">Descripción</th>
              <th className="p-2">Categoría</th>
              <th className="p-2">Fecha</th>
              <th className="p-2">Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((t) => (
              <tr
                key={t.id}
                className="border-t text-gray-300 hover:bg-violet-600/10 transition"
              >
                <td
                  className={`p-2 font-semibold ${
                    t.type === "ingreso" ? "text-green-400" : "text-red-400"
                  }`}
                >
                  {t.type.charAt(0).toUpperCase() + t.type.slice(1)}
                </td>
                <td className="p-2">{formatearDinero(t.amount)}</td>
                <td className="p-2">{t.description}</td>
                <td className="p-2">{t.category}</td>
                <td className="p-2">{new Date(t.date).toLocaleDateString()}</td>
                <td className="p-2 text-center">
                  <button
                    onClick={() => onDelete(t.id)}
                    className="text-gray-300 hover:text-red-700 font-bold p-1"
                    title="Eliminar"
                    aria-label="Eliminar transacción"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5-4h4m-4 0a1 1 0 00-1 1v1h6V4a1 1 0 00-1-1m-4 0h4"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Diseño móvil */}
      <div className="space-y-4 md:hidden">
        {transactions.map((t) => (
          <div
            key={t.id}
            className="border border-violet-700 rounded-lg p-4 bg-violet-900 text-gray-300"
          >
            <div className="flex justify-between">
              <span className="font-semibold">Tipo:</span>
              <span
                className={`font-semibold ${
                  t.type === "ingreso" ? "text-green-400" : "text-red-400"
                }`}
              >
                {t.type.charAt(0).toUpperCase() + t.type.slice(1)}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Monto:</span>
              <span>{formatearDinero(t.amount)}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Descripción:</span>
              <span>{t.description}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Categoría:</span>
              <span>{t.category}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Fecha:</span>
              <span>{new Date(t.date).toLocaleDateString()}</span>
            </div>
            <div className="flex justify-end mt-2">
              <button
                onClick={() => onDelete(t.id)}
                className="text-gray-300 hover:text-red-500 font-bold p-1"
                title="Eliminar"
                aria-label="Eliminar transacción"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5-4h4m-4 0a1 1 0 00-1 1v1h6V4a1 1 0 00-1-1m-4 0h4"
                  />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}