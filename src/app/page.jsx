import Image from "next/image";
import styles from "./page.module.css";
import login from "@/pages/login";
import RegisterPage from "@/pages/RegisterPage";
export default function Home() {
  return (
   <main>
    <div>
    <login />
    <RegisterPage />
    </div>
  </main> 
  );
}
