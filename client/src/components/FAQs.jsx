import React from "react";
import { Accordion } from "flowbite-react";

const FAQs = () => {
  return (
    <div className="lg:mx-20 sm:mx-5">
        <h5 className="p-2 text-lg font-semibold">FAQs :</h5>
      <Accordion>
        <Accordion.Panel>
          <Accordion.Title>
            Q: How do I create an account on MindQuest?
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              A: If you are a new student , you can use the button at the top of
              the page that says "Get Started As A Student" If you are a new
              Teacher , you can use the button at the top of the page that says
              " Get Started As A Teacher"
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>
            Q: Is there any new features that will be added to MindQuest?
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              A: Yes we will share our "Coming Soon" features before the end of
              June/2024
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>Q: How do I add a courses?</Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              A: If you are a new teacher who wants to share their courses for
              the same time , you have to sign up as a teacher first and then
              navigate to the "Create New Course" page found in the navbar , Add
              the required information and there you go you have shared your
              first course on MindQuest. Congratulations{" "}
            </p>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </div>
  );
};

export default FAQs;
