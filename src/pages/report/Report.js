
import Breadcrumb from "../../components/bacicBreadcrumb/BasicBreadcrumbs";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { useRef, useState, useEffect } from "react";
import styles from "./Report.module.css";
import Date from './report_pages/date/Date';
import Description from './report_pages/description/Description';
import Location from "./report_pages/location/Location";
import Success from "./report_pages/success/Success";

import { useMediaQuery, useTheme } from '@mui/material';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import { ColorlibConnector, ColorlibStepIcon } from './ColorlibStepComponents';

import { petOptions } from "../../constants/index";



function Report() {
    const stepperRef = useRef(null);
    const [formData, setFormData] = useState({
        dateOfBirth: "",
    });
    const [petType, setPetType] = useState('');
    const [activeStep, setActiveStep] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

    useEffect(() => {
        setTimeout(() => {
            setIsLoaded(true);
        }, 1000);
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    const steps = [
        {
            label: 'Date',
            content: (
                <Date
                    isLoaded={isLoaded}
                    handleBack={handleBack}
                    handleNext={handleNext}
                />
              ),
        },
        {
            label: 'Location',
            content: (
                <Location
                    isLoaded={isLoaded}
                    handleBack={handleBack}
                    handleNext={handleNext}
                />
              ),
        },
        {
            label: 'Description',
            content: (
                <Description
                    petOptions={petOptions}
                    petType={petType}
                    setPetType={setPetType}
                    handleBack={handleBack}
                    handleNext={handleNext}
                    isLoaded={isLoaded}
                />
              ),
        },
        {
            label: 'Success',
            content: (
                <Success
                    isLoaded={isLoaded}
                    handleBack={handleBack}
                    handleNext={handleNext}
                />
              ),
        },
    ];

    return (
        <div className={styles.report}>
            <Header />
            <Breadcrumb />
            <div className={styles.main}>
                <Stepper 
                    activeStep={activeStep} 
                    orientation={isSmallScreen ? 'vertical' : 'horizontal'}
                    alternativeLabel={!isSmallScreen}
                    connector={<ColorlibConnector />}
                >
                    {steps.map((step, index) => (
                        <Step key={step.label}>
                            <StepLabel StepIconComponent={ColorlibStepIcon}>{step.label}</StepLabel>
                            {isSmallScreen && (
                                <StepContent>
                                    {/* <Typography>{step.description}</Typography> */}
                                    {step.content}
                                </StepContent>
                            )}
                        </Step>
                    ))}
                </Stepper>

                {/* Navigation section for horizontal layout */}
                {!isSmallScreen && (
                    <div>
                        {steps[activeStep].content}
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
}


export default Report;
