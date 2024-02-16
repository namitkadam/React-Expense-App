export default function SelectTransaction({
  id,
  onChange,
  value,
  name,
  required = false,
}) {
  return (
    <>
      <label
        htmlFor={id}
        className="block text-base font-semibold text-gray-500 dark:text-white"
      >
        Select an option
      </label>
      <select
        id={id}
        onChange={onChange}
        value={value}
        key={value}
        name={name}
        required={required}
        className="bg-gray-50 border border-gray-300 text-gray-500 font-semibold text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option value={"choose_a_exp"} disabled>
          Choose a Expense
        </option>
        <option value="Income">Income</option>
        <option value="Expense">Expense</option>
      </select>
    </>
  );
}
