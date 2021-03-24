import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';

function Background(props: any) {
  return (
    <LinearGradient
      colors={['#58c323', '#3fc38b', '#21a1c6']}
      style={{ flex: 1 }}
    >
      {props.children}
    </LinearGradient>
  );
}

export default Background;