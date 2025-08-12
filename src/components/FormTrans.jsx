import { useState } from "react";
import CustomSelect from "./SeleccionPersonalizada";

export default function TransactionForm({ onAdd }) {
  const [filterType, setFilterType] = useState("ingreso");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!amount || !description || !category) return;

    onAdd({
      id: crypto.randomUUID(),
      type: filterType,
      amount: parseFloat(amount),
      description: description.trim(),
      category: category.trim(),
      date: new Date().toISOString(),
    });

    // Limpiar formulario
    setAmount("");
    setDescription("");
    setCategory("");
    setFilterType("ingreso");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-transparent p-4 text-white border-violet-600 rounded-lg shadow mb-6 border hover:border-fuchsia-400"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Custom Select */}
        <CustomSelect
          className="w-full"
          value={filterType}
          onChange={setFilterType}
          options={[
            { label: "Ingreso", value: "ingreso" },
            { label: "Gasto", value: "gasto" },
          ]}
        />

        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Monto"
          className="p-2 border rounded border-violet-600"
        />

        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Descripción"
          className="p-2 border rounded border-violet-600"
        />

        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Categoría"
          className="p-2 border rounded border-violet-600"
        />
      </div>

      <button
        type="submit"
        className="mt-4 bg-violet-600/30 hover:bg-violet-600/50 text-white px-4 py-2 rounded transition"
      >
        Agregar transacción
      </button>
    </form>
  );
}
