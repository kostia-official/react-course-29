import React from 'react';
import _ from 'lodash';
import titles from '../data/titles.json';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';

const CardContentStyled = styled(CardContent)`
  margin: 30px 0;
`;

const AnswererWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
`;

const CardActionsStyled = styled(CardActions)`
  display: flex;
  justify-content: space-around;
`;

const ButtonStyled = styled(Button)`
  min-width: 110px;
`;

export class RandomAnswerer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isShowAnswerer: false,
      answerer: this.generateRandomAnswerer(),
      title: this.generateRandomTitle(),
    };
  }

  generateRandomAnswerer = () => {
    return _.sample(this.props.answerers);
  };

  generateRandomTitle = () => {
    return _.sample(titles);
  };

  toggleIsShowAnswerer = () => {
    this.setState((state) => ({
      isShowAnswerer: !state.isShowAnswerer,
      answerer: this.generateRandomAnswerer(),
    }));
  };

  nextAnswerer = () => {
    this.setState({
      answerer: this.generateRandomAnswerer(),
      title: this.generateRandomTitle(),
    });
  };

  onAnswer = (score) => () => {
    if (!this.state.answerer) return;

    this.props.onAnswer(this.state.answerer.id, score);
  };

  render() {
    const { isShowAnswerer, title, answerer } = this.state;
    const answererLabel = answerer?.name || 'Никого нет чтобы ответить :(';

    return (
      <Card>
        <CardContentStyled>
          <Typography variant="h6">{title}</Typography>
          <AnswererWrapper>
            {isShowAnswerer ? (
              <Typography>{answererLabel}</Typography>
            ) : (
              <Button size="small" onClick={this.toggleIsShowAnswerer}>
                Показать
              </Button>
            )}
          </AnswererWrapper>
        </CardContentStyled>
        <CardActionsStyled>
          <ButtonStyled size="small" onClick={this.onAnswer(10)}>
            Правильно +10
          </ButtonStyled>
          <ButtonStyled size="small" onClick={this.onAnswer(5)}>
            С подсказкой +5
          </ButtonStyled>
          <ButtonStyled size="small" onClick={this.nextAnswerer}>
            Пропуск
          </ButtonStyled>
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
