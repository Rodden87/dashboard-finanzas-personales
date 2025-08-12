import { Listbox } from "@headlessui/react";
import { ChevronUpDownIcon } from "@heroicons/react/20/solid";

export default function CustomSelect({
  value,
  onChange,
  options,
  className = "",
}) {
  const selectedOption = options.find((opt) => opt.value === value);

  return (
    <div className={`relative ${className}`}>
      <Listbox value={value} onChange={onChange}>
        <Listbox.Button className="relative w-full cursor-pointer rounded border border-violet-600 bg-transparent py-2 pl-3 pr-10 text-left text-white hover:border-fuchsia-400">
          {selectedOption?.label}
          <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
            <ChevronUpDownIcon className="h-5 w-5 text-violet-400" />
          </span>
        </Listbox.Button>

        <Listbox.Options className="absolute z-10 mt-1 w-full rounded bg-[#0f0f1a] text-white border border-violet-600 shadow-lg">
          {options.map((option) => (
            <Listbox.Option
              key={option.value}
              value={option.value}
              className={({ active }) =>
                `cursor-pointer select-none p-2 ${
                  active ? "bg-violet-600/50" : ""
                }`
              }
            >
              {option.label}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
    </div>
  );
}
