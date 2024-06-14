import React from 'react';

const ColourSelector = (props) => {
  const { config, selectNextBackground } = props
  const { background } = config;
  return (
   // <button className={props.config.classname} onClick={() => selectNextBackground({background: props.config.background})}>
   <button   data-testid={props.config.key} className={props.config.classname} onClick={() => selectNextBackground(props.config.background)}>
      {props.config.label}
    

    </button>
  )
}
export default ColourSelector;
