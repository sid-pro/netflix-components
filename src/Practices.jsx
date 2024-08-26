export const Practices = () => {
  const students = [];
  return (
    <>
      <h1>Interview</h1>
      <p>{students.length === 0 && "No Student found"}</p>
      {/* this also works */}
      {/* <p>{!students.length && "No Student found"}</p> */}
      <p>Number of student : {students.length}</p>
    </>
  );
};
