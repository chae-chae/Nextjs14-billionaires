import { API_URL } from "../app/constants";
import styles from "../styles/bill-info.module.css";

export async function getBill(id: string) {
  const response = await fetch(`${API_URL}/person/${id}`);
  return response.json();
}

export default async function BillInfo({ id }: { id: string }) {
  const bill = await getBill(id);
  return (
    <div className={styles.box}>
      <div className={styles.container}>
        <img src={bill.squareImage} className={styles.sqImg} alt={bill.name} />
        <div className={styles.info}>
          <h1 className={styles.name}>{bill.name}</h1>
          <h3>Networth: {~~(bill.netWorth / 1000)} Billion</h3>
          <h3>{bill.industries}</h3>
          <p>{bill.bio}</p>
        </div>
      </div>
      <div className={styles.container}>
        <h3>Financial Assets</h3>
        <div className={styles.faContainer}>
          {bill.financialAssets?.map((asset) => (
            <div key={asset.numberOfShares}>
              <h5>{asset.ticker}</h5>
              <p>Shares: {asset.numberOfShares}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
