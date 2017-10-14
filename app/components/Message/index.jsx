// @flow

import React from "react";
// import { Image } from 'semantic-ui-react';

type Props = {
  // type: string,
  title?: string,
  content: string
};

Message.defaultProps = {
  title: null,
};

export default function Message({ title, content }: Props) {
  // let icon = success;
  // if (type === 'error') {
  //   icon = error;
  // } else if (type === 'info') {
  //   icon = info;
  // }

  return (
    <div>
      {/* <Image src={icon} className="msg-icon" alt="message" /> */}
      <span className="inner-content">
        <span>{title}</span>
        <span>{content}</span>
      </span>
    </div>
  );
}
