import { Suspense } from "react";
import BillInfo, { getBill } from "../../../components/bill-info";

interface IParams {
  params: { id: string };
}

export async function generateMetadata({ params: { id } }: IParams) {
  const bill = await getBill(id);
  return {
    title: bill.name,
  };
}

export default function PersonDetailPage({ params: { id } }: IParams) {
  return (
    <div>
      <Suspense fallback={<h2>Loading billionaires' info</h2>}>
        <BillInfo id={id} />
      </Suspense>
    </div>
  );
}
