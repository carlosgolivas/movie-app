import '../styles/app.scss';
import Header from '../components/Header';

const MainLayout: React.FC = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default MainLayout;
