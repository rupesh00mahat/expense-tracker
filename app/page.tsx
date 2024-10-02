import Navbar from "@/app/components/navbar";
import Overview from "@/app/components/overview";
import ExpenseTrackerProvider from  "@/app/context/expense-tracker-context";


export default function Home() {
  return (
    <main className="container mx-auto">
      <ExpenseTrackerProvider>
        <Navbar />
        <Overview />
      </ExpenseTrackerProvider>
    </main>
  );
}
