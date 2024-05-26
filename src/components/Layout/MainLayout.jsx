import "./MainLayout.css";

function MainLayout(props) {
  return (
    <div className="flex flex-col w-screen px-3 bg-blue-50 lg:h-screen lg:px-10">
      {props.children}
    </div>
  );
}

export default MainLayout;
