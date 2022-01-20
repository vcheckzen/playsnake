import React, { useState } from 'react';
import StyledSpeaker from './style';
import { SvgProps, defaultSvgProps } from 'types';
import { ReactComponent as SpeakerSvg } from 'assets/speaker.svg';

interface SpeakerProps extends SvgProps {
  mute: boolean;
  onClick: (mute: boolean) => void;
}

const Speaker = (props: SpeakerProps) => {
  const [mute, setMute] = useState(props.mute);

  return (
    <StyledSpeaker
      $size={props}
      $mute={mute}
      onClick={() => {
        const m = !mute;
        props.onClick(m);
        setMute(m);
      }}
    >
      <SpeakerSvg />
    </StyledSpeaker>
  );
};

Speaker.defaultProps = {
  ...defaultSvgProps,
  width: 38,
  height: 38,
  mute: false,
  onClick: () => {},
} as SpeakerProps;
export default Speaker;
