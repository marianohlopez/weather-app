import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from "react-accessible-accordion";
import './forecast.css';

const Forecast = ({ data }) => {
    const weekDays = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

    const dayWeek = new Date().getDay();
    const forecastDays = weekDays.slice(dayWeek, weekDays.length).concat(weekDays.slice(0, dayWeek));
    console.log(forecastDays);
    return (
        <>
            <label className="title">Semana</label>
            <Accordion allowZeroExpanded>
                {data.list.slice(0, 7).map((item, idx) => (
                    <AccordionItem key={idx}>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                <div className="dailyItem">
                                    <img alt="weather" className="iconSmall" src={`icons/${item.weather[0].icon}.png`}></img>
                                    <label className="day">{forecastDays[idx]}</label>
                                    <label className="description">{item.weather[0].description}</label>
                                    <label className="minMax">{Math.round(item.main.temp_min)}°C / {Math.round(item.main.temp_max)}°C</label>
                                </div>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div className="dailyDetails">
                                <div>
                                    <div className="dailyDetailsItem">
                                        <label>Presión:</label>
                                        <label>{item.main.pressure} hpa</label>
                                    </div>
                                    <div className="dailyDetailsItem">
                                        <label>Humedad:</label>
                                        <label>{item.main.humidity}%</label>
                                    </div>
                                    <div className="dailyDetailsItem">
                                        <label>Nubes:</label>
                                        <label>{item.clouds.all}%</label>
                                    </div>
                                </div>
                                <div>
                                    <div className="dailyDetailsItem">
                                        <label>Vientos:</label>
                                        <label>{item.wind.speed} m/s</label>
                                    </div>
                                    <div className="dailyDetailsItem">
                                        <label>Nivel del mar:</label>
                                        <label>{item.main.sea_level}m</label>
                                    </div>
                                    <div className="dailyDetailsItem">
                                        <label>Sensación térmica:</label>
                                        <label>{Math.round(item.main.feels_like)}°C</label>
                                    </div>
                                </div>
                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>
                ))}
            </Accordion>
        </>
    )
}

export default Forecast;