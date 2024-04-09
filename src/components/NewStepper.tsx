import * as React from 'react';
import Image from 'next/image';

// MUI imports 
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Typography from '@mui/material/Typography';

//my imports 
import boxclosed from '../../public/boxclosed.png'
import boxopened from '../../public/boxopened.png'

const steps = ['Quem somos?', 'Por que escolher a Torabox?', 'Processo comercial'];

export default function NewStepper() {

  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState<{
    [k: number]: boolean;
  }>({});

  const [box, setBox] = React.useState(false)

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

              <Image
                className='w-32'
                onClick={() => setBox(prevMode => !prevMode)}
                src={box ? boxclosed : boxopened}
                alt="box-closed"
                priority={false}
              />
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