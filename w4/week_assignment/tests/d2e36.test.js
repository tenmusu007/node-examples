const { queryDb } = require("../testHelper");

describe("queries_in/13_get_instructors_assisted_class_with_number.sql", () => {
  test("8 rows", async () => {
    const res = await queryDb(
      "queries_in/13_get_instructors_assisted_class_with_number.sql"
    );
    expect(res.rowCount).toBe(8);
  });
  test("2 columns with correct names", async () => {
    const res = await queryDb(
      "queries_in/13_get_instructors_assisted_class_with_number.sql"
    );
    const columns = res.fields.map((field) => field.name);
    expect(columns).toEqual(["instructor", "class", "total_assistances"]);
  });
  test("ordered by total_assistances", async () => {
    const res = await queryDb(
      "queries_in/13_get_instructors_assisted_class_with_number.sql"
    );
    const columns = res.rows.map((row) => row.instructor);
    const sorted = [...columns].sort((a, b) => {
      if (a === null) return 1;
      else return a - b;
    });
    expect(columns).toEqual(sorted);
  });
});
