import Layouts from "@/src/layouts/Layouts";

const E404 = () => {
  return (
    <Layouts darkHeader noFooter>
      <div className="page-404">
        <div className="container page-404__container">
          <div className="page-404__num">X </div>
          <h3 className="page-404__title">Página não encontrada!</h3>
          <div className="page-404__text onovo-text">Parece que a página que você está tentando acessar não existe.</div>
          
          
        </div>
      </div>
    </Layouts>
  );
};
export default E404;
