import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@react-router/node";
import { ServerRouter, UNSAFE_withComponentProps, Outlet, UNSAFE_withErrorBoundaryProps, isRouteErrorResponse, Meta, Links, ScrollRestoration, Scripts, NavLink } from "react-router";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { useLocation } from "react-router-dom";
import { ArrowRightIcon, Building2, Users, BookOpen, Target, Lightbulb, Users2, MapPin, Mail, Linkedin } from "lucide-react";
const streamTimeout = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, routerContext, loadContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    let userAgent = request.headers.get("user-agent");
    let readyOption = userAgent && isbot(userAgent) || routerContext.isSpaMode ? "onAllReady" : "onShellReady";
    let timeoutId = setTimeout(
      () => abort(),
      streamTimeout + 1e3
    );
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(ServerRouter, { context: routerContext, url: request.url }),
      {
        [readyOption]() {
          shellRendered = true;
          const body = new PassThrough({
            final(callback) {
              clearTimeout(timeoutId);
              timeoutId = void 0;
              callback();
            }
          });
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          pipe(body);
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
  });
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest,
  streamTimeout
}, Symbol.toStringTag, { value: "Module" }));
const links = () => [{
  rel: "preconnect",
  href: "https://fonts.googleapis.com"
}, {
  rel: "preconnect",
  href: "https://fonts.gstatic.com",
  crossOrigin: "anonymous"
}, {
  rel: "stylesheet",
  href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
}];
function Layout({
  children
}) {
  return /* @__PURE__ */ jsxs("html", {
    lang: "en",
    children: [/* @__PURE__ */ jsxs("head", {
      children: [/* @__PURE__ */ jsx("meta", {
        charSet: "utf-8"
      }), /* @__PURE__ */ jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), /* @__PURE__ */ jsx(Meta, {}), /* @__PURE__ */ jsx(Links, {})]
    }), /* @__PURE__ */ jsxs("body", {
      children: [children, /* @__PURE__ */ jsx(ScrollRestoration, {}), /* @__PURE__ */ jsx(Scripts, {})]
    })]
  });
}
const root = UNSAFE_withComponentProps(function App() {
  return /* @__PURE__ */ jsx(Outlet, {});
});
const ErrorBoundary = UNSAFE_withErrorBoundaryProps(function ErrorBoundary2({
  error
}) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack;
  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details = error.status === 404 ? "The requested page could not be found." : error.statusText || details;
  }
  return /* @__PURE__ */ jsxs("main", {
    className: "pt-16 p-4 container mx-auto",
    children: [/* @__PURE__ */ jsx("h1", {
      children: message
    }), /* @__PURE__ */ jsx("p", {
      children: details
    }), stack]
  });
});
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary,
  Layout,
  default: root,
  links
}, Symbol.toStringTag, { value: "Module" }));
const Footer = () => {
  return /* @__PURE__ */ jsxs("div", { className: "bg-neutral-950 px-30 py-20", children: [
    /* @__PURE__ */ jsxs("div", { className: "w-full flex flex-row justify-between", children: [
      /* @__PURE__ */ jsxs("div", { className: "w-50", children: [
        /* @__PURE__ */ jsx("h1", { className: "text-lg text-neutral-50 font-semibold", children: "INCT - CQA" }),
        /* @__PURE__ */ jsx("p", { className: "text-md text-neutral-400 mt-5", children: "Promovendo a colaboração entre instituições acadêmicas de excelência" })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h1", { className: "text-lg text-neutral-50 font-semibold", children: "Navegação" }),
        /* @__PURE__ */ jsx("p", { className: "text-md text-neutral-400 mt-5", children: "Home" }),
        /* @__PURE__ */ jsx("p", { className: "text-md text-neutral-400 mt-2", children: "Sobre" }),
        /* @__PURE__ */ jsx("p", { className: "text-md text-neutral-400 mt-2", children: "Institutos" }),
        /* @__PURE__ */ jsx("p", { className: "text-md text-neutral-400 mt-2", children: "Membros" })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h1", { className: "text-lg text-neutral-50 font-semibold", children: "Contato" }),
        /* @__PURE__ */ jsx("p", { className: "text-md text-neutral-400 mt-5", children: "contato@email.com" })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "w-full border border-neutral-500/50 my-10" }),
    /* @__PURE__ */ jsx("p", { className: "text-center text-lg text-neutral-400", children: "© 2025 LACIQ - UFPE. Todos os direitos reservados." })
  ] });
};
const Header = () => {
  const location = useLocation();
  return /* @__PURE__ */ jsx("div", { className: "w-full px-30 mt-5 fixed top-0 z-10", children: /* @__PURE__ */ jsxs(
    "div",
    {
      className: "\r\n                    w-full h-20 rounded-2xl bg-neutral-800/25\r\n                    relative flex flex-row items-center justify-between",
      children: [
        /* @__PURE__ */ jsx("div", { className: "w-full h-20 rounded-2xl bg-red-800/25 blur-lg absolute top-0 z-1" }),
        /* @__PURE__ */ jsx("h1", { className: "font-bold text-xl ml-20 z-2", children: "INCT-CQA" }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-row gap-x-7 mr-20 z-2", children: [
          /* @__PURE__ */ jsx(NavLink, { to: "/", children: /* @__PURE__ */ jsx("p", { className: "text-lg", style: location.pathname === "/" ? { color: "var(--color-red-500)", fontWeight: "600" } : {}, children: "Home" }) }),
          /* @__PURE__ */ jsx(NavLink, { to: "/about", children: /* @__PURE__ */ jsx("p", { className: "text-lg", style: location.pathname === "/about" ? { color: "var(--color-red-500)", fontWeight: "600" } : {}, children: "Sobre" }) }),
          /* @__PURE__ */ jsx(NavLink, { to: "/institutes", children: /* @__PURE__ */ jsx("p", { className: "text-lg", style: location.pathname === "/institutes" ? { color: "var(--color-red-500)", fontWeight: "600" } : {}, children: "Institutos" }) }),
          /* @__PURE__ */ jsx(NavLink, { to: "/members", children: /* @__PURE__ */ jsx("p", { className: "text-lg", style: location.pathname === "/members" ? { color: "var(--color-red-500)", fontWeight: "600" } : {}, children: "Membros" }) })
        ] })
      ]
    }
  ) });
};
const AboutSection = () => {
  const textClasses = "text-lg text-justify mt-5";
  return /* @__PURE__ */ jsxs("div", { className: "w-full px-30 pt-25 pb-20 text-neutral-200 bg-neutral-950 before-drop relative", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-4xl font-bold text-center mb-7", children: "O que é o INCT-CQA?" }),
    /* @__PURE__ */ jsx("p", { className: textClasses, children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." }),
    /* @__PURE__ */ jsx("p", { className: textClasses, children: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo." }),
    /* @__PURE__ */ jsx("p", { className: textClasses, children: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem." })
  ] });
};
const CompQuantSection = () => {
  return /* @__PURE__ */ jsxs("div", { className: "px-30 py-20 bg-gradient-to-r from-red-900/50 via-red-800/85 to-black/90 text-center", children: [
    /* @__PURE__ */ jsxs("h1", { className: "text-4xl text-neutral-50 font-bold", children: [
      "Impulsionando a Pesquisa",
      /* @__PURE__ */ jsx("br", {}),
      "em Computação Quântica"
    ] }),
    /* @__PURE__ */ jsx("p", { className: "text-xl text-neutral-200 mt-5", children: "Através da colaboração entre as principais instituições do país, estamos construindo o futuro da tecnologia quântica aplicada." })
  ] });
};
const IntroSection$3 = () => {
  return /* @__PURE__ */ jsxs("div", { className: "w-full pt-30 pb-15 relative flex justify-center", children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        style: { backgroundImage: "url('public/background.jpg')" },
        className: "w-full h-full bg-no-repeat bg-cover blur-[2px] bg-neutral-800/75 absolute top-0 bg-blend-multiply"
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "w-1/2 z-2", children: [
      /* @__PURE__ */ jsxs("h1", { className: "text-4xl text-center mt-10 text-5xl/14 font-bold", children: [
        "Colaboração Acadêmica",
        /* @__PURE__ */ jsx("br", {}),
        "em Excelência"
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-md text-center mt-5 text-lg font-medium", children: "Unindo instituições de pesquisa de ponta para promover inovação, conhecimento compartilhado e avanços científicos significativos." })
    ] })
  ] });
};
const JoinSection = () => {
  return /* @__PURE__ */ jsxs("div", { className: "px-30 py-20 bg-neutral-200 text-center flex flex-col items-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-4xl text-neutral-950 font-bold", children: "Faça Parte Desta Iniciativa" }),
    /* @__PURE__ */ jsx("p", { className: "text-xl text-neutral-700 mt-7 mb-9", children: "Conheça nossos membros e descubra como sua instituição pode participar desta rede de colaboração acadêmica." }),
    /* @__PURE__ */ jsxs("button", { className: "flex flex-row items-center gap-x-3 bg-red-900 text-lg py-3 px-8 rounded-lg hover:bg-red-950 transition-color duration-200 cursor-pointer", children: [
      "Conheça os membros ",
      /* @__PURE__ */ jsx(ArrowRightIcon, { className: "w-5" })
    ] })
  ] });
};
const TopicCard = ({ icon, title, description }) => {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: "\r\n                w-25/100 flex flex-col items-center py-20 px-10 gap-y-5 rounded-xl bg-neutral-50\r\n                drop-shadow-sm drop-shadow-neutral-800/50 hover:drop-shadow-xl hover:drop-shadow-red-700/50\r\n                transition duration-500 delay- z-1\r\n            ",
      children: [
        icon,
        /* @__PURE__ */ jsx("h1", { className: "text-neutral-950 text-lg text-center font-semibold", children: title }),
        /* @__PURE__ */ jsx("p", { className: "text-neutral-700 text-center", children: description })
      ]
    }
  );
};
const HighlightedIcon = ({ icon }) => {
  return /* @__PURE__ */ jsx("div", { className: "p-3 bg-red-200/50 rounded-md", children: icon });
};
const TopicsSection = () => {
  return /* @__PURE__ */ jsxs("div", { className: "px-30 py-20 bg-neutral-200 flex flex-row gap-x-10 justify-center relative overflow-hidden", children: [
    /* @__PURE__ */ jsx(
      TopicCard,
      {
        icon: /* @__PURE__ */ jsx(HighlightedIcon, { icon: /* @__PURE__ */ jsx(Building2, { style: { color: "var(--color-red-800)" } }) }),
        title: "Instituições Parceiras",
        description: "Colaboração entre as principais universidades e centros de pesquisa do país."
      }
    ),
    /* @__PURE__ */ jsx(
      TopicCard,
      {
        icon: /* @__PURE__ */ jsx(HighlightedIcon, { icon: /* @__PURE__ */ jsx(Users, { style: { color: "var(--color-red-800)" } }) }),
        title: "Pesquisadores Renomados",
        description: "Equipe multidisciplinar de especialistas comprometidos com a excelência."
      }
    ),
    /* @__PURE__ */ jsx(
      TopicCard,
      {
        icon: /* @__PURE__ */ jsx(HighlightedIcon, { icon: /* @__PURE__ */ jsx(BookOpen, { style: { color: "var(--color-red-800)" } }) }),
        title: "Conhecimento Compartilhado",
        description: "Promovendo a troca de ideias e o desenvolvimento de projetos inovadores."
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "absolute w-200 h-200 -bottom-100 -left-100 z-0", style: { backgroundColor: "rgba(229, 229, 229, 0)", background: "radial-gradient(circle, rgba(229, 229, 229, 0) 40%, rgba(179, 70, 70, 0.35) 50%, rgba(229, 229, 229, 0) 60%)" } }),
    /* @__PURE__ */ jsx("div", { className: "absolute w-200 h-200 -top-100 -right-75 z-0", style: { backgroundColor: "rgba(229, 229, 229, 0)", background: "radial-gradient(circle,rgba(229, 229, 229, 0) 40%, rgba(179, 70, 70, 0.35) 50%, rgba(229, 229, 229, 0) 60%)" } })
  ] });
};
const Home = () => {
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx(Header, {}), /* @__PURE__ */ jsx(IntroSection$3, {}), /* @__PURE__ */ jsx(AboutSection, {}), /* @__PURE__ */ jsx(TopicsSection, {}), /* @__PURE__ */ jsx(CompQuantSection, {}), /* @__PURE__ */ jsx(JoinSection, {}), /* @__PURE__ */ jsx(Footer, {})]
  });
};
const home = UNSAFE_withComponentProps(Home);
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: home
}, Symbol.toStringTag, { value: "Module" }));
const EventSection = () => {
  return /* @__PURE__ */ jsx("div", { className: "px-30 pb-20 bg-neutral-200", children: /* @__PURE__ */ jsxs("div", { className: "bg-red-300/20 w-full p-10 rounded-md", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-2xl font-semibold text-neutral-800 mb-5", children: "Sobre o Projeto" }),
    /* @__PURE__ */ jsx("p", { className: "text-md text-neutral-600 mb-5", children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." }),
    /* @__PURE__ */ jsx("p", { className: "text-md text-neutral-600", children: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo." })
  ] }) });
};
const IntroSection$2 = () => {
  return /* @__PURE__ */ jsxs("div", { className: "w-full pt-30 pb-15 relative flex justify-left", children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        style: { backgroundImage: "url('public/background2.jpg')" },
        className: "w-full h-full bg-no-repeat bg-cover bg-center blur-[2px] bg-neutral-800/75 absolute top-0 bg-blend-multiply"
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "px-30 z-2", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-4xl mt-10 text-5xl/14 font-bold", children: "Sobre o Projeto" }),
      /* @__PURE__ */ jsx("p", { className: "text-md w-3/5 mt-5 text-lg font-medium", children: "Uma iniciativa que reúne as principais instituições acadêmicas para promover a colaboração científica e o avanço do conhecimento." })
    ] })
  ] });
};
const ScienceSection = () => {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      style: { backgroundImage: "url('public/background3.jpg')" },
      className: "px-30 bg-no-repeat bg-cover bg-center py-20 bg-red-950/80 bg-blend-multiply",
      children: [
        /* @__PURE__ */ jsx("h1", { className: "text-4xl text-neutral-100 text-center font-semibold mb-5", children: "Juntos pela Ciência e Inovação" }),
        /* @__PURE__ */ jsx("p", { className: "text-xl text-neutral-300 text-center", children: "Construindo pontes entre instituições para criar um ecossistema de pesquisa colaborativo e inovador." })
      ]
    }
  );
};
const ValueCard = ({ title, description }) => {
  return /* @__PURE__ */ jsxs("div", { className: "px-5 py-10 rounded-xl bg-neutral-50 drop-shadow-sm drop-shadow-neutral-800/50", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-neutral-800 text-xl font-semibold", children: title }),
    /* @__PURE__ */ jsx("p", { className: "text-neutral-600 text-md", children: description })
  ] });
};
const ValuesSection = () => {
  return /* @__PURE__ */ jsx("div", { className: "px-30 py-20 bg-neutral-200", children: /* @__PURE__ */ jsxs("div", { className: "w-full flex flex-col bg-neutral-500/25 gap-y-[1px]", children: [
    /* @__PURE__ */ jsxs("div", { className: "w-full bg-neutral-200 py-10", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-row gap-x-3 items-center mb-5", children: [
        /* @__PURE__ */ jsx(HighlightedIcon, { icon: /* @__PURE__ */ jsx(Target, { className: "text-red-800" }) }),
        /* @__PURE__ */ jsx("h1", { className: "text-neutral-800 text-2xl font-semibold", children: "Nossa Missão" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-neutral-600 text-lg", children: "Fomentar a colaboração entre instituições acadêmicas de excelência, criando um ambiente propício para o desenvolvimento de pesquisas inovadoras e a formação de redes de conhecimento que transcendem fronteiras institucionais." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "w-full bg-neutral-200 py-10", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-row gap-x-3 items-center mb-5", children: [
        /* @__PURE__ */ jsx(HighlightedIcon, { icon: /* @__PURE__ */ jsx(Lightbulb, { className: "text-red-800" }) }),
        /* @__PURE__ */ jsx("h1", { className: "text-neutral-800 text-2xl font-semibold", children: "Nossa Visão" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-neutral-600 text-lg", children: "Ser referência nacional em colaboração acadêmica interinstitucional, promovendo avanços científicos significativos e contribuindo para o desenvolvimento da ciência e tecnologia no país." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "w-full bg-neutral-200 py-10", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-row gap-x-3 items-center mb-5", children: [
        /* @__PURE__ */ jsx(HighlightedIcon, { icon: /* @__PURE__ */ jsx(Users2, { className: "text-red-800" }) }),
        /* @__PURE__ */ jsx("h1", { className: "text-neutral-800 text-2xl font-semibold", children: "Nossos Valores" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-row justify-between gap-x-5 mb-5", children: [
        /* @__PURE__ */ jsx(
          ValueCard,
          {
            title: "Excelência",
            description: "Compromisso com os mais altos padrões de qualidade em pesquisa e ensino."
          }
        ),
        /* @__PURE__ */ jsx(
          ValueCard,
          {
            title: "Colaboração",
            description: "Trabalho conjunto e compartilhamento de recursos e conhecimentos."
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-row justify-between gap-x-5", children: [
        /* @__PURE__ */ jsx(
          ValueCard,
          {
            title: "Excelência",
            description: "Compromisso com os mais altos padrões de qualidade em pesquisa e ensino."
          }
        ),
        /* @__PURE__ */ jsx(
          ValueCard,
          {
            title: "Colaboração",
            description: "Trabalho conjunto e compartilhamento de recursos e conhecimentos."
          }
        )
      ] })
    ] })
  ] }) });
};
const About = () => {
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx(Header, {}), /* @__PURE__ */ jsx(IntroSection$2, {}), /* @__PURE__ */ jsx(ValuesSection, {}), /* @__PURE__ */ jsx(EventSection, {}), /* @__PURE__ */ jsx(ScienceSection, {}), /* @__PURE__ */ jsx(Footer, {})]
  });
};
const about = UNSAFE_withComponentProps(About);
const route2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: about
}, Symbol.toStringTag, { value: "Module" }));
const CommunitySection = () => {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      style: { backgroundImage: "url('public/background4.jpg')" },
      className: "px-30 bg-no-repeat bg-cover bg-center py-20 bg-neutral-950/75 bg-blend-multiply",
      children: [
        /* @__PURE__ */ jsx("h1", { className: "text-4xl text-neutral-100 text-center font-semibold mb-5", children: "Rede Nacional de Excelência" }),
        /* @__PURE__ */ jsx("p", { className: "text-xl text-neutral-300 text-center", children: "Instituições de todo o Brasil unidas pelo compromisso com a pesquisa de qualidade e a formação de profissionais capacitados." })
      ]
    }
  );
};
const InstituteCard = () => {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: "\r\n                w-1/2 py-10 px-10 rounded-xl bg-neutral-50 transition duration-500 z-1\r\n                drop-shadow-sm drop-shadow-neutral-800/50 hover:drop-shadow-md hover:drop-shadow-red-700/50 \r\n            ",
      children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-row justify-between", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h1", { className: "text-xl text-neutral-800 font-semibold", children: "Universidade Federal de Pernambuco" }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-row items-center gap-x-2", children: [
              /* @__PURE__ */ jsx(MapPin, { className: "text-neutral-700 w-5" }),
              /* @__PURE__ */ jsx("p", { className: "text-md text-neutral-600", children: "Recife, PE" })
            ] })
          ] }),
          /* @__PURE__ */ jsx(HighlightedIcon, { icon: /* @__PURE__ */ jsx(Building2, { className: "text-red-800" }) })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-neutral-600 text-md mt-7 mb-5", children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." }),
        /* @__PURE__ */ jsx("p", { className: "text-neutral-800 text-md font-semibold", children: "Áreas de Destaque:" }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-row flex-wrap pt-4 gap-x-2", children: [
          /* @__PURE__ */ jsx("span", { className: "text-neutral-800 text-sm bg-neutral-200 px-5 py-1 rounded-2xl", children: "Computação quântica" }),
          /* @__PURE__ */ jsx("span", { className: "text-neutral-800 text-sm bg-neutral-200 px-5 py-1 rounded-2xl", children: "Machine Learning" }),
          /* @__PURE__ */ jsx("span", { className: "text-neutral-800 text-sm bg-neutral-200 px-5 py-1 rounded-2xl", children: "IA" })
        ] })
      ]
    }
  );
};
const InstitutesSection = () => {
  return /* @__PURE__ */ jsxs("div", { className: "px-30 bg-neutral-200 pb-20", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-row gap-x-10 mb-10", children: [
      /* @__PURE__ */ jsx(InstituteCard, {}),
      /* @__PURE__ */ jsx(InstituteCard, {})
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-row gap-x-10 mb-10", children: [
      /* @__PURE__ */ jsx(InstituteCard, {}),
      /* @__PURE__ */ jsx(InstituteCard, {})
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-row gap-x-10", children: [
      /* @__PURE__ */ jsx(InstituteCard, {}),
      /* @__PURE__ */ jsx(InstituteCard, {})
    ] })
  ] });
};
const IntroSection$1 = () => {
  return /* @__PURE__ */ jsxs("div", { className: "w-full pt-30 pb-15 relative flex justify-left", children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        style: { backgroundImage: "url('public/background2.jpg')" },
        className: "w-full h-full bg-no-repeat bg-cover bg-center blur-[2px] bg-neutral-800/75 absolute top-0 bg-blend-multiply"
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "px-30 z-2", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-4xl mt-10 text-5xl/14 font-bold", children: "Institutos Participantes" }),
      /* @__PURE__ */ jsx("p", { className: "text-md w-3/5 mt-5 text-lg font-medium", children: "Conheça as instituições acadêmicas de excelência que fazem parte desta iniciativa colaborativa." })
    ] })
  ] });
};
const NumbersSection = () => {
  return /* @__PURE__ */ jsxs("div", { className: "px-30 py-20 bg-neutral-200 flex flex-row justify-between", children: [
    /* @__PURE__ */ jsxs("div", { className: "px-20 py-10 rounded-xl drop-shadow-sm drop-shadow-neutral-800/50 bg-neutral-50", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-red-800 text-4xl text-center font-semibold mb-2", children: "6" }),
      /* @__PURE__ */ jsx("p", { className: "text-md text-neutral-600 text-center", children: "Instituições Parceiras" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "px-20 py-10 rounded-xl drop-shadow-sm drop-shadow-neutral-800/50 bg-neutral-50", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-red-800 text-4xl text-center font-semibold mb-2", children: "15+" }),
      /* @__PURE__ */ jsx("p", { className: "text-md text-neutral-600 text-center", children: "Áreas de Pesquisa" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "px-20 py-10 rounded-xl drop-shadow-sm drop-shadow-neutral-800/50 bg-neutral-50", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-red-800 text-4xl text-center font-semibold mb-2", children: "5" }),
      /* @__PURE__ */ jsx("p", { className: "text-md text-neutral-600 text-center", children: "Estados Representados" })
    ] })
  ] });
};
const Institutes = () => {
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx(Header, {}), /* @__PURE__ */ jsx(IntroSection$1, {}), /* @__PURE__ */ jsx(NumbersSection, {}), /* @__PURE__ */ jsx(InstitutesSection, {}), /* @__PURE__ */ jsx(CommunitySection, {}), /* @__PURE__ */ jsx(Footer, {})]
  });
};
const institutes = UNSAFE_withComponentProps(Institutes);
const route3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: institutes
}, Symbol.toStringTag, { value: "Module" }));
const IntroSection = () => {
  return /* @__PURE__ */ jsxs("div", { className: "w-full pt-30 pb-15 relative flex justify-left", children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        style: { backgroundImage: "url('public/background2.jpg')" },
        className: "w-full h-full bg-no-repeat bg-cover bg-center blur-[2px] bg-neutral-800/75 absolute top-0 bg-blend-multiply"
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "px-30 z-2", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-4xl mt-10 text-5xl/14 font-bold", children: "Membros da Equipe" }),
      /* @__PURE__ */ jsx("p", { className: "text-md w-3/5 mt-5 text-lg font-medium", children: "Conheça os pesquisadores e coordenadores que lideram esta iniciativa de colaboração acadêmica." })
    ] })
  ] });
};
const MemberCard = () => {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: "\r\n                w-1/2 py-10 px-7 rounded-xl bg-neutral-50 transition duration-500 z-1\r\n                drop-shadow-sm drop-shadow-neutral-800/50 hover:drop-shadow-md hover:drop-shadow-red-700/50 \r\n            ",
      children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-row gap-x-4 items-center border-b border-neutral-400/50 pb-7", children: [
          /* @__PURE__ */ jsx("div", { className: "p-7 bg-red-800 rounded-[50%] flex items-center justify-center", children: /* @__PURE__ */ jsx("p", { className: "text-xl", children: "FS" }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h1", { className: "text-xl text-neutral-800 font-semibold", children: "Prof. Fulano da Silva" }),
            /* @__PURE__ */ jsx("p", { className: "text-md text-red-800", children: "Coordenador Geral" }),
            /* @__PURE__ */ jsx("p", { className: "text-md text-neutral-600", children: "UFPE" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "text-md text-neutral-800 mt-5", children: [
          /* @__PURE__ */ jsx("strong", { className: "font-semibold", children: "Área:" }),
          " Computação Quântica"
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-row gap-x-3 mt-2", children: [
          /* @__PURE__ */ jsx("div", { className: "flex items-center w-10 px-3 py-1 cursor-pointer hover:bg-neutral-200 rounded-md transition-color duration-200", children: /* @__PURE__ */ jsx(Mail, { className: "text-neutral-600 w-full" }) }),
          /* @__PURE__ */ jsx("div", { className: "flex items-center w-10 px-3 py-1 cursor-pointer hover:bg-neutral-200 rounded-md transition-color duration-200", children: /* @__PURE__ */ jsx(Linkedin, { className: "text-neutral-600 w-full" }) })
        ] })
      ]
    }
  );
};
const MembersListSection = () => {
  return /* @__PURE__ */ jsxs("div", { className: "px-30 py-20 bg-neutral-200", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-2xl text-neutral-800 font-semibold mb-5", children: "Coordenação:" }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-row gap-x-10 mb-10", children: [
      /* @__PURE__ */ jsx(MemberCard, {}),
      /* @__PURE__ */ jsx(MemberCard, {})
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-row gap-x-10 mb-10", children: [
      /* @__PURE__ */ jsx(MemberCard, {}),
      /* @__PURE__ */ jsx(MemberCard, {})
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-row gap-x-10 mb-10", children: [
      /* @__PURE__ */ jsx(MemberCard, {}),
      /* @__PURE__ */ jsx(MemberCard, {})
    ] }),
    /* @__PURE__ */ jsx("h1", { className: "text-2xl text-neutral-800 font-semibold mb-5", children: "Pesquisadores:" }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-row gap-x-10 mb-10", children: [
      /* @__PURE__ */ jsx(MemberCard, {}),
      /* @__PURE__ */ jsx(MemberCard, {})
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-row gap-x-10 mb-10", children: [
      /* @__PURE__ */ jsx(MemberCard, {}),
      /* @__PURE__ */ jsx(MemberCard, {})
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-row gap-x-10 mb-10", children: [
      /* @__PURE__ */ jsx(MemberCard, {}),
      /* @__PURE__ */ jsx("div", { className: "w-1/2" })
    ] })
  ] });
};
const TeamSection = () => {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      style: { backgroundImage: "url('public/background4.jpg')" },
      className: "px-30 bg-no-repeat bg-cover bg-center py-20 bg-neutral-950/75 bg-blend-multiply",
      children: [
        /* @__PURE__ */ jsx("h1", { className: "text-4xl text-neutral-100 text-center font-semibold mb-5", children: "Equipe Multidisciplinar de Excelência" }),
        /* @__PURE__ */ jsx("p", { className: "text-xl text-neutral-300 text-center", children: "Profissionais dedicados à pesquisa de ponta em computação quântica e suas aplicações tecnológicas." })
      ]
    }
  );
};
const Members = () => {
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx(Header, {}), /* @__PURE__ */ jsx(IntroSection, {}), /* @__PURE__ */ jsx(MembersListSection, {}), /* @__PURE__ */ jsx(TeamSection, {}), /* @__PURE__ */ jsx(Footer, {})]
  });
};
const members = UNSAFE_withComponentProps(Members);
const route4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: members
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/assets/entry.client-D04pqKcq.js", "imports": ["/assets/chunk-OIYGIGL5-DLnrNNij.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": true, "module": "/assets/root-CSKOCB1u.js", "imports": ["/assets/chunk-OIYGIGL5-DLnrNNij.js"], "css": ["/assets/root-Cw2mgePK.css"], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/home": { "id": "routes/home", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/home-Brzmnh9m.js", "imports": ["/assets/chunk-OIYGIGL5-DLnrNNij.js", "/assets/createLucideIcon-YJmGGKCS.js", "/assets/index-D1oYH9IW.js", "/assets/building-2-CnH7_E9E.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/about": { "id": "routes/about", "parentId": "root", "path": "about", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/about-BMVjHacJ.js", "imports": ["/assets/chunk-OIYGIGL5-DLnrNNij.js", "/assets/createLucideIcon-YJmGGKCS.js", "/assets/index-D1oYH9IW.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/institutes": { "id": "routes/institutes", "parentId": "root", "path": "institutes", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/institutes-Dku9Obiz.js", "imports": ["/assets/chunk-OIYGIGL5-DLnrNNij.js", "/assets/createLucideIcon-YJmGGKCS.js", "/assets/index-D1oYH9IW.js", "/assets/building-2-CnH7_E9E.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/members": { "id": "routes/members", "parentId": "root", "path": "members", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/members-CMhDsvYN.js", "imports": ["/assets/chunk-OIYGIGL5-DLnrNNij.js", "/assets/createLucideIcon-YJmGGKCS.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 } }, "url": "/assets/manifest-7e9e2c25.js", "version": "7e9e2c25", "sri": void 0 };
const assetsBuildDirectory = "build\\client";
const basename = "/";
const future = { "v8_middleware": false, "unstable_optimizeDeps": false, "unstable_splitRouteModules": false, "unstable_subResourceIntegrity": false, "unstable_viteEnvironmentApi": false };
const ssr = true;
const isSpaMode = false;
const prerender = [];
const routeDiscovery = { "mode": "lazy", "manifestPath": "/__manifest" };
const publicPath = "/";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "routes/home": {
    id: "routes/home",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route1
  },
  "routes/about": {
    id: "routes/about",
    parentId: "root",
    path: "about",
    index: void 0,
    caseSensitive: void 0,
    module: route2
  },
  "routes/institutes": {
    id: "routes/institutes",
    parentId: "root",
    path: "institutes",
    index: void 0,
    caseSensitive: void 0,
    module: route3
  },
  "routes/members": {
    id: "routes/members",
    parentId: "root",
    path: "members",
    index: void 0,
    caseSensitive: void 0,
    module: route4
  }
};
export {
  serverManifest as assets,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  prerender,
  publicPath,
  routeDiscovery,
  routes,
  ssr
};
