import React from 'react'
import styled from 'styled-components'
import {FaUniversity} from 'react-icons/fa'
import {FlagIcon} from 'react-flag-kit'
import SectionTitle from '../sectionTitle'

const Education = ({ title, siteConfig, className}) => {
  return (
    <div className={className}>
      <SectionTitle
        title={title}
        name="education"
        icon={<FaUniversity size={28}/>}
      />
      <div className="education__content">
        {siteConfig.education &&
          siteConfig.education.map((edu, idx) => (
            <React.Fragment key={`${edu.field}_${edu.degree}`}>
              <div className="education__edu">
                <div className="education__edu-header">
                  <span className="education__edu-studies">
                    {edu.degree}, {edu.field}
                  </span>
                  <span className="education__edu-date">
                    {edu.startYear} - {edu.endYear || 'Aujourd\'hui'}
                  </span>
                </div>
                <span
                  className="education__edu-school">{edu.additionalInfo && (edu.additionalInfo + " - ")}
                  <a href={edu.link} target="_blank" rel="noopener noreferrer">{edu.school}</a>
                </span>
              </div>
              {idx < siteConfig.education.length - 1 && <hr/>}
            </React.Fragment>
          ))}
        {siteConfig.languages.list && (
          <React.Fragment>
            <h3>{siteConfig.languages.title}</h3>
            <ul>
              {siteConfig.languages.list.map(({code, language, level}) => (
                <li className="education__lang_li" key={`${code}-${language}`}>
                  <div className="education__lang">
                    {code && (
                      <FlagIcon
                        className="education__lang__flag"
                        code={code}
                        size={18}
                      />
                    )}
                    <div
                      className={code ? '' : 'education__lang__text--noflag'}
                    >
                      <strong>{language}:</strong> {level}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </React.Fragment>
        )}
      </div>
    </div>
  )
}

export default styled(Education)`
  position: relative;
  .education__content {
    margin-bottom: 40px;
  }
  
  .education__edu {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }
  .education__edu-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .education__edu-studies {
    font-weight: bold;
  }
  .education__edu-date {
    color: #bbb;
    font-size: 10px;
    min-width: 60px;
  }
  .education__edu-school {
    font-size: 16px;
    font-style: italic;
  }
  .education__edu-school a {
    color: #4F657D;
     text-decoration: none;
     font-style: normal;
     transition : color 0.5s;
  }
  .education__edu-school a:visited {
    
  }
  .education__edu-school a:hover {
    color : #758EA9;
  }
  .education__lang_li {
    list-style: none;
  }
  .education__lang {
    display: flex;
    align-items: center;
  }
  .education__lang__flag {
    margin: 0;
    margin-right: 6px;
  }
  .education__lang__text--noflag {
    margin-left: 24px;
  }
`