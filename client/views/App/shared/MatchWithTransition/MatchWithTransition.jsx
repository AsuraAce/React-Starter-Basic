import React, { PropTypes } from 'react';
import { TransitionMotion, spring } from 'react-motion';
import { Match } from 'react-router';

const styles = {};

styles.fill = {
  height: '100%',
  width: '100%',
  position: 'absolute',
};

const transitions = {
  'show-from-right': {
    atEnter: {
      opacity: 0,
      scaleDown: 0.7,
      offset: 100,
      transZ: 0,
    },
    atLeave: {
      opacity: spring(0),
      scaleDown: spring(0.7),
      offset: spring(-100),
      transZ: spring(-500),
    },
    atActive: {
      opacity: spring(1),
      scaleDown: spring(1),
      offset: spring(0),
      transZ: spring(0),
    },
    mapStyles: styles => ({
      opacity: styles.opacity,
      transform: `translateX(${styles.offset}%) scale(${styles.scaleDown}) translateZ(${styles.transZ}px)`,
    }),
  },
};

const MatchWithTransition = (props) => {
  const { component: Component, ...rest } = props;
  const willEnter = () => ({ ...transitions['show-from-right'].atEnter });
  const willLeave = () => ({ ...transitions['show-from-right'].atLeave });

  return (
    <Match {...rest} children={({ matched, ...props }) => (
      <TransitionMotion
        willEnter={willEnter}
        willLeave={willLeave}
        styles={matched ? [{
          key: location.pathname,
          style: { ...transitions['show-from-right'].atActive },
          data: props,
        }] : []}
      >
        {interpolatedStyles => (
          <div>
            {interpolatedStyles.map(config => (
              <div
                key={config.key}
                style={{ ...styles.fill, ...transitions['show-from-right'].mapStyles(config.style) }}
              >
                <Component {...config.data} />
              </div>
            ))}
          </div>
        )}
      </TransitionMotion>
    )}
    />
  );
};

MatchWithTransition.propTypes = {
  component: PropTypes.func.isRequired,
};


export default MatchWithTransition;
