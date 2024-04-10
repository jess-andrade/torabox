import Image from "next/image";
import React, { useContext } from "react";

// MUI imports
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";

//my imports
import boxclosed from "../../public/boxclosed.png";
import boxopened from "../../public/boxopened.png";

const steps = [
  {
    text: "Quem somos?",
    value: 0,
  },
  {
    text: "Por que a Torabox?",
    value: 1,
  },
  {
    text: "Processo comercial",
    value: 2,
  },
];

export default function NewStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState<{
    [k: number]: boolean;
  }>({});

  const [box, setBox] = React.useState(false);

  const totalSteps = () => {
    return steps.length;
  };

  const handleStep = (step: number) => () => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper nonLinear activeStep={activeStep}>
        {steps.map((step, index) => (
          <Step key={step.text} completed={completed[index]}>
            <StepButton color="inherit" onClick={handleStep(index)}>
              <Button>
                {activeStep == step.value ? (
                  <Image
                    className="w-32"
                    onClick={() => setBox((prevMode) => !prevMode)}
                    src={boxopened}
                    alt="box-closed"
                    priority={false}
                  />
                ) : (
                  <Image
                    className="w-32"
                    onClick={() => setBox((prevMode) => !prevMode)}
                    src={boxclosed}
                    alt="box-closed"
                    priority={false}
                  />
                )}

                {step.text}
              </Button>
            </StepButton>
          </Step>
        ))}
      </Stepper>
      <div>
        <React.Fragment>
          {activeStep === 0 ? (
            <Typography sx={{ mt: 2, mb: 1, py: 1 }}>
              Step {activeStep + 1} - texto 1
            </Typography>
          ) : activeStep === 1 ? (
            <Typography sx={{ mt: 2, mb: 1, py: 1 }}>
              Step {activeStep + 1} - texto 2
            </Typography>
          ) : (
            <Typography sx={{ mt: 2, mb: 1, py: 1 }}>
              Step {activeStep + 1} - texto 3
            </Typography>
          )}
        </React.Fragment>
      </div>
    </Box>
  );
}
