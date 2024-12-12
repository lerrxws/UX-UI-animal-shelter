import React from "react";
import styles from "./Success.module.css";
import Button from "../../../../components/button/Button";
import report from "../../Report.module.css"
import submit from '../../../../assets/submitting.png';


const Success = (props) => {
    return (
        <div className={report.body}>
                    <p className={report.annotation}>Thanks For Submitting</p>
                    <div className={styles.submit}>
                        <p>We got your request! Our team will review it and reach out soon.</p>
                        <img className= {styles.img} src={submit} alt=''></img>
                    </div>
                    <div className={report.button_container}>
                        <Button 
                            onClick={props.handleBack}
                            // disabled={1}
                        >
                            Back
                        </Button>
                        <Button 
                            onClick={props.handleNext}
                            variant="secondary"
                            // disabled={1}
                        >
                            Finish
                        </Button>
                    </div>
                </div>
    );
};

export default Success;