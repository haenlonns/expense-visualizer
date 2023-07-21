import "./App.css";

import URLForm from "./components/sheetsHandler/URLForm.js";
import ExpenseList from "./components/expenseHandler/ExpenseList.js";
import { useState } from "react";

const expenseData = [
  [
    "May 2023",
    "Groceries",
    "$26.90",
    "$26.90",
    "T&T",
    "05/16/2023",
    "Rogers",
    "$72.39",
  ],
  ["", "", "$14.60", "$41.50", "No Frills", "05/23/2023", "Rogers"],
  ["", "", "$12.38", "$53.88", "No Frills", "05/26/2023", "Rogers"],
  ["", "", "$18.51", "$72.39", "T&T", "05/28/2023", "Rogers"],
  [
    "",
    "Gas",
    "$45.88",
    "$118.27",
    "Petro Canada",
    "05/15/2023",
    "Rogers",
    "$167.23",
  ],
  ["", "", "$25.06", "$143.33", "Shell", "05/19/2023", "BMO Credit"],
  ["", "", "$31.24", "$174.57", "Shell", "05/22/2023", "Rogers"],
  ["", "", "$32.34", "$206.91", "Shell", "05/27/2023", "Rogers"],
  ["", "", "$32.71", "$239.62", "Shell", "05/30/2023", "Rogers"],
  [
    "",
    "Restaurant/Drinks",
    "$13.54",
    "$253.16",
    "Coco's (w/ Soph)",
    "05/15/2023",
    "BMO Credit",
    "$184.50",
  ],
  ["", "", "$6.55", "$259.71", "Mr. Sun", "05/16/2023", "BMO Credit"],
  [
    "",
    "",
    "$39.45",
    "$299.16",
    "Ms. Fu in Chengdu (w/ Soph)",
    "05/17/2023",
    "BMO Credit",
  ],
  ["", "", "$5.07", "$304.23", "HMart (Iced Tea)", "05/21/2023", "BMO Credit"],
  ["", "", "$4.29", "$308.52", "7 Eleven (PRIME)", "05/21/2023", "BMO Credit"],
  [
    "",
    "",
    "$9.04",
    "$317.56",
    "Birria Catrina (Street Food)",
    "05/21/2023",
    "BMO Credit",
  ],
  ["", "", "$21.75", "$339.31", "Alchemy Coffee", "05/27/2023", "BMO Debit"],
  [
    "",
    "",
    "$35.98",
    "$375.29",
    "Daldongnae 11 (Split)",
    "05/27/2023",
    "Rogers",
  ],
  [
    "",
    "",
    "$11.28",
    "$386.57",
    "Tru Tea (w/ Soph)",
    "05/28/2023",
    "BMO Credit",
  ],
  ["", "", "$37.55", "$424.12", "Yin Ji (w/ Soph)", "05/28/2023", "BMO Credit"],
  [
    "",
    "Entertainment",
    "$6.10",
    "$430.22",
    "Guo's BDay Groceries (Split)",
    "05/20/2023",
    "Rogers",
    "$79.77",
  ],
  ["", "", "", "$430.22", "Gundam", "05/27/2023", "BMO Debit (etransfer)"],
  [
    "",
    "",
    "$73.67",
    "$503.89",
    "Lyn Lapid (Stubhub)",
    "05/31/2023",
    "BMO Credit",
  ],
  [
    "",
    "Personal Products",
    "$8.48",
    "$512.37",
    "Sephora (The Ordinary)",
    "05/21/2023",
    "BMO Credit",
    "$50.97",
  ],
  [
    "",
    "",
    "$22.49",
    "$534.86",
    "UNIQLO T-Shirt",
    "05/22/2023",
    "BMO Debit (etransfer)",
  ],
  [
    "",
    "",
    "$20.00",
    "$554.86",
    "Hamilton Shot Glass",
    "05/27/2023",
    "BMO Credit",
  ],
  [
    "",
    "Work",
    "$5.00",
    "$559.86",
    "Impark Parking",
    "05/15/2023",
    "BMO Credit",
    "$71.21",
  ],
  ["", "", "$7.43", "$567.29", "Wendy's", "05/15/2023", "BMO Credit"],
  ["", "", "$5.18", "$572.47", "Wendy's", "05/16/2023", "BMO Credit"],
  ["", "", "$8.56", "$581.03", "Wendy's", "05/19/2023", "BMO Credit"],
  ["", "", "$8.25", "$589.28", "What a Bagel", "05/25/2023", "BMO Credit"],
  ["", "", "$11.29", "$600.57", "What a Bagel", "05/25/2023", "BMO Credit"],
  ["", "", "$10.16", "$610.73", "What a Bagel", "05/26/2023", "BMO Credit"],
  ["", "", "$5.18", "$615.91", "Wendy's", "05/30/2023", "BMO Credit"],
  ["", "", "$10.16", "$626.07", "What a Bagel", "05/31/2023", "BMO Credit"],
  [
    "",
    "Miscellaneous",
    "$20.00",
    "$646.07",
    "Downtown Parking",
    "05/20/2023",
    "Rogers",
    "$38.71",
  ],
  [
    "",
    "",
    "$15.00",
    "$661.07",
    "Potato Doodle Cards",
    "05/20/2023",
    "BMO Credit",
  ],
  [
    "",
    "",
    "$3.71",
    "$664.78",
    "Dollarama Charger (for Soph)",
    "05/24/2023",
    "BMO Credit",
  ],
];

function App() {

  const [spreadsheetSubmitted, setSpreadsheetSubmitted] = useState(false);

  let screen = <URLForm setSubmitState={setSpreadsheetSubmitted}/>;
  if (spreadsheetSubmitted) {
    screen = <ExpenseList expenses={expenseData} />
  }

  return (
    <div className="App">
      {screen}
    </div>
  );
}

export default App;
