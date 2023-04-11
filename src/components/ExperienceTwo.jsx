import React from 'react'

export const ExperienceTwo = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto md:grid sm:grid grid">
        <div>
          <h2 className="md:text-3xl sm:text-2xl text-xl font-bold sm:px-8 px-6 text-center sm:text-right">
            Infosys (Jan '22 - Jul '22)
          </h2>
          <ul className="py-6 list-disc px-12 sm:text-lg md:text-xl">
            <li className="py-2">
              At Infosys I worked on three different projects, all of them being
              Agile-based. I had the role of an Automation Tester in all three.
            </li>
            <li className="py-2">
              As an automation tester, I had to analyze requirements, think of
              logic for automation, and then develop a working code. using the
              developed piece of code, carrying out tests on the application,
              and reporting observations.
            </li>
            <li className="py-2">
              Demoing the developed code and test results to the client and team
              members. And implementing any suggested changes.
            </li>
            <li className="py-2">
              Creating an apt document to explain the developed automation code
              and the ways to use it. This document got used during Knowledge
              Transfer sessions.
            </li>
            <li className="py-2">
              Co-Developed a framework for an application for one of the
              projects, along with my teammates. Opted for a Hybrid framework
              (Data-driven as well as Keyword-driven). Automated the core
              functionalities of the application, which took test data from
              Excel sheets, and the flow of methods to be executed was decided
              from Excel sheets as well. These automated functionalities would
              later be used to develop complex functional flows. Formulated an
              apt design for the Datasheet and Keyword sheet (sheets that will
              be used to trigger different test methods and will be the source
              of data for the tests).
            </li>
            <li className="py-2">
              Solely created a tool that was used to raise accesses for
              newcomers. The tool used Java Swing for the UI, Java for logic,
              and Selenium for automation. It fetched data from Excel sheets and
              automated the process of raising access for a user from various
              portals.
            </li>
            <li className="py-2">
              Fetch Data from the database (as a part of database validation) by
              firing SQL queries in Rumba Mainframe and IBM Data Studio
            </li>
            <li className="py-2">
              Creating and firing complex SQL queries as and when required for
              testing.
            </li>
            <li className="py-2">
              Logging and tracking defects in the project management tool Rally.
            </li>
            <li className="py-2">
              Using Splunk to check logs as a part of testing.
            </li>
            <li className="py-2">
              Carrying out API testing in SOAP UI and POSTMAN.
            </li>
            <li className="py-2">
              Conducting Knowledge Transfer sessions for new comers.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
