import { useState } from "react";

function URLForm(props) {
  const [sheetURL, setSheetURL] = useState("");

  const urlChangeHandler = (event) => {
    setSheetURL(event.target.value);
  }

  const urlSubmitHandler = (event) => {
    event.preventDefault();
    // SUBMISSION EVENT
    props.setSubmitState(true);
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
