import "./MainContainer.css";

function MainContainer(props) {
  return (
    <main className="grid main-grid lg:h-full lg:gap-x-2 lg:gap-y-4 ">
      {props.children}
    </main>
  );
}

export default MainContainer;
