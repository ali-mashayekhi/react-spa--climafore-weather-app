import "./MainContainer.css";

function MainContainer(props) {
  return (
    <main className="grid ml-auto mr-auto main-grid lg:h-full lg:gap-x-10 lg:content-around lg:gap-y-2 max-w-7xl">
      {props.children}
    </main>
  );
}

export default MainContainer;
