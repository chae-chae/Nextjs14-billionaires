import { API_URL } from "../app/constants";
import styles from "../styles/bill-info.module.css";

export async function getBill(id: string) {
  const response = await fetch(`${API_URL}/person/${id}`);
  return response.json();
}

export default async function BillInfo({ id }: { id: string }) {
  const bill = await getBill(id);
  return (
    <div className={styles.container}>
      <img src={bill.squareImage} className={styles.sqImg} alt={bill.name} />
      <div className={styles.info}>
        <h1 className={styles.name}>{bill.name}</h1>
        <h3>Networth: {~~(bill.netWorth / 1000)} Billion</h3>
        <p>{bill.bio}</p>
      </div>
    </div>
  );
}
