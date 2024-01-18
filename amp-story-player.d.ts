import React from 'react';

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'amp-story': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}