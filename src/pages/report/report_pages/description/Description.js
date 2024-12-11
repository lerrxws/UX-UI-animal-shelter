import React from "react";
import styles from "./Description.module.css";
import Button from "../../../../components/button/Button";
import DragDrop from "../../../../components/DragDrop";
import InputField from "../../../../components/inputField/InputField";
import Dropdown from "../../../../components/dropDown/Dropdown";
import report from "../../Report.module.css"


const Description = (props) => {
    return (
        <div className={report.body}>
            <p className={report.annotation}>Describe your pet</p>
            <div className={styles.info}>
                <div className={styles.drag_drop_container}>
                    <DragDrop></DragDrop>
                    <p className={styles.drag_drop_description}>Add photo of found pet</p>
                </div>
                
                <div className={styles.fields_container}>
                    <div className={styles.name}>
                            <InputField label="Pet Name"></InputField>
                    </div>
                    <div className={styles.sex_gender_age}>
                        <div className={styles.dropdown_container}>
                            <Dropdown
                                label="Pet Type"
                                options={props.petOptions}
                                value={props.petType}
                                onChange={(e) => props.setPetType(e.target.value)}
                                name="petType"
                            />
                        </div>
                        
                        <div className={styles.dropdown_container}>
                            <Dropdown
                                label="Pet Type"
                                options={props.petOptions}
                                value={props.petType}
                                onChange={(e) => props.setPetType(e.target.value)}
                                name="petType"
                            />
                        </div>
                        <div className={styles.age_container}>
                            <InputField label="Age"></InputField>
                        </div>
                    </div>
                    <div className={styles.message_container}>
                            <InputField label="Message" 
                                        isMessage={true}>
                            </InputField>
                    </div>
                </div>
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
                    variant="secondary"
                >
                    Continue
                </Button>
            </div>
        </div>
    );
};

export default Description;