import { Accordion, AccordionItem } from "react-accessible-accordion";

const Forecast = () => {
    return (
        <>
            <label className="title">Daitly</label>
            <Accordion allowZeroExpanded>
                {data.list.splice(0, 7).map()}
                
                <AccordionItem></AccordionItem>
            </Accordion>
        </>
    )
}

export default Forecast;