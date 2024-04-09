import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const steps = ['Quem somos?', 'Por que escolher a Torabox?', 'Processo comercial'];

export default function NewStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState<{
    [k: number]: boolean;
  }>({});

  const totalSteps = () => {
    return steps.length;
  };

  const handleStep = (step: number) => () => {
    setActiveStep(step);
  };



  return (
    <Box sx={{ width: '100%' }}>
      <Stepper nonLinear activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={label} completed={completed[index]}>
            <StepButton color="inherit" onClick={handleStep(index)}>
              {label}
            </StepButton>
          </Step>
        ))}
      </Stepper>
      <div>
        <React.Fragment>

          {activeStep === 0 ?
            (<Typography sx={{ mt: 2, mb: 1, py: 1 }}>
              Step {activeStep + 1} - texto 1
            </Typography>)

            : (activeStep === 1) ? (<Typography sx={{ mt: 2, mb: 1, py: 1 }}>
              Step {activeStep + 1} - texto 2
            </Typography>) : (

              <Typography sx={{ mt: 2, mb: 1, py: 1 }}>
                Step {activeStep + 1} - texto 3
              </Typography>
            )}

        </React.Fragment>
      </div>
    </Box>
  );
}