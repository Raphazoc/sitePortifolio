
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 p-4">
      <div className="text-center space-y-6 max-w-md">
        <h1 className="text-6xl font-bold text-gray-800 dark:text-white">404</h1>
        <h2 className="text-3xl font-semibold text-gray-700 dark:text-gray-200">Página Não Encontrada</h2>
        <p className="text-gray-600 dark:text-gray-300">
          A página que você está procurando não existe ou foi movida.
        </p>
        <Button asChild>
          <Link to="/">Voltar para a Página Inicial</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
