import React from "react";
import _ from "lodash";
import titles from "../../titles.json";
import PropTypes from "prop-types";
import styled from "styled-components";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const RandomAnswererWrapper = styled.div`
  display: ${(props) => (props.isShow ? "block" : "none")};
`;

export const RandomAnswerer = ({ answerers }) => {
  const wantsToAnswer = _.sample(answerers);
  const title = _.sample(titles);

  return (
    <Card>
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        <RandomAnswererWrapper isShow={true}>
          <Typography>{wantsToAnswer.name}</Typography>
        </RandomAnswererWrapper>
      </CardContent>
    </Card>
  );
};

RandomAnswerer.propTypes = {
  answerers: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
