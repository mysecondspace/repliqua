import React from 'react'
import { useCustomQuery } from 'useCustomQuery'

import { ReactComponent as LogoLarge } from 'assets/repliqua-logo-large.svg'

import styles from './About.module.scss'

const QUERY = `
  query TeamQuery {
    allTeams {
      id
      photo {
        url
      }
      name
      jobTitle
      description
    }
  }
`

const About = ({ data: { heading, description, steps } }) => {
  const [error, data] = useCustomQuery(QUERY)

  if (error) {
    console.error(error)

    return null
  }

  const Step = ({ step: { title, description }, index }) => (
    <div>
      <div className={styles.step}>{index + 1}</div>
      <div className={styles.info}>
        <p>{title}</p>
        <span>{description}</span>
      </div>
    </div>
  )

  const Member = ({ member }) => (
    <div className={styles.member}>
      <img src={member.photo.url} alt={member.name} />
      <h3>{member.name}</h3>
      <span>{member.jobTitle}</span>
      <p>{member.description}</p>
    </div>
  )

  return (
    <section className={styles.regularPage}>
      <div className={styles.mainContainer}>
        <LogoLarge />
        <div>
          <div className={styles.regularPageContent}>
            <h1>{heading}</h1>
            <p>{description}</p>
          </div>
          <div className={styles.stepsBlock}>
            {steps.map((step, index) => (
              <Step key={step.id} step={step} index={index} />
            ))}
          </div>
          <div className={styles.teamBlock}>
            <h2>Team</h2>
            <div>
              {data.allTeams.map((member) => (
                <Member key={member.id} member={member} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
