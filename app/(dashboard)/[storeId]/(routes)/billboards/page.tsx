import {format} from "date-fns"

import prismadb from "@/lib/prismadb";
import { BillboardClient } from "./components/client";
import { BillboardColumn } from "./components/columns";

const Billboards = async ({ params }: { params: { storeId: string } }) => {
  const billboards = await prismadb.billboard.findMany({
    where: {
      storeId: params.storeId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

const formatedBillboards: BillboardColumn[] = billboards.map(billboard=>({
  id: billboard.id,
  label: billboard.label,
  createdAt: format(billboard.createdAt, "MMMM do, yyyy")
}))

  return (
    <div className="flex-cols space-y-4 p-8 pt-6">
      <BillboardClient data={formatedBillboards} />
    </div>
  );
};

export default Billboards;
