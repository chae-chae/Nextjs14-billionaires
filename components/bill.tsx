"use client";

import Link from "next/link";
import styles from "../styles/bill.module.css";
import { useRouter } from "next/navigation";

interface IBillProps {
  name: string;
  id: string;
  squareImage: string;
  industries: string;
}

export default function Bill({
  name,
  id,
  squareImage,
  industries,
}: IBillProps) {
  const router = useRouter();
  const onClick = () => {
    router.push(`/person/${id}`);
  };
  return (
    <div className={styles.bill}>
      <img src={squareImage} alt={name} onClick={onClick} />
      <Link prefetch href={`/person/${id}`}>
        {name}
        <p>{industries}</p>
      </Link>
    </div>
  );
}
