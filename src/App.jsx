import { useState, useEffect } from "react";
import TransactionForm from "./components/FormTrans";
import TransactionTable from "./components/TablaTrans";
import SummaryChart from "./components/CuadroResumen";
import SummaryInfo from "./components/InfoTotales";
import CustomSelect from "./components/SeleccionPersonalizada";

function App() {
  const [transactions, setTransactions] = useState(() => {
    const stored = localStorage.getItem("transactions");
    return stored ? JSON.parse(stored) : [];
  });

  const [filterType, setFilterType] = useState("todos");
  const [filterCategory, setFilterCategory] = useState("");

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  const handleAddTransaction = (newTransaction) => {
    setTransactions([newTransaction, ...transactions]);
  };

  const handleDeleteTransaction = (id) => {
    const updated = transactions.filter((t) => t.id !== id);
    setTransactions(updated);
  };

  const filteredTransactions = transactions
    .filter((t) => {
      return filterType === "todos" || t.type === filterType;
    })
    .filter((t) => {
      return (
        filterCategory.trim() === "" ||
        t.category.toLowerCase().includes(filterCategory.toLowerCase())
      );
    });

  return (
    <div className="min-h-screen p-6">
      <h1 className="text-5xl text-violet-600 font-bold mb-4 text-center">
        Dashboard de Finanzas
      </h1>
      <TransactionForm onAdd={handleAddTransaction} />
      <div className="text-white mb-4 flex flex-col md:flex-row gap-4 items-start md:items-center">
        <CustomSelect
          className="w-48"
          value={filterType}
          onChange={setFilterType}
          options={[
            { label: "Todos", value: "todos" },
            { label: "Ingresos", value: "ingreso" },
            { label: "Gastos", value: "gasto" },
          ]}
        />

        <input
          type="text"
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
          placeholder="Filtrar por categoría"
          className="p-2 text-center border border-violet-600 rounded hover:border-fuchsia-400"
        />
      </div>
      <SummaryInfo transactions={filteredTransactions} />
      <SummaryChart transactions={filteredTransactions} />
      <TransactionTable
        transactions={filteredTransactions}
        onDelete={handleDeleteTransaction}
      />
    </div>
  );
}

export default App;
