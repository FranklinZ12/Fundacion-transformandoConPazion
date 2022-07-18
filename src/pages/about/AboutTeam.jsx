import CardList from "components/about/team/CardList";
import Curva from "components/ui/Curva";
import Titulo from "components/ui/Titulo";
import { Fragment } from "react";

const AboutTeam = () => {
  return (
    <Fragment>
      <Curva />
      <section className="my-24 text-center">
        <Titulo title='Nuestro Equipo' parrafo='Administrativo' />
        <div className="flex justify-center">
          <CardList />
        </div>
      </section>
    </Fragment>
  )
}

export default AboutTeam