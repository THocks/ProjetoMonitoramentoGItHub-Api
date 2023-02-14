import React from "react";
//ICOns
import { FaGithub, FaPlus, FaSpinner, FaBars, FaTrash } from "react-icons/fa";
//HOOKS
import { useState, useCallback } from "react";
//COMPONENTS
import { api } from "../../services/api";

import { Contaniner, Form, SubmitButton, List, DeleteButton } from "./styles";
const Main = () => {
  const [reporInit, setReportInit] = useState("");
  const [repositorios, setRepositorios] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      async function submit() {
        setLoading(true);
        setAlert(null);
        try {
          if (reporInit === "") {
            throw new Error("Campo de busca esta em branco");
          }

          const response = await api.get(`repos/${reporInit}`);
          const hasRepo = repositorios.find((repo) => repo.name === reporInit);

          if (hasRepo) {
            throw new Error("Repositorio ja esta em sua aba de pesquisa");
          }

          const data = {
            name: response.data.full_name,
          };
          setRepositorios([...repositorios, data]);
          setReportInit("");
        } catch (error) {
          setAlert(true);
          console.log(error);
        } finally {
          setLoading(false);
        }
      }
      submit();
    },

    [reporInit, repositorios]
  );

  const handleinputChange = (e) => {
    setReportInit(e.target.value);
    setAlert(null);
  };

  const handleDelete = useCallback(
    (repo) => {
      const find = repositorios.filter((r) => r.name !== repo);
      setRepositorios(find);
    },
    [repositorios]
  );

  return (
    <div>
      <Contaniner>
        <h1>
          <FaGithub size={25} />
          Meus Repositorios
        </h1>

        <Form onSubmit={handleSubmit} error={alert}>
          <input
            type="text"
            placeholder="Adicionar repositorio"
            value={reporInit}
            onChange={handleinputChange}
          />
          <SubmitButton loading={loading ? 1 : 0}>
            {loading ? (
              <FaSpinner color="#FFF" size={14} />
            ) : (
              <FaPlus color="#FFF" size={14} />
            )}
          </SubmitButton>
        </Form>

        <List>
          {repositorios.map((repo) => (
            <li key={repo.name}>
              <DeleteButton onClick={() => handleDelete(repo.name)}>
                <FaTrash size={14} />
              </DeleteButton>
              <span>{repo.name}</span>
              <a href="">
                <FaBars size={20} />
              </a>
            </li>
          ))}
        </List>
      </Contaniner>
    </div>
  );
};

export default Main;
