import { format } from "date-fns";

import prismadb from "@/lib/prismadb";
import { CategoryClient } from "./components/client";
import { CategoryColumn } from "./components/columns";

const Categories = async ({ params }: { params: { storeId: string } }) => {
  const categories = await prismadb.category.findMany({
    where: {
      storeId: params.storeId,
    },
    include: {
      billboard: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const formatedCategories: CategoryColumn[] = categories.map((categoriy) => ({
    id: categoriy.id,
    name: categoriy.name,
    billboardLabel: categoriy.billboard.label,
    createdAt: format(categoriy.createdAt, "MMMM do, yyyy"),
  }));

  return (
    <div className="flex-cols space-y-4 p-8 pt-6">
      <CategoryClient data={formatedCategories} />
    </div>
  );
};

export default Categories;
