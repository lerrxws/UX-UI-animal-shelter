import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import Breadcrumb from "../components/BasicBreadcrumbs";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Stepper } from 'primereact/stepper';
import { StepperPanel } from 'primereact/stepperpanel';
import { useRef, useState } from "react";
import styles from "./styles/Report.module.css";
import DatePickerComponent from '../components/DatePicker';
import DragDrop from '../components/DragDrop';
import InputField from '../components/InputField';
import { style } from '@mui/system';
import Dropdown from '../components/Dropdown';
import LocationPicker from '../components/LocationPicker'
import submit from '../assets/submitting.png'

function Report() {
    const stepperRef = useRef(null);
    const [formData, setFormData] = useState({
        dateOfBirth: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const [petType, setPetType] = useState('');
    const petOptions = [
      { value: 'dog', label: 'Dog' },
      { value: 'cat', label: 'Cat' },
      { value: 'bird', label: 'Bird' },
      { value: 'other', label: 'Other' },
    ];

    return (
        <div className={styles.report}>
            <Header />
            <Breadcrumb />
            <div className={styles.main}>
                <Stepper ref={stepperRef} className={styles.stepper}>
                    {/* Step 1: Date */}
                    <StepperPanel header="Date">
                        <div className={styles.body}>
                        <p className={styles.annotation}>When did your pet go missing?</p>
                            <div className={styles.date}>
                                <DatePickerComponent></DatePickerComponent>
                            </div>
                            <div className={styles.button_container}>
                                <Button 
                                    className={styles.button} 
                                    onClick={() => stepperRef.current.prevCallback()}
                                >
                                    Back
                                </Button>
                                <Button 
                                    className={styles.button} 
                                    onClick={() => stepperRef.current.nextCallback()}
                                >
                                    Next
                                </Button>
                            </div>
                        </div>
                    </StepperPanel>

                    {/* Step 2: Details */}
                    <StepperPanel header="Details">
                    <div className={styles.body}>
                        <p className={styles.annotation}>Where did your pet get lost?</p>
                            <div className={styles.date}>
                                <LocationPicker></LocationPicker>
                            </div>
                            <div className={styles.button_container}>
                                <Button 
                                    className={styles.button} 
                                    onClick={() => stepperRef.current.prevCallback()}
                                >
                                    Back
                                </Button>
                                <Button 
                                    className={styles.button} 
                                    onClick={() => stepperRef.current.nextCallback()}
                                >
                                    Next
                                </Button>
                            </div>
                        </div>
                    </StepperPanel>

                    {/* Step 3 */}
                    <StepperPanel header="Additional Info">
                        <div className={styles.body}>
                            <p className={styles.annotation}>Describe your pet</p>
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
                                                options={petOptions}
                                                value={petType}
                                                onChange={(e) => setPetType(e.target.value)}
                                                name="petType"
                                            />
                                        </div>
                                        
                                        <div className={styles.dropdown_container}>
                                            <Dropdown
                                                label="Pet Type"
                                                options={petOptions}
                                                value={petType}
                                                onChange={(e) => setPetType(e.target.value)}
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
                            <div className={styles.button_container}>
                                <Button 
                                    className={styles.button} 
                                    onClick={() => stepperRef.current.prevCallback()}
                                >
                                    Back
                                </Button>
                                <Button 
                                    className={styles.button} 
                                    onClick={() => stepperRef.current.nextCallback()}
                                >
                                    Next
                                </Button>
                            </div>
                        </div>
                    </StepperPanel>

                    {/* Step 4: Confirmation */}
                    <StepperPanel header="Confirmation">
                    <div className={styles.body}>
                        <p className={styles.annotation}>Thanks For Submitting</p>
                            <div className={styles.submit}>
                                <p>We got your request! Our team will review it and reach out soon.</p>
                                <img src={submit} alt=''></img>
                            </div>
                            <div className={styles.button_container}>
                                <Button 
                                    className={styles.button} 
                                    onClick={() => stepperRef.current.prevCallback()}
                                >
                                    Back
                                </Button>
                                <Button 
                                    className={styles.button} 
                                    onClick={() => stepperRef.current.nextCallback()}
                                >
                                    Next
                                </Button>
                            </div>
                        </div>
                    </StepperPanel>
                </Stepper>
            </div>
            <Footer />
        </div>
    );
}

const Button = ({ startIcon: StartIcon, children, variant, onClick }) => {
    return (
        <button
            className={`${styles.button} ${variant === "secondary" ? styles.button_secondary : ""}`}
            onClick={onClick} // Add the onClick handler here
        >
            {StartIcon && <StartIcon className={styles.icon} />}
            {children}
        </button>
    );
};

export default Report;
