import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

import { TempoDevtools } from "tempo-devtools";
import { initEmailJS } from "./lib/emailjs";
import { initializeDatabase } from "./lib/supabase-client";

TempoDevtools.init();

// Inicializar EmailJS
initEmailJS();

// Inicializar banco de dados - Garantir que seja executado antes da renderização
initializeDatabase()
  .then(() => {
    console.log("Banco de dados inicializado com sucesso");
  })
  .catch((error) => {
    console.error("Erro ao inicializar banco de dados:", error);
  });

const basename = import.meta.env.BASE_URL;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
