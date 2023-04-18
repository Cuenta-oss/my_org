import './App.css';
import Header from './components/header/header';
import Form from './components/form/form';
import { MiOrg } from './components/miOrg/miOrg';
import { useState } from 'react';
import { Team } from './components/team/team';
import { Footer } from './components/footer/footer';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [showForm, setShowForm] = useState(true);
  const [colaborators, setColaborators] = useState([]);

  const [listTeam, setListTeam] = useState([
    {
      id: uuidv4(),
      title: "Programación",
      primaryColor: "#57C278",
      secondaryColor: "#D9F7E9"
    },
    {
      id: uuidv4(),
      title: "Front End",
      primaryColor: "#82CFFA",
      secondaryColor: "#E8F8FF"
    },
    {
      id: uuidv4(),
      title: "Data Science",
      primaryColor: "#A6D157",
      secondaryColor: "#F0F8E2"
    },
    {
      id: uuidv4(),
      title: "Devops",
      primaryColor: "#E06B69",
      secondaryColor: "#FDE7E8"
    },
    {
      id: uuidv4(),
      title: "UX y Diseño",
      primaryColor: "#DB6EBF",
      secondaryColor: "#FAE9F5"
    },
    {
      id: uuidv4(),
      title: "Móvil",
      primaryColor: "#FFBA05",
      secondaryColor: "#FFF5D9"
    },
    {
      id: uuidv4(),
      title: "Innovación y  Gestión",
      primaryColor: "#FF8A29",
      secondaryColor: "#FFEEDF"
    }
  ])
  const changeShow = () => {
    setShowForm(!showForm);
  }

  const registroColaborador = (colaborador) => {
    //Generar un id unico para cada colaboraador
    const id = uuidv4();
    colaborador.id = id;
    colaborador.fav = false;
    // console.log("Colaborador", colaborador);
    setColaborators([...colaborators, colaborador]);
  }

  const registroEquipo = (equipo) => {
    setListTeam([...listTeam, { ...equipo, id: uuidv4() }]);
  }

  const deleteColaborator = (id) => {
    console.log(`Eliminando colab...${id}`);
    setColaborators(colaborators.filter(colaborator => colaborator.id !== id))
    // console.log(id);
  }

  const selectFavorite = (id) => {
    const colabUpdates = colaborators.map((colab) => {
      if (colab.id === id) {
        colab.fav = !colab.fav;
      }
      return colab;
    })
    setColaborators(colabUpdates);
  }


  const updateColorTeam = (color, id) => {
    const updateTeam = listTeam.map((team) => {
      if (team.id === id) {
        team.primaryColor = color;
      }
      return team;
    })
    setListTeam(updateTeam);
  }
  /* const listTeam =  */
  return (
    <div className="App">
      <Header />
      {showForm ? <Form
        listTeam={listTeam.map((equipo) => equipo.title)}
        registroColaborador={registroColaborador}
        registroEquipo={registroEquipo}
      />
        :
        <></>}
      {/* <Form /> */}
      <MiOrg changeShow={changeShow} />
      {listTeam.map((team) => {
        // console.log(team);
        return <Team
          datos={team}
          key={team.title}
          colaborators={colaborators.filter(colaborators => colaborators.team === team.title)}
          deleteColaborator={deleteColaborator}
          updateColorTeam={updateColorTeam}
          selectFavorite={selectFavorite}
        />
      })}
      <Footer />
    </div>
  );
}

export default App;
