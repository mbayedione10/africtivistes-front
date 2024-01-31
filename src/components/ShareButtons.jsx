import React from 'react'

import {
    FacebookShareButton,
    FacebookIcon,
    LinkedinShareButton,
    LinkedinIcon,
    TwitterShareButton,
    TwitterIcon,
    WhatsappShareButton,
    WhatsappIcon,
    EmailShareButton,
    EmailIcon
} from 'react-share'
import { FormattedMessage } from 'gatsby-plugin-react-intl'

const ShareButtons = ({ title, url, twitterHandle, tags }) => {

    return (
        <div>
            
            <FormattedMessage id="share" />
            <FacebookShareButton className='ml-2 mr-1' url={url} >
                <FacebookIcon size={40} round={true} />
            </FacebookShareButton>
        
            <TwitterShareButton className='mr-1' url={url} title={title} via={twitterHandle} hashtags={tags}>
                <TwitterIcon size={40} round={true} />
            </TwitterShareButton>

            <LinkedinShareButton className='mr-1' url={url} >
                <LinkedinIcon size={40} round={true} />
            </LinkedinShareButton>

            <EmailShareButton className='mr-1' url={url} >
                <EmailIcon size={40} round={true} />
            </EmailShareButton>

            <WhatsappShareButton className='mr-1' url={url} title={title}>
                <WhatsappIcon size={40} round={true} />
            </WhatsappShareButton>
        </div>
    )

}
export default ShareButtons