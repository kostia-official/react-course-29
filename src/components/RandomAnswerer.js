import React from 'react';
import _ from 'lodash';
import titles from '../data/titles.json';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

const CardContentStyled = styled(CardContent)`
  margin: 30px 30px;
`;

const CardActionsStyled = styled(CardActions)`
  display: flex;
  justify-content: space-around;
`;

const AnswerButton = styled(Button)`
  min-width: 120px;
`;

const AnswererWrapper = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export class RandomAnswerer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isShowAnswerer: false,
      title: this.generateRandomTitle(),
      answerer: this.generateRandomAnswerer(),
    };
  }

  generateRandomTitle = () => {
    return _.sample(titles);
  };

  generateRandomAnswerer = () => {
    return _.sample(this.props.answerers);
  };

  toggleIsShowAnswerer = () => {
    this.setState((state) => ({
      isShowAnswerer: !state.isShowAnswerer,
      answerer: this.generateRandomAnswerer(),
    }));
  };

  nextAnswerer = () => {
    this.setState({
      title: this.generateRandomTitle(),
      answerer: this.generateRandomAnswerer(),
    });
  };

  onAnswer = (score) => {
    if (!this.state.answerer) return;

    this.props.onAnswer(this.state.answerer.id, score);
  };

  render() {
    const { isShowAnswerer, answerer, title } = this.state;

    const answererText = answerer?.name || 'Некому отвечать';

    return (
      <Card>
        <CardContentStyled>
          <Typography variant="h6">{title}</Typography>

          <AnswererWrapper>
            {isShowAnswerer ? (
              <Typography>{answererText}</Typography>
            ) : (
              <Button size="small" onClick={this.toggleIsShowAnswerer}>
                Показать
              </Button>
            )}
          </AnswererWrapper>
        </CardContentStyled>
        <CardActionsStyled>
          <AnswerButton size="small" onClick={() => this.onAnswer(10)}>
            Правильно +10
          </AnswerButton>
          <AnswerButton size="small" onClick={() => this.onAnswer(5)}>
            С подсказкой +5
          </AnswerButton>
          <AnswerButton size="small" onClick={this.nextAnswerer}>
            Пропуск
          </AnswerButton>
        </CardActionsStyled>
      </Card>
    );
  }
}

RandomAnswerer.propTypes = {
  answerers: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
