import React, { useContext } from "react";
import { Context } from "../context";
export default function List() {
  const { check, changeCheck } = useContext(Context);
  console.log(check.checked);
  return (
    <form>
      <input />
      <section>
        <h2>Choose your gender</h2>
        <label>
          Male
          <input type="radio" name="gender" checked={check.checked} />
        </label>
        <label>
          Female
          <input type="radio" name="gender" />
        </label>
      </section>
      <input type="submit" />
    </form>
  );
}
