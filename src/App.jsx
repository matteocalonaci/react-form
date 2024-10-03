import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import CardForm from "./components/CardForm";

function App() {
 const [cities, setCities] = useState ([
    { 
      id:0,
      title: "Firenze",
      description:"Firenze è il capoluogo della regione Toscana ed è nota per la sua splendida architettura, le gallerie d'arte e la sua ricca storia. La città ospita monumenti iconici come il Duomo, Ponte Vecchio e la Galleria degli Uffizi, che ospita alcuni dei dipinti più famosi al mondo.",
      imgUrl:"https://images.unsplash.com/photo-1476362174823-3a23f4aa6d76?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      isVisitated:true
    },
    {
      id:1,
      title:"Roma",
      description:"Roma è la città eterna, immersa nella storia e nell'architettura che abbraccia oltre 2.000 anni. Dal Colosseo al Pantheon, alla Città del Vaticano e alla Fontana di Trevi, Roma è un tesoro di antiche rovine, palazzi rinascimentali e fontane barocche.",
      imgUrl:"https://plus.unsplash.com/premium_photo-1675975706513-9daba0ec12a8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      isVisitated:true
    },
    {
      id:2,
      title:"Venezia",
    description:"Venezia è una città unica costruita su più di 100 piccole isole nella laguna paludosa lungo il Mar Adriatico. La città è famosa per i suoi canali, i ponti decorati e la splendida Piazza San Marco, circondata da architettura bizantina e mosaici decorati. Fai un romantico giro in gondola o perditi nelle strette vie e nei canali di questa incantevole città.",
    imgUrl:"https://plus.unsplash.com/premium_photo-1676608101467-aaeb16efd8f4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    isVisitated:true
    },
    {
      id:3,
      title:"Milano",
    description:"Milano è una metropoli vivace e la capitale della moda italiana. La città è nota per i suoi eleganti grattacieli, i quartieri dello shopping di lusso e i ristoranti di fama mondiale. Le attrazioni imperdibili includono l'iconico Duomo, la Galleria Vittorio Emanuele II e il Teatro alla Scala.",
    imgUrl:"https://plus.unsplash.com/premium_photo-1661962887170-e7db3f307c7a?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    isVisitated:true
    }


  ])
  
  const addCity = (city) => {
    setCities([...cities, city]);
  };

  return (
    <>
    <CardForm addCity={addCity}></CardForm>

<div className="flex flex-wrap justify-center">
  {cities
  // .filter((city) => city.isVisitated) //-> aggiungo un filtro per mostrare in pagina solo le città visitate
  .map((city)=> (
  <Card
    key={city.id}
    title={city.title}
    description={city.description}
    imgUrl={city.imgUrl}city
    isVisitated={city.isVisitated}
  >
  </Card>))}

</div>
    </>
  );
}

export default App;
