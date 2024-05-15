function MainLayout(props) {
  return (
    <div className="flex flex-col w-screen px-2 lg:h-screen lg:px-10">
      {props.children}
    </div>
  );
}

export default MainLayout;
