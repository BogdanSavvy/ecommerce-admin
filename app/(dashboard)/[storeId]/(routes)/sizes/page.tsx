import { format } from "date-fns";

import prismadb from "@/lib/prismadb";
import { SizesClient } from "./components/client";
import { SizeColumn } from "./components/columns";

const Sizes = async ({ params }: { params: { storeId: string } }) => {
  const sizes = await prismadb.size.findMany({
    where: {
      storeId: params.storeId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const formatedSizes: SizeColumn[] = sizes.map((size) => ({
    id: size.id,
    name: size.name,
    value: size.value,
    createdAt: format(size.createdAt, "MMMM do, yyyy"),
  }));

  return (
    <div className="flex-cols space-y-4 p-8 pt-6">
      <SizesClient data={formatedSizes} />
    </div>
  );
};

export default Sizes;
