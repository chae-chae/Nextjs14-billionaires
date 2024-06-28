import Bill from "../components/bill";
import { API_URL } from "./constants";
import styles from "../styles/home.module.css";

export const metadata = {
  title: "Home",
};

async function getBills() {
  const response = await fetch(API_URL);
  const json = await response.json();
  return json;
}

export default async function HomePage() {
  const bills = await getBills();
  return (
    <div className={styles.container}>
      {bills.map((bill) => (
        <Bill
          key={bill.id}
          id={bill.id}
          squareImage={bill.squareImage}
          name={bill.name}
          industries={bill.industries}
        />
      ))}
    </div>
  );
}
