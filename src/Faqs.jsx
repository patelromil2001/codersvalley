import React from 'react'
import { CaretRightOutlined } from '@ant-design/icons';
import { Collapse, theme } from 'antd';
const { Panel } = Collapse;
const Faqs = () => {

  const faqs = [
    {
      id: 1,
      question: 'What is a secure code review?',
      answer: 'A secure code review is a manual or automated process that examines an applications source code.The goal of this examination is to identify any existing security flaws or vulnerabilities.',
      key: 1
    },
    {
      id: 2,
      question: 'How is a secure code review performed?',
      answer: 'A secure code review is performed using manual or automated processes (or both) to examine an applications source code. ',
      key: 2
    },
    {
      id: 3,
      question: 'Why would we want to perform a secure code review? ',
      answer: 'Reviewing your source code provides a fresh set of eyes to spot bugs and simple coding errors before your code base moves to the next step in your release process.  Reviewing your code enables you to manage vulnerabilities before releasing your application into production and improves your customers experience (and security) using your software.',
      key: 3
    },
    {
      id: 4,
      question: 'What are some benefits of conducting a code review? ',
      answer: 'The primary benefit of performing a code review early in the development process is the time saved in the long run compared to fixing bugs identified after releasing the software to your customers. Locating and fixing flaws and vulnerabilities after a hacker successfully executes a cyberattack could cost you and your customers a lot of money and damage your and their reputation. Code reviews standardize security across your code base, improving your release management process.',
      key: 4
    },
    {
      id: 5,
      question: 'What is a manual code review? ',
      answer: 'A manual code review involves thoroughly reviewing the entire codebase by a senior or more experienced developer. This process can be extremely tedious and time-consuming, but it identifies flaws, such as business logic problems that automated tools may miss.',
      key: 5
    },
    {
      id: 6,
      question: 'What is an automated code review?',
      answer: 'An automated code review enables large codebases to be quickly and efficiently analyzed. The review is performed using either open source or commercial tools to help find vulnerabilities in real-time.',
      key: 6
    },
    {
      id: 7,
      question: 'What are some code review best practices? ',
      answer: 'Some best practices we recommend when performing a secure code review are : ●	Create a comprehensive Secure Code Review Checklist  ●	Review continually ●	Use Threat Modeling ●	Utilize automation tools to save time (but dont rely on automation to do everything for you) ●	Draw upon the expertise of an Application Security Professional ●	Validate your input and output ●	Enforce Least Privilege.',
      key: 7
    },

  ]


  const { token } = theme.useToken();
  const panelStyle = {
    
    marginBottom: 24,
    background: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: 'none',
  };
  return (
    <div id='faqs' className='faqs'>
      <div className=" bg-amber-100 rounded-2xl lg:mx-64 lg:my-10 py-2 lg:py-3"><center><span className="text-5xl font-semibold">FAQS</span></center></div>
      <div className='lg:px-64'>
        <Collapse
          bordered={false}
          defaultActiveKey={['']}
          expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
          style={{
            background: token.colorBgContainer,
          }}
        >
          {
            faqs.map((faqs) =>
              <Panel className='font-bold' header={faqs.question} key={faqs.key} style={panelStyle}>
                <p className='font-normal'>{faqs.answer}</p>
              </Panel>
            )
          }

        </Collapse>
      </div>

    </div>

  );
}

export default Faqs;
