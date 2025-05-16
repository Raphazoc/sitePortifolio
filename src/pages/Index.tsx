import minhaFoto from '../asset/minha-foto.png';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Mail, Linkedin, User, Code, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800">
      {/* Header/Hero Section */}
      <section className="container mx-auto px-4 pt-20 pb-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1 space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-white">
              Raphael Martins Pimenta
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300">
              Desenvolvedor Web Front-end
            </p>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl">
              Criando experiências web modernas e responsivas com React, Tailwind CSS e JavaScript.
            </p>
            <div className="flex flex-wrap gap-3 pt-4">
              <Button asChild>
                <a href="#projetos">
                  <Briefcase className="mr-2 h-4 w-4" />
                  Meus Projetos
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="#contato">
                  <Mail className="mr-2 h-4 w-4" />
                  Contato
                </a>
              </Button>
            </div>
            <div className="flex gap-4 pt-4">
              <a href="https://github.com/Raphazoc" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com/in/raphazoc" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                <Linkedin size={24} />
              </a>
              <a href="mailto:contato@example.com" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                <Mail size={24} />
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="h-64 w-64 rounded-full bg-gray-300 dark:bg-gray-700 overflow-hidden border-4 border-white dark:border-gray-800 shadow-lg">
              <img
                src={minhaFoto}
                alt="Sua foto"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sobre Section */}
      <section id="sobre" className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center"></h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Olá! Sou um desenvolvedor front-end apaixonado por criar interfaces web modernas e intuitivas.
              Tenho experiência com React, JavaScript, HTML, CSS e frameworks como Tailwind CSS.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Meu objetivo é desenvolver aplicações web que não apenas funcionem bem, mas que também
              proporcionem uma experiência incrível para os usuários. Sempre buscando aprender novas
              tecnologias e aprimorar minhas habilidades.
              <p>
                <br />
                Sou formado em Análise e Desenvolvimento de Sistemas e tenho experiência em projetos
                pessoais e acadêmicos. Estou sempre aberto a novos desafios e oportunidades de crescimento.
              </p>
              <br />
              <p>
                Quando não estou codificando, gosto de ler sobre novas tecnologias, praticar esportes e
                conversar com amigos. Acredito que a colaboração e o aprendizado contínuo são fundamentais
                para o sucesso na área de tecnologia.
              </p>
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Habilidades</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { name: "HTML5", level: 85 },
              { name: "CSS3", level: 85 },
              { name: "JavaScript", level: 80 },
              { name: "React", level: 75 },
              { name: "Tailwind CSS", level: 70 },
              { name: "Responsive Design", level: 90 },
              { name: "Git", level: 80 },
              { name: "UI/UX", level: 65 }
            ].map((skill) => (
              <Card key={skill.name} className="overflow-hidden">
                <CardHeader className="p-4 pb-2">
                  <CardTitle className="text-lg">{skill.name}</CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-2.5">
                    <div
                      className="bg-blue-600 h-2.5 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projetos Section */}
      <section id="projetos" className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Meus Projetos</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[{
              title: "Portfólio Pessoal",
              description: "Este site de portfólio construído com React, TypeScript, Vite, Tailwind CSS e Shandcn-ui. É o meu primeiro projeto com Tailwind CSS e Frameworks do React.",
              tags: ["React", "Tailwind", "Vite", "TypeScript", "Shadcn-ui"],
              githubLink: "https://github.com/Raphazoc/sitePortifolio",
              liveLink: "#"
            }, {
              title: "CAPSI Digital",
              description: "Um projeto em parceria com o CAPS Infantojuvenil da cidade de Foz do Iguacu. O projeto tem como objetivo facilitar o agendamento de consultas e a comunicação entre os usuários e a equipe do CAPS.",
              tags: ["React", "TailwindCSS", "SQL Lite", "CSS", "Typescript"],
              githubLink: "https://github.com/Raphazoc/capsiDigital",
              liveLink: "#"
            }, {
              title: "Projetos Futuros",
              description: "Projetos Futuros",
              tags: ["React"],
              githubLink: "#",
              liveLink: "#"
            }].map((project, index) => (
              /* Card */ 
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <img
                  src={
                    index === 0
                      ? "/images/portifolio.png"
                      : index === 1
                      ? "/images/portifolio2.png"
                      : "/images/portifolio3.png"
                  }
                  alt={`Imagem do projeto ${project.title}`}
                  className="h-48 w-full object-cover"
                />
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>
                    {project.tags.map(tag => (
                      <span key={tag} className="inline-block bg-gray-100 dark:bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-300 mr-2 mb-2">
                        {tag}
                      </span>
                    ))}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
                  <div className="mt-4 flex space-x-3">
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        GitHub
                      </a>
                    </Button>
                    <Button size="sm" asChild>
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                        Ver Projeto
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contato Section */}
      <section id="contato" className="py-16 bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Contato</h2>
          <div className="max-w-md mx-auto">
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-gray-500" />
                    <a href="martinsraphael000@gmail.com" className="hover:underline">martinsraphael000@gmail.com</a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Linkedin className="h-5 w-5 text-gray-500" />
                    <a href="https://linkedin.com/in/raphazoc" target="_blank" rel="noopener noreferrer" className="hover:underline">linkedin.com/in/raphazoc</a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Github className="h-5 w-5 text-gray-500" />
                    <a href="https://github.com/Raphazoc" target="_blank" rel="noopener noreferrer" className="hover:underline">github.com/Raphazoc</a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} Raphael Martins Pimenta. Todos os direitos reservados.</p>
          <div className="flex justify-center gap-4 mt-4">
            <a href="https://github.com/Raphazoc" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com/in/raphazoc" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <Linkedin size={20} />
            </a>
            <a href="martinsraphael000@gmail.com" className="text-gray-400 hover:text-white">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
