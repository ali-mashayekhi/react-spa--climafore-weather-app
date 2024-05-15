import "./MainContainer.css";

function MainContainer(props) {
  return (
    <main className="grid main-grid lg:h-full lg:gap-x-10 lg:content-around lg:gap-y-2">
      {props.children}
    </main>
  );
}

export default MainContainer;
