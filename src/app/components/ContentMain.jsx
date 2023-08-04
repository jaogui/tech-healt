import {React, useContext} from "react";
import { contextApp } from "../ContextApp";

function ContentMain() {
  const { contentView } = useContext(contextApp);

  return (
    <main className="px-5 py-8">
      {contentView === "workflow" ? <section>Conteudo Work</section> : null}
      {contentView === "routine" ? <section>Conteudo Rotina</section> : null}
      {contentView === "diary" ? <section>Conteudo Agenda</section> : null}
    </main>
  );
}

export default ContentMain;
