import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { filterSchema } from "../schemas/filterSchema";

export default function CryptoFilter({ onFilter }) {
  const { register, handleSubmit, watch } = useForm({
    resolver: zodResolver(filterSchema),
    defaultValues: { search: "", minPrice: "", maxPrice: "" },
  });

  const onSubmit = (data) => onFilter(data);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col md:flex-row gap-4 mb-6"
    >
      <input
        {...register("search")}
        placeholder="Search by name or symbol"
        className="p-2 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
      />
      <input
        {...register("minPrice")}
        type="number"
        placeholder="Min Price"
        className="p-2 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
      />
      <input
        {...register("maxPrice")}
        type="number"
        placeholder="Max Price"
        className="p-2 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Filter
      </button>
    </form>
  );
}
