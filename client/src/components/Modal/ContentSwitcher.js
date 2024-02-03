import React from 'react';
import {CONTENT_TYPES} from "@components/Modal/modalConstants";
import ContentText from "@components/Modal/ContentText";
import ContentImage from "@components/Modal/ContentImage";
import ContentButton from "@components/Modal/ContentButton";
import ContentButtons from "@components/Modal/ContentButtons";
import ContentSvg from "@components/Modal/ContentSvg";

const ContentSwitcher = ({content}) => {
  switch (content.type) {
    case CONTENT_TYPES.TEXT:
      return <ContentText {...content} />
    case CONTENT_TYPES.IMAGE:
      return <ContentImage {...content} />
    case CONTENT_TYPES.SVG:
      return <ContentSvg {...content} />
    case CONTENT_TYPES.BUTTON:
      return <ContentButton {...content} />
    case CONTENT_TYPES.BUTTONS:
      return <ContentButtons {...content} />
    default:
      return <>Content type is wrong</>
  }
};

export default ContentSwitcher;