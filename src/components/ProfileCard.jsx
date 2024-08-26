export const ProfileCard = (props) => {
//   console.log(props);
  return (
    <>
      <h3>Name: {props.name}</h3>
      <p>Age: {props.age}</p>
      <div>{props.gretting}</div>
      {/* props.children is a special property in React that allows you to pass and render child elements or components
       inside a parent component. */}
      <div>{props.children}</div>
    </>
  );
};
