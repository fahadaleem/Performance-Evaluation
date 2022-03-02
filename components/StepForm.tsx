import { Step, Steps, useSteps } from "chakra-ui-steps";
import { Heading, Button, Flex, Container } from "@chakra-ui/react";
import { ReadingForm } from "./ReadingForm";
import { WritingForm } from "./WritingForm";
import { ConversationalForm } from "./ConversationalForm";
import { PresentationForm } from "./PresentationForm";
const steps = [
  { label: "Reading", Component: ReadingForm },
  { label: "Writing", Component: WritingForm },
  { label: "Conversational", Component: ConversationalForm },
  { label: "Presentation", Component: PresentationForm },
];

export const StepForm = () => {
  const { nextStep, prevStep, reset, activeStep } = useSteps({
    initialStep: 0,
  });
  return (
    <Container maxW="container.lg" my="7">
      <Flex flexDir="column" width="100%">
        <Steps activeStep={activeStep}>
          {steps.map(({ label, Component }, index) => (
            <Step label={label} key={label}>
              <Component />
            </Step>
          ))}
        </Steps>
        {activeStep === steps.length ? (
          <Flex px={4} py={4} width="100%" flexDirection="column">
            <Heading fontSize="2xl" textAlign="center">
              Forms is submitted, the result are given below
            </Heading>
            <Button mx="auto" mt={6} size="sm" onClick={reset}>
              Reset
            </Button>
          </Flex>
        ) : (
          <Flex width="100%" justify="flex-end">
            <Button
              isDisabled={activeStep === 0}
              mr={4}
              onClick={prevStep}
              size="sm"
              variant="ghost"
            >
              Prev
            </Button>
            <Button size="sm" onClick={nextStep}>
              {activeStep === steps.length - 1 ? "Finish" : "Next"}
            </Button>
          </Flex>
        )}
      </Flex>
    </Container>
  );
};

export default StepForm;
