import React from "react";
import styles from "./Location.module.css";
import LocationPicker from "../../../../components/locationPicker/LocationPicker";
import Button from "../../../../components/button/Button";
import report from "../../Report.module.css"


const Location = (props) => {
    return (
        <div className={report.body}>
                    <p className={report.annotation}>Where did your pet get lost?</p>
                    <div className={styles.location}>
                    <LocationPicker></LocationPicker>
                  </div>
                  <div className={report.button_container}>
                        <Button 
                            onClick={props.handleBack}
                            disabled={!props.isLoaded}
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

export default Location;