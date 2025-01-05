const Filter = ({ setFilter }: { setFilter: any }) => {
  return (
    <div>
      <select
        className="select select-error text-error w-full max-w-xs"
        onChange={(e) => setFilter(e.target.value)}
      >
        <option disabled selected value={0}>
          Urutkan berdasarkan
        </option>
        <option value={1}>Termurah</option>
        <option value={2}>Termahal</option>
      </select>
    </div>
  );
};

export default Filter;
