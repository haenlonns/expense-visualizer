"use client"

import { useState } from "react";

function URLForm() {
  const [sheetURL, setSheetURL] = useState("");

  const urlChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSheetURL(event.target.value);
  }

  const urlSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // SUBMISSION EVENT
    setSheetURL("");
  };

  return (
    <form onSubmit={urlSubmitHandler}>
      <label>Expense Spreadsheet URL:</label>
      <input
        type="url"
        value={sheetURL}
        onChange={urlChangeHandler}
        placeholder="https://docs.google.com/spreadsheets/d/spreadsheetId/edit#gid=0"
        pattern="https://docs.google.com/spreadsheets/d/.*"
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default URLForm;
