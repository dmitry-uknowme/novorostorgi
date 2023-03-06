import Header from "./component/header/Header";

interface MainTemplateProps {
  children: React.ReactNode;
}

const MainTemplate: React.FC<MainTemplateProps> = ({ children }) => {
  return (
    <div className="app">
      <Header />
      {children}
    </div>
  );
};

export default MainTemplate;
