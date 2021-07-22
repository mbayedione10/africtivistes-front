import React from "react"
import { IntlContextConsumer, changeLocale } from "gatsby-plugin-react-intl"

const languageName = {
  fr: "Français",
  en: "English",
}

const Switchlanguage = ({translation}) => {
  return (
      <IntlContextConsumer>
        {({ languages, language: currentLocale }) =>
          languages.map(language => (
            <a
              role="button"
              index={0}
              href={translation !== '' ? translation : `/`}
              key={language}
              onClick={() => changeLocale(language)}
              style={{
                color: currentLocale === language ? `` : `#a63117`,
                margin: 10,
                textDecoration: `underline`,
                cursor: `pointer`,
              }}
            >
              {languageName[language]}
            </a>
          ))
        }
      </IntlContextConsumer>
  )
}

export default Switchlanguage