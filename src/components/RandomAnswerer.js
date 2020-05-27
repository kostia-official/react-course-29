import React from "react";
import _ from "lodash";
import titles from "../titles.json";
import PropTypes from "prop-types";

export const RandomAnswerer = ({ answerers }) => {
  const wantsToAnswer = _.sample(answerers);
  const title = _.sample(titles);

  return (
    <div>
      <h2>{title}</h2>
      <p>{wantsToAnswer.name}</p>
    </div>
  );
};

RandomAnswerer.propTypes = {
  answerers: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};
