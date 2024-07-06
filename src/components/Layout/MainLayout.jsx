import "./MainLayout.css";

function MainLayout(props) {
  return (
    <div className="relative flex flex-col w-screen px-3 ml-auto mr-auto overflow-x-hidden bg-blue-50 lg:h-screen max-w-7xl main-layout">
      {props.children}
    </div>
  );
}

export default MainLayout;
