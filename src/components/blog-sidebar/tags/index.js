import React from 'react'
import {FormattedMessage, IntlContextConsumer } from "gatsby-plugin-react-intl"
import TagMt from '../tag-mt'
import {useAllTagEN} from "../../../hooks/query/allTag/EN"
import {useAllTagFR} from "../../../hooks/query/allTag/FR"

const Tag = ({tagues}) =>
(
    <div class="col-lg-12 col-md-12">
    <div class="blog-tags mt-50 rounded">
        <div class="title mb-25">
            <h4><FormattedMessage id="tags"/></h4>
        </div> 
        {tagues && tagues.map(tague => {
                return(
                    <TagMt tague = {tague} key={tague.id} />
                )
            })}
    </div> 
</div>
)

const Tags = () => {
  
    const taguesEN = useAllTagEN()
    const taguesFR = useAllTagFR()
  
    return (
      <IntlContextConsumer>
        {({ language: currentLocale }) =>
          currentLocale === 'fr' ? <Tag tagues={taguesFR} /> : <Tag tagues={taguesEN} />}
      </IntlContextConsumer>
    )
  }

export default Tags
