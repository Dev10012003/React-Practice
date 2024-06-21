import "./Body.css";
import ResCard from "./ResCrard";

function Body() {
  const restList = [
    {
      id: "r1",
      resName: "Burger King",
      cuisine: "Chinese",
      rating: 4.5,
      cost: 500,
      time: 38,
    },
    {
      id: "r2",
      resName: "Pizza Hut",
      cuisine: "Italian",
      rating: 4.2,
      cost: 600,
      time: 45,
    },
    {
      id: "r3",
      resName: "Taco Bell",
      cuisine: "Mexican",
      rating: 4.0,
      cost: 450,
      time: 30,
    },
    {
      id: "r4",
      resName: "Sushi Palace",
      cuisine: "Japanese",
      rating: 4.7,
      cost: 800,
      time: 50,
    },
    {
      id: "r5",
      resName: "Pasta Place",
      cuisine: "Italian",
      rating: 4.3,
      cost: 550,
      time: 40,
    },
    {
      id: "r6",
      resName: "Curry House",
      cuisine: "Indian",
      rating: 4.6,
      cost: 700,
      time: 55,
    },
    {
      id: "r7",
      resName: "BBQ Joint",
      cuisine: "American",
      rating: 4.4,
      cost: 650,
      time: 48,
    },
    {
      id: "r8",
      resName: "Pho Corner",
      cuisine: "Vietnamese",
      rating: 4.1,
      cost: 500,
      time: 35,
    },
    {
      id: "r9",
      resName: "Falafel Stop",
      cuisine: "Middle Eastern",
      rating: 4.3,
      cost: 480,
      time: 32,
    },
    {
      id: "r10",
      resName: "Bistro 34",
      cuisine: "French",
      rating: 4.8,
      cost: 900,
      time: 60,
    },
    {
      id: "r11",
      resName: "Ramen Bar",
      cuisine: "Japanese",
      rating: 4.6,
      cost: 750,
      time: 52,
    },
    {
      id: "r12",
      resName: "Mediterranean Grill",
      cuisine: "Mediterranean",
      rating: 4.2,
      cost: 580,
      time: 42,
    },
    {
      id: "r13",
      resName: "Diner's Delight",
      cuisine: "American",
      rating: 4.0,
      cost: 500,
      time: 37,
    },
    {
      id: "r14",
      resName: "Thai Terrace",
      cuisine: "Thai",
      rating: 4.5,
      cost: 620,
      time: 47,
    },
    {
      id: "r15",
      resName: "Fish n' Chips",
      cuisine: "British",
      rating: 4.3,
      cost: 540,
      time: 39,
    },
    {
      id: "r16",
      resName: "Tandoori Palace",
      cuisine: "Indian",
      rating: 4.7,
      cost: 780,
      time: 58,
    },
    {
      id: "r17",
      resName: "Sushi Express",
      cuisine: "Japanese",
      rating: 4.4,
      cost: 680,
      time: 46,
    },
    {
      id: "r18",
      resName: "Burrito Haven",
      cuisine: "Mexican",
      rating: 4.2,
      cost: 520,
      time: 36,
    },
    {
      id: "r19",
      resName: "Gourmet Grill",
      cuisine: "American",
      rating: 4.6,
      cost: 700,
      time: 53,
    },
    {
      id: "r20",
      resName: "Pizzeria Romano",
      cuisine: "Italian",
      rating: 4.9,
      cost: 950,
      time: 65,
    },
  ];

  return (
    <div>
      <div className="search">Serach</div>
      <div className="res-container">
        {restList.map((restaurent) => (
          <ResCard key={restaurent.id} resData={restaurent} />
        ))}
      </div>
    </div>
  );
}

export default Body;
