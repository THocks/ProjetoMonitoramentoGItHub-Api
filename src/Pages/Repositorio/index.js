import React, { useState, useEffect } from "react";
import { api } from "../../services/api";
import {
  Container,
  HEADER,
  Loading,
  BUTTON,
  IssuesListContainer,
  Pages,
} from "./styles";
import { AiOutlineHome } from "react-icons/ai";
//
const Repositorio = ({ match }) => {
  const [repositorio, setRepositorio] = useState({});
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPages] = useState(1);

  useEffect(() => {
    async function load() {
      const nomeRepo = decodeURIComponent(match.params.repositorio);

      const [repositorioData, issuesData] = await Promise.all([
        api.get(`/repos/${nomeRepo}`),
        api.get(`/repos/${nomeRepo}/issues`, {
          params: {
            state: "open",
            per_page: 5,
          },
        }),
      ]);
      setRepositorio(repositorioData.data);
      setIssues(issuesData.data);
      setLoading(false);
    }

    load();
  }, [match.params.repositorio]);

  useEffect(() => {
    async function pagLoading() {
      const nomeRepo = decodeURIComponent(match.params.repositorio);

      const response = await api.get(`/repos/${nomeRepo}/issues`, {
        params: {
          state: "open",
          page,
          per_page: 5,
        },
      });
      setIssues(response.data);
    }
    pagLoading();
  }, [match.params.repositorio, page]);

  if (loading) {
    return (
      <Loading>
        <h1>Carregando dados do diretório</h1>
      </Loading>
    );
  }

  const handlePage = (action) => {
    setPages(action === "back" ? page - 1 : page + 1);
  };

  return (
    <div>
      <Container>
        <BUTTON to="/">
          <AiOutlineHome color="black" size={35} />
        </BUTTON>
        <HEADER>
          <img src={repositorio.owner.avatar_url} alt="ImgRepositorio" />
          <h1>{repositorio.name}</h1>
          <p>{repositorio.description}</p>
        </HEADER>

        <IssuesListContainer>
          {issues.map((dados) => (
            <li key={String(dados.id)}>
              <img src={dados.user.avatar_url} alt={dados.user.login} />
              <div>
                <strong>
                  <a
                    href={dados.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {dados.title}
                  </a>
                  {dados.labels.map((label) => (
                    <p key={String(label.id)}>{label.name}</p>
                  ))}
                </strong>
                <span>{dados.user.login}</span>
              </div>
            </li>
          ))}
        </IssuesListContainer>
        <Pages>
          <button
            type="button"
            disabled={page < 2}
            onClick={() => handlePage("back")}
          >
            Voltar
          </button>
          <button type="button" onClick={() => handlePage("next")}>
            Proxima
          </button>
        </Pages>
      </Container>
    </div>
  );
};

export default Repositorio;
