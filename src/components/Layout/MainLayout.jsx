import "./MainLayout.css";

function MainLayout(props) {
  return (
    <div className="flex flex-col w-screen px-3 ml-auto mr-auto bg-blue-50 lg:h-screen max-w-7xl">
      {props.children}
    </div>
  );
}

export default MainLayout;
