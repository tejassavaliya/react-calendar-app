import { useContext, useEffect, useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Body from "./components/Body";
import { getMonth, getWeek } from "./Utilities/Utils";
import CalendarHeader from "./components/CalendarHeader";
import Sidebar from "./components/Sidebar";
import Month from "./components/Month";
import GlobalContext from "./context/GlobalContext";
import EventModal from "./components/EventModal";
import Week from "./components/Week";


function App() {
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const [currentWeek, setCurrentWeek] = useState(getWeek());
  console.table(currentWeek);
  const { monthIndex, showEventModal, weekIndex } = useContext(GlobalContext);

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex])

  useEffect(() => {
    setCurrentWeek(getWeek(weekIndex));
  }, [weekIndex])

  return (
    <>
      <div className="min-h-full">
        {/* <NavBar />
        <Body /> */}
        {showEventModal && <EventModal /> }
        
        <div className="h-screen flex flex-col">
          <CalendarHeader />
          <div className="flex flex-1">
            <Sidebar />
            <Month month={currentMonth} />
            {/* <Week week={currentWeek} /> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
