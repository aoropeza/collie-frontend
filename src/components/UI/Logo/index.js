import React from 'react'
import { Link } from '@reach/router'
import { Svg } from './styles'

// 1.- https://maketext.io/
// 2.- https://jakearchibald.github.io/svgomg/
// 3.- https://react-svgr.com/playground/

export const Logo = props => {
  return (
    <Link to="/">
      <Svg
        width={580.192}
        height={122.021}
        viewBox="-40.096 13.989 580.192 122.021"
        style={{
          background: '0 0'
        }}
        preserveAspectRatio="xMidYMid"
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
      >
        <defs>
          <linearGradient
            id="prefix__editing-gradow-gradient"
            x1={0}
            x2={1}
            y1={0.5}
            y2={0.5}
            gradientUnits="objectBoundingBox"
          >
            <stop offset={0} stopColor="#0009ff" />
            <stop offset={1} stopColor="#f4160f" />
          </linearGradient>
          <filter
            id="prefix__editing-gradow-filter"
            x="-100%"
            y="-100%"
            width="300%"
            height="300%"
          >
            <feFlood floodColor="#fffcd9" result="flood" />
            <feComposite
              operator="in"
              in2="SourceAlpha"
              in="flood"
              result="shadow"
            />
            <feOffset dx={-4} dy={-4} in="SourceGraphic" result="offset-1" />
            <feOffset dx={4} dy={4} in="shadow" result="offset-2" />
            <feMerge>
              <feMergeNode in="offset-2" />
              <feMergeNode in="offset-1" />
            </feMerge>
          </filter>
        </defs>
        <g filter="url(#prefix__editing-gradow-filter)">
          <path
            d="M34.5-13.25q1.66 1.22 1.66 3.81t-1.12 4.42q-1.12 1.82-3.3 3.23-4.67 3.01-12.83 3.01T6.3-3.04Q1.86-7.3 1.86-14.85q0-10.69 5.56-18.81 4.23-6.02 11.78-8.58 3.9-1.28 7.74-1.28 3.84 0 6.21.51t4.16 1.54q3.91 2.24 3.91 5.82 0 3.27-3.08 5.7-2.81 2.17-5.12 2.17-2.3 0-3.26-.32.26-2.3.26-3.8 0-1.51-.07-2.6-.06-1.08-.38-2.11-.64-2.37-2.59-2.37-1.96 0-3.91 1.83-1.95 1.82-3.61 4.89-3.78 6.98-3.78 15.24 0 3.96 2.24 6.24 2.24 2.27 7.04 2.27 3.58 0 6.98-2.37 1.47-1.02 2.56-2.37zM55.42 1.28q-14.08 0-14.08-13.25 0-9.41 5.19-15.49 5.5-6.46 15.04-6.46 6.91 0 10.43 3.2 3.52 3.2 3.52 9.92 0 10.24-5.5 16.19-5.38 5.89-14.6 5.89zm1.67-27.84q-.77 1.73-1.38 4.32-.61 2.59-1.37 6.69-.77 4.09-.77 9.15 0 1.66.54 2.75.55 1.09 2.02 1.09t2.4-.7q.93-.71 1.63-2.37 1.28-2.95 2.3-8.42 1.03-5.47 1.12-7.84.1-2.37.1-4.13 0-1.76-.51-2.91-.51-1.15-1.95-1.15t-2.4.9q-.96.89-1.73 2.62zm37.5 23.04q-1.98 4.8-8.32 4.8-3.2 0-5.25-2.24-1.66-1.86-1.66-3.97 0-4.8 2.24-15.29l4.67-24.58 12.99-1.28-6.2 32.38q-1.09 4.74-1.09 6.4 0 3.65 2.62 3.78zm20.74 0q-1.99 4.8-8.32 4.8-3.2 0-5.25-2.24-1.66-1.86-1.66-3.97 0-4.8 2.24-15.29l4.67-24.58L120-46.08l-6.21 32.38q-1.09 4.74-1.09 6.4 0 3.65 2.63 3.78zm20.8 0q-1.99 4.8-8.32 4.8-3.27 0-5.31-2.24-1.73-1.98-1.73-3.97 0-5.18 2.37-15.29l2.36-12.42 13-1.28-3.91 20.22q-1.09 4.74-1.09 6.4 0 3.65 2.63 3.78zm-9.47-38.02q0-2.49 2.08-3.84 2.08-1.34 5.08-1.34 3.01 0 4.84 1.34 1.82 1.35 1.82 3.84 0 2.5-2.02 3.78-2.01 1.28-5.02 1.28t-4.9-1.28q-1.88-1.28-1.88-3.78zm40.83 30.72q1.6 1.09 1.6 3.49 0 2.4-1.22 3.94-1.21 1.53-3.2 2.56-4.09 2.11-8.51 2.11t-7.01-.96q-2.59-.96-4.32-2.75-3.39-3.39-3.39-9.6 0-9.67 5.25-15.55 5.63-6.34 15.42-6.34 6.08 0 9.09 2.56 2.24 1.92 2.24 5.06 0 11.26-19.46 11.26-.25 1.66-.25 3.07 0 2.95 1.31 4.07t3.74 1.12q2.44 0 5.03-1.12 2.59-1.12 3.68-2.92zm-13.06-6.97q4.55 0 7.17-2.82 2.62-2.69 2.62-6.97 0-1.48-.54-2.28-.54-.8-1.63-.8-1.09 0-2.02.42-.93.42-1.89 1.82-2.36 3.2-3.71 10.63zm59.39-24.9q15.68 0 15.68 11.07 0 6.08-3.9 9.73-3.84 3.65-10.56 3.65-3.14 0-5.57-1.79-1.15-.77-1.92-1.79 4.67 0 7.14-2.85 2.46-2.85 2.46-8.42t-5.5-5.57h-1.54q-.38 0-.7.07L202.05 0h-13.89l7.87-41.92q6.85-.64 10.82-.7 3.97-.07 6.97-.07zm36.04 24.71q2.3-4.1 2.3-8.26 0-2.75-1.98-2.75-1.54 0-3.14 2.62-1.66 2.63-2.18 6.02L241.54 0l-13.25 1.28 6.53-33.92 10.56-1.28-1.16 6.46q3.14-6.46 10.18-6.46 3.71 0 5.73 1.92 2.01 1.92 2.01 5.86 0 3.93-2.59 6.43-2.59 2.49-7.01 2.49-1.92 0-2.68-.76zm27.26 19.26q-14.08 0-14.08-13.25 0-9.41 5.18-15.49 5.51-6.46 15.04-6.46 6.92 0 10.44 3.2 3.52 3.2 3.52 9.92 0 10.24-5.51 16.19-5.37 5.89-14.59 5.89zm1.66-27.84q-.76 1.73-1.37 4.32-.61 2.59-1.38 6.69-.77 4.09-.77 9.15 0 1.66.55 2.75.54 1.09 2.01 1.09 1.48 0 2.4-.7.93-.71 1.64-2.37 1.28-2.95 2.3-8.42 1.02-5.47 1.12-7.84.1-2.37.1-4.13 0-1.76-.52-2.91-.51-1.15-1.95-1.15t-2.4.9q-.96.89-1.73 2.62zM292.1 7.62q3.32-.26 5.76-4.42 1.85-3.2 3.07-9.09l5.18-26.75 12.87-1.28-5.44 28.03q-2.12 10.69-5.38 14.21-1.73 1.92-3.97 2.56-2.24.64-4.8.64-5.37 0-7.29-3.9zm15.04-49.16q0-2.49 2.08-3.84 2.08-1.34 5.08-1.34 3.01 0 4.84 1.34 1.82 1.35 1.82 3.84 0 2.5-2.02 3.78-2.01 1.28-5.02 1.28t-4.9-1.28q-1.88-1.28-1.88-3.78zm40.06 30.72q1.6 1.09 1.6 3.49 0 2.4-1.22 3.94-1.21 1.53-3.2 2.56-4.09 2.11-8.51 2.11-4.41 0-7.01-.96-2.59-.96-4.32-2.75-3.39-3.39-3.39-9.6 0-9.67 5.25-15.55 5.63-6.34 15.42-6.34 6.08 0 9.09 2.56 2.24 1.92 2.24 5.06 0 11.26-19.45 11.26-.26 1.66-.26 3.07 0 2.95 1.31 4.07t3.75 1.12q2.43 0 5.02-1.12 2.59-1.12 3.68-2.92zm-13.06-6.97q4.55 0 7.17-2.82 2.63-2.69 2.63-6.97 0-1.48-.55-2.28-.54-.8-1.63-.8-1.09 0-2.02.42-.92.42-1.88 1.82-2.37 3.2-3.72 10.63zm52.61-8.83q0 2.68-2.24 4.35-2.24 1.66-5.89 1.66-1.53 0-2.43-.45.71-1.66.93-3.74.22-2.08.22-2.66 0-2.68-1.85-2.68-1.28 0-2.72 1.6-1.44 1.6-2.66 4.09-2.69 5.76-2.69 11.59 0 3.2 1.22 4.64 1.22 1.44 3.9 1.44 3.72 0 6.66-3.08.83-.96 1.28-2.04 2.43 1.28 2.43 4.8 0 3.58-3.97 5.95-4.09 2.43-10.62 2.43-12.99 0-12.99-13.76 0-10.05 5.69-15.81 5.51-5.63 15.62-5.63t10.11 7.3zM389.5-6.4q0-1.73.9-6.08l3.39-17.28h-3.77l.25-1.92q7.68-2.3 15.11-7.94h3.07l-1.54 6.98h4.99l-.57 2.88h-4.93l-3.26 17.28q-.84 3.97-.84 5.31 0 3.07 2.69 3.71-.64 2.18-2.94 3.46-2.31 1.28-5.57 1.28-3.26 0-5.12-2.05-1.86-2.05-1.86-5.63z"
            fill="url(#prefix__editing-gradow-gradient)"
            transform="translate(43.823 104.112)"
          />
        </g>
        <style />
      </Svg>
    </Link>
  )
}