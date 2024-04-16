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
import MyCard from "./MyCard";

const steps = [
  {
    text: "Quem somos?",
    title: "Quem somos?",
    description:
      "Somos uma equipe de programadores motivados e dedicados, prontos para te ajudar a desenvolver soluções tecnológicas sob medida, que impulsionem o seu negócio e atendam às suas necessidades específicas.",
    value: 0,
  },
  {
    text: "Por que a Torabox?",
    title: "title 02",
    description:
      "02 Lorem ipsum dolor sit amet. Aut voluptas quisquam in consequatur iusto ad voluptas accusantium. Et voluptas modi ea facere nihil sit maiores nemo sed sint consectetur cum velit dolorum.Non cupiditate enim ut voluptatem nulla qui dignissimos nostrum et voluptatem perferendis. Ad laborum placeat et earum doloribus vel soluta voluptatem ab dolorem distinctio est maxime rerum? Quo soluta eaque ea omnis ipsam vel dicta sapiente qui dolor porro.Ab illo numquam eos rerum totam sit suscipit harum. Est tenetur quia est laborum reiciendis aut sequi sint qui iste ipsa id aliquid minima sit ipsum corporis. Quo impedit enim et ratione incidunt ut voluptatibus corrupti id delectus quia sit dolorem animi",
    value: 1,
  },
  {
    text: "Processo comercial",
    title: "title 03",
    description:
      "03 Lorem ipsum dolor sit amet. Aut voluptas quisquam in consequatur iusto ad voluptas accusantium. Et voluptas modi ea facere nihil sit maiores nemo sed sint consectetur cum velit dolorum.Non cupiditate enim ut voluptatem nulla qui dignissimos nostrum et voluptatem perferendis. Ad laborum placeat et earum doloribus vel soluta voluptatem ab dolorem distinctio est maxime rerum? Quo soluta eaque ea omnis ipsam vel dicta sapiente qui dolor porro.Ab illo numquam eos rerum totam sit suscipit harum. Est tenetur quia est laborum reiciendis aut sequi sint qui iste ipsa id aliquid minima sit ipsum corporis. Quo impedit enim et ratione incidunt ut voluptatibus corrupti id delectus quia sit dolorem animi",
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
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        maxWidth: "100%",
        alignItems: "center",
        justifyContent: "center",
        gap: 6,
      }}
    >
      <Stepper
        nonLinear
        activeStep={activeStep}
        sx={{ display: "flex", flexWrap: "wrap", gap: 5 }}
      >
        {steps.map((step, index) => (
          <Step key={step.text} completed={completed[index]}>
            <StepButton
              onClick={handleStep(index)}>
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
            </StepButton>
          </Step>
        ))}
      </Stepper>

      <div className='flex items-center justify-center'>
        <React.Fragment>
          {activeStep === 0 ? (
            <MyCard title={steps[0].title} text={steps[0].description} />
          ) : activeStep === 1 ? (
            <MyCard title={steps[1].title} text={steps[1].description} />
          ) : (
            <MyCard title={steps[2].title} text={steps[2].description} />
          )}
        </React.Fragment>
      </div>
    </Box >
  );
}
