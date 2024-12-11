import React from "react";
import styles from "./Date.module.css";
import DatePickerComponent from "../../../../components/datePicker/DatePicker"
import Button from "../../../../components/button/Button";
import report from "../../Report.module.css"


const Date = (props) => {
    return (
        <div className={report.body}>
                    <p className={report.annotation}>When did your pet go missing?</p>
                    <div className={styles.date}>
                        <DatePickerComponent></DatePickerComponent>
                    </div>
                    <div className={report.button_container}>
                        <Button 
                            onClick={props.handleBack}
                            disabled={1}
                        >
                            Back
                        </Button>
                        <Button 
                            onClick={props.handleNext}
                            disabled={!props.isLoaded}
                        >
                            Continue
                        </Button>
                    </div>
                </div>
    );
};

export default Date;